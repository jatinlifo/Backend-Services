
// test normal zod 
import * as z from "zod";

const User = z.object({
    name: z.string()
});

const input = {
    name: "jatin"
}

const data = User.parse(input);

console.log(data.name);