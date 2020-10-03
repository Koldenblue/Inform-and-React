import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab"
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./Propositions.css";



function Prop() {

let propositions = [
  {
    "proposition": 14,
    "content": "AUTHORIZES BONDS TO CONTINUE FUNDING STEM CELL AND OTHER MEDICAL RESEARCH. INITIATIVE STATUTE. Authorizes $5.5 billion in state general obligation bonds to fund grants from the California Institute of Regenerative Medicine to educational, non-profit, and private entities for: (1) stem cell and other medical research, therapy development, and therapy delivery; (2) medical training; and (3) construction of research facilities. Dedicates $1.5 billion to fund research and therapy for Alzheimer's, Parkinson's, stroke, epilepsy, and other brain and central nervous system diseases and conditions. Limits bond issuance to $540 million annually. Appropriates money from General Fund to repay bond debt, but postpones repayment for first five years. Summary of estimate by Legislative Analyst and Director of Finance of fiscal impact on state and local governments: State costs of $7.8 billion to pay off principal ($5.5 billion) and interest ($2.3 billion) on the bonds. Associated average annual debt payments of about $310 million for 25 years. The costs could be higher or lower than these estimates depending on factors such as the interest rate and the period of time over which the bonds are repaid. The state General Fund would pay most of the costs, with a relatively small amount of interest repaid by bond proceeds. A YES vote on this measure means: The state could sell $5.5 billion in general obligation bonds primarily for stem cell research and the development of new medical treatments in California.  A NO vote on this measure means: The state could not sell $5.5 billion in general obligation bonds primarily for stem cell research and the development of new medical treatments in California"
  },
  {
    "proposition": 15,
    "content": "INCREASES FUNDING FOR PUBLIC SCHOOLS, COMMUNITY COLLEGES, AND LOCAL GOVERNMENT SERVICES BY CHANGING TAX ASSESSMENT OF COMMERCIAL AND INDUSTRIAL PROPERTY. INITIATIVE CONSTITUTIONAL AMENDMENT. Increases funding for K-12 public schools, community colleges, and local governments by requiring that commercial and industrial real property be taxed based on current market value. Exempts from this change: residential properties; agricultural properties; and owners of commercial and industrial properties with combined value of $3 million or less. Increased education funding will supplement existing school funding guarantees. Exempts small businesses from personal property tax; for other businesses, exempts $500,000 worth of personal property. Summary of estimate by Legislative Analyst and Director of Finance of fiscal impact on state and local governments: Net increase in annual property tax revenues of $7.5 billion to $12 billion in most years, depending on the strength of real estate markets. After backfilling state income tax losses related to the measure and paying for county administrative costs, the remaining $6.5 billion to $11.5 billion would be allocated to schools (40 percent) and other local governments (60 percent). A YES vote on this measure means: Property taxes on most commercial properties worth more than $3 million would go up in order to provide new funding to local governments and schools. A NO vote on this measure means: Property taxes on commercial properties would stay the same. Local governments and schools would not get new funding."
  },
  {
    "proposition": 16,
    "content": "ALLOWS DIVERSITY AS A FACTOR IN PUBLIC EMPLOYMENT, EDUCATION, AND CONTRACTING DECISIONS. LEGISLATIVE CONSTITUTIONAL AMENDMENT. A YES vote on this measure means: State and local entities could consider race, sex, color, ethnicity, and national origin in public education, public employment, and public contracting to the extent allowed under federal and state law. A NO vote on this measure means: The current ban on the consideration of race, sex, color, ethnicity, and national origin in public education, public employment, and public contracting would remain in effect."
  },
  {
    "proposition": 17,
    "content": "RESTORES RIGHT TO VOTE AFTER COMPLETION OF PRISON TERM. LEGISLATIVE CONSTITUTIONAL AMENDMENT. A YES vote on this measure means: People on state parole who are U.S. citizens, residents of California, and at least 18 years of age would be able to vote, if they register to vote. A NO vote on this measure means: People on state parole would continue to be unable to vote in California."
  },
  {
    "proposition": 18,
    "content": "AMENDS CALIFORNIA CONSTITUTION TO PERMIT 17-YEAR-OLDS TO VOTE IN PRIMARY AND SPECIAL ELECTIONS IF THEY WILL TURN 18 BY THE NEXT GENERAL ELECTION AND BE OTHERWISE ELIGIBLE TO VOTE. LEGISLATIVE CONSTITUTIONAL AMENDMENT. A YES vote on this measure means: Eligible 17-year-olds who will be 18 years old by the time of the next general election may vote in the primary election and any special elections preceding the general election. A NO vote on this measure means: No one younger than 18 years of age may vote in any election."
  },
  {
    "proposition": 19,
    "content": "CHANGES CERTAIN PROPERTY TAX RULES. LEGISLATIVE CONSTITUTIONAL AMENDMENT. A YES vote on this measure means: All homeowners who are over 55 (or who meet other qualifications) would be eligible for property tax savings when they move. Only inherited properties used as primary homes or farms would be eligible for property tax savings. A NO vote on this measure means: Some homeowners who are over 55 (or who meet other qualifications) would continue to be eligible for property tax savings when they move. All inherited properties would continue to be eligible for property tax savings."
  },
  {
    "proposition": 20,
    "content": "RESTRICTS PAROLE FOR NON-VIOLENT OFFENDERS. AUTHORIZES FELONY SENTENCES FOR CERTAIN OFFENSES CURRENTLY TREATED ONLY AS MISDEMEANORS. INITIATIVE STATUTE.Imposes restrictions on parole program for non-violent offenders who have completed the full term for their primary offense. Expands list of offenses that disqualify an inmate from this parole program. Changes standards and requirements governing parole decisions under this program. Authorizes felony charges for specified theft crimes currently chargeable only as misdemeanors, including some theft crimes where the value is between $250 and $950. Requires persons convicted of specified misdemeanors to submit to collection of DNA samples for state database. Summary of estimate by Legislative Analyst and Director of Finance of fiscal impact on state and local government: Increased state and local correctional costs likely in the tens of millions of dollars annually, primarily related to increases in penalties for certain theft-related crimes and the changes to the nonviolent offender release consideration process. Increased state and local court-related costs of around a few million dollars annually related to processing probation revocations and additional felony theft filings. Increased state and local law enforcement costs not likely to exceed a couple million dollars annually related to collecting and processing DNA samples from additional offenders. A YES vote on this measure means: People who commit certain theft-related crimes (such as repeat shoplifting) could receive increased penalties (such as longer jail terms). Additional factors would be considered for the state’s process for releasing certain inmates from prison early. Law enforcement would be required to collect DNA samples from adults convicted of certain misdemeanors. A NO vote on this measure means: Penalties for people who commit certain theft-related crimes would not be increased. There would be no change to the state’s process for releasing certain inmates from prison early. Law enforcement would continue to be required to collect DNA samples from adults only if they are arrested for a felony or required to register as sex offenders or arsonists."
  },
  {
    "proposition": 21,
    "content": "EXPANDS LOCAL GOVERNMENTS' AUTHORITY TO ENACT RENT CONTROL ON RESIDENTIAL PROPERTY. INITIATIVE STATUTE.  Amends state law to allow local governments to establish rent control on residential properties over 15 years old. Allows rent increases on rent-controlled properties of up to 15 percent over three years from previous tenant's rent above any increase allowed by local ordinance. Exempts individuals who own no more than two homes from new rent-control policies. In accordance with California law, provides that rent-control policies may not violate landlords' right to a fair financial return on their property. Summary of estimate by Legislative Analyst and Director of Finance of fiscal impact on state and local governments: Potential reduction in state and local revenues of tens of millions of dollars per year in the long term. Depending on actions by local communities, revenue losses could be less or more. A YES vote on this measure means: State law would allow cities and counties to apply more kinds of rent control to more properties than under current law. A NO vote on this measure means: State law would maintain current limits on rent control laws cities and counties can apply."
  },
  {
    "proposition": 22,
    "content": "CHANGES EMPLOYMENT CLASSIFICATION RULES FOR APP-BASED TRANSPORTATION AND DELIVERY DRIVERS, EXEMPTS APP-BASED TRANSPORTATION AND DELIVERY COMPANIES FROM PROVIDING EMPLOYEE BENEFITS TO CERTAIN DRIVERS, INITIATIVE STATUTE.  Establishes different criteria for determining whether app-based transportation (rideshare) and delivery drivers are 'employees' or 'independent contractors.' Independent contractors are not entitled to certain state-law protections afforded employees—including minimum wage, overtime, unemployment insurance, and workers' compensation. Instead, companies with independent-contractor drivers will be required to provide specified alternative benefits, including: minimum compensation and healthcare subsidies based on engaged driving time, vehicle insurance, safety training, and sexual harassment policies. Restricts local regulation of app-based drivers; criminalizes impersonation of such drivers; requires background checks. Summary of estimate by Legislative Analyst and Director of Finance of fiscal impact on state and local governments: Increase in state personal income tax revenue of an unknown amount. A YES vote on this measure means: App-based rideshare and delivery companies could hire drivers as independent contractors. Drivers could decide when, where, and how much to work but would not get standard benefits and protections that businesses must provide employees. A NO vote on this measure means: App-based rideshare and delivery companies would have to hire drivers as employees if the courts say that a recent state law makes drivers employees. Drivers would have less choice about when, where, and how much to work but would get standard benefits and protections that businesses must provide employees."
  },
  {
    "proposition": 23,
    "content": "AUTHORIZES STATE REGULATION OF KIDNEY DIALYSIS CLINICS. ESTABLISHES MINIMUM STAFFING AND OTHER REQUIREMENTS. REQUIRES ON-SITE MEDICAL PROFESSIONAL. INITIATIVE STATUTE. Requires at least one licensed physician on site during treatment at outpatient kidney dialysis clinics; authorizes Department of Public Health to exempt clinics from this requirement due to shortages of qualified licensed physicians if at least one nurse practitioner or physician assistant is on site. Requires clinics to report dialysis-related infection data to state and federal governments. Requires state approval for clinics to close or reduce services. Prohibits clinics from discriminating against patients based on the source of payment for care. Summary of estimate by Legislative Analyst and Director of Finance of fiscal impact on state and local governments: Increased state and local health care costs, likely in the low tens of millions of dollars annually, resulting from increased dialysis treatment costs. A YES vote on this measure means: Chronic dialysis clinics would be required to have a doctor onsite during all patient treatment hours. A NO vote on this measure means: Chronic dialysis clinics would not be required to have a doctor onsite during all patient treatment hours."
  },
  {
    "proposition": 24,
    "content": "AMENDS CONSUMER PRIVACY LAWS. INITIATIVE STATUTE. Permits consumers to: (1) prevent businesses from sharing personal information; (2) correct inaccurate personal information; and (3) limit businesses' use of 'sensitive personal information'—such as precise geolocation; race; ethnicity; religion; genetic data; union membership; private communications; and certain sexual orientation, health, and biometric information. Changes criteria for which businesses must comply with these laws. Prohibits businesses' retention of personal information for longer than reasonably necessary. Triples maximum penalties for violations concerning consumers under age 16. Establishes California Privacy Protection Agency to enforce and implement consumer privacy laws, and impose administrative fines. Requires adoption of substantive regulations. Summary of estimate by Legislative Analyst and Director of Finance of fiscal impact on state and local governments: Increased annual state costs of roughly $10 million for a new state agency to monitor compliance and enforcement of consumer privacy laws. Increased state costs, potentially reaching the low millions of dollars annually, from increased workload to DOJ and the state courts, some or all of which would be offset by penalty revenues. Unknown impact on state and local tax revenues due to economic effects resulting from new requirements on businesses to protect consumer information. A YES vote on this measure means: Existing consumer data privacy laws and rights would be expanded. Businesses required to meet privacy requirements would change. A new state agency and the state’s Department of Justice would share responsibility for overseeing and enforcing state consumer privacy laws. A NO vote on this measure means: Businesses would continue to be required to follow existing consumer data privacy laws. Consumers would continue to have existing data privacy rights. The state’s Department of Justice would continue to oversee and enforce these laws."
  },
  {
    "proposition": 25,
    "content": "REFERENDUM TO OVERTURN A 2018 LAW THAT REPLACED MONEY BAIL SYSTEM WITH A SYSTEM BASED ON PUBLIC SAFETY AND FLIGHT RISK.  If this petition is signed by the required number of registered voters and timely filed, a referendum will be placed on the next statewide ballot requiring a majority of voters to approve a 2018 state law before it can take effect. The 2018 law replaces the money bail system with a system for pretrial release from jail based on a determination of public safety or flight risk, and limits pretrial detention for most misdemeanors. A YES vote on this measure means: No one would pay bail to be released from jail before trial. Instead, people would either be released automatically or based on their assessed risk of committing another crime or not appearing in court if released. No one would be charged fees as a condition of release. A NO vote on this measure means: Some people would continue to pay bail to be released from jail before trial. Other people could continue to be released without paying bail. Fees may continue to be charged as a condition of release."
  }
]

    return (
      
      
      <div className="card propositions">
        <h2 className="propHeader">PROPOSITIONS</h2>
        <>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        {propositions.map((prop) => {
            return (
                
                    <Tab eventKey={prop.proposition} className="cardContent" title={`PROPOSITION ${prop.proposition}`}>
                        <p>{prop.content}</p>
                    </Tab>
                
            )
        })}
        </Tabs>
        </>
        </div>
    )
}




export default Prop;
