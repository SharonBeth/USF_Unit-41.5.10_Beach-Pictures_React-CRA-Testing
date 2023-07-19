Documents Discussed:
A = Carousel.js     *Working Doc As Changes are being made to update from Mentor's suggestions
B = Carousel2.js    *Doc from Mentor that has her suggestions on it.
C = Carousel_original.js *Sharon's original file that I made, all attempts before requesting help, some was starter code from usf.
D = Carousel.test.js    *Working Doc As Changes are being made to update from Mentor's suggestions
E = Carousel2.test.js   *Doc from Mentor that has her suggestions on it.
F = Carousel_original.test.js    *Sharon's original file that I made, all attempts before requesting help, some was starter code from usf.

Future Discussion will look like this. 
"Doc A"
"Doc B"
"Doc C"
"Doc D"
"Doc E"
"Doc F"

Checking what changes were most effective in the process from what my Mentor sent over. This is the effect as each item was changed over.

1. Added "React" i set-up section of "Doc A".

    //Result: STill all same alarms.

2. Added 3 image imports to set-up area "Doc A".

    //Results: Same

3. In "Doc A", I was able to change everhting that was transferable form "Doc B" without changing mine within reason of hte variable names already established.  The main fundamental change here was the "if" statement in the "Doc A" inside the return"html" to putting the condition into variables and then adding the variables into the return"html" and adding a class in the .css file to "visibility: hidden". 

    //Results-Server Page: Turned on the server "npm start" and the arrows were still hidden when at first picture (left arrrow) and last picture (right arrow).

    //Results-Testing: 
        Smoke Test-Passed
        Snapshot Test - did not pass
        Works when you click Right Arrow - Passed
        Works when you click Left Arrow  - Did Not Pass

3. I realized that the reason the snapshot was not passing was because the code to complete it was not correct. This was evident because the __snapshot__ file did not contain the Carousel.test.snapshot inside so it was not completing the code. Once I added the props to the snapshot it worked and passed.

    Original:
    it('matches snapshot', () => {
        const { asFragment } = render(<Carousel />);
        expect(asFragment()).toMatchSnapshot()
    });

    Changed(worked):
    it('matches snapshot', () => {
        const { asFragment } = render(<Carousel photos={TEST_IMAGES}    title="Sharon'sTest"/>);
        expect(asFragment()).toMatchSnapshot();
        });

4. Now all that is left if the left click arrow. Before my issue was getting around the "if" statement in the html. Now that is gone, so I will see if I can change it to fit the tests without seeing what the teacher gave, first. 


