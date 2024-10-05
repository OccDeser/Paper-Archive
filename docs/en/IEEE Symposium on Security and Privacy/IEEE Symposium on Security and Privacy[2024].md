# IEEE Symposium on Security and Privacy[2024]
## On SMS Phishing Tactics and Infrastructure.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#on-sms-phishing-tactics-and-infrastructure)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#on-sms-phishing-tactics-and-infrastructure)
### Authors
* Aleksandr Nahapetyan, North Carolina State University
* Sathvik Prasad, North Carolina State University
* Kevin Childs, North Carolina State University
* Adam Oest, PayPal, Inc.
* Yeganeh Ladwig, PayPal, Inc.
* Alexandros Kapravelos, North Carolina State University
* Bradley Reaves, North Carolina State University
### Abstract
> In 2022, the Anti-Phishing Working Group reported a 70% increase in SMS and voice phishing attacks. Hard data on SMS phishing is hard to come by, as are insights into how SMS phishers operate. Lack of visibility prevents law enforcement, regulators, providers, and researchers from understanding and confronting this growing problem. In this paper, we present the results of extracting phishing messages from over 200 million SMS messages posted over several years on 11 public SMS gateways on the web. From this dataset we identify 67,991 phishing messages, link them together into 35,128 campaigns based on sharing near-identical content, then identify related campaigns that share infrastructure to identify over 600 distinct SMS phishing operations. This expansive vantage point enables us to determine that SMS phishers use commodity cloud and web infrastructure in addition to self-hosted URL shorteners, their infrastructure is often visible days or weeks on certificate transparency logs earlier than their messages, and they reuse existing phishing kits from other phishing modalities. We are also the first to examine in-place network defenses and identify the public forums where abuse facilitators advertise openly. These methods and findings provide industry and researchers new directions to explore to combat the growing problem of SMS phishing.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646609/](https://ieeexplore.ieee.org/document/10646609/)
## Conning the Crypto Conman: End-to-End Analysis of Cryptocurrency-based Technical Support Scams.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#conning-the-crypto-conman-end-to-end-analysis-of-cryptocurrency-based-technical-support-scams)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#conning-the-crypto-conman-end-to-end-analysis-of-cryptocurrency-based-technical-support-scams)
### Authors
* Bhupendra Acharya, CISPA
* Muhammad Saad, PayPal Inc.
* Antonio Emanuele Cinà, Università di Genova
* Lea Schönherr, CISPA
* Hoang Dai Nguyen, Louisiana State University
* Adam Oest, PayPal Inc.
* Phani Vadrevu, Louisiana State University
* Thorsten Holz, CISPA
### Abstract
> The mainstream adoption of cryptocurrencies has led to a surge in wallet-related issues reported by ordinary users on social media platforms. In parallel, there is an increase in an emerging fraud trend called cryptocurrency-based technical support scam, in which fraudsters offer fake wallet recovery services and target users experiencing wallet-related issues.In this paper, we perform a comprehensive study of cryptocurrency-based technical support scams. We present an analysis apparatus called HoneyTweet to analyze this kind of scam. Through HoneyTweet, we lure over 9K scammers by posting 25K fake wallet support tweets (so-called honey tweets). We then deploy automated systems to interact with scammers to analyze their modus operandi. In our experiments, we observe that scammers use Twitter as a starting point for the scam, after which they pivot to other communication channels (e.g., email, Instagram, or Telegram) to complete the fraud activity. We track scammers across those communication channels and bait them into revealing their payment methods. Based on the modes of payment, we uncover two categories of scammers that either request secret key phrase submissions from their victims or direct payments to their digital wallets. Furthermore, we obtain scam confirmation by deploying honey wallet addresses and validating private key theft. We also collaborate with the prominent payment service provider by sharing scammer data collections. The payment service provider feedback was consistent with our findings, thereby supporting our methodology and results. By consolidating our analysis across various vantage points, we provide an end-to-end scam lifecycle analysis and propose recommendations for scam mitigation.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646605/](https://ieeexplore.ieee.org/document/10646605/)
## From Chatbots to Phishbots?: Phishing Scam Generation in Commercial Large Language Models.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#from-chatbots-to-phishbots-phishing-scam-generation-in-commercial-large-language-models)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#from-chatbots-to-phishbots-phishing-scam-generation-in-commercial-large-language-models)
### Authors
* Sayak Saha Roy, The University of Texas at Arlington
* Poojitha Thota, The University of Texas at Arlington
* Krishna Vamsi Naragam, The University of Texas at Arlington
* Shirin Nilizadeh, The University of Texas at Arlington
### Abstract
> The advanced capabilities of Large Language Models (LLMs) have made them invaluable across various applications, from conversational agents and content creation to data analysis, research, and innovation. However, their effectiveness and accessibility also render them susceptible to abuse for generating malicious content, including phishing attacks. This study explores the potential of using four popular commercially available LLMs, i.e., ChatGPT (GPT 3.5 Turbo), GPT 4, Claude, and Bard, to generate functional phishing attacks using a series of malicious prompts. We discover that these LLMs can generate both phishing websites and emails that can convincingly imitate well-known brands and also deploy a range of evasive tactics that are used to elude detection mechanisms employed by anti-phishing systems. These attacks can be generated using unmodified or "vanilla" versions of these LLMs without requiring any prior adversarial exploits such as jailbreaking. We evaluate the performance of the LLMs towards generating these attacks and find that they can also be utilized to create malicious prompts that, in turn, can be fed back to the model to generate phishing scams - thus massively reducing the prompt-engineering effort required by attackers to scale these threats. As a countermeasure, we build a BERT-based automated detection tool that can be used for the early detection of malicious prompts to prevent LLMs from generating phishing content. Our model is transferable across all four commercial LLMs, attaining an average accuracy of 96% for phishing website prompts and 94% for phishing email prompts. We also disclose the vulnerabilities to the concerned LLMs, with Google acknowledging it as a severe issue. Our detection model is available for use at Hugging Face, as well as a ChatGPT Actions plugin.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646856/](https://ieeexplore.ieee.org/document/10646856/)
## A Representative Study on Human Detection of Artificially Generated Media Across Countries.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#a-representative-study-on-human-detection-of-artificially-generated-media-across-countries)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#a-representative-study-on-human-detection-of-artificially-generated-media-across-countries)
### Authors
* Joel Frank, Ruhr-Universität Bochum
* Franziska Herbert, Ruhr-Universität Bochum
* Jonas Ricker, Ruhr-Universität Bochum
* Lea Schönherr, CISPA
* Thorsten Eisenhofer, TU Berlin
* Asja Fischer, Ruhr-Universität Bochum
* Markus Dürmuth, Leibniz Universität Hannover
* Thorsten Holz, CISPA
### Abstract
> AI-generated media has become a threat to our digital society as we know it. Forgeries can be created automatically and on a large scale based on publicly available technologies. Recognizing this challenge, academics and practitioners have proposed a multitude of automatic detection strategies to detect such artificial media. However, in contrast to these technological advances, the human perception of generated media has not been thoroughly studied yet.In this paper, we aim to close this research gap. We conduct the first comprehensive survey on people’s ability to detect generated media, spanning three countries (USA, Germany, and China), with 3,002 participants covering audio, image, and text media. Our results indicate that state-of-the-art forgeries are almost indistinguishable from "real" media, with the majority of participants simply guessing when asked to rate them as human- or machine-generated. In addition, AI-generated media is rated as more likely to be human-generated across all media types and all countries. To further understand which factors influence people’s ability to detect AI-generated media, we include personal variables, chosen based on a literature review in the domains of deepfake and fake news research. In a regression analysis, we found that generalized trust, cognitive reflection, and self-reported familiarity with deepfakes significantly influence participants’ decisions across all media categories.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646666/](https://ieeexplore.ieee.org/document/10646666/)
## AVA: Inconspicuous Attribute Variation-based Adversarial Attack bypassing DeepFake Detection.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#ava-inconspicuous-attribute-variation-based-adversarial-attack-bypassing-deepfake-detection)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#ava-inconspicuous-attribute-variation-based-adversarial-attack-bypassing-deepfake-detection)
### Authors
* Xiangtao Meng, Shandong University
* Li Wang, Shandong University
* Shanqing Guo, Shandong University
* Lei Ju, Shandong University
* Qingchuan Zhao, City University of Hong Kong
### Abstract
> While DeepFake applications are becoming popular in recent years, their abuses pose a serious privacy threat. Unfortunately, most related detection algorithms to mitigate the abuse issues are inherently vulnerable to adversarial attacks because they are built atop DNN-based classification models, and the literature has demonstrated that they could be bypassed by introducing pixel-level perturbations. Though corresponding mitigation has been proposed, we have identified a new attribute-variation-based adversarial attack (AVA) that perturbs the latent space via a combination of Gaussian prior and semantic discriminator to bypass such mitigation. It perturbs the semantics in the attribute space of DeepFake images, which are inconspicuous to human beings (e.g., mouth open) but can result in substantial differences in DeepFake detection. We evaluate our proposed AVA attack on nine state-of-the-art DeepFake detection algorithms and applications. The empirical results demonstrate that AVA attack defeats the state-of-the-art black box attacks against DeepFake detectors and achieves more than a 95% success rate on two commercial DeepFake detectors. Moreover, our human study indicates that AVA-generated DeepFake images are often imperceptible to humans, which presents huge security and privacy concerns.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646754/](https://ieeexplore.ieee.org/document/10646754/)
## An Analysis of Recent Advances in Deepfake Image Detection in an Evolving Threat Landscape.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#an-analysis-of-recent-advances-in-deepfake-image-detection-in-an-evolving-threat-landscape)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#an-analysis-of-recent-advances-in-deepfake-image-detection-in-an-evolving-threat-landscape)
### Authors
* Sifat Muhammad Abdullah, Virginia Tech
* Aravind Cheruvu, Virginia Tech
* Shravya Kanchi, Virginia Tech
* Taejoong Chung, Virginia Tech
* Peng Gao, Virginia Tech
* Murtuza Jadliwala, Virginia Tech; UT San Antonio
* Bimal Viswanath, Virginia Tech
### Abstract
> Deepfake or synthetic images produced using deep generative models pose serious risks to online platforms. This has triggered several research efforts to accurately detect deepfake images, achieving excellent performance on publicly available deepfake datasets. In this work, we study 8 state-of-the-art detectors and argue that they are far from being ready for deployment due to two recent developments. First, the emergence of lightweight methods to customize large generative models, can enable an attacker to create many customized generators (to create deepfakes), thereby substantially increasing the threat surface. We show that existing defenses fail to generalize well to such user-customized generative models that are publicly available today. We discuss new machine learning approaches based on content-agnostic features, and ensemble modeling to improve generalization performance against user-customized models. Second, the emergence of vision foundation models—machine learning models trained on broad data that can be easily adapted to several downstream tasks—can be misused by attackers to craft adversarial deepfakes that can evade existing defenses. We propose a simple adversarial attack that leverages existing foundation models to craft adversarial samples without adding any adversarial noise, through careful semantic manipulation of the image content. We highlight the vulnerabilities of several defenses against our attack, and explore directions leveraging advanced foundation models and adversarial training to defend against this new threat.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646853/](https://ieeexplore.ieee.org/document/10646853/)
## DP-Auditorium: A Large-Scale Library for Auditing Differential Privacy.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#dp-auditorium-a-large-scale-library-for-auditing-differential-privacy)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#dp-auditorium-a-large-scale-library-for-auditing-differential-privacy)
### Authors
* William Kong, Google Research, NY
* Andrés Muñoz Medina, Google Research, NY
* Mónica Ribero, Google Research, NY
* Umar Syed, Google Research, NY
### Abstract
> New regulations and increased awareness of data privacy have led to the deployment of new and more efficient differentially private mechanisms across both public institutions and industries. With the growing adoption of differential privacy, there is also a risk of introducing bugs into both the derivation of new mechanisms and their implementation. Ensuring these mechanisms is therefore crucial to ensure proper protection of data. However since differential privacy is not a property of a single output of a mechanism but a property of the mechanism itself, testing whether a mechanism is differentially private is not a trivial task. While ad hoc testing techniques exist under specific assumptions, no concerted effort has been made by the research community to develop a flexible and extendable tool for testing differentially private mechanisms. This paper introduces DP-Auditorium as a step advancing research in this direction. The main idea behind DP-Auditorium is to abstract the problem of testing differential privacy into two steps: (1) measuring the distance between distributions, and (2) finding neighboring datasets where a mechanism generates output distributions maximizing such distance. From a technical point of view, we propose three new algorithms for evaluating the distance between distributions. While these algorithms are well-known in the statistics community, we provide new estimation guarantees by leveraging the fact that we are only interested in verifying whether a mechanism is differentially private, and not on obtaining an exact estimate of the distance between two distributions. DP-Auditorium is easily extensible, as demonstrated in this paper by implementing a well-known approximate differential privacy testing algorithm to our library. Finally, we provide an extensive comparison to date of multiple testers across varying sample sizes and differential privacy parameters, demonstrating that there is no single tester that dominates all others, and that in order to ensure proper testing of mechanisms, one requires a combination of different techniques.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646691/](https://ieeexplore.ieee.org/document/10646691/)
## Time-Aware Projections: Truly Node-Private Graph Statistics under Continual Observation.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#time-aware-projections-truly-node-private-graph-statistics-under-continual-observation)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#time-aware-projections-truly-node-private-graph-statistics-under-continual-observation)
### Authors
* Palak Jain, Boston University
* Adam Smith, Boston University
* Connor Wagaman, Boston University
### Abstract
> Releasing differentially private statistics about social network data is challenging: one individual’s data consists of a node and all of its connections, and typical analyses are sensitive to the insertion of a single unusual node in the network. This challenge is further complicated in the continual release setting, where the network varies over time and one wants to release information at many time points as the network grows. Previous work addresses node-private continual release by assuming an unenforced promise on the maximum degree in a graph; indeed, the algorithms from these works exhibit blatant privacy violations when the degree bound is not met.In this work, we describe the first algorithms that satisfy the standard notion of node-differential privacy in the continual release setting (i.e., without an assumed promise on the input streams). These algorithms are accurate on sparse graphs, for several fundamental graph problems: counting edges, triangles, other subgraphs, and connected components; and releasing degree histograms. Our unconditionally private algorithms generally have optimal error, up to polylogarithmic factors and lower-order terms.We provide general transformations that take a base algorithm for the continual release setting, which need only be private for streams satisfying a promised degree bound, and produce an algorithm that is unconditionally private yet mimics the base algorithm when the stream meets the degree bound (and adds only linear overhead to the time and space complexity of the base algorithm). To do so, we design new projection algorithms for graph streams, based on the batch-model techniques of [BBDS13; DLL16], which modify the stream to limit its degree. Our main technical innovation is to show that the projections are stable—meaning that similar input graphs have similar projections—when the input stream satisfies a privately testable safety condition. Our transformation then follows a novel online variant of the Propose-Test-Release framework [DL09], privately testing the safety condition before releasing output at each step.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646676/](https://ieeexplore.ieee.org/document/10646676/)
## Synq: Public Policy Analytics Over Encrypted Data.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#synq-public-policy-analytics-over-encrypted-data)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#synq-public-policy-analytics-over-encrypted-data)
### Authors
* Zachary Espiritu, MongoDB Research
* Marilyn George, MongoDB Research
* Seny Kamara, MongoDB Research; Brown University
* Lucy Qin, Brown University
### Abstract
> Data analytics is a core part of modern decision making, especially in public policy. However, there exists a tension between data privacy and otherwise socially beneficial analytics when data sources contain personal information. We design Synq, a system that supports analytics over encrypted data while accounting for the usability considerations institutions may have when conducting studies that affect public policy. We specifically use an application-centric approach and model Synq’s design requirements from a large-scale series of studies conducted on the opioid epidemic in Massachusetts. We systematize the design considerations of the public policy context and demonstrate how the combination of design considerations that Synq addresses is novel through a survey of the literature. We then present our protocol which combines structured encryption, somewhat homomorphic encryption, and oblivious pseudorandom functions to support a complex query language that includes filtering (retrieving rows by attribute/value pairs), linking (merging rows from different tables that represent the same individual) and aggregate functions (sum, count, average, variance, regression). We formally express the security of our protocol and show that Synq is efficient in practice while satisfying usability considerations that are critical to deployment in the setting of public policy studies.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646768/](https://ieeexplore.ieee.org/document/10646768/)
## The Great Request Robbery: An Empirical Study of Client-side Request Hijacking Vulnerabilities on the Web.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#the-great-request-robbery-an-empirical-study-of-client-side-request-hijacking-vulnerabilities-on-the-web)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#the-great-request-robbery-an-empirical-study-of-client-side-request-hijacking-vulnerabilities-on-the-web)
### Authors
* Soheil Khodayari, CISPA Helmholtz Center for Information Security
* Thomas Barber, SAP Security Research
* Giancarlo Pellegrino, CISPA Helmholtz Center for Information Security
### Abstract
> Request forgery attacks are among the oldest threats to Web applications, traditionally caused by server-side confused deputy vulnerabilities. However, recent advancements in client-side technologies have introduced more subtle variants of request forgery, where attackers exploit input validation flaws in client-side programs to hijack outgoing requests. We have little-to-no information about these client-side variants, their prevalence, impact, and countermeasures, and in this paper we undertake one of the first evaluations of the state of client-side request hijacking on the Web platform.Starting with a comprehensive review of browser API capabilities and Web specifications, we systematize request hijacking vulnerabilities and the resulting attacks, identifying 10 distinct vulnerability variants, including seven new ones. Then, we use our systematization to design and implement Sheriff, a static-dynamic tool that detects vulnerable data flows from attacker-controllable inputs to request-sending instructions. We instantiate Sheriff on the top of the Tranco top 10K sites, performing, to our knowledge, the first investigation into the prevalence of request hijacking flaws in the wild. Our study uncovers that request hijacking vulnerabilities are ubiquitous, affecting 9.6% of the top 10K sites. We demonstrate the impact of these vulnerabilities by constructing 67 proof-of-concept exploits across 49 sites, making it possible to mount arbitrary code execution, information leakage, open redirections and CSRF also against popular websites like Microsoft Azure, Starz, Reddit, and Indeed. Finally, we review and evaluate the adoption and efficacy of existing countermeasures against client-side request hijacking attacks, including browser-based solutions like CSP, COOP and COEP, and input validation.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646795/](https://ieeexplore.ieee.org/document/10646795/)
## Break the Wall from Bottom: Automated Discovery of Protocol-Level Evasion Vulnerabilities in Web Application Firewalls.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#break-the-wall-from-bottom-automated-discovery-of-protocol-level-evasion-vulnerabilities-in-web-application-firewalls)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#break-the-wall-from-bottom-automated-discovery-of-protocol-level-evasion-vulnerabilities-in-web-application-firewalls)
### Authors
* Qi Wang, Tsinghua University
* Jianjun Chen, Tsinghua University; Zhongguancun Laboratory
* Zheyu Jiang, Tsinghua University
* Run Guo, Tsinghua University
* Ximeng Liu, Fuzhou University
* Chao Zhang, Tsinghua University; Zhongguancun Laboratory
* Haixin Duan, Tsinghua University; Zhongguancun Laboratory
### Abstract
> Web Application Firewalls (WAFs) are a crucial line of defense against web-based attacks. However, an emerging threat comes from protocol-level evasion vulnerabilities, in which adversaries exploit parsing discrepancies between the WAF HTTP parser and those of web applications to circumvent WAFs. Currently, uncovering these vulnerabilities still depends on manual, ad hoc methods. In this paper, we propose WAF Manis, a novel testing methodology to automatically discover protocol-level evasion vulnerabilities in WAFs. We evaluated WAF Manis against 14 popular WAFs including Cloudflare and ModSecurity and 20 popular web frameworks including Laravel and Spring. In total, we discovered 311 protocol-level evasion cases affecting all tested WAFs and applications. Due to the generic nature of protocol-level evasions, these evasion vulnerabilities do not hinge on specific payload patterns and can transmit any malicious payloads - for instance, SQL injection, XSS, or Log4jShell - to the target websites. We further analyzed these vulnerabilities and identified three primary reasons contributing to WAF evasions. We have reported those identified vulnerabilities to the affected providers and received acknowledgments and bug bounty rewards from Cloudflare WAF, Fortinet WAF, Alibaba Cloud WAF, Huawei Cloud WAF, ModSecurity, Go security Team, and the PHP security team.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646798/](https://ieeexplore.ieee.org/document/10646798/)
## Parse Me, Baby, One More Time: Bypassing HTML Sanitizer via Parsing Differentials.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#parse-me-baby-one-more-time-bypassing-html-sanitizer-via-parsing-differentials)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#parse-me-baby-one-more-time-bypassing-html-sanitizer-via-parsing-differentials)
### Authors
* David Klein, Technische Universität Braunschweig
* Martin Johns, Technische Universität Braunschweig
### Abstract
> Websites rely on server-side HTML sanitization to defend against the ever-present threat of cross-site scripting attacks. Parsing arbitrary pieces of markup to assess whether they contain an exploit payload is far from trivial. This complexity leads to divergences between the parsing results of the sanitizer and the user’s browser. These so-called parsing differentials open the door for the unexplored category of mutation-based attacks. Here, an attacker abuses the sanitizer’s incorrect HTML parser to either directly bypass it or coerce it to transform benign markup into a dangerous exploit payload.In this work, we study the prevalence of such parsing differentials and their security impact. To this end, we built a generator for HTML fragments that are difficult to parse and evaluated how 11 sanitizers across five programming languages deal with such inputs. We found that parsing differentials are commonplace, as each assessed sanitizer has at least several functional deficiencies leading to overzealous removal of benign input. Even worse, we were able to automatically bypass all but two of the 11 sanitizers, painting a dire picture of the state of server-side HTML sanitization.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646837/](https://ieeexplore.ieee.org/document/10646837/)
## Holistic Concolic Execution for Dynamic Web Applications via Symbolic Interpreter Analysis.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#holistic-concolic-execution-for-dynamic-web-applications-via-symbolic-interpreter-analysis)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#holistic-concolic-execution-for-dynamic-web-applications-via-symbolic-interpreter-analysis)
### Authors
* Penghui Li, Zhongguancun Laboratory
* Wei Meng, The Chinese University of Hong Kong
* Mingxue Zhang, Zhejiang University
* Chenlin Wang, The Chinese University of Hong Kong
* Changhua Luo, The Chinese University of Hong Kong
### Abstract
> Symbolic execution for dynamic web applications is challenging due to their multilingual nature. Prior solutions often fall short in limited syntax support and excessive engineering costs. We propose a novel approach called symbolic interpreter analysis (SIA) for web applications written in interpreted languages. SIA tackles the limitations by leveraging the comprehensive syntax support of language interpreters and incorporating established engineering from existing symbolic execution engines. Since web application logic is handled by the interpreter, SIA leverages an off-the-shelf symbolic execution engine to analyze the corresponding interpreter code to symbolically comprehend the behavior of the web application. Indeed, SIA entails solving several technical challenges in web application symbolic execution such as web application exploration, database interactions, etc.We have implemented our approach in SymPHP, a concolic execution engine for PHP-based web applications. Our extensive evaluation shows that SymPHP could effectively explore web application code with comprehensive PHP syntax support and high code coverage. It achieved high code coverage and successfully identified 77.23% of known vulnerabilities in our dataset, significantly outperforming prior approaches. The hybrid fuzzing framework built atop SymPHP significantly boosted fuzzing and detected ten new vulnerabilities.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646634/](https://ieeexplore.ieee.org/document/10646634/)
## Where URLs Become Weapons: Automated Discovery of SSRF Vulnerabilities in Web Applications.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#where-urls-become-weapons-automated-discovery-of-ssrf-vulnerabilities-in-web-applications)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#where-urls-become-weapons-automated-discovery-of-ssrf-vulnerabilities-in-web-applications)
### Authors
* Enze Wang, National University of Defense Technology; Tsinghua University
* Jianjun Chen, Tsinghua University; Zhongguancun Laboratory
* Wei Xie, National University of Defense Technology
* Chuhan Wang, Tsinghua University
* Yifei Gao, National University of Defense Technology
* Zhenhua Wang, National University of Defense Technology
* Haixin Duan, Tsinghua University; Zhongguancun Laboratory
* Yang Liu, Nanyang Technological University
* Baosheng Wang, National University of Defense Technology
### Abstract
> Server-Side Request Forgery (SSRF) vulnerability poses significant security risks to web applications, enabling adversaries to exploit web applications as stepping stones for unauthorized access of internal-only services or even performing arbitrary commands. Despite its recent emergence as a distinct category in the 2021 OWASP Top 10 web security risks and its increasing prevalence in modern web applications, there remains a lack of effective approaches to detect SSRF vulnerabilities systematically.We present a novel methodology, SSRFuzz, to effectively identify SSRF vulnerability in PHP web applications. Our methodology consists of three phases. In the initial phase, we designed an SSRF oracle to examine functions in PHP manuals and identify sinks that provide server-side request capabilities. This process yielded a total of 86 sensitive PHP sinks out of 2101 PHP functions. The second stage involves dynamic taint inference and the utilization of the identified sinks to examine the source code of target web applications, pinpointing all feasible input points that could trigger these sinks. The final phase employs fuzzing techniques. We generate testing HTTP requests with SSRF payloads, send them to the previously identified input points within the target web applications, and detect if an SSRF vulnerability is triggered. We implemented a prototype of SSRFuzz and evaluated it on 27 real-world applications, including Joomla and WordPress. In total, we discovered 28 SSRF vulnerabilities, 25 of which were previously unreported. We reported all the vulnerabilities to the affected vendors, and 16 new CVE IDs were assigned.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646755/](https://ieeexplore.ieee.org/document/10646755/)
## SINBAD: Saliency-informed detection of breakage caused by ad blocking.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#sinbad-saliency-informed-detection-of-breakage-caused-by-ad-blocking)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#sinbad-saliency-informed-detection-of-breakage-caused-by-ad-blocking)
### Authors
* Saiid El Hajj Chehade, EPFL
* Sandra Siby, Imperial College London
* Carmela Troncoso, EPFL
### Abstract
> Privacy-enhancing blocking tools based on filter-list rules tend to break legitimate functionality. Filter-list maintainers could benefit from automated breakage detection tools that allow them to proactively fix problematic rules before deploying them to millions of users. We introduce SINBAD, an automated breakage detector that improves the accuracy over the state of the art by 20%, and is the first to detect dynamic breakage and breakage caused by style-oriented filter rules. The success of SINBAD is rooted in three innovations: (1) the use of user-reported breakage issues in forums that enable the creation of a high-quality dataset for training in which only breakage that users perceive as an issue is included; (2) the use of ‘web saliency’ to automatically identify user-relevant regions of a website on which to prioritize automated interactions aimed at triggering breakage; and (3) the analysis of webpages via subtrees which enables fine-grained identification of problematic filter rules.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646760/](https://ieeexplore.ieee.org/document/10646760/)
## C-Frame: Characterizing and measuring in-the-wild CAPTCHA attacks.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#c-frame-characterizing-and-measuring-in-the-wild-captcha-attacks)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#c-frame-characterizing-and-measuring-in-the-wild-captcha-attacks)
### Authors
* Hoang Dai Nguyen, Louisiana State University
* Karthika Subramani, Georgia Institute of Technology
* Bhupendra Acharya, CISPA
* Roberto Perdisci, Institute of Technology, University of Georgia Georgia
* Phani Vadrevu, Louisiana State University
### Abstract
> In this paper, we design and implement C-Frame, the first measurement system to collect real-time, in-the-wild data on modern CAPTCHA attacks. For this, we study the recent evolution in the protocols of CAPTCHAs as well as human-driven farms that facilitate attacks against CAPTCHAs. This study leads us directly to the discovery of a unique vantage point to conduct a global-scale CAPTCHA attack measurement study. Harnessing this, we design and build C-Frame to be CAPTCHA-agnostic and ethically considerate. We then deploy our system for a 92-day period resulting in capturing of 425,257 CAPTCHA attacks on 1417 sites.In order to characterize these attacks, we leverage a carefully designed qualitative analysis approach using 3 analysts. Our study results in delineation of 34 different CAPTCHA-attack categories with several interesting real world attack examples. Twitter received the largest number of CAPTCHA attacks overall (about 255,480 attack requests) most of which attempt to create bot accounts. We also categorized and captured attacks such as ticket scalping attempts (e.g. a Taylor Swift concert event in Brazil), fraudulent lawsuit claims, and abusive appointment booking attempts (e.g. a Spain visa site in China). We also found CAPTCHA-assisted attempts to download data from government website (e.g. websites of 20 US states). We ascribe our attacks to 58 different countries across 5 continents. We present a detailed measurement analysis to give insights on this attack data and also suggest some future potential remediation measures that can be inspired by our system.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646606/](https://ieeexplore.ieee.org/document/10646606/)
## Jasmine: Scale up JavaScript Static Security Analysis with Computation-based Semantic Explanation.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#jasmine-scale-up-javascript-static-security-analysis-with-computation-based-semantic-explanation)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#jasmine-scale-up-javascript-static-security-analysis-with-computation-based-semantic-explanation)
### Authors
* Feng Xiao, Georgia Institute of Technology
* Zhongfu Su, Wuhan University
* Guangliang Yang, Fudan University
* Wenke Lee, Georgia Institute of Technology
### Abstract
> Static data flow analysis techniques have been broadly applied in analyzing and detecting security threats in web applications. However, without actual code execution, they often suffer serious precision issues and may even miss serious vulnerabilities, especially when facing modern JavaScript applications characterized by complex operations and semantics. To combat these complex semantics, we propose a novel semantic understanding approach, namely computation-based semantic explanation (CSE). CSE can effectively identify and resolve common failures arising from complex semantics in static data flow analysis, ultimately improving the detection of potential vulnerabilities.We implement a prototype tool of CSE, called Jasmine. By applying Jasmine to more than 10K real-world JavaScript programs, we find complex operations and semantics are prevalent in practice and heavily impede the state-of-art static techniques (e.g., Github’s CodeQL and IBM’s WALA) from regular security validations. Our experiments show Jasmine can effectively resolve complex semantics and lead to the discovery of 22 hidden vulnerabilities, which are not detectable by existing tools. Among these vulnerabilities, 13 ones are previously unknown, i.e., zero-day vulnerabilities. Up to now, nine CVEs have been issued, and five of them have been rated as ‘critical’ with a 9.8 severity score.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646682/](https://ieeexplore.ieee.org/document/10646682/)
## A Tale of Two Industroyers: It was the Season of Darkness.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#a-tale-of-two-industroyers-it-was-the-season-of-darkness)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#a-tale-of-two-industroyers-it-was-the-season-of-darkness)
### Authors
* Luis Salazar, University of California, Santa Cruz
* Sebastián R. Castro, University of California, Santa Cruz
* Juan Lozano, University of California, Santa Cruz
* Keerthi Koneru, University of California, Santa Cruz
* Emmanuele Zambon, Eindhoven University of Technology
* Bing Huang, The University of Texas at Austin
* Ross Baldick, The University of Texas at Austin
* Marina Krotofil, Information Systems Security Partners
* Alonso Rojas, Axon Group
* Alvaro A. Cardenas, University of California, Santa Cruz
### Abstract
> In this paper, we study two pieces of malware that attempted to create blackouts in Ukraine. In particular, we design and develop a new sandbox that emulates different networks, devices, and other characteristics so that we can execute malware targeting substation equipment and understand in detail the specific sequence of actions the attackers could perform on substation equipment. We also study the effects that future similar malware can have. Our findings include new malware behavior not previously documented (such as the detailed algorithm for the MMS protocol payload) and an illustration of how attacking different targets will produce different effects.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646775/](https://ieeexplore.ieee.org/document/10646775/)
## AquaSonic: Acoustic Manipulation of Underwater Data Center Operations and Resource Management.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#aquasonic-acoustic-manipulation-of-underwater-data-center-operations-and-resource-management)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#aquasonic-acoustic-manipulation-of-underwater-data-center-operations-and-resource-management)
### Authors
* Jennifer Sheldon, University of Florida
* Weidong Zhu, University of Florida
* Adnan Abdullah, University of Florida
* Sri Hrushikesh Varma Bhupathiraju, University of Florida
* Takeshi Sugawara, The University of Electro-Communications
* Kevin R. B. Butler, University of Florida
* Md Jahidul Islam, University of Florida
* Sara Rampazzi, University of Florida
### Abstract
> Underwater data centers (UDCs) hold promise as next-generation data storage due to their energy efficiency and environmental sustainability benefits. While the natural cooling properties of water save power, the isolated aquatic environment and long-range sound propagation characteristics in water create unique vulnerabilities which differ from those of on-land data centers. Our research discovers the unique vulnerabilities of fault-tolerant storage devices, resource allocation software, and distributed file systems to acoustic injection attacks in UDCs. With a realistic testbed approximating UDC server operations, we empirically characterize the capabilities of acoustic injection underwater and find that an attacker can reduce fault-tolerant RAID 5 storage system throughput by 17% up to 100%. Our closed-water analyses reveal that an attacker can (i) cause unresponsiveness and automatic node removal in a distributed filesystem with only 2.4 minutes of sustained acoustic injection, (ii) induce a distributed database’s latency to increase by up to 92.7% to reduce system reliability, and (iii) induce load-balance managers to redirect up to 74% of resources to a target server to cause overload or force resource colocation. Furthermore, we perform open-water experiments in a lake and find that an attacker can cause controlled throughput degradation at the maximum allowable distance of 6.35 m using a commercial speaker. We also investigate and discuss the effectiveness of standard defenses against acoustic injection attacks. Finally, we formulate a novel machine learning-based detection system that reaches 0% False Positive Rate and 98.2% True Positive Rate trained on our dataset of profiled hard disk drives under 30-second FIO benchmark execution. With this work, we aim to help manufacturers proactively protect UDCs against acoustic injection attacks and ensure the security of subsea computing infrastructures.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646672/](https://ieeexplore.ieee.org/document/10646672/)
## "Watching over the shoulder of a professional": Why Hackers Make Mistakes and How They Fix Them.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#watching-over-the-shoulder-of-a-professional-why-hackers-make-mistakes-and-how-they-fix-them)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#watching-over-the-shoulder-of-a-professional-why-hackers-make-mistakes-and-how-they-fix-them)
### Authors
* Irina Ford, Arizona State University
* Ananta Soneji, Arizona State University
* Faris Bugra Kokulu, Arizona State University
* Jayakrishna Vadayath, Arizona State University
* Zion Leonahenahe Basque, Arizona State University
* Gaurav Vipat, Arizona State University
* Adam Doupé, Arizona State University
* Ruoyu Wang, Arizona State University
* Gail-Joon Ahn, Arizona State University
* Tiffany Bao, Arizona State University
* Yan Shoshitaishvili, Arizona State University
### Abstract
> The complex and diverse nature of software systems necessitates a careful manual approach to unveil vulnerabilities, involving deep analysis, creative problem-solving, and specialized expertise. Like all complex tasks, it’s susceptible to mistakes stemming from cognitive limitations and behavioral factors that hinder optimal performance. Although there are significant research efforts focused on vulnerability discovery, little attention has been given to comprehending mistakes within the process. Understanding these mistakes could pave the way for better-designed education programs and automated tools, aiming to mitigate and prevent potential mistakes and enhance the efficiency of vulnerability research.In this paper, we leverage social media, specifically YouTube, to examine mistakes made by security content creators exploiting vulnerabilities in CTF-style challenges. Analyzing 30 screencasts from 11 hackers, we identified 124 distinct issues and investigated their types, underlying causes, and time investments. Additionally, we delved into the cognitive and behavioral aspects associated with these issues.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646873/](https://ieeexplore.ieee.org/document/10646873/)
## A Picture is Worth 500 Labels: A Case Study of Demographic Disparities in Local Machine Learning Models for Instagram and TikTok.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#a-picture-is-worth-500-labels-a-case-study-of-demographic-disparities-in-local-machine-learning-models-for-instagram-and-tiktok)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#a-picture-is-worth-500-labels-a-case-study-of-demographic-disparities-in-local-machine-learning-models-for-instagram-and-tiktok)
### Authors
* Jack West, University of Wisconsin-Madison
* Lea Thiemt, Technical University of Munich
* Shimaa Ahmed, University of Wisconsin-Madison
* Maggie Bartig, University of Wisconsin-Madison
* Kassem Fawaz, University of Wisconsin-Madison
* Suman Banerjee, University of Wisconsin-Madison
### Abstract
> Mobile apps have embraced user privacy by moving their data processing to the user’s smartphone. Advanced machine learning (ML) models, such as vision models, can now locally analyze user images to extract insights that drive several functionalities. Capitalizing on this new processing model of locally analyzing user images, we analyze two popular social media apps, TikTok and Instagram, to reveal (1) what insights vision models in both apps infer about users from their image and video data and (2) whether these models exhibit performance disparities with respect to demographics. As vision models provide signals for sensitive technologies like age verification and facial recognition, understanding potential biases in these models is crucial for ensuring that users receive equitable and accurate services.We develop a novel method for capturing and evaluating ML tasks in mobile apps, overcoming challenges like code obfuscation, native code execution, and scalability. Our method comprises ML task detection, ML pipeline reconstruction, and ML performance assessment, specifically focusing on demographic disparities. We apply our methodology to TikTok and Instagram, revealing significant insights. For TikTok, we find issues in age and gender prediction accuracy, particularly for minors and Black individuals. In Instagram, our analysis uncovers demographic disparities in extracting over 500 visual concepts from images, with evidence of spurious correlations between demographic features and certain concepts.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646743/](https://ieeexplore.ieee.org/document/10646743/)
## MAWSEO: Adversarial Wiki Search Poisoning for Illicit Online Promotion.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#mawseo-adversarial-wiki-search-poisoning-for-illicit-online-promotion)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#mawseo-adversarial-wiki-search-poisoning-for-illicit-online-promotion)
### Authors
* Zilong Lin, Indiana University Bloomington
* Zhengyi Li, Indiana University Bloomington
* Xiaojing Liao, Indiana University Bloomington
* XiaoFeng Wang, Indiana University Bloomington
* Xiaozhong Liu, Worcester Polytechnic Institute
### Abstract
> As a prominent instance of vandalism edits, Wiki search poisoning for illicit promotion is a cybercrime in which the adversary aims at editing Wiki articles to promote illicit businesses through Wiki search results of relevant queries. In this paper, we report a study that, for the first time, shows that such stealthy blackhat SEO on Wiki can be automated. Our technique, called MAWSEO, employs adversarial revisions to achieve real-world cybercriminal objectives, including rank boosting, vandalism detection evasion, topic relevancy, semantic consistency, user awareness (but not alarming) of promotional content, etc. Our evaluation and user study demonstrate that MAWSEO is capable of effectively and efficiently generating adversarial vandalism edits, which can bypass state-of-the-art built-in Wiki vandalism detectors, and also get promotional content through to Wiki users without triggering their alarms. In addition, we investigated potential defense, including coherence based detection and adversarial training of vandalism detection, against our attack in the Wiki ecosystem.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646819/](https://ieeexplore.ieee.org/document/10646819/)
## Poisoning Web-Scale Training Datasets is Practical.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#poisoning-web-scale-training-datasets-is-practical)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#poisoning-web-scale-training-datasets-is-practical)
### Authors
* Nicholas Carlini, Google DeepMind
* Matthew Jagielski, Google DeepMind
* Christopher A. Choquette-Choo, Google DeepMind
* Daniel Paleka, ETH, Zurich
* Will Pearce, NVIDIA
* Hyrum Anderson, Robust Intelligence
* Andreas Terzis, Google DeepMind
* Kurt Thomas, Google
* Florian Tramèr, ETH, Zurich
### Abstract
> Deep learning models are often trained on distributed, web-scale datasets crawled from the internet. In this paper, we introduce two new dataset poisoning attacks that intentionally introduce malicious examples to a model’s performance. Our attacks are immediately practical and could, today, poison 10 popular datasets. Our first attack, split-view poisoning, exploits the mutable nature of internet content to ensure a dataset annotator’s initial view of the dataset differs from the view downloaded by subsequent clients. By exploiting specific invalid trust assumptions, we show how we could have poisoned 0.01% of the LAION-400M or COYO-700M datasets for just $60 USD. Our second attack, frontrunning poisoning, targets web-scale datasets that periodically snapshot crowd-sourced content—such as Wikipedia—where an attacker only needs a time-limited window to inject malicious examples. In light of both attacks, we notify the maintainers of each affected dataset and recommended several low-overhead defenses.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646610/](https://ieeexplore.ieee.org/document/10646610/)
## Don't Shoot the Messenger: Localization Prevention of Satellite Internet Users.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#dont-shoot-the-messenger-localization-prevention-of-satellite-internet-users)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#dont-shoot-the-messenger-localization-prevention-of-satellite-internet-users)
### Authors
* David Koisser, Technical University of Darmstadt
* Richard Mitev, Technical University of Darmstadt
* Marco Chilese, Technical University of Darmstadt
* Ahmad-Reza Sadeghi, Technical University of Darmstadt
### Abstract
> Satellite Internet plays an increasingly important role in geopolitical conflicts. This notion was affirmed in the Ukrainian conflict escalating at the beginning of 2022, with the large-scale deployment of the Starlink satellite Internet service which consequently demonstrated the strategic importance of a free flow of information. Aside from military use, many citizens publish sensitive information on social media platforms to influence the public narrative. However, the use of satellite communication has proven to be dangerous, as the signals can be monitored by other satellites and used to triangulate the source on the ground. Unfortunately, the targeted killings of journalists have shown this threat to be effective. While the increasing deployment of satellite Internet systems gives citizens an unprecedented mouthpiece in conflicts, protecting them against localization is an unaddressed problem.To address this threat, we present AnonSat, a novel scheme to protect satellite Internet users from triangulation. AnonSat works with cheap off-the-shelf devices, leveraging long-range wireless communication to span a local network among satellite base stations. This allows rerouting users’ communication to other satellite base stations, some distance away from each user, thus, preventing their localization. AnonSat is designed for easy deployment and usability, which we demonstrate with a prototype implementation. Our large-scale network simulations using real-world data sets show the effectiveness of AnonSat in various practical settings.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646696/](https://ieeexplore.ieee.org/document/10646696/)
## The Dark Side of Scale: Insecurity of Direct-to-Cell Satellite Mega-Constellations.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#the-dark-side-of-scale-insecurity-of-direct-to-cell-satellite-mega-constellations)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#the-dark-side-of-scale-insecurity-of-direct-to-cell-satellite-mega-constellations)
### Authors
* Wei Liu, Tsinghua University
* Yuanjie Li, Tsinghua University; Zhongguancun Lab
* Hewu Li, Tsinghua University; Zhongguancun Lab
* Yimei Chen, Tsinghua University
* Yufeng Wang, Tsinghua University
* Jingyi Lan, Tsinghua University
* Jianping Wu, Tsinghua University; Zhongguancun Lab
* Qian Wu, Tsinghua University; Zhongguancun Lab
* Jun Liu, Tsinghua University; Zhongguancun Lab
* Zeqi Lai, Tsinghua University; Zhongguancun Lab
### Abstract
> The emergent direct-to-cell Low-Earth Orbit (LEO) satellite mega-constellations promise ubiquitous LTE/5G access for our commodity phones and IoTs without terrestrial base stations. While their extreme scale and mobility help tolerate diverse attacks, we show that both new features are exploitable to amplify signaling protocol vulnerabilities inherited from LTE/5G and obfuscate attacks to threaten satellite services. We showcase this with SatOver, a control-plane cross-layer attack that lets a greedy terrestrial operator or a man-in-the-middle attacker block all direct-to-cell satellites in urban areas. SatOver can reuse terrestrial LTE/5G base stations or deploy commodity software-defined radios as false satellites, stealthily hijack victim devices, delay their satellite access, stop them from probing other satellites, and block the entire mega-constellation. Our real-world satellite tests, lab tests with commodity 3GPP NR/IoT-NTN stacks, and operational trace-driven emulation validate SatOver’s viability for attacking COTS and upcoming NTN phones/IoTs. We discuss potential defenses against SatOver’s attack amplification/obfuscation.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646850/](https://ieeexplore.ieee.org/document/10646850/)
## SoK: Collusion-resistant Multi-party Private Set Intersections in the Semi-honest Model.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#sok-collusion-resistant-multi-party-private-set-intersections-in-the-semi-honest-model)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#sok-collusion-resistant-multi-party-private-set-intersections-in-the-semi-honest-model)
### Authors
* Jelle Vos, Cyber Security Group, Delft University of Technology, Delft, Netherlands
* Mauro Conti, Cyber Security Group, Delft University of Technology, Delft, Netherlands; SPRITZ, University of Padua, Padua, Italy
* Zekeriya Erkin, Cyber Security Group, Delft University of Technology, Delft, Netherlands
### Abstract
> Private set intersection protocols allow two parties with private sets of data to compute the intersection between them without leaking other information about their sets. These protocols have been studied for almost 20 years, and have been significantly improved over time, reducing both their computation and communication costs. However, when more than two parties want to compute a private set intersection, these protocols are no longer applicable. While extensions exist to the multi-party case, these protocols are significantly less efficient than the two-party case. It remains an open question to design collusion-resistant multi-party private set intersection (MPSI) protocols that come close to the efficiency of two-party protocols. This work is made more difficult by the immense variety in the proposed schemes and the lack of systematization. Moreover, each new work only considers a small subset of previously proposed protocols, leaving out important developments from older works. Finally, MPSI protocols rely on many possible constructions and building blocks that have not been summarized. This work aims to point protocol designers to gaps in research and promising directions, pointing out common security flaws and sketching a frame of reference. To this end, we focus on the semi-honest model. We conclude that current MPSI protocols are not a one-size-fits-all solution, and instead there exist many protocols that each prevail in their own application setting.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646669/](https://ieeexplore.ieee.org/document/10646669/)
## GAuV: A Graph-Based Automated Verification Framework for Perfect Semi-Honest Security of Multiparty Computation Protocols.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#gauv-a-graph-based-automated-verification-framework-for-perfect-semi-honest-security-of-multiparty-computation-protocols)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#gauv-a-graph-based-automated-verification-framework-for-perfect-semi-honest-security-of-multiparty-computation-protocols)
### Authors
* Xingyu Xie, Tsinghua University; RealAI
* Yifei Li, Tsinghua University
* Wei Zhang, Tsinghua University
* Tuowei Wang, Tsinghua University
* Shizhen Xu, RealAI
* Jun Zhu, Tsinghua University; RealAI
* Yifan Song, Tsinghua University
### Abstract
> Proving the security of a Multiparty Computation (MPC) protocol is a difficult task. Under the current simulation-based definition of MPC, a security proof consists of a simulator, which is usually specific to the concrete protocol and requires to be manually constructed, together with a theoretical analysis of the output distribution of the simulator and corrupted parties’ views in the real world. This presents an obstacle in verifying the security of a given MPC protocol. Moreover, an instance of a secure MPC protocol can easily lose its security guarantee due to careless implementation, and such a security issue is hard to detect in practice.(p)(/p)In this work, we propose a general automated framework to verify the perfect security of instances of MPC protocols against the semi-honest adversary. Our framework has perfect soundness: any protocol that is proven secure under our framework is also secure under the simulation-based definition of MPC. We demonstrate the completeness of our framework by showing that for any instance of the well-known BGW protocol, our framework can prove its security for every corrupted party set with polynomial time. Unlike prior work that only focuses on black-box privacy which requires the outputs of corrupted parties to contain no information about the inputs of the honest parties, our framework may potentially be used to prove the security of arbitrary MPC protocols. (p)(/p)We implement our framework as a prototype. The evaluation shows that our prototype automatically proves the perfect semi-honest security of BGW protocols and B2A (binary to arithmetic) conversion protocols in reasonable durations.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646862/](https://ieeexplore.ieee.org/document/10646862/)
## Don't Eject the Impostor: Fast Three-Party Computation With a Known Cheater.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#dont-eject-the-impostor-fast-three-party-computation-with-a-known-cheater)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#dont-eject-the-impostor-fast-three-party-computation-with-a-known-cheater)
### Authors
* Andreas Brüggemann, Technical University of Darmstadt (TUD), Germany
* Oliver Schick, Technical University of Darmstadt (TUD), Germany
* Thomas Schneider, Technical University of Darmstadt (TUD), Germany
* Ajith Suresh, Technology Innovation Institute (TII), Abu Dhabi
* Hossein Yalame, Technical University of Darmstadt (TUD), Germany
### Abstract
> Secure multi-party computation (MPC) enables (joint) computations on sensitive data while maintaining privacy. In real-world scenarios, asymmetric trust assumptions are often most realistic, where one somewhat trustworthy entity interacts with smaller clients. We generalize previous two-party computation (2PC) protocols like MUSE (USENIX Security’21) and SIMC (USENIX Security’22) to the three-party setting (3PC) with one malicious party, avoiding the performance limitations of dishonest-majority inherent to 2PC.We introduce two protocols, AUXILIATOR and SOCIUM, in a machine learning (ML) friendly design with a fast online phase and novel verification techniques in the setup phase. These protocols bridge the gap between prior 3PC approaches that considered either fully semi-honest or malicious settings. AUXILIATOR enhances the semi-honest two-party setting with a malicious helper, significantly improving communication by at least two orders of magnitude. SOCIUM extends the client-malicious setting with one malicious client and a semi-honest server, achieving substantial communication improvement by at least one order of magnitude compared to SIMC.Besides an implementation of our new protocols, we provide the first open-source implementation of the semi-honest 3PC protocol ASTRA (CCSW’19) and a variant of the malicious 3PC protocol SWIFT (USENIX Security’21).

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646684/](https://ieeexplore.ieee.org/document/10646684/)
## Scalable Mixed-Mode MPC.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#scalable-mixed-mode-mpc)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#scalable-mixed-mode-mpc)
### Authors
* Radhika Garg, Northwestern University
* Kang Yang, State Key Laboratory of Cryptology
* Jonathan Katz, University of Maryland
* Xiao Wang, Northwestern University
### Abstract
> Protocols for secure multi-party computation (MPC) supporting mixed-mode computation have found a lot of applications in recent years due to their flexibility in representing the function to be evaluated. However, existing mixed-mode MPC protocols are only practical for a small number of parties: they are either tailored to the case of two/three parties, or scale poorly for a large number of parties.In this paper, we design and implement a new system for highly efficient and scalable mixed-mode MPC tolerating an arbitrary number of semi-honest corruptions. Our protocols allow secret data to be represented in Encrypted, Boolean, Arithmetic, or Yao form, and support efficient conversions between these representations.1)We design a multi-party table-lookup protocol, where both the index and the table can be kept private. The protocol is scalable even with hundreds of parties.2)Using the above protocol, we design efficient conversions between additive arithmetic secret sharings and Boolean secret sharings for a large number of parties. For 32 parties, our conversion protocols require 1184× to 8141× less communication compared to the state-of-the-art protocols MOTION and MP-SPDZ; this leads to up to 1275× improvement in running time under 1 Gbps network. The improvements are even larger with more parties.3)We also use new protocols to design an efficient multi-party distributed garbling protocol. The protocol could achieve asymptotically constant communication per party.Our implementation will be made public.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646728/](https://ieeexplore.ieee.org/document/10646728/)
## Asterisk: Super-fast MPC with a Friend.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#asterisk-super-fast-mpc-with-a-friend)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#asterisk-super-fast-mpc-with-a-friend)
### Authors
* Banashri Karmakar, IISc, Bangalore
* Nishat Koti, IISc, Bangalore
* Arpita Patra, IISc, Bangalore
* Sikhar Patranabis, IBM IRL
* Protik Paul, IISc, Bangalore
* Divya Ravi, Aarhus University
### Abstract
> Secure multiparty computation (MPC) enables privacy-preserving collaborative computation over sensitive data held by multiple mutually distrusting parties. Unfortunately, in the most natural setting where a majority of the parties are maliciously corrupt (also called the dishonest majority setting), traditional MPC protocols incur high overheads and offer weaker security guarantees than are desirable for practical applications. In this paper, we explore the possibility of circumventing these drawbacks and achieving practically efficient dishonest majority MPC protocols with strong security guarantees by assuming an additional semi-honest, non-colluding helper party HP .
> 
> <sup xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">1</sup>
> 
> We believe that this is a more realistic alternative to assuming an honest majority, since many real-world applications of MPC involving potentially large numbers of parties (such as dark pools) are typically enabled by a central governing entity that can be modeled as the HP.In the above model, we are the first to design, implement and benchmark a practically-efficient and general multi-party framework, Asterisk. Our framework requires invoking HP only a constant number of times, achieves the strong security guarantee of fairness (either all parties learn the output or none do), scales to hundreds of parties, outperforms all existing dishonest majority MPC protocols, and is, in fact, competitive with state-of-the-art honest majority MPC protocols. Our experiments show that Asterisk achieves 228 – 288× speedup in preprocessing as compared to the best dishonest majority MPC protocol. With respect to online time, Asterisk supports 100-party evaluation of a circuit with 10
> 
> <sup xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">6</sup>
> 
> multiplication gates in approximately 20 seconds. We also implement and benchmark practically efficient and highly scalable dark pool instances using Asterisk. The corresponding run times showcase the effectiveness of Asterisk in enabling efficient realizations of real-world privacy-preserving applications with strong security guarantees.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646656/](https://ieeexplore.ieee.org/document/10646656/)
## Efficient Actively Secure DPF and RAM-based 2PC with One-Bit Leakage.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#efficient-actively-secure-dpf-and-ram-based-2pc-with-one-bit-leakage)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#efficient-actively-secure-dpf-and-ram-based-2pc-with-one-bit-leakage)
### Authors
### Abstract
> Secure two-party computation (2PC) in the RAM model has attracted huge attention in recent years. Most existing results only support semi-honest security, with the exception of Keller and Yanai (Eurocrypt 2018) with very high cost. In this paper, we propose an efficient RAM-based 2PC protocol with active security and one-bit leakage.1)We propose an actively secure protocol for distributed point function (DPF), with one-bit leakage, that is essentially as efficient as the state-of-the-art semi-honest protocol. Compared with previous work, our protocol takes about 50× less communication for a domain with 2
> 
> <sup xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">20</sup>
> 
> entries, and no longer requires actively secure generic 2PC.2)We extend the dual-execution protocol to allow reactive computation, and then build a RAM-based 2PC protocol with active security on top of our new building blocks. The protocol follows the paradigm of Doerner and shelat (CCS 2017). We are able to prove that the protocol has end-to-end one-bit leakage.3)Our implementation shows that our protocol is almost as efficient as the state-of-the-art semi-honest RAM-based 2PC protocol, and is at least two orders of magnitude faster than prior actively secure RAM-based 2PC without leakage, providing a realistic trade-off in practice.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646747/](https://ieeexplore.ieee.org/document/10646747/)
## MPC-in-the-Head Framework without Repetition and its Applications to the Lattice-based Cryptography.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#mpc-in-the-head-framework-without-repetition-and-its-applications-to-the-lattice-based-cryptography)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#mpc-in-the-head-framework-without-repetition-and-its-applications-to-the-lattice-based-cryptography)
### Authors
* Weihao Bai, Institute of Software, Chinese Academy of Sciences; University of Chinese Academy of Sciences
* Long Chen, Institute of Software, Chinese Academy of Sciences
* Qianwen Gao, Institute of Software, Chinese Academy of Sciences; University of Chinese Academy of Sciences
* Zhenfeng Zhang, Institute of Software, Chinese Academy of Sciences
### Abstract
> The MPC-in-the-Head framework has been proposed as a solution for Non-Interactive Zero-Knowledge Arguments of Knowledge (NIZKAoK) due to its efficient proof generation. However, most existing NIZKAoK constructions using this approach require multiple MPC evaluations to achieve negligible soundness error, resulting in proof size and time that are asymptotically at least λ times the size of the circuit of the NP relation. In this paper, we propose a novel method to eliminate the need for repeated MPC evaluations, resulting in a NIZKAoK protocol for any NP relation that we call Diet. The proof size and time of Diet are asymptotically only polylogarithmic with respect to the size of the circuit C of the NP relation, but are independent of the security parameter λ. Hence, both the proof size and time can be significantly reduced.Moreover, Diet offers promising concrete efficiency for proving Learning With Errors (LWE) problems and its variants. Our solution provides significant advantages over other schemes in terms of both proof size and proof time, when considering both factors together. Specifically, Diet is a promising method for proving knowledge of secret keys for lattice-based key encapsulation mechanisms (KEMs) such as Frodo and Kyber, offering a practical solution to future post-quantum certificate management. For Kyber 512, our implementation achieves an online proof size of 83.65 kilobytes (KB) with a preprocessing overhead of 152.02KB. The implementation is highly efficient, with an online proof time of only 0.68 seconds and a preprocessing time of 0.81 seconds. Notably, our approach provides the first reported implementation of proving knowledge of secret keys for Kyber 512 using post-quantum primitives-based zero-knowledge proofs.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646719/](https://ieeexplore.ieee.org/document/10646719/)
## Orca: FSS-based Secure Training and Inference with GPUs.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#orca-fss-based-secure-training-and-inference-with-gpus)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#orca-fss-based-secure-training-and-inference-with-gpus)
### Authors
* Neha Jawalkar, Indian Institute of Science, India
* Kanav Gupta, Microsoft Research, India
* Arkaprava Basu, Indian Institute of Science, India
* Nishanth Chandran, Microsoft Research, India
* Divya Gupta, Microsoft Research, India
* Rahul Sharma, Microsoft Research, India
### Abstract
> Secure Two-party Computation (2PC) allows two parties to compute any function on their private inputs without revealing their inputs to each other. In the offline/on- line model for 2PC, correlated randomness that is independent of all inputs to the computation, is generated in a preprocessing (offline) phase and this randomness is then utilized in the online phase once the inputs to the parties become available. Most 2PC works focus on optimizing the online time as this overhead lies on the critical path. A recent paradigm for obtaining efficient 2PC protocols with low online cost is based on the cryptographic technique of function secret sharing (FSS).We build an end-to-end system Orca to accelerate the computation of FSS-based 2PC protocols with GPUs. Next, we observe that the main performance bottleneck in such accelerated protocols is in storage (due to the large amount of correlated randomness), and we design new FSS-based 2PC protocols for several key functionalities in ML which reduce storage by up to 5×. Compared to prior state-of-the-art on secure training accelerated with GPUs in the same computation model (PIRANHA, Usenix Security 2022), we show that Orca has 4% higher accuracy, 98 × lesser communication, and is 22 × faster on CIFAR-10. For secure ImageNet inference, Orca achieves sub-second latency for VGG-16 and ResNet-50 and outperforms the state-of-the-art by 8 — 103 ×.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646833/](https://ieeexplore.ieee.org/document/10646833/)
## Security, Privacy, and Data-sharing Trade-offs When Moving to the United States: Insights from a Qualitative Study.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#security-privacy-and-data-sharing-trade-offs-when-moving-to-the-united-states-insights-from-a-qualitative-study)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#security-privacy-and-data-sharing-trade-offs-when-moving-to-the-united-states-insights-from-a-qualitative-study)
### Authors
* Mindy Tran, The George Washington University, USA; Paderborn University, Germany
* Collins W. Munyendo, The George Washington University, USA
* Harshini Sri Ramulu, The George Washington University, USA; Paderborn University, Germany
* Rachel Gonzalez Rodriguez, The George Washington University, USA
* Luisa Ball Schnell, The George Washington University, USA
* Cora Sula, The George Washington University, USA
* Lucy Simko, The George Washington University, USA
* Yasemin Acar, The George Washington University, USA; Paderborn University, Germany
### Abstract
> Moving to a new country often means that people leave their "known environment" and interact with new entities, often sharing sensitive and personal information. This exposes them to various risks. In this study, we investigate the challenges and concerns related to security, privacy, and data-sharing for people who have recently moved to the United States. Through semi-structured interviews (n=25), we find that most participants feel uncomfortable sharing documents containing their personal and sensitive information for the visa process e.g., their financial information and proof of relationship. Sharing this information makes participants concerned about their safety and privacy and sometimes violates their cultural information-sharing norms. Moving to a new environment, particularly to the US, also makes people vulnerable to fraud, specifically fraudulent online renting posts and scam calls. Those who move also navigate bureaucratic, administrative, and technical challenges that exacerbate their perceived security and privacy concerns. We further find a power imbalance that compels visa applicants to share all required information—to avoid getting their visa rejected—without feeling fully informed about the requirements and safeguards in place. Our study highlights the need for more guidance, transparency, and respect for individuals’ privacy from embassies and for technology designers to better support and protect those moving countries.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646788/](https://ieeexplore.ieee.org/document/10646788/)
## SoK: Safer Digital-Safety Research Involving At-Risk Users.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#sok-safer-digital-safety-research-involving-at-risk-users)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#sok-safer-digital-safety-research-involving-at-risk-users)
### Authors
* Rosanna Bellini, Cornell Tech
* Emily Tseng, Cornell Tech
* Noel Warford, University of Maryland
* Alaa Daffalla, Cornell Tech
* Tara Matthews, Google
* Sunny Consolvo, Google
* Jill Palzkill Woelfer, JumpCloud
* Patrick Gage Kelley, Google
* Michelle L. Mazurek, University of Maryland
* Dana Cuomo, Lafayette College
* Nicola Dell, Cornell Tech
* Thomas Ristenpart, Cornell Tech
### Abstract
> Research involving at-risk users—that is, users who are more likely to experience a digital attack or to be disproportionately affected when harm from such an attack occurs—can pose significant safety challenges to both users and researchers. Nevertheless, pursuing research in computer security & privacy (S&P) is crucial to understanding how to meet the digital-safety needs of at-risk users and to design safer technology for all. To standardize and bolster safer research involving such users, we offer an analysis of 196 academic works to elicit 14 research risks and 36 safety practices used by a growing community of researchers. We pair this inconsistent set of reported safety practices with oral histories from 12 domain experts to contribute scaffolded and consolidated pragmatic guidance that researchers can use to plan, execute, and share safer digital-safety research involving at-risk users. We conclude by suggesting areas for future research regarding the reporting, study, and funding of at-risk user research.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646660/](https://ieeexplore.ieee.org/document/10646660/)
## Janus: Safe Biometric Deduplication for Humanitarian Aid Distribution.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#janus-safe-biometric-deduplication-for-humanitarian-aid-distribution)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#janus-safe-biometric-deduplication-for-humanitarian-aid-distribution)
### Authors
* Kasra EdalatNejad, SPRING Lab, EPFL, Lausanne, Switzerland
* Wouter Lueks, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Justinas Sukaitis, International Committee of the Red Cross, Geneva, Switzerland
* Vincent Graf Narbel, International Committee of the Red Cross, Geneva, Switzerland
* Massimo Marelli, International Committee of the Red Cross, Geneva, Switzerland
* Carmela Troncoso, SPRING Lab, EPFL, Lausanne, Switzerland
### Abstract
> Humanitarian organizations provide aid to people in need. To use their limited budget efficiently, their distribution processes must ensure that legitimate recipients cannot receive more aid than they are entitled to. Thus, it is essential that recipients can register at most once per aid program.Taking the International Committee of the Red Cross’s aid distribution registration process as a use case, we identify the requirements to detect double registration without creating new risks for aid recipients. We then design Janus, which combines privacy-enhancing technologies with biometrics to prevent double registration in a safe manner. Janus does not create plaintext biometric databases and reveals only one bit of information at registration time (whether the user registering is present in the database or not). We implement and evaluate three instantiations of Janus based on secure multiparty computation (SMC) alone, a hybrid of somewhat homomorphic encryption and SMC, and trusted execution environments. We demonstrate that they support the privacy, accuracy, and performance needs of humanitarian organizations. We compare Janus with existing alternatives and show it is the first system that provides the accuracy our scenario requires while providing strong protection.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646811/](https://ieeexplore.ieee.org/document/10646811/)
## SoK: Technical Implementation and Human Impact of Internet Privacy Regulations.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#sok-technical-implementation-and-human-impact-of-internet-privacy-regulations)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#sok-technical-implementation-and-human-impact-of-internet-privacy-regulations)
### Authors
* Eleanor Birrell, Pomona College
* Jay Rodolitz, Pomona College
* Angel Ding, Northeastern University
* Jenna Lee, Wellesley College
* Emily McReynolds, University of Washington
* Jevan Hutson, Future of Privacy Forum
* Ada Lerner, Hintze Law PLLC
### Abstract
> Growing recognition of the potential for exploitation of personal data and of the shortcomings of prior privacy regimes has led to the passage of a multitude of new privacy regulations. Some of these laws—notably the European Union’s General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA)—have been the focus of large bodies of research by the computer science community, while others have received less attention. In this work, we analyze a set of 24 privacy laws and data protection regulations drawn from around the world—both those that have frequently been studied by computer scientists and those that have not—and develop a taxonomy of rights granted and obligations imposed by these laws. We then leverage this taxonomy to systematize 270 technical research papers published in computer science venues that investigate the impact of these laws and explore how technical solutions can complement legal protections. Finally, we analyze the results in this space through an inter-disciplinary lens and make recommendations for future work at the intersection of computer science and legal privacy.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646758/](https://ieeexplore.ieee.org/document/10646758/)
## Digital Security - A Question of Perspective A Large-Scale Telephone Survey with Four At-Risk User Groups.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#digital-security-a-question-of-perspective-a-large-scale-telephone-survey-with-four-at-risk-user-groups)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#digital-security-a-question-of-perspective-a-large-scale-telephone-survey-with-four-at-risk-user-groups)
### Authors
* Franziska Herbert, Ruhr University Bochum, Germany
* Steffen Becker, Ruhr University Bochum, Germany; Max Planck Institute for Security and Privacy, Germany
* Annalina Buckmann, Ruhr University Bochum, Germany
* Marvin Kowalewski, Ruhr University Bochum, Germany
* Jonas Hielscher, Ruhr University Bochum, Germany
* Yasemin Acar, Paderborn University, Germany
* Markus Dürmuth, Hannover University, Germany
* Yixin Zou, Max Planck Institute for Security and Privacy, Germany
* M. Angela Sasse, Ruhr University Bochum, Germany
### Abstract
> This paper investigates the digital security experiences of four at-risk user groups in Germany, including older adults (70+), teenagers (14-17), people with migration backgrounds, and people with low formal education. Using computer-assisted telephone interviews, we sampled 250 participants per group, representative of region, gender, and partly age distributions. We examine their device usage, concerns, prior negative incidents, perceptions of potential attackers, and information sources. Our study provides the first quantitative and nationally representative insights into the digital security experiences of these four at-risk groups in Germany. Our findings show that participants with migration backgrounds used the most devices, sought more security information, and reported more experiences with cybercrime incidents than other groups. Older adults used the fewest devices and were least affected by cybercrimes. All groups relied on friends and family and online news as their primary sources of security information, with little concern about their social circles being potential attackers. We highlight the nuanced differences between the four at-risk groups and compare them to the broader German population when possible. We conclude by presenting recommendations for education, policy, and future research aimed at addressing the digital security needs of these at-risk user groups.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646701/](https://ieeexplore.ieee.org/document/10646701/)
## No Easy Way Out: the Effectiveness of Deplatforming an Extremist Forum to Suppress Hate and Harassment.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#no-easy-way-out-the-effectiveness-of-deplatforming-an-extremist-forum-to-suppress-hate-and-harassment)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#no-easy-way-out-the-effectiveness-of-deplatforming-an-extremist-forum-to-suppress-hate-and-harassment)
### Authors
* Anh V. Vu, Cambridge Cybercrime Centre, University of Cambridge
* Alice Hutchings, Cambridge Cybercrime Centre, University of Cambridge
* Ross Anderson, University of Cambridge and University of Edinburgh
### Abstract
> Legislators and policymakers worldwide are debating options for suppressing illegal, harmful and undesirable material online. Drawing on several quantitative data sources, we show that deplatforming an active community to suppress online hate and harassment, even with a substantial concerted effort involving several tech firms, can be hard. Our case study is the disruption of the largest and longest-running harassment forum Kiwi Farms in late 2022, which is probably the most extensive industry effort to date. Despite the active participation of a number of tech companies over several consecutive months, this campaign failed to shut down the forum and remove its objectionable content. While briefly raising public awareness, it led to rapid platform displacement and traffic fragmentation. Part of the activity decamped to Telegram, while traffic shifted from the primary domain to previously abandoned alternatives. The forum experienced intermittent outages for several weeks, after which the community leading the campaign lost interest, traffic was directed back to the main domain, users quickly returned, and the forum was back online and became even more connected. The forum members themselves stopped discussing the incident shortly thereafter, and the net effect was that forum activity, active users, threads, posts and traffic were all cut by about half. The disruption largely affected casual users (of whom roughly 87% left), while half the core members remained engaged. It also drew many newcomers, who exhibited increasing levels of toxicity during the first few weeks of participation. Deplatforming a community without a court order raises philosophical issues about censorship versus free speech; ethical and legal issues about the role of industry in online content moderation; and practical issues on the efficacy of private-sector versus government action. Deplatforming a dispersed community using a series of court orders against individual service providers appears unlikely to be very effective if the censor cannot incapacitate the key maintainers, whether by arresting them, enjoining them or otherwise deterring them.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646800/](https://ieeexplore.ieee.org/document/10646800/)
## Withdrawing is believing? Detecting Inconsistencies between Withdrawal Choices and Third-party Data Collections in Mobile Apps.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#withdrawing-is-believing-detecting-inconsistencies-between-withdrawal-choices-and-third-party-data-collections-in-mobile-apps)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#withdrawing-is-believing-detecting-inconsistencies-between-withdrawal-choices-and-third-party-data-collections-in-mobile-apps)
### Authors
* Xiaolin Du, Fudan University
* Zhemin Yang, Fudan University
* Jiapeng Lin, Fudan University
* Yinzhi Cao, Johns Hopkins University
* Min Yang, Fudan University
### Abstract
> Popular privacy regulations such as General Data Protection Regulation (GDPR) often allow consumers to withdraw from providing data, e.g., the famous right to opt-out. Modern computer software, e.g., mobile applications (apps), often provide withdrawal interfaces, which stop data collection— e.g., from third-party ads and analytics libraries—to respect users’ withdrawal decisions. While such interfaces are marked as "withdrawal", their correlated withdrawal decisions are often inconsistent with the apps’ actual data collection behavior, especially from third parties, which is defined as withdrawal inconsistency in the paper.Prior works have either studied website withdrawal inconsistency or privacy leaks of mobile apps. However, the mobile withdrawal inconsistency problem is different yet more complex than those in websites due to the diversity in mobile withdrawal interface and the variety of private information. At the same time, none of the existing works detecting privacy leaks of mobile apps understand users’ withdrawal decisions let alone correlate them with withdrawal behaviors.In this paper, we design and implement a novel approach, called MowChecker, to detect mobile apps’ inconsistencies in third-party data collection. The key insight is that withdrawal choices should have either a control-flow dependency on personal information flow or a data-flow dependency on withdrawal APIs provided by third-party data collection libraries. Our evaluation of MowChecker on real-world Android apps reveals 157 manually-confirmed, zero-day withdrawal inconsistencies. We have responsibly reported them to app developers and received 23 responses with two being fixed.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646600/](https://ieeexplore.ieee.org/document/10646600/)
## The Role of User-Agent Interactions on Mobile Money Practices in Kenya and Tanzania.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#the-role-of-user-agent-interactions-on-mobile-money-practices-in-kenya-and-tanzania)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#the-role-of-user-agent-interactions-on-mobile-money-practices-in-kenya-and-tanzania)
### Authors
* Karen Sowon, Carnegie Mellon University
* Edith Luhanga, Carnegie Mellon University-Africa
* Lorrie Faith Cranor, Carnegie Mellon University
* Giulia Fanti, Carnegie Mellon University
* Conrad Tucker, Carnegie Mellon University
* Assane Gueye, Carnegie Mellon University-Africa
### Abstract
> Digital financial services have catalyzed financial inclusion in Africa. Commonly implemented as a mobile wallet service referred to as mobile money (MoMo), the technology provides enormous benefits to its users, some of whom have long been unbanked. While the benefits of mobile money services have largely been documented, the challenges that arise—especially in the interactions between human stakeholders—remain relatively unexplored. In this study, we investigate the practices of mobile money users in their interactions with mobile money agents. We conduct 72 structured interviews in Kenya and Tanzania (n=36 per country). The results show that users and agents design workarounds in response to limitations and challenges that users face within the ecosystem. These include advances or loans from agents, relying on the user-agent relationships in place of legal identification requirements, and altering the intended transaction execution to improve convenience. Overall, the workarounds modify one or more of what we see as the core components of mobile money: the user, the agent, and the transaction itself. The workarounds pose new risks and challenges for users and the overall ecosystem. The results suggest a need for rethinking privacy and security of various components of the ecosystem, as well as policy and regulatory controls to safeguard interactions while ensuring the usability of mobile money.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646866/](https://ieeexplore.ieee.org/document/10646866/)
## You Only Prompt Once: On the Capabilities of Prompt Learning on Large Language Models to Tackle Toxic Content.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#you-only-prompt-once-on-the-capabilities-of-prompt-learning-on-large-language-models-to-tackle-toxic-content)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#you-only-prompt-once-on-the-capabilities-of-prompt-learning-on-large-language-models-to-tackle-toxic-content)
### Authors
* Xinlei He, CISPA Helmholtz Center for Information Security
* Savvas Zannettou, Delft University of Technology
* Yun Shen, NetApp
* Yang Zhang, CISPA Helmholtz Center for Information Security
### Abstract
> The spread of toxic content online is an important problem that has adverse effects on user experience online and in our society at large. Motivated by the importance and impact of the problem, research focuses on developing solutions to detect toxic content, usually leveraging machine learning (ML) models trained on human-annotated datasets. While these efforts are important, these models usually do not generalize well and they can not cope with new trends (e.g., the emergence of new toxic terms). Currently, we are witnessing a shift in the approach to tackling societal issues online, particularly leveraging large language models (LLMs) like GPT-3 or T5 that are trained on vast corpora and have strong generalizability. In this work, we investigate how we can use LLMs and prompt learning to tackle the problem of toxic content, particularly focusing on three tasks; 1) Toxicity Classification, 2) Toxic Span Detection, and 3) Detoxification. We perform an extensive evaluation over five model architectures and eight datasets demonstrating that LLMs with prompt learning can achieve similar or even better performance compared to models trained on these specific tasks. We find that prompt learning achieves around 10% improvement in the toxicity classification task compared to the baselines, while for the toxic span detection task we find better performance to the best baseline (0.643 vs. 0.640 in terms of F
> 
> <inf xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">1</inf>
> 
> -score). Finally, for the detoxification task, we find that prompt learning can successfully reduce the average toxicity score (from 0.775 to 0.213) while preserving semantic meaning.
> 
> <sup xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">1</sup>

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646749/](https://ieeexplore.ieee.org/document/10646749/)
## Moderating New Waves of Online Hate with Chain-of-Thought Reasoning in Large Language Models.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#moderating-new-waves-of-online-hate-with-chain-of-thought-reasoning-in-large-language-models)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#moderating-new-waves-of-online-hate-with-chain-of-thought-reasoning-in-large-language-models)
### Authors
* Nishant Vishwamitra, University of Texas at San Antonio
* Keyan Guo, University at Buffalo
* Farhan Tajwar Romit, University of Texas at San Antonio
* Isabelle Ondracek, University at Buffalo
* Long Cheng, Clemson University
* Ziming Zhao, University at Buffalo
* Hongxin Hu, University at Buffalo
### Abstract
> Online hate is an escalating problem that negatively impacts the lives of Internet users, and is also subject to rapid changes due to evolving events, resulting in new waves of online hate that pose a critical threat. Detecting and mitigating these new waves present two key challenges: it demands reasoning-based complex decision-making to determine the presence of hateful content, and the limited availability of training samples hinders updating the detection model. To address this critical issue, we present a novel framework called HateGuard for effectively moderating new waves of online hate. HateGuard employs a reasoning-based approach that leverages the recently introduced chain-of-thought (CoT) prompting technique, harnessing the capabilities of large language models (LLMs). HateGuard further achieves prompt-based zero-shot detection by automatically generating and updating detection prompts with new derogatory terms and targets in new wave samples to effectively address new waves of online hate. To demonstrate the effectiveness of our approach, we compile a new dataset consisting of tweets related to three recently witnessed new waves: the 2022 Russian invasion of Ukraine, the 2021 insurrection of the US Capitol, and the COVID-19 pandemic. Our studies reveal crucial longitudinal patterns in these new waves concerning the evolution of events and the pressing need for techniques to rapidly update existing moderation tools to counteract them. Comparative evaluations against state-of-the-art approaches illustrate the superiority of our framework, showcasing a substantial 10.59% to 88% improvement in detecting the three new waves of online hate. Our work highlights the severe threat posed by the emergence of new waves of online hate and represents a paradigm shift in addressing this threat practically.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646809/](https://ieeexplore.ieee.org/document/10646809/)
## Nightshade: Prompt-Specific Poisoning Attacks on Text-to-Image Generative Models.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#nightshade-prompt-specific-poisoning-attacks-on-text-to-image-generative-models)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#nightshade-prompt-specific-poisoning-attacks-on-text-to-image-generative-models)
### Authors
* Shawn Shan, Department of Computer Science, University of Chicago
* Wenxin Ding, Department of Computer Science, University of Chicago
* Josephine Passananti, Department of Computer Science, University of Chicago
* Stanley Wu, Department of Computer Science, University of Chicago
* Haitao Zheng, Department of Computer Science, University of Chicago
* Ben Y. Zhao, Department of Computer Science, University of Chicago
### Abstract
> Trained on billions of images, diffusion-based text-to-image models seem impervious to traditional data poisoning attacks, which typically require poison samples approaching 20% of the training set. In this paper, we show that state-of-the-art text-to-image generative models are in fact highly vulnerable to poisoning attacks. Our work is driven by two key insights. First, while diffusion models are trained on billions of samples, the number of training samples associated with a specific concept or prompt is generally on the order of thousands. This suggests that these models will be vulnerable to prompt-specific poisoning attacks that corrupt a model’s ability to respond to specific targeted prompts. Second, poison samples can be carefully crafted to maximize poison potency to ensure success with very few samples.We introduce Nightshade, a prompt-specific poisoning attack optimized for potency that can completely control the output of a prompt in Stable Diffusion’s newest model (SDXL) with less than 100 poisoned training samples. Nightshade also generates stealthy poison images that look visually identical to their benign counterparts, and produces poison effects that "bleed through" to related concepts. More importantly, a moderate number of Nightshade attacks on independent prompts can destabilize a model and disable its ability to generate images for any and all prompts. Finally, we propose the use of Nightshade and similar tools as a defense for content owners against web scrapers that ignore opt-out/do-not-crawl directives, and discuss potential implications for both model trainers and content owners.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646851/](https://ieeexplore.ieee.org/document/10646851/)
## On Large Language Models' Resilience to Coercive Interrogation.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#on-large-language-models-resilience-to-coercive-interrogation)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#on-large-language-models-resilience-to-coercive-interrogation)
### Authors
* Zhuo Zhang, Department of Computer Science, Purdue University
* Guangyu Shen, Department of Computer Science, Purdue University
* Guanhong Tao, Department of Computer Science, Purdue University
* Siyuan Cheng, Department of Computer Science, Purdue University
* Xiangyu Zhang, Department of Computer Science, Purdue University
### Abstract
> Large Language Models (LLMs) are increasingly employed in numerous applications. It is hence important to ensure that their ethical standard aligns with humans’. However, existing jail-breaking efforts show that such alignment could be compromised by well-crafted prompts. In this paper, we disclose a new threat to LLMs alignment when a malicious actor has access to the top-k token predictions at each output position of the model, such as in all open-source LLMs and many commercial LLMs that provide the needed APIs (e.g., some GPT versions). It does not require crafting any prompt. Instead, it leverages the observation that even when an LLM declines a toxic query, the harmful response is concealed deep within the output logits. We can coerce the model to disclose it by forcefully using low-ranked output tokens during auto-regressive output generation, and such forcing is only needed in a very small number of selected output positions. We call it model interrogation. Since our method operates differently from jail-breaking, it has better effectiveness than state-of-the- art jail-breaking techniques (92% versus 62%) and is 10 to 20 times faster. The toxic content elicited by our method is also of better quality. More importantly, it is complementary to jail-breaking, and a synergetic integration of the two exhibits superior performance over individual methods. We also find that with interrogation, harmful content can even be extracted from models customized for coding tasks.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646642/](https://ieeexplore.ieee.org/document/10646642/)
## PromptCARE: Prompt Copyright Protection by Watermark Injection and Verification.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#promptcare-prompt-copyright-protection-by-watermark-injection-and-verification)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#promptcare-prompt-copyright-protection-by-watermark-injection-and-verification)
### Authors
* Hongwei Yao, Zhejiang University, Hangzhou, China
* Jian Lou, Zhejiang University, Hangzhou, China; ZJU-Hangzhou Global Scientific and Technological Innovation Center, Hangzhou, China
* Zhan Qin, Zhejiang University, Hangzhou, China; ZJU-Hangzhou Global Scientific and Technological Innovation Center, Hangzhou, China
* Kui Ren, Zhejiang University, Hangzhou, China; ZJU-Hangzhou Global Scientific and Technological Innovation Center, Hangzhou, China
### Abstract
> Large language models (LLMs) have witnessed a meteoric rise in popularity among the general public users over the past few months, facilitating diverse downstream tasks with human-level accuracy and proficiency. Prompts play an essential role in this success, which efficiently adapt pre-trained LLMs to task-specific applications by simply prepending a sequence of tokens to the query texts. However, designing and selecting an optimal prompt can be both expensive and demanding, leading to the emergence of Prompt-as-a-Service providers who profit by providing well-designed prompts for authorized use. With the growing popularity of prompts and their indispensable role in LLM-based services, there is an urgent need to protect the copyright of prompts against unauthorized use.In this paper, we propose PromptCARE, the first framework for prompt copyright protection through watermark injection and verification. Prompt watermarking presents unique challenges that render existing watermarking techniques developed for model and dataset copyright verification ineffective. PromptCARE overcomes these hurdles by proposing watermark injection and verification schemes tailor-made for characteristics pertinent to prompts and the natural language domain. Extensive experiments on six well-known benchmark datasets, using three prevalent pre-trained LLMs (BERT, RoBERTa, and Facebook OPT-1.3b), demonstrate the effectiveness, harmlessness, robustness, and stealthiness of PromptCARE.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646612/](https://ieeexplore.ieee.org/document/10646612/)
## LLMs Cannot Reliably Identify and Reason About Security Vulnerabilities (Yet?): A Comprehensive Evaluation, Framework, and Benchmarks.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#llms-cannot-reliably-identify-and-reason-about-security-vulnerabilities-yet-a-comprehensive-evaluation-framework-and-benchmarks)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#llms-cannot-reliably-identify-and-reason-about-security-vulnerabilities-yet-a-comprehensive-evaluation-framework-and-benchmarks)
### Authors
* Saad Ullah, Boston University
* Mingji Han, Boston University
* Saurabh Pujar, IBM Research
* Hammond Pearce, UNSW Sydney
* Ayse Coskun, Boston University
* Gianluca Stringhini, Boston University
### Abstract
> Large Language Models (LLMs) have been suggested for use in automated vulnerability repair, but benchmarks showing they can consistently identify security-related bugs are lacking. We thus develop SecLLMHolmes, a fully automated evaluation framework that performs the most detailed investigation to date on whether LLMs can reliably identify and reason about security-related bugs. We construct a set of 228 code scenarios and analyze eight of the most capable LLMs across eight different investigative dimensions using our framework. Our evaluation shows LLMs provide non-deterministic responses, incorrect and unfaithful reasoning, and perform poorly in real-world scenarios. Most importantly, our findings reveal significant non-robustness in even the most advanced models like ‘PaLM2’ and ‘GPT-4’: by merely changing function or variable names, or by the addition of library functions in the source code, these models can yield incorrect answers in 26% and 17% of cases, respectively. These findings demonstrate that further LLM advances are needed before LLMs can be used as general purpose security assistants.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646663/](https://ieeexplore.ieee.org/document/10646663/)
## LLMIF: Augmented Large Language Model for Fuzzing IoT Devices.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#llmif-augmented-large-language-model-for-fuzzing-iot-devices)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#llmif-augmented-large-language-model-for-fuzzing-iot-devices)
### Authors
* Jincheng Wang, The Hong Kong Polytechnic University
* Le Yu, Nanjing University of Posts and Telecommunications
* Xiapu Luo, The Hong Kong Polytechnic University
### Abstract
> Despite the efficacy of fuzzing in verifying the implementation correctness of network protocols, existing IoT protocol fuzzing approaches grapple with several limitations, including obfuscated message formats, unresolved message dependencies, and a lack of evaluations on the testing cases. These limitations significantly curtail the capabilities of IoT fuzzers in vulnerability identification. In this work, we show that the protocol specification contains fruitful descriptions of protocol messages, which can be used to overcome the above limitations and guide IoT protocol fuzzing. To automate the specification analysis, we augment the large language model with the specification contents, and drive it to perform two tasks (i.e., protocol information extraction, and device response reasoning). We further design and implement a fuzzing algorithm, LLMIF, which incorporates the LLM into IoT fuzzing. Finally, we select Zigbee as the target protocol and initiate comprehensive evaluations. The evaluation result shows that LLMIF successfully addressed the above limitations. Compared with the existing Zigbee fuzzers, it increases the protocol message coverage and code coverage by 55.2% and 53.9%, respectively. Besides the enhanced coverage, LLMIF unearthed 11 vulnerabilities on real-world Zigbee devices, which include eight previously unknown vulnerabilities. Seven of them are not covered by the existing Zigbee fuzzers.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646659/](https://ieeexplore.ieee.org/document/10646659/)
## SneakyPrompt: Jailbreaking Text-to-image Generative Models.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#sneakyprompt-jailbreaking-text-to-image-generative-models)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#sneakyprompt-jailbreaking-text-to-image-generative-models)
### Authors
* Yuchen Yang, Johns Hopkins University
* Bo Hui, Johns Hopkins University
* Haolin Yuan, Johns Hopkins University
* Neil Gong, Duke University
* Yinzhi Cao, Johns Hopkins University
### Abstract
> Text-to-image generative models such as Stable Diffusion and DALL•E raise many ethical concerns due to the generation of harmful images such as Not-Safe-for-Work (NSFW) ones. To address these ethical concerns, safety filters are often adopted to prevent the generation of NSFW images. In this work, we propose SneakyPrompt, the first automated attack framework, to jailbreak text-to-image generative models such that they generate NSFW images even if safety filters are adopted. Given a prompt that is blocked by a safety filter, SneakyPrompt repeatedly queries the text-to-image generative model and strategically perturbs tokens in the prompt based on the query results to bypass the safety filter. Specifically, SneakyPrompt utilizes reinforcement learning to guide the perturbation of tokens. Our evaluation shows that SneakyPrompt successfully jailbreaks DALL•E 2 with closed-box safety filters to generate NSFW images. Moreover, we also deploy several state-of-the-art, open-source safety filters on a Stable Diffusion model. Our evaluation shows that SneakyPrompt not only successfully generates NSFW images, but also outperforms existing text adversarial attacks when extended to jailbreak text-to-image generative models, in terms of both the number of queries and qualities of the generated NSFW images. SneakyPrompt is open-source and available at this repository: https://github.com/Yuchen413/text2image_safety.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646735/](https://ieeexplore.ieee.org/document/10646735/)
## Eureka: A General Framework for Black-box Differential Privacy Estimators.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#eureka-a-general-framework-for-black-box-differential-privacy-estimators)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#eureka-a-general-framework-for-black-box-differential-privacy-estimators)
### Authors
* Yun Lu, University of Victoria
* Malik Magdon-Ismail, Rensselaer Polytechnic Institute
* Yu Wei, Purdue University
* Vassilis Zikas, Purdue University
### Abstract
> Differential privacy (DP) is a key tool in privacy-preserving data analysis. Yet it remains challenging for non-privacy-experts to prove the DP of their algorithms. We propose a methodology for domain experts with limited data privacy background to empirically estimate the privacy of an arbitrary mechanism. Our Eureka moment is a new link— which we prove—between the problems of DP parameter-estimation and Bayes optimal classifiers in ML, which we believe can be of independent interest. Our estimator uses this link to achieve two desirable properties: (1) black-box, i.e., it does not require knowledge of the underlying mechanism, and (2) it has a theoretically-proven accuracy, depending on the underlying classifier used, allowing plug-and-play use of different classifiers.More concretely, motivated by the impossibility of the above task for unrestricted input domains (which we prove), we introduce a natural, application-inspired relaxation of DP which we term relative DP. Intuitively, relative DP defines a mechanism's privacy relative to an input set$\mathcal{T}$, circumventing the above impossibility when $\mathcal{T}$ is finite. Importantly, it preserves the key intuitive privacy guarantee of DP while enjoying a number of desirable DP properties—scalability, composition, and robustness to post-processing. We then devise a black-box poly-time (ε, δ)-relative DP estimator for any poly-size $\mathcal{T}$— the first privacy estimator to support mechanisms with large output spaces while having tight accuracy bounds. As a result of independent interest, we generalize our theory to develop the first Distributional Differential Privacy (DDP) estimator.We benchmark our estimator in a proof-of-concept implementation. First, using kNN as the classifier we show that our method (1) produces a tight, analytically computed (ε,δ)-DP trade-off of low-dimensional Laplace and Gaussian mechanisms—the first to do so, (2) accurately estimates the privacy spectrum of DDP mechanisms, and (3) can verify a DP mechanism's implementations, e.g., Sparse Vector Technique, Noisy Histogram, and Noisy max. Our implementation and experiments demonstrate the potential of our framework, and highlight its computational bottlenecks in estimating DP, e.g., in terms of the size of δ and the data dimensionality. Our second, neural-network-based instantiation makes a first step in showing that our method can be extended to mechanisms with high-dimensional outputs.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646774/](https://ieeexplore.ieee.org/document/10646774/)
## Casual Users and Rational Choices within Differential Privacy.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#casual-users-and-rational-choices-within-differential-privacy)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#casual-users-and-rational-choices-within-differential-privacy)
### Authors
* Narges Ashena, University of Zurich, Switzerland
* Oana Inel, University of Zurich, Switzerland
* Badrie L. Persaud, University of Zurich, Switzerland
* Abraham Bernstein, University of Zurich, Switzerland
### Abstract
> In light of recent growth in privacy awareness and data ownership rights, differential privacy (DP) has emerged as a promising technique employed by several well-known data controller entities. This raises the question of how casual users, as the immediate recipients of privacy threats and risks, comprehend and perceive DP and its key parameter ε, as DP’s provided protection depends on it. Existing studies show that ordinary users have the potential to understand the fundamental mechanism of DP and its implications for the privacy-utility trade-off when they are communicated clearly through textual and visual aids and, accordingly, make informed decisions about sharing their data under differential privacy protection. However, these attempts either only implicitly mention a few possible values for ε, such as low, medium, and high, or altogether leave it out of the communication. In this paper, we conduct a between-subject user study (N = 426) to investigate the effectiveness of nine interactive visual tools to communicate ε explicitly and on a continuous scale in a data-sharing scenario related to publishing positive COVID-19 test results. These interactive visual tools allow casual users to visualize DP’s effects on data accuracy and/or privacy loss for various ε values. We found that visualizations incorporating the privacy loss component have a significant impact on assisting users in selecting values that are closer to the recommended values by experts. However, depending on the ratio between DP noise and underlying data, the accuracy loss component disparately affects users’ ε decision; the bigger the relative error, the bigger the selected epsilon and vice versa. Thus, accuracy portrayals should be carried out with care. We contextualize our findings in the existing literature and conclude with insights and recommendations on effectively employing our findings to communicate differential privacy to casual users.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646708/](https://ieeexplore.ieee.org/document/10646708/)
## Lower Bounds for Rényi Differential Privacy in a Black-Box Setting.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#lower-bounds-for-r-nyi-differential-privacy-in-a-black-box-setting)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#lower-bounds-for-r-nyi-differential-privacy-in-a-black-box-setting)
### Authors
* Tim Kutta, Ruhr-University Bochum
* Önder Askin, Ruhr-University Bochum
* Martin Dunsche, Ruhr-University Bochum
### Abstract
> We present new methods for assessing the privacy guarantees of an algorithm with regard to Rényi Differential Privacy. To the best of our knowledge, this work is the first to address this problem in a black-box scenario, where only algorithmic outputs are available. To quantify privacy leakage, we devise a new estimator for the Rényi divergence of a pair of output distributions. This estimator is transformed into a statistical lower bound that is proven to hold for large samples with high probability. Our method is applicable for a broad class of algorithms, including many well-known examples from the privacy literature. We demonstrate the effectiveness of our approach by experiments encompassing algorithms and privacy enhancing methods that have not been considered in related works.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646782/](https://ieeexplore.ieee.org/document/10646782/)
## Bounded and Unbiased Composite Differential Privacy.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#bounded-and-unbiased-composite-differential-privacy)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#bounded-and-unbiased-composite-differential-privacy)
### Authors
* Kai Zhang, Swinburne University of Technology, Australia
* Yanjun Zhang, CSIRO’s Data61, Australia; University of Technology Sydney, Australia
* Ruoxi Sun, CSIRO’s Data61, Australia
* Pei-Wei Tsai, Swinburne University of Technology, Australia
* Muneeb Ul Hassan, Deakin University, Australia
* Xin Yuan, CSIRO’s Data61, Australia
* Minhui Xue, CSIRO’s Data61, Australia
* Jinjun Chen, Swinburne University of Technology, Australia
### Abstract
> The objective of differential privacy (DP) is to protect privacy by producing an output distribution that is indistinguishable between any two neighboring databases. However, traditional differentially private mechanisms tend to produce unbounded outputs in order to achieve maximum disturbance range, which is not always in line with real-world applications. Existing solutions attempt to address this issue by employing post-processing or truncation techniques to restrict the output results, but at the cost of introducing bias issues. In this paper, we propose a novel differentially private mechanism which uses a composite probability density function to generate bounded and unbiased outputs for any numerical input data. The composition consists of an activation function and a base function, providing users with the flexibility to define the functions according to the DP constraints. We also develop an optimization algorithm that enables the iterative search for the optimal hyper-parameter setting without the need for repeated experiments, which prevents additional privacy overhead. Furthermore, we evaluate the utility of the proposed mechanism by assessing the variance of the composite probability density function and introducing two alternative metrics that are simpler to compute than variance estimation. Our extensive evaluation on three benchmark datasets demonstrates consistent and significant improvement over the traditional Laplace and Gaussian mechanisms. The proposed bounded and unbiased composite differentially private mechanism will underpin the broader DP arsenal and foster future privacy-preserving studies.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646730/](https://ieeexplore.ieee.org/document/10646730/)
## Cohere: Managing Differential Privacy in Large Scale Systems.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#cohere-managing-differential-privacy-in-large-scale-systems)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#cohere-managing-differential-privacy-in-large-scale-systems)
### Authors
* Nicolas Küchler, ETH Zurich
* Emanuel Opel, ETH Zurich
* Hidde Lycklama, ETH Zurich
* Alexander Viand, Intel Labs
* Anwar Hithnawi, ETH Zurich
### Abstract
> The need for a privacy management layer in today’s systems started to manifest with the emergence of new systems for privacy-preserving analytics and privacy compliance. As a result, many independent efforts have emerged that try to provide system support for privacy. Recently, the scope of privacy solutions used in systems has expanded to encompass more complex techniques such as Differential Privacy (DP). The use of these solutions in large-scale systems imposes new challenges and requirements. Careful planning and coordination are necessary to ensure that privacy guarantees are maintained across a wide range of heterogeneous applications and data systems. This requires new solutions for managing and allocating scarce and non-replenishable privacy resources. In this paper, we introduce Cohere, a new system that simplifies the use of DP in large-scale systems. Cohere implements a unified interface that allows heterogeneous applications to operate on a unified view of users’ data. In this work, we further address two pressing system challenges that arise in the context of real-world deployments: ensuring the continuity of privacy-based applications (i.e., preventing privacy budget depletion) and effectively allocating scarce shared privacy resources (i.e., budget) under complex preferences. Our experiments show that Cohere achieves a 6.4–28x improvement in utility compared to the state-of-the-art across a range of complex workloads.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646770/](https://ieeexplore.ieee.org/document/10646770/)
## DPI: Ensuring Strict Differential Privacy for Infinite Data Streaming.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#dpi-ensuring-strict-differential-privacy-for-infinite-data-streaming)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#dpi-ensuring-strict-differential-privacy-for-infinite-data-streaming)
### Authors
* Shuya Feng, University of Connecticut
* Meisam Mohammady, Iowa State University
* Han Wang, University of Kansas
* Xiaochen Li, Zhejiang University
* Zhan Qin, Zhejiang University
* Yuan Hong, University of Connecticut
### Abstract
> Streaming data, crucial for applications like crowd-sourcing analytics, behavior studies, and real-time monitoring, faces significant privacy risks due to the large and diverse data linked to individuals. In particular, recent efforts to release data streams, using the rigorous privacy notion of differential privacy (DP), have encountered issues with unbounded privacy leakage. This challenge limits their applicability to only a finite number of time slots ("finite data stream") or relaxation to protecting the events ("event or w-event DP") rather than all the records of users. A persistent challenge is managing the sensitivity of outputs to inputs in situations where users contribute many activities and data distributions evolve over time. In this paper, we present a novel technique for Differentially Private data streaming over Infinite disclosure (DPI) that effectively bounds the total privacy leakage of each user in infinite data streams while enabling accurate data collection and analysis. Furthermore, we also maximize the accuracy of DPI via a novel boosting mechanism. Finally, extensive experiments across various streaming applications and real datasets (e.g., COVID-19, Network Traffic, and USDA Production), show that DPI maintains high utility for infinite data streams in diverse settings. Code for DPI is available at https://github.com/ShuyaFeng/DPI.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646789/](https://ieeexplore.ieee.org/document/10646789/)
## Budget Recycling Differential Privacy.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#budget-recycling-differential-privacy)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#budget-recycling-differential-privacy)
### Authors
* Bo Jiang, TikTok Inc
* Jian Du, TikTok Inc
* Sagar Sharma, TikTok Inc
* Qiang Yan, TikTok Inc
### Abstract
> Differential Privacy (DP) mechanisms usually force reduction in data utility by producing "out-of-bound" noisy results for a tight privacy budget. We introduce the Budget Recycling Differential Privacy (BR-DP) framework, designed to provide soft-bounded noisy outputs for a broad range of existing DP mechanisms. By "soft-bounded," we refer to the mechanism’s ability to release most outputs within a predefined error boundary, thereby improving utility and maintaining privacy simultaneously. The core of BR-DP consists of two components: a DP kernel responsible for generating a noisy answer per iteration, and a recycler that probabilistically recycles/regenerates or releases the noisy answer. We delve into the privacy accounting of BR-DP, culminating in the development of a budgeting principle that optimally sub-allocates the available budget between the DP kernel and the recycler. Furthermore, we introduce algorithms for tight BR-DP accounting in composition scenarios, and our findings indicate that BR-DP achieves reduced privacy leakage post-composition compared to DP. Additionally, we explore the concept of privacy amplification via subsampling within the BR-DP framework and propose optimal sampling rates for BR-DP across various queries. We experiment with real data, and the results demonstrate BR-DP’s effectiveness in lifting the utility-privacy tradeoff provided by DP mechanisms.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646786/](https://ieeexplore.ieee.org/document/10646786/)
## Measure-Observe-Remeasure: An Interactive Paradigm for Differentially-Private Exploratory Analysis.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#measure-observe-remeasure-an-interactive-paradigm-for-differentially-private-exploratory-analysis)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#measure-observe-remeasure-an-interactive-paradigm-for-differentially-private-exploratory-analysis)
### Authors
* Priyanka Nanayakkara, Northwestern University
* Hyeok Kim, Northwestern University
* Yifan Wu, Northwestern University
* Ali Sarvghad, University of Massachusetts Amherst
* Narges Mahyar, University of Massachusetts Amherst
* Gerome Miklau, University of Massachusetts Amherst
* Jessica Hullman, Northwestern University
### Abstract
> Differential privacy (DP) has the potential to enable privacy-preserving analysis on sensitive data, but requires analysts to judiciously spend a limited "privacy loss budget" ϵ across queries. Analysts conducting exploratory analyses do not, however, know all queries in advance and seldom have DP expertise. Thus, they are limited in their ability to specify ϵ allotments across queries prior to an analysis. To support analysts in spending ϵ efficiently, we propose a new interactive analysis paradigm, Measure-Observe-Remeasure, where analysts "measure" the database with a limited amount of ϵ, observe estimates and their errors, and remeasure with more ϵ as needed.We instantiate the paradigm in an interactive visualization interface which allows analysts to spend increasing amounts of ϵ under a total budget. To observe how analysts interact with the Measure-Observe-Remeasure paradigm via the interface, we conduct a user study that compares the utility of ϵ allocations and findings from sensitive data participants make to the allocations and findings expected of a rational agent who faces the same decision task. We find that participants are able to use the workflow relatively successfully, including using budget allocation strategies that maximize over half of the available utility stemming from ϵ allocation. Their loss in performance relative to a rational agent appears to be driven more by their inability to access information and report it than to allocate ϵ.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646665/](https://ieeexplore.ieee.org/document/10646665/)
## Everyone for Themselves? A Qualitative Study about Individual Security Setups of Open Source Software Contributors.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#everyone-for-themselves-a-qualitative-study-about-individual-security-setups-of-open-source-software-contributors)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#everyone-for-themselves-a-qualitative-study-about-individual-security-setups-of-open-source-software-contributors)
### Authors
* Sabrina Amft, CISPA Helmholtz Center for Information Security, Germany
* Sandra Höltervennhoff, Leibniz University, Hannover, Germany
* Rebecca Panskus, Ruhr University, Bochum, Germany
* Karola Marky, Ruhr University, Bochum, Germany
* Sascha Fahl, CISPA Helmholtz Center for Information Security, Germany
### Abstract
> To increase open-source software supply chain security, protecting the development environment of contributors against attacks is crucial. For example, contributors must protect authentication credentials for software repositories, code-signing keys, and their systems from malware.Previous incidents illustrated that open-source contributors struggle with protecting their development environment. In contrast to companies, open-source software projects cannot easily enforce security guidelines for development environments. Instead, contributors’ security setups are likely heterogeneous regarding chosen technologies and strategies.To the best of our knowledge, we perform the first in-depth qualitative investigation of the security of open-source software contributors’ individual security setups, their motivation, decision-making, and sentiments, and the potential impact on open-source software supply chain security. Therefore, we conduct 20 semi-structured interviews with a diverse set of experienced contributors to critical open-source software projects.Overall, we find that contributors have a generally high affinity for security. However, security practices are rarely discussed in the community or enforced by projects. Furthermore, we see a strong influence of social mechanisms, such as trust, respect, or politeness, further impeding the sharing of security knowledge and best practices.We conclude our work with a discussion of the impact of our findings on open-source software and supply chain security, and make recommendations for the open-source software community.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646799/](https://ieeexplore.ieee.org/document/10646799/)
## Measuring the Effects of Stack Overflow Code Snippet Evolution on Open-Source Software Security.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#measuring-the-effects-of-stack-overflow-code-snippet-evolution-on-open-source-software-security)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#measuring-the-effects-of-stack-overflow-code-snippet-evolution-on-open-source-software-security)
### Authors
* Alfusainey Jallow, CISPA Helmholtz Center for Information Security, Germany
* Michael Schilling, CISPA Helmholtz Center for Information Security, Germany
* Michael Backes, CISPA Helmholtz Center for Information Security, Germany
* Sven Bugiel, CISPA Helmholtz Center for Information Security, Germany
### Abstract
> This paper assesses the effects of Stack Overflow code snippet evolution on the security of open-source projects. Users on Stack Overflow actively revise posted code snippets, sometimes addressing bugs and vulnerabilities. Accordingly, developers that reuse code from Stack Overflow should treat it like any other evolving code dependency and be vigilant about updates. It is unclear whether developers are doing so, to what extent outdated code snippets from Stack Overflow are present in GitHub projects, and whether developers miss security-relevant updates to reused snippets.To shed light on those questions, we devised a method to 1) detect outdated code snippets versions from 1.5M Stack Overflow snippets in 11,479 popular GitHub projects and 2) detect security-relevant updates to those Stack Overflow code snippets not reflected in those GitHub projects. Our results show that developers did not update dependent code snippets when those evolved on Stack Overflow. We found that 2,405 code snippet versions reused in 2,109 GitHub projects were outdated, with 43 projects missing fixes to bugs and vulnerabilities on Stack Overflow. Those 43 projects containing outdated, insecure snippets were forked on average 1,085 times (max. 16,121), indicating that our results are likely a lower bound for affected code bases. An important insight from our work is that treating Stack Overflow code as purely static code impedes holistic solutions to the problem of copying insecure code from Stack Overflow. Instead, our results suggest that developers need tools that continuously monitor Stack Overflow for security warnings and code fixes for reused code snippets and not only warn during copy-pasting.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646745/](https://ieeexplore.ieee.org/document/10646745/)
## Shedding Light on CVSS Scoring Inconsistencies: A User-Centric Study on Evaluating Widespread Security Vulnerabilities.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#shedding-light-on-cvss-scoring-inconsistencies-a-user-centric-study-on-evaluating-widespread-security-vulnerabilities)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#shedding-light-on-cvss-scoring-inconsistencies-a-user-centric-study-on-evaluating-widespread-security-vulnerabilities)
### Authors
* Julia Wunder, Friedrich-Alexander-Universität Erlangen-Nürnberg
* Andreas Kurtz, Heilbronn University of Applied Sciences
* Christian Eichenmüller, Friedrich-Alexander-Universität Erlangen-Nürnberg
* Freya Gassmann, Rheinland-Pfälzische Technische Universität Kaiserslautern-Landau
* Zinaida Benenson, Friedrich-Alexander-Universität Erlangen-Nürnberg
### Abstract
> The Common Vulnerability Scoring System (CVSS) is a popular method for evaluating the severity of vulnerabilities in vulnerability management. In the evaluation process, a numeric score between 0 and 10 is calculated, 10 being the most severe (critical) value. The goal of CVSS is to provide comparable scores across different evaluators. However, previous works indicate that CVSS might not reach this goal: If a vulnerability is evaluated by several analysts, their scores often differ. This raises the following questions: Are CVSS evaluations consistent? Which factors influence CVSS assessments? We systematically investigate these questions in an online survey with 196 CVSS users. We show that specific CVSS metrics are inconsistently evaluated for widespread vulnerability types, including Top 3 vulnerabilities from the "2022 CWE Top 25 Most Dangerous Software Weaknesses" list. In a follow-up survey with 59 participants, we found that for the same vulnerabilities from the main study, 68% of these users gave different severity ratings. Our study reveals that most evaluators are aware of the problematic aspects of CVSS, but they still see CVSS as a useful tool for vulnerability assessment. Finally, we discuss possible reasons for inconsistent evaluations and provide recommendations on improving the consistency of scoring.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646847/](https://ieeexplore.ieee.org/document/10646847/)
## TrojanPuzzle: Covertly Poisoning Code-Suggestion Models.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#trojanpuzzle-covertly-poisoning-code-suggestion-models)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#trojanpuzzle-covertly-poisoning-code-suggestion-models)
### Authors
* Hojjat Aghakhani, University of California, Santa Barbara
* Wei Dai, Microsoft Corporation
* Andre Manoel, Microsoft Corporation
* Xavier Fernandes, Microsoft Corporation
* Anant Kharkar, Microsoft Corporation
* Christopher Kruegel, University of California, Santa Barbara
* Giovanni Vigna, University of California, Santa Barbara
* David Evans, University of Virginia
* Ben Zorn, Microsoft Corporation
* Robert Sim, Microsoft Corporation
### Abstract
> With tools like GitHub Copilot, automatic code suggestion is no longer a dream in software engineering. These tools, based on large language models, are typically trained on massive corpora of code mined from unvetted public sources. As a result, these models are susceptible to data poisoning attacks where an adversary manipulates the model’s training by injecting malicious data. Poisoning attacks could be designed to influence the model’s suggestions at run time for chosen contexts, such as inducing the model into suggesting insecure code payloads. To achieve this, prior attacks explicitly inject the insecure code payload into the training data, making the poison data detectable by static analysis tools that can remove such malicious data from the training set. In this work, we demonstrate two novel attacks, Covert and TrojanPuzzle, that can bypass static analysis by planting malicious poison data in out-of-context regions such as docstrings. Our most novel attack, TrojanPuzzle, goes one step further in generating less suspicious poison data by never explicitly including certain (suspicious) parts of the payload in the poison data, while still inducing a model that suggests the entire payload when completing code (i.e., outside docstrings). This makes TrojanPuzzle robust against signature-based dataset-cleansing methods that can filter out suspicious sequences from the training data. Our evaluation against models of two sizes demonstrates that both Covert and TrojanPuzzle have significant implications for practitioners when selecting code used to train or tune code-suggestion models.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646865/](https://ieeexplore.ieee.org/document/10646865/)
## Poisoned ChatGPT Finds Work for Idle Hands: Exploring Developers' Coding Practices with Insecure Suggestions from Poisoned AI Models.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#poisoned-chatgpt-finds-work-for-idle-hands-exploring-developers-coding-practices-with-insecure-suggestions-from-poisoned-ai-models)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#poisoned-chatgpt-finds-work-for-idle-hands-exploring-developers-coding-practices-with-insecure-suggestions-from-poisoned-ai-models)
### Authors
* Sanghak Oh, Department of Electrical and Computer Engineering, Sungkyunkwan University, Republic of Korea
* Kiho Lee, Department of Electrical and Computer Engineering, Sungkyunkwan University, Republic of Korea
* Seonhye Park, Department of Electrical and Computer Engineering, Sungkyunkwan University, Republic of Korea
* Doowon Kim, Department of Electrical Engineering and Computer Science, University of Tennessee, USA
* Hyoungshick Kim, Department of Electrical and Computer Engineering, Sungkyunkwan University, Republic of Korea
### Abstract
> AI-powered coding assistant tools (e.g., ChatGPT, Copilot, and IntelliCode) have revolutionized the software engineering ecosystem. However, prior work has demonstrated that these tools are vulnerable to poisoning attacks. In a poisoning attack, an attacker intentionally injects maliciously crafted insecure code snippets into training datasets to manipulate these tools. The poisoned tools can suggest insecure code to developers, resulting in vulnerabilities in their products that attackers can exploit. However, it is still little understood whether such poisoning attacks against the tools would be practical in real-world settings and how developers address the poisoning attacks during software development. To understand the real-world impact of poisoning attacks on developers who rely on AI-powered coding assistants, we conducted two user studies: an online survey and an in-lab study. The online survey involved 238 participants, including software developers and computer science students. The survey results revealed widespread adoption of these tools among participants, primarily to enhance coding speed, eliminate repetition, and gain boilerplate code. However, the survey also found that developers may misplace trust in these tools because they overlooked the risk of poisoning attacks. The in-lab study was conducted with 30 professional developers. The developers were asked to complete three programming tasks with a representative type of AI-powered coding assistant tool (e.g., ChatGPT or IntelliCode), running on Visual Studio Code. The in-lab study results showed that developers using a poisoned ChatGPT-like tool were more prone to including insecure code than those using an IntelliCode-like tool or no tool. This demonstrates the strong influence of these tools on the security of generated code. Our study results highlight the need for education and improved coding practices to address new security issues introduced by AI-powered coding assistant tools.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646888/](https://ieeexplore.ieee.org/document/10646888/)
## Signing in Four Public Software Package Registries: Quantity, Quality, and Influencing Factors.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#signing-in-four-public-software-package-registries-quantity-quality-and-influencing-factors)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#signing-in-four-public-software-package-registries-quantity-quality-and-influencing-factors)
### Authors
* Taylor R. Schorlemmer, Purdue University
* Kelechi G. Kalu, Purdue University
* Luke Chigges, Purdue University
* Kyung Myung Ko, Purdue University
* Eman Abu Ishgair, Purdue University
* Saurabh Bagchi, Purdue University
* Santiago Torres-Arias, Purdue University
* James C. Davis, Purdue University
### Abstract
> Many software applications incorporate open-source third-party packages distributed by public package registries. Guaranteeing authorship along this supply chain is a challenge. Package maintainers can guarantee package authorship through software signing. However, it is unclear how common this practice is, and whether the resulting signatures are created properly. Prior work has provided raw data on registry signing practices, but only measured single platforms, did not consider quality, did not consider time, and did not assess factors that may influence signing. We do not have up-to-date measurements of signing practices nor do we know the quality of existing signatures. Furthermore, we lack a comprehensive understanding of factors that influence signing adoption.This study addresses this gap. We provide measurements across three kinds of package registries: traditional software (Maven, PyPI), container images (Docker Hub), and machine learning models (Hugging Face). For each registry, we describe the nature of the signed artifacts as well as the current quantity and quality of signatures. Then, we examine longitudinal trends in signing practices. Finally, we use a quasi-experiment to estimate the effect that various factors had on software signing practices. To summarize our findings: (1) mandating signature adoption improves the quantity of signatures; (2) providing dedicated tooling improves the quality of signing; (3) getting started is the hard part — once a maintainer begins to sign, they tend to continue doing so; and (4) although many supply chain attacks are mitigable via signing, signing adoption is primarily affected by registry policy rather than by public knowledge of attacks, new engineering standards, etc. These findings highlight the importance of software package registry managers and signing infrastructure.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646801/](https://ieeexplore.ieee.org/document/10646801/)
## More Haste, Less Speed: Cache Related Security Threats in Continuous Integration Services.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#more-haste-less-speed-cache-related-security-threats-in-continuous-integration-services)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#more-haste-less-speed-cache-related-security-threats-in-continuous-integration-services)
### Authors
* Yacong Gu, Tsinghua University; JCNS, Tsinghua University-QI-ANXIN Group
* Lingyun Ying, QI-ANXIN Technology Research Institute; JCNS, Tsinghua University-QI-ANXIN Group
* Huajun Chai, QI-ANXIN Technology Research Institute
* Yingyuan Pu, QI-ANXIN Technology Research Institute
* Haixin Duan, Tsinghua University; JCNS, Tsinghua University-QI-ANXIN Group
* Xing Gao, University of Delaware
### Abstract
> Continuous Integration (CI) platforms have widely adopted caching to speed up CI task executions by storing and reusing dependent packages. Unfortunately, CI cache also exposes new attack surfaces when cache objects are shared across trust boundaries. In this paper, we systematically investigate potential security threats of CI cache features in seven mainstream CI platforms (CIPs). We find that existing CIPs have isolation issues in their cache sharing and inheritance strategies, potentially raising cache poisoning and data leakage problems. By exploiting these vulnerable mechanisms, we further uncover four attack vectors enabling attackers to stealthily inject malicious code into the cache or steal sensitive data. Even worse, many CIPs provide vulnerable official cache templates that will mistakenly store and expose sensitive data in the cache by default. To understand the potential impact of our disclosed threats, we develop an analysis tool and conduct a large-scale measurement on open-source repositories. Our measurement results show that many popular repositories are potentially affected by these attacks. We also identify 78 repositories that expose their high-value secrets in cache objects and are at risk of secret leakage. We have duly reported identified vulnerabilities to corresponding stakeholders and received positive responses.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646699/](https://ieeexplore.ieee.org/document/10646699/)
## Patchy Performance? Uncovering the Vulnerability Management Practices of IoT-Centric Vendors.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#patchy-performance-uncovering-the-vulnerability-management-practices-of-iot-centric-vendors)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#patchy-performance-uncovering-the-vulnerability-management-practices-of-iot-centric-vendors)
### Authors
* Sandra Rivera Pérez, Delft University of Technology
* Michel Van Eeten, Delft University of Technology
* Carlos H. Gañán, Delft University of Technology
### Abstract
> The enduring problems with IoT security has shifted the attention of researchers and governments to the role of vendors. The security community is no stranger to the repeated claim that vendors are dropping the ball on security and privacy, with numerous papers highlighting the many vulnerabilities in IoT products. Are IoT-centric vendors performing worse than other vendors in the industry? To answer this question, we need to do more than simply count the number of vulnerabilities disclosed by each vendor. In our study we analyze the factors influencing the number of vulnerabilities per vendor, like its size, its location and the presence of a vulnerability disclosure policy. We then statistically estimate if IoT-centric vendors produce more vulnerabilities, while controlling for those other factors. The answer is that they do. We can more directly observe the security performance of a vendor by looking at its patching behavior. We collect a unique dataset on the availability and timeliness of patches for 2,741 IoT and non-IoT vulnerabilities from 104 leading vendors. We also collect data on a set of potential causal factors for vendor patching performance. This allows us to estimate a statistical model of factors to explain why some vendors do better than others. We find that IoT-centric vendors are no worse in terms of releasing patches for their vulnerabilities, in fact, they tend to release more patches on-time than non-IoT-centric vendors. Our study increases our understanding of the factors shaping IoT security and provides an empirical basis for regulatory interventions that aim to improve the security performance of IoT vendors.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646796/](https://ieeexplore.ieee.org/document/10646796/)
## Need for Speed: Taming Backdoor Attacks with Speed and Precision.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#need-for-speed-taming-backdoor-attacks-with-speed-and-precision)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#need-for-speed-taming-backdoor-attacks-with-speed-and-precision)
### Authors
* Zhuo Ma, Xidian University
* Yilong Yang, Xidian University
* Yang Liu, Xidian University
* Tong Yang, Peking University
* Xinjing Liu, Xidian University
* Teng Li, Xidian University
* Zhan Qin, Zhejiang University
### Abstract
> Modern deep neural network models (DNNs) require extensive data for optimal performance, prompting reliance on multiple entities for the acquisition of training datasets. One prominent security threat is backdoor attacks where the adversary party poisons a small subset of training datasets to implant a backdoor into the model, leading to misclassifications during runtime for triggered samples. To mitigate the attack, many defense methods have been proposed, such as detecting and removing poisoned samples or rectifying trojaned model weights in victim DNNs. However, existing approaches suffer from notable inefficiency as they are faced with large-scale training datasets, consequently rendering these defenses impractical in the real world. In this paper, we propose a lightweight backdoor identification and removal scheme, called ReBack. In this scheme, ReBack first extracts a subset of suspicious and benign samples, and then, proceeds with a "averaging and differencing" based method to identify target label(s). Next, leveraging the identification results, ReBack invokes a novel reverse engineering method to recover the exact trigger using only basic arithmetic atoms. Our experiments demonstrate that, for ImageNet with 750 labels, ReBack can defend against backdoor attacks in around 2 hours, showcasing a speed improvement of 18.5× to 214× compared to existing methods. For backdoor removal, the attack success rate can be decreased to 0.05% owing to 99% cosine similarity of the reversed triggers. The code is online available.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646685/](https://ieeexplore.ieee.org/document/10646685/)
## Multi-Instance Adversarial Attack on GNN-Based Malicious Domain Detection.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#multi-instance-adversarial-attack-on-gnn-based-malicious-domain-detection)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#multi-instance-adversarial-attack-on-gnn-based-malicious-domain-detection)
### Authors
* Mahmoud Nazzal, New Jersey Institute of Technology, Newark, NJ, USA
* Issa Khalil, Qatar Computing Research Institute (QCRI), Hamad Bin Khalifa University (HBKU), Doha, Qatar
* Abdallah Khreishah, New Jersey Institute of Technology, Newark, NJ, USA
* NhatHai Phan, New Jersey Institute of Technology, Newark, NJ, USA
* Yao Ma, New Jersey Institute of Technology, Newark, NJ, USA
### Abstract
> Malicious domain detection (MDD) is an open security challenge that aims to detect if an Internet domain name is associated with cyber attacks. Many techniques have been applied to tackle this problem, among which graph neural networks (GNNs) are deemed one of the most effective approaches. GNN-based MDD employs domain name system (DNS) logs to represent Internet domains as nodes in a graph, dubbed domain maliciousness graph (DMG) and trains a GNN model to infer the maliciousness of Internet domains by leveraging the maliciousness of already identified ones. As this method heavily relies on the "publicly" accessible DNS logs to build DMGs, it creates a vulnerability for adversaries to manipulate the features and edges of their domain nodes within these graphs. The current body of literature primarily focuses on threat models that involve manipulating individual adversary (attacker) nodes. Nonetheless, adversaries usually create numerous domains to accomplish their attack objectives, aiming to reduce costs and evade detection. Hence, they aim to remain undetected across as many domains as possible. In this work, we call the attack that manipulates several nodes in the DMG concurrently a multi-instance evasion attack. To the best of our knowledge, this type of attack has not been explored in the prior art. We present both theoretical and empirical evidence to show that the existing single-instance evasion techniques for GNN-based MDDs are inadequate to launch multi-instance evasion attacks. Therefore, we propose an inference-time, multi-instance adversarial attack, dubbed MintA, against GNN-based MDD. MintA optimizes node perturbations to enhance the evasiveness of a node and its neighborhood. MintA only requires black-box access to the target model to launch the attack successfully. In other words, MintA does not require any knowledge of the MDD model’s parameters, architecture, or information on non-adversary nodes. We formulate an optimization problem that satisfies the attack objectives of MintA and devise an approximate solution for it. We evaluate MintA on a state-of-the-art GNN-based MDD technique using real-world data, and our experiments demonstrate an attack success rate of over 80%. The findings of this study serve as a cautionary note for security experts, highlighting the vulnerability of GNN-based MDD to practical attacks that can impede the effectiveness and advantages of this approach.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646677/](https://ieeexplore.ieee.org/document/10646677/)
## Dropout Attacks.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#dropout-attacks)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#dropout-attacks)
### Authors
* Andrew Yuan, Northeastern University
* Alina Oprea, Northeastern University
* Cheng Tan, Northeastern University
### Abstract
> Dropout is a common operator in deep learning, aiming to prevent overfitting by randomly dropping neurons during training. This paper introduces a new family of poisoning attacks against neural networks named DROPOUTATTACK. DROPOUTATTACK attacks the dropout operator by manipulating the selection of neurons to drop instead of selecting them uniformly at random. We design, implement, and evaluate four DROPOUTATTACK variants that cover a broad range of scenarios. These attacks can slow or stop training, destroy prediction accuracy of target classes, and sabotage either precision or recall of a target class. In our experiments of training a VGG-16 model on CIFAR-100, our attack can reduce the precision of the victim class by 34.6% (81.7% → 47.1%) without incurring any degradation in model accuracy.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646869/](https://ieeexplore.ieee.org/document/10646869/)
## BounceAttack: A Query-Efficient Decision-based Adversarial Attack by Bouncing into the Wild.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#bounceattack-a-query-efficient-decision-based-adversarial-attack-by-bouncing-into-the-wild)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#bounceattack-a-query-efficient-decision-based-adversarial-attack-by-bouncing-into-the-wild)
### Authors
* Jie Wan, Zhejiang University
* Jianhao Fu, Zhejiang University
* Lijin Wang, Zhejiang University
* Ziqi Yang, Zhejiang University; ZJU-Hangzhou Global Scientific and Technological Innovation Center
### Abstract
> Deep neural networks are vulnerable to adversarial attacks. We study such threats in the decision-based black-box setting where the adversary could obtain only the predicted labels of the victim classifier within limited queries and aims at performing targeted and untargeted adversarial attacks under different perturbation constraints. In this paper, we propose BounceAttack as a query-efficient attack method. We propose the bounce vector which encourages the iterations to maximally explore the adversarial space towards the optimal adversarial example within limited queries to improve the query efficiency. We perform extensive experiments on various benchmark datasets and models. Experimental results show that BounceAttack achieves both high query efficiency and small perturbation size. BounceAttack outperforms existing attack methods. For example, BounceAttack achieves 48.1% smaller perturbation compared to the state-of-the-art attack methods on average using the same number of model queries.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646713/](https://ieeexplore.ieee.org/document/10646713/)
## Loki: Large-scale Data Reconstruction Attack against Federated Learning through Model Manipulation.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#loki-large-scale-data-reconstruction-attack-against-federated-learning-through-model-manipulation)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#loki-large-scale-data-reconstruction-attack-against-federated-learning-through-model-manipulation)
### Authors
* Joshua C. Zhao, Purdue University
* Atul Sharma, Purdue University
* Ahmed Roushdy Elkordy, University of Southern California
* Yahya H. Ezzeldin, University of Southern California
* Salman Avestimehr, University of Southern California
* Saurabh Bagchi, Purdue University
### Abstract
> Federated learning was introduced to enable machine learning over large decentralized datasets while promising privacy by eliminating the need for data sharing. Despite this, prior work has shown that shared gradients often contain private information and attackers can gain knowledge either through malicious modification of the architecture and parameters or by using optimization to approximate user data from the shared gradients.However, prior data reconstruction attacks have been limited in setting and scale, as most works target FedSGD and limit the attack to single-client gradients. Many of these attacks fail in the more practical setting of FedAVG or if updates are aggregated together using secure aggregation. Data reconstruction becomes significantly more difficult, resulting in limited attack scale and/or decreased reconstruction quality. When both FedAVG and secure aggregation are used, there is no current method that is able to attack multiple clients concurrently in a federated learning setting.In this work we introduce Loki, an attack that overcomes previous limitations and also breaks the anonymity of aggregation as the leaked data is identifiable and directly tied back to the clients they come from. Our design sends clients customized convolutional parameters, and the weight gradients of data points between clients remain separate even through aggregation. With FedAVG and aggregation across 100 clients, prior work can leak less than 1% of images on MNIST, CIFAR-100, and Tiny ImageNet. Using only a single training round, Loki is able to leak 76-86% of all data samples.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646724/](https://ieeexplore.ieee.org/document/10646724/)
## Test-Time Poisoning Attacks Against Test-Time Adaptation Models.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#test-time-poisoning-attacks-against-test-time-adaptation-models)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#test-time-poisoning-attacks-against-test-time-adaptation-models)
### Authors
* Tianshuo Cong, Tsinghua University
* Xinlei He, CISPA Helmholtz Center for Information Security
* Yun Shen, NetApp
* Yang Zhang, CISPA Helmholtz Center for Information Security
### Abstract
> Deploying machine learning (ML) models in the wild is challenging as it suffers from distribution shifts, where the model trained on an original domain cannot generalize well to unforeseen diverse transfer domains. To address this challenge, several test-time adaptation (TTA) methods have been proposed to improve the generalization ability of the target pre-trained models under test data to cope with the shifted distribution. The success of TTA can be credited to the continuous fine-tuning of the target model according to the distributional hint from the test samples during test time. Despite being powerful, it also opens a new attack surface, i.e., test-time poisoning attacks, which are substantially different from previous poisoning attacks that occur during the training time of ML models (i.e., adversaries cannot intervene in the training process). In this paper, we perform the first test-time poisoning attack against four mainstream TTA methods, including TTT, DUA, TENT, and RPL. Concretely, we generate poisoned samples based on the surrogate models and feed them to the target TTA models. Experimental results show that the TTA methods are generally vulnerable to test-time poisoning attacks. For instance, the adversary can feed as few as 10 poisoned samples to degrade the performance of the target model from 76.20% to 41.83%. Our results demonstrate that TTA algorithms lacking a rigorous security assessment are unsuitable for deployment in real-life scenarios. As such, we advocate for the integration of defenses against test-time poisoning attacks into the design of TTA methods.
> 
> <sup xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">1</sup>

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646694/](https://ieeexplore.ieee.org/document/10646694/)
## Attacking Byzantine Robust Aggregation in High Dimensions.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#attacking-byzantine-robust-aggregation-in-high-dimensions)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#attacking-byzantine-robust-aggregation-in-high-dimensions)
### Authors
* Sarthak Choudhary, School of Computing, National University of Singapore
* Aashish Kolluri, School of Computing, National University of Singapore
* Prateek Saxena, School of Computing, National University of Singapore
### Abstract
> Training modern neural networks or models typically requires averaging over a sample of high-dimensional vectors. Poisoning attacks can skew or bias the average vectors used to train the model, forcing the model to learn specific patterns or avoid learning anything useful. Byzantine robust aggregation is a principled algorithmic defense against such biasing. Robust aggregators can bound the maximum bias in computing centrality statistics, such as mean, even when some fraction of inputs are arbitrarily corrupted. Designing such aggregators is challenging when dealing with high dimensions. However, the first polynomial-time algorithms with strong theoretical bounds on the bias have recently been proposed. Their bounds are independent of the number of dimensions, promising a conceptual limit on the power of poisoning attacks in their ongoing arms race against defenses.In this paper, we show a new attack called HiDRA on practical realization of strong defenses which subverts their claim of dimension-independent bias. HiDRA highlights a novel computational bottleneck that has not been a concern of prior information-theoretic analysis. Our experimental evaluation shows that our attacks almost completely destroy the model performance, whereas existing attacks with the same goal fail to have much effect. Our findings leave the arms race between poisoning attacks and provable defenses wide open.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646844/](https://ieeexplore.ieee.org/document/10646844/)
## CaFA: Cost-aware, Feasible Attacks With Database Constraints Against Neural Tabular Classifiers.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#cafa-cost-aware-feasible-attacks-with-database-constraints-against-neural-tabular-classifiers)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#cafa-cost-aware-feasible-attacks-with-database-constraints-against-neural-tabular-classifiers)
### Authors
* Matan Ben-Tov, Tel Aviv University
* Daniel Deutch, Tel Aviv University
* Nave Frost, eBay
* Mahmood Sharif, Tel Aviv University
### Abstract
> This work presents CaFA, a system for Cost-aware Feasible Attacks for assessing the robustness of neural tabular classifiers against adversarial examples realizable in the problem space, while minimizing adversaries’ effort. To this end, CaFA leverages TabPGD—an algorithm we set forth to generate adversarial perturbations suitable for tabular data— and incorporates integrity constraints automatically mined by state-of-the-art database methods. After producing adversarial examples in the feature space via TabPGD, CaFA projects them on the mined constraints, leading, in turn, to better attack realizability. We tested CaFA with three datasets and two architectures and found, among others, that the constraints we use are of higher quality (measured via soundness and completeness) than ones employed in prior work. Moreover, CaFA achieves higher feasible success rates—i.e., it generates adversarial examples that are often misclassified while satisfying constraints—than prior attacks while simultaneously perturbing few features with lower magnitudes, thus saving effort and improving inconspicuousness. We open-source CaFA,
> 
> <sup xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">1</sup>
> 
> hoping it will serve as a generic system enabling machine-learning engineers to assess their models’ robustness against realizable attacks, thus advancing deployed models’ trustworthiness.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646817/](https://ieeexplore.ieee.org/document/10646817/)
## Universal Neural-Cracking-Machines: Self-Configurable Password Models from Auxiliary Data.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#universal-neural-cracking-machines-self-configurable-password-models-from-auxiliary-data)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#universal-neural-cracking-machines-self-configurable-password-models-from-auxiliary-data)
### Authors
* Dario Pasquini, SPRING Lab, EPFL, Lausanne, Switzerland
* Giuseppe Ateniese, George Mason University, Fairfax, Virginia, USA
* Carmela Troncoso, SPRING Lab, EPFL, Lausanne, Switzerland
### Abstract
> We introduce the concept of "universal" password model—a password model that, once pre-trained, can automatically adapt its guessing strategy based on the target system. To achieve this, the model does not need to access any plaintext passwords from the target credentials. Instead, it exploits users’ auxiliary information, such as email addresses, as a proxy signal to predict the underlying password distribution.Specifically, the model uses deep learning to capture the correlation between the auxiliary data of a group of users (e.g., users of a web application) and their passwords. It then exploits those patterns to create a tailored password model for the target system at inference time. No further training steps, targeted data collection, or prior knowledge of the community’s password distribution is required.Besides improving over current password strength estimation techniques, the model enables any end-user (e.g., system administrators) to autonomously generate tailored password models for their systems without the often unworkable requirements of collecting suitable training data and fitting the underlying machine learning model. Ultimately, our framework enables the democratization of well-calibrated password models to the community, addressing a major challenge in the deployment of password security solutions at scale.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646831/](https://ieeexplore.ieee.org/document/10646831/)
## PassREfinder: Credential Stuffing Risk Prediction by Representing Password Reuse between Websites on a Graph.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#passrefinder-credential-stuffing-risk-prediction-by-representing-password-reuse-between-websites-on-a-graph)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#passrefinder-credential-stuffing-risk-prediction-by-representing-password-reuse-between-websites-on-a-graph)
### Authors
* Jaehan Kim, KAIST
* Minkyoo Song, KAIST
* Minjae Seo, KAIST
* Youngjin Jin, KAIST
* Seungwon Shin, KAIST
### Abstract
> The prevalence of credential stuffing has caused devastating harm to online users who tend to reuse passwords across websites. In response, researchers have made efforts to detect users who set the same passwords or malicious logins. However, existing detection methods sacrifice the usability of passwords by inhibiting password creation or website access. Moreover, the complicated mechanisms for sharing account information hinder their deployment in practice. In this work, we propose a risk prediction framework to prevent credential stuffing attacks before disrupting user behaviors rather than relying on detection. To this end, we newly define the relationship between websites in which users are highly likely to reuse passwords and represent it as an edge on a website graph using graph neural networks. We then perform a link prediction task to identify the risk of credential stuffing between websites. Our framework is applicable to a large number of arbitrary websites by utilizing public website information and linking newly observed website nodes to the graph. The evaluation on a real-world credential dataset consisting of 360 million accounts breached from 22,378 websites shows that our model successfully predicts credential stuffing risk among websites by achieving F1-scores of 0.9559 and 0.9100 in two different graph learning settings, respectively. In addition, we demonstrate the effectiveness of each design strategy and validate that the prediction results can be utilized to quantify the expected rates of password reuse as risk scores.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646687/](https://ieeexplore.ieee.org/document/10646687/)
## Breach Extraction Attacks: Exposing and Addressing the Leakage in Second Generation Compromised Credential Checking Services.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#breach-extraction-attacks-exposing-and-addressing-the-leakage-in-second-generation-compromised-credential-checking-services)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#breach-extraction-attacks-exposing-and-addressing-the-leakage-in-second-generation-compromised-credential-checking-services)
### Authors
* Dario Pasquini, SPRING Lab, EPFL
* Danilo Francati, Aarhus University
* Giuseppe Ateniese, George Mason University
* Evgenios M. Kornaropoulos, George Mason University
### Abstract
> Credential tweaking attacks use breached passwords to generate semantically similar passwords and gain access to victims’ services. These attacks sidestep the first generation of compromised credential checking (C3) services. The second generation of compromised credential checking services, called “Might I Get Pwned” (MIGP), is a privacy-preserving protocol that defends against credential tweaking attacks by allowing clients to query whether a password or a semantically similar variation is present in the server’s compromised credentials dataset. The desired privacy requirements include not revealing the user’s entered password to the server and ensuring that no compromised credentials are disclosed to the client.In this work, we formalize the cryptographic leakage of the MIGP protocol and perform a security analysis to assess its impact on the credentials held by the server. We focus on how this leakage aids breach extraction attacks, where an honest-but-curious client interacts with the server to extract information about the stored credentials. Furthermore, we discover additional leakage that arises from the implementation of Cloudflare’s deployment of MIGP. We evaluate how the discovered leakage affects the guessing capability of an attacker in relation to breach extraction attacks. Finally, we propose MIGP 2.0, a new iteration of the MIGP protocol designed to minimize data leakage and prevent the introduced attacks.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646859/](https://ieeexplore.ieee.org/document/10646859/)
## A Security Analysis of Honey Vaults.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#a-security-analysis-of-honey-vaults)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#a-security-analysis-of-honey-vaults)
### Authors
* Fei Duan, College of Cyber Science, Nankai University, Tianjin, China
* Ding Wang, College of Cyber Science, Nankai University, Tianjin, China; Key Laboratory of Data and Intelligent System Security (NKU), Ministry of Education, Tianjin, China; Tianjin Key Laboratory of Network and Data Security Technology, Nankai University, Tianjin, China
* Chunfu Jia, College of Cyber Science, Nankai University, Tianjin, China; Key Laboratory of Data and Intelligent System Security (NKU), Ministry of Education, Tianjin, China; Tianjin Key Laboratory of Network and Data Security Technology, Nankai University, Tianjin, China
### Abstract
> Honey encryption (HE) protected password vaults (called honey vaults) are promising tools that allow a user to store multiple passwords (called a password vault) and encrypt them with a master password using HE. In case password vaults are somehow leaked and the attackers launch offline password guessing, honey vaults can yield decoy password vaults for incorrect guesses, forcing an offline guessing attacker to interact with the authentication server to identify whether passwords in decrypted vaults are correct or not. Therefore, honey vaults transform the offline guessing attacker into an online guessing attacker, i.e., honey vault distinguishing attacker.In online guessing, attackers can adopt various attacks to perform multiple guesses against multiple vaults, but the existing theoretical message recovery (MR) security for HE only focuses on the advantage of one-time guess against a single vault, which cannot accurately model realistic attackers and thus can not provide practical advice for users’ vault security. To address this issue, we propose a theoretically-grounded optimal strategy for distinguishing attackers, and manage to derive a much tighter upper bound on the advantage against MR security. Particularly, we provide much tighter upper/lower bounds for advantage against HE-related cryptographic security games, i.e., the security of distribution transforming encoder (DTE), known message attack, and known side information attack. This provides a better understanding of the actual security of honey encryption.To better understand the security of honey vault systems, we instantiate our optimal strategy into three practical attacks and propose an encoding attack. Extensive experiments against two major honey vault systems demonstrate that our four attacks can improve the attack success rate by 1.15-4.35 times compared with their counterparts. For the intersection attack, we propose a feature attack against Cheng et al.’s incremental update mechanism (at USENIX SEC’21), and our attack can breach their mechanism with 87%-93% advantage.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646787/](https://ieeexplore.ieee.org/document/10646787/)
## Combing for Credentials: Active Pattern Extraction from Smart Reply.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#combing-for-credentials-active-pattern-extraction-from-smart-reply)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#combing-for-credentials-active-pattern-extraction-from-smart-reply)
### Authors
* Bargav Jayaraman, University of Virginia
* Esha Ghosh, Microsoft Research
* Melissa Chase, Microsoft Research
* Sambuddha Roy, Microsoft
* Wei Dai, Microsoft Research
* David Evans, University of Virginia
### Abstract
> Pre-trained large language models, such as GPT-2 and BERT, are often fine-tuned to achieve state-of-the-art performance on a downstream task. One natural example is the "Smart Reply" application where a pre-trained model is tuned to provide suggested responses for a given query message. Since the tuning data is often sensitive data such as emails or chat transcripts, it is important to understand and mitigate the risk that the model leaks its tuning data. We investigate potential information leakage vulnerabilities in a typical Smart Reply pipeline. We consider a realistic setting where the adversary can only interact with the underlying model through a frontend interface that constrains what types of queries can be sent to the model. Previous attacks do not work in these settings, but require the ability to send unconstrained queries directly to the model. Even when there are no constraints on the queries, previous attacks typically require thousands, or even millions, of queries to extract useful information, while our attacks can extract sensitive data in just a handful of queries. We introduce a new type of active extraction attack that exploits canonical patterns in text containing sensitive data. We show experimentally that it is possible for an adversary to extract sensitive user information present in the training data, even in realistic settings where all interactions with the model must go through a front-end that limits the types of queries. We explore potential mitigation strategies and demonstrate empirically how differential privacy appears to be a reasonably effective defense mechanism to such pattern extraction attacks.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646876/](https://ieeexplore.ieee.org/document/10646876/)
## ARMOR: A Formally Verified Implementation of X.509 Certificate Chain Validation.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#armor-a-formally-verified-implementation-of-x-509-certificate-chain-validation)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#armor-a-formally-verified-implementation-of-x-509-certificate-chain-validation)
### Authors
* Joyanta Debnath, Stony Brook University
* Christa Jenkins, Stony Brook University
* Yuteng Sun, The Chinese University of Hong Kong
* Sze Yiu Chau, The Chinese University of Hong Kong
* Omar Chowdhury, Stony Brook University
### Abstract
> We present ARMOR, the first substantial effort towards an X.509 certificate chain validation logic (CCVL) implementation with formal, machine-checked correctness guarantees for a large portion of RFC 5280. ARMOR is designed with the twofold goal of providing 1) a formal, machine checked alternative to the RFC specifications, and 2) a reference implementation and test oracle. ARMOR features a modular architecture in which the X.509 CCVL is decomposed into several modules, each of which is independently specified, implemented, and verified. Currently, the formally verified modules of ARMOR include those for the specification and parsing of (subsets of) the PEM and ASN.1 X.690 DER languages, certificate chain building, and many semantic properties concerning required properties of fields within a single certificate and across certificates in a chain. To empirically evaluate its achievement of these goals, we compare ARMOR with 11 open-source X.509 implementations and an open-source certificate linter for its specificational accuracy and runtime overhead. In our evaluation, although ARMOR incurs a high overhead, through its use we are able to detect several noncompliances. Finally, we show an end-to-end application of ARMOR by integrating it with the TLS 1.3 implementation of BoringSSL and testing it with Curl.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646820/](https://ieeexplore.ieee.org/document/10646820/)
## DY Fuzzing: Formal Dolev-Yao Models Meet Cryptographic Protocol Fuzz Testing.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#dy-fuzzing-formal-dolev-yao-models-meet-cryptographic-protocol-fuzz-testing)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#dy-fuzzing-formal-dolev-yao-models-meet-cryptographic-protocol-fuzz-testing)
### Authors
* Max Ammann, Independent Researcher & Trail of Bits
* Lucca Hirschi, Inria Nancy Grand-Est Université de Lorraine, LORIA, France
* Steve Kremer, Inria Nancy Grand-Est Université de Lorraine, LORIA, France
### Abstract
> Critical and widely used cryptographic protocols have repeatedly been found to contain flaws in their design and their implementation. A prominent class of such vulnerabilities is logical attacks, e.g. attacks that exploit flawed protocol logic. Automated formal verification methods, based on the Dolev-Yao (DY) attacker, formally define and excel at finding such flaws, but operate only on abstract specification models. Fully automated verification of existing protocol implementations is today still out of reach. This leaves open whether such implementations are secure. Unfortunately, this blind spot hides numerous attacks, such as recent logical attacks on widely used TLS implementations introduced by implementation bugs.We answer by proposing a novel and effective technique that we call DY model-guided fuzzing, which precludes logical attacks against protocol implementations. The main idea is to consider as possible test cases the set of abstract DY executions of the DY attacker, and use a novel mutation-based fuzzer to explore this set. The DY fuzzer concretizes each abstract execution to test it on the program under test. This approach enables reasoning at a more structural and security-related level of messages represented as formal terms (e.g. decrypt a message and re-encrypt it with a different key) as opposed to random bit-level modifications that are much less likely to produce relevant logical adversarial behaviors. We implement a full-fledged and modular DY protocol fuzzer. We demonstrate its effectiveness by fuzzing three popular TLS implementations, resulting in the discovery of four novel vulnerabilities.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646658/](https://ieeexplore.ieee.org/document/10646658/)
## To Auth or Not To Auth? A Comparative Analysis of the Pre- and Post-Login Security Landscape.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#to-auth-or-not-to-auth-a-comparative-analysis-of-the-pre-and-post-login-security-landscape)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#to-auth-or-not-to-auth-a-comparative-analysis-of-the-pre-and-post-login-security-landscape)
### Authors
* Jannis Rautenstrauch, CISPA Helmholtz Center for Information Security
* Metodi Mitkov, CISPA Helmholtz Center for Information Security
* Thomas Helbrecht, CISPA Helmholtz Center for Information Security
* Lorenz Hetterich, CISPA Helmholtz Center for Information Security
* Ben Stock, CISPA Helmholtz Center for Information Security
### Abstract
> The web has evolved from a way to serve static content into a full-fledged application platform. Given its pervasive presence in our daily lives, it is therefore imperative to conduct studies that accurately reflect the state of security on the web. Many research works have focussed on detecting vulnerabilities, measuring security header deployment, or identifying roadblocks to a more secure web. To conduct these studies at a large scale, they all have a common denominator: they operate in automated fashions without human interaction, i.e., visit applications in an unauthenticated manner.To understand whether this unauthenticated view of the web accurately reflects its security as observed by regular users, we conduct a comparative analysis of 200 websites. By relying on a semi-automated framework to log into applications and crawl them, we analyze the differences between unauthenticated and authenticated states w.r.t. client-side XSS flaws, usage of security headers, postMessage handlers, and JavaScript inclusions. In doing so, we discover that the unauthenticated web could provide a significantly skewed picture of security depending on the type of research question.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646604/](https://ieeexplore.ieee.org/document/10646604/)
## Targeted and Troublesome: Tracking and Advertising on Children's Websites.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#targeted-and-troublesome-tracking-and-advertising-on-childrens-websites)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#targeted-and-troublesome-tracking-and-advertising-on-childrens-websites)
### Authors
* Zahra Moti, Radboud University
* Asuman Senol, Imec-COSIC, KU Leuven
* Hamid Bostani, Radboud University
* Frederik Zuiderveen Borgesius, Radboud University
* Veelasha Moonsamy, Ruhr University, Bochum
* Arunesh Mathur, Independent Researcher
* Gunes Acar, Radboud University
### Abstract
> On the modern web, trackers and advertisers frequently construct and monetize users’ detailed behavioral profiles without consent. Despite various studies on web tracking mechanisms and advertisements, there has been no rigorous study focusing on websites targeted at children. To address this gap, we present a measurement of tracking and (targeted) advertising on websites directed at children. Motivated by the lack of a comprehensive list of child-directed (i.e., targeted at children) websites, we first build a multilingual classifier based on web page titles and descriptions. Applying this classifier to over two million pages from the Common Crawl dataset, we compile a list of two thousand child-directed websites. Crawling these sites from five vantage points, we measure the prevalence of trackers, fingerprinting scripts, and advertisements. Our crawler detects ads displayed on child-directed websites and determines if ad targeting is enabled by scraping ad disclosure pages whenever available. Our results show that around 90% of child-directed websites embed one or more trackers, and about 27% contain targeted advertisements—a practice that should require verifiable parental consent. Next, we identify improper ads on child-directed websites by developing an ML pipeline that processes both images and text extracted from ads. The pipeline allows us to run semantic similarity queries for arbitrary search terms, revealing ads that promote services related to dating, weight loss, and mental health, as well as ads for sex toys and flirting chat services. Some of these ads feature repulsive, sexually-explicit and highly-inappropriate imagery. In summary, our findings indicate a trend of non-compliance with privacy regulations and troubling ad safety practices among many advertisers and child-directed websites. To ensure the protection of children and create a safer online environment, regulators and stakeholders must adopt and enforce more stringent measures. Keywords – online tracking, advertising, children, privacy

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646733/](https://ieeexplore.ieee.org/document/10646733/)
## Children, Parents, and Misinformation on Social Media.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#children-parents-and-misinformation-on-social-media)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#children-parents-and-misinformation-on-social-media)
### Authors
* Filipo Sharevski, School of Computing, DePaul University, Chicago, IL
* Jennifer Vander Loop, School of Computing, DePaul University, Chicago, IL
### Abstract
> Children encounter misinformation on social media in a similar capacity as their parents. Unlike their parents, children are an exceptionally vulnerable population because their cognitive abilities and emotional regulation are still maturing, rendering them more susceptible to misinformation and falsehoods online. Yet, little is known about children’s experience with misinformation as well as what their parents think of the misinformation’s effect on child development. To answer these questions, we combined a qualitative survey of parents (n=87) with semi-structured interviews of both parents and children (n=12). We found that children identify misinformation as content used to trick people on social media, such as deep fakes, memes with political context, or celebrity/influencer rumors. Children revealed they ask Siri whether a social media video or post is created to trick them before they search on Google or ask their parents about its accuracy. Parents expressed discontent that their children are impressionable to misinformation, stating that the burden falls on them to help their children develop critical thinking skills for navigating falsehoods on social media. Here, the majority of parents felt that schools should also teach these skills as well as media literacy to their children. Misinformation, according to both parents and children, affects the family relationships especially with grandparents with different political views than theirs.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646861/](https://ieeexplore.ieee.org/document/10646861/)
## Understanding Parents' Perceptions and Practices Toward Children's Security and Privacy in Virtual Reality.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#understanding-parents-perceptions-and-practices-toward-childrens-security-and-privacy-in-virtual-reality)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#understanding-parents-perceptions-and-practices-toward-childrens-security-and-privacy-in-virtual-reality)
### Authors
* Jiaxun Cao, Duke University
* Abhinaya S. B, North Carolina State University
* Anupam Das, North Carolina State University
* Pardis Emami-Naeini, Duke University
### Abstract
> Recent years have seen a sharp increase in the number of underage users in virtual reality (VR), where security and privacy (S&P) risks such as data surveillance and self-disclosure in social interaction have been increasingly prominent. Prior work shows children largely rely on parents to mitigate S&P risks in their technology use. Therefore, understanding parents’ S&P knowledge, perceptions, and practices is critical for identifying the gaps for parents, technology designers, and policymakers to enhance children’s S&P. While such empirical knowledge is substantial in other consumer technologies, it remains largely unknown in the context of VR. To address the gap, we conducted in-depth semi-structured interviews with 20 parents of children under the age of 18 who use VR at home. Our findings highlight parents generally lack S&P awareness due to the perception that VR is still in its infancy. To protect their children’s interactions with VR, parents currently primarily rely on active strategies such as verbal education about S&P. Passive strategies such as using parental controls in VR are not commonly used among our interviewees, mainly due to their perceived technical constraints. Parents also highlight that a multi-stakeholder ecosystem must be established towards more S&P support for children in VR. Based on the findings, we propose actionable S&P recommendations for critical stakeholders, including parents, educators, VR companies, and governments.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646753/](https://ieeexplore.ieee.org/document/10646753/)
## The Times They Are A-Changin': Characterizing Post-Publication Changes to Online News.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#the-times-they-are-a-changin-characterizing-post-publication-changes-to-online-news)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#the-times-they-are-a-changin-characterizing-post-publication-changes-to-online-news)
### Authors
* Chris Tsoukaladelis, Stony Brook University
* Brian Kondracki, Stony Brook University
* Niranjan Balasubramanian, Stony Brook University
* Nick Nikiforakis, Stony Brook University
### Abstract
> The current news landscape is in the middle of a major transition. Digital news are quickly overtaking legacy media (such as, newspapers and TV programs), offering a slew of benefits to consumers including ease and immediacy of access. They also, however, allow publishers to arbitrarily modify the articles they publish, at any time after the article has been released. Little is known about how often this happens and to what extent these post-publication edits change an article’s original message.In this paper, we shine light to this previously ignored phenomenon by collecting and analyzing a corpus of more than 600k online news articles, published by tens of U.S. news publishers over a period of nine months. We discover that 165k articles exhibit post-publication changes and use natural language processing tools to identify the magnitude of these changes and their effect. Among others, we find that different publishers modify their articles at different rates, with a publisher’s ranking and political bias affecting the frequency of changes and that over 15% of changed paragraphs do not "follow" their original versions. Finally, we discover that most of the evaluated publishers do not properly note these changes to their articles, using non-descriptive notices and updated timestamps that cannot be used by readers to assess what has changed.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646700/](https://ieeexplore.ieee.org/document/10646700/)
## The Inventory is Dark and Full of Misinformation: Understanding Ad Inventory Pooling in the Ad-Tech Supply Chain.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#the-inventory-is-dark-and-full-of-misinformation-understanding-ad-inventory-pooling-in-the-ad-tech-supply-chain)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#the-inventory-is-dark-and-full-of-misinformation-understanding-ad-inventory-pooling-in-the-ad-tech-supply-chain)
### Authors
* Yash Vekaria, University of California, Davis
* Rishab Nithyanand, University of Iowa
* Zubair Shafiq, University of California, Davis
### Abstract
> Ad-tech enables publishers to programmatically sell their ad inventory to millions of demand partners through a complex supply chain. The complexity and opacity of the ad-tech supply chain can be exploited by low-quality publishers (e.g., misinformation websites) to deceptively monetize their ad inventory. To combat such deception, the ad-tech industry has developed transparency standards and brand safety products. In this paper, we show that these developments still fall short of preventing deceptive monetization. Specifically, we focus on how publishers can exploit the ad-tech supply chain, subvert ad-tech transparency standards, and undermine brand safety protections by pooling their ad inventory with unrelated sites. This type of deception is referred to as "dark pooling." Our study shows that dark pooling is commonly employed by misinformation publishers on various major ad exchanges, and allows misinformation publishers to deceptively sell their ad inventory to reputable brands. Our work suggests the need for improved vetting of ad exchange supply partners, the adoption of new ad-tech transparency standards that enable end-to-end validation of the ad-tech supply chain, and the widespread deployment of independent audits like ours.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646858/](https://ieeexplore.ieee.org/document/10646858/)
## Specious Sites: Tracking the Spread and Sway of Spurious News Stories at Scale.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#specious-sites-tracking-the-spread-and-sway-of-spurious-news-stories-at-scale)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#specious-sites-tracking-the-spread-and-sway-of-spurious-news-stories-at-scale)
### Authors
* Hans W. A. Hanley, Stanford University
* Deepak Kumar, Stanford University
* Zakir Durumeric, Stanford University
### Abstract
> Misinformation, propaganda, and outright lies proliferate on the web, with some narratives having dangerous real-world consequences on public health, elections, and individual safety. However, despite the impact of misinformation, the research community largely lacks automated and programmatic approaches for tracking news narratives across online platforms. In this work, utilizing daily scrapes of 1,334 unreliable news websites, the large-language model MPNet, and DP-Means clustering, we introduce a system to automatically identify and track the narratives spread within online ecosystems. Identifying 52,036 narratives on these 1,334 websites, we describe the most prevalent narratives spread in 2022 and identify the most influential websites that originate and amplify narratives. Finally, we show how our system can be utilized to detect new narratives originating from unreliable news websites and to aid fact-checkers in more quickly addressing misinformation. We release code and data at https://github.com/hanshanley/specious-sites.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646651/](https://ieeexplore.ieee.org/document/10646651/)
## ALIF: Low-Cost Adversarial Audio Attacks on Black-Box Speech Platforms using Linguistic Features.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#alif-low-cost-adversarial-audio-attacks-on-black-box-speech-platforms-using-linguistic-features)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#alif-low-cost-adversarial-audio-attacks-on-black-box-speech-platforms-using-linguistic-features)
### Authors
* Peng Cheng, Zhejiang University, Hangzhou, China; ZJU-Hangzhou Global Scientific and Technological Innovation Center, Hangzhou, China
* Yuwei Wang, Zhejiang University, Hangzhou, China; ZJU-Hangzhou Global Scientific and Technological Innovation Center, Hangzhou, China
* Peng Huang, Zhejiang University, Hangzhou, China; ZJU-Hangzhou Global Scientific and Technological Innovation Center, Hangzhou, China
* Zhongjie Ba, Zhejiang University, Hangzhou, China; ZJU-Hangzhou Global Scientific and Technological Innovation Center, Hangzhou, China
* Xiaodong Lin, University of Guelph, Guelph, Canada
* Feng Lin, Zhejiang University, Hangzhou, China; ZJU-Hangzhou Global Scientific and Technological Innovation Center, Hangzhou, China
* Li Lu, Zhejiang University, Hangzhou, China; ZJU-Hangzhou Global Scientific and Technological Innovation Center, Hangzhou, China
* Kui Ren, Zhejiang University, Hangzhou, China; ZJU-Hangzhou Global Scientific and Technological Innovation Center, Hangzhou, China
### Abstract
> Extensive research has revealed that adversarial examples (AE) pose a significant threat to voice-controllable smart devices. Recent studies have proposed black-box adversarial attacks that require only the final transcription from an automatic speech recognition (ASR) system. However, these attacks typically involve many queries to the ASR, resulting in substantial costs. Moreover, AE-based adversarial audio samples are susceptible to ASR updates. In this paper, we identify the root cause of these limitations, namely the inability to construct AE attack samples directly around the decision boundary of deep learning (DL) models. Building on this observation, we propose ALIF, the first black-box adversarial linguistic feature-based attack pipeline. We leverage the reciprocal process of text-to-speech (TTS) and ASR models to generate perturbations in the linguistic embedding space where the decision boundary resides. Based on the ALIF pipeline, we present the ALIF-OTL and ALIF-OTA schemes for launching attacks in both the digital domain and the physical playback environment on four commercial ASRs and voice assistants. Extensive evaluations demonstrate that ALIF-OTL and -OTA significantly improve query efficiency by 97.7% and 73.3%, respectively, while achieving competitive performance compared to existing methods. Notably, ALIF-OTL can generate an attack sample with only one query. Furthermore, our test-of-time experiment validates the robustness of our approach against ASR updates.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646791/](https://ieeexplore.ieee.org/document/10646791/)
## FlowMur: A Stealthy and Practical Audio Backdoor Attack with Limited Knowledge.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#flowmur-a-stealthy-and-practical-audio-backdoor-attack-with-limited-knowledge)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#flowmur-a-stealthy-and-practical-audio-backdoor-attack-with-limited-knowledge)
### Authors
* Jiahe Lan, The State Key Laboratory on Integrated Services Networks, School of Cyber Engineering, Xidian University, China
* Jie Wang, The State Key Laboratory on Integrated Services Networks, School of Cyber Engineering, Xidian University, China
* Baochen Yan, The State Key Laboratory on Integrated Services Networks, School of Cyber Engineering, Xidian University, China
* Zheng Yan, The State Key Laboratory on Integrated Services Networks, School of Cyber Engineering, Xidian University, China; Hangzhou Institute of Technology, Xidian University, China
* Elisa Bertino, Department of Computer Science, Purdue University, USA
### Abstract
> Speech recognition systems driven by Deep Neural Networks (DNNs) have revolutionized human-computer interaction through voice interfaces, which significantly facilitate our daily lives. However, the growing popularity of these systems also raises special concerns on their security, particularly regarding backdoor attacks. A backdoor attack inserts one or more hidden backdoors into a DNN model during its training process, such that it does not affect the model’s performance on benign inputs, but forces the model to produce an adversary-desired output if a specific trigger is present in the model input. Despite the initial success of current audio backdoor attacks, they suffer from the following limitations: (i) Most of them require sufficient knowledge, which limits their widespread adoption. (ii) They are not stealthy enough, thus easy to be detected by humans. (iii) Most of them cannot attack live speech, reducing their practicality. To address these problems, in this paper, we propose FlowMur, a stealthy and practical audio backdoor attack that can be launched with limited knowledge. FlowMur constructs an auxiliary dataset and a surrogate model to augment adversary knowledge. To achieve dynamicity, it formulates trigger generation as an optimization problem and optimizes the trigger over different attachment positions. To enhance stealthiness, we propose an adaptive data poisoning method according to Signal-to-Noise Ratio (SNR). Furthermore, ambient noise is incorporated into the process of trigger generation and data poisoning to make FlowMur robust to ambient noise and improve its practicality. Extensive experiments conducted on two datasets demonstrate that FlowMur achieves high attack performance in both digital and physical settings while remaining resilient to state-of- the-art defenses. In particular, a human study confirms that triggers generated by FlowMur are not easily detected by participants. The source code of FlowMur is publicly available at https://github.com/cristinalan/FlowMur.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646645/](https://ieeexplore.ieee.org/document/10646645/)
## Understanding and Benchmarking the Commonality of Adversarial Examples.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#understanding-and-benchmarking-the-commonality-of-adversarial-examples)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#understanding-and-benchmarking-the-commonality-of-adversarial-examples)
### Authors
* Ruiwen He, USSLab, Zhejiang University, Hangzhou, China
* Yushi Cheng, USSLab, Zhejiang University, Hangzhou, China
* Junning Ze, USSLab, Zhejiang University, Hangzhou, China
* Xiaoyu Ji, USSLab, Zhejiang University, Hangzhou, China
* Wenyuan Xu, USSLab, Zhejiang University, Hangzhou, China
### Abstract
> Speech recognition system converts audio into texts by utilizing deep learning algorithms. Numerous works have demonstrated various adversarial example (AE) attacks, i.e., adding carefully-crafted noises can trick the speech recognition system into outputting completely incorrect texts. This paper aims to reveal the distinctive properties of adversarial audio in terms of phonetics. We believe analyzing the distinctive properties is critical in understanding adversarial attacks on ASR models, as well as guiding the generation and defense of AEs. Thus, we aim to answer three questions: (1) What are the distinctive properties of adversarial audio that are common to diverse attacks? (2) How to quantify these distinctive properties? (3) How can we use these properties to improve the security of ASR models? To answer these questions, we perform a large-scale measurement based on acoustic features and statistical analysis. By measuring a total of 612,000 acoustic-statistical feature vectors for 2,400 audio samples, we obtain four insights on the distinctive properties, i.e., filling energy gap, speech-like morphology, disordered signal, and abnormal linguistic pattern. Based on these properties, we design a naturalness score to assess the stealthiness of attacks and propose an adversarial example detector with an average accuracy of 91.1%.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646761/](https://ieeexplore.ieee.org/document/10646761/)
## Scores Tell Everything about Bob: Non-adaptive Face Reconstruction on Face Recognition Systems.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#scores-tell-everything-about-bob-non-adaptive-face-reconstruction-on-face-recognition-systems)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#scores-tell-everything-about-bob-non-adaptive-face-reconstruction-on-face-recognition-systems)
### Authors
* Sunpill Kim, Department of Mathematics, Research Institute for Natural Sciences, Hanyang University, Seoul, Republic of Korea; Institute for Infocomm Research (I2R), A*STAR, Singapore
* Yong Kiam Tan, Institute for Infocomm Research (I2R), A*STAR, Singapore
* Bora Jeong, Department of Mathematics, Research Institute for Natural Sciences, Hanyang University, Seoul, Republic of Korea; Institute for Infocomm Research (I2R), A*STAR, Singapore
* Soumik Mondal, Institute for Infocomm Research (I2R), A*STAR, Singapore
* Khin Mi Mi Aung, Institute for Infocomm Research (I2R), A*STAR, Singapore
* Jae Hong Seo, Department of Mathematics, Research Institute for Natural Sciences, Hanyang University, Seoul, Republic of Korea
### Abstract
> Face recognition systems (FRSs) typically store databases of discriminative real-valued template vectors, which are extracted from each enrolled user’s facial image(s). Such template databases must be carefully protected for user privacy—indeed, the dangers of template leakages have been widely reported in the literature. In contrast, the similarity scores between queried images and enrolled users is often unprotected and can be readily queried through typical FRS APIs. Such scores provide a potential avenue of adversarial attack on FRSs, but recently proposed score-based attacks remain largely impractical because they essentially rely on trial-and-error strategies that use an enormous number of adaptive queries (>50K) for face reconstruction.We present the first practical score-based face reconstruction and impersonation attack against three commercial FRS APIs: AWS CompareFaces, FACE++, and KAIROS, as well as five commonly used pre-trained open-source FRSs. Our attack is carried out in the black-box FRS model, where the adversary has no knowledge of the FRS (underlying models, parameters, template databases, etc.), except for the ability to make a limited number of similarity score queries. Notably, the attack is straightforward to implement, requires no trial-and-error guessing, and uses a small number of nonadaptive score queries. We motivate the attack by analyzing the topological meaning of similarity scores and then present our novel method using orthogonal face sets: a precomputed approximate basis set of human-like face images that enables us to get meaningful similarity scores from a small number of non-adaptive queries. Our approach successfully reconstructs human-like impersonation images with >20% (resp. >96%) success rates across three test datasets when directly attacking the AWS CompareFaces API (resp. open-source CosFace FRS) using only 100 queries—up to two orders of magnitude fewer queries than previous approaches. We provide evidence that personally identifiable biometric features are captured in our reconstructions by evaluating our approach in transfer-like attack settings and through other image similarity metrics.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646766/](https://ieeexplore.ieee.org/document/10646766/)
## OdScan: Backdoor Scanning for Object Detection Models.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#odscan-backdoor-scanning-for-object-detection-models)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#odscan-backdoor-scanning-for-object-detection-models)
### Authors
* Siyuan Cheng, Purdue University
* Guangyu Shen, Purdue University
* Guanhong Tao, Purdue University
* Kaiyuan Zhang, Purdue University
* Zhuo Zhang, Purdue University
* Shengwei An, Purdue University
* Xiangzhe Xu, Purdue University
* Yingqi Li, Microsoft
* Shiqing Ma, University of Massachusetts at Amherst
* Xiangyu Zhang, Purdue University
### Abstract
> Deep learning based object detection has many important real-life applications. Like other deep learning models, object detection models are susceptible to backdoor attacks. The unique characteristics of object detection, such as returning a set of object bounding boxes with labels, pose new challenges to backdoor scanning. Trigger inversion techniques that aim to reverse engineer a trigger to determine if a model is trojaned have to consider which bounding boxes may be attacked, if the attack causes bounding box relocation, and if the attack may even lead to appearance of ‘ghost’ objects invisible to humans. This much larger attack vector makes trigger inversion very challenging. We propose a new trigger inversion technique that leverages a number of critical observations to reduce the search space to an affordable level. Our experiments on 334 benign models and 360 trojaned models with 4 structures and 6 attacks show that our technique can consistently achieve over 0.9 ROC-AUC. In the latest TrojAI competition on object detection, our solution achieved 0.926 ROC-AUC, out-performing the second-best solution by 21.4% (with 0.763 ROC-AUC).

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646667/](https://ieeexplore.ieee.org/document/10646667/)
## Transferable Multimodal Attack on Vision-Language Pre-training Models.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#transferable-multimodal-attack-on-vision-language-pre-training-models)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#transferable-multimodal-attack-on-vision-language-pre-training-models)
### Authors
* Haodi Wang, Southeast University
* Kai Dong, Southeast University
* Zhilei Zhu, Data Space Research Institute of Hefei Comprehensive National Science Centre
* Haotong Qin, Beihang University
* Aishan Liu, Beihang University
* Xiaolin Fang, Southeast University
* Jiakai Wang, Zhongguancun Laboratory
* Xianglong Liu, Beihang University
### Abstract
> Vision-Language Pre-training (VLP) models have achieved remarkable success in practice, while easily being misled by adversarial attack. Though harmful, adversarial attacks are valuable in revealing the blind-spots of VLP models and promoting their robustness. However, existing adversarial attacking studies pay insufficient attention to the key roles of different modality-correlated features, leading to unsatisfactory transferable attacking performance. To tackle this issue, we propose the Transferable MultiModal (TMM) attack framework, which tailors both the modality consistency and modality discrepancy features. To promote transferability, we propose the attention-directed feature perturbation to disturb the modality-consistency features in critical attention regions. In light of the commonly employed cross-attention can represent the consistent features among diverse models, it is more possible to mislead the similar model perception for activating stronger transferability. For improving attacking ability, we proposed the orthogonal-guided feature heterogenization to guide the adversarial perturbation to contain more modality-discrepancy features in the encoded embeddings. Since VLP models rely more on aligned features among different modalities during decision-making, increasing the modality-discrepant could confuse the learned representation for better attacking ability. Extensive experiments under diverse settings demonstrate that the proposed TMM outperforms the comparisons by large margins, i.e., 20.47% improvements in transferable attacking ability on average. Moreover, we highlight that our TMM also shows outstanding attacking performance on large models, such as MiniGPT-4, Otter, etc.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646738/](https://ieeexplore.ieee.org/document/10646738/)
## Certifying Zero-Knowledge Circuits with Refinement Types.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#certifying-zero-knowledge-circuits-with-refinement-types)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#certifying-zero-knowledge-circuits-with-refinement-types)
### Authors
* Junrui Liu, University of California, Santa Barbara
* Ian Kretz, The University of Texas at Austin
* Hanzhi Liu, University of California, Santa Barbara; Veridise Inc.
* Bryan Tan, Veridise Inc.
* Jonathan Wang, Axiom
* Yi Sun, Axiom
* Luke Pearson, Polychain Capital
* Anders Miltner, Simon Fraser University
* Işıl Dillig, The University of Texas at Austin; Veridise Inc.
* Yu Feng, University of California, Santa Barbara
### Abstract
> Zero-knowledge (ZK) proof systems have emerged as a promising solution for building security-sensitive applications. However, bugs in ZK applications are extremely difficult to detect and can allow a malicious party to silently exploit the system without leaving any observable trace. This paper presents Coda, a novel statically-typed language for building zero-knowledge applications. Critically, Coda makes it possible to formally specify and statically check properties of a ZK application through a rich refinement type system. One of the key challenges in formally verifying ZK applications is that they require reasoning about polynomial equations over large prime fields that go beyond the capabilities of automated theorem provers. Coda mitigates this challenge by generating a set of Coq lemmas that can be proven in an interactive manner with the help of a tactic library. We have used Coda to re-implement 77 arithmetic circuits from widely-used Circom libraries and applications. Our evaluation shows that Coda makes it possible to specify important and formally verify correctness properties of these circuits. Our evaluation also revealed 6 previously-unknown vulnerabilities in the original Circom projects.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646715/](https://ieeexplore.ieee.org/document/10646715/)
## Ligetron: Lightweight Scalable End-to-End Zero-Knowledge Proofs Post-Quantum ZK-SNARKs on a Browser.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#ligetron-lightweight-scalable-end-to-end-zero-knowledge-proofs-post-quantum-zk-snarks-on-a-browser)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#ligetron-lightweight-scalable-end-to-end-zero-knowledge-proofs-post-quantum-zk-snarks-on-a-browser)
### Authors
* Ruihan Wang, Ligero Inc.
* Carmit Hazay, Ligero Inc.
* Muthuramakrishnan Venkitasubramaniam, Ligero Inc.
### Abstract
> Zero-Knowledge (ZK) proofs were introduced in the seminal work of Goldwasser, Micali, and Rackoff (STOC 1985) and remain one of the cornerstones of modern cryptography. With the advent of Blockchains, there has been reinvigorated interest in deploying ZK-proof systems in the form of ZK-SNARKs. ZKSNARKs are an attractive variant as they are non-interactive (in fact, publicly verifiable) and succinct. Yet, current deployments require huge running times and/or very large memory, and scaling them to large circuits cannot be accomplished on commodity hardware. We design and implement an efficient sublinear non-interactive zero-knowledge system, Ligetron that can be deployed as a web application and scales to billions of gates. Core to our construction is identifying a good intermediate representation, namely Web Assembly (WASM) that is: (1) versatile to represent complex computations, (2) can be compiled from most popular high-level languages, and (3) embodies rich semantics to derive space-efficiency. On the backend, we design and implement a space-efficient variant of the Ligero ZK system introduced in the work of Ames et al. (ACM CCS 2017) that can leverage the semantics of WASM. Ligetron is the first post-quantum ZK-SNARK to scale to billion gates and run from a browser. On commodity hardware, Ligetron scales to arbitrarily large circuits while showcasing competitive prover/verifier running times and better proof lengths than all previous post-quantum ZK-SNARKs.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646776/](https://ieeexplore.ieee.org/document/10646776/)
## Pianist: Scalable zkRollups via Fully Distributed Zero-Knowledge Proofs.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#pianist-scalable-zkrollups-via-fully-distributed-zero-knowledge-proofs)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#pianist-scalable-zkrollups-via-fully-distributed-zero-knowledge-proofs)
### Authors
* Tianyi Liu, University of Illinois Urbana-Champaign
* Tiancheng Xie, UC Berkeley; Berkeley Center for Responsible, Decentralized Intelligence (RDI)
* Jiaheng Zhang, UC Berkeley; Berkeley Center for Responsible, Decentralized Intelligence (RDI)
* Dawn Song, UC Berkeley; Berkeley Center for Responsible, Decentralized Intelligence (RDI)
* Yupeng Zhang, University of Illinois Urbana-Champaign; Berkeley Center for Responsible, Decentralized Intelligence (RDI)
### Abstract
> In the past decade, blockchains have seen various financial and technological innovations, with cryptocurrencies reaching a market cap of over 1 trillion dollars. However, scalability is one of the key issues hindering the deployment of blockchains in many applications. To improve the throughput of the transactions, zkRollups and zkEVM techniques using the cryptographic primitive of zero-knowledge proofs (ZKPs) have been proposed and many companies are adopting these technologies in the layer-2 solutions. However, in these technologies, the proof generation of the ZKP is the bottleneck and the companies have to deploy powerful machines with TBs of memory to batch a large number of transactions in a ZKP.In this work, we improve the scalability of these techniques by proposing new schemes of fully distributed ZKPs. Our schemes can improve the efficiency and the scalability of ZKPs using multiple machines, while the communication among the machines is minimal. With our schemes, the ZKP generation can be distributed to multiple participants in a model similar to the mining pools. Our protocols are based on Plonk, an efficient zero-knowledge proof system with a universal trusted setup. The first protocol is for data-parallel circuits. For a computation of M sub-circuits of size T each, using M machines, the prover time is O(T log T + M log M), while the prover time of the original Plonk on a single machine is O(MT log(MT )). Our protocol incurs only O(1) communication per machine, and the proof size and verifier time are both O(1), the same as the original Plonk. Moreover, we show that with minor modifications, our second protocol can support general circuits with arbitrary connections while preserving the same proving, verifying, and communication complexity. The technique is general and may be of independent interest for other applications of ZKP.We implement Pianist (Plonk vIA uNlimited dISTribution), a fully distributed ZKP system using our protocols. Pianist can generate the proof for 8192 transactions in 313 seconds on 64 machines. This improves the scalability of the Plonk scheme by 64×. The communication per machine is only 2.1 KB, regardless of the number of machines and the size of the circuit. The proof size is 2.2 KB and the verifier time is 3.5 ms. We further show that Pianist has similar improvements for general circuits. On a randomly generated circuit with 2
> 
> <sup xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">25</sup>
> 
> gates, it only takes 5 s to generate the proof using 32 machines,24.2× faster than Plonk on a single machine.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646741/](https://ieeexplore.ieee.org/document/10646741/)
## Scalable Verification of Zero-Knowledge Protocols.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#scalable-verification-of-zero-knowledge-protocols)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#scalable-verification-of-zero-knowledge-protocols)
### Authors
* Miguel Isabel, Complutense University of Madrid, Spain
* Clara Rodríguez-Núñez, Complutense University of Madrid, Spain
* Albert Rubio, Complutense University of Madrid, Spain
### Abstract
> The application of Zero-Knowledge (ZK) proofs is rapidly growing in the industry and has become a key element to enable privacy and enhance scalability in public distributed ledgers. In most practical ZK systems, the statement to be proven is expressed by means of a set of polynomial equations in a prime field that describe an arithmetic circuit. Describing general statements using this kind of constraints is a complex and error-prone task. This can be partly mitigated by using high-level programming languages, but at the cost of losing control over the added constraints and, as a result, obtaining too large systems for complex statements. In this context, having tools to automatically verify properties of the constraint systems is of paramount importance to guarantee the security of the protocol. However, since non-linear polynomial reasoning over a finite field is needed for checking challenging properties, existing automatic tools either do not scale or cannot detect non-trivial bugs. In this paper, we present a new scalable modular technique based on the application of transformation and deduction rules that have proven to be very effective in verifying properties over the signals of a circuit given as a set of polynomial equations in a large prime field. Our technique has been implemented in a tool called CIVER and applied to verify safety properties for circuits implemented in circom, which is one of the most popular languages for defining ZK protocols. We have been able to analyze large industrial circuits and detect subtle vulnerabilities in circuits designed by expert programmers.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646792/](https://ieeexplore.ieee.org/document/10646792/)
## Efficient Zero-Knowledge Arguments For Paillier Cryptosystem.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#efficient-zero-knowledge-arguments-for-paillier-cryptosystem)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#efficient-zero-knowledge-arguments-for-paillier-cryptosystem)
### Authors
* Borui Gong, The Hong Kong Polytechnic University
* Wang Fat Lau, The Hong Kong Polytechnic University
* Man Ho Au, The Hong Kong Polytechnic University
* Rupeng Yang, University of Wollongong
* Haiyang Xue, The Hong Kong Polytechnic University
* Lichun Li, Ant Group
### Abstract
> We present an efficient zero-knowledge argument of knowledge system customized for the Paillier cryptosystem. Our system enjoys sublinear proof size, low verification cost, and acceptable proof generation effort, while also supporting batch proof generation/verification. Existing works specialized for Paillier cryptosystem feature linear proof size and verification time. Using existing sublinear argument systems for generic statements (e.g., zk-SNARK) results in unaffordable proof generation cost since it involves translating the relations to be proven into an inhibitive large Boolean or arithmetic circuit over a prime order field. Our system does not suffer from these limitations.The core of our argument systems is a constraint system defined over the ring of residue classes modulo a composite number, together with novel techniques tailored for arguing binary values in this setting. We then adapt the approach from Bootle et al. (EUROCRYPT 2016) to compile the constraint system into a sublinear argument system. Our constraint system is generic and can be used to express typical relations in Paillier cryptosystems including range proof, correctness proof, relationships between bits of plaintext, relationships of plaintexts among multiple ciphertexts, and more. Our argument supports batch proof generation and verification, with the amortized cost outperforming state-of-the-art protocol specialized for Paillier when the number of Paillier ciphertext is in the order of hundreds.We report an end-to-end prototype and conduct comprehensive experiments across multiple scenarios. Scenario 1 is Paillier with packing. When we pack 25.6K bits into 400 ciphertexts, a proof that all these ciphertexts are correctly computed is 17 times smaller and is 3 times faster to verify compared with the naive implementation: using 25.6K OR-proofs without packing. Furthermore, we can prove additional statements almost for free, e.g., one can prove that the sum of a subset of the witness bits is less than a threshold t. Another scenario is range proof. To prove that each plaintext in 200 Paillier ciphertexts is of size 256 bits, our proof size is 10 times smaller than the state-of-the-art. Our analysis suggests that our system is asymptotically more efficient than existing protocols, and is highly suitable for scenarios involving a large number (more than 100) of Paillier ciphertexts, which is often the case for data analytics applications.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646829/](https://ieeexplore.ieee.org/document/10646829/)
## SwiftRange: A Short and Efficient Zero-Knowledge Range Argument For Confidential Transactions and More.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#swiftrange-a-short-and-efficient-zero-knowledge-range-argument-for-confidential-transactions-and-more)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#swiftrange-a-short-and-efficient-zero-knowledge-range-argument-for-confidential-transactions-and-more)
### Authors
* Nan Wang, Australian National University and CSIRO’s Data61, Australia
* Sid Chi-Kin Chau, Australian National University and CSIRO’s Data61, Australia
* Dongxi Liu, CSIRO’s Data61, Australia
### Abstract
> Zero-knowledge range proofs play a critical role in confidential transactions (CT) on blockchain systems. They are used to prove the non-negativity of committed transaction payments without disclosing the exact values. Logarithmicsized range proofs with transparent setups, e.g., Bulletproofs, which aim to prove a committed value lies in the range [0, 2 -1] where is the bit length of the range, have gained growing popularity for communication-critical blockchain systems as they increase scalability by allowing a block to accommodate more transactions. In this paper, we propose SwiftRange, a new type of logarithmic-sized zero-knowledge range argument with a transparent setup in the discrete logarithm setting. Our argument can be a drop-in replacement for range proofs in blockchain-based confidential transactions. Compared with Bulletproofs, our argument has higher computational efficiency and lower round complexity while incurring comparable communication overheads for CT-friendly ranges, where N ∈ {32, 64}. Specifically, a single SwiftRange achieves 1.73× and 1.37× proving efficiency with no more than 1.1× communication costs for both ranges, respectively. More importantly, our argument is doubly efficient in verification efficiency. Furthermore, our argument has a smaller size when N ≤ 16, making it competitive for many other communication-critical applications. Our argument supports the aggregation of multiple single arguments for greater efficiency in communication and verification. Finally, we benchmarked our argument against the state-of-the-art range proofs to demonstrate its practicality.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646857/](https://ieeexplore.ieee.org/document/10646857/)
## Titan : Efficient Multi-target Directed Greybox Fuzzing.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#titan-efficient-multi-target-directed-greybox-fuzzing)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#titan-efficient-multi-target-directed-greybox-fuzzing)
### Authors
* Heqing Huang, The Hong Kong University of Science and Technology, China
* Peisen Yao, Zhejiang University, China
* Hung-Chun Chiu, The Hong Kong University of Science and Technology, China
* Yiyuan Guo, The Hong Kong University of Science and Technology, China
* Charles Zhang, The Hong Kong University of Science and Technology, China
### Abstract
> Modern directed fuzzing often faces scalability issues when analyzing multiple targets in a program simultaneously. We observe that the root cause is that directed fuzzers are unaware of the correlations among the targets, thereby could degenerate into a target-undirected method. As a result, directed fuzzing suffers severely from efficiency when reproducing multiple targets.This paper presents Titan, which enables fuzzers to distinguish correlations among various targets in the program and, thus, optimizes the input generation to reproduce multiple targets effectively. Leveraging these correlations, Titan differentiates seeds’ potential of reaching each target for the scheduling and identifies bytes that can be changed simultaneously for the mutation. We compare our approach to eight state-of-the-art (directed) fuzzers. The evaluation demonstrates that Titan outperforms existing approaches by efficiently detecting multiple targets, achieving a 21.4x speedup and requiring 95.0% fewer number of executions. In addition, Titan detects nine incomplete fixes, which cannot be detected by other directed fuzzers, in the latest versions of the benchmark programs with two CVE IDs assigned.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646769/](https://ieeexplore.ieee.org/document/10646769/)
## Benzene: A Practical Root Cause Analysis System with an Under-Constrained State Mutation.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#benzene-a-practical-root-cause-analysis-system-with-an-under-constrained-state-mutation)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#benzene-a-practical-root-cause-analysis-system-with-an-under-constrained-state-mutation)
### Authors
* Younggi Park, Korea University; Ministry of National Defense
* Hwiwon Lee, Korea University; Ministry of National Defense
* Jinho Jung, Ministry of National Defense
* Hyungjoon Koo, Sungkyunkwan University
* Huy Kang Kim, Korea University
### Abstract
> Fuzzing has demonstrated great success in bug discovery, and plays a crucial role in software testing today. Despite the increasing popularity of fuzzing, automated root cause analysis (RCA) has drawn less attention. One of the recent advances in RCA is crash-based statistical debugging, which leverages the behavioral differences in program execution between crash-triggered and non-crashing inputs. Hence, obtaining non-crashing behaviors close to the original crash is crucial but challenging with previous approaches (e.g., fuzzing). In this paper, we present Benzene, a practical end-to-end RCA system that facilitates an automated crash diagnosis. To this end, we introduce a novel technique, called under-constrained state mutation, that generates both crashing and non-crashing behaviors for effective and efficient RCA. We design and implement the Benzene prototype, and evaluate it with 60 vulnerabilities in the wild. Our empirical results demonstrate that Benzene not only surpasses in performance (i.e., root cause ranking), but also achieves superior results in both speed (4.6 times faster) and memory footprint (31.4 times less) on average than prior approaches.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646698/](https://ieeexplore.ieee.org/document/10646698/)
## Predecessor-aware Directed Greybox Fuzzing.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#predecessor-aware-directed-greybox-fuzzing)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#predecessor-aware-directed-greybox-fuzzing)
### Authors
* Yujian Zhang, Southeast University, China
* Yaokun Liu, Southeast University, China
* Jinyu Xu, Southeast University, China
* Yanhao Wang, NIO, China
### Abstract
> Directed Greybox Fuzzing (DGF) is a target-oriented fuzzing technique that can reproduce or discover software vulnerabilities. The goal is commonly achieved through two phases: static analysis which obtains program structural information beforehand, and dynamic execution that guides fuzzing towards target sites. However, existing DGF methods still incur heavyweight and incomplete issues. The former comes from extra efforts on identifying and approaching the target sites, while the latter refers to the incompleteness of testing on the target sites due to indirect calls or insufficient paths that recent DGF can cover.In this paper, we propose a Predecessor-aware Directed Greybox Fuzzing (PDGF) method and regard DGF as a path-searching problem. PDGF divides a given program into predecessor and non-predecessor areas, and maintains a set of predecessors by lightweight program analysis initially and augmented during the dynamic execution thereafter. Meanwhile, PDGF introduces a novel fitness metric called regional maturity to indicate the coverage rate of predecessors, and contains a simulated annealing-based power scheduling technique together with seed selection and mutation, to cover the predecessor area efficiently and extensively. We evaluate the proposed PDGF on a benchmark that contains 30 real-world program target sites, and conduct extensive comparisons with state-of-the-art DGF tools. Experimental results reveal that PDGF outperforms competitors in terms of Time-To-Exposure, path diversity, and bug finding. Besides, PDGF discovered nine new vulnerabilities, six of which have been assigned CVEs.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646882/](https://ieeexplore.ieee.org/document/10646882/)
## AFGen: Whole-Function Fuzzing for Applications and Libraries.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#afgen-whole-function-fuzzing-for-applications-and-libraries)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#afgen-whole-function-fuzzing-for-applications-and-libraries)
### Authors
* Yuwei Liu, TCA/SKLCS, Institute of Software, Chinese Academy of Sciences; University of Chinese Academy of Sciences
* Yanhao Wang, TCA/SKLCS, Institute of Software, Chinese Academy of Sciences
* Xiangkun Jia, TCA/SKLCS, Institute of Software, Chinese Academy of Sciences
* Zheng Zhang, Ocean University of China
* Purui Su, TCA/SKLCS, Institute of Software, Chinese Academy of Sciences; University of Chinese Academy of Sciences
### Abstract
> Fuzzing technology has been widely used to discover vulnerabilities, but existing fuzzing techniques still cannot cover and explore all functions in an application or a library. The works that automatically generate fuzzing harnesses for API functions of libraries provide a way to test the target function directly. However, applying these approaches to arbitrary internal functions of a project (e.g., library) is challenging. Specifically, the context of an API function is usually simple and clear for users, but the complex dependence of the internal functions leads to a more complicated running context and constraints on their parameters, making it hard to generate fuzzing harnesses efficiently.In this paper, we propose whole-function fuzzing, a "bottom-up" approach that fuzzes applications and libraries by covering all functions. We argue that it is beneficial to vulnerability discovery if one achieves full function coverage with precision sacrifice that can be mitigated through a delicate design. To this end, we design and implement AFGen, a framework of automatic whole-function fuzzing. Given a target function, AFGen will generate a fuzzing harness that reaches the target function with proper initial program context, and it will refine the fuzzing harness based on the constraints of the discovered crashes. Specifically, it slices the calling statements of a target function based on the control flow and data flow dependency, assigns values for the necessary variables used in the sliced code according to their types, and searches the constraint statements of the variables related to crash. In this way, AFGen generates fuzzing harnesses with a low false positive rate. To verify the effectiveness of AFGen, we collected 102 known vulnerabilities from 11 open-source projects. AFGen successfully creates fuzzing harnesses for all vulnerable functions, and it identifies 66 vulnerabilities of the collected 102 known vulnerabilities, which outperforms all comparing tools and achieves 2x vulnerabilities discovered by the second best fuzzer (i.e., AFL++). The crashes triggered by AFGen achieve 77.1% precision, which is 10 times the precision of FUDGE. AFGen also discovers 24 unknown vulnerabilities confirmed with CVE IDs.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646877/](https://ieeexplore.ieee.org/document/10646877/)
## Labrador: Response Guided Directed Fuzzing for Black-box IoT Devices.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#labrador-response-guided-directed-fuzzing-for-black-box-iot-devices)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#labrador-response-guided-directed-fuzzing-for-black-box-iot-devices)
### Authors
* Hangtian Liu, Information Engineering University; Tsinghua University; Laboratory for Advanced Computing and Intelligence Engineering
* Shuitao Gan, Tsinghua University; Laboratory for Advanced Computing and Intelligence Engineering
* Chao Zhang, Tsinghua University; Zhongguancun Laboratory
* Zicong Gao, Information Engineering University; Tsinghua University; Laboratory for Advanced Computing and Intelligence Engineering
* Hongqi Zhang, Information Engineering University; Henan Key Laboratory of Information Security
* Xiangzhi Wang, University of Electronic Science and Technology of China
* Guangming Gao, Laboratory for Advanced Computing and Intelligence Engineering
### Abstract
> Fuzzing is a popular solution to finding vulnerabilities in software including IoT firmware. However, due to the challenges of emulating or rehosting firmware, some IoT devices (e.g., enterprise-level devices) can only be fuzzed in a black-box manner, which makes fuzzers blind and inefficient due to missing feedbacks (e.g., code coverage or distance). In this paper, we present a novel response guided directed fuzzing solution Labrador, able to test black-box IoT devices efficiently. Specifically, we leverage the network response to infer the execution trace of firmware and deduce the code coverage of testing. Second, we leverage the test case (i.e., request) and its response to estimate the distance to the target sensitive code (i.e., sink). Lastly, we further leverage the distance to guide test case mutation, which efficiently drives directed fuzzing toward candidate vulnerable code. We have implemented a prototype of Labrador and evaluated it on 14 different enterprise-level IoT devices. Results showed that Labrador significantly outperforms state-of-the-art (SOTA) solutions. It finds 44X more vulnerabilities than SNIPUZZ, BOOFUZZ and FIRM-AFL and 8.57X more vulnerabilities than SaTC. In total, it discovered 79 unknown vulnerabilities, of which 61 were assigned with CVEs.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646723/](https://ieeexplore.ieee.org/document/10646723/)
## Chronos: Finding Timeout Bugs in Practical Distributed Systems by Deep-Priority Fuzzing with Transient Delay.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#chronos-finding-timeout-bugs-in-practical-distributed-systems-by-deep-priority-fuzzing-with-transient-delay)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#chronos-finding-timeout-bugs-in-practical-distributed-systems-by-deep-priority-fuzzing-with-transient-delay)
### Authors
* Yuanliang Chen, School of Software Tsinghua University KLISS, BNRist, Beijing, China
* Fuchen Ma, School of Software Tsinghua University KLISS, BNRist, Beijing, China
* Yuanhang Zhou, School of Software Tsinghua University KLISS, BNRist, Beijing, China
* Ming Gu, School of Software Tsinghua University KLISS, BNRist, Beijing, China
* Qing Liao, Harbin Institute of Technology, Harbin, China
* Yu Jiang, School of Software Tsinghua University KLISS, BNRist, Beijing, China
### Abstract
> Delays are inevitable in complex distributed environments. Timeout mechanisms are commonly used to handle unexpected failures in distributed systems. However, incorrect timeout handling or implementation errors in timeout mechanisms can lead to system hang-ups or crashes. Such timeout bugs may be crucial and pose a significant threat to the availability and security of distributed systems.In this work, we introduce Chronos, a general testing framework for automatically detecting timeout bugs in distributed systems with deep-priority transient delays. First, we propose general runtime delayed libraries that dynamically inject fine-grained delays in a Distributed System Under Test (DSUT). To effectively trigger delays and constantly explore timeout bugs in deep paths, Chronos harnesses a deep-priority guided fuzzing that dynamically generates high-quality delay sequences in the runtime. Then, Chronos utilizes transient delays to eliminate the time overhead caused by actual delays and accelerate the test process. We implemented and evaluated Chronos on four widely used distributed systems, including ZooKeeper, MySQL-Cluster, HDFS, and Go-Ethereum. Compared with the state-of-the-art techniques, Random, Brute-Force, and Coverage-Guided fault injection, Chronos covers 26.40%, 21.69%, and 15.14% more timeout mechanism logic, respectively. Furthermore, Chronos has detected 27 timeout bugs in these real-world applications, which have been repaired by the corresponding maintainers.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646793/](https://ieeexplore.ieee.org/document/10646793/)
## Everything is Good for Something: Counterexample-Guided Directed Fuzzing via Likely Invariant Inference.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#everything-is-good-for-something-counterexample-guided-directed-fuzzing-via-likely-invariant-inference)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#everything-is-good-for-something-counterexample-guided-directed-fuzzing-via-likely-invariant-inference)
### Authors
* Heqing Huang, City University of Hong Kong
* Anshunkang Zhou, The Hong Kong University of Science and Technology
* Mathias Payer, EPFL
* Charles Zhang, The Hong Kong University of Science and Technology
### Abstract
> Directed fuzzing demonstrates the potential to reproduce bug reports, verify patches, and debug vulnerabilities. State-of-the-art directed fuzzers prioritize inputs that are more likely to trigger the target vulnerability or filter irrelevant inputs unrelated to the targets. Despite these efforts, existing approaches struggle to reproduce specific vulnerabilities as most generated inputs are irrelevant. For instance, in the Magma benchmark, more than 94% of generated inputs miss the target vulnerability. We call this challenge the indirect input generation problem.We propose to increase the yield of inputs that reach the target location by restraining input generation. Our key insight is to infer likely invariants from both reachable and unreachable executed inputs to constrain the search space of the subsequent input generation and produce more reachable inputs. Moreover, we propose two selection strategies to minimize the fraction of unnecessary inputs for efficient invariant inference and deprioritize imprecise invariants for effective input generation. Halo, our prototype implementation, outperforms state-of-the-art directed fuzzers with a 15.3x speedup in reproducing target vulnerabilities by generating 6.2x more reachable inputs. During our evaluation, we also detected ten previously unknown bugs involving seven incomplete fixes in the latest versions of well-fuzzed targets.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646712/](https://ieeexplore.ieee.org/document/10646712/)
## SoK: Prudent Evaluation Practices for Fuzzing.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#sok-prudent-evaluation-practices-for-fuzzing)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#sok-prudent-evaluation-practices-for-fuzzing)
### Authors
* Moritz Schloegel, CISPA Helmholtz Center for Information Security
* Nils Bars, CISPA Helmholtz Center for Information Security
* Nico Schiller, CISPA Helmholtz Center for Information Security
* Lukas Bernhard, CISPA Helmholtz Center for Information Security
* Tobias Scharnowski, CISPA Helmholtz Center for Information Security
* Addison Crump, CISPA Helmholtz Center for Information Security
* Arash Ale-Ebrahim, CISPA Helmholtz Center for Information Security
* Nicolai Bissantz, Ruhr University Bochum
* Marius Muench, University of Birmingham
* Thorsten Holz, CISPA Helmholtz Center for Information Security
### Abstract
> Fuzzing has proven to be a highly effective approach to uncover software bugs over the past decade. After AFL popularized the groundbreaking concept of lightweight coverage feedback, the field of fuzzing has seen a vast amount of scientific work proposing new techniques, improving methodological aspects of existing strategies, or porting existing methods to new domains. All such work must demonstrate its merit by showing its applicability to a problem, measuring its performance, and often showing its superiority over existing works in a thorough, empirical evaluation. Yet, fuzzing is highly sensitive to its target, environment, and circumstances, e. g., randomness in the testing process. After all, relying on randomness is one of the core principles of fuzzing, governing many aspects of a fuzzer’s behavior. Combined with the often highly difficult to control environment, the reproducibility of experiments is a crucial concern and requires a prudent evaluation setup. To address these threats to validity, several works, most notably Evaluating Fuzz Testing by Klees et al., have outlined how a carefully designed evaluation setup should be implemented, but it remains unknown to what extent their recommendations have been adopted in practice.In this work, we systematically analyze the evaluation of 150 fuzzing papers published at the top venues between 2018 and 2023. We study how existing guidelines are implemented and observe potential shortcomings and pitfalls. We find a surprising disregard of the existing guidelines regarding statistical tests and systematic errors in fuzzing evaluations. For example, when investigating reported bugs, we find that the search for vulnerabilities in real-world software leads to authors requesting and receiving CVEs of questionable quality. Extending our literature analysis to the practical domain, we attempt to reproduce claims of eight fuzzing papers. These case studies allow us to assess the practical reproducibility of fuzzing research and identify archetypal pitfalls in the evaluation design. Unfortunately, our reproduced results reveal several deficiencies in the studied papers, and we are unable to fully support and reproduce the respective claims. To help the field of fuzzing move toward a scientifically reproducible evaluation strategy, we propose updated guidelines for conducting a fuzzing evaluation that future work should follow.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646824/](https://ieeexplore.ieee.org/document/10646824/)
## MM-BD: Post-Training Detection of Backdoor Attacks with Arbitrary Backdoor Pattern Types Using a Maximum Margin Statistic.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#mm-bd-post-training-detection-of-backdoor-attacks-with-arbitrary-backdoor-pattern-types-using-a-maximum-margin-statistic)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#mm-bd-post-training-detection-of-backdoor-attacks-with-arbitrary-backdoor-pattern-types-using-a-maximum-margin-statistic)
### Authors
* Hang Wang, Anomalee Inc, State College, PA, USA; Pennsylvania State University, University Park, PA, USA
* Zhen Xiang, Anomalee Inc, State College, PA, USA; Pennsylvania State University, University Park, PA, USA
* David J. Miller, Anomalee Inc, State College, PA, USA; Pennsylvania State University, University Park, PA, USA
* George Kesidis, Anomalee Inc, State College, PA, USA; Pennsylvania State University, University Park, PA, USA
### Abstract
> Backdoor attacks are an important type of adversarial threat against deep neural network classifiers, wherein test samples from one or more source classes will be (mis)classified to the attacker’s target class when a backdoor pattern is embedded. In this paper, we focus on the post-training backdoor defense scenario commonly considered in the literature, where the defender aims to detect whether a trained classifier was backdoor-attacked without any access to the training set. Many post-training detectors are designed to detect attacks that use either one or a few specific backdoor embedding functions (e.g., patch-replacement or additive attacks). These detectors may fail when the backdoor embedding function used by the attacker (unknown to the defender) is different from the backdoor embedding function assumed by the defender. In contrast, we propose a post-training defense that detects backdoor attacks with arbitrary types of backdoor embeddings, without making any assumptions about the backdoor embedding type. Our detector leverages the influence of the backdoor attack, independent of the backdoor embedding mechanism, on the landscape of the classifier’s outputs prior to the softmax layer. For each class, a maximum margin statistic is estimated. Detection inference is then performed by applying an unsupervised anomaly detector to these statistics. Thus, our detector does not need any legitimate clean samples, and can efficiently detect backdoor attacks with arbitrary numbers of source classes. These advantages over several state-of-the-art methods are demonstrated on four datasets, for three different types of backdoor patterns, and for a variety of attack configurations. Finally, we propose a novel, general approach for backdoor mitigation once a detection is made. The mitigation approach was the runner-up at the first IEEE Trojan Removal Competition. The code is online available.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646729/](https://ieeexplore.ieee.org/document/10646729/)
## BadVFL: Backdoor Attacks in Vertical Federated Learning.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#badvfl-backdoor-attacks-in-vertical-federated-learning)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#badvfl-backdoor-attacks-in-vertical-federated-learning)
### Authors
* Mohammad Naseri, Flower Labs, University College, London
* Yufei Han, INRIA, Rennes
* Emiliano De Cristofaro, UC Riverside
### Abstract
> Federated learning (FL) enables multiple parties to collaboratively train a machine learning model without sharing their data; rather, they train their own model locally and send updates to a central server for aggregation. Depending on how the data is distributed among the participants, FL can be classified into Horizontal (HFL) and Vertical (VFL). In VFL, the participants share the same set of training instances but only host a different and non-overlapping subset of the whole feature space. Whereas in HFL, each participant shares the same set of features while the training set is split into locally owned training data subsets.VFL is increasingly used in applications like financial fraud detection; nonetheless, very little work has analyzed its security. In this paper, we focus on robustness in VFL, in particular, on backdoor attacks, whereby an adversary attempts to manipulate the aggregate model during the training process to trigger misclassifications. Performing backdoor attacks in VFL is more challenging than in HFL, as the adversary i) does not have access to the labels during training and ii) cannot change the labels as she only has access to the feature embeddings. We present a first-of-its-kind clean-label backdoor attack in VFL, which consists of two phases: a label inference and a backdoor phase. We demonstrate the effectiveness of the attack on three different datasets, investigate the factors involved in its success, and discuss countermeasures to mitigate its impact.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646664/](https://ieeexplore.ieee.org/document/10646664/)
## Distribution Preserving Backdoor Attack in Self-supervised Learning.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#distribution-preserving-backdoor-attack-in-self-supervised-learning)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#distribution-preserving-backdoor-attack-in-self-supervised-learning)
### Authors
* Guanhong Tao, Purdue University
* Zhenting Wang, Rutgers University
* Shiwei Feng, Purdue University
* Guangyu Shen, Purdue University
* Shiqing Ma, University of Massachusetts Amherst
* Xiangyu Zhang, Purdue University
### Abstract
> Self-supervised learning is widely used in various domains for building foundation models. It has been demonstrated to achieve state-of-the-art performance in a range of tasks. In the computer vision domain, self-supervised learning is utilized to generate an image feature extractor, called an encoder, such that a variety of downstream tasks can build classifiers on top of it with limited data and resources. Despite the impressive performance of self-supervised learning, it is susceptible to backdoor attacks, where an attacker injects a backdoor into its unlabeled training data. A downstream classifier built on the backdoored encoder will misclassify any inputs inserted with the trigger to a target label. Existing backdoor attacks in self-supervised learning possess a key out-of-distribution property, where the poisoned samples significantly differ from the clean data in the feature space. The poisoned distribution is also exceptionally concentrated, inducing high pairwise similarity among poisoned samples. As a result, these attacks can be detected by state-of-the-art defense techniques. We propose a novel distribution preserving attack, which transforms the poisoned samples into in-distribution data by reducing their distributional distance to the clean data. We also distribute the poisoned data to a wider region in the target-class distribution, mitigating the concentration problem. Our evaluation of five popular datasets demonstrates that our attack, Drupe, significantly reduces the distributional distance and concentration of the poisoned distribution compared to existing attacks. Drupe successfully evades two state-of-the-art backdoor defenses in self-supervised learning and is robust against knowledgeable defenders.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646825/](https://ieeexplore.ieee.org/document/10646825/)
## Robust Backdoor Detection for Deep Learning via Topological Evolution Dynamics.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#robust-backdoor-detection-for-deep-learning-via-topological-evolution-dynamics)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#robust-backdoor-detection-for-deep-learning-via-topological-evolution-dynamics)
### Authors
* Xiaoxing Mo, Deakin University
* Yechao Zhang, Huazhong University of Science and Technology
* Leo Yu Zhang, Griffith University
* Wei Luo, Deakin University
* Nan Sun, The University of New South Wales
* Shengshan Hu, Huazhong University of Science and Technology
* Shang Gao, Deakin University
* Yang Xiang, Swinburne University of Technology
### Abstract
> A backdoor attack in deep learning inserts a hidden backdoor in the model to trigger malicious behavior upon specific input patterns. Existing detection approaches assume a metric space (for either the original inputs or their latent representations) in which normal samples and malicious samples are separable. We show that this assumption has a severe limitation by introducing a novel SSDT (Source-Specific and Dynamic-Triggers) backdoor, which obscures the difference between normal samples and malicious samples.To overcome this limitation, we move beyond looking for a perfect metric space that would work for different deep-learning models, and instead resort to more robust topological constructs. We propose TED (Topological Evolution Dynamics) as a model-agnostic basis for robust backdoor detection. The main idea of TED is to view a deep-learning model as a dynamical system that evolves inputs to outputs. In such a dynamical system, a benign input follows a natural evolution trajectory similar to other benign inputs. In contrast, a malicious sample displays a distinct trajectory, since it starts close to benign samples but eventually shifts towards the neighborhood of attacker-specified target samples to activate the backdoor.Extensive evaluations are conducted on vision and natural language datasets across different network architectures. The results demonstrate that TED not only achieves a high detection rate, but also significantly outperforms existing state-of-the-art detection approaches, particularly in addressing the sophisticated SSDT attack. The code to reproduce the results is made public on GitHub.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646679/](https://ieeexplore.ieee.org/document/10646679/)
## DeepVenom: Persistent DNN Backdoors Exploiting Transient Weight Perturbations in Memories.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#deepvenom-persistent-dnn-backdoors-exploiting-transient-weight-perturbations-in-memories)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#deepvenom-persistent-dnn-backdoors-exploiting-transient-weight-perturbations-in-memories)
### Authors
* Kunbei Cai, University of Central Florida
* Md Hafizul Islam Chowdhuryy, University of Central Florida
* Zhenkai Zhang, Clemson University
* Fan Yao, University of Central Florida
### Abstract
> Backdoor attacks have raised significant concerns in machine learning (ML) systems. Mainstream ML backdoor attacks typically involve either poisoning the victim’s training samples or pre-training poisoned models for use by victim users. Meanwhile, recent advances in hardware-based threats reveal that ML model integrity at inference-time can be seriously tampered by inducing transient faults in model weights. However, the adversarial impacts of such hardware fault attacks at training time have not been well understood.In this paper, we present DeepVenom, the first end-to-end hardware-based DNN backdoor attack during victim model training. Particularly, DeepVenom can insert a targeted backdoor persistently at the victim model fine-tuning runtime through transient faults in model weight memory (via rowhammer). DeepVenom manifests in two main steps: i) an offline step that identifies weight perturbation transferable to the victim model using an ensemble-based local model bit search algorithm, and ii) an online stage that integrates advanced system-level techniques to efficiently massage weight tensors for precise rowhammer-based bit flips. DeepVenom further employs a novel iterative backdoor boosting mechanism that performs multiple rounds of weight perturbations to stabilize the backdoor. We implement an end-to-end DeepVenom attack in real systems with DDR3/DDR4 memories, and evaluate it using state-of-the-art Convolutional Neural Network and Vision Transformer models. The results show that DeepVenom can effectively generate backdoors in victim’s fine-tuned models with upto 99.8% attack success rate (97.8% on average) using as few as 11 total weight bit flips (maximum 49). The evaluation further demonstrates that DeepVenom is successful under varying victim fine-tuning hyperparameter settings, and is highly robust against catastrophic forgetting. Our work highlights the practicality of training-time backdoors through hardware-based weight perturbation, which represents a new dimension in adversarial machine learning.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646710/](https://ieeexplore.ieee.org/document/10646710/)
## Baffle: Hiding Backdoors in Offline Reinforcement Learning Datasets.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#baffle-hiding-backdoors-in-offline-reinforcement-learning-datasets)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#baffle-hiding-backdoors-in-offline-reinforcement-learning-datasets)
### Authors
* Chen Gong, University of Virginia, USA
* Zhou Yang, Singapore Management University, Singapore
* Yunpeng Bai, Institute of Automation, Chinese Academy of Sciences, China
* Junda He, Singapore Management University, Singapore
* Jieke Shi, Singapore Management University, Singapore
* Kecen Li, Institute of Automation, Chinese Academy of Sciences, China
* Arunesh Sinha, Rutgers University, USA
* Bowen Xu, North Carolina State University, USA
* Xinwen Hou, Institute of Automation, Chinese Academy of Sciences, China
* David Lo, Singapore Management University, Singapore
* Tianhao Wang, University of Virginia, USA
### Abstract
> Reinforcement learning (RL) makes an agent learn from trial-and-error experiences gathered during the interaction with the environment. Recently, offline RL has become a popular RL paradigm because it saves the interactions with environments. In offline RL, data providers share large pre-collected datasets, and others can train high-quality agents without interacting with the environments. This paradigm has demonstrated effectiveness in critical tasks like robot control, autonomous driving, etc. However, less attention is paid to investigating the security threats to the offline RL system. This paper focuses on backdoor attacks, where some perturbations are added to the data (observations) such that given normal observations, the agent takes high-rewards actions, and low-reward actions on observations injected with triggers. In this paper, we propose Baffle (Backdoor Attack for Offline Reinforcement Learning), an approach that automatically implants backdoors to RL agents by poisoning the offline RL dataset, and evaluate how different offline RL algorithms react to this attack. Our experiments conducted on four tasks and nine offline RL algorithms expose a disquieting fact: none of the existing offline RL algorithms has been immune to such a backdoor attack. More specifically, Baffle modifies 10% of the datasets for four tasks (3 robotic controls and 1 autonomous driving). Agents trained on the poisoned datasets perform well in normal settings. However, when triggers are presented, the agents’ performance decreases drastically by 63.2%, 53.9%, 64.7%, and 47.4% in the four tasks on average. The backdoor still persists after fine-tuning poisoned agents on clean datasets. We further show that the inserted backdoor is also hard to be detected by a popular defensive method. This paper calls attention to developing more effective protection for the open-source offline RL dataset.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646640/](https://ieeexplore.ieee.org/document/10646640/)
## Exploring the Orthogonality and Linearity of Backdoor Attacks.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#exploring-the-orthogonality-and-linearity-of-backdoor-attacks)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#exploring-the-orthogonality-and-linearity-of-backdoor-attacks)
### Authors
* Kaiyuan Zhang, Purdue University
* Siyuan Cheng, Purdue University
* Guangyu Shen, Purdue University
* Guanhong Tao, Purdue University
* Shengwei An, Purdue University
* Anuran Makur, Purdue University
* Shiqing Ma, University of Massachusetts at Amherst
* Xiangyu Zhang, Purdue University
### Abstract
> Backdoor attacks embed an attacker-chosen pattern into inputs to cause model misclassification. This security threat to machine learning has been a long concern. There are a number of defense techniques proposed by the community. Do they work for a large spectrum of attacks?As we argue that they are significant and prevalent in contemporary research, and we conduct a systematic study on 14 attacks and 12 defenses. Our empirical results show that existing defenses often fail on certain attacks. To understand the reason, we study the characteristics of backdoor attacks through theoretical analysis. Particularly, we formulate backdoor poisoning as a continual learning task, and introduce two key properties: orthogonality and linearity. These two characteristics in-depth explain how backdoors are learned by models from a theoretical perspective. This helps to understand the reason behind the failure of various defense techniques. Through our study, we highlight open challenges in defending against backdoor attacks and provide future directions.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646641/](https://ieeexplore.ieee.org/document/10646641/)
## BELT: Old-School Backdoor Attacks can Evade the State-of-the-Art Defense with Backdoor Exclusivity Lifting.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#belt-old-school-backdoor-attacks-can-evade-the-state-of-the-art-defense-with-backdoor-exclusivity-lifting)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#belt-old-school-backdoor-attacks-can-evade-the-state-of-the-art-defense-with-backdoor-exclusivity-lifting)
### Authors
* Huming Qiu, Fudan University, China
* Junjie Sun, Fudan University, China
* Mi Zhang, Fudan University, China
* Xudong Pan, Fudan University, China
* Min Yang, Fudan University, China
### Abstract
> Deep neural networks (DNNs) are susceptible to backdoor attacks, where malicious functionality is embedded to allow attackers to trigger incorrect classifications. Old-school backdoor attacks use strong trigger features that can easily be learned by victim models. Despite robustness against input variation, the robustness however increases the likelihood of unintentional trigger activations. This leaves traces to existing defenses, which find approximate replacements for the original triggers that can activate the backdoor without being identical to the original trigger via, e.g., reverse engineering and sample overlay.In this paper, we propose and investigate a new characteristic of backdoor attacks, namely, backdoor exclusivity, which measures the ability of backdoor triggers to remain effective in the presence of input variation. Building upon the concept of backdoor exclusivity, we propose Backdoor Exclusivity LifTing (BELT), a novel technique which suppresses the association between the backdoor and fuzzy triggers to enhance backdoor exclusivity for defense evasion. Extensive evaluation on three popular backdoor benchmarks validate, our approach substantially enhances the stealthiness of four old-school backdoor attacks, which, after backdoor exclusivity lifting, is able to evade seven state-of-the-art backdoor countermeasures, at almost no cost of the attack success rate and normal utility. For example, one of the earliest backdoor attacks BadNet, enhanced by BELT, evades most of the state-of-the-art defenses including ABS and MOTH which would otherwise recognize the backdoored model.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646881/](https://ieeexplore.ieee.org/document/10646881/)
## Formal Model-Driven Analysis of Resilience of GossipSub to Attacks from Misbehaving Peers.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#formal-model-driven-analysis-of-resilience-of-gossipsub-to-attacks-from-misbehaving-peers)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#formal-model-driven-analysis-of-resilience-of-gossipsub-to-attacks-from-misbehaving-peers)
### Authors
* Ankit Kumar, Northeastern University, Boston, MA, USA
* Max von Hippel, Northeastern University, Boston, MA, USA
* Panagiotis Manolios, Northeastern University, Boston, MA, USA
* Cristina Nita-Rotaru, Northeastern University, Boston, MA, USA
### Abstract
> GossipSub is a new peer-to-peer communication protocol designed to counter attacks from misbehaving peers by controlling what information is sent and to whom, via a score function computed by each peer that captures positive and negative behaviors of its neighbors. The score function depends on several parameters (weights, caps, thresholds) that can be configured by applications using GossipSub. The specification for GossipSub is written in English and its resilience to attacks from misbehaving peers is supported empirically by emulation testing using an implementation in Golang.In this work we take a foundational approach to understanding the resilience of GossipSub to attacks from misbehaving peers. We build the first formal model of GossipSub, using the ACL2s theorem prover. Our model is officially endorsed by the GossipSub developers. It can simulate GossipSub networks of arbitrary size and topology, with arbitrarily configured peers, and can be used to prove and disprove theorems about the protocol. We formalize fundamental security properties stating that the score function is fair, penalizes bad behavior, and rewards good behavior. We prove that the score function is always fair, but can be configured in ways that either penalize good behavior or ignore bad behavior. Using our model, we run GossipSub with the specific configurations for two popular real-world applications: the FileCoin and Eth2.0 blockchains. We show that all properties hold for FileCoin. However, given any Eth2.0 network (of any topology and size) with any number of potentially misbehaving peers, we can synthesize attacks where these peers are able to continuously misbehave by never forwarding topic messages, while maintaining positive scores so that they are never pruned from the network by GossipSub.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646739/](https://ieeexplore.ieee.org/document/10646739/)
## Larger-scale Nakamoto-style Blockchains Don't Necessarily Offer Better Security.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#larger-scale-nakamoto-style-blockchains-dont-necessarily-offer-better-security)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#larger-scale-nakamoto-style-blockchains-dont-necessarily-offer-better-security)
### Authors
* Jannik Albrecht, Ruhr University, Bochum
* Sebastien Andreina, NEC Labs Europe, Germany
* Frederik Armknecht, University of Mannheim, Germany
* Ghassan Karame, Ruhr University, Bochum
* Giorgia Marson, NEC Labs Europe, Germany
* Julian Willingmann, Ruhr University, Bochum
### Abstract
> Extensive research on Nakamoto-style consensus protocols has shown that network delays degrade the security of these protocols. Established results indicate that, perhaps surprisingly, maximal security is achieved when the network is as small as two nodes due to increased delays in larger networks. This contradicts the very foundation of blockchains, namely that decentralization improves security.In this paper, we take a closer look at how the network scale affects security of Nakamoto-style blockchains. We argue that a crucial aspect has been neglected in existing security models: the larger the network, the harder it is for an attacker to control a significant amount of power. To this end, we introduce a probabilistic corruption model to express the increasing difficulty for an attacker to corrupt resources in larger networks. Based on our model, we analyze the impact of the number of nodes on the (maximum) network delay and the fraction of adversarial power. In particular, we show that (1) increasing the number of nodes eventually violates security, but (2) relying on a small number of nodes does not provide decent security provisions either. We then validate our analysis by means of an empirical evaluation emulating hundreds of thousands of nodes in deployments such as Bitcoin, Monero, Cardano, and Ethereum Classic. Based on our empirical analysis, we concretely analyze the impact of various real-world parameters and configurations on the consistency bounds in existing deployments and on the adversarial power that can be tolerated while providing security. As far as we are aware, this is the first work that analytically and empirically explores the real-world tradeoffs achieved by current popular Nakamoto-style deployments.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646744/](https://ieeexplore.ieee.org/document/10646744/)
## Nurgle: Exacerbating Resource Consumption in Blockchain State Storage via MPT Manipulation.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#nurgle-exacerbating-resource-consumption-in-blockchain-state-storage-via-mpt-manipulation)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#nurgle-exacerbating-resource-consumption-in-blockchain-state-storage-via-mpt-manipulation)
### Authors
* Zheyuan He, University of Electronic Science and Technology of China
* Zihao Li, The Hong Kong Polytechnic University
* Ao Qiao, University of Electronic Science and Technology of China
* Xiapu Luo, The Hong Kong Polytechnic University
* Xiaosong Zhang, University of Electronic Science and Technology of China
* Ting Chen, University of Electronic Science and Technology of China
* Shuwei Song, University of Electronic Science and Technology of China
* Dijun Liu, Ant Group
* Weina Niu, University of Electronic Science and Technology of China
### Abstract
> Blockchains, with intricate architectures, encompass various components, e.g., consensus network, smart contracts, decentralized applications, and auxiliary services. While offering numerous advantages, these components expose various attack surfaces, leading to severe threats to blockchains. In this study, we unveil a novel attack surface, i.e., the state storage, in blockchains. The state storage, based on the Merkle Patricia Trie, plays a crucial role in maintaining blockchain state. Besides, we design Nurgle, the first Denial-of-Service attack targeting the state storage. By proliferating intermediate nodes within the state storage, Nurgle forces blockchains to expend additional resources on state maintenance and verification, impairing their performance. We conduct a comprehensive and systematic evaluation of Nurgle, including the factors affecting it, its impact on blockchains, its financial cost, and practically demonstrating the resulting damage to blockchains. The implications of Nurgle extend beyond the performance degradation of blockchains, potentially reducing trust in them and the value of their cryptocurrencies. Additionally, we further discuss three feasible mitigations against Nurgle. At the time of writing, the vulnerability exploited by Nurgle has been confirmed by six mainstream blockchains, and we received thousands of USD bounty from them.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646826/](https://ieeexplore.ieee.org/document/10646826/)
## Nyx: Detecting Exploitable Front-Running Vulnerabilities in Smart Contracts.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#nyx-detecting-exploitable-front-running-vulnerabilities-in-smart-contracts)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#nyx-detecting-exploitable-front-running-vulnerabilities-in-smart-contracts)
### Authors
* Wuqi Zhang, The Hong Kong University of Science and Technology
* Zhuo Zhang, Purdue University
* Qingkai Shi, Purdue University
* Lu Liu, The Hong Kong University of Science and Technology
* Lili Wei, McGill University
* Yepang Liu, Southern University of Science and Technology
* Xiangyu Zhang, Purdue University
* Shing-Chi Cheung, The Hong Kong University of Science and Technology
### Abstract
> Smart contracts are susceptible to front-running attacks, in which malicious users leverage prior knowledge of upcoming transactions to execute attack transactions in advance and benefit their own portfolios. Existing contract analysis techniques raise a number of false positives and false negatives in that they simplistically treat data races in a contract as front-running vulnerabilities and can only analyze contracts in isolation. In this work, we formalize the definition of exploitable front-running vulnerabilities based on previous empirical studies on historical attacks, and present Nyx, a novel static analyzer to detect them. Nyx features a Datalog-based preprocessing procedure that efficiently and soundly prunes a large part of the search space, followed by a symbolic validation engine that precisely locates vulnerabilities with an SMT solver. We evaluate Nyx using a large dataset that comprises 513 real-world front-running attacks in smart contracts. Compared to six state-of-the-art techniques, Nyx surpasses them by 32.64%-90.19% in terms of recall and 2.89%-70.89% in terms of precision. Nyx has also identified four zero-days in real-world smart contracts.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646603/](https://ieeexplore.ieee.org/document/10646603/)
## SmartInv: Multimodal Learning for Smart Contract Invariant Inference.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#smartinv-multimodal-learning-for-smart-contract-invariant-inference)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#smartinv-multimodal-learning-for-smart-contract-invariant-inference)
### Authors
* Sally Junsong Wang, Columbia University, NY
* Kexin Pei, Columbia University, NY; The University of Chicago, IL
* Junfeng Yang, Columbia University, NY
### Abstract
> Smart contracts are software programs that enable diverse business activities on the blockchain. Recent research has identified new classes of "machine un-auditable" bugs that arise from source code not meeting underlying transaction contexts. Existing detection methods require human understanding of underlying transaction logic and manual reasoning across different sources of context (i.e., modalities), such as code and natural language specifying the expected transaction behavior.To automate the detection of "machine un-auditable" bugs, we present SmartInv, an accurate and fast smart contract invariant inference framework. Our key insight is that the expected behavior of smart contracts, as specified by invariants, relies on understanding and reasoning across multimodal information, such as source code and natural language. We propose a new finetuning and prompting strategy to foundation models, Tier of Thought (ToT), to reason across multiple modalities of smart contracts and to generate invariants. SmartInv then localizes potential vulnerabilities by checking the violation of those generated invariants.We evaluate SmartInv on real-world smart contract bugs that resulted in financial losses over the past 2.5 years (from January 1, 2021 to May 31, 2023). Extensive evaluation shows that SmartInv can generate useful invariants to effectively localize "machine un-auditable" bugs, from which SmartInv uncovers 119 zero-day bugs. We sampled eight bugs and reported them to the respective developers. Six vulnerabilities were quickly fixed by the developers, five of which are confirmed as "high severity."

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646885/](https://ieeexplore.ieee.org/document/10646885/)
## Pulling Off The Mask: Forensic Analysis of the Deceptive Creator Wallets Behind Smart Contract Fraud.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#pulling-off-the-mask-forensic-analysis-of-the-deceptive-creator-wallets-behind-smart-contract-fraud)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#pulling-off-the-mask-forensic-analysis-of-the-deceptive-creator-wallets-behind-smart-contract-fraud)
### Authors
* Mingxuan Yao, Georgia Institute of Technology
* Runze Zhang, Georgia Institute of Technology
* Haichuan Xu, Georgia Institute of Technology
* Shih-Huan Chou, Georgia Institute of Technology
* Varun Chowdhary Paturi, Georgia Institute of Technology
* Amit Kumar Sikder, Georgia Institute of Technology
* Brendan Saltaformaggio, Georgia Institute of Technology
### Abstract
> Criminals, using crypto wallets referred to as Deceptive Creator Wallets (DCWs), have orchestrated fraudulent activities by luring victims to transfer funds to fraud smart contracts. Since it is almost impossible to reverse the transactions or pinpoint the true identity of the criminals, the industry has turned to flagging such contracts as user warnings. However, current mitigation efforts focus on individual contracts, overlooking the DCWs behind the scenes. Consequently, our research found that this oversight allows fraud to thrive. To address this, we developed CoCo, an automated forensic analysis pipeline that processes a single fraud contract and generates evidence that the legal authorities need to mitigate the fraud. Applying CoCo to 157 confirmed fraud contracts, our research uncovered 1,283,198 associated contracts linked to 91 DCWs, responsible for 2,638,752 ETH ($2,089,504,682) in illicit profits. More alarmingly, CoCo traces the fraudulent activities back to September 2017. In response, we are closely collaborating with Etherscan and the FBI to combat the fraud identified in our study.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646813/](https://ieeexplore.ieee.org/document/10646813/)
## Towards Smart Contract Fuzzing on GPUs.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#towards-smart-contract-fuzzing-on-gpus)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#towards-smart-contract-fuzzing-on-gpus)
### Authors
* Weimin Chen, The Hong Kong Polytechnic University, China
* Xiapu Luo, The Hong Kong Polytechnic University, China
* Haipeng Cai, Washington State University, United States
* Haoyu Wang, Huazhong University of Science and Technology, China
### Abstract
> Fuzzing is one of the major techniques for uncovering vulnerabilities in smart contracts. The effectiveness of fuzzing is significantly affected by its throughput but unfortunately existing fuzzers for smart contracts have low throughput due to the slow execution of EVM, the delay introduced by the consensus protocols, the limited parallelization capability of CPUs, and the overhead caused by the instrumented EVM. To tackle this critical issue, in this paper, we take the first step to leverage GPU’s parallel computing power to boost the throughput of smart contract fuzzing. More precisely, by converting the fuzzing workload to a SIMD task, we can activate thousands of GPU cores to test the smart contract simultaneously. To achieve this purpose, we design new solutions to address three major challenges, namely developing incremental storage to reduce GPU memory cost, proposing a stateful bitmap to embed transaction dependency to the feedback metric, and designing a parallel feedback algorithm to rule out undesired seeds that cause redundant overlaps. We implement a prototype named Mau, which first transforms the bytecode of a smart contract to a SIMD application in PTX assembly and then runs it parallelly on the GPU. We evaluate Mau using both a large and small benchmark. The experimental results demonstrate that the throughput of Mau reaches 162.37K execs/sec and 328.06K execs/sec, which leads to an 8.69-15.38X improvement to the state-of-the-art tool. Moreover, the high throughput empowers Mau to detect 1.01-2.50X more bugs and obtain 1.03–4.71X more code coverage than baselines.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646637/](https://ieeexplore.ieee.org/document/10646637/)
## Large-Scale Study of Vulnerability Scanners for Ethereum Smart Contracts.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#large-scale-study-of-vulnerability-scanners-for-ethereum-smart-contracts)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#large-scale-study-of-vulnerability-scanners-for-ethereum-smart-contracts)
### Authors
* Christoph Sendner, University of Würzburg, Germany
* Lukas Petzi, University of Würzburg, Germany
* Jasper Stang, University of Würzburg, Germany
* Alexandra Dmitrienko, University of Würzburg, Germany
### Abstract
> Ethereum smart contracts, which are autonomous decentralized applications on the blockchain that manage assets often exceeding millions of dollars, have become primary targets for cyberattacks. In 2023 alone, such vulnerabilities led to substantial financial losses exceeding a billion US dollars. To counter these threats, various tools have been developed by academic and commercial entities to detect and mitigate vulnerabilities in smart contracts. Our study investigates the gap between the effectiveness of existing security scanners and the vulnerabilities that still persist in practice. We compiled four distinct datasets for this analysis. The first dataset comprises 77,219 source codes extracted directly from the blockchain, while the second includes over 4 million bytecodes obtained from Ethereum Mainnet and testnets. The other two datasets consist of nearly 14,000 manually annotated smart contracts and 373 smart contracts verified through audits, providing a foundation for a rigorous ground truth analysis on bytecode and source code. Using the unlabeled datasets, we conducted a comprehensive quantitative evaluation of 18 vulnerability scanners, revealing considerable discrepancies in their findings. Our analysis of the ground truth datasets indicated poor performance across all the tools we tested. This study unveils the reasons for poor performance and underscores that the current state of the art for smart contract security falls short in effectively addressing open problems, highlighting that the challenge of effectively detecting vulnerabilities remains a significant and unresolved issue.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646883/](https://ieeexplore.ieee.org/document/10646883/)
## Who Left the Door Open? Investigating the Causes of Exposed IoT Devices in an Academic Network.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#who-left-the-door-open-investigating-the-causes-of-exposed-iot-devices-in-an-academic-network)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#who-left-the-door-open-investigating-the-causes-of-exposed-iot-devices-in-an-academic-network)
### Authors
* Takayuki Sasaki, Yokohama National University
* Takaya Noma, Yokohama National University
* Yudai Morii, Yokohama National University
* Toshiya Shimura, Yokohama National University
* Michel van Eeten, Yokohama National University; TU Delft
* Katsunari Yoshioka, Yokohama National University
* Tsutomu Matsumoto, Yokohama National University
### Abstract
> Many studies have discovered internet-facing systems exposing services that are vulnerable to attack. These are often assumed to be misconfigured systems that are not meant to expose these services to the network, especially not in an enterprise network. In this study, we clarify the causes of the presence of IoT devices exposing Telnet and FTP in a university enterprise network. This also helps us to understand who is responsible. We scanned the network and found 185 IoT devices consisting of 30 device models exposing Telnet and 49 models exposing FTP. We sent out a security notification and a survey to device owners. The survey demonstrated that 2 out of 21 and 8 out of 41 owners intentionally enabled Telnet and FTP, respectively, on all their devices. After receiving the notification, 38 out of 47 owners said they were willing to take measures on at least one of their IoT devices. All except one of the devices of these willing owners were successfully remediated. When we investigated the manuals of the devices, we were able to confirm that there was no disclosure whatsoever of the exposed service in 15 out of 30 manuals for models with Telnet and 10 out of 49 manuals for models with FTP. We also confirmed, by combining a survey of the manufacturers with the device manuals, that 22 out of 30 and 29 out of 49 devices enabled Telnet and FTP by default, respectively. From the above results, we conclude that the presence of misconfigured devices was less driven by human errors of the owners and more by the choices of the manufacturers. The majority of owners were motivated to remediate the security risks once made aware of them.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646731/](https://ieeexplore.ieee.org/document/10646731/)
## SyzTrust: State-aware Fuzzing on Trusted OS Designed for IoT Devices.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#syztrust-state-aware-fuzzing-on-trusted-os-designed-for-iot-devices)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#syztrust-state-aware-fuzzing-on-trusted-os-designed-for-iot-devices)
### Authors
* Qinying Wang, Zhejiang University; EPFL
* Boyu Chang, Zhejiang University
* Shouling Ji, Zhejiang University
* Yuan Tian, University of California, Los Angelos
* Xuhong Zhang, Zhejiang University
* Binbin Zhao, Georgia Institute of Technology
* Gaoning Pan, Zhejiang University
* Chenyang Lyu, Zhejiang University
* Mathias Payer, EPFL
* Wenhai Wang, Zhejiang University
* Raheem Beyah, Georgia Institute of Technology
### Abstract
> Trusted Execution Environments (TEEs) embedded in IoT devices provide a deployable solution to secure IoT applications at the hardware level. By design, in TEEs, the Trusted Operating System (Trusted OS) is the primary component. It enables the TEE to use security-based design techniques, such as data encryption and identity authentication. Once a Trusted OS has been exploited, the TEE can no longer ensure security. However, Trusted OSes for IoT devices have received little security analysis, which is challenging from several perspectives: (1) Trusted OSes are closed-source and have an unfavorable environment for sending test cases and collecting feedback. (2) Trusted OSes have complex data structures and require a stateful workflow, which limits existing vulnerability detection tools.To address the challenges, we present SyzTrust, the first state-aware fuzzing framework for vetting the security of resource-limited Trusted OSes. SyzTrust adopts a hardware-assisted framework to enable fuzzing Trusted OSes directly on IoT devices as well as tracking state and code coverage non-invasively. SyzTrust utilizes composite feedback to guide the fuzzer to effectively explore more states as well as to increase the code coverage. We evaluate SyzTrust on Trusted OSes from three major vendors: Samsung, Tsinglink Cloud, and Ali Cloud. These systems run on Cortex M23/33 MCUs, which provide the necessary abstraction for embedded TEEs. We discovered 70 previously unknown vulnerabilities in their Trusted OSes, receiving 10 new CVEs so far. Furthermore, compared to the baseline, SyzTrust has demonstrated significant improvements, including 66% higher code coverage, 651% higher state coverage, and 31% improved vulnerability-finding capability. We report all discovered new vulnerabilities to vendors and open source SyzTrust.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646675/](https://ieeexplore.ieee.org/document/10646675/)
## A Systematic Study of Physical Sensor Attack Hardness.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#a-systematic-study-of-physical-sensor-attack-hardness)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#a-systematic-study-of-physical-sensor-attack-hardness)
### Authors
* Hyungsub Kim, Purdue University
* Rwitam Bandyopadhyay, Purdue University
* Muslum Ozgur Ozmen, Purdue University
* Z. Berkay Celik, Purdue University
* Antonio Bianchi, Purdue University
* Yongdae Kim, KAIST
* Dongyan Xu, Purdue University
### Abstract
> Physical sensor attacks against robotic vehicles (RV) have become a serious concern due to their prevalence and potential physical threat. However, RV software developers often do not deploy appropriate countermeasures. This hesitance stems from their belief that attackers face substantial challenges when conducting sensor attacks, e.g., nullifying sensor redundancy in hardware and circumventing sensor filters in software. Yet, we discover that attackers can overcome the challenges by fulfilling specific prerequisites and finely tuning attack parameters. The misconceptions that the developers have arisen from a lack of study regarding the level of difficulty attackers face in successfully achieving their attack goals, which we call "attack hardness".In this paper, we examine the hardness of 12 well-known sensor attacks. We first identify the prerequisites required to conduct the attacks successfully. We then quantify the hardness of each attack as how frequent the prerequisites enabling a specific attack are in the real world. To automate this analysis, we introduce RVPROBER, an attack prerequisite analysis framework. RVPROBER discovered that the 12 sensor attacks require, on average, 4.4 prerequisites, highlighting that previous literature has often missed important details required to perform these attacks. By satisfying the identified prerequisites and tuning attack parameters, we increased the number of successful attacks from 6 to 11. Moreover, our analysis showed that an average of 57.08% of actual RV users are vulnerable to sensor attacks. Finally, starting from the identified prerequisites, we analyzed the reasons behind the success of each attack and found previously-unknown root causes, such as design flaws in the RV software’s fail-safe logic.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646778/](https://ieeexplore.ieee.org/document/10646778/)
## Revisiting Automotive Attack Surfaces: a Practitioners' Perspective.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#revisiting-automotive-attack-surfaces-a-practitioners-perspective)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#revisiting-automotive-attack-surfaces-a-practitioners-perspective)
### Authors
* Pengfei Jing, Department of Computing, The Hong Kong Polytechnic University
* Zhiqiang Cai, Keen Security Lab, Tencent
* Yingjie Cao, Department of Computing, The Hong Kong Polytechnic University
* Le Yu, Department of Computing, The Hong Kong Polytechnic University
* Yuefeng Du, Keen Security Lab, Tencent
* Wenkai Zhang, Keen Security Lab, Tencent
* Chenxiong Qian, Department of Computer Science, University of Hong Kong
* Xiapu Luo, Department of Computing, The Hong Kong Polytechnic University
* Sen Nie, Keen Security Lab, Tencent
* Shi Wu, Keen Security Lab, Tencent
### Abstract
> As modern vehicles become increasingly complex in terms of both external attack surfaces and internal in-vehicle network (IVN) topology, ensuring their cybersecurity remains a challenge. Existing standards and regulations, such as WP29 R155e and ISO 21434, attempt to establish a baseline for automotive cybersecurity, but their sufficiency in addressing the evolving threats is unclear. To fill in this gap, we first carried out an in-depth interview study with 15 experts in automotive cybersecurity, uncovering the particular challenges encountered during security activities and the limitations of current regulations. We identified 20 key insights from the interview data, ranging from the challenges and gaps in the existing automotive security industry to the limitations and recommendations for current regulations. Notably, we discovered that the quality of threat cases provided by existing regulations is unsatisfactory, and the Threat Analysis and Risk Assessment (TARA) process is often highly inefficient due to the lack of automatic tools. In response to the above limitations, we first built an improved threat database for automotive systems using the collected interview data, which enhanced the existing database both quantitatively and qualitatively. Additionally, we present CarVal, a datalog-based approach designed to infer multi-stage attack paths in IVNs and calculate risk values, thereby making TARA more efficient for automotive systems. By applying CarVal to five real vehicles, we performed extensive security analysis based on the generated attack paths and successfully exploited the corresponding attack chains in the newly gateway-segmented IVN, uncovering new automotive attack surfaces that previous research failed to cover, including the in-vehicle browser, official mobile app, backend server, and in-vehicle malware.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646688/](https://ieeexplore.ieee.org/document/10646688/)
## From Virtual Touch to Tesla Command: Unlocking Unauthenticated Control Chains From Smart Glasses for Vehicle Takeover.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#from-virtual-touch-to-tesla-command-unlocking-unauthenticated-control-chains-from-smart-glasses-for-vehicle-takeover)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#from-virtual-touch-to-tesla-command-unlocking-unauthenticated-control-chains-from-smart-glasses-for-vehicle-takeover)
### Authors
* Xingli Zhang, University of Louisiana at Lafayette
* Yazhou Tu, Auburn University
* Yan Long, University of Michigan
* Liqun Shan, University of Louisiana at Lafayette; University of Pennsylvania
* Mohamed A Elsaadani, University of Louisiana at Lafayette
* Kevin Fu, Northeastern University
* Zhiqiang Lin, The Ohio State University
* Xiali Hei, University of Louisiana at Lafayette; University of Pennsylvania
### Abstract
> This paper studies vulnerabilities at the intersection of wearable devices and automated control systems. Particularly, we focus on exploiting smart glasses as an entry point and unveil the threats of taking over security-critical automated control chains without user verification or interaction. These vulnerabilities can be especially pertinent in scenarios where security mechanisms only depend on entry point security with minimal user verification (relying on complete trust over previous nodes in automated control chains). We have validated the effects of our attacks on real-world systems (e.g., Tesla vehicles) that are controlled by software and automation tools such as Apple Shortcuts or IFTTT. We show how our contactless, speaker-independent, and electromagnetic interference based attacks can control functionalities such as unlocking doors and initiating remote start of Tesla vehicles, even though the victim’s phone is in a lock-screen status. Our findings not only demonstrate the potential for unauthorized control over automated, connected systems but also highlight the urgent need for more robust security measures in the integration of wearable technology with broader automation frameworks.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646868/](https://ieeexplore.ieee.org/document/10646868/)
## MQTTactic: Security Analysis and Verification for Logic Flaws in MQTT Implementations.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#mqttactic-security-analysis-and-verification-for-logic-flaws-in-mqtt-implementations)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#mqttactic-security-analysis-and-verification-for-logic-flaws-in-mqtt-implementations)
### Authors
* Bin Yuan, School of Cyber Science and Engineering, Huazhong University of Science and Technology, China; Indiana University Bloomington, USA
* Zhanxiang Song, School of Cyber Science and Engineering, Huazhong University of Science and Technology, China; Indiana University Bloomington, USA
* Yan Jia, DISSec, College of Cyber Science, Nankai Uniersity, China
* Zhenyu Lu, School of Cyber Science and Engineering, Huazhong University of Science and Technology, China
* Deqing Zou, School of Cyber Science and Engineering, Huazhong University of Science and Technology, China
* Hai Jin, School of Computer Science and Technology, Huazhong University of Science and Technology, China
* Luyi Xing, Indiana University Bloomington, USA
### Abstract
> IoT messaging protocols are critical to connecting users and IoT devices. Among all the protocols, the Message Queuing and Telemetry Transport (MQTT) is arguably the most widely used. Mainstream IoT platforms leverage MQTT brokers, server side implementation of MQTT, to enable and mediate user-device communication (e.g., the transmission of control commands). There are over 70 open-source MQTT brokers, which have been widely adopted in production. Any security defects in those open-source MQTT brokers easily get into many vendors’ IoT deployments with amplified impacts, inevitably endangering the security of IoT applications and millions of users. We report the first systematic security analysis of open-source MQTT brokers in the wild. To enable the analysis, we designed and developed MQTTactic, a semi-automatic tool that can formally verify MQTT broker implementations based on generated security properties. MQTTactic is based on static code analysis, formal modeling, and automated model checking (with off-the-shelf model checker Spin). In designing MQTTactic, we characterize and address key technical challenges. MQTTactic currently focuses on authorization-related properties, and discovered 7 novel, zero-day flaws practically enabling serious, unauthorized access. We reported all flaws to related parties, who acknowledged the issues and have been taking actions to fix them. Our thorough evaluation shows that MQTTactic is effective and practical.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646678/](https://ieeexplore.ieee.org/document/10646678/)
## Wear's my Data? Understanding the Cross-Device Runtime Permission Model in Wearables.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#wears-my-data-understanding-the-cross-device-runtime-permission-model-in-wearables)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#wears-my-data-understanding-the-cross-device-runtime-permission-model-in-wearables)
### Authors
* Doguhan Yeke, Purdue University
* Muhammad Ibrahim, Purdue University
* Güliz Seray Tuncay, Google
* Habiba Farrukh, Purdue University; University of California, Irvine
* Abdullah Imran, Purdue University
* Antonio Bianchi, Purdue University
* Z. Berkay Celik, Purdue University
### Abstract
> Wearable devices are becoming increasingly important, helping us stay healthy and connected. There are a variety of app-based wearable platforms that can be used to manage these devices. The apps on wearable devices often work with a companion app on users’ smartphones. The wearable device and the smartphone typically use two separate permission models that work synchronously to protect sensitive data. However, this design creates an opaque view of the management of permission-protected data, resulting in over-privileged data access without the user’s explicit consent. In this paper, we performed the first systematic analysis of the interaction between the Android and Wear OS permission models. Our analysis is two-fold. First, through taint analysis, we showed that cross-device flows of permission-protected data happen in the wild, demonstrating that 28 apps (out of the 150 we studied) on Google Play have sensitive data flows between the wearable app and its companion app. We found that these data flows occur without the users’ explicit consent, introducing the risk of violating user expectations. Second, we conducted an in-lab user study to assess users’ understanding of permissions when subject to cross-device communication (n = 63). We found that 66.7% of the users are unaware of the possibility of cross-device sensitive data flows, which impairs their understanding of permissions in the context of wearable devices and puts their sensitive data at risk. We also showed that users are vulnerable to a new class of attacks that we call cross-device permission phishing attacks on wearable devices. Lastly, we performed a preliminary study on other watch platforms (i.e., Apple’s watchOS, Fitbit, Garmin OS) and found that all these platforms suffer from similar privacy issues. As countermeasures for the potential privacy violations in cross-device apps, we suggest improvements in the system prompts and the permission model to enable users to make better-informed decisions, as well as on app markets to identify malicious cross-device data flows.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646680/](https://ieeexplore.ieee.org/document/10646680/)
## Video-Based Cryptanalysis: Extracting Cryptographic Keys from Video Footage of a Device's Power LED Captured by Standard Video Cameras.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#video-based-cryptanalysis-extracting-cryptographic-keys-from-video-footage-of-a-devices-power-led-captured-by-standard-video-cameras)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#video-based-cryptanalysis-extracting-cryptographic-keys-from-video-footage-of-a-devices-power-led-captured-by-standard-video-cameras)
### Authors
* Ben Nassi, Cornell Tech, New York, USA; Ben-Gurion University of the Negev, Beersheba, Israel
* Etay Iluz, Ben-Gurion University of the Negev, Beersheba, Israel
* Or Cohen, Ben-Gurion University of the Negev, Beersheba, Israel
* Ofek Vayner, Ben-Gurion University of the Negev, Beersheba, Israel
* Dudi Nassi, Ben-Gurion University of the Negev, Beersheba, Israel
* Boris Zadov, Ben-Gurion University of the Negev, Beersheba, Israel
* Yuval Elovici, Ben-Gurion University of the Negev, Beersheba, Israel
### Abstract
> In this paper, we present video-based cryptanalysis, a new method used to recover secret keys from a device by analyzing video footage of a device’s power LED. We show that cryptographic computations performed by the CPU change the power consumption of the device which affects the brightness of the device’s power LED. Based on this observation, we demonstrate how attackers can exploit commercial video cameras (e.g., an iPhone 13’s camera or Internet-connected security camera) to recover secret keys from devices. This is done by obtaining video footage of a device’s power LED (in which the frame is filled with the power LED) and exploiting the video camera’s rolling shutter to increase the sampling rate by three orders of magnitude from the frames per second (FPS) rate (60 measurements per second) to the rolling shutter speed (60K measurements per second in the iPhone 13 Pro Max). The frames of the video footage of the device’s power LED are analyzed in the RGB space, and the associated RGB values are used to recover the secret key by inferring the device’s power consumption from the RGB values. We demonstrate the application of video-based cryptanalysis by performing two side-channel cryptanalytic timing attacks and recover: (1) a 256-bit ECDSA key from a smart card by analyzing video footage of the power LED of a smart card reader obtained by a hijacked Internet-connected security camera located 16 meters away from the smart card reader, and (2) a 378-bit SIKE key from a Samsung Galaxy S8 by analyzing video footage of the power LED of Logitech Z120 USB speakers that were connected to the same USB hub used to charge the Galaxy S8 obtained by an iPhone 13 Pro Max’s camera. We also discuss countermeasures, limitations, and the future of video-based cryptanalysis in light of the expected improvements in video camera specifications.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646886/](https://ieeexplore.ieee.org/document/10646886/)
## SoK: Explainable Machine Learning in Adversarial Environments.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#sok-explainable-machine-learning-in-adversarial-environments)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#sok-explainable-machine-learning-in-adversarial-environments)
### Authors
* Maximilian Noppel, KASTEL Security Research Labs, Karlsruhe Institute of Technology, Germany
* Christian Wressnegger, KASTEL Security Research Labs, Karlsruhe Institute of Technology, Germany
### Abstract
> Modern deep learning methods have long been considered black boxes due to the lack of insights into their decision-making process. However, recent advances in explainable machine learning have turned the tables. Post-hoc explanation methods enable precise relevance attribution of input features for otherwise opaque models such as deep neural networks. This progression has raised expectations that these techniques can uncover attacks against learning-based systems such as adversarial examples or neural backdoors. Unfortunately, current methods are not robust against manipulations themselves. In this paper, we set out to systematize attacks against post-hoc explanation methods to lay the groundwork for developing more robust explainable machine learning. If explanation methods cannot be misled by an adversary, they can serve as an effective tool against attacks, marking a turning point in adversarial machine learning. We present a hierarchy of explanation-aware robustness notions and relate existing defenses to it. In doing so, we uncover synergies, research gaps, and future directions toward more reliable explanations robust against manipulations.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646794/](https://ieeexplore.ieee.org/document/10646794/)
## GrOVe: Ownership Verification of Graph Neural Networks using Embeddings.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#grove-ownership-verification-of-graph-neural-networks-using-embeddings)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#grove-ownership-verification-of-graph-neural-networks-using-embeddings)
### Authors
* Asim Waheed, University of Waterloo
* Vasisht Duddu, University of Waterloo
* N. Asokan, University of Waterloo; Aalto University
### Abstract
> Graph neural networks (GNNs) have emerged as a state-of-the-art approach to model and draw inferences from large scale graph-structured data in various application settings such as social networking. The primary goal of a GNN is to learn an embedding for each graph node in a dataset that encodes both the node features and the local graph structure around the node.Prior work has shown that GNNs are prone to model extraction attacks. Model extraction attacks and defenses have been explored extensively in other non-graph settings. While detecting or preventing model extraction appears to be difficult, deterring them via effective ownership verification techniques offer a potential defense. In non-graph settings, fingerprinting models, or the data used to build them, have shown to be a promising approach toward ownership verification.We present GrOVe, a state-of-the-art GNN model fingerprinting scheme that, given a target model and a suspect model, can reliably determine if the suspect model was trained independently of the target model or if it is a surrogate of the target model obtained via model extraction. We show that GrOVe can distinguish between surrogate and independent models even when the independent model uses the same training dataset and architecture as the original target model.Using six benchmark datasets and three model architectures, we show that GrOVe consistently achieves low falsepositive and false-negative rates. We demonstrate that GrOVe is robust against known fingerprint evasion techniques while remaining computationally efficient.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646643/](https://ieeexplore.ieee.org/document/10646643/)
## Revisiting Black-box Ownership Verification for Graph Neural Networks.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#revisiting-black-box-ownership-verification-for-graph-neural-networks)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#revisiting-black-box-ownership-verification-for-graph-neural-networks)
### Authors
* Ruikai Zhou, University of Utah
* Kang Yang, University of Utah
* Xiuling Wang, Stevens Insititute of Technology
* Wendy Hui Wang, Stevens Insititute of Technology
* Jun Xu, University of Utah
### Abstract
> Graph Neural Networks (GNNs) have emerged as powerful tools for processing graph-structured data, enabling applications in various domains. Yet, GNNs are vulnerable to model extraction attacks, imposing risks to intellectual property. To mitigate model extraction attacks, model ownership verification is considered an effective method. However, throughout a series of empirical studies, we found that the existing GNN ownership verification methods either mandate unrealistic conditions or present unsatisfactory accuracy under the most practical settings—the black-box setting where the verifier only requires access to the final output (e.g., posterior probability) of the target model and the suspect model.Inspired by the studies, we propose a new, black-box GNN ownership verification method that involves local independent models and shadow surrogate models to train a classifier for performing ownership verification. Our method boosts the verification accuracy by exploiting two insights: (1) We consider the overall behaviors of the target model for decision-making, better utilizing its holistic fingerprinting; (2) We enrich the fingerprinting of the target model by masking a subset of features of its training data, injecting extra information to facilitate ownership verification.To assess the effectiveness of our proposed method, we perform an intensive series of evaluations with 5 popular datasets, 5 mainstream GNN architectures, and 16 different settings. Our method achieves nearly perfect accuracy with a marginal impact on the target model in all cases, significantly outperforming the existing methods and enlarging their practicality. We also demonstrate that our method maintains robustness against adversarial attempts to evade the verification.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646808/](https://ieeexplore.ieee.org/document/10646808/)
## CORELOCKER: Neuron-level Usage Control.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#corelocker-neuron-level-usage-control)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#corelocker-neuron-level-usage-control)
### Authors
* Zihan Wang, The University of Queensland, Australia; CSIRO’s Data61, Australia
* Zhongkui Ma, The University of Queensland, Australia
* Xinguo Feng, The University of Queensland, Australia
* Ruoxi Sun, CSIRO’s Data61, Australia
* Hu Wang, The University of Adelaide, Australia
* Minhui Xue, CSIRO’s Data61, Australia
* Guangdong Bai, The University of Queensland, Australia
### Abstract
> The growing complexity of deep neural network models in modern application domains necessitates a complex training process that involves extensive data, sophisticated design, and substantial computation. The trained model inherently encapsulates the intellectual property owned by the model developer (or the model owner). Consequently, safeguarding the model from unauthorized use by entities who obtain access to the model (or the model controllers), i.e., preserving the fundamental rights and proprietary interests of the model owner, has become a critical necessity.In this work, we propose CORELOCKER, employing the strategic extraction of a small subset of significant weights from the neural network. This subset serves as the access key to unlock the model’s complete capability. The extraction of the key can be customized to varying levels of utility that the model owner intends to release. Authorized users with the access key have full access to the model, while unauthorized users can have access to only part of its capability. We establish a formal foundation to underpin CORELOCKER, which provides crucial lower and upper bounds for the utility disparity between pre- and post-protected networks. We evaluate CORELOCKER using representative datasets such as Fashion-MNIST, CIFAR-10, and CIFAR-100, as well as real-world models including Vg-gNet, ResNet, and DenseNet. Our experimental results confirm its efficacy. We also demonstrate CORELOCKER’s resilience against advanced model restoration attacks based on fine-tuning and pruning.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646797/](https://ieeexplore.ieee.org/document/10646797/)
## MEA-Defender: A Robust Watermark against Model Extraction Attack.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#mea-defender-a-robust-watermark-against-model-extraction-attack)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#mea-defender-a-robust-watermark-against-model-extraction-attack)
### Authors
* Peizhuo Lv, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Hualong Ma, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Kai Chen, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Jiachen Zhou, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Shengzhi Zhang, Department of Computer Science, Metropolitan College, Boston University, USA
* Ruigang Liang, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Shenchen Zhu, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Pan Li, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Yingjun Zhang, Institute of Software, Chinese Academy of Sciences, China
### Abstract
> Recently, numerous highly-valuable Deep Neural Networks (DNNs) have been trained using deep learning algorithms. To protect the Intellectual Property (IP) of the original owners over such DNN models, backdoor-based watermarks have been extensively studied. However, most of such watermarks fail upon model extraction attack, which utilizes input samples to query the target model and obtains the corresponding outputs, thus training a substitute model using such input-output pairs. In this paper, we propose a novel watermark to protect IP of DNN models against model extraction, named MEA-Defender. In particular, we obtain the watermark by combining two samples from two source classes in the input domain and design a watermark loss function that makes the output domain of the watermark within that of the main task samples. Since both the input domain and the output domain of our watermark are indispensable parts of those of the main task samples, the watermark will be extracted into the stolen model along with the main task during model extraction. We conduct extensive experiments on four model extraction attacks, using five datasets and six models trained based on supervised learning and self-supervised learning algorithms. The experimental results demonstrate that MEA-Defender is highly robust against different model extraction attacks, and various watermark removal/detection approaches.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646835/](https://ieeexplore.ieee.org/document/10646835/)
## Securing Graph Neural Networks in MLaaS: A Comprehensive Realization of Query-based Integrity Verification.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#securing-graph-neural-networks-in-mlaas-a-comprehensive-realization-of-query-based-integrity-verification)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#securing-graph-neural-networks-in-mlaas-a-comprehensive-realization-of-query-based-integrity-verification)
### Authors
* Bang Wu, CSIRO’s Data61, Australia; Monash University, Australia
* Xingliang Yuan, Monash University, Australia
* Shuo Wang, Shanghai Jiao Tong University, China
* Qi Li, Tsinghua University, China
* Minhui Xue, CSIRO’s Data61, Australia
* Shirui Pan, Griffith University, Australia
### Abstract
> The deployment of Graph Neural Networks (GNNs) within Machine Learning as a Service (MLaaS) has opened up new attack surfaces and an escalation in security concerns regarding model-centric attacks. These attacks can directly manipulate the GNN model parameters during serving, causing incorrect predictions and posing substantial threats to essential GNN applications. Traditional integrity verification methods falter in this context due to the limitations imposed by MLaaS and the distinct characteristics of GNN models.In this research, we introduce a groundbreaking approach to protect GNN models in MLaaS from model-centric attacks. Our approach includes a comprehensive verification schema for GNN’s integrity, taking into account both transductive and inductive GNNs, and accommodating varying pre-deployment knowledge of the models. We propose a query-based verification technique, fortified with innovative node fingerprint generation algorithms. To deal with advanced attackers who know our mechanisms in advance, we introduce randomized fingerprint nodes within our design. The experimental evaluation demonstrates that our method can detect five representative adversarial model-centric attacks, displaying 2 to 4 times greater efficiency compared to baselines.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646777/](https://ieeexplore.ieee.org/document/10646777/)
## Sophon: Non-Fine-Tunable Learning to Restrain Task Transferability For Pre-trained Models.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#sophon-non-fine-tunable-learning-to-restrain-task-transferability-for-pre-trained-models)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#sophon-non-fine-tunable-learning-to-restrain-task-transferability-for-pre-trained-models)
### Authors
* Jiangyi Deng, Zhejiang University
* Shengyuan Pang, Zhejiang University
* Yanjiao Chen, Zhejiang University
* Liangming Xia, Zhejiang University
* Yijie Bai, Zhejiang University
* Haiqin Weng, Ant Group
* Wenyuan Xu, Zhejiang University
### Abstract
> Instead of building deep learning models from scratch, developers are more and more relying on adapting pre-trained models to their customized tasks. However, powerful pre-trained models may be misused for unethical or illegal tasks, e.g., privacy inference and unsafe content generation. In this paper, we introduce a pioneering learning paradigm, non-fine-tunable learning, which prevents the pre-trained model from being fine-tuned to indecent tasks while preserving its performance on the original task. To fulfill this goal, we propose Sophon, a protection framework that reinforces a given pre-trained model to be resistant to being fine-tuned in pre-defined restricted domains. Nonetheless, this is challenging due to a diversity of complicated fine-tuning strategies that may be adopted by adversaries. Inspired by model-agnostic meta-learning, we overcome this difficulty by designing sophisticated fine-tuning simulation and fine-tuning evaluation algorithms. In addition, we carefully design the optimization process to entrap the pre-trained model within a hard-to-escape local optimum regarding restricted domains. We have conducted extensive experiments on two deep learning modes (classification and generation), seven restricted domains, and six model architectures to verify the effectiveness of Sophon. Experiment results verify that fine-tuning Sophon-protected models incurs an overhead comparable to or even greater than training from scratch. Furthermore, we confirm the robustness of Sophon to three fine-tuning methods, five optimizers, various learning rates and batch sizes. Sophon may help boost further investigations into safe and responsible AI.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646821/](https://ieeexplore.ieee.org/document/10646821/)
## FLShield: A Validation Based Federated Learning Framework to Defend Against Poisoning Attacks.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#flshield-a-validation-based-federated-learning-framework-to-defend-against-poisoning-attacks)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#flshield-a-validation-based-federated-learning-framework-to-defend-against-poisoning-attacks)
### Authors
* Ehsanul Kabir, Penn State University
* Zeyu Song, Penn State University
* Md Rafi Ur Rashid, Penn State University
* Shagufta Mehnaz, Penn State University
### Abstract
> Federated learning (FL) is revolutionizing how we learn from data. With its growing popularity, it is now being used in many safety-critical domains such as autonomous vehicles and healthcare. Since thousands of participants can contribute in this collaborative setting, it is, however, challenging to ensure security and reliability of such systems. This highlights the need to design FL systems that are secure and robust against malicious participants’ actions while also ensuring high utility, privacy of local data, and efficiency. In this paper, we propose a novel FL framework dubbed as FLShield that utilizes benign data from FL participants to validate the local models before taking them into account for generating the global model. This is in stark contrast with existing defenses relying on server’s access to clean datasets—an assumption often impractical in real-life scenarios and conflicting with the fundamentals of FL. We conduct extensive experiments to evaluate our FLShield framework in different settings and demonstrate its effectiveness in thwarting various types of poisoning and backdoor attacks including a defense-aware one. FLShield also preserves privacy of local data against gradient inversion attacks.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646613/](https://ieeexplore.ieee.org/document/10646613/)
## Secure Messaging with Strong Compromise Resilience, Temporal Privacy, and Immediate Decryption.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#secure-messaging-with-strong-compromise-resilience-temporal-privacy-and-immediate-decryption)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#secure-messaging-with-strong-compromise-resilience-temporal-privacy-and-immediate-decryption)
### Authors
* Cas Cremers, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Mang Zhao, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### Abstract
> Recent years have seen many advances in designing secure messaging protocols, aiming at provably strong security properties in theory or high efficiency for real-world practical deployment. However, important trade-off areas of the design space inbetween these elements have not yet been explored.In this work we design the first provably secure protocol that at the same time achieves (i) strong resilience against fine-grained compromise, (ii) temporal privacy, and (iii) immediate decryption with constant-size overhead, notably, in the post-quantum (PQ) setting. Besides these main design goals, we introduce a novel definition of offline deniability suitable for our setting, and prove that our protocol meets it, notably when combined with a PQ offline deniable initial key exchange.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646742/](https://ieeexplore.ieee.org/document/10646742/)
## Private Hierarchical Governance for Encrypted Messaging.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#private-hierarchical-governance-for-encrypted-messaging)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#private-hierarchical-governance-for-encrypted-messaging)
### Authors
* Armin Namavari, Cornell Tech
* Barry Wang, Cornell University
* Sanketh Menda, Cornell Tech
* Ben Nassi, Cornell Tech
* Nirvan Tyagi, University of Washington; Stanford University
* James Grimmelmann, Cornell University
* Amy Zhang, University of Washington
* Thomas Ristenpart, Cornell Tech
### Abstract
> The increasing harms caused by hate, harassment, and other forms of abuse online have motivated major platforms to explore hierarchical governance. The idea is to allow communities to have designated members take on moderation and leadership duties; meanwhile, members can still escalate issues to the platform. But these promising approaches have only been explored in plaintext settings where community content is public to the platform. It is unclear how one can realize hierarchical governance in the huge and increasing number of online communities that utilize end-to-end encrypted (E2EE) messaging for privacy.We propose private hierarchical governance systems. These should enable similar levels of community governance as in plaintext settings, while maintaining cryptographic privacy of content and governance actions not reported to the platform. We design the first such system, taking a layered approach that adds governance logic on top of an encrypted messaging protocol; we show how an extension to the message layer security (MLS) protocol suffices for achieving a rich set of governance policies. Our approach allows developers to rapidly prototype new governance features, taking inspiration from a plaintext system called PolicyKit. We build a prototype E2EE messaging system called MlsGov that supports content-based community and platform moderation, elections of community moderators, votes to remove abusive users, and more.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646757/](https://ieeexplore.ieee.org/document/10646757/)
## Enforcing End-to-end Security for Remote Conference Applications.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#enforcing-end-to-end-security-for-remote-conference-applications)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#enforcing-end-to-end-security-for-remote-conference-applications)
### Authors
* Yuelin Liu, School of Information Science and Technology, ShanghaiTech University, China
* Huangxun Chen, IoT Thrust, Information Hub, Hong Kong University of Science and Technology, Guangzhou
* Zhice Yang, School of Information Science and Technology, ShanghaiTech University, China
### Abstract
> Remote conference applications are increasingly widely used, but currently, their improper data encryption methods, proprietary implementations, and dial-in access cause concerns about privacy breaches. As such, there is a need for trustworthy and secure solutions for these production tools. In this paper, we present mTunnel, a transparent software layer in the host system for securing conference applications without sacrificing the key functionalities and convenience. The basic idea of mTunnel is to encrypt sensitive data, such as audio, video, text, etc., before it is obtained by untrusted application clients. mTunnel leverages the audio and video streaming capabilities of the conference applications to tunnel the encrypted content to the remote end. mTunnel involves a software framework to accommodate the media interception and representation through I/O virtualization based on virtual drivers. Moreover, mTunnel supports complete E2EE group conversations even in a mixed IP and public switched telephone network (PSTN). We implement mTunnel and evaluate it with several commercial products. Results show its feasibility and overhead.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646740/](https://ieeexplore.ieee.org/document/10646740/)
## Injection Attacks Against End-to-End Encrypted Applications.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#injection-attacks-against-end-to-end-encrypted-applications)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#injection-attacks-against-end-to-end-encrypted-applications)
### Authors
* Andrés Fábrega, Cornell University
* Carolina Ortega Pérez, Cornell University
* Armin Namavari, Cornell University
* Ben Nassi, Cornell Tech
* Rachit Agarwal, Cornell University
* Thomas Ristenpart, Cornell University; Cornell Tech
### Abstract
> We explore an emerging threat model for end-to-end (E2E) encrypted applications: an adversary sends chosen messages to a target client, thereby "injecting" adversarial content into the application state. Such state is subsequently encrypted and synchronized to an adversarially-visible storage. By observing the lengths of the resulting cloud-stored cipher-texts, the attacker backs out confidential information.We investigate this injection threat model in the context of state-of-the-art encrypted messaging applications that support E2E encrypted backups. We show proof-of-concept attacks that can recover information about E2E encrypted messages or attachments sent via WhatsApp, assuming the ability to compromise the target user’s Google or Apple account (which gives access to encrypted backups). We also show weaknesses in Signal’s encrypted backup design that would allow injection attacks to infer metadata including a target user’s number of contacts and conversations, should the adversary somehow obtain access to the user’s encrypted Signal backup.While we do not believe our results should be of immediate concern for users of these messaging applications, our results do suggest that more work is needed to build tools that enjoy strong E2E security guarantees.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646849/](https://ieeexplore.ieee.org/document/10646849/)
## Device-Oriented Group Messaging: A Formal Cryptographic Analysis of Matrix' Core.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#device-oriented-group-messaging-a-formal-cryptographic-analysis-of-matrix-core)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#device-oriented-group-messaging-a-formal-cryptographic-analysis-of-matrix-core)
### Authors
* Martin R. Albrecht, King’s College London
* Benjamin Dowling, Security of Advanced Systems Group, University of Sheffield
* Daniel Jones, Information Security Group, Royal Holloway, University of London
### Abstract
> Focusing on its cryptographic core, we provide the first formal description of the Matrix secure group messaging protocol. Observing that no existing secure messaging model in the literature captures the relationships (and shared state) between users, their devices and the groups they are a part of, we introduce the Device-Oriented Group Messaging model to capture these key characteristics of the Matrix protocol. Utilising our new formalism, we determine that Matrix achieves the basic security notions of confidentiality and authentication, provided it introduces authenticated group membership. On the other hand, while the state sharing functionality in Matrix conflicts with advanced security notions in the literature – forward and post-compromise security – it enables features such as history sharing and account recovery, provoking broader questions about how such security notions should be conceptualised.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646860/](https://ieeexplore.ieee.org/document/10646860/)
## Multi-Stage Group Key Distribution and PAKEs: Securing Zoom Groups against Malicious Servers without New Security Elements.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#multi-stage-group-key-distribution-and-pakes-securing-zoom-groups-against-malicious-servers-without-new-security-elements)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#multi-stage-group-key-distribution-and-pakes-securing-zoom-groups-against-malicious-servers-without-new-security-elements)
### Authors
* Cas Cremers, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Eyal Ronen, Tel Aviv University, Tel Aviv, Israel
* Mang Zhao, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### Abstract
> Video conferencing apps like Zoom have hundreds of millions of daily users, making them a high-value target for surveillance and subversion. While such apps claim to achieve some forms of end-to-end encryption, they usually assume an incorruptible server that is able to identify and authenticate all the parties in a meeting. Concretely this means that, e.g., even when using the "end-to-end encrypted" setting, malicious Zoom servers could eavesdrop or impersonate in arbitrary groups.In this work, we show how security against malicious servers can be improved by changing the way in which such protocols use passwords (known as passcodes in Zoom) and integrating a password-authenticated key exchange (PAKE) protocol.To formally prove that our approach achieves its goals, we formalize a class of cryptographic protocols suitable for this setting, and define a basic security notion for them, in which group security can be achieved assuming the server is trusted to correctly authorize the group members. We prove that Zoom indeed meets this notion. We then propose a stronger security notion that can provide security against malicious servers, and propose a transformation that can achieve this notion. We show how we can apply our transformation to Zoom to provably achieve stronger security against malicious servers, notably without introducing new security elements.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646726/](https://ieeexplore.ieee.org/document/10646726/)
## Holepunch: Fast, Secure File Deletion with Crash Consistency.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#holepunch-fast-secure-file-deletion-with-crash-consistency)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#holepunch-fast-secure-file-deletion-with-crash-consistency)
### Authors
* Zachary Ratliff, Harvard University
* Wittmann Goh, Harvard University
* Abe Wieland, Harvard University
* James Mickens, Harvard University
* Ryan Williams, Northeastern University
### Abstract
> A file system provides secure deletion if, after a file is deleted, an attacker with physical possession of the storage device cannot recover any data from the deleted file. Unfortunately, secure deletion is not provided by commodity file systems. Even file systems which explicitly desire to provide secure deletion are challenged by the subtleties of hardware controllers on modern storage devices; those controllers obscure the mappings between logical blocks and physical blocks, silently duplicate physical blocks, and generally make it hard for host-level software to make reliable assumptions about how file data is kept on the device. State-of-the-art frameworks for secure deletion also have no crash consistency, meaning that an ill-timed power outage or software fault will desynchronize keys and the associated encrypted file data, corrupting the file system.In this paper, we present Holepunch, a new software-level approach for implementing secure deletion. Holepunch treats the storage device as a black box, providing secure deletion via cryptographic erasure. Holepunch uses per-file keys to transparently encrypt outgoing file writes and decrypt incoming file reads, ensuring that all physical data in the storage device is always encrypted. Holepunch uses puncturable pseudorandom functions (PPRFs) to quickly access file keys; upon the deletion of file f, Holepunch updates the PPRF so that, even if the PPRF is recovered, the PPRF cannot be used to generate f’s key. By using PPRFs instead of the key trees leveraged by prior work, Holepunch reduces both the memory pressure caused by key management and the number of disk IOs needed to access files. Holepunch stores its master key in secure TPM storage, and uses a novel journaling scheme to provide crash consistency between TPM state and on-disk state.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646784/](https://ieeexplore.ieee.org/document/10646784/)
## INVISILINE: Invisible Plausibly-Deniable Storage.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#invisiline-invisible-plausibly-deniable-storage)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#invisiline-invisible-plausibly-deniable-storage)
### Authors
* Sandeep Kiran Pinjala, Stony Brook University, NY, USA
* Bogdan Carbunar, Florida International University, FL, USA
* Anrin Chakraborti, University of Illinois Chicago, IL, USA
* Radu Sion, Stony Brook University, NY, USA
### Abstract
> Plausibly-deniable (PD) storage systems allow users to securely hide data and plausibly deny its presence when challenged by adversaries who coerce them to provide encryption keys and passwords. However, PD systems need specialized software that renders them detectable by suspicious adversaries questioning the very use of a PD system. To address this fundamental problem, we introduce and formally define the notion of plausible invisibility, preventing adversaries from determining whether a PD system was used in the first place. We develop INVISILINE, a plausibly invisible system resilient against multi-snapshot adversaries that can access the device multiple times. To remain invisible, INVISILINE uses a data layout and encoding that is compatible with the Linux dmcrypt disk encryption subsystem, and stores hidden data in the initialization vectors used by dm-crypt to encrypt public data. INVISILINE ensures that any disk changes that result from changes to the hidden data between adversary snapshots, can be plausibly explained using changes to public data resulting from regular use of dm-crypt. In the presence of adversaries, INVISILINE enables users to access all and only the public data using only dm-crypt. INVISILINE can securely and invisibly hide 19GB on a 1TB disk with no impact on public data I/O, and an average of 4.5MB/s throughput for writing hidden data.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646803/](https://ieeexplore.ieee.org/document/10646803/)
## Guessing on Dominant Paths: Understanding the Limitation of Wireless Authentication Using Channel State Information.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#guessing-on-dominant-paths-understanding-the-limitation-of-wireless-authentication-using-channel-state-information)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#guessing-on-dominant-paths-understanding-the-limitation-of-wireless-authentication-using-channel-state-information)
### Authors
* Zhe Qu, Central South University, China
* Rui Duan, University of South Florida, USA
* Xiao Han, University of South Florida, USA
* Shangqing Zhao, University of Oklahoma, USA
* Yao Liu, University of South Florida, USA
* Zhuo Lu, University of South Florida, USA
### Abstract
> The channel state information (CSI) has been extensively studied in the literature to facilitate authentication in wireless networks. The less focused is a systematic attack model to evaluate CSI-based authentication. Existing studies generally adopt either a random attack model that existing designs are resilient to or a specific-knowledge model that assumes certain inside knowledge for the attacker. This paper proposes a new, realistic attack model against CSI-based authentication. In this model, an attacker Eve tries to actively guess a user Alice’s CSI, and precode her signals to impersonate Alice to the verifier Bob who uses CSI to authenticate users. To make the CSI guessing effective and low-cost, we use theoretical analysis and CSI dataset validation to show that there is no need to guess CSI values in all signal propagation paths. Specifically, Eve can adopt a Dominant Path Construction (DomPathCon) strategy that only focuses on guessing the CSI values on the first few paths with the highest channel response amplitude (called dominant paths). Comprehensive experimental results show that DomPathCon is effective and achieves up to 61% attack success rates under different wireless network settings, which exposes new limitations of CSI-based authentication. We also propose designs to mitigate the adverse impact of DomPathCon.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646746/](https://ieeexplore.ieee.org/document/10646746/)
## MetaFly: Wireless Backhaul Interception via Aerial Wavefront Manipulation.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#metafly-wireless-backhaul-interception-via-aerial-wavefront-manipulation)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#metafly-wireless-backhaul-interception-via-aerial-wavefront-manipulation)
### Authors
* Zhambyl Shaikhanov, Electrical and Computer Engineering, Rice University
* Sherif Badran, Electrical and Computer Engineering, Northeastern University
* Hichem Guerboukha, School of Engineering, Brown University
* Josep M. Jornet, Electrical and Computer Engineering, Northeastern University
* Daniel M. Mittleman, School of Engineering, Brown University
* Edward W. Knightly, Electrical and Computer Engineering, Rice University
### Abstract
> Wireless backhaul links, already ubiquitous and expanding further with 5G and beyond, are employed for many critical functions, such as financial trading on Wall Street. In this work, we demonstrate for the first time that such links are acutely vulnerable to a new class of aerial metasurface attacks. In particular, we show how an adversary Eve designs and employs MetaFly to covertly manipulate the electromagnetic wavefront of the signals and remotely eavesdrop on highly directional backhaul links. Exploring the foundation of the attack, we demonstrate Eve’s strategy for generating eavesdropping diffraction beams by inducing pre-defined phase profiles at the aerial metasurface interface. We also show how Eve’s flight navigation approach can dynamically shape radiation patterns based on drone mobility via a wavefront-tailored flight refinement principle. We prototype MetaFly and demonstrate Eve’s lightweight, low-cost, transmissive, and power-free aerial metasurface. We implement the attack and perform a suite of over-the-air experiments in both a large indoor atrium and outdoor rooftops in a large metropolitan area. The results reveal that armed with MetaFly, Eve can intercept backhaul transmissions with nearly zero bit error rate while maintaining minimal impact on legitimate communication.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646843/](https://ieeexplore.ieee.org/document/10646843/)
## NFCEraser: A Security Threat of NFC Message Modification Caused by Quartz Crystal Oscillator.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#nfceraser-a-security-threat-of-nfc-message-modification-caused-by-quartz-crystal-oscillator)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#nfceraser-a-security-threat-of-nfc-message-modification-caused-by-quartz-crystal-oscillator)
### Authors
* Jianshuo Liu, Institute of Information Engineering, Chinese Academy of Sciences; School of Cyber Security, University of Chinese Academy of Sciences
* Hong Li, Institute of Information Engineering, Chinese Academy of Sciences; School of Cyber Security, University of Chinese Academy of Sciences
* Mengjie Sun, Institute of Information Engineering, Chinese Academy of Sciences; School of Cyber Security, University of Chinese Academy of Sciences
* Haining Wang, Department of Electrical and Computer Engineering, Virginia Tech
* Hui Wen, Institute of Information Engineering, Chinese Academy of Sciences; School of Cyber Security, University of Chinese Academy of Sciences
* Zhi Li, Institute of Information Engineering, Chinese Academy of Sciences; School of Cyber Security, University of Chinese Academy of Sciences
* Limin Sun, Institute of Information Engineering, Chinese Academy of Sciences; School of Cyber Security, University of Chinese Academy of Sciences
### Abstract
> Near Field Communication (NFC) has been widely used for rapid data exchange between electronic devices over a very short distance. In this paper, we reveal a new security vulnerability in NFC passive communication channels where transferred data can be modified in real-time. The security threat of data modification posed by this vulnerability is called NFCEraser. Exploiting electromagnetic interference (EMI), NFCEraser injects signals into the crystal oscillator’s electrode and adjusts the amplitude of carrier signals in NFC communication channels. By manipulating the parameters of EMI signals, NFCEraser is able to arbitrarily flip the bits in data payload sent from an NFC peer device, which may cause serious security outcomes. To assess the severity of NFCEraser, we examine six NFC modules under NFC-A/B communication modes and successfully perform reading operations under a variety of data lengths. The experimental results show that NFCEraser can modify data bits in response frames from NFC peer devices with the maximum 89% accuracy, under around 0.21μs latency. Our analysis further shows that NFCEraser can maintain an attack success rate of no less than 85% in environments with typical levels of electromagnetic noise.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646611/](https://ieeexplore.ieee.org/document/10646611/)
## Secure Ranging with IEEE 802.15.4z HRP UWB.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#secure-ranging-with-ieee-802-15-4z-hrp-uwb)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#secure-ranging-with-ieee-802-15-4z-hrp-uwb)
### Authors
* Xiliang Luo, Apple, California, USA
* Cem Kalkanli, Apple, California, USA
* Hao Zhou, Apple, California, USA
* Pengcheng Zhan, Apple, California, USA
* Moche Cohen, Apple, California, USA
### Abstract
> Secure ranging refers to the capability of upper-bounding the actual physical distance between two devices with reliability. This is essential in a variety of applications, including to unlock physical systems. In this work, we will look at secure ranging in the context of ultra-wideband impulse radio (UWB-IR) as specified in IEEE 802.15.4z (a.k.a. 4z). In particular, an encrypted waveform, i.e. the scrambled timestamp sequence (STS), is defined in the high rate pulse repetition frequency (HRP) mode of operation in 4z for secure ranging. This work demonstrates the security analysis of 4z HRP when implemented with an adequate receiver design and shows the STS waveform can enable secure ranging. We first review the STS receivers adopted in previous studies and analyze their security vulnerabilities. Then we present a reference STS receiver and prove that secure ranging can be achieved by employing the STS waveform in 4z HRP. The performance bounds of the reference secure STS receiver are also characterized. Numerical experiments corroborate the analyses and demonstrate the security of the reference STS receiver.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646848/](https://ieeexplore.ieee.org/document/10646848/)
## MIMOCrypt: Multi-User Privacy-Preserving Wi-Fi Sensing via MIMO Encryption.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#mimocrypt-multi-user-privacy-preserving-wi-fi-sensing-via-mimo-encryption)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#mimocrypt-multi-user-privacy-preserving-wi-fi-sensing-via-mimo-encryption)
### Authors
* Jun Luo, Nanyang Technological University, Singapore
* Hangcheng Cao, Hunan University, China
* Hongbo Jiang, Hunan University, China
* Yanbing Yang, Sichuan University, China
* Zhe Chen, Fudan University, China
### Abstract
> Wi-Fi signals may help realize low-cost and noninvasive human sensing, yet it can also be exploited by eavesdroppers to capture private information. Very few studies rise to handle this privacy concern so far; they either jam all sensing attempts or rely on sophisticated technologies to support only a single sensing user, rendering them impractical for multi-user scenarios. Moreover, these proposals all fail to exploit Wi-Fi’s multiple-in multiple-out (MIMO) capability. To this end, we propose MIMOCrypt, a privacy-preserving Wi-Fi sensing framework to support realistic multi-user scenarios. To thwart unauthorized eavesdropping while retaining the sensing and communication capabilities for legitimate users, MIMOCrypt innovates in exploiting MIMO to physically encrypt Wi-Fi channels, treating the sensed human activities as physical plaintexts. The encryption scheme is further enhanced via an optimization framework, aiming to strike a balance among i) risk of eavesdropping, ii) sensing accuracy, and iii) communication quality, upon securely conveying decryption keys to legitimate users. We implement a prototype of MIMOCrypt on an SDR platform and perform extensive experiments to evaluate its effectiveness in common application scenarios, especially privacy-sensitive human gesture recognition.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646878/](https://ieeexplore.ieee.org/document/10646878/)
## Surveilling the Masses with Wi-Fi-Based Positioning Systems.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#surveilling-the-masses-with-wi-fi-based-positioning-systems)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#surveilling-the-masses-with-wi-fi-based-positioning-systems)
### Authors
* Erik Rye, University of Maryland
* Dave Levin, University of Maryland
### Abstract
> Wi-Fi-based Positioning Systems (WPSes) are used by modern mobile devices to learn their position using nearby Wi-Fi access points as landmarks. In this work, we show that Apple’s WPS can be abused to create a privacy threat on a global scale. We present an attack that allows an unprivileged attacker to amass a worldwide snapshot of Wi-Fi BSSID geolocations in only a matter of days. Our attack makes few assumptions, merely exploiting the fact that there are relatively few dense regions of allocated MAC address space. Applying this technique over the course of a year, we learned the precise locations of over 2 billion BSSIDs around the world.The privacy implications of such massive datasets become more stark when taken longitudinally, allowing the attacker to track devices’ movements. While most Wi-Fi access points do not move for long periods of time, many devices—like compact travel routers—are specifically designed to be mobile.We present several case studies that demonstrate the types of attacks on privacy that Apple’s WPS enables: We track devices moving in and out of war zones (specifically Ukraine and Gaza), the effects of natural disasters (specifically the fires in Maui), and the possibility of targeted individual tracking by proxy—all by remotely geolocating wireless access points.We provide recommendations to WPS operators and Wi-Fi access point manufacturers to enhance the privacy of hundreds of millions of users worldwide. Finally, we detail our efforts at responsibly disclosing this privacy vulnerability, and outline some mitigations that Apple and Wi-Fi access point manufacturers have implemented both independently and as a result of our work.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646810/](https://ieeexplore.ieee.org/document/10646810/)
## SoK: The Long Journey of Exploiting and Defending the Legacy of King Harald Bluetooth.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#sok-the-long-journey-of-exploiting-and-defending-the-legacy-of-king-harald-bluetooth)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#sok-the-long-journey-of-exploiting-and-defending-the-legacy-of-king-harald-bluetooth)
### Authors
* Jianliang Wu, Purdue University & Simon Fraser University
* Ruoyu Wu, Purdue University
* Dongyan Xu, Purdue University
* Dave Jing Tian, Purdue University
* Antonio Bianchi, Purdue University
### Abstract
> Named after the Viking King Harald Bluetooth, Bluetooth is the de facto standard for short-range wireless communications. The introduction of Bluetooth Low Energy (BLE) and Mesh protocols has further paved the way for its domination in the era of IoT and 5G. Meanwhile, attacks against Bluetooth, such as BlueBorne, BleedingBit, KNOB, BIAS, and BLESA, have been booming in the past fewyears, impacting billions of devices. While Bluetooth security has drawn significant attention from the security research community, a systematic understanding of this field is still missing, impeding the advancement of this field.In this paper, we first summarize the evolution of Bluetooth security in the specification in the past 24 years. Then, we provide a systematization of Bluetooth security by diving into 76 attacks and 33 defenses presented by previous research in this area. We first categorize attacks and defenses based on their affected layers and protocols in the Bluetooth stack as well as their threat models. Then, we cross-check the attacks and defenses to have a big picture of Bluetooth security. Based on the systematization, we find that the existing formal analyses of Bluetooth do not cover most of the security aspects of Bluetooth Mesh. Lastly, we take a step towards securing Bluetooth Mesh by designing and implementing a comprehensive formal model of Bluetooth Mesh covering all its security-related protocols. Our systematization reveals, for instance, that the security of Bluetooth pairing faces challenges caused by users’ mistakes, and that Bluetooth fuzzing is effective yet not comprehensive. Based on the systematization, we provide promising future directions to shed some light on future Bluetooth security research.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646695/](https://ieeexplore.ieee.org/document/10646695/)
## Practical Obfuscation of BLE Physical-Layer Fingerprints on Mobile Devices.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#practical-obfuscation-of-ble-physical-layer-fingerprints-on-mobile-devices)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#practical-obfuscation-of-ble-physical-layer-fingerprints-on-mobile-devices)
### Authors
* Hadi Givehchian, University of California, San Diego
* Nishant Bhaskar, University of California, San Diego
* Alexander Redding, University of California, San Diego
* Han Zhao, University of California, San Diego
* Aaron Schulman, University of California, San Diego
* Dinesh Bharadia, University of California, San Diego
### Abstract
> Mobile devices continuously beacon Bluetooth Low Energy (BLE) advertisement packets. This has created the threat of attackers identifying and tracking a device by sniffing its BLE signals. To mitigate this threat, MAC address randomization has been deployed at the link-layer in most BLE transmitters. However, attackers can bypass MAC address randomization using lower-level physical-layer fingerprints resulting from manufacturing imperfections of radios. In this work, we demonstrate a practical and effective method of obfuscating physical-layer hardware imperfection fingerprints. Through theoretical analysis, simulations, and field evaluations, we design and evaluate our approach to hardware imperfection obfuscation. By analyzing data from thousands of BLE devices, we demonstrate obfuscation significantly reduces the accuracy of identifying a target device. This makes an attack impractical, even if a target is continuously observed for 24 hours. Furthermore, we demonstrate the practicality of this defense by implementing it by making firmware changes to commodity BLE chipsets.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646661/](https://ieeexplore.ieee.org/document/10646661/)
## It's Simplex! Disaggregating Measures to Improve Certified Robustness.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#its-simplex-disaggregating-measures-to-improve-certified-robustness)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#its-simplex-disaggregating-measures-to-improve-certified-robustness)
### Authors
* Andrew C. Cullen, School of Computing and Information Systems, University of Melbourne, Parkville, Australia
* Paul Montague, Defence Science and Technology Group, Adelaide, Australia
* Shijie Liu, School of Computing and Information Systems, University of Melbourne, Parkville, Australia
* Sarah M. Erfani, School of Computing and Information Systems, University of Melbourne, Parkville, Australia
* Benjamin I. P. Rubinstein, School of Computing and Information Systems, University of Melbourne, Parkville, Australia
### Abstract
> Certified robustness circumvents the fragility of defences against adversarial attacks, by endowing model predictions with guarantees of class invariance for attacks up to a calculated size. While there is value in these certifications, the techniques through which we assess their performance do not present a proper accounting of their strengths and weaknesses, as their analysis has eschewed consideration of performance over individual samples in favour of aggregated measures. By considering the potential output space of certified models, this work presents two distinct approaches to improve the analysis of certification mechanisms, that allow for both dataset-independent and dataset-dependent measures of certification performance. Embracing such a perspective uncovers new certification approaches, which have the potential to more than double the achievable radius of certification, relative to current state-of-the-art. Empirical evaluation verifies that our new approach can certify 9% more samples at noise scale σ = 1, with greater relative improvements observed as the difficulty of the predictive task increases.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646689/](https://ieeexplore.ieee.org/document/10646689/)
## Sabre: Cutting through Adversarial Noise with Adaptive Spectral Filtering and Input Reconstruction.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#sabre-cutting-through-adversarial-noise-with-adaptive-spectral-filtering-and-input-reconstruction)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#sabre-cutting-through-adversarial-noise-with-adaptive-spectral-filtering-and-input-reconstruction)
### Authors
* Alec F. Diallo, School of Informatics, The University of Edinburgh, Edinburgh, Scotland, UK
* Paul Patras, School of Informatics, The University of Edinburgh, Edinburgh, Scotland, UK
### Abstract
> The adoption of neural networks (NNs) across critical sectors including transportation, medicine, communications infrastructure, etc. is inexorable. However, NNs remain highly susceptible to adversarial perturbations, whereby seemingly minimal or imperceptible changes to their inputs cause gross misclassifications, which questions their practical use. Although a growing body of work focuses on defending against such attacks, adversarial robustness remains an open challenge, especially as the effectiveness of existing solutions against increasingly sophisticated input manipulations comes at the cost of degrading ability to recognize benign samples, as we reveal. In this work we introduce Sabre, an adversarial defense framework that closes the gap between benign and robust accuracy in NN classification tasks, without sacrificing benign sample recognition performance. In particular, through spectral decomposition of the input and selective energy-based filtering, Sabre extracts robust features that serve in input reconstruction prior to feeding existing NN architectures. We demonstrate the performance of our approach across multiple domains, by evaluating it on image classification, network intrusion detection, and speech command recognition tasks, showing that Sabre not only outperforms existing defense mechanisms, but also behaves consistently with different neural architectures, data types, (un)known attacks, and adversarial perturbation strengths. Through these extensive experiments, we make the case for Sabre’s adoption in deploying robust and reliable neural classifiers.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646818/](https://ieeexplore.ieee.org/document/10646818/)
## Text-CRS: A Generalized Certified Robustness Framework against Textual Adversarial Attacks.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#text-crs-a-generalized-certified-robustness-framework-against-textual-adversarial-attacks)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#text-crs-a-generalized-certified-robustness-framework-against-textual-adversarial-attacks)
### Authors
* Xinyu Zhang, Zhejiang University; University of Connecticut
* Hanbin Hong, University of Connecticut
* Yuan Hong, University of Connecticut
* Peng Huang, Zhejiang University
* Binghui Wang, Illinois Institute of Technology
* Zhongjie Ba, Zhejiang University
* Kui Ren, Zhejiang University
### Abstract
> The language models, especially the basic text classification models, have been shown to be susceptible to textual adversarial attacks such as synonym substitution and word insertion attacks. To defend against such attacks, a growing body of research has been devoted to improving the model’s robustness. However, providing provable robustness guarantees instead of empirical robustness is still widely unexplored. In this paper, we propose Text-CRS, a generalized certified robustness framework for natural language processing (NLP) based on randomized smoothing. To our best knowledge, existing certified schemes for NLP can only certify the robustness against ℓ
> 
> <inf xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">0</inf>
> 
> perturbations in synonym substitution attacks. Representing each word-level adversarial operation (i.e., synonym substitution, word reordering, insertion, and deletion) as a combination of permutation and embedding transformation, we propose novel smoothing theorems to derive robustness bounds in both permutation and embedding space against such adversarial operations. To further improve certified accuracy and radius, we consider the numerical relationships between discrete words and select proper noise distributions for the randomized smoothing. Finally, we conduct substantial experiments on multiple language models and datasets. Text-CRS can address all four different word-level adversarial operations and achieve a significant accuracy improvement. We also provide the first benchmark on certified accuracy and radius of four word-level operations, besides outperforming the state-of-the-art certification against synonym substitution attacks.
> 
> <sup xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">1</sup>

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646716/](https://ieeexplore.ieee.org/document/10646716/)
## FCert: Certifiably Robust Few-Shot Classification in the Era of Foundation Models.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#fcert-certifiably-robust-few-shot-classification-in-the-era-of-foundation-models)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#fcert-certifiably-robust-few-shot-classification-in-the-era-of-foundation-models)
### Authors
* Yanting Wang, The Pennsylvania State University
* Wei Zou, The Pennsylvania State University
* Jinyuan Jia, The Pennsylvania State University
### Abstract
> Few-shot classification with foundation models (e.g., CLIP, DINOv2, PaLM-2) enables users to build an accurate classifier with a few labeled training samples (called support samples) for a classification task. However, an attacker could perform data poisoning attacks by manipulating some support samples such that the classifier makes the attacker-desired, arbitrary prediction for a testing input. Empirical defenses cannot provide formal robustness guarantees, leading to a cat-and-mouse game between the attacker and defender. Existing certified defenses are designed for traditional supervised learning, resulting in sub-optimal performance when extended to few-shot classification. In our work, we propose FCert, the first certified defense against data poisoning attacks to few-shot classification. We show our FCert provably predicts the same label for a testing input under arbitrary data poisoning attacks when the total number of poisoned support samples is bounded. We perform extensive experiments on benchmark few-shot classification datasets with foundation models released by OpenAI, Meta, and Google in both vision and text domains. Our experimental results show our FCert: 1) maintains classification accuracy without attacks, 2) outperforms existing state-of-the-art certified defenses for data poisoning attacks, and 3) is efficient and general.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646639/](https://ieeexplore.ieee.org/document/10646639/)
## Node-aware Bi-smoothing: Certified Robustness against Graph Injection Attacks.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#node-aware-bi-smoothing-certified-robustness-against-graph-injection-attacks)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#node-aware-bi-smoothing-certified-robustness-against-graph-injection-attacks)
### Authors
* Yuni Lai, Department of Computing, The Hong Kong Polytechnic University
* Yulin Zhu, Department of Computing, The Hong Kong Polytechnic University
* Bailin Pan, Department of Applied Mathematics, The Hong Kong Polytechnic University
* Kai Zhou, Department of Computing, The Hong Kong Polytechnic University
### Abstract
> Deep Graph Learning (DGL) has emerged as a crucial technique across various domains. However, recent studies have exposed vulnerabilities in DGL models, such as susceptibility to evasion and poisoning attacks. While empirical and provable robustness techniques have been developed to defend against graph modification attacks (GMAs), the problem of certified robustness against graph injection attacks (GIAs) remains largely unexplored. To bridge this gap, we introduce the node-aware bi-smoothing framework, which is the first certifiably robust approach for general node classification tasks against GIAs. Notably, the proposed node-aware bi-smoothing scheme is model-agnostic and is applicable for both evasion and poisoning attacks. Through rigorous theoretical analysis, we establish the certifiable conditions of our smoothing scheme. We also explore the practical implications of our node-aware bi-smoothing schemes in two contexts: as an empirical defense approach against real-world GIAs and in the context of recommendation systems. Furthermore, we extend two state-of-the-art certified robustness frameworks to address node injection attacks and compare our approach against them. Extensive evaluations demonstrate the effectiveness of our proposed certificates.
> 
> <sup xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">1</sup>

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646863/](https://ieeexplore.ieee.org/document/10646863/)
## LACMUS: Latent Concept Masking for General Robustness Enhancement of DNNs.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#lacmus-latent-concept-masking-for-general-robustness-enhancement-of-dnns)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#lacmus-latent-concept-masking-for-general-robustness-enhancement-of-dnns)
### Authors
* Shuo Wang, Shanghai Jiao Tong University, China
* Hongsheng Hu, CSIRO’s Data61, Australia
* Jiamin Chang, University of New South Wales, Australia; CSIRO’s Data61, Australia
* Benjamin Zi Hao Zhao, Macquarie University, Australia
* Minhui Xue, CSIRO’s Data61, Australia
### Abstract
> The susceptibility of Deep Neural Networks (DNNs) to adversarial attacks and their limited robustness to real-world variations pose substantial challenges to their widespread adoption. Adversarial training has shown promise in fortifying models against such perturbations, however current methods are often specific to a single type of attack and can significantly diminish the model’s overall performance. In response, we present LAtent Concept Masking for robUStness (LACMUS), a novel perceptually-driven methodology that enhances DNN robustness without requiring prior knowledge about the adversarial contexts. We argue that DNNs’ sensitivity to adversarial perturbations and distribution drifts stems from overfitting to non-common concepts within the dataset, leading to an over-reliance on specific learned instances and increased vulnerability. LACMUS addresses this by mapping high-dimensional data into a latent conceptual space to identify and navigate patterns of "non-common concepts" within the latent concept space. It then applies a concept masking strategy to selectively obscure data features, prompting the model to base its decisions on a wider array of information and thus enhancing its decision-making robustness. LACMUS distinguishes itself as a versatile, attack-agnostic framework that employs concept-wise augmentation to enhance robustness against a spectrum of adversarial, semantic, and distributional challenges. Our contributions include the development of a tool for robustness enhancement, a mechanism for mapping data to latent concept space, a strategy for identifying patterns of concept-wise misclassification, and a novel data augmentation module that leverages latent concepts. LACMUS is proven to enhance model resilience and generalization, even when training data is scarce, with experiments on MNIST, CIFAR-10, ImageNet, and CelebA supporting its effectiveness. We also provide augmented datasets to the research community, bolstering the robustness of models trained on them.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646871/](https://ieeexplore.ieee.org/document/10646871/)
## SoK: Unintended Interactions among Machine Learning Defenses and Risks.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#sok-unintended-interactions-among-machine-learning-defenses-and-risks)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#sok-unintended-interactions-among-machine-learning-defenses-and-risks)
### Authors
* Vasisht Duddu, University of Waterloo
* Sebastian Szyller, Intel Labs
* N. Asokan, University of Waterloo; Aalto University
### Abstract
> Machine learning (ML) models cannot neglect risks to security, privacy, and fairness. Several defenses have been proposed to mitigate such risks. When a defense is effective in mitigating one risk, it may correspond to increased or decreased susceptibility to other risks. Existing research lacks an effective framework to recognize and explain these unintended interactions. We present such a framework, based on the conjecture that overfitting and memorization underlie unintended interactions. We survey existing literature on unintended interactions, accommodating them within our framework. We use our framework to conjecture two previously unexplored interactions, and empirically validate them.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646709/](https://ieeexplore.ieee.org/document/10646709/)
## Securely Fine-tuning Pre-trained Encoders Against Adversarial Examples.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#securely-fine-tuning-pre-trained-encoders-against-adversarial-examples)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#securely-fine-tuning-pre-trained-encoders-against-adversarial-examples)
### Authors
* Ziqi Zhou, National Engineering Research Center for Big Data Technology and System; Services Computing Technology and System Lab; Cluster and Grid Computing Lab; School of Computer Science and Technology, Huazhong University of Science and Technology
* Minghui Li, School of Software Engineering, Huazhong University of Science and Technology
* Wei Liu, National Engineering Research Center for Big Data Technology and System; Services Computing Technology and System Lab; Hubei Engineering Research Center on Big Data Security; Hubei Key Laboratory of Distributed System Security; School of Cyber Science and Engineering, Huazhong University of Science and Technology
* Shengshan Hu, National Engineering Research Center for Big Data Technology and System; Services Computing Technology and System Lab; Hubei Engineering Research Center on Big Data Security; Hubei Key Laboratory of Distributed System Security; School of Cyber Science and Engineering, Huazhong University of Science and Technology
* Yechao Zhang, National Engineering Research Center for Big Data Technology and System; Services Computing Technology and System Lab; Hubei Engineering Research Center on Big Data Security; Hubei Key Laboratory of Distributed System Security; School of Cyber Science and Engineering, Huazhong University of Science and Technology
* Wei Wan, National Engineering Research Center for Big Data Technology and System; Services Computing Technology and System Lab; Hubei Engineering Research Center on Big Data Security; Hubei Key Laboratory of Distributed System Security; School of Cyber Science and Engineering, Huazhong University of Science and Technology
* Lulu Xue, National Engineering Research Center for Big Data Technology and System; Services Computing Technology and System Lab; Hubei Engineering Research Center on Big Data Security; Hubei Key Laboratory of Distributed System Security; School of Cyber Science and Engineering, Huazhong University of Science and Technology
* Leo Yu Zhang, School of Information and Communication Technology, Griffith University
* Dezhong Yao, National Engineering Research Center for Big Data Technology and System; Services Computing Technology and System Lab; Cluster and Grid Computing Lab; School of Computer Science and Technology, Huazhong University of Science and Technology
* Hai Jin, National Engineering Research Center for Big Data Technology and System; Services Computing Technology and System Lab; Cluster and Grid Computing Lab; School of Computer Science and Technology, Huazhong University of Science and Technology
### Abstract
> With the evolution of self-supervised learning, the pre-training paradigm has emerged as a predominant solution within the deep learning landscape. Model providers furnish pre-trained encoders designed to function as versatile feature extractors, enabling downstream users to harness the benefits of expansive models with minimal effort through fine-tuning. Nevertheless, recent works have exposed a vulnerability in pre-trained encoders, highlighting their susceptibility to downstream-agnostic adversarial examples (DAEs) meticulously crafted by attackers. The lingering question pertains to the feasibility of fortifying the robustness of downstream models against DAEs, particularly in scenarios where the pre-trained encoders are publicly accessible to the attackers.In this paper, we initially delve into existing defensive mechanisms against adversarial examples within the pre-training paradigm. Our findings reveal that the failure of current defenses stems from the domain shift between pre-training data and downstream tasks, as well as the sensitivity of encoder parameters. In response to these challenges, we propose Genetic Evolution-Nurtured Adversarial Fine-tuning (Gen-AF), a two-stage adversarial fine-tuning approach aimed at enhancing the robustness of downstream models. Gen-AF employs a genetic-directed dual-track adversarial fine-tuning strategy in its first stage to effectively inherit the pre-trained encoder. This involves optimizing the pre-trained encoder and classifier separately while incorporating genetic regularization to preserve the model’s topology. In the second stage, Gen-AF assesses the robust sensitivity of each layer and creates a dictionary, based on which the top-k robust redundant layers are selected with the remaining layers held fixed. Upon this foundation, we conduct evolutionary adaptability fine-tuning to further enhance the model’s generalizability. Our extensive experiments, conducted across ten self-supervised training methods and six datasets, demonstrate that Gen-AF attains high testing accuracy and robust testing accuracy against state-of-the-art DAEs.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646599/](https://ieeexplore.ieee.org/document/10646599/)
## hinTS: Threshold Signatures with Silent Setup.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#hints-threshold-signatures-with-silent-setup)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#hints-threshold-signatures-with-silent-setup)
### Authors
* Sanjam Garg, University of California, Berkeley; NTT Research
* Abhishek Jain, Johns Hopkins University; NTT Research
* Pratyay Mukherjee, Supra
* Rohit Sinha, Swirlds Labs
* Mingyuan Wang, University of California, Berkeley
* Yinuo Zhang, University of California, Berkeley
### Abstract
> We propose hinTS — a new threshold signature scheme built on top of the widely used BLS signatures. Our scheme enjoys the following attractive features:A silent setup process where the joint public key of the parties is computed as a deterministic function of their locally computed public keys.Support for dynamic choice of thresholds and signers, after the silent setup, without further interaction.Support for general access policies; in particular, native support for weighted thresholds with zero additional overhead over standard threshold setting.Strong security guarantees, including proactive security and forward security.We prove the security of hinTS in the algebraic group model, and also provide an open-source implementation. Our scheme outperforms all prior proposals that avoid distributed key generation in terms of aggregation time, signature size, and verification time (as well as other qualitative measures). As an example, the aggregation time in hinTS for 1000 signers is under 0.5 seconds, while both signing and verification are constant time algorithms, taking 1 ms and 17.5 ms, respectively.The key technical contribution of our work involves the design of special-purpose succinct proofs to efficiently prove the well-formedness of aggregated public keys. Our solution uses public "hints" released by the signers as part of their public keys (hence the name hinTS).

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646864/](https://ieeexplore.ieee.org/document/10646864/)
## Threshold ECDSA in Three Rounds.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#threshold-ecdsa-in-three-rounds)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#threshold-ecdsa-in-three-rounds)
### Authors
* Jack Doerner, Technion, Reichman U, Brown U
* Yashvanth Kondi, Silence Labs (Deel)
* Eysa Lee, Brown University
* Abhi Shelat, Northeastern University
### Abstract
> We present a three-round protocol for threshold ECDSA signing with malicious security against a dishonest majority, which information-theoretically UC-realizes a standard threshold signing functionality, assuming only ideal commitment and two-party multiplication primitives. Our protocol combines an intermediate representation of ECDSA signatures that was recently introduced by Abram et al. [2] with an efficient statistical consistency check reminiscent of the ones used by the protocols of Doerner et al. [3], [4]. We show that shared keys for our signing protocol can be generated using a simple commit-release-and-complain procedure, without any proofs of knowledge, and to compute the intermediate representation of each signature, we propose a two-round vectorized multiplication protocol based on oblivious transfer that outperforms all similar constructions. We demonstrate empirically that our protocol outperforms those of Doerner et al. by factors of as much as six in high-latency environments, and that it is multiple orders of magnitude faster than Paillier-based approaches.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646783/](https://ieeexplore.ieee.org/document/10646783/)
## Private Analytics via Streaming, Sketching, and Silently Verifiable Proofs.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#private-analytics-via-streaming-sketching-and-silently-verifiable-proofs)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#private-analytics-via-streaming-sketching-and-silently-verifiable-proofs)
### Authors
* Mayank Rathee, UC Berkeley
* Yuwen Zhang, UC Berkeley
* Henry Corrigan-Gibbs, MIT
* Raluca Ada Popa, UC Berkeley
### Abstract
> We present Whisper, a system for privacy-preserving collection of aggregate statistics. Like prior systems, a Whisper deployment consists of a small set of non-colluding servers; these servers compute aggregate statistics over data from a large number of users without learning the data of any individual user. Whisper’s main contribution is that its server-to-server communication cost and its server-side storage costs scale sublinearly with the total number of users. In particular, prior systems required the servers to exchange a few bits of information to verify the well-formedness of each client submission. In contrast, Whisper uses silently verifiable proofs, a new type of proof system on secret-shared data that allows the servers to verify an arbitrarily large batch of proofs by exchanging a single 128-bit string. This improvement comes with increased client-to-server communication, which, in cloud computing, is typically cheaper (or even free) than the cost of egress for server-to-server communication. To reduce server storage, Whisper approximates certain statistics using smallspace sketching data structures. Applying randomized sketches in an environment with adversarial clients requires a careful and novel security analysis. In a deployment with two servers and 100,000 clients of which 1% are malicious, Whisper can improve server-to-server communication for vector sum by three orders of magnitude while each client’s communication increases by only 10%.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646802/](https://ieeexplore.ieee.org/document/10646802/)
## Hyena: Balancing Packing, Reuse, and Rotations for Encrypted Inference.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#hyena-balancing-packing-reuse-and-rotations-for-encrypted-inference)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#hyena-balancing-packing-reuse-and-rotations-for-encrypted-inference)
### Authors
* Sarabjeet Singh, Kahlert School of Computing, University of Utah, Salt Lake City, Utah
* Shreyas Singh, Kahlert School of Computing, University of Utah, Salt Lake City, Utah
* Sumanth Gudaparthi, Kahlert School of Computing, University of Utah, Salt Lake City, Utah
* Xiong Fan, Department of Computer Science, Rutgers University, New Brunswick, New Jersey
* Rajeev Balasubramonian, Kahlert School of Computing, University of Utah, Salt Lake City, Utah
### Abstract
> Deep neural networks are widely used in a range of commercial services. Many of these services are hosted on the cloud, requiring users to send their personal data to the cloud. This, in turn, exposes the user’s private and sensitive data to several third parties. To address this problem, Homomorphic Encryption (HE) has been introduced, where the user encrypts their data before sending it to the cloud; the cloud performs operations on encrypted data and returns a ciphertext that the user must then decrypt. While this approach keeps user data private, it demands orders of magnitude more computation and data movement. It is, therefore, imperative to design hardware/software techniques to lower the overheads when executing AI services under Homomorphic Encryption schemes.In this paper, we consider a range of HE implementations for AI inference and address the key bottlenecks in state-of-the-art frameworks. We start by making the case for a hybrid HE and Multi-Party Computation (MPC) scheme that is more practical than pure Fully HE. This paper introduces new techniques at various levels: (i) we introduce new data packing techniques that result in lower data movement, (ii) we introduce new dataflows that increase reuse and reduce other costly HE operations (rotations, key switching, NTT conversion), (iii) we evaluate Hyena on a balanced pipelined architecture that efficiently handles the above primitives. The resulting framework, Hyena (new packing + dataflow), achieves better performance and energy than several packing baselines. Compared to the widely used Channel-packing, Hyena is 38× faster and achieves 162× lower energy consumption, with an overall ResNet20 inference end-to-end latency of 11.4 ms, using a 163 mm
> 
> <sup xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">2</sup>
> 
> accelerator dissipating 16.75 W.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646772/](https://ieeexplore.ieee.org/document/10646772/)
## Make Revocation Cheaper: Hardware-Based Revocable Attribute-Based Encryption.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#make-revocation-cheaper-hardware-based-revocable-attribute-based-encryption)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#make-revocation-cheaper-hardware-based-revocable-attribute-based-encryption)
### Authors
* Xiaoguo Li, Singapore Management University
* Guomin Yang, Singapore Management University
* Tao Xiang, Chongqing University
* Shengmin Xu, Fujian Normal University
* Bowen Zhao, Xidian University (Guangzhou Institute of Technology)
* HweeHwa Pang, Singapore Management University
* Robert H. Deng, Singapore Management University
### Abstract
> As an advanced one-to-many public key encryption system, attribute-based encryption (ABE) is widely believed to be a promising technology for achieving flexible and fine-grained access control of encrypted data on untrusted storage servers (e.g., public cloud servers). However, user revocation in ABE is a critical but challenging problem, and designing efficient revocable ABE has been an active research topic in the past decade. Almost all the existing revocable ABE schemes incorporate a timestamp in the encryption algorithm such that revoked users cannot decrypt ciphertexts generated in future time intervals. To prevent revoked users from decrypting past ciphertexts, the storage server needs to perform a process called ciphertext delegation (Sahai et al., CRYPTO’12) that periodically updates the timestamp for all ciphertexts. As the number of ciphertexts could be huge in a storage system, ciphertext delegation could pose a huge computation overhead to the server.Motivated by the popularity of commodity Trusted Execution Environment (TEE) technologies, this paper initiates the study on hardware-based revocable ABE (HR-ABE) to eliminate the (unscalable) ciphertext delegation and prevent collusion attacks between an untrusted storage server and revoked users. We formalize this new notion and present an efficient HR-ABE construction that also supports outsourced decryption for resource-constrained data users. Furthermore, HR-ABE is also designed to address the potential secret leakage problem suffered by TEE (e.g., due to side-channel attacks) so that the leakage of secrets possessed by TEE does not lead to leakage of user data. We prove HR-ABE’s security formally and benchmark its performance experimentally.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646706/](https://ieeexplore.ieee.org/document/10646706/)
## SoK: Efficient Design and Implementation of Polynomial Hash Functions over Prime Fields.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#sok-efficient-design-and-implementation-of-polynomial-hash-functions-over-prime-fields)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#sok-efficient-design-and-implementation-of-polynomial-hash-functions-over-prime-fields)
### Authors
* Jean Paul Degabriele, Technology Innovation Institute
* Jan Gilcher, ETH Zurich
* Jérôme Govinden, TU Darmstadt
* Kenneth G. Paterson, ETH Zurich
### Abstract
> Poly1305 is a widely-deployed polynomial hash function. The rationale behind its design was laid out in a series of papers by Bernstein, the last of which dates back to 2005. As computer architectures evolved, some of its design features became less relevant, but implementers found new ways of exploiting these features to boost its performance. However, would we still converge to this same design if we started afresh with today’s computer architectures and applications? To answer this question, we gather and systematize a body of knowledge concerning polynomial hash design and implementation that is spread across research papers, cryptographic libraries, and developers’ blogs. We develop a framework to automate the validation and benchmarking of the ideas that we collect. This approach leads us to five new candidate designs for polynomial hash functions. Using our framework, we generate and evaluate different implementations and optimization strategies for each candidate. We obtain substantial improvements over Poly1305 in terms of security and performance. Besides laying out the rationale behind our new designs, our paper serves as a reference for efficiently implementing polynomial hash functions, including Poly1305.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646805/](https://ieeexplore.ieee.org/document/10646805/)
## Springproofs: Efficient Inner Product Arguments for Vectors of Arbitrary Length.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#springproofs-efficient-inner-product-arguments-for-vectors-of-arbitrary-length)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#springproofs-efficient-inner-product-arguments-for-vectors-of-arbitrary-length)
### Authors
* Jianning Zhang, College of Computer Science & Cyber Science, Nankai University, Tianjin, China; State Key Laboratory of Public Big Data, Guizhou University, Guiyang, China
* Ming Su, College of Computer Science & Cyber Science, Nankai University, Tianjin, China; State Key Laboratory of Public Big Data, Guizhou University, Guiyang, China; DISSec, SysNet, TMCC, GTIISC, Tianjin, China
* Xiaoguang Liu, College of Computer Science & Cyber Science, Nankai University, Tianjin, China; DISSec, SysNet, TMCC, GTIISC, Tianjin, China
* Gang Wang, College of Computer Science & Cyber Science, Nankai University, Tianjin, China; State Key Laboratory of Public Big Data, Guizhou University, Guiyang, China
### Abstract
> Inner product arguments (IPA) are arguments of knowledge that two committed vectors satisfy an inner product relation. With the recursive proof technique by Bootle et al. 2016, the size of IPA proofs only grows logarithmically in the length of the vectors, without a trusted setup. The succinct proof makes IPAs well suited for blockchain applications. However, current IPA can only handle a vector with length a power of 2, which limits the application of the argument. One direct solution is to pad the vectors with zeros, which incurs additional overhead. We propose Springproofs, a new framework deriving IPAs from many existing IPA schemes. Springproofs are natively compatible with vectors of arbitrary length. With a novel recursive compression structure, Springproofs achieve the same proof size as the original IPA but with more efficient computation. In particular, we instantiate Springproofs with Bulletproofs and find the optimal recursive structure for the IPA. First, we experimentally show that Springproofs are almost twice as fast as Bulletproofs for range proof, when the vector length is slightly larger than a power of 2. Afterwards, we incorporate the Springproofs into Monero, a popular cryptocurrency supporting privacy in transactions, revealing that the Springproofs based Monero outperforms Bulletproofs based Monero both in generating and verifying transactions. Moreover, we apply the Springproofs to the general arithmetic circuit, including SHA256, Merkle tree, and typical statistics, the performances on which are better than the performances by using Bulletproofs. Interestingly, Springproofs increase the range of parameters on which the performance of Bulletproofs exceeds that of Groth16, meanwhile naturally inherit the advantages of Bulletproofs, e.g., without initial trusted setup, aggregation, and batch verification. As a result, Springproofs have many promising applications, including confidential transactions in cryptocurrency and privacy computing for specific arithmetic circuits in smart contracts.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646872/](https://ieeexplore.ieee.org/document/10646872/)
## CryptoVampire: Automated Reasoning for the Complete Symbolic Attacker Cryptographic Model.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#cryptovampire-automated-reasoning-for-the-complete-symbolic-attacker-cryptographic-model)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#cryptovampire-automated-reasoning-for-the-complete-symbolic-attacker-cryptographic-model)
### Authors
* Simon Jeanteur, TU Wien
* Laura Kovács, TU Wien
* Matteo Maffei, TU Wien; Christian Doppler Laboratory Blockchain Technologies for the Internet of Things
* Michael Rawson, TU Wien
### Abstract
> Cryptographic protocols are hard to design and prove correct, as witnessed by the ever-growing list of attacks even on protocol standards. Symbolic models of cryptography enable automated formal security proofs of such protocols against an idealized cryptographic model, which abstracts away from the algebraic properties of cryptographic schemes and thus misses attacks. Computational models of cryptography yield rigorous guarantees but support at present only interactive proofs and/or restricted classes of protocols (e.g., stateless ones). A promising approach is given by the computationally complete symbolic attacker (CCSA) model, formalized in the BC Logic, which aims at bridging and getting the best of the two worlds, obtaining cryptographic guarantees by symbolic protocol analysis. The BC Logic is supported by a recently developed interactive theorem prover, namely Squirrel, which enables machine-checked interactive security proofs, as opposed to automated ones, thus requiring expert knowledge both in the cryptographic space as well as on the reasoning side.In this paper, we introduce the CryptoVampire cryptographic protocol verifier, which for the first time fully automates proofs of trace properties in the BC Logic. The key technical contribution is a first-order formalization of protocol properties with tailored handling of subterm relations. As such, we overcome the burden of interactive proving in higher-order logic and automatically establish soundness of cryptographic protocols using only first-order reasoning. Our first-order encoding of cryptographic protocols is challenging for various reasons. On the theoretical side, we restrict full first-order logic with cryptographic axioms to ensure that, by losing the expressivity of the higher-order BC Logic, we do not lose soundness of cryptographic protocols in our first-order encoding. On the practical side, CryptoVampire integrates dedicated proof techniques using first-order saturation algorithms and heuristics, which all together enable leveraging the state-of-the-art Vampire first-order automated theorem prover as the underlying proving engine of CryptoVampire. Our experimental results showcase the effectiveness of CryptoVampire as a standalone verifier as well as in terms of automation support for Squirrel.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646703/](https://ieeexplore.ieee.org/document/10646703/)
## Nebula: A Privacy-First Platform for Data Backhaul.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#nebula-a-privacy-first-platform-for-data-backhaul)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#nebula-a-privacy-first-platform-for-data-backhaul)
### Authors
* Jean-Luc Watson, University of California, Berkeley
* Tess Despres, University of California, Berkeley
* Alvin Tan, University of California, Berkeley
* Shishir G. Patil, University of California, Berkeley
* Prabal Dutta, University of California, Berkeley
* Raluca Ada Popa, University of California, Berkeley
### Abstract
> Imagine being able to deploy a small, battery- powered device nearly anywhere on earth that humans frequent and having it be able to send data to the cloud without needing to provision a network—without buying a physical gateway, setting up WiFi credentials, or acquiring a cellular SIM. Such a capability would address one of the greatest bottlenecks to deploying the long-tail of small, embedded, and power-constrained IoT devices in nearly any setting. Unfortunately, decoupling the device deployment from the network configuration needed to transmit, or backhaul, sensor data to the cloud remains a tricky challenge, but the success of Tile and AirTag offers hope. They have shown that mobile phones can crowd-source worldwide local network coverage to find lost items, yet expanding these systems to enable general-purpose backhaul raises privacy concerns for network participants. In this work, we present Nebula, a privacy-focused architecture for global, intermittent, and low-rate data backhaul to enable nearly any thing to eventually connect to the cloud while (i) preserving the privacy of the mobile network participants from the platform provider by decentralizing data flow through the system, (ii) incentivizing participation through micropayments, and (iii) preventing system abuse.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646834/](https://ieeexplore.ieee.org/document/10646834/)
## Pudding: Private User Discovery in Anonymity Networks.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#pudding-private-user-discovery-in-anonymity-networks)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#pudding-private-user-discovery-in-anonymity-networks)
### Authors
* Ceren Kocaoğullar, University of Cambridge
* Daniel Hugenroth, University of Cambridge
* Martin Kleppmann, TU Munich
* Alastair R. Beresford, University of Cambridge
### Abstract
> Anonymity networks allow messaging with metadata privacy, providing better privacy than popular encrypted messaging applications. However, contacting a user on an anonymity network currently requires knowing their public key or similar high-entropy information, as these systems lack a privacy-preserving mechanism for contacting a user via a short, human-readable username. Previous research suggests that this is a barrier to widespread adoption.In this paper we propose Pudding, a novel private user discovery protocol that allows a user to be contacted on an anonymity network knowing only their email address. Our protocol hides contact relationships between users, prevents impersonation, and conceals which usernames are registered on the network. Pudding is Byzantine fault tolerant, remaining available and secure as long as less than one third of servers are crashed, unavailable, or malicious. It can be deployed on Loopix and Nym without changes to the underlying anonymity network protocol, and it supports mobile devices with intermittent network connectivity. We demonstrate the practicality of Pudding with a prototype using the Nym anonymity network. We also formally define the security and privacy goals of our protocol and conduct a thorough analysis to assess its compliance with these definitions.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646816/](https://ieeexplore.ieee.org/document/10646816/)
## Attacking and Improving the Tor Directory Protocol.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#attacking-and-improving-the-tor-directory-protocol)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#attacking-and-improving-the-tor-directory-protocol)
### Authors
* Zhongtang Luo, Purdue University
* Adithya Bhat, Purdue University
* Kartik Nayak, Duke University
* Aniket Kate, Supra Research
### Abstract
> The Tor network enhances clients’ privacy by routing traffic through an overlay network of volunteered intermediate relays. Tor employs a distributed protocol among nine hard-coded Directory Authority (DA) servers to securely disseminate information about these relays to produce a new consensus document every hour. With a straightforward voting mechanism to ensure consistency, the protocol is expected to be secure even when a minority of those authorities get compromised. However, the current consensus protocol is flawed: it allows an equivocation attack that enables only a single compromised authority to create a valid consensus document with malicious relays. Importantly the vulnerability is not innocuous: We demonstrate that the compromised authority can effectively trick a targeted client into using the equivocated consensus document in an undetectable manner. Moreover, even if we have archived Tor consensus documents available since its beginning, we cannot be sure that no client was ever tricked.We propose a two-stage solution to deal with this exploit. In the short term, we have developed and deployed TorEq, a monitor to detect such exploits reactively: the Tor clients can refer to the monitor before updating the consensus to ensure no equivocation. To solve the problem proactively, we first define the Tor DA consensus problem as the interactive consistency (IC) problem from the distributed computing literature. We then design DirCast, a novel secure Byzantine Broadcast protocol that requires minimal code change from the current Tor DA code base. Our protocol has near-optimal efficiency that uses optimistically five rounds and at most nine rounds to reach an agreement in the current nine-authority system. Our solutions are practical: our performance analysis shows that our monitor can detect equivocations without changing the authorities’ code in five minutes; the secure IC protocol can generate up to 500 consensus documents per hour in a real-world scenario. We are communicating with the Tor security team to incorporate the solutions into the Tor project.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646693/](https://ieeexplore.ieee.org/document/10646693/)
## Real-Time Website Fingerprinting Defense via Traffic Cluster Anonymization.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#real-time-website-fingerprinting-defense-via-traffic-cluster-anonymization)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#real-time-website-fingerprinting-defense-via-traffic-cluster-anonymization)
### Authors
* Meng Shen, School of Cyberspace Science and Technology, Beijing Institute of Technology
* Kexin Ji, School of Computer Science, Beijing Institute of Technology
* Jinhe Wu, School of Cyberspace Science and Technology, Beijing Institute of Technology
* Qi Li, Institute for Network Sciences and Cyberspace, Tsinghua University
* Xiangdong Kong, School of Cyberspace Science and Technology, Beijing Institute of Technology
* Ke Xu, Department of Computer Science and Technology, Tsinghua University
* Liehuang Zhu, School of Cyberspace Science and Technology, Beijing Institute of Technology
### Abstract
> Website Fingerprinting (WF) attacks significantly threaten user privacy in anonymity networks such as Tor. While numerous defenses have been proposed, they are unable to efficiently defend against recent deep learning based WF attacks. In this paper, we propose Palette, a novel and practical WF defense that utilizes traffic cluster anonymization to protect live Tor traffic. By clustering websites with high similarity in traffic patterns and regulating them into a well-designed uniform pattern for a cluster (i.e., a group of similar websites), Palette prevents attackers from distinguishing between these similar websites within the cluster and further provides a strong anonymity guarantee. Comprehensive evaluations with public real-world datasets show that Palette is superior to the existing defenses, greatly reducing the accuracy of the state-of-the-art (SOTA) WF attacks with acceptable overheads. Furthermore, we implement Palette as a Pluggable Transport in the Tor network. The experiment results demonstrate that, on average, Palette effectively reduces the accuracy of the SOTA WF attacks by 73.60%, which improves the existing defenses by 33.50%-43.47%.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646653/](https://ieeexplore.ieee.org/document/10646653/)
## Learn What You Want to Unlearn: Unlearning Inversion Attacks against Machine Unlearning.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#learn-what-you-want-to-unlearn-unlearning-inversion-attacks-against-machine-unlearning)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#learn-what-you-want-to-unlearn-unlearning-inversion-attacks-against-machine-unlearning)
### Authors
* Hongsheng Hu, CSIRO’s Data61, Australia
* Shuo Wang, Shanghai Jiao Tong University, China
* Tian Dong, Shanghai Jiao Tong University, China
* Minhui Xue, CSIRO’s Data61, Australia
### Abstract
> Machine unlearning has become a promising solution for fulfilling the "right to be forgotten", under which individuals can request the deletion of their data from machine learning models. However, existing studies of machine unlearning mainly focus on the efficacy and efficiency of unlearning methods, while neglecting the investigation of the privacy vulnerability during the unlearning process. With two versions of a model available to an adversary, that is, the original model and the unlearned model, machine unlearning opens up a new attack surface. In this paper, we conduct the first investigation to understand the extent to which machine unlearning can leak the confidential content of the unlearned data. Specifically, under the Machine Learning as a Service setting, we propose unlearning inversion attacks that can reveal the feature and label information of an unlearned sample by only accessing the original and unlearned model. The effectiveness of the proposed unlearning inversion attacks is evaluated through extensive experiments on benchmark datasets across various model architectures and on both exact and approximate representative unlearning approaches. The experimental results indicate that the proposed attack can reveal the sensitive information of the unlearned data. As such, we identify three possible defenses that help to mitigate the proposed attacks, while at the cost of reducing the utility of the unlearned model. The study in this paper uncovers an underexplored gap between machine unlearning and the privacy of unlearned data, highlighting the need for the careful design of mechanisms for implementing unlearning without leaking the information of the unlearned data.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646717/](https://ieeexplore.ieee.org/document/10646717/)
## Few-shot Unlearning.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#few-shot-unlearning)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#few-shot-unlearning)
### Authors
* Youngsik Yoon, Pohang University of Science and Technology
* Jinhwan Nam, Pohang University of Science and Technology
* Hyojeong Yun, Pohang University of Science and Technology
* Jaeho Lee, Pohang University of Science and Technology
* Dongwoo Kim, Pohang University of Science and Technology
* Jungseul Ok, Pohang University of Science and Technology
### Abstract
> We consider the problem of machine unlearning to erase the impact of a target dataset, used in training but incorrect or sensitive, from a trained model. It has been often presumed that every data sample to erase or remain is entirely identifiable and thus clarifies the desired model behavior after unlearning. However, such a flawless identification can be infeasible in practice. We pose a further realistic yet challenging scenario, referred to as few-shot unlearning, where only a few samples of target data are provided while aiming at achieving the underlying intention (e.g., correcting mislabels, countering a certain privacy attack, or specifying nothing) behind the full target dataset. We then devise a few-shot unlearning method including a new model inversion technique, specialized for unlearning scenarios, to retrieve a proxy of the training dataset from the trained model if needed. We demonstrate that our method using only a tiny subset of target data can achieve similar performance to the state-of-the-art methods with full access to target data. Our code and results are available at https://github.com/ml-postech/Few-shot-Unlearning.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646697/](https://ieeexplore.ieee.org/document/10646697/)
## DeepShuffle: A Lightweight Defense Framework against Adversarial Fault Injection Attacks on Deep Neural Networks in Multi-Tenant Cloud-FPGA.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#deepshuffle-a-lightweight-defense-framework-against-adversarial-fault-injection-attacks-on-deep-neural-networks-in-multi-tenant-cloud-fpga)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#deepshuffle-a-lightweight-defense-framework-against-adversarial-fault-injection-attacks-on-deep-neural-networks-in-multi-tenant-cloud-fpga)
### Authors
* Yukui Luo, Northeastern University
* Adnan Siraj Rakin, Binghamton University
* Deliang Fan, Johns Hopkins University
* Xiaolin Xu, Northeastern University
### Abstract
> FPGA virtualization has garnered significant industry and academic interests as it aims to enable multi-tenant cloud systems that can accommodate multiple users’ circuits on a single FPGA. Although this approach greatly enhances the efficiency of hardware resource utilization, it also introduces new security concerns. As a representative study, one stateof-the-art (SOTA) adversarial fault injection attack, named Deep-Dup [1], exemplifies the vulnerabilities of off-chip data communication within the multi-tenant cloud-FPGA system. Deep-Dup attacks successfully demonstrate the complete failure of a wide range of Deep Neural Networks (DNNs) in a black-box setup, by only injecting fault to extremely small amounts of sensitive weight data transmissions, which are identified through a powerful differential evolution searching algorithm. Such emerging adversarial fault injection attack reveals the urgency of effective defense methodology to protect DNN applications on the multi-tenant cloud-FPGA system.This paper, for the first time, presents a novel movingtarget-defense (MTD) oriented defense framework DeepShuffle, which could effectively protect DNNs on multi-tenant cloudFPGA against the SOTA Deep-Dup attack, through a novel lightweight model parameter shuffling methodology. DeepShuffle effectively counters the Deep-Dup attack by altering the weight transmission sequence, which effectively prevents adversaries from identifying security-critical model parameters from the repeatability of weight transmission during each inference round. Importantly, DeepShuffle represents a training-free DNN defense methodology, which makes constructive use of the typologies of DNN architectures to achieve being lightweight. Moreover, the deployment of DeepShuffle neither requires any hardware modification nor suffers from any performance degradation. We evaluate DeepShuffle on the SOTA open-source FPGA-DNN accelerator, Vertical Tensor Accelerator (VTA), which represents the practice of real-world FPGA-DNN system developers. We then evaluate the performance overhead of DeepShuffle and find it only consumes an additional ∼3% of the inference time compared to the unprotected baseline. DeepShuffle improves the robustness of various SOTA DNN architectures like VGG, ResNet, etc. against Deep-Dup by orders. It effectively reduces the efficacy of evolution searching-based adversarial fault injection attack close to random fault injection attack, e.g., on VGG-11, even after increasing the attacker’s effort by 2.3×, our defense shows a ∼93% improvement in accuracy, compared to the unprotected baseline.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646607/](https://ieeexplore.ieee.org/document/10646607/)
## DeepTheft: Stealing DNN Model Architectures through Power Side Channel.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#deeptheft-stealing-dnn-model-architectures-through-power-side-channel)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#deeptheft-stealing-dnn-model-architectures-through-power-side-channel)
### Authors
* Yansong Gao, CSIRO’s Data61
* Huming Qiu, Fudan University
* Zhi Zhang, The University of Western Australia
* Binghui Wang, Illinois Institute of Technology
* Hua Ma, The University of Adelaide
* Alsharif Abuadbba, CSIRO’s Data61
* Minhui Xue, CSIRO’s Data61
* Anmin Fu, Nanjing University of Science and Technology
* Surya Nepal, CSIRO’s Data61
### Abstract
> Deep Neural Network (DNN) models are often deployed in resource-sharing clouds as Machine Learning as a Service (MLaaS) to provide inference services. To steal model architectures that are of valuable intellectual properties, a class of attacks has been proposed via different side-channel leakage, posing a serious security challenge to MLaaS.Also targeting MLaaS, we propose a new end-to-end attack, DeepTheft, to accurately recover complex DNN model architectures on general processors via the RAPL (Running Average Power Limit)-based power side channel. While unprivileged access to the RAPL has been disabled in bare-metal OSes, we observe that the RAPL is still legitimately accessible in a platform as a service, e.g., the latest docker environment of version 20.10.18 used in this work. However, an attacker can acquire only a low sampling rate (1 KHz) of the time-series energy traces from the RAPL interface, rendering existing techniques ineffective in stealing large and deep DNN models. To this end, we design a novel and generic learning-based framework consisting of a set of meta-models, based on which DeepTheft is demonstrated to have high accuracy in recovering a large number (thousands) of models architectures from different model families including the deepest ResNet152. Particularly, DeepTheft has achieved a Levenshtein Distance Accuracy of 99.75% in recovering network structures, and a weighted average F1 score of 99.60% in recovering diverse layer-wise hyperparameters. Besides, our proposed learning framework is general to other time-series side-channel signals. To validate its generalization, another existing side channel is exploited, i.e., CPU frequency. Different from RAPL, CPU frequency is accessible to unprivileged users in bare-metal OSes. By using our generic learning framework trained against CPU frequency traces, DeepTheft has shown similarly high attack performance in stealing model architectures.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646681/](https://ieeexplore.ieee.org/document/10646681/)
## No Privacy Left Outside: On the (In-)Security of TEE-Shielded DNN Partition for On-Device ML.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#no-privacy-left-outside-on-the-in-security-of-tee-shielded-dnn-partition-for-on-device-ml)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#no-privacy-left-outside-on-the-in-security-of-tee-shielded-dnn-partition-for-on-device-ml)
### Authors
* Ziqi Zhang, School of Computer Science, Key Laboratory of High-Confidence Software Technologies (MOE), Peking University
* Chen Gong, School of Computer Science, Peking University
* Yifeng Cai, School of Computer Science, Key Laboratory of High-Confidence Software Technologies (MOE), Peking University
* Yuanyuan Yuan, The Hong Kong University of Science and Technology
* Bingyan Liu, School of Computer Science, Beijing University of Posts and Telecommunications
* Ding Li, School of Computer Science, Key Laboratory of High-Confidence Software Technologies (MOE), Peking University
* Yao Guo, School of Computer Science, Key Laboratory of High-Confidence Software Technologies (MOE), Peking University
* Xiangqun Chen, School of Computer Science, Key Laboratory of High-Confidence Software Technologies (MOE), Peking University
### Abstract
> On-device ML introduces new security challenges: DNN models become white-box accessible to device users. Based on white-box information, adversaries can conduct effective model stealing (MS) against model weights and membership inference attack (MIA) against training data privacy. Using Trusted Execution Environments (TEEs) to shield on-device DNN models aims to downgrade (easy) white-box attacks to (harder) black-box attacks. However, one major shortcoming of TEEs is the sharply increased latency (up to 50×). To accelerate TEE-shield DNN computation with GPUs, researchers proposed several model partition techniques. These solutions, referred to as TEE-Shielded DNN Partition (TSDP), partition a DNN model into two parts, offloading
> 
> <sup xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">1</sup>
> 
> the privacy-insensitive part to the GPU while shielding the privacy-sensitive part within the TEE. However, the community lacks an in-depth understanding of the seemingly encouraging privacy guarantees offered by existing TSDP solutions during DNN inference. This paper benchmarks existing TSDP solutions using both MS and MIA across a variety of DNN models, datasets, and metrics. We show important findings that existing TSDP solutions are vulnerable to privacy-stealing attacks and are not as safe as commonly believed. We also unveil the inherent difficulty in deciding the optimal DNN partition configurations, which vary across datasets and models. Based on lessons harvested from the experiments, we present TEESlice, a novel TSDP method that defends against MS and MIA during DNN inference. Unlike existing approaches, TEESlice follows a partition-before-training strategy, which allows for accurate separation between privacy-related weights from public weights. TEESlice delivers the same security protection as shielding the entire DNN model inside TEE (the "upper-bound" security guarantees) with over 10×less overhead (in both experimental and real-world environments) than prior TSDP solutions and no accuracy loss. We make the code and artifacts publicly available on the Internet.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646815/](https://ieeexplore.ieee.org/document/10646815/)
## One for All and All for One: GNN-based Control-Flow Attestation for Embedded Devices.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#one-for-all-and-all-for-one-gnn-based-control-flow-attestation-for-embedded-devices)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#one-for-all-and-all-for-one-gnn-based-control-flow-attestation-for-embedded-devices)
### Authors
* Marco Chilese, Technical University of Darmstadt
* Richard Mitev, Technical University of Darmstadt
* Meni Orenbach, NVIDIA
* Robert Thorburn, University of Southampton
* Ahmad Atamli, NVIDIA; University of Southampton
* Ahmad-Reza Sadeghi, Technical University of Darmstadt
### Abstract
> Control-Flow Attestation (CFA) is a security service that allows an entity (verifier) to verify the integrity of code execution on a remote computer system (prover). Existing CFA schemes suffer from impractical assumptions, such as requiring access to the prover’s internal state (e.g., memory or code), the complete Control-flow graph (CFG) of the prover’s software, large sets of measurements, or tailor-made hardware. Moreover, current CFA schemes are inadequate for attesting embedded systems due to their high computational overhead and resource usage.In this paper, we overcome the limitations of existing CFA schemes for embedded devices by introducing RAGE, a novel, lightweight CFA approach with minimal requirements. RAGE can detect Code Reuse Attacks (CRA), including control-and non-control-data attacks. It efficiently extracts features from one execution trace and leverages Unsupervised Graph Neural Networks (GNNs) to identify deviations from benign executions. The core intuition behind RAGE is to exploit the correspondence between execution trace, execution graph, and execution embeddings to eliminate the unrealistic requirement of having access to a complete CFG.We evaluate RAGE on embedded benchmarks and demonstrate that (i) it detects 40 real-world attacks on embedded software; (ii) Further, we stress our scheme with synthetic returnoriented programming (ROP) and data-oriented programming (DOP) attacks on the real-world embedded software benchmark Embench, achieving 98.03% (ROP) and 91.01% (DOP) F1-Score while maintaining a low False Positive Rate of 3.19%; (iii) Additionally, we evaluate RAGE on OpenSSL, used by millions of devices and achieve 97.49% and 84.42% F1-Score for ROP and DOP attack detection, with an FPR of 5.47%.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646720/](https://ieeexplore.ieee.org/document/10646720/)
## Why Does Little Robustness Help? A Further Step Towards Understanding Adversarial Transferability.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#why-does-little-robustness-help-a-further-step-towards-understanding-adversarial-transferability)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#why-does-little-robustness-help-a-further-step-towards-understanding-adversarial-transferability)
### Authors
* Yechao Zhang, National Engineering Research Center for Big Data Technology and System; Services Computing Technology and System Lab; Hubei Engineering Research Center on Big Data Security; Hubei Key Laboratory of Distributed System Security; School of Cyber Science and Engineering, Huazhong University of Science and Technology
* Shengshan Hu, National Engineering Research Center for Big Data Technology and System; Services Computing Technology and System Lab; Hubei Engineering Research Center on Big Data Security; Hubei Key Laboratory of Distributed System Security; School of Cyber Science and Engineering, Huazhong University of Science and Technology
* Leo Yu Zhang, School of Information and Communication Technology, Griffith University
* Junyu Shi, National Engineering Research Center for Big Data Technology and System; Services Computing Technology and System Lab; Hubei Engineering Research Center on Big Data Security; Hubei Key Laboratory of Distributed System Security; School of Cyber Science and Engineering, Huazhong University of Science and Technology
* Minghui Li, School of Software Engineering, Huazhong University of Science and Technology
* Xiaogeng Liu, National Engineering Research Center for Big Data Technology and System; Services Computing Technology and System Lab; Hubei Engineering Research Center on Big Data Security; Hubei Key Laboratory of Distributed System Security; School of Cyber Science and Engineering, Huazhong University of Science and Technology
* Wei Wan, National Engineering Research Center for Big Data Technology and System; Services Computing Technology and System Lab; Hubei Engineering Research Center on Big Data Security; Hubei Key Laboratory of Distributed System Security; School of Cyber Science and Engineering, Huazhong University of Science and Technology
* Hai Jin, National Engineering Research Center for Big Data Technology and System; Services Computing Technology and System Lab; Cluster and Grid Computing Lab; School of Computer Science and Technology, Huazhong University of Science and Technology
### Abstract
> Adversarial examples for deep neural networks (DNNs) are transferable: examples that successfully fool one white-box surrogate model can also deceive other black-box models with different architectures. Although a bunch of empirical studies have provided guidance on generating highly transferable adversarial examples, many of these findings fail to be well explained and even lead to confusing or inconsistent advice for practical use.In this paper, we take a further step towards understanding adversarial transferability, with a particular focus on surrogate aspects. Starting from the intriguing "little robustness" phenomenon, where models adversarially trained with mildly perturbed adversarial samples can serve as better surrogates for transfer attacks, we attribute it to a trade-off between two dominant factors: model smoothness and gradient similarity. Our research focuses on their joint effects on transferability, rather than demonstrating the separate relationships alone. Through a combination of theoretical and empirical analyses, we hypothesize that the data distribution shift induced by off-manifold samples in adversarial training is the reason that impairs gradient similarity.Building on these insights, we further explore the impacts of prevalent data augmentation and gradient regularization on transferability and analyze how the trade-off manifests in various training methods, thus building a comprehensive blueprint for the regulation mechanisms behind transferability. Finally, we provide a general route for constructing superior surrogates to boost transferability, which optimizes both model smoothness and gradient similarity simultaneously, e.g., the combination of input gradient regularization and sharpness-aware minimization (SAM), validated by extensive experiments. In summary, we call for attention to the united impacts of these two factors for launching effective transfer attacks, rather than optimizing one while ignoring the other, and emphasize the crucial role of manipulating surrogate models.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646840/](https://ieeexplore.ieee.org/document/10646840/)
## Backdooring Multimodal Learning.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#backdooring-multimodal-learning)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#backdooring-multimodal-learning)
### Authors
* Xingshuo Han, Nanyang Technological University
* Yutong Wu, Nanyang Technological University
* Qingjie Zhang, Tsinghua University
* Yuan Zhou, Nanyang Technological University
* Yuan Xu, Nanyang Technological University
* Han Qiu, Tsinghua University; Zhongguancun Laboratory
* Guowen Xu, Nanyang Technological University
* Tianwei Zhang, Nanyang Technological University
### Abstract
> Deep Neural Networks (DNNs) are vulnerable to backdoor attacks, which poison the training set to alter the model prediction over samples with a specific trigger. While existing efforts mainly focus on unimodal scenarios, modern AI systems usually employ multiple modalities to improve the model performance, making multimodal backdoor attacks more practical but structurally more complex due to inherent modality interactions, multiple attack surfaces, unbalanced modality contributions, etc. These factors affect the effectiveness of backdooring multimodal learning significantly but have not been fully investigated yet.To bridge this gap, we present the first data and computation efficient backdoor attacks towards multimodal learning. Our solution consists of two innovations. First, we propose a novel backdoor gradient-based score (BAGS), which can accurately quantify the contribution of each data sample to the backdoor learning at a very early training stage. Therefore, it can greatly save time and computational resources for the attacker. Second, we introduce a searching strategy with two attack modes to efficiently determine the optimal poisoning modalities and data samples.Our methodology leads to the following research outcomes. First, we comprehensively evaluate the proposed solution over state-of-the-art multimodal tasks, models, datasets and settings, to verify its effectiveness, efficiency and transferability. For instance, we only need to poison 0.005% of training samples to attack the Visual Question Answering task with the success rate of >96%. For the Audio Video Speech Recognition task, we poison 0.05% of samples to achieve the success rate of >93%. Second, we disclose several interesting findings during our experiments: (1) poisoning all modalities is not always better than individual ones, sometimes even making the attack worse; (2) modality competition and complementarity coexist in multimodal learning backdoor attacks; (3) A dominant modality in multimodal learning may not dominate the backdoor attacks. We hope this work will spur future research in improving the security of multimodal learning. Code is available at https://github.com/multimodalbags/BAGS_Multimodal.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646608/](https://ieeexplore.ieee.org/document/10646608/)
## Understanding the Privacy Practices of Political Campaigns: A Perspective from the 2020 US Election Websites.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#understanding-the-privacy-practices-of-political-campaigns-a-perspective-from-the-2020-us-election-websites)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#understanding-the-privacy-practices-of-political-campaigns-a-perspective-from-the-2020-us-election-websites)
### Authors
* Kaushal Kafle, William & Mary, Williamsburg, VA, USA
* Prianka Mandal, William & Mary, Williamsburg, VA, USA
* Kapil Singh, IBM T.J. Watson Research Center
* Benjamin Andow, Google
* Adwait Nadkarni, William & Mary, Williamsburg, VA, USA
### Abstract
> Political campaigns are known to collect private user data, whether for building voter profiles, engaging with volunteers, or for soliciting donations. However, as such campaigns are classified as nonprofit in the United States (U.S.), their privacy practices have not received the same level of scrutiny as those of for-profit enterprises. This paper presents the Polityzer framework to evaluate the privacy posture of political campaign websites, and uses it to analyze 2060 campaign websites active during the U.S. election of November 2020. Our analysis leads to 20 key findings that demonstrate gaps in the privacy postures of political campaigns. For instance, we find that campaigns collect extensive private data they are not required to by the Federal Election Commission (FEC), and a vast majority do not provide any form of privacy disclosure. When disclosures are provided, they are often incomplete. We also found that campaigns may be inadvertently sharing data with other campaigns through common fundraising platforms, without disclosing such sharing. Reporting the lack of privacy disclosure to the respective campaigns yields further insights into the rationale behind their security posture. Finally, we discuss ways in which our results could enable future research, inform emerging privacy regulations, and transform user behavior regarding data privacy in this critical context.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646790/](https://ieeexplore.ieee.org/document/10646790/)
## Thwarting Last-Minute Voter Coercion.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#thwarting-last-minute-voter-coercion)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#thwarting-last-minute-voter-coercion)
### Authors
* Rosario Giustolisi, IT University of Copenhagen
* Maryam Sheikhi Garjan, IT University of Copenhagen
* Carsten Schuermann, IT University of Copenhagen
### Abstract
> Counter-strategies are key components of coercion-resistant voting schemes, allowing voters to submit votes that represent their own intentions in an environment controlled by a coercer. By deploying a counter-strategy a voter can prevent the coercer from learning if the voter followed the coercer’s instructions or not. Two effective counter-strategies have been proposed in the literature, one based on fake credentials and another on revoting. While fake-credential schemes assume that voters hide cryptographic keys away from the coercer, revoting schemes assume that voters can revote after being coerced.In this work, we present a new counter-strategy technique that enables flexible vote updating, that is, a revoting approach that provides protection against coercion even if the adversary is able to coerce a voter at the very last minute of the voting phase. We demonstrate that our technique is effective by implementing it in Loki, an Internet-based coercion-resistant voting scheme that allows revoting. We prove that Loki satisfies a game-based definition of coercion-resistance that accounts for flexible vote updating. To the best of our knowledge, we provide the first technique that enables deniable coercion-resistant voting and that can evade last-minute voter coercion.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646670/](https://ieeexplore.ieee.org/document/10646670/)
## Can we cast a ballot as intended and be receipt free?
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#can-we-cast-a-ballot-as-intended-and-be-receipt-free)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#can-we-cast-a-ballot-as-intended-and-be-receipt-free)
### Authors
* Henri Devillez, ICTEAM - Crypto Group, UCLouvain, Louvain-la-Neuve, Belgium
* Olivier Pereira, ICTEAM - Crypto Group, UCLouvain, Louvain-la-Neuve, Belgium; Microsoft Research, Redmond, WA, USA
* Thomas Peters, ICTEAM - Crypto Group, UCLouvain, Louvain-la-Neuve, Belgium
* Quentin Yang, Inria, CNRS, LORIA, Université de Lorraine, France
### Abstract
> This paper explores the interaction between receipt- freeness and cast-as-intended verifiability, a property that has been overlooked until now or assumed to be granted through procedural means in the context of receipt-free voting protocols.We first demonstrate that it is impossible to obtain a receipt-free voting protocol with cast-as-intended verifiability if the voting process is non-interactive, unless a trusted authority is available. We also demonstrate that, if a trusted voter registration authority is available, then cast-as-intended verifiability and receipt-freeness can be obtained.Furthermore, after extending standard receipt-freeness security definitions to an interactive voting (and corruption) setting, we demonstrate that the same security properties can be obtained using an interactive voting process.Finally, we discuss the performance of our protocols based on a prototype implementation.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646657/](https://ieeexplore.ieee.org/document/10646657/)
## Investigating Voter Perceptions of Printed Physical Audit Trails for Online Voting.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#investigating-voter-perceptions-of-printed-physical-audit-trails-for-online-voting)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#investigating-voter-perceptions-of-printed-physical-audit-trails-for-online-voting)
### Authors
* Karola Marky, Ruhr University Bochum, Germany; University of Glasgow
* Nina Gerber, Technical University of Darmstadt
* Henry John Krumb, Technical University of Darmstadt
* Mohamed Khamis, University of Glasgow
* Max Mühlhäuser, Technical University of Darmstadt
### Abstract
> Online elections come with security challenges since digital votes do not produce physical audit trails that are easily verifiable. We present and investigate a hybrid online voting system that combines the benefits of voting from home via the internet with those of physical ballots, such as risk-limiting audits and verifiability. After voting online, the system generates a tracking code and a physical printout – either paper or 3D-printed – of the encrypted vote that can be visually verified by the voters through live video-broadcasts. Through an online experiment (N=150), we compared hybrid voting with paper and 3D-printed votes to a baseline (digitally stored votes), investigating perceived trust, UX, usability, and security readiness. Among our results, we show that paper printouts enhance trust without negatively impacting UX. 3D-printouts enhance perceived privacy, yet impact usability and UX. We conclude with recommendations and practical considerations to inform the implementation of hybrid online voting schemes.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646764/](https://ieeexplore.ieee.org/document/10646764/)
## E-Vote Your Conscience: Perceptions of Coercion and Vote Buying, and the Usability of Fake Credentials in Online Voting.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#e-vote-your-conscience-perceptions-of-coercion-and-vote-buying-and-the-usability-of-fake-credentials-in-online-voting)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#e-vote-your-conscience-perceptions-of-coercion-and-vote-buying-and-the-usability-of-fake-credentials-in-online-voting)
### Authors
* Louis-Henri Merino, EPFL
* Alaleh Azhir, MIT
* Haoqian Zhang, EPFL
* Simone Colombo, EPFL
* Bernhard Tellenbach, Armasuisse
* Vero Estrada-Galiñanes, EPFL
* Bryan Ford, EPFL
### Abstract
> Online voting is attractive for convenience and accessibility, but is more susceptible to voter coercion and vote buying than in-person voting. One mitigation is to give voters fake voting credentials that they can yield to a coercer. Fake credentials appear identical to real ones, but cast votes that are silently omitted from the final tally. An important unanswered question is how ordinary voters perceive such a mitigation: whether they could understand and use fake credentials, and whether the coercion risks justify the costs of mitigation. We present the first systematic study of these questions, involving 150 diverse individuals in Boston, Massachusetts. All participants "registered" and "voted" in a mock election: 120 were exposed to coercion resistance via fake credentials, the rest forming a control group. Of the 120 participants exposed to fake credentials, 96% understood their use. 53% reported that they would create fake credentials in a real-world voting scenario, given the opportunity. 10% mistakenly voted with a fake credential, however. 22% reported either personal experience with or direct knowledge of coercion or vote-buying incidents. These latter participants rated the coercion-resistant system essentially as trustworthy as in-person voting via hand-marked paper ballots. Of the 150 total participants to use the system, 87% successfully created their credentials without assistance; 83% both successfully created and properly used their credentials. Participants give a System Usability Scale score of 70.4, which is slightly above the industry’s average score of 68. Our findings appear to support the importance of the coercion problem in general, and the promise of fake credentials as a possible mitigation, but user error rates remain an important usability challenge for future work.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646842/](https://ieeexplore.ieee.org/document/10646842/)
## NetShuffle: Circumventing Censorship with Shuffle Proxies at the Edge.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#netshuffle-circumventing-censorship-with-shuffle-proxies-at-the-edge)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#netshuffle-circumventing-censorship-with-shuffle-proxies-at-the-edge)
### Authors
* Patrick Tser Jern Kon, Rice University
* Aniket Gattani, Rice University
* Dhiraj Saharia, Georgetown University
* Tianyu Cao, Rice University
* Diogo Barradas, University of Waterloo
* Ang Chen, University of Michigan
* Micah Sherr, Georgetown University
* Benjamin E. Ujcich, Georgetown University
### Abstract
> NetShuffle is a censorship resistance system that offers "shuffle proxies," where regular proxy services (e.g., HTTPS proxies, Tor bridges) are decoupled from their addresses via continuous in-network change. This makes shuffle proxies significantly more difficult to block compared to their traditional counterparts, because the network locations are now in constant flux. NetShuffle is also designed to engage a new class of support base—edge networks—which have received scant attention from existing work. NetShuffle uses emerging programmable switches to provide the shuffle, while staying otherwise transparent to services and clients, enabling it to be applied as a drop-in network appliance to help promote Internet freedom. We have prototyped NetShuffle in testbed environments and operated it seamlessly on a slice of a live campus network for more than a month, showing that it provides network shuffles in a way that is transparent and incurs negligible overheads.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646652/](https://ieeexplore.ieee.org/document/10646652/)
## R-CAID: Embedding Root Cause Analysis within Provenance-based Intrusion Detection.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#r-caid-embedding-root-cause-analysis-within-provenance-based-intrusion-detection)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#r-caid-embedding-root-cause-analysis-within-provenance-based-intrusion-detection)
### Authors
* Akul Goyal, Computer Science, University of Illinois at Urbana-Champaign
* Gang Wang, Computer Science, University of Illinois at Urbana-Champaign
* Adam Bates, Computer Science, University of Illinois at Urbana-Champaign
### Abstract
> In modern enterprise security, endpoint detection products fire an alert when process activity matches known attack behavior patterns. Human analysts then perform Root Cause Analysis (RCA) over event logs to determine if the alert is indicative of an actual attack. Data Provenance can help to automate RCA by representing event logs as a causal dependency graphs; in fact, researchers are now examining whether provenance-based anomaly detection should replace pattern-based detection altogether. Unfortunately, we observe that current approaches leverage off-the-shelf graph embedding techniques that are unable to associate events with their root causes. This shortcoming not only fails to capitalize on the RCA capabilities of provenance, but also leaves provenance-based IDS vulnerable to mimicry and evasion attacks.This work presents the design and implementation of R-CAID, a novel approach to incorporate RCA into provenance-based IDS. R-CAID precomputes each node’s root causes during graph construction, then directly links those nodes to their root causes during embedding. Further, R-CAID’s classification model is node/process-level, rather than graph/system-level, bringing it more in line with the precision of commercial systems. Under a passive adversary model, we find that R-CAID consistently outperforms baseline graph neural networks, sequence-based log IDS, and even a commercial endpoint detection system. Under a white-box active adversary model, R-CAID maintains a high level of performance (e.g., for DARPA Theia, 0.94 AUC adversarial down from 0.99 passive). R-CAID achieves this by associating each system entity with its immutable and unforgeable root causes, preventing adversaries from being able to masquerade as legitimate processes. This work is thus the first to demonstrate the promise of provenance-based IDS in a manner that avoids the pitfalls of mimicry and evasion.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646671/](https://ieeexplore.ieee.org/document/10646671/)
## Kairos: Practical Intrusion Detection and Investigation using Whole-system Provenance.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#kairos-practical-intrusion-detection-and-investigation-using-whole-system-provenance)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#kairos-practical-intrusion-detection-and-investigation-using-whole-system-provenance)
### Authors
* Zijun Cheng, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Qiujian Lv, Institute of Information Engineering, Chinese Academy of Sciences, China
* Jinyuan Liang, University of British Columbia, British Columbia, Canada
* Yan Wang, Institute of Information Engineering, Chinese Academy of Sciences, China
* Degang Sun, Institute of Information Engineering, Chinese Academy of Sciences, China
* Thomas Pasquier, University of British Columbia, British Columbia, Canada
* Xueyuan Han, Wake Forest University, North Carolina, United States
### Abstract
> Provenance graphs are structured audit logs that describe the history of a system’s execution. Recent studies have explored a variety of techniques to analyze provenance graphs for automated host intrusion detection, focusing particularly on advanced persistent threats. Sifting through their design documents, we identify four common dimensions that drive the development of provenance-based intrusion detection systems (PIDSes): scope (can PIDSes detect modern attacks that infiltrate across application boundaries?), attack agnosticity (can PIDSes detect novel attacks without a priori knowledge of attack characteristics?), timeliness (can PIDSes efficiently monitor host systems as they run?), and attack reconstruction (can PIDSes distill attack activity from large provenance graphs so that sysadmins can easily understand and quickly respond to system intrusion?). We present Kairos, the first PIDS that simultaneously satisfies the desiderata in all four dimensions, whereas existing approaches sacrifice at least one and struggle to achieve comparable detection performance.Kairos leverages a novel graph neural network based encoder-decoder architecture that learns the temporal evolution of a provenance graph’s structural changes to quantify the degree of anomalousness for each system event. Then, based on this fine-grained information, Kairos reconstructs attack footprints, generating compact summary graphs that accurately describe malicious activity over a stream of system audit logs. Using state-of-the-art benchmark datasets, we demonstrate that Kairos outperforms previous approaches.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646673/](https://ieeexplore.ieee.org/document/10646673/)
## Flash: A Comprehensive Approach to Intrusion Detection via Provenance Graph Representation Learning.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#flash-a-comprehensive-approach-to-intrusion-detection-via-provenance-graph-representation-learning)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#flash-a-comprehensive-approach-to-intrusion-detection-via-provenance-graph-representation-learning)
### Authors
* Mati Ur Rehman, University of Virginia
* Hadi Ahmadi, Corvic Inc.
* Wajih Ul Hassan, University of Virginia
### Abstract
> Recently, provenance-based Intrusion Detection Systems (IDSes) have gained popularity for their potential in detecting sophisticated Advanced Persistent Threat (APT) attacks. These IDSes employ provenance graphs created from system logs to identify potentially malicious activities. Despite their potential, they face challenges in accuracy, practicality, and scalability, particularly when dealing with large provenance graphs. We present Flash, a scalable IDS that leverages graph representation learning through Graph Neural Networks (GNNs) on data provenance graphs to overcome these limitations. Flash employs a Word2Vec-based semantic encoder to capture essential semantic attributes (e.g., process names and file paths) and the temporal ordering of events within the provenance graph. Furthermore, Flash incorporates a novel adaptation of a GNN-based contextual encoder to efficiently encode both local and global graph structures into expressive node embeddings. To learn benign node behaviors, we utilize a lightweight classifier that combines the GNN and Word2Vec embeddings. Recognizing the computational demands and slow processing times of GNN, particularly for large provenance graphs, we have developed an embedding recycling database to store the node embeddings generated during the training phase. During runtime, our lightweight classifier leverages the stored embeddings, obviating the need to regenerate GNN embeddings, thus facilitating real-time APT detection. Extensive evaluation of Flash on real-world datasets demonstrates superior detection accuracy compared to existing provenance-based IDSes. The results also illustrate Flash’s scalability, robustness against mimicry attacks, and potential for accelerating the alert verification process.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646725/](https://ieeexplore.ieee.org/document/10646725/)
## eAudit: A Fast, Scalable and Deployable Audit Data Collection System.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#eaudit-a-fast-scalable-and-deployable-audit-data-collection-system)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#eaudit-a-fast-scalable-and-deployable-audit-data-collection-system)
### Authors
* R. Sekar, Stony Brook University, NY, USA
* Hanke Kimm, Stony Brook University, NY, USA
* Rohit Aich, Stony Brook University, NY, USA
### Abstract
> Today’s advanced cyber attack campaigns can often bypass all existing protections. The primary defense against them is after-the-fact detection, followed by a forensic analysis to understand their impact. Such an analysis requires audit logs (also called provenance logs) that faithfully capture all activities and data flows on each host. While the Linux auditing daemon (auditd) and sysdig are the most popular tools for audit data collection, a number of other systems, authored by researchers and practitioners, are also available. Through a motivating experimental study, we show that these systems impose high overheads, slowing workloads by 2× to 8×; lose a majority of events under sustained workloads; and are vulnerable to log tampering that erases log entries before they are committed to persistent storage. We present a new approach that overcomes these challenges. By relying on the extended Berkeley Packet Filter (eBPF) framework built into recent Linux versions, we avoid changes to the kernel code, and hence our data collector works out of the box on most Linux distributions. We present new design, tuning and optimization techniques that enables our system to sustain workloads that are an order of magnitude more intense than those causing major data loss with existing systems. Moreover, our system incurs only a fraction of the overhead of previous systems, while considerably reducing data volumes, and shrinking the log tampering window by ~ 100×.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646884/](https://ieeexplore.ieee.org/document/10646884/)
## Understanding and Bridging the Gap Between Unsupervised Network Representation Learning and Security Analytics.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#understanding-and-bridging-the-gap-between-unsupervised-network-representation-learning-and-security-analytics)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#understanding-and-bridging-the-gap-between-unsupervised-network-representation-learning-and-security-analytics)
### Authors
* Jiacen Xu, University of California, Irvine
* Xiaokui Shu, IBM Research
* Zhou Li, University of California, Irvine
### Abstract
> Cyber-attacks have become increasingly sophisticated, which also drives the development of security analytics that produce countermeasures by mining organizational logs, e.g., network and authentication logs. Graph security analytics (GSA) that can model the complex communication patterns between users/hosts/processes have been extensively developed and deployed. Among the techniques that power GSAs, Unsupervised Network Representation Learning (UNRL) is gaining traction, which learns a latent graph representation, i.e., node embedding, and customizes it for different downstream tasks. Prominent advantages have been demonstrated by UNRL-based GSAs, as UNRL trains a detection model in an unsupervised way and exempts the model developers from the duty of feature engineering.In this paper, we revisit the designs of previous UNRL-based GSAs to understand how they perform in real-world settings. We found their performance is questionable on large-scale, noisy log datasets like LANL authentication dataset, and the main reason is that they follow the standard UNRL framework that trains a generic model in an attack-agnostic way. We argue that generic attack characteristics should be considered, and propose Argus, a UNRL-based GSA with new encoder and decoder designs. Argus is also designed to work on discrete temporal graphs (DTG) to exploit the graph temporal dynamics. Our evaluation of two large-scale datasets, LANL and OpTC, shows it can outperform the state-of-the-art approaches by a large margin.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646646/](https://ieeexplore.ieee.org/document/10646646/)
## DrSec: Flexible Distributed Representations for Efficient Endpoint Security.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#drsec-flexible-distributed-representations-for-efficient-endpoint-security)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#drsec-flexible-distributed-representations-for-efficient-endpoint-security)
### Authors
* Mahmood Sharif, Tel Aviv University
* Pubali Datta, University of Massachusetts Amherst
* Andy Riddle, University of Illinois Urbana-Champaign
* Kim Westfall, University of Illinois Urbana-Champaign
* Adam Bates, University of Illinois Urbana-Champaign
* Vijay Ganti, Google
* Matthew Lentzk, Duke University; VMware
* David Ott, VMware
### Abstract
> The increasing complexity of attacks has given rise to varied security applications tackling profound tasks, ranging from alert triage to attack reconstruction. Yet, security products, such as Endpoint Detection and Response, bring together applications that are developed in isolation, trigger many false positives, miss actual attacks, and produce limited labels useful in supervised learning schemes. To address these challenges, we propose DrSec—a system employing self-supervised learning to pre-train foundation language models (LMs) that ingest event-sequence data and emit distributed representations for processes. Once pre-trained, the LMs can be adapted to solve different downstream tasks with limited to no supervision, helping unify the currently fractured application ecosystem. We trained DrSec with two LM types on a real-world dataset containing ∼91M processes and ∼2.55B events, and tested it in three application domains. We found that DrSec enables accurate, unsupervised process identification; outperforms leading methods on alert triage to reduce alert fatigue (e.g., 75.11% vs. ≤64.31% precision-recall area under curve); and accurately learns expert-developed rules, allowing tuning incident detectors to control false positives and negatives.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646721/](https://ieeexplore.ieee.org/document/10646721/)
## Do You Play It by the Books? A Study on Incident Response Playbooks and Influencing Factors.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#do-you-play-it-by-the-books-a-study-on-incident-response-playbooks-and-influencing-factors)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#do-you-play-it-by-the-books-a-study-on-incident-response-playbooks-and-influencing-factors)
### Authors
* Daniel Schlette, University of Regensburg
* Philip Empl, University of Regensburg
* Marco Caselli, Siemens AG
* Thomas Schreck, HM Munich University of Applied Sciences
* Günther Pernul, University of Regensburg
### Abstract
> Incident response "playbooks" are structured sets of operational procedures organizations use to instruct humans or machines on performing countermeasures against cybersecurity threats. These playbooks generally combine information about a given threat and organizational aspects relevant within the context of an organization. Both types of information are crucial for using, maintaining, and sharing playbooks across organizations as they ensure effectiveness and confidentiality. While practitioners show great interest in playbooks, their characteristics have not yet been thoroughly investigated from a research perspective. For this reason, we explore the topic by analyzing what is inside a playbook. Our approach consists of a comprehensive empirical assessment of available data (1217 playbooks), an online study with 147 participants, and final in-depth interviews with nine security professionals to consolidate and validate our findings. We notably find intrinsic ambiguities in the way practitioners and organizations define their playbooks. Furthermore, we notice that available playbooks cannot be used outright which might currently impair their wide use across different cybersecurity actors. As a result, we can conclude that organizations do "play it by the books" but individually define what is inside their playbooks and which areas of incident response they might address.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646756/](https://ieeexplore.ieee.org/document/10646756/)
## Jbeil: Temporal Graph-Based Inductive Learning to Infer Lateral Movement in Evolving Enterprise Networks.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#jbeil-temporal-graph-based-inductive-learning-to-infer-lateral-movement-in-evolving-enterprise-networks)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#jbeil-temporal-graph-based-inductive-learning-to-infer-lateral-movement-in-evolving-enterprise-networks)
### Authors
* Joseph Khoury, Division of Computer Science and Engineering, Louisiana State University, LA, USA
* Đorđe Klisura, Division of Computer Science and Engineering, Louisiana State University, LA, USA
* Hadi Zanddizari, The Cyber Center for Security and Analytics, The University of Texas at San Antonio, TX, USA
* Gonzalo De La Torre Parra, The University of the Incarnate Word, TX, USA
* Peyman Najafirad, Secure AI and Autonomy Lab, The University of Texas at San Antonio, TX, USA
* Elias Bou-Harb, Division of Computer Science and Engineering, Louisiana State University, LA, USA
### Abstract
> Lateral Movement (LM) is one of the core stages of advanced persistent threats which continues to compromise the security posture of enterprise networks at large. Recent research work have employed Graph Neural Network (GNN) techniques to detect LM in intricate networks. Such approaches employ transductive graph learning, where fixed graphs with full nodes' visibility are employed in the training phase, along with ingesting benign data. These two assumptions in real-world setups (i) do not take into consideration the evolving nature of enterprise networks where dynamic features and connectivity prevail among hosts, users, virtualized environments, and applications, and (ii) hinder the effectiveness of detecting LM by solely training on normal data, especially given the evasive, stealthy, and benign-like behaviors of contemporary malicious maneuvers. Additionally, (iii) complex networks typically do not have the entire visibility of their run-time network processes, and if they do, they often fall short in dynamically tracking LM due to latency issues with passive data analysis.To this end, this paper proposes Jbeil, a data-driven framework for self-supervised deep learning on evolving networks represented as sequences of authentication timed events. The premise of the work lies in applying an encoder on a continuous-time evolving graph to produce the embedding of the visible graph nodes for each time epoch, and a decoder that leverages these embeddings to perform LM link prediction on unseen nodes. Additionally, we enclose a threat sample augmentation mechanism within Jbeil to ensure a well-informed notion on advanced LM attacks. We evaluate Jbeil using authentication timed events from the Los Alamos network which achieves an AUC score of 99.73% and a recall score of 99.25% in predicting LM paths, even when 30% of the nodes/edges are not present in the training phase. Additionally, we assess different realistic attack scenarios and demonstrate the potential of Jbeil in predicting LM paths with an AUC score of 99% in its inductive and transductive settings, out performing the state-of-the-art by a significant margin.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646732/](https://ieeexplore.ieee.org/document/10646732/)
## Efficient and Generic Microarchitectural Hash-Function Recovery.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#efficient-and-generic-microarchitectural-hash-function-recovery)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#efficient-and-generic-microarchitectural-hash-function-recovery)
### Authors
* Lukas Gerlach, CISPA Helmholtz Center for Information Security
* Simon Schwarz, Saarland University
* Nicolas Faroß, Department of Mathematics, Saarland University
* Michael Schwarz, CISPA Helmholtz Center for Information Security
### Abstract
> Modern CPUs use a variety of undocumented microarchitectural hash functions to efficiently distribute data within microarchitectural structures such as caches. A well-known function is the cache slice function that distributes cache lines to the slices of the last-level cache. Knowing these functions considerally improves microarchitectural attacks, such as Prime+Probe or Rowhammer. However, while several such linear functions have been reverse-engineered, there is no generic or automated approach for reverse-engineering non-linear functions, which are common with modern CPUs.In this paper, we introduce a novel generic approach for automatically reverse-engineering a wide range of microarchitectural hash functions. Our approach combines techniques initially used for logic-gate minimization and from computer algebra to infer the hash functions based on input-output pairs observed via side channels. With our framework, we infer 3 previously unknown non-linear hash functions on both AMD and Intel CPUs, including the new Alder Lake hybrid-CPU architecture. We verify our approach by reproducing known hash functions and evaluating side-channel attacks that rely on these functions, resulting in success rates above 97.65 %. We stress the need to design such functions with both performance and security in mind and discuss alternative designs that can be used in future CPUs.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646827/](https://ieeexplore.ieee.org/document/10646827/)
## BUSted!!! Microarchitectural Side-Channel Attacks on the MCU Bus Interconnect.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#busted-microarchitectural-side-channel-attacks-on-the-mcu-bus-interconnect)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#busted-microarchitectural-side-channel-attacks-on-the-mcu-bus-interconnect)
### Authors
* Cristiano Rodrigues, Centro ALGORITMI / LASI, Universidade do Minho
* Daniel Oliveira, Centro ALGORITMI / LASI, Universidade do Minho
* Sandro Pinto, Centro ALGORITMI / LASI, Universidade do Minho
### Abstract
> Spectre and Meltdown have pushed the research community toward an otherwise-unavailable understanding of the security implications of processors’ microarchitecture. Notwithstanding, research efforts have concentrated on high-end processors (e.g., Intel, AMD, Arm Cortex-A), and very little has been done for microcontrollers (MCU) that power billions of small embedded and IoT devices. In this paper, we present BUSted. BUSted is a novel side-channel attack that explores the side effects of the MCU bus interconnect arbitration logic to bypass security guarantees enforced by memory protection primitives. Side-channel attacks on MCUs pose incremental and unforeseen challenges, which are strictly tied to the resource-constrained nature of these systems (e.g., single-core CPU, stateless bus). We devise a unique approach that relies on the concept of hardware gadgets. We present practical attacks on state-of-the-art Armv8-M MCUs with TrustZone-M, running the Trusted Firmware-M (TF-M). In contrast to the Nemesis attack, our attack is practical on Arm Cortex-M MCUs, and our findings suggest that it can scale across the full MCU spectrum.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646647/](https://ieeexplore.ieee.org/document/10646647/)
## Architectural Mimicry: Innovative Instructions to Efficiently Address Control-Flow Leakage in Data-Oblivious Programs.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#architectural-mimicry-innovative-instructions-to-efficiently-address-control-flow-leakage-in-data-oblivious-programs)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#architectural-mimicry-innovative-instructions-to-efficiently-address-control-flow-leakage-in-data-oblivious-programs)
### Authors
* Hans Winderix, Imec-DistriNet, KU Leuven
* Marton Bognar, Imec-DistriNet, KU Leuven
* Job Noorman, Imec-DistriNet, KU Leuven
* Lesly-Ann Daniel, Imec-DistriNet, KU Leuven
* Frank Piessens, Imec-DistriNet, KU Leuven
### Abstract
> The control flow of a program can often be observed through side-channel attacks. Hence, when control flow depends on secrets, attackers can learn information about these secrets. Widely used software-based countermeasures ensure that attacker-observable aspects of the control flow do not depend on secrets, relying on techniques like dummy execution (for balancing code) or conditional execution (for linearizing code). In the current state-of-practice, the primitives to implement these techniques have to be found in an existing instruction set architecture (ISA) that was not designed a priori to provide them, leading to performance, security, and portability issues. To counter these issues, this paper proposes lightweight hardware extensions for supporting these techniques in a principled way. We propose (1) a novel hardware mechanism (mimic execution), that executes an instruction stream only for its attacker-observable effects, and suppresses (most) architectural effects, and (2) ISA support (called AMi, for Architectural Mimicry) and programming models to effectively use mimic execution to balance or linearize code. We show the feasibility and benefits of our proposal by implementing mimic execution and AMi for a 32-bit out-of-order RISC-V core that leaks control flow in multiple ways (via e.g., the branch predictor, instruction timings, and the data cache). Our experimental evaluation shows that the hardware cost is low (most importantly, no impact on the processor′s critical path), and that AMi enables significant performance improvements. In particular, AMi reduces the overhead of state-of-the-art linearized code by 60% in our benchmarks.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646702/](https://ieeexplore.ieee.org/document/10646702/)
## GPU.zip: On the Side-Channel Implications of Hardware-Based Graphical Data Compression.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#gpu-zip-on-the-side-channel-implications-of-hardware-based-graphical-data-compression)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#gpu-zip-on-the-side-channel-implications-of-hardware-based-graphical-data-compression)
### Authors
* Yingchen Wang, University of Texas at Austin
* Riccardo Paccagnella, Carnegie Mellon University
* Zhao Gang, University of Texas at Austin
* Willy R. Vasquez, University of Texas at Austin
* David Kohlbrenner, University of Washington
* Hovav Shacham, University of Texas at Austin
* Christopher W. Fletcher, University of Illinois Urbana-Champaign
### Abstract
> Compression is a widely-deployed optimization that reduces data movement throughout modern computing stacks. Unfortunately, it is also a well-known source of side-channel leakage capable of leaking (potentially) fine-grained functions of the underlying data. There has, however, been a saving grace. Compression is typically software visible. Thus, software can "opt out" of harm’s way by disabling compression when sensitive data is involved, and tailor mitigations to known, public compression algorithms.This paper challenges the above conventional wisdom by demonstrating the existence of, and exploiting, software-transparent uses of compression. Specifically, we find that integrated GPUs from Intel and AMD vendors compress graphical data in vendor-specific and undocumented ways—even when software does not specifically request compression. Compression induces data-dependent DRAM traffic and cache utilization, which can be measured through side-channel analysis. We show the efficacy of this side channel by performing cross-origin SVG filter pixel stealing attacks through the browser.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646718/](https://ieeexplore.ieee.org/document/10646718/)
## ConjunCT: Learning Inductive Invariants to Prove Unbounded Instruction Safety Against Microarchitectural Timing Attacks.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#conjunct-learning-inductive-invariants-to-prove-unbounded-instruction-safety-against-microarchitectural-timing-attacks)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#conjunct-learning-inductive-invariants-to-prove-unbounded-instruction-safety-against-microarchitectural-timing-attacks)
### Authors
* Sushant Dinesh, University of Illinois Urbana-Champaign
* Madhusudan Parthasarathy, University of Illinois Urbana-Champaign
* Christopher W. Fletcher, University of Illinois Urbana-Champaign
### Abstract
> The past decade has seen a deluge of microarchitectural side channels stemming from a variety of hardware structures (the cache, branch predictor, execution ports, the TLB, speculation, etc). These attacks stem from software that passes sensitive data to so-called unsafe or transmitter instructions, i.e., those whose execution time depends on their operands’ values. Correspondingly, there has been a large number of defenses (spanning hardware and software) that attempt to enforce the policy: sensitive data ↛ unsafe instruction operand. Implementing this policy assumes that one can identify unsafe instructions for a given microarchitecture. But this is quite difficult—requiring the designer to analyze potentially unbounded compositions of dynamic instructions to tease out subtle interactions they may have with one another.This paper addresses the above challenge by proposing ConjunCT. Given RTL: ConjunCT proves, for all possible executions, whether each ISA instruction is either i) safe for an unbounded number of cycles or ii) unsafe. This is done using a combination of symbolic analysis (to generate examples) and inductive invariant learning (bootstrapped by said examples), and enabled by a novel conditional information flow predicate that we show is useful for analyzing information flows in processor pipelines.We demonstrate our analysis on several RISC-V microarchitectures of varying complexity, and use it to extract the safe/unsafe sets for each. Through a judicious use of program synthesis, we are able to automate the analysis (almost entirely) from end to end, e.g., requiring only 8 designer annotations to fully analyze the RISC-V RocketChip core. Lastly, we show through several case studies how ConjunCT can be used by microarchitects to understand the security implications of an advanced optimization, and how the invariants generated by ConjunCT can be used to localize where in the microarchitecture unsafety occurs.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646711/](https://ieeexplore.ieee.org/document/10646711/)
## Prune+PlumTree - Finding Eviction Sets at Scale.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#prune-plumtree-finding-eviction-sets-at-scale)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#prune-plumtree-finding-eviction-sets-at-scale)
### Authors
* Tom Kessous, Ben-Gurion University of the Negev
* Niv Gilboa, Ben-Gurion University of the Negev
### Abstract
> Finding eviction sets for a large fraction of the cache is an essential preprocessing step for Prime+Probe based cache side-channel attacks. Previous work on this problem reduces it to finding an eviction set for each cache set independently. In a w-way, set-associative cache with s cache sets this approach requires Ω(s
> 
> <sup xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">2</sup>
> 
> w) time.This work introduces the Prune+PlumTree algorithm, which finds eviction sets for any constant fraction of the cache in time O(sw log s), assuming the LRU cache replacement policy. We complement the asymptotic result with tests on current Intel processors, with 16k sets in the Last Level Cache (LLC) and 4 Kbyte memory pages, finding eviction sets for more than 98% of the LLC in 40–63 milliseconds, improving over previous work by two orders of magnitude. Simulating Prune+PlumTree on a standard, i.e. unskewed, randomized cache, mapping addresses to random cache sets, results in finding eviction sets for more than 98% of a 12-way cache with 2
> 
> <sup xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">14</sup>
> 
> sets in less than 7.4 seconds.We further adapt Prune+PlumTree to caches with a random replacement policy based on a novel method to prune a large set of random memory lines to a union of minimal eviction sets in this setting. This variant of Prune+PlumTree runs in time O(sw
> 
> <sup xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">2</sup>
> 
> log s). As a final contribution, we show that Prune+PlumTree for the LRU replacement policy has asymptotically tight running time by proving that any algorithm that maps a constant fraction of the cache runs in time Ω(sw log s).

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646765/](https://ieeexplore.ieee.org/document/10646765/)
## Leaky Address Masking: Exploiting Unmasked Spectre Gadgets with Noncanonical Address Translation.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#leaky-address-masking-exploiting-unmasked-spectre-gadgets-with-noncanonical-address-translation)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#leaky-address-masking-exploiting-unmasked-spectre-gadgets-with-noncanonical-address-translation)
### Authors
* Mathé Hertogh, Vrije Universiteit, Amsterdam, The Netherlands
* Sander Wiebing, Vrije Universiteit, Amsterdam, The Netherlands
* Cristiano Giuffrida, Vrije Universiteit, Amsterdam, The Netherlands
### Abstract
> Linear Address Masking (LAM) is a recently announced Intel feature that enables the CPU to mask off some upper bits before dereferencing a 64-bit pointer. The key idea behind LAM (as well as the similar Upper Address Ignore or UAI from AMD), is to allow software to efficiently make use of untranslated bits of 64-bit linear addresses for metadata. The assumption is that, with LAM (or UAI) features enabled, one can implement fast security (e.g., memory safety) checks and ultimately improve security of production systems.In this paper, we challenge this assumption and show that LAM features can actually degrade security in production by dramatically increasing the Spectre attack surface. To support this claim, we present a new Spectre covert channel based on noncanonical address translation and address key challenges to implement it in practice. For instance, we exploit properties of modern TLBs to craft a reliable signal and LAM features to (crucially) bypass canonicality checks. Moreover, we show that, unlike classic Spectre covert channels, ours unlocks generic (or unmasked) Spectre gadgets encoding high-entropy secrets as dereferenced pointers. Unlike classic (or masked) gadgets, we show the latter escape deployed mitigations and are pervasive in high-value targets such as the Linux kernel. To showcase the new attack surface, we present an end-to-end exploit for Spectre based on LAM (SLAM) targeting upcoming Intel CPUs. We specifically focus on the BHI Spectre variant and show that, despite mitigations believed to eradicate the attack surface, our exploit can abuse a variety of gadgets in the latest Linux kernel and leak the root password hash within minutes from kernel memory. We conclude by evaluating mitigations.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646870/](https://ieeexplore.ieee.org/document/10646870/)
## Rethinking IC Layout Vulnerability: Simulation-Based Hardware Trojan Threat Assessment with High Fidelity.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#rethinking-ic-layout-vulnerability-simulation-based-hardware-trojan-threat-assessment-with-high-fidelity)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#rethinking-ic-layout-vulnerability-simulation-based-hardware-trojan-threat-assessment-with-high-fidelity)
### Authors
* Xinming Wei, School of Computer Science, Peking University
* Jiaxi Zhang, School of Computer Science, Peking University
* Guojie Luo, School of Computer Science, Peking University
### Abstract
> Due to the escalating complexity of chip design and the exorbitant cost of building cutting-edge manufacturing facilities, outsourcing the fabrication of Integrated Circuits (ICs) is prevalent in modern semiconductor industry. However, significant security risks may arise because untrustworthy foundries can conduct insidious attacks without close supervision. Since prior works show the feasibility of implementing practical foundry-level Trojan attacks that circumvent post-fabrication detection, IC designers should protect their IC layouts before sending them to a third-party foundry, and such protections are known as design-time defenses. To this end, security metrics for layout vulnerability assessment are crucial to test the effectiveness of the proposed defenses. However, existing metrics are geometric-only and Trojan-oblivious, failing to capture the fundamental aspects of foundry-level Trojan insertion and the associated side effects.To bridge the gap between real attacks and threat prediction, we present SiliconCritic, a simulation-based, extensible framework that leverages design-time techniques to simulate the blackbox foundry-level Trojan attacks and post-fabrication analysis. SiliconCritic encodes the difficulty of inserting a specific Trojan into a finalized physical layout by measuring the variation of side-channel parameters (timing, power) after the simulated Trojan insertion, where larger deviations denote better detectability and thus enhanced security. SiliconCritic allows IC designers to interactively refine defensive strategies against the objective Trojan based on the feedback of side-channel analysis. Through evaluations on real-world ASIC designs and reported hardware Trojans, SiliconCritic demonstrates the limitations of existing layout-level defenses and highlights the influence of Trojan properties on defensive efficacy. Our work refreshes the understanding of Trojan prevention and suggests future directions for defenses against untrustworthy foundries.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646854/](https://ieeexplore.ieee.org/document/10646854/)
## Routing Attacks on Cryptocurrency Mining Pools.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#routing-attacks-on-cryptocurrency-mining-pools)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#routing-attacks-on-cryptocurrency-mining-pools)
### Authors
* Muoi Tran, ETH, Zurich
* Theo von Arx, ETH, Zurich
* Laurent Vanbever, ETH, Zurich
### Abstract
> Mining pools have been the driving force for ensuring the security of multiple proof-of-work (PoW) cryptocurrencies. Under the de facto protocol Stratum, pools allow miners to collaborate, discover new blocks, and earn rewards collectively. Recently, the blockchain community has been promoting the adoption of a more secure Stratum protocol known as Stratum V2. In this paper, we introduce Erosion, a novel network-level attack that applies to both Stratum and Stratum V2 protocols. The essence of the Erosion attack lies in its ability to disrupt connections between miners and a targeted mining pool, significantly impairing the miners’ contributed PoWs and reducing the victim’s mining power. We also discover a vulnerability in the Stratum V2 protocol that allows the adversary to persistently disrupt a connection by tampering with a single packet, thus enhancing the attack’s stealthiness. Our survey shows that the Erosion adversary can readily execute attacks against a significant majority (e.g., 91%) of mining pools across the top ten cryptocurrencies. We also observe an extreme mining centralization that enables Erosion adversaries to simultaneously target multiple pools and cryptocurrencies. Furthermore, our focused evaluation of pooled mining in Bitcoin reveals that thousands of different adversaries can gain control over the majority of Bitcoin mining power, with one potentially malicious Autonomous System capable of taking down 96% of the total mining power.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646806/](https://ieeexplore.ieee.org/document/10646806/)
## Sweep-UC: Swapping Coins Privately.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#sweep-uc-swapping-coins-privately)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#sweep-uc-swapping-coins-privately)
### Authors
* Lucjan Hanzlik, CISPA Helmholtz Center for Information Security
* Julian Loss Sri, CISPA Helmholtz Center for Information Security
* AravindaKrishnan Thyagarajan, NTT Research
* Benedikt Wagner, CISPA Helmholtz Center for Information Security, Saarland University
### Abstract
> Fair exchange (also referred to as atomic swap) is a fundamental operation in any cryptocurrency that allows users to atomically exchange coins. While a large body of work has been devoted to this problem, most solutions lack on-chain privacy. Thus, coins retain a public transaction history which is known to degrade the fungibility of a currency. This has led to a flourishing line of related research on fair exchange with privacy guarantees. Existing protocols either rely on heavy scripting (which also degrades fungibility and leads to high transaction fees), do not support atomic swaps across a wide range of currencies, or come with incomplete security proofs.To overcome these limitations, we introduce Sweep-UC
> 
> <sup xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">1</sup>
> 
> , the first fair exchange protocol that simultaneously is efficient, minimizes scripting, and is compatible with a wide range of currencies (more than the state of the art). We build SweepUC from modular sub-protocols and give a rigorous security analysis in the UC framework. Many of our tools and security definitions can be used in standalone fashion and may serve as useful components for future constructions of fair exchange.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646880/](https://ieeexplore.ieee.org/document/10646880/)
## SoK: Security and Privacy of Blockchain Interoperability.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#sok-security-and-privacy-of-blockchain-interoperability)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#sok-security-and-privacy-of-blockchain-interoperability)
### Authors
* André Augusto, INESC-ID; Instituto Superior Técnico
* Rafael Belchior, INESC-ID; Instituto Superior Técnico
* Miguel Correia, INESC-ID; Instituto Superior Técnico
* André Vasconcelos, INESC-ID; Instituto Superior Técnico
* Luyao Zhang, Duke Kunshan University
* Thomas Hardjono, MIT Connection Science
### Abstract
> Recent years have witnessed significant advancements in cross-chain technology. However, the field faces two pressing challenges. On the one hand, hacks on cross-chain bridges have led to monetary losses of around 3.1 billion USD, highlighting flaws in security models governing interoperability mechanisms and the ineffectiveness of incident response frameworks. On the other hand, users and bridge operators experience restricted privacy, which broadens the potential attack surface.In this paper, we present the most comprehensive study to date on the security and privacy of blockchain interoperability. We employ a systematic literature review, yielding a corpus of 212 relevant documents, including 58 academic papers and 154 gray literature documents, out of a pool of 531 results. We systematically categorize 57 interoperability solutions based on a novel security and privacy taxonomy. Our dataset, comprising academic research, disclosures from bug bounty programs, and audit reports, exposes 45 cross-chain vulnerabilities, 4 privacy leaks, and 92 mitigation strategies. Leveraging this data, we analyze 18 notable bridge hacks accounting for over 2.9 billion USD in losses, mapping them to the identified vulnerabilities.Our findings reveal that a substantial portion (65.8%) of stolen funds originates from projects secured by intermediary permissioned networks with unsecured cryptographic key operations. Privacy-wise, we demonstrate that achieving unlinkability in cross-chain transactions is contingent on the underlying ledgers providing some form of confidentiality. Our study offers 17 critical insights into the security and privacy of cross-chain systems. We pinpoint promising future research directions, underscoring the urgency of enhancing security and privacy efforts in cross-chain technology. The identified improvements have the potential to mitigate the financial risks associated with bridge hacks, fostering user trust in the blockchain ecosystem and, consequently, wider adoption.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646648/](https://ieeexplore.ieee.org/document/10646648/)
## Non-Atomic Arbitrage in Decentralized Finance.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#non-atomic-arbitrage-in-decentralized-finance)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#non-atomic-arbitrage-in-decentralized-finance)
### Authors
### Abstract
> The prevalence of maximal extractable value (MEV) in the Ethereum ecosystem has led to a characterization of the latter as a dark forest. Studies of MEV have thus far largely been restricted to purely on-chain MEV, i.e., sandwich attacks, cyclic arbitrage, and liquidations. In this work, we shed light on the prevalence of non-atomic arbitrage on decentralized exchanges (DEXes) on the Ethereum blockchain. Importantly, non-atomic arbitrage exploits price differences between DEXes on the Ethereum blockchain as well as exchanges outside the Ethereum blockchain (i.e., centralized exchanges or DEXes on other blockchains). Thus, non-atomic arbitrage is a type of MEV that involves actions on and off the Ethereum blockchain.In our study of non-atomic arbitrage, we uncover that more than a fourth of the volume on Ethereum’s biggest five DEXes from the merge until 31 October 2023 can likely be attributed to this type of MEV. We further highlight that only eleven searchers are responsible for more than 80% of the identified non-atomic arbitrage volume sitting at a staggering $132 billion and draw a connection between the centralization of the block construction market and non-atomic arbitrage. Finally, we discuss the security implications of these high-value transactions that account for more than 10% of Ethereum’s total block value and outline possible mitigations.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646836/](https://ieeexplore.ieee.org/document/10646836/)
## Optimal Flexible Consensus and its Application to Ethereum.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#optimal-flexible-consensus-and-its-application-to-ethereum)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#optimal-flexible-consensus-and-its-application-to-ethereum)
### Authors
* Joachim Neu, Stanford University
* Srivatsan Sridhar, Stanford University
* Lei Yang, Massachusetts Institute of Technology
* David Tse, Stanford University
### Abstract
> Classic BFT consensus protocols guarantee safety and liveness for all clients if fewer than one-third of replicas are faulty. However, in applications such as high-value payments, some clients may want to prioritize safety over liveness. Flexible consensus allows each client to opt for higher safety resilience, albeit at the expense of reduced liveness resilience. We present the first construction that allows optimal safety–liveness tradeoff for every client simultaneously. This construction is modular and is realized as an add-on applied on top of an existing consensus protocol. The add-on consists of an additional round of voting and permanent locking done by the replicas, to sidestep a sub-optimal quorum-intersection-based constraint present in previous solutions. We adapt our construction to the existing Ethereum protocol to derive optimal flexible confirmation rules that clients can adopt unilaterally without requiring system-wide changes. This is possible because existing Ethereum protocol features can double as the extra voting and locking. We show an implementation using Ethereum’s consensus API.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646887/](https://ieeexplore.ieee.org/document/10646887/)
## PriDe CT: Towards Public Consensus, Private Transactions, and Forward Secrecy in Decentralized Payments.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#pride-ct-towards-public-consensus-private-transactions-and-forward-secrecy-in-decentralized-payments)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#pride-ct-towards-public-consensus-private-transactions-and-forward-secrecy-in-decentralized-payments)
### Authors
* Yue Guo, J.P. Morgan AlgoCRYPT Center of Excellence, J.P.Morgan Chase & Co., New York, NY, USA
* Harish Karthikeyan, J.P. Morgan AlgoCRYPT Center of Excellence, J.P.Morgan Chase & Co., New York, NY, USA
* Antigoni Polychroniadou, J.P. Morgan AlgoCRYPT Center of Excellence, J.P.Morgan Chase & Co., New York, NY, USA
* Chaddy Huussin, J.P. Morgan AlgoCRYPT Center of Excellence, J.P.Morgan Chase & Co., New York, NY, USA
### Abstract
> Anonymous Zether, proposed by Bünz et al. (FC, 2020) and subsequently improved by Diamond (IEEE S&P, 2021) is an account-based confidential payment mechanism that works by using a smart contract to achieve privacy (i.e. identity of receivers to transactions and payloads are hidden). In this work, we look at simplifying the existing protocol while also achieving batching of transactions for multiple receivers, while ensuring consensus and forward secrecy. To the best of our knowledge, this work is the first to formally study the notion of forward secrecy in the setting of blockchain, borrowing a very popular and useful idea from the world of secure messaging. Specifically, we introduce:•FUL-Zether, a forward-secure version of Zether (Bünz et al. , FC, 2020),•PRIvate DEcentralized Confidential Transactions (PriDe CT), a much-simplified version of Anonymous Zether that achieves competitive performance and enables batching of transactions for multiple receivers.•PRIvate DEcentralized Forward-secure Until Last update Confidential Transactions (PriDeFUL CT), a forward-secure version of PriDe CT.We also present an open-source, Ethereum-based implementation of our system. PriDe CT uses linear homomor-phic encryption as Anonymous Zether but with simpler zero-knowledge proofs. PriDeFUL CT uses an updatable public key encryption scheme to achieve forward secrecy by introducing a new DDH-based construction in the standard model.In terms of transaction sizes, Quisquis (Asiacrypt, 2019), which is the only cryptocurrency that supports batchability (albeit in the UTXO model), has 15 times more group elements than PriDe CT. Meanwhile, for a ring of N receivers, Anonymous Zether requires 6 log N more terms even without accounting for the ability to batch in PriDe CT. Further, our implementation indicates that, for N = 32, even if there were 7 intended receivers, PriDe CT outperforms Anonymous Zether in proving time and gas consumption.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646828/](https://ieeexplore.ieee.org/document/10646828/)
## POMABuster: Detecting Price Oracle Manipulation Attacks in Decentralized Finance.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#pomabuster-detecting-price-oracle-manipulation-attacks-in-decentralized-finance)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#pomabuster-detecting-price-oracle-manipulation-attacks-in-decentralized-finance)
### Authors
* Rui Xi, Department of Electrical and Computer Engineering, University of British Columbia (UBC), Vancouver, Canada
* Zehua Wang, Department of Electrical and Computer Engineering, University of British Columbia (UBC), Vancouver, Canada
* Karthik Pattabiraman, Department of Electrical and Computer Engineering, University of British Columbia (UBC), Vancouver, Canada
### Abstract
> Price Oracle Manipulation Attacks (POMAs) are increasingly occurring in blockchain systems, and result in significant financial loss. Prior work on detecting POMAs only considers single-transaction attacks, in which the entire attack is contained within a single transaction. We systematically study POMAs in blockchain systems (Ethereum). We find that POMAs that span multiple transactions have become much more frequent than single-transaction POMAs. Thus, there is a compelling need for a framework that can detect POMAs spanning multiple transactions. Moreover, there is a need to come up with generic rules for detecting POMAs rather than rely on past attack patterns like prior work has done.We first devise first-principle rules for detecting POMAs based on traditional stock market manipulation attacks. We then propose POMABuster, which leverages these rules to detect POMAs spanning both single and multiple transactions. POMABuster leverages common characteristics of POMA attackers’ behavior to optimize its detection. We evaluate POMABuster on 2.5 years’ worth of transactions from the blockchain, as well as a dataset compiled from the Code4rena audit reports. Our results demonstrate that POMABuster detects nearly 6.5X more POMAs than prior work. Further, POMABuster has a 1% worst-case false positive rate, and zero false negative rate, both of which significantly outperform prior work.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646773/](https://ieeexplore.ieee.org/document/10646773/)
## Specular: Towards Secure, Trust-minimized Optimistic Blockchain Execution.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#specular-towards-secure-trust-minimized-optimistic-blockchain-execution)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#specular-towards-secure-trust-minimized-optimistic-blockchain-execution)
### Authors
* Zhe Ye, University of California, Berkeley
* Ujval Misra, University of California, Berkeley
* Jiajun Cheng, ShanghaiTech University
* Wenyang Zhou, University of Cambridge
* Dawn Song, University of California, Berkeley
### Abstract
> An optimistic rollup (ORU) scales a blockchain’s throughput by delegating computation to an untrusted remote chain (L2), refereeing any state claim disagreements between mutually distrusting L2 operators via an interactive dispute resolution protocol. State-of-the-art ORUs employ a monolithic dispute resolution protocol that tightly couples an L1 referee with a specific L2 client binary—oblivious to the system’s higher-level semantics. We argue that this approach (1) magnifies monoculture failure risk, by precluding trust-minimized and permissionless participation using operator-chosen client software; (2) leads to an unnecessarily large and difficult-to-audit TCB; and, (3) suffers from a frequently-triggered, yet opaque upgrade process—both further increasing auditing overhead, and broadening the governance attack surface.To address these concerns, we outline a methodology for designing a secure and resilient ORU with a minimal TCB, by facilitating opportunistic 1-of-N-version programming. Due to its unique challenges and opportunities, we ground this work concretely in the context of the Ethereum ecosystem—where ORUs have gained significant traction. Specifically, we design a semantically-aware proof system, natively targeting the EVM and its instruction set. We present an implementation in a new ORU, Specular, that opportunistically leverages Ethereum’s existing client diversity with minimal source modification, demonstrating our approach’s feasibility.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646707/](https://ieeexplore.ieee.org/document/10646707/)
## Efficient Detection of Java Deserialization Gadget Chains via Bottom-up Gadget Search and Dataflow-aided Payload Construction.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#efficient-detection-of-java-deserialization-gadget-chains-via-bottom-up-gadget-search-and-dataflow-aided-payload-construction)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#efficient-detection-of-java-deserialization-gadget-chains-via-bottom-up-gadget-search-and-dataflow-aided-payload-construction)
### Authors
* Bofei Chen, Fudan University
* Lei Zhang, Fudan University
* Xinyou Huang, Fudan University
* Yinzhi Cao, Johns Hopkins University
* Keke Lian, Fudan University
* Yuan Zhang, Fudan University
* Min Yang, Fudan University
### Abstract
> Java Object Injection (JOI) is a severe type of vulnerability affecting Java deserialization, which allows adversaries to inject a well-crafted, serialized object, thus triggering a series of chained internal methods (called gadgets) and then achieving attack consequences such as Remote Code Execution (RCE). Prior works studied the problem of detecting and chaining gadgets for JOI vulnerability using static search for possible gadget chains and dynamic construction of payload via fuzzing. However, prior works face two following challenges: (i) path explosion in static gadget search and (ii) a lack of fine-grained object relations connected via object fields in dynamic payload construction.In this paper, we design and implement a novel Java deserialization gadget detection framework, called JDD. On one hand, JDD solves the static path explosion problem by a bottom-up approach, which first looks for gadget fragments and then chains gadget fragments from sinks to sources. The approach reduces maximum static search time from exponential to polynomial, i.e., from O(eM
> 
> <sup xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">n</sup>
> 
> ) to O(M
> 
> <sup xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">2</sup>
> 
> n
> 
> <sup xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">3</sup>
> 
> + enM), where n is the number of dynamic function calls in a gadget chain, M is the average number of dynamic function call candidates, and e is the number of entry points. On the other hand, JDD constructs a so-called Injection Object Construction Diagram (IOCD), which models the dataflow dependencies between injection objects’ fields to facilitate dynamic fuzzing. Our evaluation of JDD upon six real-world Java applications reveals 127 zero-day, exploitable gadget chains with six Common Vulnerabilities and Exposures (CVE) identifiers assigned. We also responsibly reported these vulnerabilities to application developers and obtained their acknowledgments and confirmations.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646692/](https://ieeexplore.ieee.org/document/10646692/)
## "False negative - that one is going to kill you": Understanding Industry Perspectives of Static Analysis based Security Testing.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#false-negative-that-one-is-going-to-kill-you-understanding-industry-perspectives-of-static-analysis-based-security-testing)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#false-negative-that-one-is-going-to-kill-you-understanding-industry-perspectives-of-static-analysis-based-security-testing)
### Authors
* Amit Seal Ami, William & Mary, Williamsburg, VA, USA
* Kevin Moran, University of Central Florida, Orlando, FL, USA
* Denys Poshyvanyk, William & Mary, Williamsburg, VA, USA
* Adwait Nadkarni, William & Mary, Williamsburg, VA, USA
### Abstract
> The demand for automated security analysis techniques, such as static analysis based security testing (SAST) tools continues to increase. To develop SASTs that are effectively leveraged by developers for finding vulnerabilities, researchers and tool designers must understand how developers perceive, select, and use SASTs, what they expect from the tools, whether they know of the limitations of the tools, and how they address those limitations. This paper describes a qualitative study that explores the assumptions, expectations, beliefs, and challenges experienced by developers who use SASTs. We perform in-depth, semi-structured interviews with 20 practitioners who possess a diverse range of software development expertise, as well as a variety of unique security, product, and organizational backgrounds. We identify 17 key findings that shed light on developer perceptions and desires related to SASTs, and also expose gaps in the status quo – challenging long-held beliefs in SAST design priorities. Finally, we provide concrete future directions for researchers and practitioners rooted in an analysis of our findings.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646636/](https://ieeexplore.ieee.org/document/10646636/)
## AirTaint: Making Dynamic Taint Analysis Faster and Easier.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#airtaint-making-dynamic-taint-analysis-faster-and-easier)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#airtaint-making-dynamic-taint-analysis-faster-and-easier)
### Authors
* Qian Sang, TCA/SKLCS, Institute of Software, Chinese Academy of Sciences; University of Chinese Academy of Sciences
* Yanhao Wang, TCA/SKLCS, Institute of Software, Chinese Academy of Sciences
* Yuwei Liu, TCA/SKLCS, Institute of Software, Chinese Academy of Sciences; University of Chinese Academy of Sciences
* Xiangkun Jia, TCA/SKLCS, Institute of Software, Chinese Academy of Sciences
* Tiffany Bao, Arizona State University
* Purui Su, TCA/SKLCS, Institute of Software, Chinese Academy of Sciences; University of Chinese Academy of Sciences
### Abstract
> Dynamic Taint Analysis (DTA) is a widely used data flow tracking technique and helps security researchers in various applications, such as fuzzing and vulnerability analysis. One critical problem that affects its practicability is the significant overhead. According to our analysis, in some scenarios, the state-of-the-art works even slow the program execution efficiency by more than 100x. The high overhead is mainly because most of them conduct taint analysis at the instruction level and use just-in-time instrumentation methods to insert the tracking codes into the original program.In this paper, we propose AirTaint, a novel approach that combines the basic block-level abstraction of taint rules and assembly code-level instrumentation to conduct high-level dynamic taint analysis. Specifically, AirTaint leverages instruction-level emulation to identify the in and out operands (i.e., registers and memory variables) of each basic block, and then uses the existing taint engine to infer the taint rule abstraction for each basic block. Finally, it inserts the assembly code of the taint rule abstraction into the original program. While running, the program will execute the inserted taint analysis code quickly. In our evaluation based on 14 CVEs in 9 real-world applications, AirTaint detects all these vulnerabilities successfully. And in the comparison experiments, AirTaint performs much better than the existing tools in efficiency on 29 real-world applications, with maximum improvements of 931.0x, 5.97x, and 328.3x than libdft, SelectiveTaint, and TaintRabbit, respectively.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646714/](https://ieeexplore.ieee.org/document/10646714/)
## Undefined-oriented Programming: Detecting and Chaining Prototype Pollution Gadgets in Node.js Template Engines for Malicious Consequences.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#undefined-oriented-programming-detecting-and-chaining-prototype-pollution-gadgets-in-node-js-template-engines-for-malicious-consequences)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#undefined-oriented-programming-detecting-and-chaining-prototype-pollution-gadgets-in-node-js-template-engines-for-malicious-consequences)
### Authors
* Zhengyu Liu, Johns Hopkins University
* Kecheng An, Johns Hopkins University
* Yinzhi Cao, Johns Hopkins University
### Abstract
> Prototype pollution is a type of recently-discovered, impactful vulnerability that affects JavaScript code. One important yet challenging research problem of prototype pollution is how to affect the logic—or precisely the controlor data-flow—of a target program and achieve an adversary’s malicious purpose such as Arbitrary Code Execution (ACE) and File Access Manipulation. Prior works have studied the detection of so-called gadgets, which lead polluted properties to flow to sinks related to code execution. While existing gadgets are successful in achieving malicious purposes, they are direct gadgets, i.e., flowing from polluted property directly to a sink without the influence of other polluted properties. However, given more and more gadgets are being fixed and the lack of direct gadgets in some libraries, the necessity for more complicated gadgets arises accordingly.In this paper, we design and implement the first framework, called Undefined-oriented Programming Framework (UOPF), to detect and chain gadgets that lead to sinks via concolic execution with undefined properties as symbols. We call it Undefined-oriented Programming because one gadget may alter the control- or data-flow of another gadget via polluting additional originally-undefined properties. UOPF generates both prototype pollution and normal program inputs to guide concolic execution to reach sinks. Our evaluation on Node.js template engines shows that UOPF detects 25 zero-day gadgets that existing works cannot detect and 13 of them are chained ones. We responsibly report these gadgets to their developers and five gadgets have already been fixed. We also compare UOPF with Silent Spring, the state-of-the-art gadget detection tool and our evaluation shows that UOPF outperforms Silent Spring significantly in both false positive and negative rates.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646867/](https://ieeexplore.ieee.org/document/10646867/)
## APP-Miner: Detecting API Misuses via Automatically Mining API Path Patterns.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#app-miner-detecting-api-misuses-via-automatically-mining-api-path-patterns)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#app-miner-detecting-api-misuses-via-automatically-mining-api-path-patterns)
### Authors
* Jiasheng Jiang, Institute of Software, Chinese Academy of Sciences, China
* Jingzheng Wu, Institute of Software, Chinese Academy of Sciences, China
* Xiang Ling, Institute of Software, Chinese Academy of Sciences, China
* Tianyue Luo, Institute of Software, Chinese Academy of Sciences, China
* Sheng Qu, Institute of Software, Chinese Academy of Sciences, China
* Yanjun Wu, Institute of Software, Chinese Academy of Sciences, China
### Abstract
> Extracting API patterns from the source code has been extensively employed to detect API misuses. However, recent studies manually provide pattern templates as prerequisites, requiring prior software knowledge and limiting their extraction scope. This paper presents APP-Miner (API path pattern miner), a novel static analysis framework for extracting API path patterns via a frequent subgraph mining technique without pattern templates. The critical insight is that API patterns usually consist of APIs’ data-related operations and are commonplace. Therefore, we define API paths as the control flow graphs composed of APIs’ data-related operations, and thereby the maximum frequent subgraphs of the API paths are the probable API path patterns. We implemented APP-Miner and extensively evaluated it on four widely used open-source software: Linux kernel, OpenSSL, FFmpeg, and Apache httpd. We found 116, 35, 3, and 3 new API misuses from the above systems, respectively. Moreover, we gained 19 CVEs.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646759/](https://ieeexplore.ieee.org/document/10646759/)
## ERASan: Efficient Rust Address Sanitizer.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#erasan-efficient-rust-address-sanitizer)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#erasan-efficient-rust-address-sanitizer)
### Authors
* Jiun Min, Department of Computer Science, UNIST
* Dongyeon Yu, Department of Computer Science, UNIST
* Seongyun Jeong, Department of Computer Science, UNIST
* Dokyung Song, Department of Computer Science, Yonsei University
* Yuseok Jeon, Department of Computer Science, UNIST
### Abstract
> Rust is a rapidly growing system programming language that ensures a speed comparable to traditional C/C++ system programming languages, along with the additional benefit of guaranteed memory safety. However, Rust’s strict security rules make implementing and executing some features challenging. To address this, Rust has introduced unsafe Rust, which is less constrained by these strict rules. Nevertheless, these unsafe Rust, where strict Rust security rules are not fully applied, can cause temporal and spatial memory bugs that account for 22% of the Rust bugs reported between 2016 and 2023.In this paper, we propose an efficient address sanitizer design customized for Rust, called ERASan, to detect memory bugs in Rust programs more efficiently than prior work. Based on our thorough analysis of safe and unsafe Rust programming language standards as well as memory bugs found in real-world Rust programs over the past years, we design and implement ERASan to only instrument memory accesses in both safe and unsafe code areas where Rust cannot guarantee safety. We evaluate ERASan with several real-world applications. ERASan removes an average of 90.03% of ASan’s memory access checks. Due to this, ERASan significantly reduces ASan’s performance overhead by an average of 239.05% without harming its bug-finding ability.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646812/](https://ieeexplore.ieee.org/document/10646812/)
## "Len or index or count, anything but v1": Predicting Variable Names in Decompilation Output with Transfer Learning.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#len-or-index-or-count-anything-but-v1-predicting-variable-names-in-decompilation-output-with-transfer-learning)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#len-or-index-or-count-anything-but-v1-predicting-variable-names-in-decompilation-output-with-transfer-learning)
### Authors
* Kuntal Kumar Pal, Arizona State University
* Ati Priya Bajaj, Arizona State University
* Pratyay Banerjee, Arizona State University
* Audrey Dutcher, Arizona State University
* Mutsumi Nakamura, Arizona State University
* Zion Leonahenahe Basque, Arizona State University
* Himanshu Gupta, Arizona State University
* Saurabh Arjun Sawant, Arizona State University
* Ujjwala Anantheswaran, Arizona State University
* Yan Shoshitaishvili, Arizona State University
* Adam Doupé, Arizona State University
* Chitta Baral, Arizona State University
* Ruoyu Wang, Arizona State University
### Abstract
> Binary reverse engineering is an arduous and tedious task performed by skilled and expensive human analysts. Information about the source code is irrevocably lost in the compilation process. While modern decompilers attempt to generate C-style source code from a binary, they cannot recover lost variable names. Prior works have explored machine learning techniques for predicting variable names in decompiled code. However, the state-of-the-art systems, DIRE and DIRTY, generalize poorly to functions in the testing set that are not included in the training set—31.8% for DIRE on DIRTY’s data set and 36.9% for DIRTY on DIRTY’s data set.In this paper, we present VarBERT, a Bidirectional Encoder Representations from Transformers (BERT) to predict meaningful variable names in decompilation output. An advantage of VarBERT is that we can pre-train on human source code and then fine-tune the model to the task of predicting variable names. We also create a new data set VarCorpus, which significantly expands the size and variety of the data set. Our evaluation of VarBERT on VarCorpus, demonstrates a significant improvement in predicting the developer’s original variable names for O2 optimized binaries achieving accuracies of 54.43% for IDA and 54.49% for Ghidra. VarBERT is strictly better than state-of-the-art techniques: On a subset of VarCorpus, VarBERT could predict the developer’s original variable names 50.70% of the time, while DIRE and DIRTY predicted original variable names 35.94% and 38.00% of the time, respectively.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646727/](https://ieeexplore.ieee.org/document/10646727/)
## SrcMarker: Dual-Channel Source Code Watermarking via Scalable Code Transformations.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#srcmarker-dual-channel-source-code-watermarking-via-scalable-code-transformations)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#srcmarker-dual-channel-source-code-watermarking-via-scalable-code-transformations)
### Authors
* Borui Yang, Shanghai Jiao Tong University
* Wei Li, Shanghai Jiao Tong University
* Liyao Xiang, Shanghai Jiao Tong University
* Bo Li, Hong Kong University of Science and Technology
### Abstract
> The expansion of the open source community and the rise of large language models have raised ethical and security concerns on the distribution of source code, such as misconduct on copyrighted code, distributions without proper licenses, or misuse of the code for malicious purposes. Hence it is important to track the ownership of source code, in which watermarking is a major technique. Yet, drastically different from natural languages, source code watermarking requires far stricter and more complicated rules to ensure the readability as well as the functionality of the source code. Hence we introduce SrcMarker, a watermarking system to unobtrusively encode ID bitstrings into source code, without affecting the usage and semantics of the code. To this end, SrcMarker performs transformations on an AST-based intermediate representation that enables unified transformations across different programming languages. The core of the system utilizes learning-based embedding and extraction modules to select rule-based transformations for watermarking. In addition, a novel feature-approximation technique is designed to tackle the inherent non-differentiability of rule selection, thus seamlessly integrating the rule-based transformations and learning-based networks into an interconnected system to enable end-to-end training. Extensive experiments demonstrate the superiority of SrcMarker over existing methods in various watermarking requirements.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646683/](https://ieeexplore.ieee.org/document/10646683/)
## UnTrustZone: Systematic Accelerated Aging to Expose On-chip Secrets.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#untrustzone-systematic-accelerated-aging-to-expose-on-chip-secrets)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#untrustzone-systematic-accelerated-aging-to-expose-on-chip-secrets)
### Authors
* Jubayer Mahmod, Virginia Tech
* Matthew Hicks, Virginia Tech
### Abstract
> As technology scaling brings society closer to the vision of smart dust, system designers must address the threat of physical attacks. To address the threat of physical access to computing devices, defenders move secrets on the chip, keeping them out of reach of non-nation-state-level attackers. Modern systems allow hardware-backed security enclaves called Trusted Execution Environments (TEEs); TEEs add hardware-level protections on top of keeping secrets on chips that extend protection against privileged software and flaws within the untrusted parts of the software. While the best TEEs protect against concurrent and temporally recent attacks (e.g., the cold boot attack), we uncover a new threat to all forms of on-chip crypto: long-term data remanence.We show that the most ubiquitous form of on-chip memory, Static Random-Access Memory (SRAM), changes at the analog-domain-level in a data-dependent way as software uses it. Under normal conditions, these changes occur gradually over a device’s lifetime, but we show how an attacker can systematically accelerate this data imprinting on SRAM’s analog domain to effectively burn-in on-chip secrets. We then reveal the imprinted secrets through measurements of SRAM’s power-on state. We use this capability to demonstrate three attacks: one that reveals an AES key protected by TrustZone, proprietary firmware protected by TrustZone, and secrets stored in cache memory. Overall, we show that it is possible to imprint and exfiltrate secrets from a range of SRAM-based memories across 13 devices, from 8 manufacturers, produced across three decades—with up to 98% accuracy. To address this threat, we provide guidance to chip vendors and programmers on the defensive trade space.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646649/](https://ieeexplore.ieee.org/document/10646649/)
## On (the Lack of) Code Confidentiality in Trusted Execution Environments.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#on-the-lack-of-code-confidentiality-in-trusted-execution-environments)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#on-the-lack-of-code-confidentiality-in-trusted-execution-environments)
### Authors
* Ivan Puddu, Department of Computer Science, ETH Zurich
* Moritz Schneider, Department of Computer Science, ETH Zurich
* Daniele Lain, Department of Computer Science, ETH Zurich
* Stefano Boschetto, Department of Computer Science, ETH Zurich
* Srdjan Čapkun, Department of Computer Science, ETH Zurich
### Abstract
> Trusted Execution Environments (TEEs) have been proposed as a solution to protect code confidentiality in scenarios where computation is outsourced to an untrusted operator. We study the resilience of such solutions to side-channel attacks in two commonly deployed scenarios: when the confidential code is a native binary that is shipped and executed within a TEE and when the confidential code is an intermediate representation (IR) executed on top of a runtime within a TEE. We show that executing IR code such as WASM bytecode on a runtime executing in a TEE leaks most IR instructions with high accuracy and therefore reveals the confidential code. Contrary to IR execution, native execution is much less susceptible to leakage and largely resists even the most powerful side-channel attacks. We evaluate native execution leakage in Intel SGX and AMD SEV and experimentally demonstrate end-to-end instruction extraction on Intel SGX, with WASM bytecode as IR executed within two popular WASM runtimes: WAMR and wasmi. Our experiments show that IR code leakage from such systems is practical and therefore question the security claims of several commercial solutions which rely on TEEs+WASM for code confidentiality.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646767/](https://ieeexplore.ieee.org/document/10646767/)
## SoK: SGX.Fail: How Stuff Gets eXposed.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#sok-sgx-fail-how-stuff-gets-exposed)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#sok-sgx-fail-how-stuff-gets-exposed)
### Authors
* Stephan Van Schaik, University of Michigan
* Alex Seto, Purdue University
* Thomas Yurek, UIUC
* Adam Batori, University of Michigan
* Bader AlBassam, Purdue University
* Daniel Genkin, Georgia Tech
* Andrew Miller, UIUC
* Eyal Ronen, Tel Aviv University
* Yuval Yarom, Ruhr University Bochum
* Christina Garman, Purdue University
### Abstract
> Intel’s Software Guard Extensions (SGX) promises an isolated execution environment, protected from all software running on the machine. As such, numerous works have sought to leverage SGX to provide confidentiality and integrity guarantees for code running in adversarial environments. In the past few years however, SGX has come under heavy fire, threatened by numerous hardware attacks. With Intel repeatedly patching SGX to regain security while consistently launching new (micro)architectures, it is increasingly difficult to track the applicability of various attack techniques across the SGX design landscape.Thus, in this paper we set out to survey and categorize various SGX attacks, their applicability to different SGX architectures, as well as the information leaked by them. We then set out to explore the effectiveness of SGX’s update mechanisms in preventing attacks on real-world deployments. Here, we study two commercial SGX applications. First, we investigate the SECRET network, an SGX-backed blockchain aiming to provide privacy-preserving smart contracts. Next, we also consider PowerDVD, a UHD Blu-Ray Digital Rights Management (DRM) software licensed to play discs on PCs. We show that in both cases vendors are unable to meet security goals originally envisioned for their products, presumably due to SGX’s long update timelines and the complexities of a manual update process. This in turn forces vendors to make difficult security/usability trade offs, resulting in security compromises.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646750/](https://ieeexplore.ieee.org/document/10646750/)
## Pandora: Principled Symbolic Validation of Intel SGX Enclave Runtimes.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#pandora-principled-symbolic-validation-of-intel-sgx-enclave-runtimes)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#pandora-principled-symbolic-validation-of-intel-sgx-enclave-runtimes)
### Authors
* Fritz Alder, DistriNet, KU Leuven, Belgium
* Lesly-Ann Daniel, DistriNet, KU Leuven, Belgium
* David Oswald, University of Birmingham, UK
* Frank Piessens, DistriNet, KU Leuven, Belgium
* Jo Van Bulck, DistriNet, KU Leuven, Belgium
### Abstract
> The popularity of Intel SGX technology in recent years has given rise to a wide range of shielding runtimes to transparently safeguard secure enclave applications against a hostile operating system. Adequate validation of the crucial and numerous shielding runtimes is, however, a multi-faceted and fast-changing challenge, as new attack techniques against SGX enclaves are discovered regularly and commonly necessitate extensive software patches throughout the SGX ecosystem.This paper proposes Pandora, a practical, enclave-aware symbolic execution tool designed to address this challenge. In contrast to existing tools, Pandora’s truthful and runtime-agnostic symbolic execution of the exact attested enclave binary for the first time allows to validate the critical enclave shielding runtime itself. Furthermore, Pandora provides principled foundations to deal with the moving-target nature of enclave software security by implementing accurate taint tracking of attacker inputs, a precise symbolic enclave memory model, and support for pluggable vulnerability detectors.We extensively evaluate Pandora on 11 different SGX shielding runtimes with 4 detection plugins for a diverse set of vulnerability types. Our experiments show that Pandora can autonomously discover 200 new and 69 known vulnerable code locations. Notably, Pandora is the first tool that allows a wide-scale ecosystem investigation of recent pointer-alignment software mitigations in real-world SGX enclave runtimes.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646841/](https://ieeexplore.ieee.org/document/10646841/)
## Obelix: Mitigating Side-Channels Through Dynamic Obfuscation.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#obelix-mitigating-side-channels-through-dynamic-obfuscation)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#obelix-mitigating-side-channels-through-dynamic-obfuscation)
### Authors
* Jan Wichelmann, Universität zu Lübeck, Lübeck, Germany
* Anja Rabich, Universität zu Lübeck, Lübeck, Germany
* Anna Pätschke, Universität zu Lübeck, Lübeck, Germany
* Thomas Eisenbarth, Universität zu Lübeck, Lübeck, Germany
### Abstract
> Trusted execution environments (TEEs) offer hardware-assisted means to protect code and data. However, as shown in numerous results over the years, attackers can use side-channels to leak data access patterns and even single-step the code. While the vendors are slowly introducing hardware-based countermeasures for some attacks, others will stay unaddressed. This makes a software-level countermeasure desirable, but current available solutions only address very specific attack vectors or have a narrow leakage model.In this work, we take a holistic view at the vulnerabilities of TEEs and design a tool named Obelix, which is the first to protect both code and data against a wide range of TEE attacks, from cache attacks over single-stepping to ciphertext side-channels. We analyze the practically achievable precision of state-of-the-art single-stepping tools, and present an algorithm which uses that knowledge to divide a program into uniform code blocks, that are indistinguishable for a strong attacker. By storing these blocks and the program data in oblivious RAM, the attacker cannot follow execution, effectively protecting both secret code and data. We describe how we automate our approach to make it available for developers who are unfamiliar with side-channels. As an obfuscation tool, Obelix comes with a considerable performance overhead, but compensates this with strong security guarantees and easy applicability without requiring any expert knowledge.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646762/](https://ieeexplore.ieee.org/document/10646762/)
## Serberus: Protecting Cryptographic Code from Spectres at Compile-Time.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#serberus-protecting-cryptographic-code-from-spectres-at-compile-time)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#serberus-protecting-cryptographic-code-from-spectres-at-compile-time)
### Authors
* Nicholas Mosier, Stanford University, Stanford, California, USA
* Hamed Nemati, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* John C. Mitchell, Stanford University, Stanford, California, USA
* Caroline Trippel, Stanford University, Stanford, California, USA
### Abstract
> We present Serberus, the first comprehensive mitigation for hardening constant-time (CT) code against Spectre attacks (involving the PHT, BTB, RSB, STL, and/or PSF speculation primitives) on existing hardware. Serberus is based on three insights. First, some hardware control-flow integrity (CFI) protections restrict transient control-flow to the extent that it may be comprehensively considered by software analyses. Second, conformance to the accepted CT code discipline permits two code patterns that are unsafe in the post-Spectre era. Third, once these code patterns are addressed, all Spectre leakage of secrets in CT programs can be attributed to one of four classes of taint primitives—instructions that can transiently assign a secret value to a publicly-typed register. We evaluate Serberus on cryptographic primitives in the OpenSSL, Libsodium, and Hacl* libraries. Serberus introduces 21.3% runtime overhead on average, compared to 24.9% for the next closest state-of-the-art software mitigation, which is less secure.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646752/](https://ieeexplore.ieee.org/document/10646752/)
## WeSee: Using Malicious #VC Interrupts to Break AMD SEV-SNP.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#wesee-using-malicious-vc-interrupts-to-break-amd-sev-snp)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#wesee-using-malicious-vc-interrupts-to-break-amd-sev-snp)
### Authors
* Benedict Schlüter, ETH Zurich
* Supraja Sridhara, ETH Zurich
* Andrin Bertschi, ETH Zurich
* Shweta Shinde, ETH Zurich
### Abstract
> AMD SEV-SNP offers VM-level trusted execution environments (TEEs) to protect the confidentiality and integrity for sensitive cloud workloads from untrusted hypervisor controlled by the cloud provider. AMD introduced a new exception, #VC, to facilitate the communication between the VM and the untrusted hypervisor. We present WeSee attack, where the hypervisor injects malicious #VC into a victim VM’s CPU to compromise the security guarantees of AMD SEV-SNP. Specifically, WeSee injects interrupt number 29, which delivers a #VC exception to the VM who then executes the corresponding handler that performs data and register copies between the VM and the hypervisor. WeSee shows that using well-crafted #VC injections, the attacker can induce arbitrary behavior in the VM. Our case-studies demonstrate that WeSee can leak sensitive VM information (kTLS keys for NGINX), corrupt kernel data (firewall rules), and inject arbitrary code (launch a root shell from the kernel space).

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646722/](https://ieeexplore.ieee.org/document/10646722/)
## Sticky Tags: Efficient and Deterministic Spatial Memory Error Mitigation using Persistent Memory Tags.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#sticky-tags-efficient-and-deterministic-spatial-memory-error-mitigation-using-persistent-memory-tags)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#sticky-tags-efficient-and-deterministic-spatial-memory-error-mitigation-using-persistent-memory-tags)
### Authors
* Floris Gorter, Vrije Universiteit, Amsterdam
* Taddeus Kroes, Vrije Universiteit, Amsterdam
* Herbert Bos, Vrije Universiteit, Amsterdam
* Cristiano Giuffrida, Vrije Universiteit, Amsterdam
### Abstract
> Spatial memory errors such as buffer overflows still rank among the top vulnerabilities in C/C++ programs. Despite much research in the area, the performance overhead of (even partial) mitigations is still too high for practical adoption. To reduce the cost, recent solutions are shifting towards hardware-assisted techniques such as Arm’s Memory Tagging Extension (MTE). Unfortunately, state-of-the-art MTE solutions incur high overhead due to frequent memory (re)tagging, especially on the stack. Moreover, they rely on the secrecy of random memory tags and offer probabilistic security guarantees.In this paper, we first provide evidence that random tagging offers limited protection as attackers can deduce the memory tags by means of speculative probing. We then present StickyTags, a deterministic MTE solution that efficiently mitigates bounded spatial memory errors. By organizing the stack and heap layout into per-size-class regions, we can apply persistent memory tags to each region in a predetermined pattern. Hence, the memory tags need only be initialized once, after which they can be reused by objects of the same size class. This eliminates the need for costly memory retagging and allows for a fixed, round-robin assignment of the tags, surrounding every object with large implicit spatial guards. While the size of such guards is bounded by the 4-bit MTE entropy (16 tags), the protection is efficient and deterministic. Indeed, we show StickyTags significantly outperforms existing solutions with realistic runtime overheads for practical adoption (≤ 4% on SPEC CPU2006), while fully mitigating 7 out of 8 spatial CVEs evaluated by a recent probabilistic MTE solution.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646704/](https://ieeexplore.ieee.org/document/10646704/)
## Bulkor: Enabling Bulk Loading for Path ORAM.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#bulkor-enabling-bulk-loading-for-path-oram)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#bulkor-enabling-bulk-loading-for-path-oram)
### Authors
* Xiang Li, Tsinghua University
* Yunqian Luo, Tsinghua University
* Mingyu Gao, Tsinghua University; Shanghai AI Laboratory, Shanghai Qi Zhi Institute
### Abstract
> Oblivious RAM (ORAM) is an important cryptographic primitive that aims to protect against data access pattern leakage. With the recent theoretical improvements in ORAM protocols and the introduction of hardware-based trusted execution environments (TEEs), ORAM has become an increasingly practical design that starts to be adopted in real-world secure systems. In this paper, we study the bulk loading problem of ORAM, i.e., constructing an ORAM structure with a large amount of data, which can benefit many scenarios in secure cloud systems, such as data recovery, layout conversion, and query processing. We propose BULKOR, an extension of the state-of-the-art Path ORAM protocol. BULKOR supports the deployment with TEEs in untrusted servers, and satisfies the doubly-oblivious requirement to alleviate the side channel concerns in modern TEEs. BULKOR improves both the theoretical complexity from $\mathcal{O}\left( {N{{\log }^3}N} \right)$ to $\mathcal{O}\left( {N{{\log }^2}N} \right)$, and the practical performance of ORAM bulk loading, without sacrificing the security guarantees. It significantly outperforms the baseline designs Oblix and ZeroTrace by 8.7× to 54.6× and 5.8× to 533.1×, respectively, in various settings that implement ORAM on hard disks or in memory.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646846/](https://ieeexplore.ieee.org/document/10646846/)
## Distributed & Scalable Oblivious Sorting and Shuffling.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#distributed-scalable-oblivious-sorting-and-shuffling)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#distributed-scalable-oblivious-sorting-and-shuffling)
### Authors
* Nicholas Ngai, UC Berkeley
* Ioannis Demertzis, UC Santa Cruz
* Javad Ghareh Chamani, HKUST
* Dimitrios Papadopoulos, HKUST
### Abstract
> Existing oblivious systems offer robust security by concealing memory access patterns, but they encounter significant scalability and performance challenges. Recent efforts to enhance the practicality of these systems involve embedding oblivious computation, e.g., oblivious sorting and shuffling, within Trusted Execution Environments (TEEs). For instance, oblivious sort has been heavily utilized: in Oblix (S&P’18), when oblivious indexes are created and accessed; in Snoopy’s high-throughput oblivious key-value (SOSP’21) during initialization and when the input requests are deduplicated and prepared for delivery; in Opaque (NSDI’17) for all the proposed oblivious SQL operators; in the state-of-the-art non-foreign key oblivious join approach (PVLDB’20). Additionally, oblivious sort/shuffle find applications in Signal’s commercial solution for contact discovery, anonymous Google’s Key Transparency, Searchable Encryption, software monitoring, and differentially private federated learning with user privacy.In this work, we address the scalability bottleneck of oblivious sort and shuffle by re-designing these approaches to achieve high efficiency in distributed multi-enclave environments. First, we propose a multi-threaded bitonic sort optimized for the distributed setting, making it the most performant oblivious sort for small number of enclaves (up to 4). For larger numbers of enclaves, we propose a novel oblivious bucket sort, which improves data locality and network consumption and outperforms our optimized distributed bitonic-sort by up to 5-6×. To the best of our knowledge, these are the first distributed oblivious TEE-based sorting solutions. For reference, we are able to sort 2 GiB of data in 1 second and 128 GiB in 53.4 seconds in a multi-enclave test. A fundamental building block of our oblivious bucket-sort is an oblivious shuffle that improves the prior state-of-the-art result (CCS’22) by up to 9.5× in the distributed multi-enclave setting—interestingly it is better by 10% even in the single-enclave/multi-thread setting.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646804/](https://ieeexplore.ieee.org/document/10646804/)
## Piano: Extremely Simple, Single-Server PIR with Sublinear Server Computation.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#piano-extremely-simple-single-server-pir-with-sublinear-server-computation)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#piano-extremely-simple-single-server-pir-with-sublinear-server-computation)
### Authors
* Mingxun Zhou, Carnegie Mellon University
* Andrew Park, Carnegie Mellon University
* Wenting Zheng, Carnegie Mellon University
* Elaine Shi, Carnegie Mellon University
### Abstract
> We construct a sublinear-time single-server preprocessing Private Information Retrieval (PIR) scheme with an optimal tradeoff between client storage and server computation (up to poly-logarithmic factors). Our scheme achieves amortized $\tilde O(\sqrt n )$ server and client computation and $O(\sqrt n )$ online communication per query, and requires ${\tilde O_\lambda }(\sqrt n )$ client storage. Unlike prior single-server PIR schemes that rely on heavy cryptographic machinery such as Homomorphic Encryption, our scheme relies only on Pseudo-Random Functions (PRF). To the best of our knowledge, Piano is the first practical single-server sublinear-time PIR scheme, and we outperform the state-of-the-art single-server PIR by 10×-300×. In comparison with the best known two-server PIR scheme, Piano enjoys comparable performance but our construction is considerably simpler. Experimental results show that for a 100GB database and with 60ms round-trip latency, Piano achieves 93ms response time, while the best known prior scheme requires 11s or more.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646686/](https://ieeexplore.ieee.org/document/10646686/)
## PIRANA: Faster Multi-query PIR via Constant-weight Codes.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#pirana-faster-multi-query-pir-via-constant-weight-codes)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#pirana-faster-multi-query-pir-via-constant-weight-codes)
### Authors
* Jian Liu, Zhejiang University
* Jingyu Li, Zhejiang University
* Di Wu, Zhejiang University
* Kui Ren, Zhejiang University
### Abstract
> Private information retrieval (PIR) is a cryptographic protocol that enables a wide range of privacy-preserving applications. Despite being extensively studied for decades, it is still not efficient enough to be used in practice. In this paper, we propose a novel PIR protocol named PIRANA, based on the recent advances in constant-weight codes. It is up to 188.6× faster than the original constant-weight PIR (presented in Usenix SEC ’22). Most importantly, PIRANA naturally supports multi-query. It allows a client to retrieve a batch of elements from the server with a very small extra-cost compared to retrieving a single element, which results in up to an 14.4× speedup over the state-of-the-art multi-query PIR (presented in Oakland ’23). We also discuss a way to extend PIRANA to labeled private set intersection (LPSI). Compared with existing LPSI protocols, PIRANA is more friendly to the scenarios where the database updates frequently.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646690/](https://ieeexplore.ieee.org/document/10646690/)
## Communication-efficient, Fault Tolerant PIR over Erasure Coded Storage.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#communication-efficient-fault-tolerant-pir-over-erasure-coded-storage)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#communication-efficient-fault-tolerant-pir-over-erasure-coded-storage)
### Authors
* Andrew Park, Carnegie Mellon University
* Trevor Leong, Carnegie Mellon University
* Francisco Maturana, Carnegie Mellon University
* Wenting Zheng, Carnegie Mellon University
* K. V. Rashmi, Carnegie Mellon University
### Abstract
> Private information retrieval (PIR) is a technique for a client to retrieve an item from a public database without revealing to an adversarial server the item that was queried. While multi-server PIR has been well-studied in order to obtain better communication and computation relative to single-server schemes, there are far fewer fault-tolerant PIR schemes which can remain functional even in the presence of malicious adversaries. In this paper, we present a solution that combines techniques from both the cryptography and information theory communities to design robust PIR protocols that obtain better computation, communication, and storage compared to prior state-of-the-art schemes. Our results show that our PIR protocols achieve up to 9.1× lower latency, at least 39.2× less total communication, and up to 7.3× less computation than the state-of-art robust PIR protocols for a database 4GB in size and can withstand two malicious servers, and continually outperform the robust PIR baselines for a variety of parameter configurations and failure scenarios.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646602/](https://ieeexplore.ieee.org/document/10646602/)
## More is Merrier: Relax the Non-Collusion Assumption in Multi-Server PIR.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#more-is-merrier-relax-the-non-collusion-assumption-in-multi-server-pir)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#more-is-merrier-relax-the-non-collusion-assumption-in-multi-server-pir)
### Authors
* Tiantian Gong, Purdue University
* Ryan Henry, University of Calgary
* Alexandros Psomas, Purdue University
* Aniket Kate, Purdue University; Supra Research
### Abstract
> A long line of research on secure computation has confirmed that anything that can be computed, can be computed securely using a set of non-colluding parties. Indeed, this non-collusion assumption makes a number of problems solvable, as well as reduces overheads and bypasses computational hardness results, and it is pervasive across different privacy-enhancing technologies. However, it remains highly susceptible to covert, undetectable collusion among computing parties. This work stems from an observation that if the number of available computing parties is much higher than the number of parties required to perform a secure computation task, collusion attempts in privacy-preserving computations could be deterred.We focus on the prominent privacy-preserving computation task of multi-server 1-private information retrieval (PIR) that inherently assumes no pair-wise collusion. For PIR application scenarios, such as those for blockchain light clients, where the available servers can be plentiful, a single server’s deviating action is not tremendously beneficial to itself. We can make deviations undesired via small amounts of rewards and penalties, thus significantly raising the bar for collusion resistance. We design and implement a collusion mitigation mechanism on a public bulletin board with payment execution functions, considering only rational and malicious parties with no honest non-colluding servers. Privacy protection is offered for an extended period after the query executions.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646814/](https://ieeexplore.ieee.org/document/10646814/)
## Group Oblivious Message Retrieval.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#group-oblivious-message-retrieval)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#group-oblivious-message-retrieval)
### Authors
* Zeyu Liu, Yale University
* Eran Tromer, Boston University
* Yunhao Wang, Yale University
### Abstract
> Anonymous message delivery, as in private communication and privacy-preserving blockchain applications, ought to protect recipient metadata: a message should not be inadvertently linkable to its destination. But how can messages then be delivered to each recipient, without each recipient scanning all messages? Recent work constructed Oblivious Message Retrieval (OMR) protocols that outsource this job to untrusted servers in a privacy-preserving manner.We consider the case of group messaging, where each message may have multiple recipients (e.g., in a group chat or blockchain transaction). Direct use of prior OMR protocols in the group setting increases the servers’ work linearly in the group size, rendering it prohibitively costly for large groups.We thus devise new protocols where the servers’ cost grows very slowly with the group size, while recipients’ cost is low and independent of the group size. Our approach uses Fully Homomorphic Encryption and other lattice-based techniques, building on and improving on prior work. The efficient handling of groups is attained by encoding multiple recipient-specific clues into a single polynomial or multilinear function that can be efficiently evaluated under FHE, and via preprocessing and amortization techniques.We formally study Group Oblivious Message Retrieval (GOMR) and describe corresponding GOMR protocols. Our implementation and benchmarks show, for parameters of interest, cost reductions of orders of magnitude compared to prior schemes. For example, the servers’ cost is ~$3.36 per million messages scanned, where each message may address up to 15 recipients.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646845/](https://ieeexplore.ieee.org/document/10646845/)
## PolySphinx: Extending the Sphinx Mix Format With Better Multicast Support.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#polysphinx-extending-the-sphinx-mix-format-with-better-multicast-support)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#polysphinx-extending-the-sphinx-mix-format-with-better-multicast-support)
### Authors
* Daniel Schadt, Karlsruhe Institute of Technology
* Christoph Coijanovic, Karlsruhe Institute of Technology
* Christiane Weis, NEC Laboratories
* Thorsten Strufe, Karlsruhe Institute of Technology
### Abstract
> Mix networks are a well-known technique to hide communication metadata, but incur a high overhead especially in group communication settings. This hinders their adoption in real-world usage, as group communication makes up a big part of modern communication patterns. In this paper, we introduce "PolySphinx", a mix format that is a step towards efficient anonymous multicasting and allows a mix node to replicate the message payload to multiple recipients. We prove that PolySphinx does not compromise on the anonymity offered to users, while considerably reducing the latency of group messages: In a group with 25 members, the average latency drops from 6.1s using the state-of-the-art Rollercoaster approach to 4.1s using PolySphinx.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646781/](https://ieeexplore.ieee.org/document/10646781/)
## Where Are the Red Lines? Towards Ethical Server-Side Scans in Security and Privacy Research.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#where-are-the-red-lines-towards-ethical-server-side-scans-in-security-and-privacy-research)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#where-are-the-red-lines-towards-ethical-server-side-scans-in-security-and-privacy-research)
### Authors
* Florian Hantke, CISPA Helmholtz Center for Information Security
* Sebastian Roth, TU Wien
* Rafael Mrowczynski, CISPA Helmholtz Center for Information Security
* Christine Utz, CISPA Helmholtz Center for Information Security
* Ben Stock, CISPA Helmholtz Center for Information Security
### Abstract
> Comprehensive and representative measurements are crucial to understand security and privacy risks on the Web. However, researchers have long been reluctant to investigate server-side vulnerabilities at scale, as this could harm servers, disrupt service, and cause financial damage. This can lead to operator backlash and problems in peer review, as the boundaries posed by the law, ethics, and operators’ stance towards security research are largely unclear.In this paper, we address this research gap and investigate the boundaries of server-side scanning (3S) on the Web. To that end, we devise five typical scenarios for 3S on the Web to obtain concrete practical guidance. We analyze qualitative data from 23 interviews with legal experts, using German law as a case study, members of Research Ethics Committees, and website and server operators to learn what types of 3S are considered acceptable and which behavior would cross a red line. To verify our findings, we further conduct an online survey with 119 operators.Our analysis of these different perspectives shows that the absence of judicial decisions and clear ethical guidelines poses challenges in overcoming the risks associated with 3S, despite a slight majority (57%) of operators having a positive stance towards such academic research throughout the interviews and the survey. As a first step to mitigate these challenges, we suggest best practices for future 3S research and a pre-registration process to provide a reliable and transparent environment for 3S-based research that reduces uncertainty for researchers and operators alike.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646650/](https://ieeexplore.ieee.org/document/10646650/)
## Cerberus: Enabling Efficient and Effective In-Network Monitoring on Programmable Switches.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#cerberus-enabling-efficient-and-effective-in-network-monitoring-on-programmable-switches)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#cerberus-enabling-efficient-and-effective-in-network-monitoring-on-programmable-switches)
### Authors
* Huancheng Zhou, SUCCESS Lab, Texas A&M University
* Guofei Gu, SUCCESS Lab, Texas A&M University
### Abstract
> With the increasing volume of network traffic and the emergence of new types of attacks, traditional network monitoring is facing significant challenges in ensuring network security and performance. In-network monitoring (INM) systems based on programmable switches, e.g., P4-based INM systems, have emerged as a more promising approach for high-performance and real-time network monitoring. However, existing P4-based INM systems have resource limitations in handling diverse and high-volume INM tasks such as multi-vector DDoS defenses. Worse still, attackers may try to dynamically change attack vectors to disrupt inadaptable systems and even lead to denial-of-service (DoS) attacks against INM.To address these challenges, we present Cerberus, an efficient and effective in-network security monitoring system. To support various INM tasks, we abstract them into key-feature (K-F) pairs and design a novel memory slicing mechanism to share memory among multiple K-F pairs. To handle high-volume traffic, we propose a new co-monitoring mechanism that complements the data and control planes, thereby greatly enhancing the efficiency of Cerberus. To adapt to changing network conditions, we design a new resource manager that dynamically reallocates resources for INM tasks and adjusts loads for the data and control planes without interrupting running services. We design a series of INM modules, including DDoS defenses, and develop a prototype of Cerberus. We conduct extensive evaluations to demonstrate that Cerberus can enhance the concurrency and capacity of programmable switches by an order of magnitude. Moreover, Cerberus is more adaptable in handling various INM tasks.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646662/](https://ieeexplore.ieee.org/document/10646662/)
## Pryde: A Modular Generalizable Workflow for Uncovering Evasion Attacks Against Stateful Firewall Deployments.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#pryde-a-modular-generalizable-workflow-for-uncovering-evasion-attacks-against-stateful-firewall-deployments)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#pryde-a-modular-generalizable-workflow-for-uncovering-evasion-attacks-against-stateful-firewall-deployments)
### Authors
* Soo-Jin Moon, Carnegie Mellon University
* Milind Srivastava, Carnegie Mellon University
* Yves Bieri, Compass Security
* Ruben Martins, Carnegie Mellon University
* Vyas Sekar, Carnegie Mellon University
### Abstract
> Stateful firewalls (SFW) play a critical role in securing our network infrastructure. Incorrect implementation of the intended stateful semantics can lead to evasion opportunities, even if firewall rules are configured correctly. Uncovering these opportunities is challenging due to the (1) black-box and proprietary nature of firewalls; (2) diversity of deployments; and (3) complex stateful semantics. To tackle these challenges, we present Pryde. Pryde uses a modular model-guided workflow that generalizes across black-box firewall implementations and deployment-specific settings to generate evasion attacks. Pryde infers a behavioral model of the stateful firewall in the presence of potentially non-TCP-compliant packet sequences. It uses this model in conjunction with attacker capabilities and victim behavior to synthesize custom evasion attacks. Using Pryde, we identify more than 6,000 unique attacks against 4 popular firewalls and 4 host networking stacks, many of which cannot be uncovered by prior work on censorship circumvention and black-box fuzzing.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646874/](https://ieeexplore.ieee.org/document/10646874/)
## TuDoor Attack: Systematically Exploring and Exploiting Logic Vulnerabilities in DNS Response Pre-processing with Malformed Packets.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#tudoor-attack-systematically-exploring-and-exploiting-logic-vulnerabilities-in-dns-response-pre-processing-with-malformed-packets)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#tudoor-attack-systematically-exploring-and-exploiting-logic-vulnerabilities-in-dns-response-pre-processing-with-malformed-packets)
### Authors
* Xiang Li, Tsinghua University
* Wei Xu, Tsinghua University
* Baojun Liu, Tsinghua University
* Mingming Zhang, Tsinghua University; Zhongguancun Laboratory
* Zhou Li, University of California, Irvine
* Jia Zhang, Tsinghua University; Zhongguancun Laboratory
* Deliang Chang, QI-ANXIN Technology Research Institute
* Xiaofeng Zheng, Tsinghua University; QI-ANXIN Technology Research Institute
* Chuhan Wang, Tsinghua University
* Jianjun Chen, Tsinghua University; Zhongguancun Laboratory
* Haixin Duan, Tsinghua University; Zhongguancun Laboratory; Quan Cheng Laboratory
* Qi Li, Tsinghua University
### Abstract
> DNS can be compared to a game of chess in that its rules are simple, yet the possibilities it presents are endless. While the fundamental rules of DNS are straightforward, DNS implementations can be extremely complex. In this study, we intend to explore the complexities and vulnerabilities in DNS response pre-processing by systematically analyzing DNS RFCs and DNS software implementations. We present the discovery of three new types of logic vulnerabilities, leading to the proposal of three novel attacks, namely the TuDoor attack. These attacks involve the use of malformed DNS response packets to carry out DNS cache poisoning, denial- of-service, and resource consuming attacks. By performing comprehensive experiments, we demonstrate the attack’s feasibility and significant real-world impacts of TUDOOR. In total, 24 mainstream DNS software, including BIND, PowerDNS, and Microsoft DNS, are affected by TuDoor. Attackers can instigate cache poisoning and denial-of-service attacks against vulnerable resolvers using a handful of crafted packets within 1 second or circumvent the query limit to deplete resolution resources (e.g., CPU). Besides, to determine the vulnerable resolver population in the wild, we collect and evaluate 16 popular Wi-Fi routers, 6 prevalent router OSes, 42 public DNS services, and around 1.8M open DNS resolvers. Our measurement results indicate that TUDOOR could exploit 7 routers (OSes), 18 public DNS services, and 424,652 (23.1%) open DNS resolvers. Following the best practice of responsible disclosure, we have reported these vulnerabilities to all affected vendors, and 18 of them, including BIND, Chrome, Cloudflare, and Microsoft, have acknowledged our findings and discussed mitigation solutions with us. Furthermore, 33 CVE IDs are assigned to our discovered vulnerabilities, and we provide an online detection tool as one of the mitigation measures. Our research highlights the urgent need for standardization of DNS response pre-processing logic to enhance the security of DNS.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646751/](https://ieeexplore.ieee.org/document/10646751/)
## DNSBomb: A New Practical-and-Powerful Pulsing DoS Attack Exploiting DNS Queries-and-Responses.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#dnsbomb-a-new-practical-and-powerful-pulsing-dos-attack-exploiting-dns-queries-and-responses)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#dnsbomb-a-new-practical-and-powerful-pulsing-dos-attack-exploiting-dns-queries-and-responses)
### Authors
* Xiang Li, Tsinghua University
* Dashuai Wu, Tsinghua University
* Haixin Duan, Tsinghua University; Zhongguancun Laboratory; Quan Cheng Laboratory
* Qi Li, Tsinghua University
### Abstract
> DNS employs a variety of mechanisms to guarantee availability, protect security, and enhance reliability. In this paper, however, we reveal that these inherent beneficial mechanisms, including timeout, query aggregation, and response fast-returning, can be transformed into malicious attack vectors.We propose a new practical and powerful pulsing DoS attack, dubbed the DNSBomb attack. DNSBomb exploits multiple widely-implemented DNS mechanisms to accumulate DNS queries that are sent at a low rate, amplify queries into large-sized responses, and concentrate all DNS responses into a short, high-volume periodic pulsing burst to simultaneously overwhelm target systems. Through an extensive evaluation on 10 mainstream DNS software, 46 public DNS services, and around 1.8M open DNS resolvers, we demonstrate all DNS resolvers could be exploited to conduct more practical-and-powerful DNSBomb attacks than previous pulsing DoS attacks. Small-scale experiments show the peak pulse magnitude can approach 8.7Gb/s and the bandwidth amplification factor could exceed 20,000x. Our controlled attacks cause complete packet loss or service degradation on both stateless and stateful connections (TCP, UDP, and QUIC). In addition, we present effective mitigation solutions with detailed evaluations. We have responsibly reported our findings to all affected vendors, and received acknowledgement from 24 of them, which are patching their software using our solutions, such as BIND, Unbound, PowerDNS, and Knot. 10 CVE-IDs are assigned.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646654/](https://ieeexplore.ieee.org/document/10646654/)
## TCP Spoofing: Reliable Payload Transmission Past the Spoofed TCP Handshake.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#tcp-spoofing-reliable-payload-transmission-past-the-spoofed-tcp-handshake)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#tcp-spoofing-reliable-payload-transmission-past-the-spoofed-tcp-handshake)
### Authors
* Yepeng Pan, CISPA Helmholtz Center for Information Security, Dortmund, Germany
* Christian Rossow, CISPA Helmholtz Center for Information Security, Dortmund, Germany
### Abstract
> TCP spoofing—the attack to establish an IP-spoofed TCP connection by bruteforcing a 32-bit server-chosen initial sequence number (ISN)—has been known for decades. However, TCP spoofing has had limited impact in practice. One limiting factor is that attackers not only have to guess the ISN to complete the handshake but also have to model the server’s send window to reliably transmit subsequent payload segments. While known bruteforcing attacks include payloads during the handshake already, this cannot correctly model interactive TCP dialogs and is also prohibitively expensive (if not impossible) for larger payloads. Relying on the impracticality of TCP spoofing, several services still rely on the source IP address to make security-critical decisions, such as for firewalling, spam classification or network-based authentication in databases.We show that attackers cannot only establish spoofed TCP connections but also reliably send spoofed TCP payloads over these connections. We introduce two such sending primitives. First, we show how attackers can abuse the permissive handling of the TCP send window to inject payloads via efficient bruteforce attacks. Second, we introduce feedback-guided TCP spoofing that enables attackers to leak the server-chosen ISN. We introduce three feedback channels; one exploiting TCP SYN cookies and two leveraging operations specific to email and database applications. We find that such sending primitives can reliably transfer payload over spoofed connections and show their prevalence. We conclude with a discussion on countermeasures and our disclosure process.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646838/](https://ieeexplore.ieee.org/document/10646838/)
## Practical Attacks Against DNS Reputation Systems.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#practical-attacks-against-dns-reputation-systems)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#practical-attacks-against-dns-reputation-systems)
### Authors
* Tillson Galloway, Georgia Institute of Technology
* Kleanthis Karakolios, Georgia Institute of Technology
* Zane Ma, Oregon State University
* Roberto Perdisci, Georgia Institute of Technology; University of Georgia
* Angelos Keromytis, Georgia Institute of Technology
* Manos Antonakakis, Georgia Institute of Technology
### Abstract
> DNS reputation systems are a critical layer of network defense that use ML to identify potentially malicious domains based on DNS-related behaviors. Despite their importance in protecting against spam, malware, and social engineering, little is known about the adversarial robustness of real-world DNS reputation systems. This work takes a first look at general attacks against DNS reputation systems. To overcome the black-box setting of deployed DNS reputation systems, we begin by creating an open-source reference DNS reputation system that 1) overcomes common pitfalls in data collection, preprocessing, training, and evaluation found in prior work, 2) approximates DNS reputation systems from prior research, and 3) enables future reproducible research. We find that general adversarial ML techniques are impractical due to a highly constrained input space, complex feature interdependencies, and difficult inversion from feature vectors to raw input samples. We then implement two classes of practical attacks, mimicry and popularity manipulation, that achieve high success rates against both our reference model and a popular commercial DNS reputation system, highlighting the transferability of the attacks to the real world. Finally, we develop constraint models that assess the time and financial cost required to execute our attacks. Using these models, we demonstrate that an adversary with US$10 can evade a leading security vendor with a 100% success rate in two weeks.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646737/](https://ieeexplore.ieee.org/document/10646737/)
## Leveraging Prefix Structure to Detect Volumetric DDoS Attack Signatures with Programmable Switches.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#leveraging-prefix-structure-to-detect-volumetric-ddos-attack-signatures-with-programmable-switches)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#leveraging-prefix-structure-to-detect-volumetric-ddos-attack-signatures-with-programmable-switches)
### Authors
* Chris Misa, University of Oregon
* Ramakrishnan Durairajan, University of Oregon
* Arpit Gupta, UCSB
* Reza Rejaie, University of Oregon
* Walter Willinger, NIKSUN, Inc.
### Abstract
> As increasingly complex and dynamic volumetric DDoS attacks continue to wreak havoc on edge networks, two recent developments promise to bolster DDoS defense at the edge. First, programmable switches have emerged as promising means for achieving scalable and cost-effective attack signature detection. However, their practical application in edge networks remains a challenging open problem. Second, machine learning (ML)-based solutions have demonstrated potential in accurately detecting attack signatures based on per-flow traffic features. Yet, their inability to effectively scale to the traffic volumes and number of flows in actual production edge networks has largely excluded them from practical considerations.In this paper, we introduce ZAPDOS, a novel approach to accurately, quickly, and scalably detect volumetric DDoS attack signatures at the source prefix level. ZAPDOS is the first to utilize a key characteristic of the observed structure of measured attack and benign source prefixes (i.e., a pronounced cluster-within-cluster property) and effectively apply it in practice against modern attacks. ZAPDOS operates by monitoring aggregate prefix-level features in switch hardware, employing a learning model to identify prefixes suspected of containing attack sources, and using several innovative algorithmic methods to pinpoint attack sources efficiently. We have built a hardware prototype of ZAPDOS and a packet-level software simulator which achieve comparable accuracy results. Since existing datasets are inadequate for training and evaluating prefix-level models, we have developed a new data-fusion methodology for training and evaluating ZAPDOS. We use our prototype and simulator to show that ZAPDOS can detect volumetric DDoS attack signatures with orders of magnitude lower error rates than state-of-the-art under comparable monitoring resource budgets and for a range of different attack scenarios.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646832/](https://ieeexplore.ieee.org/document/10646832/)
## Automated Synthesis of Effect Graph Policies for Microservice-Aware Stateful System Call Specialization.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#automated-synthesis-of-effect-graph-policies-for-microservice-aware-stateful-system-call-specialization)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#automated-synthesis-of-effect-graph-policies-for-microservice-aware-stateful-system-call-specialization)
### Authors
* William Blair, Boston University
* Frederico Araujo, IBM Research
* Teryl Taylor, IBM Research
* Jiyong Jang, IBM Research
### Abstract
> We present a hybrid program analysis framework that automates the synthesis of stateful system call policies that describe admissible behaviors of containerized programs. Given a container image as input, the framework generates a reference policy that encodes a security automaton obtained by symbolically micro-executing the corresponding container's binary entrypoint under the constraints extracted from the container image metadata and environment.We demonstrate the utility and practicality of our approach by synthesizing security policies for 25 challenges in the DARPA Cyber Grand Challenge (CGC) corpus, 5 real-world containerized programs, including the widely used NGINX web server, and a complete microservice application from public benchmarks. We run each program or microservice using both benign and attack scenarios under the protection of a runtime policy monitor. Furthermore, we evaluate our approach by comparing our synthesized policies to those generated by four state-of-the-art system call specialization tools. Our results demonstrate that our techniques can scale to large programs and accurately extract concise reference application models for security monitoring.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646601/](https://ieeexplore.ieee.org/document/10646601/)
## SoK: A Comprehensive Analysis and Evaluation of Docker Container Attack and Defense Mechanisms.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#sok-a-comprehensive-analysis-and-evaluation-of-docker-container-attack-and-defense-mechanisms)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#sok-a-comprehensive-analysis-and-evaluation-of-docker-container-attack-and-defense-mechanisms)
### Authors
* Md Sadun Haq, University Of Texas At San Antonio
* Thien Duc Nguyen, Technical University of Darmstadt
* Ali Şaman Tosun, University Of North Carolina at Pembroke
* Franziska Vollmer, Technical University of Darmstadt
* Turgay Korkmaz, University Of Texas At San Antonio
* Ahmad-Reza Sadeghi, Technical University of Darmstadt
### Abstract
> Container-based applications are increasingly favored for their efficiency in software development, deployment, and operation across various platforms. However, the growing number of security and privacy attacks poses significant concerns. Exploiting vulnerabilities within containers may compromise the entire host system, as both share the same operating system. Unfortunately, container defense mechanisms are inadequate due to the ever-evolving and dynamic attack landscape.In this paper, we systematize container attacks and defense mechanisms. We systematically analyze the effectiveness of (i) static container scanning tools proposed for vulnerability detection and reveal their shortcomings, as well as (ii) existing run-time anomaly-based detection approaches. We then establish an evaluation framework and comprehensively re-evaluate cutting-edge anomaly detection techniques tailored for containers using an extensive dataset of 51 real-world vulnerabilities. We emphasize that existing defenses are ineffective in protecting containers against state-of-the-art attacks. While anomaly detection-based approaches show potential in addressing dynamic attack landscapes, their high false positive rates and limited training data hinder practicality. Therefore, our work highlights the urgent need for further research to enhance the security of container-based applications.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646668/](https://ieeexplore.ieee.org/document/10646668/)
## Tabbed Out: Subverting the Android Custom Tab Security Model.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#tabbed-out-subverting-the-android-custom-tab-security-model)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#tabbed-out-subverting-the-android-custom-tab-security-model)
### Authors
* Philipp Beer, TU Wien
* Marco Squarcina, TU Wien
* Lorenzo Veronese, TU Wien
* Martina Lindorfer, TU Wien
### Abstract
> Mobile operating systems provide developers with various mobile-to-Web bridges to display Web pages inside native applications. A recently introduced component called Custom Tab (CT) provides an outstanding feature to overcome the usability limitations of traditional WebViews: it shares the state with the underlying browser. Similar to traditional WebViews, it can also keep the host application informed about ongoing Web navigations. In this paper, we perform the first systematic security evaluation of the CT component and show how the design of its security model did not consider cross-context state inference attacks when the feature was introduced. Additionally, we show how CTs can be exploited for fine-grained exfiltration of sensitive user browsing data, violation of Web session integrity by circumventing SameSite cookies, and how UI customization of the CT component can lead to phishing and information leakage. To assess the prevalence of CTs in the wild and the practicality of the mitigation strategies we propose, we carry out the first large-scale analysis of CT usage on over 50K Android applications. Our analysis reveals that their usage is widespread, with 83% of applications embedding CTs either directly or as part of a library.We have responsibly disclosed all our findings to Google, which has already taken steps to apply targeted mitigations, assigned three CVEs for the discovered vulnerabilities, and awarded us $10,000 in bounties. Our interaction with Google led to clarifications of the CT security model in the new Chrome Custom Tabs Security FAQ document.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646644/](https://ieeexplore.ieee.org/document/10646644/)
## P4Control: Line-Rate Cross-Host Attack Prevention via In-Network Information Flow Control Enabled by Programmable Switches and eBPF.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#p4control-line-rate-cross-host-attack-prevention-via-in-network-information-flow-control-enabled-by-programmable-switches-and-ebpf)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#p4control-line-rate-cross-host-attack-prevention-via-in-network-information-flow-control-enabled-by-programmable-switches-and-ebpf)
### Authors
* Osama Bajaber, Virginia Tech
* Bo Ji, Virginia Tech
* Peng Gao, Virginia Tech
### Abstract
> Modern targeted attacks such as Advanced Persistent Threats use multiple hosts as stepping stones and move laterally across them to gain deeper access to the network. However, existing defenses lack end-to-end information flow visibility across hosts and cannot block cross-host attack traffic in real time. In this paper, we propose P4Control, a network defense system that precisely confines end-to-end information flows in a network and prevents cross-host attacks at line rate. P4Control introduces a novel in-network decentralized information flow control (DIFC) mechanism and is the first work that enforces DIFC at the network level at network line rate. This is achieved through: (1) an in-network primitive based on programmable switches for tracking inter-host information flows and enforcing line-rate DIFC policies; (2) a lightweight eBPF-based primitive deployed on hosts for tracking intra-host information flows. P4Control also provides an expressive policy framework for specifying DIFC policies against different attack scenarios. We conduct extensive evaluations to show that P4Control can effectively prevent cross-host attacks in real time, while maintaining line-rate network performance and imposing minimal overhead on the network and host machines. It is also noteworthy that P4Control can facilitate the realization of a zero trust architecture through its fine-grained least-privilege network access control.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646823/](https://ieeexplore.ieee.org/document/10646823/)
## To Boldly Go Where No Fuzzer Has Gone Before: Finding Bugs in Linux' Wireless Stacks through VirtIO Devices.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#to-boldly-go-where-no-fuzzer-has-gone-before-finding-bugs-in-linux-wireless-stacks-through-virtio-devices)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#to-boldly-go-where-no-fuzzer-has-gone-before-finding-bugs-in-linux-wireless-stacks-through-virtio-devices)
### Authors
* Sönke Huster, Secure Mobile Networking Lab (SEEMOO), TU Darmstadt, Germany; Computer Security and Privacy, University of Göttingen, Germany
* Matthias Hollick, Secure Mobile Networking Lab (SEEMOO), TU Darmstadt, Germany
* Jiska Classen, Secure Mobile Networking Lab (SEEMOO), TU Darmstadt, Germany; Hasso Plattner Institute, University of Potsdam, Germany
### Abstract
> The security of Linux kernel interfaces is paramount in preventing over-the-air, proximity, or other network attacks. The Linux kernel is fuzzed continuously to detect newly introduced bugs. Despite their long runtime, existing fuzzers fail to detect critical bugs, as they are unaware of physical device semantics and difficult to adapt to new devices. This paper proposes a novel fuzzer called VirtFuzz, which is based on Virtual I/O (VirtIO) device drivers. A proxy mechanism enables data collection from physical device interaction. These collected inputs are then used to fuzz through a virtual device. Using our universal VirtIO device, VirtFuzz is generic and can be easily adapted to various Linux VirtIO kernel drivers and their related subsystems. We use this approach to fuzz the Linux Bluetooth and Wireless LAN (WLAN) stacks. To demonstrate the adaptability of our approach, we additionally provide implementations to fuzz the networking and input stack. We find 31 new, manually confirmed bugs, with 6 Common Vulnerabilities and Exposuress (CVEs) assigned.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646822/](https://ieeexplore.ieee.org/document/10646822/)
## Saturn: Host-Gadget Synergistic USB Driver Fuzzing.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#saturn-host-gadget-synergistic-usb-driver-fuzzing)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#saturn-host-gadget-synergistic-usb-driver-fuzzing)
### Authors
* Yiru Xu, BNRist, School of Software, Tsinghua University, Beijing, China
* Hao Sun, BNRist, School of Software, Tsinghua University, Beijing, China
* Jianzhong Liu, BNRist, School of Software, Tsinghua University, Beijing, China
* Yuheng Shen, BNRist, School of Software, Tsinghua University, Beijing, China
* Yu Jiang, BNRist, School of Software, Tsinghua University, Beijing, China
### Abstract
> The Universal Serial Bus (USB) is an essential component in modern operating systems, allowing for a wide assortment of peripherals to connect conveniently to a computer. The USB stack in an operating system usually consists of the following two components: the host-side driver and the device-side gadget driver, both of which are security-critical. If any vulnerabilities in these privileged-mode drivers are exploited, a malicious or malformed device could crash the whole system. Fuzzing, a popular automated vulnerability detection technology, has been applied to testing kernel components such as drivers with varying degrees of success. However, existing works mainly focus on one side and test drivers through emulating malicious input from userspace or peripherals while neglecting intricate internal states triggered only through interaction between the two boundaries, leaving a multitude of bugs exposed.In this paper, we propose Saturn, a host-gadget synergistic USB driver fuzzing approach, aiming to cover the entire handling chain throughout the USB communication. To achieve this, Saturn first leverages extracted driver information to attach gadgets systematically and trigger more driver types, facilitating the transition to interactive logic. Then, Saturn performs a persistent synergistic fuzzing process through canonical operation injection on both sides to play their own important roles, significantly expanding the states explored and exposing bugs in such logic. Compared to the state-of-the-art USB fuzzers, such as Syzkaller, USBFuzz and FUZZUSB, Saturn improves the branch coverage statistics on the corresponding stack by 1.53×, 3.69× and 2.3×, respectively. In addition, Saturn found 26 previously unknown bugs, among which are 4 CVEs, including drivers on each side.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646855/](https://ieeexplore.ieee.org/document/10646855/)
## SyzGen++: Dependency Inference for Augmenting Kernel Driver Fuzzing.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#syzgen-dependency-inference-for-augmenting-kernel-driver-fuzzing)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#syzgen-dependency-inference-for-augmenting-kernel-driver-fuzzing)
### Authors
* Weiteng Chen, Microsoft Research, Redmond
* Yu Hao, University of California, Riverside
* Zheng Zhang, University of California, Riverside
* Xiaochen Zou, University of California, Riverside
* Dhilung Kirat, IBM Research
* Shachee Mishra, IBM Research
* Douglas Schales, IBM Research
* Jiyong Jang, IBM Research
* Zhiyun Qian, University of California, Riverside
### Abstract
> In recent years, kernel fuzzing research has experienced a significant surge. Among various kernel fuzzers, Syzkaller stands out as the state-of-the-art tool, having identified over 5,000 bugs in the Linux kernel. Syzkaller’s success can be attributed to its utilization of manually-curated syscall specifications provided by kernel experts. However, this process is time-consuming and not scalable due to complex input structures and unknown dependencies among syscalls. Consequently, a substantial portion of the kernel codebase, specifically kernel drivers, lacks specifications, posing a significant security risk.In this paper, we introduce SyzGen++, an innovative approach for automatically inferring dependencies between syscalls and generating specifications without relying on existing test suites. Specifically, we define two fundamental building blocks of insertion and lookup operations and their pairing to accurately identify dependencies. We evaluated SyzGen++ against existing state-of-the-art techniques on both Linux and macOS drivers. Our results demonstrate that SyzGen++ uncovered 245 more dependencies. Furthermore, SyzGen++ outperforms DIFUZE, KSG, and SyzDescribe in terms of code coverage, achieving 71%, 67%, and 39% improvement on average, respectively. Notably, our evaluation discovered 10 previously unknown bugs in Linux Kernel 6.2 using specifications generated by SyzGen++, resulting in 6 CVEs, which demonstrates its effectiveness in identifying vulnerabilities.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646807/](https://ieeexplore.ieee.org/document/10646807/)
## Side-Channel-Assisted Reverse-Engineering of Encrypted DNN Hardware Accelerator IP and Attack Surface Exploration.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#side-channel-assisted-reverse-engineering-of-encrypted-dnn-hardware-accelerator-ip-and-attack-surface-exploration)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#side-channel-assisted-reverse-engineering-of-encrypted-dnn-hardware-accelerator-ip-and-attack-surface-exploration)
### Authors
* Cheng Gongye, Department of Electrical & Computer Engineering, Northeastern University, Boston, MA
* Yukui Luo, Department of Electrical & Computer Engineering, Northeastern University, Boston, MA
* Xiaolin Xu, Department of Electrical & Computer Engineering, Northeastern University, Boston, MA
* Yunsi Fei, Department of Electrical & Computer Engineering, Northeastern University, Boston, MA
### Abstract
> Deep Neural Networks (DNNs) have revolutionized numerous application domains with their unparalleled performance. As the models become larger and more complex, hardware DNN accelerators are increasingly popular. Field-Programmable Gate Array (FPGA)-based DNN accelerators offer near-Application Specific Integrated Circuit (ASIC) efficiency and exceptional flexibility, establishing them as one of the primary hardware platforms for rapidly evolving deep learning implementations, particularly on edge devices. This prominence renders them lucrative targets for attackers. Existing attacks aimed at compromising the confidentiality of DNN models deployed on FPGA DNN accelerators often assume complete knowledge of the accelerators. However, this assumption does not hold for real-world, proprietary, high-performance FPGA DNN accelerators. In this study, we introduce a comprehensive and effective reverse-engineering methodology for demystifying FPGA DNN accelerator soft Intellectual Property (IP) cores. We demonstrate its application on the cutting-edge AMD-Xilinx Deep Learning Processing Unit (DPU). Our method relies on schematic analysis and, innovatively, electromagnetic (EM) side-channel analysis to reveal the data flow and scheduling of the DNN accelerators. To the best of our knowledge, this research is the first successful endeavor to reverse-engineer a commercial encrypted DNN accelerator IP. Moreover, we investigate attack surfaces exposed by the reverse-engineering findings, including the successful recovery of DNN model architectures and extraction of model parameters. These outcomes pose a significant threat to real-world commercial FPGA-DNN acceleration systems. We discuss potential countermeasures and offer recommendations for FPGA-based IP protection.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646839/](https://ieeexplore.ieee.org/document/10646839/)
## SoK: Privacy-Preserving Data Synthesis.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#sok-privacy-preserving-data-synthesis)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#sok-privacy-preserving-data-synthesis)
### Authors
* Yuzheng Hu, University of Illinois Urbana-Champaign
* Fan Wu, University of Illinois Urbana-Champaign
* Qinbin Li, UC Berkeley
* Yunhui Long, University of Illinois Urbana-Champaign
* Gonzalo Munilla Garrido, Technische Universität München
* Chang Ge, University of Minnesota
* Bolin Ding, Alibaba Group
* David Forsyth, University of Illinois Urbana-Champaign
* Bo Li, University of Illinois Urbana-Champaign
* Dawn Song, UC Berkeley
### Abstract
> As the prevalence of data analysis grows, safeguarding data privacy has become a paramount concern. Consequently, there has been an upsurge in the development of mechanisms aimed at privacy-preserving data analyses. However, these approaches are task-specific; designing algorithms for new tasks is a cumbersome process. As an alternative, one can create synthetic data that is (ideally) devoid of private information. This paper focuses on privacy-preserving data synthesis (PPDS) by providing a comprehensive overview, analysis, and discussion of the field. Specifically, we put forth a master recipe that unifies two prominent strands of research in PPDS: statistical methods and deep learning (DL)-based methods. Under the master recipe, we further dissect the statistical methods into choices of modeling and representation, and investigate the DL-based methods by different generative modeling principles. To consolidate our findings, we provide comprehensive reference tables, distill key takeaways, and identify open problems in the existing literature. In doing so, we aim to answer the following questions: What are the design principles behind different PPDS methods? How can we categorize these methods, and what are the advantages and disadvantages associated with each category? Can we provide guidelines for method selection in different real-world scenarios? We proceed to benchmark several prominent DL-based methods on the task of private image synthesis and conclude that DP-MERF is an all-purpose approach. Finally, upon systematizing the work over the past decade, we identify future directions and call for actions from researchers.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646785/](https://ieeexplore.ieee.org/document/10646785/)
## Preserving Node-level Privacy in Graph Neural Networks.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#preserving-node-level-privacy-in-graph-neural-networks)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#preserving-node-level-privacy-in-graph-neural-networks)
### Authors
* Zihang Xiang, KAUST
* Tianhao Wang, University of Virginia
* Di Wang, KAUST
### Abstract
> Differential privacy (DP) has seen immense applications in learning on tabular, image, and sequential data where instance-level privacy is concerned. In learning on graphs, contrastingly, works on node-level privacy are highly sparse. Challenges arise as existing DP protocols hardly apply to the message-passing mechanism in Graph Neural Networks (GNNs).In this study, we propose a solution that specifically addresses the issue of node-level privacy. Our protocol consists of two main components: 1) a sampling routine called Heter-Poisson, which employs a specialized node sampling strategy and a series of tailored operations to generate a batch of sub-graphs with desired properties, and 2) a randomization routine that utilizes symmetric multivariate Laplace (SML) noise instead of the commonly used Gaussian noise. Our privacy accounting shows this particular combination provides a non-trivial privacy guarantee. In addition, our protocol enables GNN learning with good performance, as demonstrated by experiments on five real-world datasets; compared with existing baselines, our method shows significant advantages, especially in the high privacy regime. Experimentally, we also 1) perform membership inference attacks against our protocol and 2) apply privacy audit techniques to confirm our protocol’s privacy integrity.In the sequel, we present a study on a seemingly appealing approach [33] (USENIX’23) that protects node-level privacy via differentially private node/instance embeddings. Unfortunately, such work has fundamental privacy flaws, which are identified through a thorough case study. More importantly, we prove an impossibility result of achieving both (strong) privacy and (acceptable) utility through private instance embedding. The implication is that such an approach has intrinsic utility barriers when enforcing differential privacy.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646635/](https://ieeexplore.ieee.org/document/10646635/)
## From Principle to Practice: Vertical Data Minimization for Machine Learning.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#from-principle-to-practice-vertical-data-minimization-for-machine-learning)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#from-principle-to-practice-vertical-data-minimization-for-machine-learning)
### Authors
* Robin Staab, ETH Zurich, Switzerland
* Nikola Jovanović, ETH Zurich, Switzerland
* Mislav Balunović, ETH Zurich, Switzerland
* Martin Vechev, ETH Zurich, Switzerland
### Abstract
> Aiming to train and deploy predictive models, organizations collect large amounts of detailed client data, risking the exposure of private information in the event of a breach. To mitigate this, policymakers increasingly demand compliance with the data minimization (DM) principle, restricting data collection to only that data which is relevant and necessary for the task. Despite regulatory pressure, the problem of deploying machine learning models that obey DM has so far received little attention. In this work, we address this challenge in a comprehensive manner. We propose a novel vertical DM (vDM) workflow based on data generalization, which by design ensures that no full-resolution client data is collected during training and deployment of models, benefiting client privacy by reducing the attack surface in case of a breach. We formalize and study the corresponding problem of finding generalizations that both maximize data utility and minimize empirical privacy risk, which we quantify by introducing a diverse set of policy-aligned adversarial scenarios. Finally, we propose a range of baseline vDM algorithms, as well as Privacy-aware Tree (PAT), an especially effective vDM algorithm that outperforms all baselines across several settings. We plan to release our code as a publicly available library, helping advance the standardization of DM for machine learning. Overall, we believe our work can help lay the foundation for further exploration and adoption of DM principles in real-world applications.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646763/](https://ieeexplore.ieee.org/document/10646763/)
## BOLT: Privacy-Preserving, Accurate and Efficient Inference for Transformers.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#bolt-privacy-preserving-accurate-and-efficient-inference-for-transformers)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#bolt-privacy-preserving-accurate-and-efficient-inference-for-transformers)
### Authors
* Qi Pang, Carnegie Mellon University
* Jinhao Zhu, UC Berkeley
* Helen Möllering, Technical University of Darmstadt
* Wenting Zheng, Carnegie Mellon University
* Thomas Schneider, Technical University of Darmstadt
### Abstract
> The advent of transformers has brought about significant advancements in traditional machine learning tasks. However, their pervasive deployment has raised concerns about the potential leakage of sensitive information during inference. Existing approaches using secure multiparty computation (MPC) face limitations when applied to transformers due to the extensive model size and resource-intensive matrix-matrix multiplications. In this paper, we present BOLT, a privacy-preserving inference framework for transformer models that supports efficient matrix multiplications and nonlinear computations. Combined with our novel machine learning optimizations, BOLT reduces the communication cost by 10.91×. Our evaluation on diverse datasets demonstrates that BOLT maintains comparable accuracy to floating-point models and achieves 4.8-9.5× faster inference across various network settings compared to the state-of-the-art system.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646705/](https://ieeexplore.ieee.org/document/10646705/)
## SHERPA: Explainable Robust Algorithms for Privacy-Preserved Federated Learning in Future Networks to Defend Against Data Poisoning Attacks.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#sherpa-explainable-robust-algorithms-for-privacy-preserved-federated-learning-in-future-networks-to-defend-against-data-poisoning-attacks)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#sherpa-explainable-robust-algorithms-for-privacy-preserved-federated-learning-in-future-networks-to-defend-against-data-poisoning-attacks)
### Authors
* Chamara Sandeepa, School of Computer Science, University College Dublin, Ireland
* Bartlomiej Siniarski, School of Computer Science, University College Dublin, Ireland
* Shen Wang, School of Computer Science, University College Dublin, Ireland
* Madhusanka Liyanage, School of Computer Science, University College Dublin, Ireland
### Abstract
> With the rapid progression of communication and localisation of big data over billions of devices, distributed Machine Learning (ML) techniques are emerging to cater for the development of Artificial Intelligence (AI)-based services in a distributed manner. Federated Learning (FL) is such an innovative approach to achieve a privacy-preserved AI that facilitates ML model sharing and aggregation while keeping the participants’ data at the original source. However, recent research has investigated threats from poisoning attacks in FL. Several robust algorithms based on techniques such as similarity metrics or anomaly filtering are proposed as solutions. Yet, these approaches do not focus on investigating the intentions of the attackers or providing justifications and evidence for suspecting the behaviour of clients who are considered poisoners. Therefore, we propose SHERPA, a robust algorithm that uses Shapley Additive Explanations (SHAP) to identify potential poisoners in an FL system. Based on this, we develop a novel algorithm to differentiate poisoners via feature attribution clustering. We launch data poisoning attacks for different scenarios on multiple datasets and showcase our solution to mitigate the attacks. Furthermore, we show that privacy-targeted poisoning attacks can be mitigated with our approach. Accompanying the Explainable AI (XAI) technique for defence, our study reveals the potential for post-hoc feature attributions in countering data poisoning attacks with better explainability and improved justification in eliminating potentially malicious clients in the aggregation process.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646830/](https://ieeexplore.ieee.org/document/10646830/)
## Please Tell Me More: Privacy Impact of Explainability through the Lens of Membership Inference Attack.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#please-tell-me-more-privacy-impact-of-explainability-through-the-lens-of-membership-inference-attack)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#please-tell-me-more-privacy-impact-of-explainability-through-the-lens-of-membership-inference-attack)
### Authors
* Han Liu, Computer Security and Privacy Laboratory, Washington University, St. Louis, MO, USA
* Yuhao Wu, Computer Security and Privacy Laboratory, Washington University, St. Louis, MO, USA
* Zhiyuan Yu, Computer Security and Privacy Laboratory, Washington University, St. Louis, MO, USA
* Ning Zhang, Computer Security and Privacy Laboratory, Washington University, St. Louis, MO, USA
### Abstract
> Explainability is increasingly recognized as an enabling technology for the broader adoption of machine learning (ML), particularly for safety-critical applications. This has given rise to explainable ML, which seeks to enhance the explainability of neural networks through the use of explanators. Yet, the pursuit for better explainability inadvertently leads to increased security and privacy risks. While there has been considerable research into the security risks of explainable ML, its potential privacy risks remain under-explored.To bridge this gap, we present a systematic study of privacy risks in explainable ML through the lens of membership inference. Building on the observation that, besides the accuracy of the model, robustness also exhibits observable differences among member samples and non-member samples, we develop a new membership inference attack. This attack extracts additional membership features from changes in model confidence under different levels of perturbations guided by the importance highlighted by the attribution maps in the explanators. Intuitively, perturbing important features generally results in a bigger loss in confidence for member samples. Using the member-non-member differences in both model performance and robustness, an attack model is trained to distinguish the membership. We evaluated our approach with seven popular explanators across various benchmark models and datasets. Our attack demonstrates there is non-trivial privacy leakage in current explainable ML methods. Furthermore, such leakage issue persists even if the attacker lacks the knowledge of training datasets or target model architectures. Lastly, we also found existing model and output-based defense mechanisms are not effective in mitigating this new attack.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646875/](https://ieeexplore.ieee.org/document/10646875/)
## From Individual Computation to Allied Optimization: Remodeling Privacy-Preserving Neural Inference with Function Input Tuning.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#from-individual-computation-to-allied-optimization-remodeling-privacy-preserving-neural-inference-with-function-input-tuning)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#from-individual-computation-to-allied-optimization-remodeling-privacy-preserving-neural-inference-with-function-input-tuning)
### Authors
* Qiao Zhang, College of Computer Science, Chongqing University, Chongqing, China
* Tao Xiang, College of Computer Science, Chongqing University, Chongqing, China
* Chunsheng Xin, Department of Electrical and Computer Engineering, Old Dominion University, Norfolk, VA, USA
* Hongyi Wu, Department of Electrical and Computer Engineering, The University of Arizona, Tucson, AZ, USA
### Abstract
> Privacy-preserving Machine Learning as a Service (MLaaS) enables the resource-limited client to cost-efficiently obtain inference output of a well-trained neural model that is possessed by the cloud server, with both client’s input and server’s model parameters protected. While efficiency plays a core role for practical implementation of privacy-preserving MLaaS and it is encouraging to witness recent advances towards efficiency improvement, there still exists a significant performance gap to real-world applications. The basic logic in state-of-the-art frameworks involves an individual computation for each function of the neural model, based on specific cryptographic primitives. While it is definitely logical, we look back to the necessity of this function-wise methodology and initiate the comprehensive exploration towards allied optimization for efficient privacy-preserving MLaaS. Under such fresh perspective, we remodel the computation process that is always from input to output of the same function in mainstream works, to the allied counterpart that is from one function’s input associated with the start of expensive overhead to another function’s output enabling effective circumvention of unnecessary cost within the procedure. As such we propose FIT (Function Input Tuning) which features by a computation module for composite function with a series of joint optimization strategies. Theoretically, FIT not only eliminates the most expensive crypto operations without invoking extra encryption enabler, but also makes the running-time crypto complexity independent of filter size. Experimentally, FIT demonstrates tens of times speedup over various function dimensions from modern models, and 4.5× to 35.5× speedup on the total computation time when plugged in neural networks with data from small-scale MNIST to large-scale ImageNet.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646638/](https://ieeexplore.ieee.org/document/10646638/)
## Protecting Label Distribution in Cross-Silo Federated Learning.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#protecting-label-distribution-in-cross-silo-federated-learning)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2024].md#protecting-label-distribution-in-cross-silo-federated-learning)
### Authors
* Yangfan Jiang, National University of Singapore
* Xinjian Luo, National University of Singapore
* Yuncheng Wu, National University of Singapore
* Xiaokui Xiao, National University of Singapore
* Beng Chin Ooi, National University of Singapore
### Abstract
> Federated learning (FL) is a popular distributed machine learning (ML) framework in which multiple parties share their model parameters instead of the raw training datasets to construct a global model in a privacy-preserving manner. However, existing FL solutions mainly focus on protecting the privacy of individual training records by incorporating differential privacy (DP), while overlooking the protection of the distribution information of training datasets, despite the fact that data distribution is also regarded as highly sensitive in high-stakes applications.In this paper, we propose the first privacy-preserving stochastic gradient descent (SGD) algorithm for protecting label distribution in FL. To establish a formal privacy guarantee, we formalize a privacy notion, dubbed (m,γ,ξ)-label distributional privacy, to quantify label distributional privacy leakage. Subsequently, we design the label distribution perturbation mechanism (LDPM) that carefully incorporates randomness into the SGD algorithm to achieve (m,γ,ξ)-label distributional privacy for all one-vs-all classification models. LDPM is easy to implement and provides non-trivial privacy guarantees, making it a suitable drop-in replacement for existing FL local model training algorithms. Notably, we demonstrate that LDPM also ensures DP, indicating that LDPM offers both individual and label distributional privacy guarantees. Extensive experiments on six benchmark datasets validate the effectiveness of LDPM.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/10646748/](https://ieeexplore.ieee.org/document/10646748/)
