import { useContext, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {

    const {activeChellenge, resetChallenge} = useContext(ChallengesContext);

    return (
        <div className={styles.challengeBoxContainer}>
            {activeChellenge ? (
                <div className={styles.challengeActive}>
                    <header> Ganhe {activeChellenge.amount} XP</header>
                    
                    <main>
                        <img src={`icons/${activeChellenge.type}.svg`} alt=""/>
                        <strong>Novo Desafio</strong>

                        <p>{activeChellenge.description}</p>
                    </main>
                    <footer>
                        <button type="button" className={styles.challengeFailedButton}
                        onClick={resetChallenge}>
                            Falhei
                        </button>
                        <button type="button" className={styles.challengeSucceededButton}>
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                    <div className={styles.challengeNoActive}>
                        <strong>
                            Finalize um ciclo para receber um desafio
                </strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Level Up" />
                    Avance de level completando desafios
                </p>
                    </div>
                )}
        </div>
    )
}