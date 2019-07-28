import { GoldenLayoutConfiguration } from "@embedded-enterprises/ng6-golden-layout";
import { GraficoPrincipalComponent } from "./componentes/grafico-principal/grafico-principal.component";
import { EmptyCompComponent } from "./componentes/empty-comp/empty-comp.component";

export class GoldenConfig {
  public static GoldenConfigObj: GoldenLayoutConfiguration = {
    components: [
      {
        componentName: "GraficoPrincipalComponent",
        component: GraficoPrincipalComponent
      },
      {
        componentName: "PriceComp",
        component: EmptyCompComponent
      },
      {
        componentName: "EmptyCompComponent",
        component: EmptyCompComponent
      }
    ],
    defaultLayout: {
      content: [
        {
          type: "row",
          content: [
            {
              type:"column",
              content:[
                {
                  type: "component",
                  componentName: "GraficoPrincipalComponent",
                  componentState: { label: "A" },
                },
              ]
            },
            {
              type: "column",
              content: [
                {
                  type: "component",
                  componentName: "PriceComp",
                  componentState: { label: "B" }
                },
                {
                  type: "component",
                  componentName: "EmptyCompComponent",
                  componentState: { label: "C" }
                }
              ]
            }
          ]
        }
      ]
    }
  };

}
