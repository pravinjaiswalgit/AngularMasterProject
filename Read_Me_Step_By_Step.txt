To Create New Angular Project : 
==================================
Step 0 : Required Node : 
Global : 
npm install -g @angular/cli
**OR**
Local : 
npm install @angular/cli
==================================
Step 1: Create Angular Project : 
ng new Project_Name
Ex : ng new AngularMasterProject
==================================
Step 2:
cd Project_Name
Ex : cd AngularMasterProject
==================================
Step 3: How to Run Angular Project ?
To Run Project and Test : 
ng serve -o
==================================
Step 4.0.0: Create Core Module which Hold Gloal Component and used in Most of the Page - without Routing :
ng g m core/component/component --flat --dry-run
ng g m core/component/component --flat

///////// Try ////////
ng g m core --dry-run
ng g c core/component/banner/banner --flat --dry-run
ng g c core/component/carousel/carousel --flat --dry-run



ng g c projectmodule/home/home --flat
ng g c projectmodule/solution/solution --flat
ng g c projectmodule/services/services --flat
ng g c projectmodule/about/about --flat
ng g c projectmodule/support/support --flat


/* Work Fine : Routing and Guard : Start */ 
Step 1: 
// Create Team Folder & Team Landing Component
ng g c projectmodule/team/teamlanding/teamlanding --flat --dry-run
ng g c projectmodule/team/teamldetails/teamldetails --flat --dry-run

Step 2: 
// Create Gard !!!! To Protect Routing : 
ng g g  projectmodule/team/teamldetails/teamldetails --flat --dry-run 

Step 3: 
//Create Team Service
ng g s projectmodule/team/team --flat --dry-run

Step 4: 
// Create iteam (interface)
This is Manual JOB ....

/* Work Fine : Routing and Guard : End */ 





//ng g c projectmodule/product/product --flat

//ng g m lazy-loading-module --routing --dry-run
ng g m projectmodule/product --routing --dry-run
ng g c projectmodule/product/productlanding/productlanding --flat --dry-run
/* Product Landing Details */
ng g c projectmodule/product/productlanginsubsection/productlanginsubsection --flat --dry-run
/* Bind Product JSON */
ng g s projectmodule/product/product --flat
/* Safegard Product Details Querystring Paramater */
ng g g  projectmodule/product/productdetails/productdetails --flat --dry-run
CanActivate






///////// End ////////

Step 4.0.1 : Create Component in Core Folder : Create Core Component Banner 
ng g c core/component/banner/banner --flat --dry-run
ng g c core/component/banner/banner --flat
(Banner Component will JSON Service to Consume Data From JSON File)

Step 4.1.0 : Create Service which is Golbal & Consume data from JSON File 
ng g s core/services/json/json --flat --dry-run
ng g s core/services/json/json --flat
(Golbal Service which Feed JSON file data to Component)

==================================
Step 5.0.0: Create Module with Routing - product :
ng g m component/product/product --routing --flat --dry-run
ng g m component/product/product --routing --flat
(Product Page Module : This is will Create Home Page Structure)

Step 5.0.1 : Create Service which is Required for Product Page ONLY
ng g s component/product/product --flat --dry-run
ng g s component/product/product --flat
(Services Required for Product Landing Page : This is will Create Home Page Structure)

Step 5.0.2 : Create Prodcut Component  
ng g c component/product/product --flat --dry-run
ng g c component/product/product --flat


Repat Same for following modules : 
Home
Product
Solution
Services
About
Support

----------------------------------

Step 5.1.0: Create Module with Routing - about :
ng g m component/about/about --routing --flat --dry-run
ng g m component/about/about --routing --flat
(About Page Module : This is will Create Home Page Structure)

Step 5.1.1 : Create Service which is Required for about Page ONLY
ng g s component/about/about --flat --dry-run
ng g s component/about/about --flat
(Services Required for about Page  : This is will Create Home Page Structure)

