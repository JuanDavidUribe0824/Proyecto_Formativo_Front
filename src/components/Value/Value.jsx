import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./Value.css";
import data from "../../utils/accordion";
import { useState } from "react";

const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/*Left Side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.jpg" alt="Value" />
          </div>
        </div>

        {/*Right Side */}
        <div className="flexColStart v-right">
          <span className="orangeText">Nuestro Valor</span>
          <span className="primaryText">Valor que le damos</span>
          <span className="secondaryText">
          Siempre estamos dispuestos a ayudarle ofreciéndole los mejores servicios.
            <br />
            Creemos que un buen servicio puede hacer de su vida mucho mejor.
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >{
              data.map((item, i) => {
                const [className, setClassName] = useState(null)
                return (
                  <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                    <AccordionItemHeading>
                      <AccordionItemButton className="flexCenter accordionButton">

                        <AccordionItemState>
                          {({ expanded }) =>
                            expanded
                              ? setClassName("expanded")
                              : setClassName("collapsed")
                          }
                        </AccordionItemState>


                        <div className="flexCenter icon">{item.icon}</div>
                        <span className="primaryText">
                          {item.heading}
                        </span>
                        <div className="flexCenter icon">
                          <MdOutlineArrowDropDown size={20} />
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p className="secondaryText">{item.detail}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                )
              })
            }

          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
