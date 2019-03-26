let storage = [
    { id: 1, itemId: 1, comment: 'As a teen at Lakeside Prep School, Gates wrote his first computer program on a General Electric computer. It was a version of tic-tac-toe where you could play against the machine.' },
    { id: 2, itemId: 1, comment: 'Once his school discovered Gates\' coding abilities, they let him write the school\'s computer program for scheduling students in classes. Gates slyly altered the code so he was placed in classes with a "disproportionate number of interesting girls."' },
    { id: 3, itemId: 1, comment: 'Gates also read the entire "World Book Encyclopedia" series during his teenage years.' },
    { id: 4, itemId: 1, comment: 'Like many other successful tech entrepreneurs, Gates was a college dropout. He left Harvard University in 1975 to fully devote himself to Microsoft.' },
    { id: 5, itemId: 1, comment: 'Two years after he dropped out of Harvard, Gates was arrested in New Mexico. He was driving without a license and ran a red light.' },
    { id: 6, itemId: 1, comment: 'Speaking of cars, Gates has quite the Porsche collection. The headliner is his Porsche 959 sports car, which he bought 13 years before the car was approved by the US Environmental Protection Agency or the US Department of Transportation.' },
    { id: 7, itemId: 2, comment: 'Steve Jobs was adopted shortly after being born.' },
    { id: 8, itemId: 2, comment: 'Jobs was, biologically, half Arab. His biological father was Syrian and his mother was American.' },
    { id: 9, itemId: 2, comment: 'Jobs\'s biological parents had one mandate — that Jobs be adopted by two college-educated people. The biological parents found out that neither Clara nor Paul Jobs had ever graduated from college, but the adoption went through when it was promised that Steve Jobs would receive a university education (funny considering that Jobs went on to become a college dropout).' },
    { id: 10, itemId: 2, comment: 'Jobs and Apple co-founder Steve Wozniak met in high school — Wozniak was 18 and Jobs was just 13.' },
    { id: 11, itemId: 2, comment: 'Jobs was a pescetarian, meaning he ate no meat except for fish.' },
    { id: 12, itemId: 2, comment: 'He was an official college dropout, but continued his education by informally auditing classes.' },
    { id: 13, itemId: 2, comment: 'One class Jobs audited was a calligraphy course, which he says was instrumental in the future Apple products\' attention to typography and font.' },
    { id: 14, itemId: 2, comment: 'While unofficially attending classes, Jobs struggled to get by. He slept on his friends\' dorm room floors, returned Coke bottles for money, and survived off free meals from the local Hare Krishna temple.' },
    { id: 15, itemId: 2, comment: 'He had a pretty low GPA — just 2.65. Jobs admitted he never enjoyed school structure and preferred to learn in unconventional ways.' },
    { id: 16, itemId: 2, comment: 'He spent seven months traveling around India, experimenting with psychedelic drugs and eventually adopting the practices of Zen Buddhism.' },
    { id: 17, itemId: 2, comment: 'Jobs has called experimenting with LSD as "one of the two or three most important things I have done in my life."' },
    { id: 18, itemId: 2, comment: 'Jobs stole from partner and co-founder of Apple Steve Wozniak. When the pair first created the Breakout game for Atari, they planned on splitting the pay 50-50. Although Atari gave Jobs $5,000 for the game, Jobs told Wozniak they got $700, leaving Wozniak to take home $350 while Jobs pocketed the other $4,650.' },
    { id: 19, itemId: 2, comment: 'Jobs was moved to the night shift when working at Atari due to complaints about his hygiene. He rarely showered and would walk around barefoot in the Atari offices.' },
    { id: 20, itemId: 2, comment: 'There was actually a third founder of Apple — Ronald Wayne, who even designed Apple\'s first logo. Wayne sold his 10 percent stake just two weeks after partnering with Jobs and Wozniak for only $800 (talk about regrets).' },
    { id: 21, itemId: 3, comment: 'Mark Zuckerberg began programming at a young age — when he was 12 he created a messaging program that his father used in his dental office, allowing the receptionist to notify him of new patients without yelling across the office.' },
    { id: 22, itemId: 3, comment: 'Zuckerberg took a computer graduate class at the nearby Mercy College while still in high school.' },
    { id: 23, itemId: 3, comment: 'His parents even hired a computer tutor to work with the young Zuckerberg, but the tutor admitted that it quickly became difficult to stay ahead of his pupil, referring to him as a "prodigy."' },
    { id: 24, itemId: 3, comment: 'Mark Zuckerberg attended high school at Phillips Exeter Academy, a private school in New Hampshire.' },
    { id: 25, itemId: 3, comment: 'He was approached by several companies with job offers (including AOL and Microsoft) before he even graduated high school, but Zuckerberg turned them all down.' },
    { id: 26, itemId: 3, comment: 'Zuckerberg first launched Facebook from his dormitory at Harvard University.' },
    { id: 27, itemId: 3, comment: 'He dropped out of Harvard University after his sophomore year to continue working on Facebook.' },
    { id: 28, itemId: 3, comment: 'A movie was made about Zuckerberg and the birth of Facebook, called The Social Network.' }
];

module.exports = function () {
    return storage;
}

module.exports.idCounter = 29;

module.exports.filterSelf = function (cb) {
    storage = storage.filter(cb);
}