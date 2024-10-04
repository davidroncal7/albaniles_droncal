//Script.js
//Pide información con fetch a la url:
//https://jsonplaceholder.typicode.com/posts/1.
//Loguea el status de la petición e
//imprime por pantalla el contenido del artículo que has recibido.

//Script.test.js
const { fetchData } = require('./11_6_fetch_json_flavia2023.js');


  test("La función fetchData() devuelve una respuesta indefined con un estado de 200", async () => {
    const response = await fetchData();

    expect(response.ok).toBe(undefined);
  });

  describe('Pruebas para fetchData', () => {
    it('debería manejar un error de red', async () => {
      const mockResponse = new Response(null, { status: 500 });
      global.fetch = jest.fn().mockResolvedValue(mockResponse);
      const response = await fetchData();
      expect(response).toBeUndefined();
    });

    it('debería manejar una respuesta exitosa', async () => {
      const mockData = {};
      const mockResponse = new Response(JSON.stringify(mockData), { status: 200 });
      global.fetch = jest.fn().mockResolvedValue(mockResponse);
      const response = await fetchData();
      expect(response).toEqual(JSON.stringify(mockData));
    });
  });

  it('debería manejar un error de red', async () => {
    global.fetch = jest.fn().mockImplementation(() => {
      return {
        status: 500,
        text: () => Promise.resolve('Network Error'),
      };
    });
    const response = await fetchData();
    expect(response).toBeUndefined();
  });

  it('debería manejar un error en la solicitud', async () => {
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(new Error('Network Error'));
    });

    const response = await fetchData();
    expect(response).toBeUndefined();
  });