import React, {Component} from 'react';
import { Document, Page } from 'react-pdf';
import resumePDF from './Kristy_resume.pdf';
import './ResumePage.css';
import ParticleEffectButton from 'react-particle-effect-button'


class Resume extends Component {
    state = {
        numPages: null,
        pageNumber: 1,
        hidden: false,
        initialHide: false
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
      }
    preHide = () => setTimeout(() => {this.setState({ initialhide: true })},2000);
    render() {
        const { pageNumber, numPages} = this.state;
        return (
            <div id="ResumeContainer" align-items="center">
            <ParticleEffectButton
        id = "EffectButton"
        color='purple'
        hidden={this.state.hidden}
        duration={2000}
        onBegin={this.preHide}
      >
      <button
        className={"button_button3"}
        style={{ visibility: this.state.initialhide ? "hidden" : "visible" }}
        onClick ={() => this.setState({ hidden: true })}
        href={"./Kristy_resume.pdf"}
><h4 className="button_text">Download me!</h4></button>
      </ParticleEffectButton>

                <Document
                    className={"PDFDocument"}
                    file={resumePDF}
                    onLoadSuccess={this.onDocumentLoadSuccess}>
                    <Page
                    className={"PDFPage PDFPageOne"}
                    pageNumber={pageNumber}/>
                </Document>

                {/* <p>Page {pageNumber} of {numPages}</p> */}

            </div>


        );
    }
}

export default Resume;
