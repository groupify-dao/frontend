export default function(plop) {
  plop.setHelper("componentName", function(name) {
    let indexOfDash = name.indexOf("-");
    if (indexOfDash < 0) return name.charAt(0).toUpperCase() + name.slice(1);

    return (
      name.charAt(0).toUpperCase() +
      name.substring(1, indexOfDash) +
      name.charAt(indexOfDash + 1).toUpperCase() +
      name.slice(indexOfDash + 2)
    );
  });

  plop.setHelper("cssCompliantName", function(name) {
    let indexOfDash = name.indexOf("-");
    if (indexOfDash < 0) return name.toLowerCase();

    let componentName =
      name.charAt(0).toUpperCase() +
      name.substring(1, indexOfDash) +
      name.charAt(indexOfDash + 1).toUpperCase() +
      name.slice(indexOfDash + 2);
    return componentName.toLowerCase();
  });

  // component generator
  plop.setGenerator("component", {
    description: "react component and css module",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "component name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "./src/styles/{{name}}.module.css",
        templateFile: "./plop-templates/component.module.css.hbs",
      },
      {
        type: "add",
        path: "./src/components/{{name}}.js",
        templateFile: "./plop-templates/component.hbs",
      },
    ],
  });
}
