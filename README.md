# 	Understanding how to make api calls (Axios)

>  Axios is a popular JavaScript library used for making HTTP requests from web browsers or Node.js applications. It is a Promise-based library that provides a simple and consistent API for performing various types of HTTP requests, including GET, POST, PUT, DELETE, and more.

> ## Axios can be used to make requests to APIs, fetch data from remote servers, and upload files, among other things. It supports various options for configuring the request, such as headers, authentication, and request timeout. Additionally, it provides interceptors that allow you to modify the request or response before they are handled by your code.  

> ## Axios has gained popularity for its ease of use, simplicity, and robustness. It is widely used in web development and has become the de facto standard for making HTTP requests in modern JavaScript applications.
  

# Why do we need headers any idea
- # The HTTP headers are used to pass additional information between the clients and the server through the request and response header. All the headers are case-insensitive, headers fields are separated by colon, key-value pairs in clear-text string format.


# * What is axios 
-  ## Axios is a promised-based HTTP client for JavaScript. It has the ability to make HTTP requests from the browser and handle the transformation of request and response data.

- ## The code snippet below shows an example usage of an Axios GET request, taken from the LMS Sharp example project: clientside/src/Models/Entities/User.tsx.

# `import axios from 'axios';

// Some lines have been removed here

function getGroups() {
    return axios.get(`${SERVER_URL}/api/account/groups`)
        .then(({ data }) => {
            return data.map((groupName: any) => { return { display: groupName, value: groupName }});
        });
}
`
<p>Duplicate and static IP addresses
On a network, no two systems can share the same internet address. If there are duplicate internet addresses, neither system can access the network reliably. The addresses for most network devices are assigned when Dynamic Host Configuration Protocol (DHCP) boots up the systems on the local network. DHCP maintains a pool of addresses assigned to the local network, assigning a different address from the pool to each system.

Workstations are not assigned permanent addresses but receive one for a limited time from DHCP. Systems re-request before the time runs out and usually receive the same address. If the system shuts down without re-requesting and the time runs out, it loses this address and may receive a different one upon startup.</p>