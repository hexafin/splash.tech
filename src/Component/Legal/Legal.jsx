import React, { Component } from 'react';
import './Legal.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Landing extends Component {
    state = {
    }
    render() {
        return (
            <React.Fragment>
                    <section className="sp-terms-page">
                        <div className="container">
                            <div className="sp-terms-ofues-page">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h2>Terms of Use</h2>
                                        <h3>Introduction.</h3>
                                        <p>Hexa Financial, Inc. ("Splash") and all subsidiaries and affiliates provides to you this website ("Web Site") for your personal informational, educational and entertainment use. The following Terms of Use govern your access and use of this Web Site. Please read these Terms of Use carefully before using this Web Site. Also, specific terms and conditions may apply to specific Content (as defined below) on or available through this Web Site (the "Content") and to specific content, data, materials, or information you may upload, submit and/or publish to the Web Site ("User Content") or transactions conducted through this Website. Such specific terms may be in addition to these Terms of Use or, where and then only to the extent expressly specified, may supersede these Terms of Use. When used in these Terms of Use, "we" and "our" means Splash, and "you" and "your" refers to any individual, company or legal entity that accesses or otherwise uses this Web Site.</p>
                                        <div className="sp-listing">
                                            <h4>1. Acceptance of Terms of Use.</h4>
                                            <p>By accessing, browsing or using this Website, you agree to be bound by these Terms of Use and all terms and conditions contained or referenced herein or any additional terms and conditions set forth on this Web Site. If you do NOT agree to all of these terms, you should NOT access or use this Web Site.</p>
                                        </div>
                                        <div className="sp-listing">
                                            <h4>2. Modification of Terms.</h4>
                                            <p>These Terms of Use may be amended by Splash, in its sole discretion, at any time without notice to you. Such amended Terms of Use shall be effective upon posting. By continuing to access or use this Web Site, you will be deemed to have accepted such amendments. You are advised to regularly review any applicable terms and conditions. Splash reserves the right to discontinue or make changes or updates with respect to the Web Site or the Content of the Web Site at any time without notice.</p>
                                        </div>
                                        <div className="sp-listing">
                                            <h4>3. Privacy Notice.</h4>
                                            <p>Personal information provided through this Web Site shall be used in accordance with the Privacy Policy and these Terms of Use are subject to the Privacy Policy Notice as posted on this Web Site.</p>
                                        </div>
                                        <div className="sp-listing">
                                            <h4>4. Copyright and Trademarks.</h4>
                                            <p>You acknowledge that all content on this Web Site, including the Web Site's design, graphics, text, formatting, sounds, pictures, images, software, and other materials and information on this Website, and the selection and arrangement thereof (collectively, "Content"), are the property of Splash or its licensors, and are subject to and protected by United States and international copyright and other intellectual property laws and rights. All rights to Content not expressly granted in these Terms of Use are reserved to their respective intellectual property right owners. Except as expressly authorized in these Terms of Use or on the Web Site, you may not copy, reproduce, distribute, republish, download, perform, display, post, transmit, exploit, create derivative works or otherwise use any of the Content in any form or by any means, without the prior written authorization of Splash or the respective intellectual property rights owner. Splash authorizes you to view and download the Content only for personal, non-commercial use, provided that you keep intact all copyright and other proprietary notices contained in the original Content. You may not modify or adapt the Content in any way or otherwise use them for any public or commercial purposes. The trademarks, service marks, trade names, trade dress and logos (collectively, "Marks") contained or described on this Web Site are the sole property of Splash and/or its licensors and may not be copied, imitated or otherwise used, in whole or in part, without the prior written authorization of Splash and/or its licensors. In addition, all page headers, custom graphics, button icons and scripts are Marks of Splash and may not be copied, imitated or otherwise used, in whole or in part, without the prior written authorization of Splash. Splash will enforce its intellectual property rights to the fullest extent of the law.</p>
                                        </div>
                                        <div className="sp-listing">
                                            <h4>5. Links to Third Party Websites.</h4>
                                            <p>Links on the Web Site to third party websites are provided only as a convenience to you. If you use these links, you will leave the Web Site. Splash does not control or endorse any such third party websites expect those in relation to Splash. You agree that Splash and its affiliates will not be responsible or liable for any content, goods or services provided on or through these outside websites or for your use or inability to use such websites. You will use these links at your own risk. You are advised that other websites on the Internet, including third party websites linked from this Web Site, might contain material or information that some people may find offensive or inappropriate; or that is inaccurate, untrue, misleading or deceptive; or that is defamatory, libelous, infringing of others' rights or otherwise unlawful. Splash expressly disclaims any responsibility for the content, legality, decency or accuracy of any information, and for any products and services, that appear on any third party website. Splash recommends that you make yourself aware of and read the legal and privacy notices of all other websites that you visit.</p>
                                        </div>
                                        <div className="sp-listing">
                                            <h4>6. Disclaimer of Warranties.</h4>
                                            <p>Splash strives to provide accurate and up-to-date material on this Web Site. However, we make no warranties or representations as to the accuracy or timeliness of the Content on this Web Site.</p>
                                            <p>YOUR USE OF THE WEB SITE IS AT YOUR SOLE RISK. THE WEB SITE AND THE CONTENT CONTAINED ON THIS WEB SITE ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. Splash EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. Splash MAKES NO WARRANTY THAT (I) THE WEB SITE WILL MEET YOUR REQUIREMENTS, (II) THE WEB SITE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, (III) THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE WEB SITE WILL BE ACCURATE OR RELIABLE, (IV) THE WEB SITE IS FREE FROM VIRUSES OR OTHER HARMFUL COMPONENTS, OR (V) ANY ERRORS IN THE WEB SITE WILL BE CORRECTED. ANY MATERIAL DOWNLOADED OR OTHERWISE OBTAINED THROUGH THIS WEB SITE IS PROVIDED AT YOUR OWN RISK, AND YOU ARE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR LOSS OF DATA THAT RESULTS FROM YOUR USE OF THE WEB SITE, INCLUDING WITHOUT LIMITATION, DAMAGES RESULTING FROM COMPUTER VIRUSES. SOME JURISDICTIONS MAY NOT PERMIT CERTAIN DISCLAIMERS OF WARRANTIES, SO SOME OF THE EXCLUSIONS ABOVE MAY NOT APPLY TO YOU. IN SUCH JURISDICTIONS, WE DISCLAIM WARRANTIES TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW.</p>
                                        </div>
                                        <div className="sp-listing">
                                            <h4>7. Disclaimer of Damages and Limitation of Liability.</h4>
                                            <p>NEITHER Splash OR ITS AFFILIATES SHALL UNDER ANY CIRCUMSTANCES BE LIABLE FOR ANY DAMAGES OF ANY KIND ARISING OUT OF, IN CONNECTION WITH OR RELATING TO YOUR ACCESS TO, OR USE OF OR INABILITY TO USE THIS WEB SITE OR ANY MATERIAL, OR ANY OTHER WEBSITE YOU ACCESS THROUGH A LINK FROM THIS WEB SITE, OR ANY INCORRECT OR INACCURATE INFORMATION ON THIS WEB SITE. THIS IS A COMPREHENSIVE LIMITATION OF LIABILITY THAT APPLIES TO ALL DAMAGES OF ANY KIND, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES (INCLUDING BUT NOT LIMITED TO PROPERTY DAMAGE, LOSS OF USE, LOSS OF DATA, LOSS OF BUSINESS, ECONOMIC LOSS OR LOSS OF PROFITS), WHETHER BASED ON BREACH OF CONTRACT, BREACH OF WARRANTY, TORT (INCLUDING NEGLIGENCE) OR OTHERWISE, EVEN IF Splash HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE OR LOSS. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, YOU EXPRESSLY WAIVE ALL CLAIMS AGAINST Splash AND ITS AFFILIATES AND THEIR OFFICERS, DIRECTORS, EMPLOYEES, SUPPLIERS AND PROGRAMMERS THAT MAY ARISE FROM YOUR ACCESS OR USE OF THIS SITE.</p>
                                        </div>
                                        <div className="sp-listing">
                                            <h4>8. Indemnification and Release.</h4>
                                            <p>You agree to indemnify, defend and hold harmless Splash and its affiliates against all claims, demands, causes of action, losses, expenses, damages and costs, including any reasonable attorneys' fees, resulting or arising from or relating to your use of or conduct on the Web Site, any activity related to use of the Web Site by you, any message or material that you submit to, post on or transmit through the Web Site, your violation of these Terms of Use, your infringement or violation of any rights of another, or termination of your access to the Web Site. If you have a dispute with one or more users, you release Splash and its affiliates from claims, demands and damages (actual and consequential) of every kind and nature, known and unknown, arising out of or in any way connected with such disputes.</p>
                                        </div>
                                        <div className="sp-listing">
                                            <h4>9. No Unlawful or Prohibited Activity.</h4>
                                            <p>As a condition of your use of this Web Site, you agree not to use the Web Site for any purpose that is unlawful or prohibited by these terms and conditions. You further agree that you are responsible for your use of and communications on the Web Site. You agree not to post on or transmit through this Web Site any unlawful, infringing, threatening, harassing, defamatory, vulgar, obscene, profane, indecent, offensive, hateful or otherwise objectionable material of any kind, including any material that encourages criminal conduct or conduct that would give rise to civil liability, violates the privacy rights of others, infringes others' intellectual property rights or otherwise violates any applicable local, state, national or international law. You agree not to use this Web Site in any manner that interferes with its normal operation or with any other user's use and enjoyment of the Site. You agree to use reasonable efforts to scan and remove any viruses or other contaminating or destructive features before submitting any material. Splash reserves the right, in its sole discretion, to suspend or terminate your access to this Web Site and prohibit any and all current and future use of this Web Site (or any portion thereof) by you, if you fail to comply with any term or provision of these Terms of Use or your use is harmful to the interests of another user of this Web Site.</p>
                                        </div>
                                        <div className="sp-listing">
                                            <h4>10. Shut-down of Web Site.</h4>
                                            <p>Splash reserves the right at any time and from time to time to modify or discontinue, temporarily or permanently, the Web Site (or any part thereof) with or without notice or consent. Splash and its affiliates shall have no responsibility or liability for failure to store or delete any Content or User Content submitted to the Web Site.</p>
                                        </div>
                                        <div className="sp-listing">
                                            <h4>11. Governing Law and Dispute Resolution.</h4>
                                            <p>These Terms of Use shall be governed by, and construed in accordance with, the laws of the United States and the State of New York, without giving effect to conflicts of law principles thereof. Splash makes no representations that the material and information on this Web Site are appropriate or available in all national locations or languages. You agree that any action at law or in equity arising from or relating to the use of this Web Site or to these Terms of Use shall be brought exclusively in the Federal or State Courts residing in New York. You hereby consent and submit to personal jurisdiction in of such courts for the purposes of any action relating to this Web Site, your access or use thereof, or these Terms of Use, and to extra-territorial service of process.</p>
                                        </div>
                                        <div className="sp-listing">
                                            <h4>12. Severability.</h4>
                                            <p>If any provision of these Terms of Use is held to be unlawful, void, or for any reason unenforceable by a court of competent jurisdiction, then the invalid or unenforceable provision shall be replaced by a valid, enforceable provision that most closely matches the intent of the original provision, and the validity and enforceability of any remaining provisions shall not be affected.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="sp-terms-page sp-privacy-main">
                        <div className="container">
                            <div className="sp-terms-ofues-page">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h2>Privacy Notice</h2>
                                        <h3>This document is available in accessible formats upon request.</h3>
                                        <p>This Privacy Notice informs you about the types of personal information collected through the Splash Studios, LLC ("we, our or us") website ("Site"), and how we use, share and protect that information.</p>
                                    <div className="sp-listing">
                                        <h4>Applicability of this Privacy Notice.</h4>
                                        <p>This Privacy Notice applies to the personal information we collect on this Site (at www.Splash.ltd) and not to any information that we collect through other methods or services, including websites owned or operated by our affiliates, vendors or partners.</p>
                                    </div>
                                    <div className="sp-listing">
                                        <h4>Information You Provide to Us.</h4>
                                        <p>We may collect and store personal information that you choose to voluntarily provide to us when you contact us, such as when you contact us for business purposes or in relation to a job application. Personal information may include your name, email address, telephone number, and your resume. We use the information you provide to respond to your request or question or to process your application for employment. We may also use the information to communicate with you about other topics that we think may be of interest to you.</p>
                                    </div>
                                    <div className="sp-listing">
                                        <h4>Information We Collect by Automated Means.</h4>
                                        <p>We are committed to making your online experience with our Site informative and relevant. To achieve this, we collect certain information by automated means when you visit this Site, such as your IP address, the type of internet browser you are using, operating system, referring URLs, information on actions taken on the Site, how many users visited our Site and dates and times of Site visits. By collecting this information, we learn how to best tailor this Site to our visitors. We collect this information by various means, as explained below.</p>
                                    </div>
                                    <div className="sp-listing">
                                        <h4>Cookies.</h4>
                                        <p>Cookies are bits of text that are placed on your computer's hard drive or Internet-connected device when you visit certain websites. Cookie technology hold information a site may need to personalize a visitor's experience. Cookies may also be used for security purposes and to gather website statistical data, such as which pages are visited, what is downloaded, and the paths taken by visitors to our website as they move from page to page.</p>
                                        <p>You do have control over cookies, and can refuse the use of cookies by selecting the appropriate settings on your browser. Note, however, that by not accepting or deleting the use of cookies, you may affect your website experience and you may not be able to take full advantage of all features on this Site. Most browsers will tell you how to stop accepting new cookies, how to be notified when you receive a new cookie, and how to disable existing cookies. Please consult the "Help" section of your browser for more information.</p>
                                    </div>
                                    <div className="sp-listing">
                                        <h4>Google Analytics.</h4>
                                        <p>We may also use third-party web analytics services on this Site, such as Google Analytics. Google Analytics uses technologies such as cookies to help analyze how users use this website. The information generated by the cookie about your use of this Site (such as your IP address, the URL visited, the date and time the page was viewed) will be transmitted and stored by Google on servers in the United States. Google will use this information to monitor your use of this Site, compiling reports on website activity for website operators and providing other services related to website activity and internet usage. Google may transfer this information to third parties where required by law, or where such third parties process information on Google's behalf. For more information about Google's privacy policy in respect of Google Analytics, please refer to <a href="http://www.google.com/analytics/learn/privacy.html" target="blank">http://www.google.com/analytics/learn/privacy.html.</a> You may opt out of Google Analytics by visiting <a href="https://tools.google.com/dlpage/gaoptout?hl+en=GB." target="blank">https://tools.google.com/dlpage/gaoptout?hl+en=GB.</a></p>
                                    </div>
                                    <div className="sp-listing">
                                        <h4>How We Use the Information We Collect.</h4>
                                        <p>We may use the information we obtain about you both to further our relationship with you and for other purposes, including to:</p>
                                        <ul>
                                            <li>process, evaluate and respond to your requests and inquiries;</li>
                                            <li>verify your identity to ensure security for the other purposes listed here;</li>
                                            <li>operate, evaluate and improve our business (including developing new services; managing our communications; learning about our visitors, analyzing our services and website; and facilitating the functionality of our website);</li>
                                            <li>process applications for employment;</li>
                                            <li>perform data analyses (including anonymization of personal information);</li>
                                            <li>enforce our Terms of Use</li>
                                            <li> comply with applicable legal requirements and industry standards and our policies</li>
                                        </ul>
                                        <p>We may use personal information for other additional purposes. We will identify these additional purposes at the time of collection.</p>
                                    </div>
                                    <div className="sp-listing">
                                        <h4>Sharing Information.</h4>
                                        <p>We do not sell or otherwise disclose personal information we collect about you, except as described herein or otherwise disclose to you at the time the data is collected. We also may share information provided by our visitors to this Site with service providers we have retained to perform services on our behalf, including without limitation, hosting or operating this Site, carrying out your requests, responding to your inquiries, and analyzing data. We require these service providers by contract to appropriately safeguard the privacy and security of personal information they process on our behalf. We may disclose information about you as compelled or required by law, to law enforcement authorities or other government officials, to protect or defend our legal rights, or in order to investigate, prevent or take action regarding illegal activities, suspected fraud, or violations for our Terms and conditions for using this Site or other applicable policies.</p>
                                        <p>We also reserve the right to transfer personal information we have about you in the event that we sell or transfer all or a portion of our business assets.</p>
                                    </div>
                                    <div className="sp-listing">
                                        <h4>Data Transfer.</h4>
                                        <p>We do not sell or otherwise disclose personal information we collect about you, except as described herein or otherwise disclose to you at the time the data is collected. We also may share information provided by our visitors to this Site with service providers we have retained to perform services on our behalf, including without limitation, hosting or operating this Site, carrying out your requests, responding to your inquiries, and analyzing data. We require these service providers by contract to appropriately safeguard the privacy and security of personal information they process on our behalf. We may disclose information about you as compelled or required by law, to law enforcement authorities or other government officials, to protect or defend our legal rights, or in order to investigate, prevent or take action regarding illegal activities, suspected fraud, or violations for our Terms and conditions for using this Site or other applicable policies.</p>
                                    </div>
                                    <div className="sp-listing">
                                        <h4>Security.</h4>
                                        <p>The security of information is important to us, and we are committed to using reasonable measures to protect the personal information we may collect. However, due to the inherent open nature of the Internet, we cannot guarantee that communications between you and us or the information stored on this Site is absolutely secure.</p>
                                    </div>
                                    <div className="sp-listing">
                                        <h4>Security.</h4>
                                        <p>The security of information is important to us, and we are committed to using reasonable measures to protect the personal information we may collect. However, due to the inherent open nature of the Internet, we cannot guarantee that communications between you and us or the information stored on this Site is absolutely secure.</p>
                                    </div>
                                    <div className="sp-listing">
                                        <h4>Links to Other Websites.</h4>
                                        <p>This Site may provide links to other websites for your convenience and information. These websites may or may not operate independently from us. Linked sites may have their own privacy notices or policies, which we strongly encourage you to review to better understand their procedures for collecting, using and disclosing personal information. We are not responsible for the content of the linked websites, any use of these sites, or the privacy practices of these sites.</p>
                                    </div>
                                    <div className="sp-listing">
                                        <h4>Children.</h4>
                                        <p>This Site is not intended for children and we do not knowingly solicit personal data from or communicate with children under the age of 13. Further, this Site is not intended for incapacitated persons, and we do not knowingly solicit personal data from individuals who are incapacitated. If you become aware that your child, any child under your care, or a person otherwise not able to provide valid consent has provided us with information without a parent or guardian's consent, please contact us as described below.</p>
                                    </div>
                                    <div className="sp-listing">
                                        <h4>Access, Updates and Your Choices.</h4>
                                        <p>You can tell us at any time not to send you marketing communications by email by clicking on the unsubscribe link within the marketing emails you receive from us or by contacting us as indicated below. If you have provided us with personal information, you may request that it be updated, modified or deleted.</p>
                                    </div>
                                    <div className="sp-listing">
                                        <h4>Consent.</h4>
                                        <p>By using this Site, you consent to the processing of your personal information as described in this Privacy Notice.</p>
                                    </div>
                                    <div className="sp-listing">
                                        <h4>Contacting Us.</h4>
                                        <p>If you have any questions about this Privacy Notice or our privacy practices, please feel free to email us at <a href="mailto:support@splash.tech">support@splash.tech</a></p>
                                    </div>
                                    <div className="sp-listing">
                                        <h4>Changes to this Privacy Notice.</h4>
                                        <p>We reserve the right to change or add to this Privacy Notice from time to time and will post any revisions on this Site. We will indicate at the bottom of the Privacy Notice when it was most recently updated. We encourage you to check back often to review the latest version.</p>
                                        <p>Privacy Notice Effective Date: November 8, 2018.</p>
                                    </div>
                                    <div className="sp-listing">
                                        <p>Privacy Notice Effective Date: November 8, 2018.</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
            </React.Fragment>
        );
    }
    componentDidMount(){
        AOS.init();
        let element = document.body;
        element.scrollIntoView({block:'start'});
    }
}

export default Landing;