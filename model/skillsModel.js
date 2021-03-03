let skills = [
    {id: 125223, skill: 'vanilla Js', status: 'completed'},
    {id: 127904, skill: 'Learn Express', status: 'not completed'},
    {id: 139608, skill: 'Learn Python', status: 'not completed'},
    {id: 139608, skill: 'Learn React', status: 'not completed'}
  ];
  

const getAll = () => {
    return skills;
}

const getOne = (id) => {
    // Use the Array.prototype.find iterator method
    console.log(id)
    return skills.find(el => el.id === parseInt(id));
}

const DeleteOne = (id) => {
    // Use the Array.prototype.find iterator method
    console.log(skills.find(el => el.id == id ));
    skills = skills.filter(el => el.id != id);  
}







module.exports = {
    skills,
    getAll,
    getOne,
    DeleteOne
};