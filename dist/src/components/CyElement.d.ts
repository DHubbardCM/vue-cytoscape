import { Vue } from 'vue-property-decorator';
import { Core, ElementDefinition, Selector } from 'cytoscape';
export default class CyElement extends Vue {
    definition: ElementDefinition;
    readonly cy: Promise<Core>;
    instance: Core | undefined;
    selector: Selector;
    id: string | undefined;
    readonly sync: boolean;
    constructor();
    configure(cy: Core): void;
    add(): import("cytoscape").SingularElementReturnValue | (import("cytoscape").NodeSingular & import("cytoscape").EdgeSingular);
    beforeDestroy(): void;
    get eleData(): import("cytoscape").NodeDataDefinition | import("cytoscape").EdgeDataDefinition;
    get position(): import("cytoscape").Position | undefined;
    onDataChange(data: any): void;
    onPositionChange(position?: any): void;
    render(h: (arg0: string) => void): void;
}
