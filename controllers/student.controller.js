import Students from "../models/student.model.js";


export const insertEntries = async (req, res) => {
    try {
        const { name, email } = req.body;
        if (!name || !email) {
            return res.status(400).json({ "msg": "Please fill all fileds" });
        }
        const student = await Students.create({
            name: name,
            email: email
        });

        return res.status(201).json({"msg": `Student name: ${name} created successfully`});
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ "msg": "Unable to add entry in database" });
    }
};

export const updateEntry = async (req, res) => {
    try{
        const id = req.params.id;
        const {name} = req.body;
        if(!name) {
            return res.status(400).json({ "msg": "Please fill all fileds" });
        }

        const student = await Students.findByPk(id);
        if(!student) {
            return res.status(404).json({"msg": "Student not found"});
        }

        student.name= name;
        await student.save();
        return res.status(200).json({"msg": "Student has been updated successfully"});


    }
    catch(err) {
        console.log(err);
        return res.status(500).json({ "msg": "Unable to update entry in database" });
    }
}

export const deleteEntry = async(req, res) => {
    try{
        const id = req.params.id;
        const student = await Students.findByPk(id);
        if(!student) {
            return res.status(404).json({"msg": "Student not found"});
        }

        await Students.destroy({
            where: {
                id: id
            }
        })

        return res.status(200).json({"msg": "Student deleted successfully"});

    }
    catch(err) {
        console.log(err);
        return res.status(500).json({ "msg": "Unable to delete entry from database" });
    }
}

export const getEntriesDetail = async(req, res) => {
    try{
        const students = await Students.findAll();
        return res.status(200).json({"msg": students});
    }
    catch(err) {
        console.log(err);
        return res.status(500).json({ "msg": "Unable to fetch entry from database" });
    }
}