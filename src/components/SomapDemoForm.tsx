"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Send, CheckCircle2, ShieldCheck, Sparkles, Building, Mail, User } from "lucide-react";

interface SomapDemoFormProps {
  initialDeployment?: string;
}

export default function SomapDemoForm({ initialDeployment }: SomapDemoFormProps) {
  const t = useTranslations("SomapPage.form");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    challenge: "routing",
    deployment: initialDeployment || "managed",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Listen for custom event if an edition card CTA is clicked
  useEffect(() => {
    const handleSelectEdition = (e: CustomEvent<string>) => {
      if (e.detail) {
        setFormData((prev) => ({ ...prev, deployment: e.detail }));
      }
    };

    window.addEventListener("somap-select-edition" as any, handleSelectEdition);
    return () => {
      window.removeEventListener("somap-select-edition" as any, handleSelectEdition);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.organization) {
      setErrorMessage("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    setErrorMessage("");
    setStatus("submitting");

    try {
      // Disparo direto em background para soliveira796@gmail.com via FormSubmit.co
      const response = await fetch("https://formsubmit.co/ajax/soliveira796@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `[Demonstração SOMAP] Nova solicitação de ${formData.name} (${formData.organization})`,
          "Nome Completo": formData.name,
          "E-mail Corporativo": formData.email,
          "Organização / Empresa": formData.organization,
          "Desafio Principal": formData.challenge,
          "Preferência de Implantação": formData.deployment,
          "Mensagem / Detalhes": formData.message || "Nenhum detalhe adicional informado.",
          _template: "table",
          _captcha: "false",
        }),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        throw new Error("Falha no serviço de entrega.");
      }
    } catch (err) {
      // Fallback em caso de bloqueador de requisição ou offline
      console.warn("Disparo automático bloqueado ou offline, acionando cliente de email:", err);
      setStatus("success");
      const subject = encodeURIComponent(`[Demonstração SOMAP] Solicitação - ${formData.organization}`);
      const body = encodeURIComponent(
        `Nome: ${formData.name}\n` +
        `E-mail: ${formData.email}\n` +
        `Organização: ${formData.organization}\n` +
        `Desafio Principal: ${formData.challenge}\n` +
        `Preferência de Implantação: ${formData.deployment}\n\n` +
        `Mensagem:\n${formData.message || "Nenhuma mensagem adicional informada."}`
      );
      window.location.href = `mailto:soliveira796@gmail.com?subject=${subject}&body=${body}`;
    }
  };

  const handleReset = () => {
    setStatus("idle");
    setFormData({
      name: "",
      email: "",
      organization: "",
      challenge: "routing",
      deployment: "managed",
      message: "",
    });
  };

  if (status === "success") {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-border shadow-xl text-center">
        <div className="w-16 h-16 bg-teal/10 text-teal rounded-2xl flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-navy mb-3">
          {t("success_title")}
        </h3>
        <p className="text-text-muted text-base leading-relaxed max-w-md mx-auto mb-8">
          {t("success_message")}
        </p>
        <div className="p-4 bg-bg-alt rounded-2xl text-xs text-text-muted mb-8 border border-border max-w-md mx-auto text-left">
          <p className="font-semibold text-navy mb-1 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-teal" /> Resumo do Lead:
          </p>
          <p><strong>Organização:</strong> {formData.organization}</p>
          <p><strong>Edição:</strong> {formData.deployment.toUpperCase()}</p>
          <p><strong>Contato:</strong> {formData.email}</p>
        </div>
        <button
          type="button"
          onClick={handleReset}
          className="inline-flex items-center gap-2 text-sm font-bold text-teal hover:text-teal-light transition-colors cursor-pointer"
        >
          {t("send_another")}
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-8 sm:p-12 border border-border shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-40 h-40 bg-teal/5 rounded-full blur-2xl pointer-events-none" />

      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-teal/10 text-teal rounded-full text-xs font-bold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          Apresentação Técnica Exclusiva
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight mb-2">
          {t("title")}
        </h3>
        <p className="text-text-muted text-sm sm:text-base leading-relaxed">
          {t("subtitle")}
        </p>
      </div>

      {errorMessage && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Nome */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">
              {t("name_label")}
            </label>
            <div className="relative">
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={t("name_placeholder")}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-bg-alt/40 focus:bg-white focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all text-sm text-navy placeholder:text-text-muted/60 outline-none"
              />
              <User className="w-4 h-4 text-text-muted absolute left-3.5 top-3.5" />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">
              {t("email_label")}
            </label>
            <div className="relative">
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder={t("email_placeholder")}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-bg-alt/40 focus:bg-white focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all text-sm text-navy placeholder:text-text-muted/60 outline-none"
              />
              <Mail className="w-4 h-4 text-text-muted absolute left-3.5 top-3.5" />
            </div>
          </div>
        </div>

        {/* Empresa */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">
            {t("org_label")}
          </label>
          <div className="relative">
            <input
              type="text"
              required
              value={formData.organization}
              onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
              placeholder={t("org_placeholder")}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-bg-alt/40 focus:bg-white focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all text-sm text-navy placeholder:text-text-muted/60 outline-none"
            />
            <Building className="w-4 h-4 text-text-muted absolute left-3.5 top-3.5" />
          </div>
        </div>

        {/* Desafio e Implantação */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">
              {t("challenge_label")}
            </label>
            <select
              value={formData.challenge}
              onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-border bg-bg-alt/40 focus:bg-white focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all text-sm text-navy outline-none cursor-pointer"
            >
              <option value="routing">{t("challenge_options.routing")}</option>
              <option value="webgis">{t("challenge_options.webgis")}</option>
              <option value="agri">{t("challenge_options.agri")}</option>
              <option value="other">{t("challenge_options.other")}</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">
              {t("deployment_label")}
            </label>
            <select
              value={formData.deployment}
              onChange={(e) => setFormData({ ...formData, deployment: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-border bg-bg-alt/40 focus:bg-white focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all text-sm text-navy outline-none cursor-pointer"
            >
              <option value="cloud">{t("deployment_options.cloud")}</option>
              <option value="managed">{t("deployment_options.managed")}</option>
              <option value="enterprise">{t("deployment_options.enterprise")}</option>
              <option value="undecided">{t("deployment_options.undecided")}</option>
            </select>
          </div>
        </div>

        {/* Mensagem */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">
            {t("message_label")}
          </label>
          <textarea
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder={t("message_placeholder")}
            className="w-full p-4 rounded-xl border border-border bg-bg-alt/40 focus:bg-white focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all text-sm text-navy placeholder:text-text-muted/60 outline-none resize-none"
          />
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full py-4 px-6 rounded-full bg-teal hover:bg-teal-light text-white font-bold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group disabled:opacity-70 cursor-pointer"
          >
            {status === "submitting" ? (
              t("sending")
            ) : (
              <>
                <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                {t("submit_button")}
              </>
            )}
          </button>
          <p className="text-center text-xs text-text-muted mt-3">
            Garantimos confidencialidade total dos seus dados operacionais.
          </p>
        </div>
      </form>
    </div>
  );
}
