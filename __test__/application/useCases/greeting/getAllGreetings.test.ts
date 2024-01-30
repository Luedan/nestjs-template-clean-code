import { GetAllGreetings } from '@application/useCases/greeting/getAllGreetings';
import {
  FakeGreeting,
  FakeGreetingDto,
} from '../../../mocks/data/greeting.dummies';

describe('Get All Greetings use case', () => {
  const expectedGreeting = [FakeGreeting];

  const expectedGreetingResponse = [FakeGreetingDto];

  let _getAllGreetings: GetAllGreetings;

  let _mapperMock = {
    map: jest.fn().mockImplementation((payload) => payload),
  };

  let _greetingRepositoryMock = {
    getAll: jest.fn().mockImplementation(() => [
      {
        id: 1,
        message: 'Hello World',
      },
    ]),
  };
});
