/**
 * VOTO360 - AI AGENT CONFIG - APP COORDENADORES (GOVERNANCE)
 * INPI BRASIL - Registro de Propriedade Intelectual
 * Autor: Thiago Mishima | Data: 2026-01-28
 */

const VOTO360_COORDENADORES_AI_CONFIG = {
      agent: {
                id: "voto360-validador-ai",
                name: "VOTO360-VALIDADOR-AI",
                version: "1.0.0",
                type: "Governance Agent with Human-in-the-Loop",
                author: "Thiago Mishima",
                copyright: "2026 VOTO360"
      },
      model: {
                recommended: "claude-3-opus-20240229",
                fallback: "claude-3-5-sonnet-20241022",
                provider: "Anthropic",
                justification: "Maxima precisao para decisoes com implicacoes legais e financeiras",
                routing: {
                              high_complexity: "claude-3-opus-20240229",
                              medium_complexity: "claude-3-5-sonnet-20241022",
                              threshold: 0.7
                }
      },
      tools: [
                "analisar_solicitacao",
                "verificar_conformidade_legal",
                "calcular_risco",
                "gerar_parecer",
                "auditar_decisoes"
            ],
      competency_areas: {
                FINANCEIRO: { code: "FIN", risk_weight: 0.25 },
                JURIDICO: { code: "JUR", risk_weight: 0.30 },
                COMUNICACAO: { code: "COM", risk_weight: 0.10 },
                MOBILIZACAO: { code: "MOB", risk_weight: 0.10 },
                LOGISTICA: { code: "LOG", risk_weight: 0.08 },
                RH: { code: "RH", risk_weight: 0.07 },
                TECNOLOGIA: { code: "TEC", risk_weight: 0.05 },
                ESTRATEGIA: { code: "EST", risk_weight: 0.05 }
      },
      recommendation_levels: {
                APROVAR: { code: "APR", color: "#22c55e", auto_approve: true },
                APROVAR_COM_RESSALVAS: { code: "ACR", color: "#f59e0b", auto_approve: false },
                SOLICITAR_MAIS_INFO: { code: "SMI", color: "#3b82f6", auto_approve: false },
                REJEITAR: { code: "REJ", color: "#ef4444", auto_approve: false }
      },
      hitl_protocol: {
                enabled: true,
                require_human_for: ["JURIDICO", "FINANCEIRO"],
                auto_escalate_threshold: 0.7,
                audit_all_decisions: true
      },
      intellectual_property: {
                registration_type: "Software",
                registration_country: "Brasil",
                registration_office: "INPI",
                creation_date: "2026-01-28",
                author: "Thiago Mishima",
                email: "thmishima@gmail.com"
      }
};

module.exports = VOTO360_COORDENADORES_AI_CONFIG;
