localStorage.setItem('localStorageCounter', 0);
let localStorageCounter = localStorage.getItem('localStorageCounter');
localStorage.setItem('localStorageCounter', localStorageCounter);

function WriteFromLS() {
    for (let i = 0; i < localStorage.getItem('LOCAL'); i++) {
        const ul = document.createElement('tr');
        ul.setAttribute('id', 'list');
        ul.classList.add('list')
        document.getElementById('list-block').appendChild(ul);

        const li1 = document.createElement('td');
        li1.innerText = localStorage.getItem('date' + i);
        li1.classList.add('dateListItem');
        document.getElementById('list').appendChild(li1);
        const li2 = document.createElement('td');
        li2.innerText = localStorage.getItem('title' + i);
        document.getElementById('list').appendChild(li2);
        const li3 = document.createElement('td');
        li3.innerText = localStorage.getItem('category' + i);
        document.getElementById('list').appendChild(li3);
        const li4 = document.createElement('td');
        if (cost < 0) {
            cost = 0;
        }
        li4.innerText = localStorage.getItem('cost' + i) + '$';
        document.getElementById('list').appendChild(li4);
        const li5 = document.createElement('td');
        li5.innerText = localStorage.getItem('points' + i) + ' influence points';
        document.getElementById('list').appendChild(li5);

        ul.removeAttribute('id');
    }

}
WriteFromLS()

let careerResult = 0;
let familyResult = 0;
let environmentResult = 0;
let hobbyResult = 0;
let restResult = 0;
let educationResult = 0;
let healthResult = 0;

let careerResultInfluence = 0;
let familyResultInfluence = 0;
let environmentResultInfluence = 0;
let hobbyResultInfluence = 0;
let restResultInfluence = 0;
let educationResultInfluence = 0;
let healthResultInfluence = 0;

let careerResultInfluenceCounter = 0;
let familyResultInfluenceCounter = 0;
let environmentResultInfluenceCounter = 0;
let hobbyResultInfluenceCounter = 0;
let restResultInfluenceCounter = 0;
let educationResultInfluenceCounter = 0;
let healthResultInfluenceCounter = 0;

const RecList = {
    career: ['Hey! You are doing well but let me give you some recommendations. Try to keep your career development using less money. You are really close to your aim! Keep going!', 'Oops! This time you overused your money and get not much impacts. Try to concentrate on your job. I believe, you\'ll succeed!'],
    family: ['Hey! You are doing well but let me give you some recommendations. Try to spend more time with your family using less money. You can have different interesting conversations and play table games. Keep going!', 'Oops! This time you overused your money and get not much impacts. Try to spend more time together and remember: you can\'t buy love and good attitude.I believe, you\'ll succeed!'],
    environment: ['Hey! You are doing well but let me give you some recommendations. Try to be more active using less money. For example, you can invite more friends to support your ideas. Keep going!', 'Oops! This time you overused your money and get not much impacts. Try to be more friendly, talkative and caring. I believe, you\'ll succeed!'],
    hobby: ['Hey! You are doing well but let me give you some recommendations. Try to be interested in your hobby using less money. Keep going!', 'Oops! This time you overused your money and get not much impacts. Try to spend more time on your hobby. Maybe, you want to do something else? Try yourself in different things. I believe, you\'ll succeed!'],
    rest: ['Hey! You are doing well but let me give you some recommendations. Try to relax when you need it. Keep going!', 'Oops! This time you overused your money and get not much impacts. Try to find your perfect way of rest. Traveling is very useful. What country would you like to visit next time? I believe, you\'ll succeed!'],
    education: ['Hey! You are doing well but let me give you some recommendations. Try to concentrate on your studying using as less money as possible. You\'re a great teacher for yourself.Keep going!', 'Oops! This time you overused your money and get not much impacts. Try to find your perfect way of studying. You can use lots of free resources such as free podcasts, books from the library and online lessons. I believe, you\'ll succeed!'],
    health: ['Hey! You are doing well but let me give you some recommendations. Try to develop your body using as less money as possible. You can do everything if you truly want to. Keep going!', 'Oops! This time you overused your money and get not much impacts. Try to find your favourite sport. It will be easier for you to develop yourself with please. I believe, you\'ll succeed!'],
};

