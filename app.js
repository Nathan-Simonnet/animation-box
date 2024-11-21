
// Cursor
// ====================================================================
const customCursor = document.getElementById('customCursor')

window.addEventListener('mousemove', (e) => {
    customCursor.style.left = `${e.clientX}px`;
    customCursor.style.top = `${e.clientY}px`;
});

// H1 ANIMATION
// ====================================================================
const h1ToAnim = document.getElementById('h1Anim');
const h1Message = "porsche, set free";
function h1TextAnimationHandler() {
    let index = 0;
    setTimeout(() => {
        // document.getElementById('h1SubTitleAnim').classList.remove('hidden')
        document.getElementById('h1SubTitleAnim').style.opacity = "1"
    }, 400)

    function loopH1TextAnimationDisplayer() {
        if (h1ToAnim.textContent.length < h1Message.length) {
            h1ToAnim.textContent += h1Message[index];
            index++;
            setTimeout(() => {
                loopH1TextAnimationDisplayer()
            }, 150);
        }
    };
    loopH1TextAnimationDisplayer()
};
h1TextAnimationHandler();

// Fade In
// ===================================================================
function fadeInHandler(elements, percentageForApparition) {
    const observerOptions = {
        threshold: percentageForApparition, // Trigger when 30% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Stop observing once visible?
            }
        });
    }, observerOptions);

    elements.forEach((element) => {
        observer.observe(element);
    });
}

// Sections fade in animation
// --------------------------------------------------------------------
// const presentationSection = [document.getElementById('presentation-section')];
const sections = document.querySelectorAll('section');
// sections.forEach((section) => {
//     section.classList.add('visible')
// });

fadeInHandler(sections, 0.3)


// Models fade in animation
// --------------------------------------------------------------------

const models = document.querySelectorAll('.model-container');
console.log(models, models.length);

fadeInHandler(models, 0.5)









