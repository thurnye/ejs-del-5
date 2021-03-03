const Skills = require('../model/skillsModel');



exports.getIndex = (req, res, next) => {
    res.render('index', { 
        pageTitle: 'My Skills',
         skills : Skills.getAll()
    });
};


exports.getShow = (req, res, next) => {
    res.render('skills', {
        pageTitle: 'My Skills',
        skill: Skills.getOne(req.params.id)
    });
};


exports.getAddSkill = (req, res, next) => {
    res.render('add', { 
        pageTitle: 'Add Skills',
    });
};


exports.postAddSkill = (req, res, next) => {
    let id = Skills.skills.length + 1;
    const skillSet = {
        id: id,
        skill: req.body.skillName,
        status: req.body.complete 
    }
    Skills.skills.push(skillSet);
    res.redirect('/');
};


exports.postDelSkill = (req, res, next) => {

    console.log(req.body.skillId)
    Skills.DeleteOne(req.body.skillId)
    res.redirect('/')

};

exports.getEditSkill = (req, res, next) => {
 console.log(Skills.getOne(req.params.id));
 res.render('edit', { 
        pageTitle: 'Edit Skills',
        skill : Skills.getOne(req.params.id)
    });
};

exports.postUpdatedSkill = (req, res, next) => {
    Skills.skills.find(el => {
        if(req.params.id == el.id){
            el.skill = req.body.skillName;
            el.status = req.body.complete;
        }
    });
    res.redirect('/');

}


