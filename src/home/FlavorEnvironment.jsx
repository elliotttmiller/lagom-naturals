import React from "react";

export default function FlavorEnvironment({scene,className=""}){
  const theme=scene?.theme||{};
  return <div
    className={"flavor-environment "+className}
    aria-hidden="true"
    style={{
      "--flavor-primary":theme.primary,
      "--flavor-secondary":theme.secondary,
      "--flavor-soft":theme.soft,
      "--flavor-ink":theme.ink,
    }}
  />;
}
