import { VisuallyHidden } from '~/components/visually-hidden';
import { useReducedMotion, useSpring } from 'framer-motion';
import { memo, useEffect, useRef } from 'react';
import { delay } from '~/utils/delay';
import { classes } from '~/utils/style';
import styles from './decoder-text.module.css';

// prettier-ignore
const glyphs = [
  'ਅ', 'ਆ', 'ਇ', 'ਈ', 'ਉ',
  'ਊ', 'ਏ', 'ਐ', 'ਓ', 'ਔ',
  'ਕ', 'ਖ', 'ਗ', 'ਘ', 'ਙ',
  'ਚ', 'ਛ', 'ਜ', 'ਝ', 'ਞ',
  'ਟ', 'ਠ', 'ਡ', 'ਢ', 'ਣ',
  'ਤ', 'ਥ', 'ਦ', 'ਧ', 'ਨ',
  'ਪ', 'ਫ', 'ਬ', 'ਭ', 'ਮ',
  'ਯ', 'ਰ', 'ਲ', 'ਵ', 'ਸ਼',
  'ਸ', 'ਹ', 'ਖ਼', 'ਗ਼', 'ਜ਼',
  'ੜ', 'ਫ਼', '੦', '੧', '੨',
  '੩', '੪', '੫', '੬', '੭',
  '੮', '੯', 'ੰ', 'ੱ', 'ਂ',
];

const CharType = {
  Glyph: 'glyph',
  Value: 'value',
};

function shuffle(content, output, position) {
  return content.map((value, index) => {
    if (index < position) {
      return { type: CharType.Value, value };
    }

    if (position % 1 < 0.5) {
      const rand = Math.floor(Math.random() * glyphs.length);
      return { type: CharType.Glyph, value: glyphs[rand] };
    }

    return { type: CharType.Glyph, value: output[index].value };
  });
}

export const DecoderText = memo(
  ({ text, start = true, delay: startDelay = 0, className, ...rest }) => {
    const output = useRef([{ type: CharType.Glyph, value: '' }]);
    const container = useRef();
    const reduceMotion = useReducedMotion();
    const decoderSpring = useSpring(0, { stiffness: 8, damping: 5 });

    useEffect(() => {
      const containerInstance = container.current;
      const content = text.split('');
      let animation;

      const renderOutput = () => {
        const characterMap = output.current.map(item => {
          return `<span class="${styles[item.type]}">${item.value}</span>`;
        });

        containerInstance.innerHTML = characterMap.join('');
      };

      const unsubscribeSpring = decoderSpring.on('change', value => {
        output.current = shuffle(content, output.current, value);
        renderOutput();
      });

      const startSpring = async () => {
        await delay(startDelay);
        decoderSpring.set(content.length);
      };

      if (start && !animation && !reduceMotion) {
        startSpring();
      }

      if (reduceMotion) {
        output.current = content.map((value, index) => ({
          type: CharType.Value,
          value: content[index],
        }));
        renderOutput();
      }

      return () => {
        unsubscribeSpring?.();
      };
    }, [decoderSpring, reduceMotion, start, startDelay, text]);

    return (
      <span className={classes(styles.text, className)} {...rest}>
        <VisuallyHidden className={styles.label}>{text}</VisuallyHidden>
        <span aria-hidden className={styles.content} ref={container} />
      </span>
    );
  }
);
