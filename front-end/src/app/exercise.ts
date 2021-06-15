export class Exercise {
    id!: number;
    name: string = "";
    sets: number[] = [0,0,0];

    constructor(m_id: number) {
        this.id = m_id;
    }
};

