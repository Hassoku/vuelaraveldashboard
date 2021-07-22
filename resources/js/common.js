export default{
	data(){
		return{

		}
	},
	methods:{
		callApi(method, url, data){
			try{
			return await	axios({
  method: method,
  url: url,
  data: data
});

			}catch(e){
				e.response

			}
		}
	}
}