Step 5.1.2 : Create aboutus Component  
ng g c component/about/about --flat --dry-run
ng g c component/about/about --flat


----------------------------------

Step 5.2.0: Create Module with Routing - solution :
ng g m component/solution/solution --routing --flat --dry-run
ng g m component/solution/solution --routing --flat
(Solution Page Module : This is will Create Solution Page Structure)

Step 5.2.1 : Create Service which is Required for about Page ONLY
ng g s component/solution/solution --flat --dry-run
ng g s component/solution/solution --flat
(Services Required for solution page  : This is will Create Solution Page Structure)

Step 5.2.2 : Create solution Component  
ng g c component/solution/solution --flat --dry-run
ng g c component/solution/solution --flat


----------------------------------

Step 5.3.0: Create Module with Routing - services :
ng g m component/services/services --routing --flat --dry-run
ng g m component/services/services --routing --flat
(Solution Page Module : This is will Create Solution Page Structure)

Step 5.3.1 : Create Service which is Required for about Page ONLY
ng g s component/services/services --flat --dry-run
ng g s component/services/services --flat
(Services Required for Service page  : This is will Create Service Page Structure)

Step 5.3.2 : Create Service Component  
ng g c component/services/services --flat --dry-run
ng g c component/services/services --flat

----------------------------------

Step 5.4.0: Create Module with Routing - services :
ng g m component/support/support --routing --flat --dry-run
ng g m component/support/support --routing --flat
(Solution Page Module : This is will Create Solution Page Structure)

Step 5.4.1 : Create Service which is Required for about Page ONLY
ng g s component/support/support --flat --dry-run
ng g s component/support/support --flat
(Services Required for Service page  : This is will Create Service Page Structure)

Step 5.4.2 : Create Service Component  
ng g c component/support/support --flat --dry-run
ng g c component/support/support --flat

----------------------------------

Step 5.5.0: Create Module with Routing - services :
ng g m component/home/home --routing --flat --dry-run
ng g m component/home/home --routing --flat
(Solution Page Module : This is will Create Solution Page Structure)

Step 5.5.1 : Create Service which is Required for about Page ONLY
ng g s component/home/home --flat --dry-run
ng g s component/home/home --flat
(Services Required for Service page  : This is will Create Service Page Structure)

Step 5.5.2 : Create Service Component  
ng g c component/home/home --flat --dry-run
ng g c component/home/home --flat


==================================
Sample Code Start : 

page-not-found





Sample Code End : 
==================================


------------------------------------------------------------
Navigation : 
Home -- Our Product -- Contact Us -- About Us 

Core Component :
1	Header
-------------------------------------------------------
2	Hero Banner - Gradient Shade with Title and Description
	Hero Banner - Plain Text Alignment
-------------------------------------------------------
3	Partnership (Image Left With 3x3 Logo)
	Partnership (Image Right With 3x3 Logo)
-------------------------------------------------------
4	Key Numbers (Multi Line Number)
	Key Numbers (Single Line Number)
-------------------------------------------------------
5	Team
-------------------------------------------------------
6	Single Card Carousel (Top Side)
	Single Card Carousel (Centre Side)
	Two Card Carousel
	Three Card Carousel
-------------------------------------------------------
7	Single Video
-------------------------------------------------------
8	Multiple Videos with Play List Thumbnail
-------------------------------------------------------
9	Multiple Videos with Grid View
-------------------------------------------------------
10	Footer
-------------------------------------------------------
11	Image Banner With Title Description
	Image Carousal With Title Description
-------------------------------------------------------
12	Agenda with Video
	Agenda with Image
-------------------------------------------------------
13	Three Card Vertical Carousel 
-------------------------------------------------------
14	List with Description Mapping in One Page Fold V1
	List with Description Mapping in One Page Fold V2
-------------------------------------------------------
15	Section With Sticky Menu
-------------------------------------------------------
16	MicAI Listening
-------------------------------------------------------
17	Title
-------------------------------------------------------
18	Overlay Video
-------------------------------------------------------
