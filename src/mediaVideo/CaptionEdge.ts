export class CaptionEdge {
    private node: { text: string };

    constructor(edgeData: any) {
        this.node = edgeData.node || { text: "" };
    }

    get getNode(): { text: string } {
        return this.node;
    }
}