const submitBtn = document.getElementById('submit-btn');

function DisableBtn() {
    if (!document.getElementById('date').value || !document.getElementById('title').value || !document.getElementById('cost').value || document.getElementById('category').value == 'Choose category' || document.getElementById('points').value == 'Rate your action') {
        submitBtn.disabled = true;
    } else {
        submitBtn.disabled = false;
    }
}
document.getElementById('date').addEventListener('change', DisableBtn);
document.getElementById('title').addEventListener('change', DisableBtn)
document.getElementById('cost').addEventListener('change', DisableBtn)
document.getElementById('category').addEventListener('change', DisableBtn)
document.getElementById('points').addEventListener('change', DisableBtn)

submitBtn.addEventListener('click', () => {

    localStorage.setItem('date' + localStorage.getItem('localStorageCounter'), document.getElementById('date').value);
    localStorage.setItem('title' + localStorage.getItem('localStorageCounter'), document.getElementById('title').value);
    localStorage.setItem('cost' + localStorage.getItem('localStorageCounter'), document.getElementById('cost').value);
    localStorage.setItem('category' + localStorage.getItem('localStorageCounter'), document.getElementById('category').value);
    localStorage.setItem('points' + localStorage.getItem('localStorageCounter'), document.getElementById('points').value);

    localStorageCounter++;
    localStorage.setItem('localStorageCounter', localStorageCounter);
    localStorage.setItem('LOCAL', localStorage.getItem('localStorageCounter'));

    let date = document.getElementById('date').value;
    let title = document.getElementById('title').value;
    let cost = Number(document.getElementById('cost').value);
    let category = document.getElementById('category').value;
    let points = Number(document.getElementById('points').value);

    function Write() {
        const ul = document.createElement('tr');
        ul.setAttribute('id', 'list');
        ul.classList.add('list')
        document.getElementById('list-block').appendChild(ul);

        const li1 = document.createElement('td');
        li1.innerText = date;
        li1.classList.add('dateListItem');
        document.getElementById('list').appendChild(li1);
        const li2 = document.createElement('td');
        li2.innerText = title;
        document.getElementById('list').appendChild(li2);
        const li3 = document.createElement('td');
        li3.innerText = category;
        document.getElementById('list').appendChild(li3);
        const li4 = document.createElement('td');
        if (cost < 0) {
            cost = 0;
        }
        li4.innerText = cost + '$';
        document.getElementById('list').appendChild(li4);
        const li5 = document.createElement('td');
        li5.innerText = points + ' influence points';
        document.getElementById('list').appendChild(li5);

        ul.removeAttribute('id');
    }
    Write()

    function Calculate() {
        if (category == 'Career') {

            if (cost < 0) {
                careerResult += 0;
            } else {
                careerResult += cost;
            }
            console.log('career: ' + careerResult);

            if (points < 1) {
                careerResultInfluence += 0;
            } else {
                careerResultInfluence += points;
            }
            careerResultInfluenceCounter++;
            console.log('careerInfluence: ' + careerResultInfluence);

            localStorage.setItem('careerResult', careerResult + Number(localStorage.getItem('careerResult')));
            localStorage.setItem('careerResultInfluence', careerResultInfluence + Number(localStorage.getItem('careerResultInfluence')));
            localStorage.setItem('careerResultInfluenceCounter', careerResultInfluenceCounter + Number(localStorage.getItem('careerResultInfluenceCounter')));
        } else if (category == 'Family') {

            if (cost < 1) {
                familyResult += 0;
            } else {
                familyResult += cost;
            }
            console.log('family: ' + familyResult);

            if (points < 1) {
                familyResultInfluence += 0;
            } else {
                familyResultInfluence += points;
            }
            familyResultInfluenceCounter++;
            console.log('familyInfluence: ' + familyResultInfluence);

            localStorage.setItem('familyResult', familyResult + Number(localStorage.getItem('familyResult')));
            localStorage.setItem('familyResultInfluence', familyResultInfluence + Number(localStorage.getItem('familyResultInfluence')));
            localStorage.setItem('familyResultInfluenceCounter', familyResultInfluenceCounter + Number(localStorage.getItem('familyResultInfluenceCounter')));
        } else if (category == 'Environment') {

            if (cost < 1) {
                environmentResult += 0;
            } else {
                environmentResult += cost;
            }
            console.log('environment: ' + environmentResult);

            if (points < 1) {
                environmentResultInfluence += 0;
            } else {
                environmentResultInfluence += points;
            }
            environmentResultInfluenceCounter++;
            console.log('environmentInfluence: ' + environmentResultInfluence);

            localStorage.setItem('environmentResult', environmentResult + Number(localStorage.getItem('environmentResult')));
            localStorage.setItem('environmentResultInfluence', environmentResultInfluence + Number(localStorage.getItem('environmentResultInfluence')));
            localStorage.setItem('environmentResultInfluenceCounter', environmentResultInfluenceCounter + Number(localStorage.getItem('environmentResultInfluenceCounter')));
        } else if (category == 'Hobby') {

            if (cost < 1) {
                hobbyResult += 0;
            } else {
                hobbyResult += cost;
            }
            console.log('hobby: ' + hobbyResult);

            if (points < 1) {
                hobbyResultInfluence += 0;
            } else {
                hobbyResultInfluence += points;
            }
            hobbyResultInfluenceCounter++;
            console.log('hobbyInfluence: ' + hobbyResultInfluence);

            localStorage.setItem('hobbyResult', hobbyResult + Number(localStorage.getItem('hobbyResult')));
            localStorage.setItem('hobbyResultInfluence', hobbyResultInfluence + Number(localStorage.getItem('hobbyResultInfluence')));
            localStorage.setItem('hobbyResultInfluenceCounter', hobbyResultInfluenceCounter + Number(localStorage.getItem('hobbyResultInfluenceCounter')));
        } else if (category == 'Rest and Traveling') {

            if (cost < 1) {
                restResult += 0;
            } else {
                restResult += cost;
            }
            console.log('rest: ' + restResult);

            if (points < 1) {
                restResultInfluence += 0;
            } else {
                restResultInfluence += points;
            }
            restResultInfluenceCounter++;
            console.log('restInfluence: ' + restResultInfluence);

            localStorage.setItem('restResult', restResult + Number(localStorage.getItem('restResult')));
            localStorage.setItem('restResultInfluence', restResultInfluence + Number(localStorage.getItem('restResultInfluence')));
            localStorage.setItem('restResultInfluenceCounter', restResultInfluenceCounter + Number(localStorage.getItem('restResultInfluenceCounter')));
        } else if (category == 'Education') {

            if (cost < 1) {
                educationResult += 0;
            } else {
                educationResult += cost;
            }
            console.log('education: ' + educationResult);

            if (points < 1) {
                educationResultInfluence += 0;
            } else {
                educationResultInfluence += points;
            }
            educationResultInfluenceCounter++;
            console.log('educationInfluence: ' + educationResultInfluence);

            localStorage.setItem('educationResult', educationResult + Number(localStorage.getItem('educationResult')));
            localStorage.setItem('educationResultInfluence', educationResultInfluence + Number(localStorage.getItem('educationResultInfluence')));
            localStorage.setItem('educationResultInfluenceCounter', educationResultInfluenceCounter + Number(localStorage.getItem('educationResultInfluenceCounter')));
        } else if (category == 'Health and Sport') {

            if (cost < 1) {
                healthResult += 0;
            } else {
                healthResult += cost;
            }
            console.log('health: ' + healthResult);

            if (points < 1) {
                healthResultInfluence += 0;
            } else {
                healthResultInfluence += points;
            }
            healthResultInfluenceCounter++;
            console.log('healthInfluence: ' + healthResultInfluence);

            localStorage.setItem('healthResult', healthResult + Number(localStorage.getItem('healthResult')));
            localStorage.setItem('healthResultInfluence', healthResultInfluence + Number(localStorage.getItem('healthResultInfluence')));
            localStorage.setItem('healthResultInfluenceCounter', healthResultInfluenceCounter + Number(localStorage.getItem('healthResultInfluenceCounter')));
        }
    }
    Calculate()
});

