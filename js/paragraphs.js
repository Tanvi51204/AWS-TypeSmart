const paragraphs = [
    "Amazon EC2 (Elastic Compute Cloud) is a web service that provides resizable compute capacity in the cloud. It is designed to make web-scale cloud computing easier for developers. With Amazon EC2, you can launch virtual servers, known as instances, within minutes. These instances can be scaled up or down based on your requirements, offering flexibility and cost-efficiency. Amazon EC2 supports a wide range of instance types optimized for different use cases, such as general-purpose, compute-optimized, memory-optimized, and storage-optimized instances. Additionally, EC2 integrates seamlessly with other AWS services, allowing you to build comprehensive and scalable applications. You can choose from a variety of operating systems, including Linux, Windows, and custom AMIs (Amazon Machine Images), providing you with the flexibility to run your preferred environment. The service also offers advanced features like auto-scaling, load balancing, and virtual networking, enabling you to manage your infrastructure more effectively. Security is a top priority with EC2, as it provides multiple layers of protection, including network firewalls, encryption, and IAM (Identity and Access Management) controls.",
    "Amazon S3 (Simple Storage Service) is an object storage service that offers industry-leading scalability, data availability, security, and performance. S3 allows you to store and retrieve any amount of data at any time from anywhere on the web. It is designed to deliver 99.999999999% durability, ensuring that your data is protected against hardware failures and other potential data loss scenarios. S3 is commonly used for backup and restore, disaster recovery, data archiving, big data analytics, and static website hosting. The service supports a wide range of storage classes, allowing you to optimize costs based on your access patterns. These classes include S3 Standard for frequently accessed data, S3 Intelligent-Tiering for data with unknown or changing access patterns, S3 Standard-IA (Infrequent Access) for long-lived but less frequently accessed data, and S3 Glacier for archival storage. Amazon S3 also offers comprehensive security and compliance capabilities, including data encryption at rest and in transit, access control policies, and integration with AWS IAM. Additionally, S3 integrates with other AWS services, such as AWS Lambda, enabling you to build serverless applications that can process data as it arrives in your S3 buckets.",
    "AWS Lambda is a serverless compute service that lets you run code without provisioning or managing servers. With Lambda, you can execute your code in response to a variety of events, such as changes to data in an Amazon S3 bucket, updates to a DynamoDB table, or HTTP requests from API Gateway. Lambda automatically scales your application by running code in response to each trigger, ensuring high availability and fault tolerance. You only pay for the compute time you consume, which is billed in 100-millisecond increments. This cost-effective model makes Lambda ideal for a wide range of applications, including data processing, real-time file processing, and back-end services for web and mobile applications. Lambda supports multiple programming languages, including Node.js, Python, Java, Ruby, C#, and Go, allowing you to use the language that best suits your needs. The service integrates with many other AWS services, such as AWS Step Functions for orchestration, Amazon SNS (Simple Notification Service) for messaging, and Amazon Kinesis for real-time data streaming. Security is a key feature of Lambda, with built-in support for AWS IAM to control access to your functions and resources.",
    "Amazon RDS (Relational Database Service) is a managed relational database service that makes it easy to set up, operate, and scale a relational database in the cloud. It provides cost-efficient and resizable capacity while automating time-consuming administrative tasks, such as hardware provisioning, database setup, patching, and backups. RDS supports multiple database engines, including Amazon Aurora, MySQL, PostgreSQL, MariaDB, Oracle, and Microsoft SQL Server, allowing you to choose the database that best fits your needs. The service offers high availability and durability through Multi-AZ deployments, where data is synchronously replicated to a standby instance in a different Availability Zone. RDS also provides automated backups, snapshots, and point-in-time recovery to help protect your data. With RDS, you can scale your database instance’s compute and storage resources with a few clicks or API calls, ensuring that your database can handle varying workloads. The service integrates with other AWS services, such as Amazon VPC for network isolation, AWS IAM for access control, and Amazon CloudWatch for monitoring. Additionally, RDS offers enhanced security features, including encryption at rest and in transit, and the ability to enforce SSL connections for data access.",
    "Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability. It is designed to handle a wide range of applications, including web, mobile, gaming, IoT, and more. DynamoDB supports both document and key-value data models, allowing you to store and retrieve any amount of data with flexible schemas. The service is known for its low latency and high throughput, capable of serving millions of requests per second. DynamoDB automatically scales its throughput capacity to meet your application’s demands and provides built-in fault tolerance and high availability by replicating data across multiple Availability Zones. The service also offers fine-grained access control with AWS IAM, allowing you to define who can access specific data and how they can interact with it. DynamoDB integrates with other AWS services, such as AWS Lambda for serverless applications, Amazon Kinesis for real-time data processing, and Amazon Redshift for analytics. Additionally, DynamoDB provides advanced features like Global Tables for multi-region replication, DynamoDB Streams for change data capture, and Time to Live (TTL) for automatic data expiration.",
    "Amazon VPC (Virtual Private Cloud) enables you to launch AWS resources into a virtual network that you define. This virtual network closely resembles a traditional network that you might operate in your own data center, but with the benefits of using AWS’s scalable infrastructure. VPC allows you to have complete control over your virtual networking environment, including selecting your own IP address range, creating subnets, and configuring route tables and network gateways. With VPC, you can isolate resources within a private network and control inbound and outbound traffic at the subnet level using network ACLs (Access Control Lists) and security groups. You can also create a VPN connection between your corporate data center and your VPC, extending your on-premises network to the cloud. VPC integrates with many other AWS services, such as EC2 for launching instances, RDS for managed databases, and Lambda for serverless functions. It also supports advanced networking features, such as Elastic IP addresses for static IPs, VPC peering for connecting multiple VPCs, and AWS PrivateLink for private connectivity to AWS services. Security is a core aspect of VPC, with support for encryption in transit, traffic mirroring for network monitoring, and flow logs for capturing IP traffic information.",
    "Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency and high transfer speeds. CloudFront integrates with other AWS services, such as S3 for origin storage, EC2 for dynamic content, and Lambda@Edge for serverless edge computing. The service uses a global network of edge locations and regional edge caches to ensure that content is delivered from the location that is closest to the end-user, reducing latency and improving performance. CloudFront supports various content types, including static files, dynamic web pages, media files, and APIs, making it suitable for a wide range of applications. The service also offers comprehensive security features, such as HTTPS support, DDoS protection through AWS Shield, and integration with AWS WAF (Web Application Firewall) for application-layer security. CloudFront provides detailed metrics and logs through Amazon CloudWatch, allowing you to monitor and analyze your content delivery performance. Additionally, CloudFront offers features like Geo Restriction for controlling content distribution based on geographic locations, Signed URLs and Cookies for secure content delivery, and Origin Shield for improving cache hit ratios and reducing origin load.",
    "AWS IAM (Identity and Access Management) is a web service that helps you securely control access to AWS services and resources for your users. With IAM, you can create and manage AWS users and groups, and use permissions to allow or deny their access to AWS resources. IAM enables you to manage identities (users, groups, and roles) and their permissions, ensuring that only authorized individuals and services have access to the resources they need. The service supports multi-factor authentication (MFA) for added security, requiring users to provide additional verification beyond their password. IAM also integrates with AWS Organizations, allowing you to manage access across multiple AWS accounts centrally. With IAM policies, you can define granular permissions using JSON-based policy documents, specifying which actions are allowed or denied on specific resources. The service supports federated access, enabling you to use existing identities from your corporate directory or other identity providers to access AWS resources. IAM is essential for implementing the principle of least privilege, ensuring that users and services have only the necessary permissions to perform their tasks, reducing the risk of unauthorized access.",
    "Amazon Aurora is a fully managed relational database engine that is compatible with MySQL and PostgreSQL. It combines the performance and availability of high-end commercial databases with the simplicity and cost-effectiveness of open-source databases. Aurora is designed to be highly durable and available, with replication across multiple Availability Zones, continuous backups to Amazon S3, and automated failover. The service offers up to five times the throughput of standard MySQL and up to three times the throughput of standard PostgreSQL, making it ideal for demanding applications. Aurora's storage is automatically scalable, growing in increments of 10GB up to 128TB as needed, without any downtime. Aurora also supports Aurora Serverless, which automatically adjusts capacity based on your application's needs, allowing you to pay only for the database resources you consume. The service integrates with other AWS services, such as AWS Lambda for serverless applications, Amazon Kinesis for real-time data processing, and Amazon Redshift for analytics. Security is a top priority with Aurora, offering encryption at rest and in transit, network isolation with Amazon VPC, and fine-grained access control with AWS IAM.",
    "Amazon Redshift is a fully managed data warehouse service that makes it simple and cost-effective to analyze all your data using standard SQL and your existing Business Intelligence (BI) tools. Redshift enables you to run complex queries against petabytes of structured and semi-structured data, with the ability to scale from a few hundred gigabytes to a petabyte or more. The service achieves high performance through columnar storage, data compression, and parallel query execution. Redshift also supports features like materialized views, result caching, and automatic workload management to optimize query performance. The service integrates with a wide range of data sources and BI tools, allowing you to create a unified data platform for analytics. Redshift Spectrum extends your data warehouse to query data directly in S3, without requiring data loading or transformation. Security is a key feature of Redshift, with encryption at rest and in transit, VPC network isolation, and fine-grained access control through AWS IAM. Redshift also provides comprehensive monitoring and management capabilities, including automated backups, snapshots, and integration with Amazon CloudWatch for performance and health monitoring.",
    "AWS CloudFormation is a service that helps you model and set up your Amazon Web Services resources so that you can spend less time managing those resources and more time focusing on your applications. With CloudFormation, you define your infrastructure as code using JSON or YAML templates. These templates describe the resources and their configurations, enabling you to create and manage a collection of related AWS resources as a single unit. CloudFormation takes care of provisioning and configuring your resources, handling dependencies between resources, and applying changes in a predictable and repeatable manner. This approach allows you to version control your infrastructure, automate deployments, and ensure consistency across environments. CloudFormation supports a wide range of AWS resources, including EC2 instances, VPCs, RDS databases, S3 buckets, and more. The service also integrates with other AWS tools, such as AWS CodePipeline for continuous delivery and AWS Config for compliance auditing. CloudFormation's drift detection feature helps you identify changes to your resources that were made outside of your templates, ensuring that your infrastructure remains aligned with your desired state.",
    "Amazon CloudWatch is a monitoring and observability service built for DevOps engineers, developers, site reliability engineers (SREs), and IT managers. CloudWatch provides data and actionable insights to monitor your applications, respond to system-wide performance changes, optimize resource utilization, and get a unified view of operational health. The service collects monitoring and operational data in the form of logs, metrics, and events from AWS resources, applications, and services running on-premises or in the cloud. CloudWatch enables you to set alarms and automate actions based on predefined thresholds, such as scaling resources, stopping or starting instances, and sending notifications. The service also supports custom metrics and logs, allowing you to monitor specific aspects of your applications and infrastructure. CloudWatch integrates with other AWS services, such as AWS Lambda for serverless monitoring, Amazon EC2 Auto Scaling for dynamic scaling, and AWS Systems Manager for operational insights and management. Additionally, CloudWatch provides features like dashboards for real-time visualization, anomaly detection for identifying unusual patterns, and synthetic monitoring for testing application endpoints.",
    "AWS Elastic Beanstalk is an easy-to-use service for deploying and scaling web applications and services. It supports multiple programming languages and frameworks, including Java, .NET, PHP, Node.js, Python, Ruby, Go, and Docker. With Elastic Beanstalk, you can quickly deploy your applications without worrying about the underlying infrastructure. The service handles all the details of capacity provisioning, load balancing, scaling, and application health monitoring. You simply upload your code, and Elastic Beanstalk automatically deploys and manages your application, providing a pre-configured environment that includes a web server, an application server, and an operating system. Elastic Beanstalk also integrates with other AWS services, such as Amazon RDS for databases, Amazon S3 for storage, and Amazon CloudFront for content delivery. The service provides a web-based management console, a command-line interface (CLI), and APIs for easy interaction and automation. Elastic Beanstalk supports continuous deployment and versioning, allowing you to deploy new versions of your application and roll back to previous versions if needed. Security is built into Elastic Beanstalk, with support for VPC network isolation, IAM roles for fine-grained access control, and HTTPS for secure communication.",
    "Amazon Route 53 is a scalable and highly available Domain Name System (DNS) web service designed to route end users to Internet applications by translating human-readable names, such as www.example.com, into IP addresses like 192.0.2.1. Route 53 effectively connects user requests to infrastructure running in AWS, such as EC2 instances, Elastic Load Balancers, or S3 buckets, and can also route users to infrastructure outside of AWS. The service offers domain registration, DNS routing, and health checking, enabling you to manage your domain names and DNS records easily. Route 53 supports various routing policies, including simple, weighted, latency-based, geolocation, geoproximity, and multi-value answer routing, allowing you to route traffic based on your specific requirements. Health checks monitor the health and performance of your applications and endpoints, automatically routing traffic away from unhealthy resources. Route 53 integrates with other AWS services, such as CloudFront for CDN, Elastic Load Balancing for traffic distribution, and AWS IAM for access control. Security features include DNSSEC (Domain Name System Security Extensions) for protecting against DNS spoofing and encryption for data in transit.",
    "AWS Step Functions is a serverless orchestration service that lets you combine AWS Lambda functions and other AWS services to build and run resilient serverless workflows. Step Functions makes it easy to coordinate the components of distributed applications and microservices using visual workflows. You define state machines using JSON-based Amazon States Language (ASL), specifying the sequence of steps, branching, error handling, and retry logic. Step Functions automatically triggers and tracks each step, ensuring that your application executes in the correct order and manages failures gracefully. The service integrates with a wide range of AWS services, including Lambda, ECS, Fargate, DynamoDB, S3, SNS, SQS, and more, allowing you to build complex workflows that span multiple services. Step Functions also supports callback patterns, enabling you to pause workflows and wait for external events before resuming execution. Security is a core aspect of Step Functions, with support for IAM roles and policies to control access to your workflows and integrated monitoring through Amazon CloudWatch for tracking execution history and performance metrics. Step Functions is ideal for various use cases, including data processing pipelines, microservices orchestration, IT automation, and business process automation."
];
