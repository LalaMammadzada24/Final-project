import React from 'react'

const FAQ = () => {
    return (
        <>
            <div className="faq px-5 pt-3">
                <h4 className='pb-3'>FAQs</h4>
                <ul className="list-unstyled ps-0 mb-0 mt-3">
                    <li className="pb-3 border-bottom py-2">
                        <button className="col-12 col-sm-12 col-md-12 d-inline-flex justify-content-between align-items-center border-0 collapsed ps-0 text-start" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                            My order hasn't arrived yet. Where is it?	<i class="fa-solid fa-angle-down"></i>
                        </button>
                        <div className="collapse" id="home-collapse">
                            <ul className="btn-toggle-nav list-unstyled pb-1 small mt-3">
                                <li className='mb-3'>A client that’s unhappy for a reason is a problem, a client that’s unhappy though he or her can’t quite put a finger on it is worse. Chances are there wasn’t collaboration, communication, and checkpoints, there wasn’t a process agreed upon or specified with the granularity required.</li>
                                <li>It’s content strategy gone awry right from the start. Forswearing the use of Lorem Ipsum wouldn’t have helped, won’t help now. It’s like saying you’re a bad designer, use less bold text, don’t use italics in every other paragraph. True enough, but that’s not all that it takes to get things back on track.</li>
                            </ul>
                        </div>
                    </li>
                        <li className="pb-3 border-bottom py-2 pt-3">
                            <button className="col-12 col-sm-12 col-md-12 d-inline-flex justify-content-between align-items-center border-0 collapsed ps-0 text-start" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                            Do you deliver on public holidays? <i class="fa-solid fa-angle-down"></i>
                            </button>
                            <div className="collapse mt-3" id="dashboard-collapse">
                                <ul className="btn-toggle-nav list-unstyled pb-1 small">
                                    <li>If that’s what you think how bout the other way around? How can you evaluate content without design? No typography, no colors, no layout, no styles, all those things that convey the important signals that go beyond the mere textual, hierarchies of information, weight, emphasis, oblique stresses, priorities, all those subtle cues that also have visual and emotional appeal to the reader. Rigid proponents of content strategy may shun the use of dummy copy but then designers might want to ask them to provide style sheets with the copy decks they supply that are in tune with the design direction they require.</li>
                                </ul>
                            </div>
                        </li>
                        <li className="py-2 pt-3 pb-3 border-bottom">
                            <button className=" col-12 col-sm-12 col-md-12 d-inline-flex justify-content-between align-items-center border-0 collapsed ps-0 text-start" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                            Do you deliver to my postcode?<i class="fa-solid fa-angle-down"></i>
                            </button>
                            <div className="collapse mt-3" id="orders-collapse">
                                <ul className="col-12 col-sm-12 col-md-12 list-unstyled pb-1 small">
                                    <li className='mb-3'>A client that’s unhappy for a reason is a problem, a client that’s unhappy though he or her can’t quite put a finger on it is worse. Chances are there wasn’t collaboration, communication, and checkpoints, there wasn’t a process agreed upon or specified with the granularity required.</li>
                                    <li>It’s content strategy gone awry right from the start. Forswearing the use of Lorem Ipsum wouldn’t have helped, won’t help now. It’s like saying you’re a bad designer, use less bold text, don’t use italics in every other paragraph. True enough, but that’s not all that it takes to get things back on track.</li>
                                </ul>
                            </div>
                        </li>
                        <li className="py-2 pt-3 pb-3 border-bottom">
                            <button className=" col-12 col-sm-12 col-md-12 d-inline-flex justify-content-between align-items-center rounded border-0 collapsed ps-0 text-start" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                            Is next-day delivery available on all orders?<i class="fa-solid fa-angle-down"></i>
                            </button>
                            <div className="collapse mt-3" id="account-collapse">
                                <ul className="btn-toggle-nav list-unstyled pb-1 small">
                                    <li>If that’s what you think how bout the other way around? How can you evaluate content without design? No typography, no colors, no layout, no styles, all those things that convey the important signals that go beyond the mere textual, hierarchies of information, weight, emphasis, oblique stresses, priorities, all those subtle cues that also have visual and emotional appeal to the reader. Rigid proponents of content strategy may shun the use of dummy copy but then designers might want to ask them to provide style sheets with the copy decks they supply that are in tune with the design direction they require.</li>
                                </ul>
                            </div>
                        </li>
                        <li className="py-2 pt-3 pb-1">
                            <button className=" col-12 col-sm-12 col-md-12 d-inline-flex justify-content-between align-items-center rounded border-0 collapsed ps-0 text-start" data-bs-toggle="collapse" data-bs-target="#last-collapse" aria-expanded="false">
                             Do I need to be there to sign for delivery?<i class="fa-solid fa-angle-down"></i>
                            </button>
                            <div className="collapse mt-3" id="last-collapse">
                                <ul className="btn-toggle-nav list-unstyled pb-1 small">
                                    <li>If that’s what you think how bout the other way around? How can you evaluate content without design? No typography, no colors, no layout, no styles, all those things that convey the important signals that go beyond the mere textual, hierarchies of information, weight, emphasis, oblique stresses, priorities, all those subtle cues that also have visual and emotional appeal to the reader. Rigid proponents of content strategy may shun the use of dummy copy but then designers might want to ask them to provide style sheets with the copy decks they supply that are in tune with the design direction they require.</li>
                                </ul>
                            </div>
                        </li>
                </ul>
            </div>
        </>
    )
}

export default FAQ