import { LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions } from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';
import { formatDate } from '../helpers';
import saveIcon from '../img/icono_ahorro.svg';
import houseIcon from '../img/icono_casa.svg';
import eatsIcon from '../img/icono_comida.svg';
import expensesIcon from '../img/icono_gastos.svg';
import leisureIcon from '../img/icono_ocio.svg';
import healthIcon from '../img/icono_salud.svg';
import suscriptionsIcon from '../img/icono_suscripciones.svg';
import savingsIcon from '../img/icono_ahorro.svg';

const iconsDictionary = {
  guardar: saveIcon,
  comida: eatsIcon,
  casa: houseIcon,
  gastos: expensesIcon,
  ocio: leisureIcon,
  salud: healthIcon,
  suscripciones: suscriptionsIcon,
  ahorro: savingsIcon,
};

export const Expense = ({ expense }) => {
  const { category, name, current, id, date } = expense;

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => console.log('Editar ...')}>Editar</SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => console.log('borrar...')}>Eliminar</SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img
              src={iconsDictionary[category]}
              alt="Expense expense"
            />
            <div className="descripcion-gasto">
              <p className="categoria">{category}</p>
              <p className="nombre-gasto">{name}</p>
              <p className="fecha-gasto">
                Agregar el : {''}
                <span>{formatDate(date)}</span>
              </p>
            </div>
          </div>
          <p className="cantidad-gasto">${current}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};
