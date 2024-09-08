import './language-block.css';

function LanguageBlock(props: any) {
  
    function calculateYears(dateString: string): number {
        const date: Date = new Date(dateString);

        const currentDate: Date = new Date();
        let years: number = currentDate.getFullYear() - date.getFullYear();
        
        const currentMonth: number = currentDate.getMonth();
        const givenMonth: number = date.getMonth();
    
        const currentDay: number = currentDate.getDate();
        const givenDay: number = date.getDate();
    
        if (currentMonth < givenMonth || (currentMonth === givenMonth && currentDay < givenDay)) {
            years--;
        }
    
        return years;
    }    

    const numberOfYears: number = calculateYears(props.years);

    return (
        <div className="language-inner-container">
            <div className="language-container">
                
                <div className="language-number-name-container">
                    <div className="language-number-container">
                        <p>{props.number}</p>
                    </div>
                    <div className="language-name-years-container">
                        <p className='language-name'><span className='language-name-span'>{props.spanName}</span> ({props.name})</p>
                        <p className='language-years'>• Speaking for {numberOfYears}+ years</p>
                    </div>
                </div>
                <div className="language-proficiency-container">
                    <p className='language-proficiency-p'>{props.level}</p>
                </div>
                
            </div>
        </div>
    );
}

export default LanguageBlock;