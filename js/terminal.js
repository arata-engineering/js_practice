class NodeExecute {
    static execute() {
        console.log(Math.random().toString(36).slice(-8));

        const m = new Map();
        m.set("lastName", "sato");
        m.set("firstName", "taro");
        console.log(`${m.get("lastName")}_${m.get("firstName")}`);

        const map = 
            new Map([["lastName", "tanaka"], ["firstName", "taro"]]);

        console.log("=== entries ===");
        for (const [key, value] of map.entries()) {
            console.log(`${key} : ${value}`);
        }

        console.log("=== keys ===");
        for (const key of map.keys()) {
            console.log(`${key} : ${map.get(key)}`);
        }

        console.log("=== foreach ===");
        map.forEach((value, key) => console.log(`${key} : ${value}`));

        console.log("====STREAM操作====")
        console.log("=== foreach ===");
        ["cat", "dog", "duck"]
            .forEach(animal => console.log(animal));

        console.log("=== filter ===");
        ["cat", "dog", "duck"]
            .filter(animal => animal !== "dog")
            .forEach(animal => console.log(animal));

        console.log("=== find ===");
        const animal = 
            ["cat", "dog", "duck"]
                .find(animal => animal.startsWith("d"));
        console.log(animal);

        console.log("=== map ===");
        ["cat", "dog", "duck"]
            .map(animal => animal.toUpperCase())
            .forEach(animal => console.log(animal));

        console.log("=== filter & map ===");
        const joinedAnimal =
            ["cat", "dog", "duck"]
                .filter(animal => animal !== "dog")
                .map(animal => animal.toUpperCase())
                .join(", ");
        console.log(joinedAnimal);
    }
    static undefindUpper() {
        console.log("");
        const name = undefined;
        const nameUpper = name.toUpperCase();
        console.log(nameUpper);
    }
}
NodeExecute.execute();
NodeExecute.undefindUpper();
