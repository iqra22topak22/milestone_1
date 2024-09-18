const abcbuttion = document.getElementById('toggle-skills') as HTMLButtonElement
const skills = document.getElementById('skills-info') as HTMLElement 

abcbuttion.addEventListener('click' , ()=>{
    if(skills.style.display === 'none'){
        skills.style.display = 'block'
    } else {
        skills.style.display ='none'
    }
});