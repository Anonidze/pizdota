#pragma strict




var target : RaycastHit;
var weight : float = 0;
var liftSpeed : float = 0.000001;
var down : boolean = false;



function Start () {
 
}

function Update () {




 
	if (Input.GetMouseButton(1)) 
   	{
		
		if (!down)
		{
			var ray : Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
			var hit : RaycastHit ;

			Physics.Raycast(ray,  target);
			target.point.y = this.transform.position.y;

		
			var agent : NavMeshAgent = this.GetComponent(NavMeshAgent);
			agent.SetDestination(target.point);
			down = true;
			
		}
	
   	}
   	else
   	{
   		down = false;
   	}


}