import React from 'react';

/**
 * Information panel for the Flatris game/Cosmos demo, shown in between game
 * states.
 */
const InfoPanel = () => (
  <div className="info-panel">
    <p>
      <a href="https://github.com/skidding/flatris">Flatris</a> is a
      mobile-friendly implementation of Tetris, built using React & Redux.
    </p>
    <p>Use the arrow keys or buttons below to play.</p>
    <p>
      The game state is preserved between visits, so you can safely kill this
      tab when your employer is approaching and resume afterwards–including{' '}
      <a href="http://caniuse.com/#feat=serviceworkers">offline</a>
      !
    </p>
    <p>
      Check out the{' '}
      <a href="https://github.com/skidding/flatris">source code</a> when you're
      done playing.
    </p>
    <p>
      Built by <a href="https://twitter.com/skidding">@skidding</a>.
    </p>
    <style jsx>{`
      .info-panel {
        font-size: 1em;
        color: #34495f;
      }

      .info-panel p {
        margin: 1em;
        line-height: 1.5em;
      }

      .info-panel a {
        color: #34495f;
        font-weight: bold;
        text-decoration: none;
      }

      .info-panel a:hover {
        text-decoration: underline;
      }
    `}</style>
  </div>
);

export default InfoPanel;
