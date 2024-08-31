import LanguageBlock from './language-block';
import './language-view.css';
import LineDivider from './line-divider';

function LanguageView() { 

    return (
        <div className='language-view-container' id='languages'>
            <div className="language-view-content">
                <div className="language-inner-content">
                    <div className="language-title-container">
                        <h3>Hei hei, <span className='language-span'>hvordan går det</span>?</h3>
                        <p>An overview of the languages I communicate in fluently.</p>
                    </div>
                    <div className="languages-container">

                        <LanguageBlock
                            key={1}
                            number={1}
                            spanName={'Nederlands'}
                            name={'Dutch'}
                            level={'Native'}
                            years={'2004-01-20'}
                        />

                        <LineDivider
                            dark={false}
                        />

                        <LanguageBlock
                            key={2}
                            number={2}
                            spanName={'English'}
                            name={'English'}
                            level={'Second language'}
                            years={'2015-06-15'}
                        />

                        <LineDivider
                            dark={false}
                        />

                        <LanguageBlock
                            key={3}
                            number={3}
                            spanName={'Norsk bokmål'}
                            name={'Norwegian'}
                            level={'Work level proficiency'}
                            years={'2019-08-15'} 
                        />

                        <LineDivider
                            dark={false}
                        />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default LanguageView;