const configSchema = {
  type: "object",
  additionalProperties: false,
  properties: {},
} as const;

export default {
  id: "panews",
  name: "PANews Agent Toolkit",
  configSchema,
  register() {
    // Skills-only OpenClaw package: runtime behavior is provided by shipped skills.
  },
};
