const mongoose = require('mongoose');

const Blog = mongoose.model(
    'Blog',
    {
        email: String,
        post: String,
    },
    'Blog'
)

const createNew = (data) => {
    return new Promise((success, fail) => {
        let blog = new Blog(data);
        blog.save((err) => {
            if (err) {
                return fail(err)
            }
            return success()
        })
    })
}

const readAll = () => {
    return new Promise((success, fail) => {
        Blog.find({}, (err, data) => {
            if (err) {
                return fail(err)
            }
            return success(data)
        })
    })
}
const readById = (id) => {
    return new Promise((success, fail) => {
        Blog.findById(id, (err, data) => {
            if (err) {
                return fail(err)
            }
            return success(data)
        })
    })
}
const remove = (id) => {
    return new Promise((success, fail) => {
        Blog.deleteOne({_id: id}, (err) => {
            if(err){
                return fail(err);
            }
            return success();
        });
    });
};

const update = (id, data) => {
    return new Promise((success, fail) => {
        Blog.updateOne({_id: id}, data, (err) => {
            if(err){
                return fail(err);
            }
            return success();
        });
    });
};

module.exports = {
    createNew,
    readAll,
    readById,
    remove,
    update
};