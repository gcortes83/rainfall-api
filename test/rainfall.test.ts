import test from "tape";
import {Rainfall} from "../src/db/models/rainfall.model";
import {connect} from "../src/db/db";

test("Should insert a rainfall record", async (t) => {
    await connect();
    let rainfall = new Rainfall();
    rainfall.year = 2021;
    rainfall.month = "January";
    rainfall.rainfall = 110;
    const result = await rainfall.save();
    t.ok(result);
});