import { CardsModule } from './cards.module';

describe('CardsModule', () => {
  let cardsModule: CardsModule;

  beforeEach(() => {
    cardsModule = new CardsModule();
  });

  it('should create an instance', () => {
    expect(cardsModule).toBeTruthy();
  });
});