const career = document.getElementById('career');
const family = document.getElementById('family');
const environment = document.getElementById('environment');
const hobby = document.getElementById('hobby');
const rest = document.getElementById('rest');
const education = document.getElementById('education');
const health = document.getElementById('health');

const careerInfluence = document.getElementById('careerInfluence');
const familyInfluence = document.getElementById('familyInfluence');
const environmentInfluence = document.getElementById('environmentInfluence');
const hobbyInfluence = document.getElementById('hobbyInfluence');
const restInfluence = document.getElementById('restInfluence');
const educationInfluence = document.getElementById('educationInfluence');
const healthInfluence = document.getElementById('healthInfluence');

const drawBtn = document.getElementById('draw-btn');
drawBtn.addEventListener('click', () => {
    let sum = Number(localStorage.getItem('careerResult')) + Number(localStorage.getItem('familyResult')) + Number(localStorage.getItem('environmentResult')) + Number(localStorage.getItem('hobbyResult')) + Number(localStorage.getItem('restResult')) + Number(localStorage.getItem('educationResult')) + Number(localStorage.getItem('healthResult'));
    console.log(sum);
    localStorage.setItem('sum', sum);
    let careerPart = Number(localStorage.getItem('careerResult')) * 100 / Number(localStorage.getItem('sum'));
    let familyPart = Number(localStorage.getItem('familyResult')) * 100 / Number(localStorage.getItem('sum'));
    let environmentPart = Number(localStorage.getItem('environmentResult')) * 100 / Number(localStorage.getItem('sum'));
    let hobbyPart = Number(localStorage.getItem('hobbyResult')) * 100 / Number(localStorage.getItem('sum'));
    let restPart = Number(localStorage.getItem('restResult')) * 100 / Number(localStorage.getItem('sum'));
    let educationPart = Number(localStorage.getItem('educationResult')) * 100 / Number(localStorage.getItem('sum'));
    let healthPart = Number(localStorage.getItem('healthResult')) * 100 / Number(localStorage.getItem('sum'));

    let careerInfluencePart = Number(localStorage.getItem('careerResultInfluence')) / Number(localStorage.getItem('careerResultInfluenceCounter')) * 10;
    let familyInfluencePart = Number(localStorage.getItem('familyResultInfluence')) / Number(localStorage.getItem('familyResultInfluenceCounter')) * 10;
    let environmentInfluencePart = Number(localStorage.getItem('environmentResultInfluence')) / Number(localStorage.getItem('environmentResultInfluenceCounter')) * 10;
    let hobbyInfluencePart = Number(localStorage.getItem('hobbyResultInfluence')) / Number(localStorage.getItem('hobbyResultInfluenceCounter')) * 10;
    let restInfluencePart = Number(localStorage.getItem('restResultInfluence')) / Number(localStorage.getItem('restResultInfluenceCounter')) * 10;
    let educationInfluencePart = Number(localStorage.getItem('educationResultInfluence')) / Number(localStorage.getItem('educationResultInfluenceCounter')) * 10;
    let healthInfluencePart = Number(localStorage.getItem('healthResultInfluence')) / Number(localStorage.getItem('healthResultInfluenceCounter')) * 10;

    gsap.to(career, {
        height: careerPart + "%"
    })
    gsap.to(family, {
        height: familyPart + "%"
    })
    gsap.to(environment, {
        height: environmentPart + "%"
    })
    gsap.to(hobby, {
        height: hobbyPart + "%"
    })
    gsap.to(rest, {
        height: restPart + "%"
    })
    gsap.to(education, {
        height: educationPart + "%"
    })
    gsap.to(health, {
        height: healthPart + "%"
    })


    gsap.to(careerInfluence, {
        height: careerInfluencePart + "%"
    })
    gsap.to(familyInfluence, {
        height: familyInfluencePart + "%"
    })
    gsap.to(environmentInfluence, {
        height: environmentInfluencePart + "%"
    })
    gsap.to(hobbyInfluence, {
        height: hobbyInfluencePart + "%"
    })
    gsap.to(restInfluence, {
        height: restInfluencePart + "%"
    })
    gsap.to(educationInfluence, {
        height: educationInfluencePart + "%"
    })
    gsap.to(healthInfluence, {
        height: healthInfluencePart + "%"
    });

    document.getElementById('recommendations').innerHTML = ''

    if (careerPart >= careerInfluencePart - 10 && careerPart <= careerInfluencePart + 10) {
        const rec = document.createElement('li');
        rec.innerText = RecList.career[0];
        document.getElementById('recommendations').appendChild(rec);
    } else if (careerPart >= careerInfluencePart + 10) {
        const rec = document.createElement('li');
        rec.innerText = RecList.career[1];
        document.getElementById('recommendations').appendChild(rec);
    }

    if (familyPart >= familyInfluencePart - 10 && familyPart <= familyInfluencePart + 10) {
        const rec = document.createElement('li');
        rec.innerText = RecList.family[0];
        document.getElementById('recommendations').appendChild(rec);
    } else if (familyPart >= familyInfluencePart + 10) {
        const rec = document.createElement('li');
        rec.innerText = RecList.family[1];
        document.getElementById('recommendations').appendChild(rec);
    }

    if (environmentPart >= environmentInfluencePart - 10 && environmentPart <= environmentInfluencePart + 10) {
        const rec = document.createElement('li');
        rec.innerText = RecList.environment[0];
        document.getElementById('recommendations').appendChild(rec);
    } else if (environmentPart >= environmentInfluencePart + 10) {
        const rec = document.createElement('li');
        rec.innerText = RecList.environment[1];
        document.getElementById('recommendations').appendChild(rec);
    }

    if (hobbyPart >= hobbyInfluencePart - 10 && hobbyPart <= hobbyInfluencePart + 10) {
        const rec = document.createElement('li');
        rec.innerText = RecList.hobby[0];
        document.getElementById('recommendations').appendChild(rec);
    } else if (hobbyPart >= hobbyInfluencePart + 10) {
        const rec = document.createElement('li');
        rec.innerText = RecList.hobby[1];
        document.getElementById('recommendations').appendChild(rec);
    }

    if (restPart >= restInfluencePart - 10 && restPart <= restInfluencePart + 10) {
        const rec = document.createElement('li');
        rec.innerText = RecList.rest[0];
        document.getElementById('recommendations').appendChild(rec);
    } else if (restPart >= restInfluencePart + 10) {
        const rec = document.createElement('li');
        rec.innerText = RecList.rest[1];
        document.getElementById('recommendations').appendChild(rec);
    }

    if (educationPart >= educationInfluencePart - 10 && educationPart <= educationInfluencePart + 10) {
        const rec = document.createElement('li');
        rec.innerText = RecList.education[0];
        document.getElementById('recommendations').appendChild(rec);
    } else if (educationPart >= educationInfluencePart + 10) {
        const rec = document.createElement('li');
        rec.innerText = RecList.education[1];
        document.getElementById('recommendations').appendChild(rec);
    }

    if (healthPart >= healthInfluencePart - 10 && healthPart <= healthInfluencePart + 10) {
        const rec = document.createElement('li');
        rec.innerText = RecList.health[0];
        document.getElementById('recommendations').appendChild(rec);
    } else if (healthPart >= healthInfluencePart + 10) {
        const rec = document.createElement('li');
        rec.innerText = RecList.health[1];
        document.getElementById('recommendations').appendChild(rec);
    }

    if (careerPart > 40) {
        const rec = document.createElement('li');
        rec.innerText = 'You are too focused on developing your career. Don\'t forget about other parts of your life.';
        document.getElementById('recommendations').appendChild(rec);
    }

    if (careerPart < familyPart && careerPart < environmentPart && careerPart < hobbyPart && careerPart < restPart && careerPart < educationPart && careerPart < healthPart) {
        const rec = document.createElement('li');
        rec.innerText = 'It seems like you spend on your career development the less. Try to think for about this part.';
        document.getElementById('recommendations').appendChild(rec);
    }

    if (familyPart > 40) {
        const rec = document.createElement('li');
        rec.innerText = 'You are a family man. Family is important but try to spend more time and money on something else.';
        document.getElementById('recommendations').appendChild(rec);
    }

    if (familyPart < careerPart && familyPart < environmentPart && familyPart < hobbyPart && familyPart < restPart && familyPart < educationPart && familyPart < healthPart) {
        const rec = document.createElement('li');
        rec.innerText = 'It seems like you spend on your family the less. You should go somewhere with them.';
        document.getElementById('recommendations').appendChild(rec);
    }

    if (environmentPart > 40) {
        const rec = document.createElement('li');
        rec.innerText = 'You like to meet with your friends and to go for a walk too much. Remember about other things.';
        document.getElementById('recommendations').appendChild(rec);
    }

    if (environmentPart < careerPart && environmentPart < familyPart && environmentPart < hobbyPart && environmentPart < restPart && environmentPart < educationPart && environmentPart < healthPart) {
        const rec = document.createElement('li');
        rec.innerText = 'It seems like you spend on your friends the less. You should go somewhere with them.';
        document.getElementById('recommendations').appendChild(rec);
    }

    if (hobbyPart > 40) {
        const rec = document.createElement('li');
        rec.innerText = 'You are crazy about your hobby and spend the most money on this. You have to remember about other important parts of your life.';
        document.getElementById('recommendations').appendChild(rec);
    }

    if (hobbyPart < careerPart && hobbyPart < familyPart && hobbyPart < environmentPart && hobbyPart < restPart && hobbyPart < educationPart && hobbyPart < healthPart) {
        const rec = document.createElement('li');
        rec.innerText = 'It seems like you spend on your hobbies the less. You should spend more on them.';
        document.getElementById('recommendations').appendChild(rec);
    }

    if (restPart > 40) {
        const rec = document.createElement('li');
        rec.innerText = 'Everyone needs to take a break sometimes but as for you it is too much. You need to start doing something useful.';
        document.getElementById('recommendations').appendChild(rec);
    }

    if (restPart < careerPart && restPart < familyPart && restPart < environmentPart && restPart < hobbyPart && restPart < educationPart && restPart < healthPart) {
        const rec = document.createElement('li');
        rec.innerText = 'It seems like you spend on your relaxation the less. You should visit another country.';
        document.getElementById('recommendations').appendChild(rec);
    }

    if (educationPart > 40) {
        const rec = document.createElement('li');
        rec.innerText = 'You spend so much money and time on education. You have to know everything! You shouldn\'t forget about other affairs.';
        document.getElementById('recommendations').appendChild(rec);
    }

    if (educationPart < careerPart && educationPart < familyPart && educationPart < environmentPart && educationPart < hobbyPart && educationPart < restPart && educationPart < healthPart) {
        const rec = document.createElement('li');
        rec.innerText = 'It seems like you spend on your education the less. You should learn something new.';
        document.getElementById('recommendations').appendChild(rec);
    }

    if (healthPart > 40) {
        const rec = document.createElement('li');
        rec.innerText = 'Don\'t be so afraid about your health and figure. You spend too much on this.';
        document.getElementById('recommendations').appendChild(rec);
    }

    if (healthPart < careerPart && healthPart < familyPart && healthPart < environmentPart && healthPart < hobbyPart && healthPart < restPart && healthPart < educationPart) {
        const rec = document.createElement('li');
        rec.innerText = 'It seems like you spend on your health the less. You should do some sport.';
        document.getElementById('recommendations').appendChild(rec);
    }

})

$(document).ready(function () {
    $('a[href*=#]').bind('click', function (e) {
        e.preventDefault();

        var target = $(this).attr("href");

        $('html, body').stop().animate({ scrollTop: $(target).offset().top }, 300, function () {
            location.hash = target;
        });

        return false;
    });
});