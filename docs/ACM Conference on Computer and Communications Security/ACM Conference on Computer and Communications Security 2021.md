# ACM Conference on Computer and Communications Security 2021
## Pseudo-Randomness and the Crystal Ball.
### Authors
* Cynthia Dwork, Harvard University, Cambridge, MA, USA
### Abstract
> The last decade has witnessed the emergence of algorithmic fairness as a new frontier in the application of theoretical computer science to problems of societal concern. The delay between academic investigation and industrial rhetoric acknowledging the concern has been surprisingly brief. This alacrity has positive and negative consequences, to wit, opportunity for quick adoption of technology and pressure for quick fixes. An early dichotomy in the literature differentiates between group notions of fairness - based on comparing prediction/classification statistics for (typically disjoint) demographic groups - and individual fairness, i.e., requiring that similar individuals be treated similarly [2]. Both face challenges. Group fairness criteria are appealing but can be meaningless [2, 8] or mutually incompatible [1, 7]; individual fairness requires a task-specific metric specifying the degree to which pairs of individuals are (dis)similar for the purposes of the task at hand. Considerable progress toward learning such a metric from an expert was made only recently [6]; see also [4]. Focus on similarity metrics has thrown into relief foundational questions about randomness and uncertainty. Some questions are specific to the philosophy of fairness, for example, questions about the value of an ex ante guarantee of fairness offered by a roll of the dice. Others involve the choice of metric, exposing the role of context. For example, should the likelihood that a job candidate will succeed in the advertised position be evaluated in the context of the work culture of the specific company that listed the position, or in an ideal, or even just a more egalitarian company with stronger culture of inclusivity?
### Links
- **URL:** [https://doi.org/10.1145/3460120.3482790](https://doi.org/10.1145/3460120.3482790)
## Towards Building a Responsible Data Economy.
### Authors
* Dawn Song, University of California, Berkeley, Berkeley, CA, USA
### Abstract
> Data is a key driver of modern economy and AI/machine learning, however, a lot of this data is sensitive and handling the sensitive data has caused unprecedented challenges for both individuals and businesses. These challenges will only get more severe as we move forward in the digital era. In this talk, I will talk about technologies needed for responsible data use including secure computing, differential privacy, federated learning, as well as blockchain technologies for data rights, and how to combine privacy computing technologies and blockchain to building a platform for a responsible data economy, to enable more responsible use of data that maximizes social welfare & economic efficiency while protecting users' data rights and enable fair distribution of value created from data. I will also talk about new paradigms that this approach enables including decentralized data science and data DAO. I will also discuss new frameworks on data valuation.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3482789](https://doi.org/10.1145/3460120.3482789)
## Are we done yet? Our Journey to Fight against Memory-safety Bugs.
### Authors
* Taesoo Kim, Georgia Institute of Technology & Samsung Research, Atlanta, GA, USA
### Abstract
> Memory-safety issues have been a long-standing concern of the security practitioners. According to Microsoft and Google, memory-safety bugs still represent 70% of the exploited vulnerabilities in complex, real-world programs like OSes and Web browsers. However, it doesn't mean that academics and practitioners haven't tried hard to alleviate the problem. Advances in automatic techniques like fuzzing and sanitizers revolutionize the way we tame the memory safety bugs, but the increasing volume of new software simply outpaces the adoption rate of these promising new techniques, setting the legacy programs aside. In this talk, I'd like to share "our" own journey to fight against memory-safety bugs - "our" is important as all research is conducted together with the brightest hackers in SSLab at Georgia Tech. First, I'd like to talk about our group's research agenda in the memory-safety world ranging from binary exploitation, programming analysis, fuzzing, symbolic execution and security education. Second, I will share our group's journey to participate in the DARPA CGC, DEFCON CTF and pwn2own competitions. Third, I will also present where our group is heading to: a promising new memory/thread-safe language, called Rust. Lastly, I will conclude the talk with an important projection by using our recent work on finding bugs in the Rust packages: like COVID-19, the memory-safety bugs likely stay with us for the next decade, if not more.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3482788](https://doi.org/10.1145/3460120.3482788)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3482788](https://dl.acm.org/doi/pdf/10.1145/3460120.3482788)
## Chunk-Level Password Guessing: Towards Modeling Refined Password Composition Representations.
### Authors
* Ming Xu, Fudan University, Shanghai, China
* Chuanwang Wang, Fudan University, Shanghai, China
* Jitao Yu, Fudan University, Shanghai, China
* Junjie Zhang, Fudan University, Shanghai, China
* Kai Zhang, Fudan University, Shanghai, China
* Weili Han, Fudan University, Shanghai, China
### Abstract
> Textual password security hinges on the guessing models adopted by attackers, in which a suitable password composition representation is an influential factor. Unfortunately, the conventional models roughly regard a password as a sequence of characters, or natural-language-based words, which are password-irrelevant. Experience shows that passwords exhibit internal and refined patterns, e.g., "4ever, ing or 2015", varying significantly among periods and regions. However, the refined representations and their security impacts could not be automatically understood by state-of-the-art guessing models (e.g., Markov). In this paper, we regard a password as a composition of several chunks, where a chunk is a sequence of related characters that appear together frequently, to model passwords. Based on the concept, we propose a password-specific segmentation method that can automatically split passwords into several chunks, and then build three chunk-level guessing models, adopted from Markov, Probabilistic Context-free Grammar (PCFG) and neural-network-based models. Based on the extensive evaluation with over 250 million passwords, these chunk-level models can improve their guessing efficiency by an average of 5.7%, 51.2% and 41.9%, respectively, in an offline guessing scenario, showcasing the power of a suitable password representation during attacks. By analysing these efficient attacks, we find that the presence of common chunks in a password is a stronger indicator for password vulnerability than the character class complexity. To protect users against such attacks, we develop a client-side and real-time password strength meter to estimate the passwords' resistance based on chunk-level guessing models.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484743](https://doi.org/10.1145/3460120.3484743)
## Out of Sight, Out of Mind: Detecting Orphaned Web Pages at Internet-Scale.
### Authors
* Stijn Pletinckx, TU Delft, Delft, Netherlands
* Kevin Borgolte, Ruhr University Bochum, Bochum, Germany
* Tobias Fiebig, TU Delft, Delft, Netherlands
### Abstract
> Security misconfigurations and neglected updates commonly lead to systems being vulnerable. Especially in the context of websites, we often find pages that were forgotten, that is, they were left online after they served their purpose and never updated thereafter. In this paper, we introduce new methodology to detect such forgotten or orphaned web pages. We combine historic data from the Internet Archive with active measurements to identify pages no longer reachable via a path from the index page, yet stay accessible through their specific URL. We show the efficacy of our approach and the real-world relevance of orphaned web-pages by applying it to a sample of 100,000 domains from the Tranco Top 1M. Leveraging our methodology, we find 1,953 pages on 907 unique domains that are orphaned, some of which are 20 years old. Analyzing their security posture, we find that these pages are significantly ((p < 0.01) using (χ2)) more likely to be vulnerable to cross-site scripting (XSS) and SQL injection (SQLi) vulnerabilities than maintained pages. In fact, orphaned pages are almost ten times as likely to suffer from XSS (19.3%) than maintained pages from a random Internet crawl (2.0%), and maintained pages of websites with some orphans are almost three times as vulnerable (5.9%). Concerning SQLi, maintained pages on websites with some orphans are almost as vulnerable (9.5%) as orphans (10.8%), and both are significantly more likely to be vulnerable than other maintained pages (2.7%). Overall, we see a clear hierarchy: Orphaned pages are the most vulnerable, followed by maintained pages on websites with orphans, with fully maintained sites being least vulnerable. We share an open source implementation of our methodology to enable the reproduction and application of our results in practice.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3485367](https://doi.org/10.1145/3460120.3485367)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3485367](https://dl.acm.org/doi/pdf/10.1145/3460120.3485367)
## Catching Transparent Phish: Analyzing and Detecting MITM Phishing Toolkits.
### Authors
* Brian Kondracki, Stony Brook University, Stony Brook, NY, USA
* Babak Amin Azad, Stony Brook University, Stony Brook, NY, USA
* Oleksii Starov, Palo Alto Networks, Santa Clara, CA, USA
* Nick Nikiforakis, Stony Brook University, Stony Brook, NY, USA
### Abstract
> For over a decade, phishing toolkits have been helping attackers automate and streamline their phishing campaigns. Man-in-the- Middle (MITM) phishing toolkits are the latest evolution in this space, where toolkits act as malicious reverse proxy servers of online services, mirroring live content to users while extracting cre- dentials and session cookies in transit. These tools further reduce the work required by attackers, automate the harvesting of 2FA- authenticated sessions, and substantially increase the believability of phishing web pages. In this paper, we present the first analysis of MITM phishing toolkits used in the wild. By analyzing and experimenting with these toolkits, we identify intrinsic network-level properties that can be used to identify them. Based on these properties, we develop a machine learning classifier that identifies the presence of such toolkits in online communications with 99.9% accuracy. We conduct a large-scale longitudinal study of MITM phishing toolkits by creating a data-collection framework that monitors and crawls suspicious URLs from public sources. Using this infrastruc- ture, we capture data on 1,220 MITM phishing websites over the course of a year. We discover that MITM phishing toolkits occupy a blind spot in phishing blocklists, with only 43.7% of domains and 18.9% of IP addresses associated with MITM phishing toolkits present on blocklists, leaving unsuspecting users vulnerable to these attacks. Our results show that our detection scheme is resilient to the cloaking mechanisms incorporated by these tools, and is able to detect previously hidden phishing content. Finally, we propose methods that online services can utilize to fingerprint requests origi- nating from these toolkits and stop phishing attempts as they occur.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484765](https://doi.org/10.1145/3460120.3484765)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484765](https://dl.acm.org/doi/pdf/10.1145/3460120.3484765)
## Reverse Attack: Black-box Attacks on Collaborative Recommendation.
### Authors
* Yihe Zhang, University of Louisiana at Lafayette, Lafayette, LA, USA
* Xu Yuan, University of Louisiana at Lafayette, Lafayette, LA, USA
* Jin Li, Guangzhou University, Guangzhou, China
* Jiadong Lou, University of Louisiana at Lafayette, Lafayette, LA, USA
* Li Chen, University of Louisiana at Lafayette, Lafayette, LA, USA
* Nian-Feng Tzeng, University of Louisiana at Lafayette, Lafayette, LA, USA
### Abstract
> Collaborative filtering (CF) recommender systems have been extensively developed and widely deployed in various social websites, promoting products or services to the users of interest. Meanwhile, work has been attempted at poisoning attacks to CF recommender systems for distorting the recommend results to reap commercial or personal gains stealthily. While existing poisoning attacks have demonstrated their effectiveness with the offline social datasets, they are impractical when applied to the real setting on online social websites. This paper develops a novel and practical poisoning attack solution toward the CF recommender systems without knowing involved specific algorithms nor historical social data information a priori. Instead of directly attacking the unknown recommender systems, our solution performs certain operations on the social websites to collect a set of sampling data for use in constructing a surrogate model for deeply learning the inherent recommendation patterns. This surrogate model can estimate the item proximities, learned by the recommender systems. By attacking the surrogate model, the corresponding solutions (for availability and target attacks) can be directly migrated to attack the original recommender systems. Extensive experiments validate the generated surrogate model's reproductive capability and demonstrate the effectiveness of our attack upon various CF recommender algorithms.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484805](https://doi.org/10.1145/3460120.3484805)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484805](https://dl.acm.org/doi/pdf/10.1145/3460120.3484805)
## It's Not What It Looks Like: Manipulating Perceptual Hashing based Applications.
### Authors
* Qingying Hao, University of Illinois at Urbana-Champaign, Urbana, IL, USA
* Licheng Luo, University of Illinois at Urbana-Champaign, Urbana, IL, USA
* Steve T.K. Jan, University of Illinois at Urbana-Champaign, Urbana, IL, USA
* Gang Wang, University of Illinois at Urbana-Champaign, Urbana, IL, USA
### Abstract
> Perceptual hashing is widely used to search or match similar images for digital forensics and cybercrime study. Unfortunately, the robustness of perceptual hashing algorithms is not well understood in these contexts. In this paper, we examine the robustness of perceptual hashing and its dependent security applications both experimentally and empirically. We first develop a series of attack algorithms to subvert perceptual hashing based image search. This is done by generating attack images that effectively enlarge the hash distance to the original image while introducing minimal visual changes. To make the attack practical, we design the attack algorithms under a black-box setting, augmented with novel designs (e.g., grayscale initialization) to improve the attack efficiency and transferability. We then evaluate our attack against the standard pHash as well as its robust variant using three different datasets. After confirming the attack effectiveness experimentally, we then empirically test against real-world reverse image search engines including TinEye, Google, Microsoft Bing, and Yandex. We find that our attack is highly successful on TinEye and Bing, and is moderately successful on Google and Yandex. Based on our findings, we discuss possible countermeasures and recommendations.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484559](https://doi.org/10.1145/3460120.3484559)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484559](https://dl.acm.org/doi/pdf/10.1145/3460120.3484559)
## Black-box Adversarial Attacks on Commercial Speech Platforms with Minimal Information.
### Authors
* Baolin Zheng, Wuhan University, Wuhan, China
* Peipei Jiang, Wuhan University, Wuhan, China
* Qian Wang, Wuhan University, Wuhan, China
* Qi Li, Tsinghua University, Beijing, China
* Chao Shen, Xi'an Jiaotong University, Xi'an, China
* Cong Wang, City University of Hong Kong, Hong Kong, China
* Yunjie Ge, Wuhan University, Wuhan, China
* Qingyang Teng, Wuhan University, Wuhan, China
* Shenyi Zhang, Wuhan University, Wuhan, China
### Abstract
> Adversarial attacks against commercial black-box speech platforms, including cloud speech APIs and voice control devices, have received little attention until recent years. Constructing such attacks is difficult mainly due to the unique characteristics of time-domain speech signals and the much more complex architecture of acoustic systems. The current "black-box" attacks all heavily rely on the knowledge of prediction/confidence scores or other probability information to craft effective adversarial examples (AEs), which can be intuitively defended by service providers without returning these messages. In this paper, we take one more step forward and propose two novel adversarial attacks in more practical and rigorous scenarios. For commercial cloud speech APIs, we propose Occam, a decision-only black-box adversarial attack, where only final decisions are available to the adversary. In Occam, we formulate the decision-only AE generation as a discontinuous large-scale global optimization problem, and solve it by adaptively decomposing this complicated problem into a set of sub-problems and cooperatively optimizing each one. Our Occam is a one-size-fits-all approach, which achieves 100% success rates of attacks (SRoA) with an average SNR of 14.23dB, on a wide range of popular speech and speaker recognition APIs, including Google, Alibaba, Microsoft, Tencent, iFlytek, and Jingdong, outperforming the state-of-the-art black-box attacks. For commercial voice control devices, we propose NI-Occam, the first non-interactive physical adversarial attack, where the adversary does not need to query the oracle and has no access to its internal information and training data. We, for the first time, combine adversarial attacks with model inversion attacks, and thus generate the physically-effective audio AEs with high transferability without any interaction with target devices. Our experimental results show that NI-Occam can successfully fool Apple Siri, Microsoft Cortana, Google Assistant, iFlytek and Amazon Echo with an average SRoA of 52% and SNR of 9.65dB, shedding light on non-interactive physical attacks against voice control devices.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3485383](https://doi.org/10.1145/3460120.3485383)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3485383](https://dl.acm.org/doi/pdf/10.1145/3460120.3485383)
## A Hard Label Black-box Adversarial Attack Against Graph Neural Networks.
### Authors
* Jiaming Mu, Tsinghua University, Beijing, China
* Binghui Wang, Illinois Institute of Technology, Chicagao, IL, USA
* Qi Li, Tsinghua University, Beijing, China
* Kun Sun, George Mason University, Fairfax, CA, USA
* Mingwei Xu, Tsinghua University, Beijing, China
* Zhuotao Liu, Tsinghua University, Beijing, China
### Abstract
> Graph Neural Networks (GNNs) have achieved state-of-the-art performance in various graph structure related tasks such as node classification and graph classification. However, GNNs are vulnerable to adversarial attacks. Existing works mainly focus on attacking GNNs for node classification; nevertheless, the attacks against GNNs for graph classification have not been well explored. In this work, we conduct a systematic study on adversarial attacks against GNNs for graph classification via perturbing the graph structure. In particular, we focus on the most challenging attack, i.e., hard label black-box attack, where an attacker has no knowledge about the target GNN model and can only obtain predicted labels through querying the target model. To achieve this goal, we formulate our attack as an optimization problem, whose objective is to minimize the number of edges to be perturbed in a graph while maintaining the high attack success rate. The original optimization problem is intractable to solve, and we relax the optimization problem to be a tractable one, which is solved with theoretical convergence guarantee. We also design a coarse-grained searching algorithm and a query-efficient gradient computation algorithm to decrease the number of queries to the target GNN model. Our experimental results on three real-world datasets demonstrate that our attack can effectively attack representative GNNs for graph classification with less queries and perturbations. We also evaluate the effectiveness of our attack under two defenses: one is well-designed adversarial graph detector and the other is that the target GNN model itself is equipped with a defense to prevent adversarial graph generation. Our experimental results show that such defenses are not effective enough, which highlights more advanced defenses.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484796](https://doi.org/10.1145/3460120.3484796)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484796](https://dl.acm.org/doi/pdf/10.1145/3460120.3484796)
## Robust Adversarial Attacks Against DNN-Based Wireless Communication Systems.
### Authors
* Alireza Bahramali, University of Massachusetts Amherst, Amherst, MA, USA
* Milad Nasr, University of Massachusetts Amherst, Amherst, MA, USA
* Amir Houmansadr, University of Massachusetts Amherst, Amherst, MA, USA
* Dennis Goeckel, University of Massachusetts Amherst, Amherst, MA, USA
* Don Towsley, University of Massachusetts Amherst, Amherst, MA, USA
### Abstract
> There is significant enthusiasm for the employment of Deep Neural Networks (DNNs) for important tasks in major wireless communication systems: channel estimation and decoding in orthogonal frequency division multiplexing (OFDM) systems, end-to-end autoencoder system design, radio signal classification, and signal authentication. Unfortunately, DNNs can be susceptible to adversarial examples, potentially making such wireless systems fragile and vulnerable to attack. In this work, by designing robust adversarial examples that meet key criteria, we perform a comprehensive study of the threats facing DNN-based wireless systems. We model the problem of adversarial wireless perturbations as an optimization problem that incorporates domain constraints specific to different wireless systems. This allows us to generate wireless adversarial perturbations that can be applied to wireless signals on-the-fly (i.e., with no need to know the target signals a priori), are undetectable from natural wireless noise, and are robust against removal. We show that even in the presence of significant defense mechanisms deployed by the communicating parties, our attack performs significantly better compared to existing attacks against DNN-based wireless systems. In particular, the results demonstrate that even when employing well-considered defenses, DNN-based wireless communication systems are vulnerable to adversarial attacks and call into question the employment of DNNs for a number of tasks in robust wireless communication.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484777](https://doi.org/10.1145/3460120.3484777)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484777](https://dl.acm.org/doi/pdf/10.1145/3460120.3484777)
## AI-Lancet: Locating Error-inducing Neurons to Optimize Neural Networks.
### Authors
* Yue Zhao, Institute of Information Engineering, Chinese Academy of Sciences & University of Chinese Academy of Sciences, China, Beijing, China
* Hong Zhu, Institute of Information Engineering, Chinese Academy of Sciences & University of Chinese Academy of Sciences, China, Beijing, China
* Kai Chen, Institute of Information Engineering, Chinese Academy of Sciences & China University of Chinese Academy of Sciences, China & Beijing Academy of Artificial Intelligence, China, Beijing, China
* Shengzhi Zhang, Metropolitan College, Boston University, USA, Boston, MA, USA
### Abstract
> Deep neural network (DNN) has been widely utilized in many areas due to its increasingly high accuracy. However, DNN models could also produce wrong outputs due to internal errors, which may lead to severe security issues. Unlike fixing bugs in traditional computer software, tracing the errors in DNN models and fixing them are much more difficult due to the uninterpretability of DNN. In this paper, we present a novel and systematic approach to trace and fix the errors in deep learning models. In particular, we locate the error-inducing neurons that play a leading role in the erroneous output. With the knowledge of error-inducing neurons, we propose two methods to fix the errors: the neuron-flip and the neuron-fine-tuning. We evaluate our approach using five different training datasets and seven different model architectures. The experimental results demonstrate its efficacy in different application scenarios, including backdoor removal and general defects fixing.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484818](https://doi.org/10.1145/3460120.3484818)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484818](https://dl.acm.org/doi/pdf/10.1145/3460120.3484818)
## Doubly Efficient Interactive Proofs for General Arithmetic Circuits with Linear Prover Time.
### Authors
* Jiaheng Zhang, University of California, Berkeley, Berkeley, CA, USA
* Tianyi Liu, Texas A&M University, College Station, TX, USA
* Weijie Wang, Shanghai Jiao Tong University, Shanghai, China
* Yinuo Zhang, University of California, Berkeley, Berkeley, CA, USA
* Dawn Song, University of California, Berkeley, Berkeley, CA, USA
* Xiang Xie, Shanghai Key Laboratory of Privacy-Preserving Computation, Shangha, China
* Yupeng Zhang, Texas A&M University, College Station, TX, USA
### Abstract
> We propose a new doubly efficient interactive proof protocol for general arithmetic circuits. The protocol generalizes the interactive proof for layered circuits proposed by Goldwasser, Kalai and Rothblum to arbitrary circuits, while preserving the optimal prover complexity that is strictly linear to the size of the circuits. The proof size remains succinct for low depth circuits and the verifier time is sublinear for structured circuits. We then construct a new zero knowledge argument scheme for general arithmetic circuits using our new interactive proof protocol together with polynomial commitments. Our key technique is a new sumcheck equation that reduces a claim about the output of one layer to claims about its input only, instead of claims about all the layers above which inevitably incurs an overhead proportional to the depth of the circuit. We developed efficient algorithms for the prover to run this sumcheck protocol and to combine multiple claims back into one in linear time in the size of the circuit. Not only does our new protocol achieve optimal prover complexity asymptotically, but it is also efficient in practice. Our experiments show that it only takes 0.3 seconds to generate the proof for a circuit with more than 600,000 gates, which is 13 times faster than the original interactive proof protocol on the corresponding layered circuit. The proof size is 208 kilobytes and the verifier time is 66 milliseconds. Our implementation can take general arithmetic circuits directly, without transforming them to layered circuits with a high overhead on the size of the circuit.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484767](https://doi.org/10.1145/3460120.3484767)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484767](https://dl.acm.org/doi/pdf/10.1145/3460120.3484767)
## Constant-Overhead Zero-Knowledge for RAM Programs.
### Authors
* Nicholas Franzese, Northwestern University, Evanston, IL, USA
* Jonathan Katz, University of Maryland, College Park, MD, USA
* Steve Lu, Stealth Software Technologies, Inc., Los Angeles, CA, USA
* Rafail Ostrovsky, University of California, Los Angeles, Los Angeles, CA, USA
* Xiao Wang, Northwestern University, Evanston, IL, USA
* Chenkai Weng, Northwestern University, Evanston, IL, USA
### Abstract
> We show a constant-overhead interactive zero-knowledge (ZK) proof system for RAM programs, that is, a ZK proof in which the communication complexity as well as the running times of the prover and verifier scale linearly in the size of the memory N and the running time T of the underlying RAM program. Besides yielding an asymptotic improvement of prior work, our implementation gives concrete performance improvements for RAM-based ZK proofs. In particular, our implementation supports ZK proofs of private read/write accesses to 64~MB of memory (224 32-bit words) using only 34~bytes of communication per access, a more than 80x improvement compared to the recent BubbleRAM protocol. We also design a lightweight RISC CPU that can efficiently emulate the MIPS-I instruction set, and for which our ZK proof communicates only ~320 bytes per cycle, more than 10x less than the BubbleRAM CPU. In a 100 Mbps network, we can perform zero-knowledge executions of our CPU (with 64~MB of main memory and 4~MB of program memory) at a clock rate of 6.6 KHz.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484800](https://doi.org/10.1145/3460120.3484800)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484800](https://dl.acm.org/doi/pdf/10.1145/3460120.3484800)
## Appenzeller to Brie: Efficient Zero-Knowledge Proofs for Mixed-Mode Arithmetic and Z2k.
### Authors
* Carsten Baum, Aarhus University, Aarhus, Denmark
* Lennart Braun, Aarhus University, Aarhus, Denmark
* Alexander Munch-Hansen, Aarhus University, Aarhus, Denmark
* Benoit Razet, Galois, Inc., Portland, OR, USA
* Peter Scholl, Aarhus University, Aarhus, Denmark
### Abstract
> Zero-knowledge proofs are highly flexible cryptographic protocols that are an important building block for many secure systems. Typically, these are defined with respect to statements that are formulated as arithmetic operations over a fixed finite field. This inflexibility is a disadvantage when it comes to complex programs, as some fields are more amenable to express certain operations than others. At the same time, there do not seem to be many proofs with a programming model similar to those found in modern computer architectures that perform arithmetic with 32 or 64 bit integers. In this work, we present solutions to both of these problems. First, we show how to efficiently check consistency of secret values between different instances of zero-knowledge protocols based on the commit-and-prove paradigm. This allows a protocol user to easily switch to the most efficient representation for a given task. To achieve this, we modify the extended doubly-authenticated bits (edabits) approach by Escudero et al. (Crypto 2020), originally developed for MPC, and optimize it for the zero-knowledge setting. As an application of our consistency check, we also introduce protocols for efficiently verifying truncations and comparisons of shared values both modulo a large prime p and modulo 2k. Finally, we complement our conversion protocols with new protocols for verifying arithmetic statements in Z2k. Here, we build upon recent interactive proof systems based on information-theoretic MACs and vector oblivious linear evaluation (VOLE), and show how this paradigm can be adapted to the ring setting. In particular, we show that supporting such modular operations natively in a proof system can be almost as efficient as proofs over large fields or bits, and this also easily plugs into our framework for zero-knowledge conversions.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484812](https://doi.org/10.1145/3460120.3484812)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484812](https://dl.acm.org/doi/pdf/10.1145/3460120.3484812)
## Shorter and Faster Post-Quantum Designated-Verifier zkSNARKs from Lattices.
### Authors
* Yuval Ishai, Technion, Haifa, Israel
* Hang Su, University of Virginia, Charlottesville, VA, USA
* David J. Wu, University of Texas at Austin, Austin, TX, USA
### Abstract
> Zero-knowledge succinct arguments of knowledge (zkSNARKs) enable efficient privacy-preserving proofs of membership for general NP languages. Our focus in this work is on post-quantum zkSNARKs, with a focus on minimizing proof size. Currently, there is a 1000x gap in the proof size between the best pre-quantum constructions and the best post-quantum ones. Here, we develop and implement new lattice-based zkSNARKs in the designated-verifier preprocessing model. With our construction, after an initial preprocessing step, a proof for an NP relation of size 2^20 is just over 16 KB. Our proofs are 10.3x shorter than previous post-quantum zkSNARKs for general NP languages. Compared to previous lattice-based zkSNARKs (also in the designated-verifier preprocessing model), we obtain a 42x reduction in proof size and a 60x reduction in the prover's running time, all while achieving a much higher level of soundness. Compared to the shortest pre-quantum zkSNARKs by Groth (Eurocrypt 2016), the proof size in our lattice-based construction is 131x longer, but both the prover and the verifier are faster (by 1.2x and 2.8x, respectively). Our construction follows the general blueprint of Bitansky et al. (TCC 2013) and Boneh et al. (Eurocrypt 2017) of combining a linear probabilistically checkable proof (linear PCP) together with a linear-only vector encryption scheme. We develop a concretely-efficient lattice-based instantiation of this compiler by considering quadratic extension fields of moderate characteristic and using linear-only vector encryption over rank-2 module lattices.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484572](https://doi.org/10.1145/3460120.3484572)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484572](https://dl.acm.org/doi/pdf/10.1145/3460120.3484572)
## "Hello, It's Me": Deep Learning-based Speech Synthesis Attacks in the Real World.
### Authors
* Emily Wenger, University of Chicago, Chicago, IL, USA
* Max Bronckers, University of Chicago, Chicago, IL, USA
* Christian Cianfarani, University of Chicago, Chicago, IL, USA
* Jenna Cryan, University of Chicago, Chicago, IL, USA
* Angela Sha, University of Chicago, Chicago, IL, USA
* Haitao Zheng, University of Chicago, Chicago, IL, USA
* Ben Y. Zhao, University of Chicago, Chicago, IL, USA
### Abstract
> Advances in deep learning have introduced a new wave of voice synthesis tools, capable of producing audio that sounds as if spoken by a target speaker. If successful, such tools in the wrong hands will enable a range of powerful attacks against both humans and software systems (aka machines). This paper documents efforts and findings from a comprehensive experimental study on the impact of deep-learning based speech synthesis attacks on both human listeners and machines such as speaker recognition and voice-signin systems. We find that both humans and machines can be reliably fooled by synthetic speech, and that existing defenses against synthesized speech fall short. These findings highlight the need to raise awareness and develop new protections against synthetic speech for both humans and machines.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484742](https://doi.org/10.1145/3460120.3484742)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484742](https://dl.acm.org/doi/pdf/10.1145/3460120.3484742)
## Don't Forget the Stuffing! Revisiting the Security Impact of Typo-Tolerant Password Authentication.
### Authors
* Sena Sahin, Georgia Institute of Technology, Atlanta, GA, USA
* Frank Li, Georgia Institute of Technology, Atlanta, GA, USA
### Abstract
> To enhance the usability of password authentication, typo-tolerant password authentication schemes permit certain deviations in the user-supplied password, to account for common typographical errors yet still allow the user to successfully log in. In prior work, analysis by Chatterjee et al. demonstrated that typo-tolerance indeed notably improves password usability, yet (surprisingly) does not appear to significantly degrade authentication security. In practice, major web services such as Facebook have employed typo-tolerant password authentication systems. In this paper, we revisit the security impact of typo-tolerant password authentication. We observe that the existing security analysis of such systems considers only password spraying attacks. However, this threat model is incomplete, as password authentication systems must also contend with credential stuffing and tweaking attacks. Factoring in these missing attack vectors, we empirically re-evaluate the security impact of password typo-tolerance using password leak datasets, discovering a significantly larger degradation in security. To mitigate this issue, we explore machine learning classifiers that predict when a password's security is likely affected by typo-tolerance. Our resulting models offer various suitable operating points on the functionality-security tradeoff spectrum, ultimately allowing for partial deployment of typo-tolerant password authentication, preserving its functionality for many users while reducing the security risks.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484791](https://doi.org/10.1145/3460120.3484791)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484791](https://dl.acm.org/doi/pdf/10.1145/3460120.3484791)
## Dissecting Click Fraud Autonomy in the Wild.
### Authors
* Tong Zhu, Shanghai Jiao Tong University, Shanghai, China
* Yan Meng, Shanghai Jiao Tong University, Shanghai, China
* Haotian Hu, Shanghai Jiao Tong University, Shanghai, China
* Xiaokuan Zhang, The Ohio State University, Columbus, OH, USA
* Minhui Xue, The University of Adelaide, Adelaide, Australia
* Haojin Zhu, Shanghai Jiao Tong University, Shanghai, China
### Abstract
> Although the use of pay-per-click mechanisms stimulates the prosperity of the mobile advertisement network, fraudulent ad clicks result in huge financial losses for advertisers. Extensive studies identify click fraud according to click/traffic patterns based on dynamic analysis. However, in this study, we identify a novel click fraud, named humanoid attack, which can circumvent existing detection schemes by generating fraudulent clicks with similar patterns to normal clicks. We implement the first tool ClickScanner to detect humanoid attacks on Android apps based on static analysis and variational AutoEncoders (VAEs) with limited knowledge of fraudulent examples. We define novel features to characterize the patterns of humanoid attacks in the apps' bytecode level. ClickScanner builds a data dependency graph (DDG) based on static analysis to extract these key features and form a feature vector. We then propose a classification model only trained on benign datasets to overcome the limited knowledge of humanoid attacks. We leverage ClickScanner to conduct the first large-scale measurement on app markets (i.e., 120,000 apps from Google Play and Huawei AppGallery) and reveal several unprecedented phenomena. First, even for the top-rated 20,000 apps, ClickScanner still identifies 157 apps as fraudulent, which shows the prevalence of humanoid attacks. Second, it is observed that the ad SDK-based attack (i.e., the fraudulent codes are in the third-party ad SDKs) is now a dominant attack approach. Third, the manner of attack is notably different across apps of various categories and popularities. Finally, we notice there are several existing variants of the humanoid attack. Additionally, our measurements demonstrate the proposed ClickScanner is accurate and time-efficient (i.e., the detection overhead is only 15.35% of those of existing schemes).
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484546](https://doi.org/10.1145/3460120.3484546)
## Understanding and Detecting Mobile Ad Fraud Through the Lens of Invalid Traffic.
### Authors
* Suibin Sun, Shanghai Jiao Tong University, Shanghai, China
* Le Yu, Shanghai Jiao Tong University, Shanghai, China
* Xiaokuan Zhang, The Ohio State University, Columbus, OH, USA
* Minhui Xue, The University of Adelaide, Adelaide, SA, Australia
* Ren Zhou, Shanghai Jiao Tong University, Shanghai, China
* Haojin Zhu, Shanghai Jiao Tong University, Shanghai, China
* Shuang Hao, University of Texas at Dallas, Dallas, TX, USA
* Xiaodong Lin, University of Guelph, Guelph, Canada
### Abstract
> Along with gaining popularity of Real-Time Bidding (RTB) based programmatic advertising, the click farm based invalid traffic, which leverages massive real smartphones to carry out large-scale ad fraud campaigns, is becoming one of the major threats against online advertisement. In this study, we take an initial step towards the detection and large-scale measurement of the click farm based invalid traffic. Our study begins with a measurement on the device's features using a real-world labeled dataset, which reveals a series of features distinguishing the fraudulent devices from the benign ones. Based on these features, we develop EvilHunter, a system for detecting fraudulent devices through ad bid request logs with a focus on clustering fraudulent devices. EvilHunter functions by 1) building a classifier to distinguish fraudulent and benign devices; 2) clustering devices based on app usage patterns; and 3) relabeling devices in clusters through majority voting. EvilHunter demonstrates 97% precision and 95% recall on a real-world labeled dataset. By investigating a super click farm, we reveal several cheating strategies that are commonly adopted by fraudulent clusters. We further reduce the overhead of EvilHunter and discuss how to deploy the optimized EvilHunter in a real-world system. We are in partnership with a leading ad verification company to integrate EvilHunter into their industrial platform.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484547](https://doi.org/10.1145/3460120.3484547)
## Usable User Authentication on a Smartwatch using Vibration.
### Authors
* Sunwoo Lee, Korea University, Seoul, Republic of Korea
* Wonsuk Choi, Hansung University, Seoul, Republic of Korea
* Dong Hoon Lee, Korea University, Seoul, Republic of Korea
### Abstract
> Smartwatches have come into wide use in recent years, and a number of smartwatch applications that improve convenience and user health are being developed and introduced constantly. Moreover, the latest smartwatches are now designed to operate without their paired smartphones, and as such, it is necessary for smartwatches to independently authenticate users. In these current devices, personal identification numbers (PIN) or patterns are entered to authenticate users, but these methods require inconvenient interaction for the user and are not highly secure. Particularly relevant to smartwatch technology, even user authentication based on biometric information needs either special sensors capable of measuring biometric information or user interaction. In this paper, we propose a usable method for user authentication on smartwatches without additional devices. Based on the fact that vibration is absorbed, reflected, and propagated differently according to the physical structure of each human body, our method is designed as a challenge-response scheme, in which the challenge is a random sequence of multiple vibration types that are already built into current smartwatches. The responses to vibrations are measured by the default gyroscope and accelerometer sensors in smartwatches. Moreover, our method is the first working model for commercial smartwatch models with low specifications when vibrating and measuring responses. We evaluated our method using a commercial smartwatch, and the results show that our method is able to authenticate a user with an equal error rate (EER) of 1.37%.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484553](https://doi.org/10.1145/3460120.3484553)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484553](https://dl.acm.org/doi/pdf/10.1145/3460120.3484553)
## Automated Bug Hunting With Data-Driven Symbolic Root Cause Analysis.
### Authors
* Carter Yagemann, Georgia Institute of Technology, Atlanta, GA, USA
* Simon P. Chung, Georgia Institute of Technology, Atlanta, GA, USA
* Brendan Saltaformaggio, Georgia Institute of Technology, Atlanta, GA, USA
* Wenke Lee, Georgia Institute of Technology, Atlanta, GA, USA
### Abstract
> The increasing cost of successful cyberattacks has caused a mindset shift, whereby defenders now employ proactive defenses, namely software bug hunting, alongside existing reactive measures (firewalls, IDS, IPS) to protect systems. Unfortunately the path from hunting bugs to deploying patches remains laborious and expensive, requires human expertise, and still misses serious memory corruptions. Motivated by these challenges, we propose bug hunting using symbolically reconstructed states based on execution traces to achieve better detection and root cause analysis of overflow, use-after-free, double free, and format string bugs across user programs and their imported libraries. We discover that with the right use of widely available hardware processor tracing and partial memory snapshots, powerful symbolic analysis can be used on real-world programs while managing path explosion. Better yet, data can be captured from production deployments of live software on end-host systems transparently, aiding in the analysis of user clients and long-running programs like web servers. We implement a prototype of our design, Bunkerbuster, for Linux and evaluate it on 15 programs, where it finds 39 instances of our target bug classes, 8 of which have never before been reported and have lead to 1 EDB and 3 CVE IDs being issued. These 0-days were patched by developers using Bunkerbuster's reports, independently validating their usefulness. In a side-by-side comparison, our system uncovers 8 bugs missed by AFL and QSYM, and correctly classifies 4 that were previously detected, but mislabeled by AddressSanitizer. Our prototype accomplishes this with 7.21% recording overhead.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3485363](https://doi.org/10.1145/3460120.3485363)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3485363](https://dl.acm.org/doi/pdf/10.1145/3460120.3485363)
## Snipuzz: Black-box Fuzzing of IoT Firmware via Message Snippet Inference.
### Authors
* Xiaotao Feng, Swinburne University of Technology, Melbourne, VIC, Australia
* Ruoxi Sun, The University of Adelaide, Adelaide, SA, Australia
* Xiaogang Zhu, Swinburne University of Technology, Melbourne, VIC, Australia
* Minhui Xue, The University of Adelaide, Adelaide, SA, Australia
* Sheng Wen, Swinburne University of Technology, Melbourne, VIC, Australia
* Dongxi Liu, CSIRO Data61, Sydney, NSW, Australia
* Surya Nepal, CSIRO Data61, Sydney, NSW, Australia
* Yang Xiang, Swinburne University of Technology, Melbourne, VIC, Australia
### Abstract
> The proliferation of Internet of Things (IoT) devices has made people's lives more convenient, but it has also raised many security concerns. Due to the difficulty of obtaining and emulating IoT firmware, in the absence of internal execution information, black-box fuzzing of IoT devices has become a viable option. However, existing black-box fuzzers cannot form effective mutation optimization mechanisms to guide their testing processes, mainly due to the lack of feedback. In addition, because of the prevalent use of various and non-standard communication message formats in IoT devices, it is difficult or even impossible to apply existing grammar-based fuzzing strategies. Therefore, an efficient fuzzing approach with syntax inference is required in the IoT fuzzing domain. To address these critical problems, we propose a novel automatic black-box fuzzing for IoT firmware, termed Snipuzz. Snipuzz runs as a client communicating with the devices and infers message snippets for mutation based on the responses. Each snippet refers to a block of consecutive bytes that reflect the approximate code coverage in fuzzing. This mutation strategy based on message snippets considerably narrows down the search space to change the probing messages. We compared Snipuzz with four state-of-the-art IoT fuzzing approaches, i.e., IoTFuzzer, BooFuzz, Doona, and Nemesys. Snipuzz not only inherits the advantages of app-based fuzzing (e.g., IoTFuzzer), but also utilizes communication responses to perform efficient mutation. Furthermore, Snipuzz is lightweight as its execution does not rely on any prerequisite operations, such as reverse engineering of apps. We also evaluated Snipuzz on 20 popular real-world IoT devices. Our results show that Snipuzz could identify 5 zero-day vulnerabilities, and 3 of them could be exposed only by Snipuzz. All the newly discovered vulnerabilities have been confirmed by their vendors.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484543](https://doi.org/10.1145/3460120.3484543)
## Same Coverage, Less Bloat: Accelerating Binary-only Fuzzing with Coverage-preserving Coverage-guided Tracing.
### Authors
* Stefan Nagy, Virginia Tech, Blacksburg, VA, USA
* Anh Nguyen-Tuong, University of Virginia, Charlottesville, VA, USA
* Jason D. Hiser, University of Virginia, Charlottesville, VA, USA
* Jack W. Davidson, University of Virginia, Charlottesville, VA, USA
* Matthew Hicks, Virginia Tech, Blacksburg, VA, USA
### Abstract
> Coverage-guided fuzzing's aggressive, high-volume testing has helped reveal tens of thousands of software security flaws. While executing billions of test cases mandates fast code coverage tracing, the nature of binary-only targets leads to reduced tracing performance. A recent advancement in binary fuzzing performance is Coverage-guided Tracing (CGT), which brings orders-of-magnitude gains in throughput by restricting the expense of coverage tracing to only when new coverage is guaranteed. Unfortunately, CGT suits only a basic block coverage granularity---yet most fuzzers require finer-grain coverage metrics: edge coverage and hit counts. It is this limitation which prohibits nearly all of today's state-of-the-art fuzzers from attaining the performance benefits of CGT. This paper tackles the challenges of adapting CGT to fuzzing's most ubiquitous coverage metrics. We introduce and implement a suite of enhancements that expand CGT's introspection to fuzzing's most common code coverage metrics, while maintaining its orders-of-magnitude speedup over conventional always-on coverage tracing. We evaluate their trade-offs with respect to fuzzing performance and effectiveness across 12 diverse real-world binaries (8 open- and 4 closed-source). On average, our coverage-preserving CGT attains near-identical speed to the present block-coverage-only CGT, UnTracer; and outperforms leading binary- and source-level coverage tracers QEMU, Dyninst, RetroWrite, and AFL-Clang by 2--24x, finding more bugs in less time.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484787](https://doi.org/10.1145/3460120.3484787)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484787](https://dl.acm.org/doi/pdf/10.1145/3460120.3484787)
## HyperFuzzer: An Efficient Hybrid Fuzzer for Virtual CPUs.
### Authors
* Xinyang Ge, Microsoft Research, Redmond, WA, USA
* Ben Niu, Microsoft, Redmond, WA, USA
* Robert Brotzman, Penn State University, State College, PA, USA
* Yaohui Chen, Facebook, Menlo Park, CA, USA
* HyungSeok Han, KAIST, Daejeon, Republic of Korea
* Patrice Godefroid, Microsoft Research, Redmond, WA, USA
* Weidong Cui, Microsoft Research, Redmond, WA, USA
### Abstract
> In this cloud computing era, the security of hypervisors is critical to the overall security of the cloud. In particular, the security of CPU virtualization in hypervisors is paramount because it is implemented in the most privileged CPU mode. Blackbox and graybox fuzzing are limited to finding shallow virtual CPU bugs due to its huge search space. Whitebox fuzzing can be used for systematic analysis of CPU virtualization, but existing implementations rely on slow hardware emulators to enable dynamic symbolic execution. In this paper, we present HyperFuzzer, the first efficient hybrid fuzzer for virtual CPUs. Our key observation is that a virtual CPU's execution is determined by the VM state. Based on this observation, we design a new fuzzing setup that uses complete VM states as fuzzing inputs, and a new fuzzing technique we call Nimble Symbolic Execution to enable dynamic symbolic execution for CPU virtualization running on bare metal. Specifically, it uses the hardware to log the control flow efficiently, and then reconstructs an approximate execution trace from only the control flow and the fuzzing input. The reconstructed execution trace is surprisingly sufficient for precise dynamic symbolic execution of virtual CPUs. We have built a prototype of HyperFuzzer based on Intel Processor Trace for Microsoft Hyper-V. Our experimental results show that HyperFuzzer can run thousands of tests per second, which is 3 orders of magnitude faster than using a hardware emulator. When compared with a baseline using full (control+data) execution traces, HyperFuzzer can still generate 96.8% of the test inputs generated by the baseline. HyperFuzzer has found 11 previously unknown virtual CPU bugs in the Hyper-V hypervisor, and all of them were confirmed and fixed.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484748](https://doi.org/10.1145/3460120.3484748)
## HardsHeap: A Universal and Extensible Framework for Evaluating Secure Allocators.
### Authors
* Insu Yun, KAIST, Daejeon, Republic of Korea
* Woosun Song, KAIST, Daejeon, Republic of Korea
* Seunggi Min, KAIST, Daejeon, Republic of Korea
* Taesoo Kim, Georgia Institute of Technology, Atlanta, GA, USA
### Abstract
> Secure allocators have been extensively studied to mitigate heap vulnerabilities. They employ safe designs and randomized mechanisms to stop or mitigate heap exploitation. Despite extensive research efforts, secure allocators can only be evaluated by with theoretical analysis or pre-defined data sets, which are insufficient to effectively reflect powerful adversaries in the real world. In this paper, we present HardsHeap, an automatic tool for evaluating secure allocators. The key idea of HardsHeap is to use random testing (i.e., fuzzing) to evaluate secure allocators. To handle the diverse properties of secure allocators, HardsHeap supports an extensible framework, making it easy to write a validation logic for each property. Moreover, HardsHeap employs sampling-based testing, which enables us to evaluate a probabilistic mechanism prevalent in secure allocators. To eliminate redundancy in findings from HardsHeap, we devise a new technique called Statistical Significance Delta Debugging (SSDD), which extends the existing delta debugging for stochastically reproducible test cases. We evaluated HardsHeap to 10 secure allocators. Consequently, we found 56 interesting test cases, including several unsecure yet underestimated behaviors for handling large objects in secure allocators. Moreover, we discovered 10 implementation bugs. One of the bugs is integer overflow in secure allocators, making them even more invulnerable than ordinary allocators. Our evaluation also shows that SSDD successfully reduces test cases by 37.2% on average without a loss of reproducibility.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484740](https://doi.org/10.1145/3460120.3484740)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484740](https://dl.acm.org/doi/pdf/10.1145/3460120.3484740)
## DPGen: Automated Program Synthesis for Differential Privacy.
### Authors
* Yuxin Wang, Pennsylvania State University, State College, PA, USA
* Zeyu Ding, Pennsylvania State University, State College, PA, USA
* Yingtai Xiao, Pennsylvania State University, State College, PA, USA
* Daniel Kifer, Pennsylvania State University, State College, PA, USA
* Danfeng Zhang, Pennsylvania State University, State College, PA, USA
### Abstract
> Differential privacy has become a de facto standard for releasing data in a privacy-preserving way. Creating a differentially private algorithm is a process that often starts with a noise-free (non-private) algorithm. The designer then decides where to add noise, and how much of it to add. This can be a non-trivial process -- if not done carefully, the algorithm might either violate differential privacy or have low utility. In this paper, we present DPGen, a program synthesizer that takes in non-private code (without any noise) and automatically synthesizes its differentially private version (with carefully calibrated noise). Under the hood, DPGen uses novel algorithms to automatically generate a sketch program with candidate locations for noise, and then optimize privacy proof and noise scales simultaneously on the sketch program. Moreover, DPGen can synthesize sophisticated mechanisms that adaptively process queries until a specified privacy budget is exhausted. When evaluated on standard benchmarks, DPGen is able to generate differentially private mechanisms that optimize simple utility functions within 120 seconds. It is also powerful enough to synthesize adaptive privacy mechanisms.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484781](https://doi.org/10.1145/3460120.3484781)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484781](https://dl.acm.org/doi/pdf/10.1145/3460120.3484781)
## A Formally Verified Configuration for Hardware Security Modules in the Cloud.
### Authors
* Riccardo Focardi, Ca' Foscari University, Venice, Italy
* Flaminia L. Luccio, Ca' Foscari University, Venice, Italy
### Abstract
> Hardware Security Modules (HSMs) are trusted machines that perform sensitive operations in critical ecosystems. They are usually required by law in financial and government digital services. The most important feature of an HSM is its ability to store sensitive credentials and cryptographic keys inside a tamper-resistant hardware, so that every operation is done internally through a suitable API, and such sensitive data are never exposed outside the device. HSMs are now conveniently provided in the cloud, meaning that the physical machines are remotely hosted by some provider and customers can access them through a standard API. The property of keeping sensitive data inside the device is even more important in this setting as a vulnerable application might expose the full API to an attacker. Unfortunately, in the last 20+ years a multitude of practical API-level attacks have been found and proved feasible in real devices. The latest version of PKCS#11, the most popular standard API for HSMs, does not address these issues leaving all the flaws possible. In this paper, we propose the first secure HSM configuration that does not require any restriction or modification of the PKCS#11 API and is suitable to cloud HSM solutions, where compliance to the standard API is of paramount importance. The configuration relies on a careful separation of roles among the different HSM users so that known API flaws are not exploitable by any attacker taking control of the application. We prove the correctness of the configuration by providing a formal model in the state-of-the-art Tamarin prover and we show how to implement the configuration in a real cloud HSM solution.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484785](https://doi.org/10.1145/3460120.3484785)
## Exorcising Spectres with Secure Compilers.
### Authors
* Marco Patrignani, CISPA Helmholtz Center for Information Security, Saarbruecken, Germany
* Marco Guarnieri, IMDEA Software Institute, Madrid, Spain
### Abstract
> ttackers can access sensitive information of programs by exploiting the side-effects of speculatively-executed instructions using Spectre attacks. To mitigate these attacks, popular compilers deployed a wide range of countermeasures whose security, however, has not been ascertained: while some are believed to be secure, others are known to be insecure and result in vulnerable programs. This paper develops formal foundations for reasoning about the security of these defenses. For this, it proposes a framework of secure compilation criteria that characterise when compilers produce code resistant against Spectre v1 attacks. With this framework, this paper performs a comprehensive security analysis of countermeasures against Spectre v1 attacks implemented in major compilers, deriving the first security proofs of said countermeasures
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484534](https://doi.org/10.1145/3460120.3484534)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484534](https://dl.acm.org/doi/pdf/10.1145/3460120.3484534)
## Structured Leakage and Applications to Cryptographic Constant-Time and Cost.
### Authors
* Gilles Barthe, MPI-SP & IMDEA Software Institute, Bochum, Germany
* Benjamin Grégoire, Université Côte d'Azur, Inria, Valbonne, France
* Vincent Laporte, Université de Lorraine, CNRS, Inria, LORIA, F-54000, Villers-lès-Nancy, France
* Swarn Priya, Université Côte d'Azur, Inria, Valbonne, France
### Abstract
> Many security properties of interest are captured by instrumented semantics that model the functional behavior and the leakage of programs. For several important properties, including cryptographic constant-time (CCT), leakage models are sufficiently abstract that one can define instrumented semantics for high-level and low-level programs. One important goal is then to relate leakage of source programs and leakage of their compilation---this can be used, e.g., to prove preservation of CCT. To simplify this task, we put forward the idea of structured leakage. In contrast to the usual modeling of leakage as a sequence of observations, structured leakage is tightly coupled with the operational semantics of programs. This coupling greatly simplifies the definition of leakage transformers that map the leakage of source programs to leakage of their compilation and yields more precise statements about the preservation of security properties. We illustrate our methods on the Jasmin compiler and prove preservation results for two policies of interest: CCT and cost.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484761](https://doi.org/10.1145/3460120.3484761)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484761](https://dl.acm.org/doi/pdf/10.1145/3460120.3484761)
## Learning Security Classifiers with Verified Global Robustness Properties.
### Authors
* Yizheng Chen, University of California, Berkeley, Berkeley, CA, USA
* Shiqi Wang, Columbia University, New York, NY, USA
* Yue Qin, Indiana University Bloomington, Bloomington, IN, USA
* Xiaojing Liao, Indiana University Bloomington, Bloomington, IN, USA
* Suman Jana, Columbia University, New York, NY, USA
* David Wagner, University of California, Berkeley, Berkeley, CA, USA
### Abstract
> Many recent works have proposed methods to train classifiers with local robustness properties, which can provably eliminate classes of evasion attacks for most inputs, but not all inputs. Since data distribution shift is very common in security applications, e.g., often observed for malware detection, local robustness cannot guarantee that the property holds for unseen inputs at the time of deploying the classifier. Therefore, it is more desirable to enforce global robustness properties that hold for all inputs, which is strictly stronger than local robustness. In this paper, we present a framework and tools for training classifiers that satisfy global robustness properties. We define new notions of global robustness that are more suitable for security classifiers. We design a novel booster-fixer training framework to enforce global robustness properties. We structure our classifier as an ensemble of logic rules and design a new verifier to verify the properties. In our training algorithm, the booster increases the classifier's capacity, and the fixer enforces verified global robustness properties following counterexample guided inductive synthesis. We show that we can train classifiers to satisfy different global robustness properties for three security datasets, and even multiple properties at the same time, with modest impact on the classifier's performance. For example, we train a Twitter spam account classifier to satisfy five global robustness properties, with 5.4% decrease in true positive rate, and 0.1% increase in false positive rate, compared to a baseline XGBoost model that doesn't satisfy any property.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484776](https://doi.org/10.1145/3460120.3484776)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484776](https://dl.acm.org/doi/pdf/10.1145/3460120.3484776)
## On the Robustness of Domain Constraints.
### Authors
* Ryan Sheatsley, The Pennsylvania State University, State College, PA, USA
* Blaine Hoak, The Pennsylvania State University, State College, PA, USA
* Eric Pauley, The Pennsylvania State University, State College, PA, USA
* Yohan Beugin, The Pennsylvania State University, State College, PA, USA
* Michael J. Weisman, United States Army Research Laboratory, Adelphi, MD, USA
* Patrick McDaniel, The Pennsylvania State University, State College, PA, USA
### Abstract
> Machine learning is vulnerable to adversarial examples--inputs designed to cause models to perform poorly. However, it is unclear if adversarial examples represent realistic inputs in the modeled domains. Diverse domains such as networks and phishing have domain constraints--complex relationships between features that an adversary must satisfy for an attack to be realized (in addition to any adversary-specific goals). In this paper, we explore how domain constraints limit adversarial capabilities and how adversaries can adapt their strategies to create realistic (constraint-compliant) examples. In this, we develop techniques to learn domain constraints from data, and show how the learned constraints can be integrated into the adversarial crafting process. We evaluate the efficacy of our approach in network intrusion and phishing datasets and find: (1) up to 82% of adversarial examples produced by state-of-the-art crafting algorithms violate domain constraints, (2) domain constraints are robust to adversarial examples; enforcing constraints yields an increase in model accuracy by up to 34%. We observe not only that adversaries must alter inputs to satisfy domain constraints, but that these constraints make the generation of valid adversarial examples far more challenging.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484570](https://doi.org/10.1145/3460120.3484570)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484570](https://dl.acm.org/doi/pdf/10.1145/3460120.3484570)
## Cert-RNN: Towards Certifying the Robustness of Recurrent Neural Networks.
### Authors
* Tianyu Du, Zhejiang University, Hangzhou, China
* Shouling Ji, Zhejiang University & Binjiang Institute of Zhejiang University, Hangzhou, China
* Lujia Shen, Zhejiang University, Hangzhou, China
* Yao Zhang, Zhejiang University, Hangzhou, China
* Jinfeng Li, Zhejiang University, Hangzhou, China
* Jie Shi, Huawei International, Singapore, Singapore, Singapore
* Chengfang Fang, Huawei International, Singapore, Singapore, Singapore
* Jianwei Yin, Zhejiang University & Binjiang Institute of Zhejiang University, Hangzhou, China
* Raheem Beyah, Georgia Institute of Technology, Atlanta, GA, USA
* Ting Wang, Pennsylvania State University, State College, PA, USA
### Abstract
> Certifiable robustness, the functionality of verifying whether the given region surrounding a data point admits any adversarial example, provides guaranteed security for neural networks deployed in adversarial environments. A plethora of work has been proposed to certify the robustness of feed-forward networks, e.g., FCNs and CNNs. Yet, most existing methods cannot be directly applied to recurrent neural networks (RNNs), due to their sequential inputs and unique operations. In this paper, we present Cert-RNN, a general framework for certifying the robustness of RNNs. Specifically, through detailed analysis for the intrinsic property of the unique function in different ranges, we exhaustively discuss different cases for the exact formula of bounding planes, based on which we design several precise and efficient abstract transformers for the unique calculations in RNNs. Cert-RNN significantly outperforms the state-of-the-art methods (e.g., POPQORN) in terms of (i) effectiveness -- it provides much tighter robustness bounds, and (ii) efficiency -- it scales to much more complex models. Through extensive evaluation, we validate Cert-RNN's superior performance across various network architectures (e.g., vanilla RNN and LSTM) and applications (e.g., image classification, sentiment analysis, toxic comment detection, and malicious URL detection). For instance, for the RNN-2-32 model on the MNIST sequence dataset, the robustness bound certified by Cert-RNN is on average 1.86 times larger than that by POPQORN. Besides certifying the robustness of given RNNs, Cert-RNN also enables a range of practical applications including evaluating the provable effectiveness for various defenses (i.e., the defense with a larger robustness region is considered to be more robust), improving the robustness of RNNs (i.e., incorporating Cert-RNN with verified robust training) and identifying sensitive words (i.e., the word with the smallest certified robustness bound is considered to be the most sensitive word in a sentence), which helps build more robust and interpretable deep learning systems. We will open-source Cert-RNN for facilitating the DNN security research.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484538](https://doi.org/10.1145/3460120.3484538)
## TSS: Transformation-Specific Smoothing for Robustness Certification.
### Authors
* Linyi Li, University of Illinois, Urbana, IL, USA
* Maurice Weber, ETH Zürich, Zürich, Switzerland
* Xiaojun Xu, University of Illinois, Urbana, IL, USA
* Luka Rimanic, ETH Zürich, Zürich, Switzerland
* Bhavya Kailkhura, Lawrence Livermore National Laboratory, Livermore, CA, USA
* Tao Xie, Peking University, Beijing, China
* Ce Zhang, ETH Zürich, Zürich, Switzerland
* Bo Li, University of Illinois, Urbana, IL, USA
### Abstract
> As machine learning (ML) systems become pervasive, safeguarding their security is critical. However, recently it has been demonstrated that motivated adversaries are able to mislead ML systems by perturbing test data using semantic transformations. While there exists a rich body of research providing provable robustness guarantees for ML models against Lp bounded adversarial perturbations, guarantees against semantic perturbations remain largely underexplored. In this paper, we provide TSS-a unified framework for certifying ML robustness against general adversarial semantic transformations. First, depending on the properties of each transformation, we divide common transformations into two categories, namely resolvable (e.g., Gaussian blur) and differentially resolvable (e.g., rotation) transformations. For the former, we propose transformation-specific randomized smoothing strategies and obtain strong robustness certification. The latter category covers transformations that involve interpolation errors, and we propose a novel approach based on stratified sampling to certify the robustness. Our framework TSS leverages these certification strategies and combines with consistency-enhanced training to provide rigorous certification of robustness. We conduct extensive experiments on over ten types of challenging semantic transformations and show that TSS significantly outperforms the state of the art. Moreover, to the best of our knowledge, TSS is the first approach that achieves nontrivial certified robustness on the large-scale ImageNet dataset. For instance, our framework achieves 30.4% certified robust accuracy against rotation attack (within ±30°) on ImageNet. Moreover, to consider a broader range of transformations, we show TSS is also robust against adaptive attacks and unforeseen image corruptions such as CIFAR-10-C and ImageNet-C.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3485258](https://doi.org/10.1145/3460120.3485258)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3485258](https://dl.acm.org/doi/pdf/10.1145/3460120.3485258)
## Efficient Online-friendly Two-Party ECDSA Signature.
### Authors
* Haiyang Xue, Institute of Information Engineering, Chinese Academy of Sciences & The University of Hong Kong, Beijing, China
* Man Ho Au, The University of Hong Kong, Hong Kong, China
* Xiang Xie, Shanghai Key Laboratory of Privacy-Preserving Computation, Shanghai, China
* Tsz Hon Yuen, The University of Hong Kong, Hong Kong, China
* Handong Cui, The University of Hong Kong, Hong Kong, China
### Abstract
> Two-party ECDSA signatures have received much attention due to their widespread deployment in cryptocurrencies. Depending on whether or not the message is required, we could divide two-party signing into two different phases, namely, offline and online. Ideally, the online phase should be made as lightweight as possible. At the same time, the cost of the offline phase should remain similar to that of a normal signature generation. However, the existing two-party protocols of ECDSA are not optimal: either their online phase requires decryption of a ciphertext, or their offline phase needs at least two executions of multiplicative-to-additive conversion which dominates the overall complexity. This paper proposes an online-friendly two-party ECDSA with a lightweight online phase and a single multiplicative-to-additive function in the offline phase. It is constructed by a novel design of a re-sharing of the secret key and a linear sharing of the nonce. Our scheme significantly improves previous protocols based on either oblivious transfer or homomorphic encryption. We implement our scheme and show that it outperforms prior online-friendly schemes (i.e., those have lightweight online cost) by a factor of roughly 2 to 9 in both communication and computation. Furthermore, our two-party scheme could be easily extended to the 2-out-of-n threshold ECDSA.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484803](https://doi.org/10.1145/3460120.3484803)
## One Hot Garbling.
### Authors
* David Heath, Georgia Tech, Atlanta, GA, USA
* Vladimir Kolesnikov, Georgia Tech, Atlanta, GA, USA
### Abstract
> Garbled Circuit (GC) is the main practical 2PC technique, yet despite great interest in its performance, GC notoriously resists improvement. Essentially, we only know how to evaluate GC functions gate-by-gate using encrypted truth tables; given input labels, the GC evaluator decrypts the corresponding output label. Interactive protocols enjoy more sophisticated techniques. For example, we can expose to a party a (masked) private value. The party can then perform useful local computation and feed the resulting cleartext value back into the MPC. Such techniques are not known to work for GC. We show that it is, in fact, possible to improve GC efficiency, while keeping its round complexity, by exposing masked private values to the evaluator. %without introducing rounds of communication. Our improvements use garbled one-hot encodings of values. By using this encoding we improve a number of interesting functions, e.g., matrix multiplication, integer multiplication, field element multiplication, field inverses and AES S-Boxes, integer exponents, and more. We systematize our approach by providing a framework for designing such GC modules. Our constructions are concretely efficient. E.g., we improve binary matrix multiplication inside GC by more than 6x in terms of communication and by more than 4x in terms of WAN wall-clock time. Our improvement circumvents an important GC lower bound and may open GC to further improvement.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484764](https://doi.org/10.1145/3460120.3484764)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484764](https://dl.acm.org/doi/pdf/10.1145/3460120.3484764)
## The Return of Eratosthenes: Secure Generation of RSA Moduli using Distributed Sieving.
### Authors
* Cyprien Delpech de Saint Guilhem, KU Leuven, Leuven, Belgium
* Eleftheria Makri, KU Leuven & Saxion University of Applied Sciences, Leuven, Belgium
* Dragos Rotaru, KU Leuven & Cape Privacy, New York, NY, USA
* Titouan Tanguy, KU Leuven, Leuven, Belgium
### Abstract
> Secure multiparty generation of an RSA biprime is a challenging task, which increasingly receives attention, due to the numerous privacy-preserving applications that require it. In this work, we construct a new protocol for the RSA biprime generation task, secure against a malicious adversary, who can corrupt any subset of protocol participants. Our protocol is designed with generic multiparty computation (MPC), making it both platform-independent and allowing for weaker security models to be assumed (e.g., honest majority), should the application scenario require it. By carefully "postponing" the check of possible inconsistencies in the shares provided by malicious adversaries, we achieve noteworthy efficiency improvements. Concretely, we are able to produce additive sharings of the prime candidates, from multiplicative sharings via a semi-honest multiplication, without degrading the overall (active) security of our protocol. This is the core of our sieving technique, increasing the probability of our protocol sampling a biprime. Similarly, we perform the first biprimality test, requiring several repetitions, without checking input share consistency, and perform the more costly consistency check only in case of success of the Jacobi symbol based biprimality test. Moreover, we propose a protocol to convert an additive sharing over a ring, into an additive sharing over the integers. Besides being a necessary sub-protocol for the RSA biprime generation, this conversion protocol is of independent interest. The cost analysis of our protocol demonstrated that our approach improves the current state-of-the-art (Chen et al.-Crypto 2020), in terms of communication efficiency. Concretely, for the two-party case with malicious security, and primes of 2048bits, our protocol improves communication by a factor of ~37.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484754](https://doi.org/10.1145/3460120.3484754)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484754](https://dl.acm.org/doi/pdf/10.1145/3460120.3484754)
## Secure Graph Analysis at Scale.
### Authors
* Toshinori Araki, NEC Corporation, Tokyo, Japan
* Jun Furukawa, NEC Corporation, Tokyo, Japan
* Kazuma Ohara, AIST, Tokyo, Japan
* Benny Pinkas, Bar-Ilan University, Ramat Gan, Israel
* Hanan Rosemarin, Bar-Ilan University, Ramat Gan, Israel
* Hikaru Tsuchida, NEC Corporation, Tokyo, Japan
### Abstract
> We present a highly-scalable secure computation of graph algorithms, which hides all information about the topology of the graph or other input values associated with nodes or edges. The setting is where all nodes and edges of the graph are secret-shared between multiple servers, and a secure computation protocol is run between these servers. While the method is general, we demonstrate it in a 3-server setting with an honest majority, with either semi-honest security or full security. A major technical contribution of our work is replacing the usage of secure sort protocols with secure shuffles, which are much more efficient. Full security against malicious behavior is achieved by adding an efficient verification for the shuffle operation, and computing circuits using fully secure protocols. We demonstrate the applicability of this technology by implementing two major algorithms: computing breadth-first search (BFS), which is also useful for contact tracing on private contact graphs, and computing maximal independent set (MIS). We implement both algorithms, with both semi-honest and full security, and run them within seconds on graphs of millions of elements.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484560](https://doi.org/10.1145/3460120.3484560)
## Oblivious Linear Group Actions and Applications.
### Authors
* Nuttapong Attrapadung, AIST, Tokyo, Japan
* Goichiro Hanaoaka, AIST, Tokyo, Japan
* Takahiro Matsuda, AIST, Tokyo, Japan
* Hiraku Morita, University of St. Gallen, St. Gallen, Switzerland
* Kazuma Ohara, AIST, Tokyo, Japan
* Jacob C. N. Schuldt, AIST, Tokyo, Japan
* Tadanori Teruya, AIST, Tokyo, Japan
* Kazunari Tozawa, University of Tokyo, Tokyo, Japan
### Abstract
> In this paper we propose efficient two-party protocols for obliviously applying a (possibly random) linear group action to a data set. Our protocols capture various applications such as oblivious shuffles, circular shifts, matrix multiplications, to name just a few. A notable feature enjoyed by our protocols, is that they admit a round-optimal (more precisely, one-round) online computation phase, once an input-independent off-line computation phase has been completed. Our oblivious shuffle is the first to achieve a round-optimal online phase. The most efficient instantiations of our protocols are obtained in the so-called client-aided client-server setting, where the offline phase is run by a semi-honest input party (client) who will then distribute the generated correlated randomness to the computing parties (servers). When comparing the total running time to the previous best two-party oblivious shuffle protocol by Chase et al. (Asiacrypt 2020), our shuffle protocol in this client-aided setting is up to 105 times and 152 times faster, in the LAN and WAN setting, respectively. We additionally show how the Chase et al. protocol (which is a standard two-party protocol) can be modified to leverage the advantages of the client-aided setting, but show that, even doing so, our scheme is still two times faster in the online phase and 1.34 times faster in total on average. An additional feature of our protocols is that they allow to re-invoke a previously generated group action, or its inverse, in subsequent runs. This allows us to utilize randomize-then-reveal techniques, which are crucial for constructing efficient protocols in complex applications. As an application, we construct a new oblivious sorting protocol implementing radix sort. Our protocol is based on a similar approach to the three-party protocol by Chida et al. (IACR ePrint 2019/965), but using our oblivious shuffle as a building block as well as various optimizations, we obtain a two-party protocol (in the client-aided setting) with improved online running time and a reduced number of rounds. As other applications, we also obtain efficient protocols for oblivious selection, oblivious unit-vectorization, oblivious multiplexer, oblivious polynomial evaluation, arithmetic-to-boolean share conversions, and more.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484584](https://doi.org/10.1145/3460120.3484584)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484584](https://dl.acm.org/doi/pdf/10.1145/3460120.3484584)
## Wireless Charging Power Side-Channel Attacks.
### Authors
* Alexander S. La Cour, Princeton University, Princeton, NJ, USA
* Khurram K. Afridi, Cornell University, Ithaca, NY, USA
* G. Edward Suh, Cornell University, Ithaca, NY, USA
### Abstract
> This paper demonstrates that today's wireless charging interface is vulnerable to power side-channel attacks; a smartphone that charges wirelessly leaks information about its activity to the wireless charger transmitter. We present a website fingerprinting attack and other preliminary attacks through the wireless charging side channel on iOS and Android devices. The website fingerprinting attack monitors the current draw of a wireless charger while the smartphone it charges loads a website from the Alexa top sites list. Our classifier identifies the website loaded on an iPhone 11 or a Google Pixel 4 with over 90% accuracy using wireless charging current traces. This attack represents a considerable security threat because wireless charging will always initiate when a compatible device is within the range of a charging transmitter. We find that the performance of the attack deteriorates as the contents of websites change over time. Additionally, this study finds that the wireless charging side channel is comparable to the wired USB charging side channel. Information leakage in both interfaces heavily depends on the battery level; minimal information leaks at low battery levels.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484733](https://doi.org/10.1145/3460120.3484733)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484733](https://dl.acm.org/doi/pdf/10.1145/3460120.3484733)
## Indistinguishability Prevents Scheduler Side Channels in Real-Time Systems.
### Authors
* Chien-Ying Chen, University of Illinois at Urbana-Champaign, Urbana, IL, USA
* Debopam Sanyal, University of Illinois at Urbana-Champaign, Department of Computer Science, IL, USA
* Sibin Mohan, Oregon State University, Corvallis, OR, USA
### Abstract
> Scheduler side-channels can leak critical information in real-time systems, thus posing serious threats to many safety-critical applications. The main culprit is the inherent determinism in the runtime timing behavior of such systems, e.g., the (expected) periodic behavior of critical tasks. In this paper, we introduce the notion of "schedule indistinguishability/", inspired by work in differential privacy, that introduces diversity into the schedules of such systems while offering analyzable security guarantees. We achieve this by adding a sufficiently large (controlled) noise to the task schedules in order to break their deterministic execution patterns. An "epsilon-Scheduler" then implements schedule indistinguishability in real-time Linux. We evaluate our system using two real applications: (a) an autonomous rover running on a real hardware platform (Raspberry Pi) and (b) a video streaming application that sends data across large geographic distances. Our results show that the epsilon-Scheduler offers better protection against scheduler side-channel attacks in real-time systems while still maintaining good performance and quality-of-service(QoS) requirements.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484769](https://doi.org/10.1145/3460120.3484769)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484769](https://dl.acm.org/doi/pdf/10.1145/3460120.3484769)
## Rosita++: Automatic Higher-Order Leakage Elimination from Cryptographic Code.
### Authors
* Madura A. Shelton, University of Adelaide, Adelaide, SA, Australia
* Łukasz Chmielewski, Radboud University and Riscure, Nijmegen, Netherlands
* Niels Samwel, Radboud University, Nijmegen, Netherlands
* Markus Wagner, University of Adelaide, Adelaide, SA, Australia
* Lejla Batina, Radboud University, Nijmegen, Netherlands
* Yuval Yarom, University of Adelaide, Adelaide, SA, Australia
### Abstract
> Side-channel attacks are a major threat to the security of cryptographic implementations, particularly for small devices that are under the physical control of the adversary. While several strategies for protecting against side-channel attacks exist, these often fail in practice due to unintended interactions between values deep within the CPU. To detect and protect from side-channel attacks, several automated tools have recently been proposed; one of their common limitations is that they only support first-order leakage. In this work, we present , the first automated tool for detecting and eliminating higher-order leakage from cryptographic implementations. Rosita++ proposes statistical and software-based tools to allow high-performance higher-order leakage detection. It then uses the code rewrite engine of Rosita (Shelton et al. NDSS 2021) to eliminate detected leakage. For the sake of practicality we evaluate Rosita++ against second and third order leakage, but our framework is not restricted to only these orders. We evaluate Rosita++ against second-order leakage with three-share implementations of two ciphers, PRESENT and Xoodoo, and with the second-order Boolean-to-arithmetic masking, a core building block of masked implementations of many cryptographic primitives, including SHA-2, ChaCha and Blake. We show effective second-order leakage elimination at a performance cost of 36% for Xoodoo, 189% for PRESENT, and 29% for the Boolean-to-arithmetic masking. For third-order analysis, we evaluate Rosita++ against the third-order leakage using a four-share synthetic example that corresponds to typical four-share processing. Rosita++ correctly identified this leakage and applied code fixes.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3485380](https://doi.org/10.1145/3460120.3485380)
## Periscope: A Keystroke Inference Attack Using Human Coupled Electromagnetic Emanations.
### Authors
* Wenqiang Jin, Hunan University, Changsha, China
* Srinivasan Murali, The University of Texas at Arlington, Arlington, TX, USA
* Huadi Zhu, The University of Texas at Arlington, Arlington, TX, USA
* Ming Li, The University of Texas at Arlington, Arlington, TX, USA
### Abstract
> This study presents Periscope, a novel side-channel attack that exploits human-coupled electromagnetic (EM) emanations from touchscreens to infer sensitive inputs on a mobile device. Periscope is motivated by the observation that finger movement over the touchscreen leads to time-varying coupling between these two. Consequently, it impacts the screen's EM emanations that can be picked up by a remote sensory device. We intend to map between EM measurements and finger movements to recover the inputs. As the significant technical contribution of this work, we build an analytic model that outputs finger movement trajectories based on given EM readings. Our approach does not need a large amount of labeled dataset for offline model training, but instead a couple of samples to parameterize the user-specific analytic model. We implement Periscope with simple electronic components and conduct a suite of experiments to validate this attack's impact. Experimental results show that Periscope achieves a recovery rate over 6-digit PINs of 56.2% from a distance of 90 cm. Periscope is robust against environment dynamics and can well adapt to different device models and setting contexts.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484549](https://doi.org/10.1145/3460120.3484549)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484549](https://dl.acm.org/doi/pdf/10.1145/3460120.3484549)
## Constantine: Automatic Side-Channel Resistance Using Efficient Control and Data Flow Linearization.
### Authors
* Pietro Borrello, Sapienza University of Rome, Rome, Italy
* Daniele Cono D'Elia, Sapienza University of Rome, Rome, Italy
* Leonardo Querzoni, Sapienza University of Rome, Rome, Italy
* Cristiano Giuffrida, Vrije Universiteit Amsterdam, Amsterdam, Netherlands
### Abstract
> In the era of microarchitectural side channels, vendors scramble to deploy mitigations for transient execution attacks, but leave traditional side-channel attacks against sensitive software (e.g., crypto programs) to be fixed by developers by means of constant-time programming (i.e., absence of secret-dependent code/data patterns). Unfortunately, writing constant-time code by hand is hard, as evidenced by the many flaws discovered in production side channel-resistant code. Prior efforts to automatically transform programs into constant-time equivalents offer limited security or compatibility guarantees, hindering their applicability to real-world software. In this paper, we present Constantine, a compiler-based system to automatically harden programs against microarchitectural side channels. Constantine pursues a radical design point where secret-dependent control and data flows are completely linearized (i.e., all involved code/data accesses are always executed). This strategy provides strong security and compatibility guarantees by construction, but its natural implementation leads to state explosion in real-world programs. To address this challenge, Constantine relies on carefully designed optimizations such as just-in-time loop linearization and aggressive function cloning for fully context-sensitive points-to analysis, which not only address state explosion, but also lead to an efficient and compatible solution. Constantine yields overheads as low as 16% on standard benchmarks and can handle a fully-fledged component from the production wolfSSL library.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484583](https://doi.org/10.1145/3460120.3484583)
## ECMO: Peripheral Transplantation to Rehost Embedded Linux Kernels.
### Authors
* Muhui Jiang, The Hong Kong Polytechnic University & Zhejiang University, Hong Kong & Hangzhou, UNK, China
* Lin Ma, Zhejiang University, Hangzhou, UNK, China
* Yajin Zhou, Zhejiang University, Hangzhou, UNK, China
* Qiang Liu, Zhejiang University, Hangzhou, UNK, China
* Cen Zhang, Nanyang Technological University, Singapore, UNK, Singapore
* Zhi Wang, Florida State University, Tallahassee, FL, USA
* Xiapu Luo, The Hong Kong Polytechnic University, Hong Kong, UNK, China
* Lei Wu, Zhejiang University, Hangzhou, UNK, China
* Kui Ren, Zhejiang University, Hangzhou, UNK, China
### Abstract
> Dynamic analysis based on the full-system emulator QEMU is widely used for various purposes.However, it is challenging to run firmware images of embedded devices in QEMU, especially the process to boot the Linux kernel (we call this process rehosting the Linux kernel in this paper). That's because embedded devices usually use different system-on-chips (SoCs) from multiple vendors and only a limited number of SoCs are currently supported in QEMU. In this work, we propose a technique called peripheral transplantation. The main idea is to transplant the device drivers of designated peripherals into the Linux kernel binary. By doing so, it can replace the peripherals in the kernel that are currently unsupported in QEMU with supported ones, thus making the Linux kernel rehostable. After that, various applications can be built. We implemented this technique inside a prototype system called ECMO and applied it to 815 firmware images, which consist of 20 kernel versions and 37 device models. The result shows that ECMO can successfully transplant peripherals for all the 815 Linux kernels. Among them, 710 kernels can be successfully rehosted, i.e., launching a user-space shell (87.1% success rate). The failed cases are mainly because the root file system format (ramfs) is not supported by the kernel. Meanwhile, we are able to inject rather complex drivers (i.e., NIC driver) for all the rehosted Linux kernels by installing kernel modules. We further build three applications, i.e., kernel crash analysis, rootkit forensic analysis, and kernel fuzzing, based on the rehosted kernels to demonstrate the usage scenarios of ECMO.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484753](https://doi.org/10.1145/3460120.3484753)
## SyzGen: Automated Generation of Syscall Specification of Closed-Source macOS Drivers.
### Authors
* Weiteng Chen, University of California, Riverside, Riverside, CA, USA
* Yu Wang, Didi Research America, Mountain View, CA, USA
* Zheng Zhang, University of California, Riverside, Riverside, CA, USA
* Zhiyun Qian, University of California, Riverside, Riverside, CA, USA
### Abstract
> Kernel drivers are a critical part of the attack surface since they constitute a large fraction of kernel codebase and oftentimes lack proper vetting, especially for those closed-source ones. Unfortunately, the complex input structure and unknown relationships/dependencies among interfaces make them very challenging to understand. Thus, security analysts primarily rely on manual audit for interface recovery to generate meaningful fuzzing test cases. In this paper, we present SyzGen, a first attempt to automate the generation of syscall specifications for closed-source macOS drivers and facilitate interface-aware fuzzing. We leverage two insights to overcome the challenges of binary analysis: (1) iterative refinement of syscall knowledge and (2) extraction and extrapolation of dependencies from a small number of execution traces. We evaluated our approach on 25 targets. The results show that SyzGen can effectively produce high-quality specifications, leading to 34 bugs, including one that attackers can exploit to escalate privilege, and 2 CVEs to date.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484564](https://doi.org/10.1145/3460120.3484564)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484564](https://dl.acm.org/doi/pdf/10.1145/3460120.3484564)
## Demons in the Shared Kernel: Abstract Resource Attacks Against OS-level Virtualization.
### Authors
* Nanzi Yang, Xidian University, Xi'an, China
* Wenbo Shen, Zhejiang University, Hangzhou, China
* Jinku Li, Xidian University, Xi'an, China
* Yutian Yang, Zhejiang University, Hangzhou, China
* Kangjie Lu, University of Minnesota, Twin Cities, Minneapolis, MN, USA
* Jietao Xiao, Xidian University, Xi'an, China
* Tianyu Zhou, Zhejiang University, Hangzhou, China
* Chenggang Qin, Ant Group, Hangzhou, China
* Wang Yu, Ant Group, Hangzhou, China
* Jianfeng Ma, Xidian University, Xi'an, China
* Kui Ren, Zhejiang University, Hangzhou, China
### Abstract
> Due to its faster start-up speed and better resource utilization efficiency, OS-level virtualization has been widely adopted and has become a fundamental technology in cloud computing. Compared to hardware virtualization, OS-level virtualization leverages the shared-kernel design to achieve high efficiency and runs multiple user-space instances (a.k.a., containers) on the shared kernel. However, in this paper, we reveal a new attack surface that is intrinsic to OS-level virtualization, affecting Linux, FreeBSD, and Fuchsia. The root cause is that the shared-kernel design in OS-level virtualization results containers in sharing thousands of kernel variables and data structures directly and indirectly. Without exploiting any kernel vulnerabilities, a non-privileged container can easily exhaust the shared kernel variables and data structure instances to cause DoS attacks against other containers. Compared with the physical resources, these kernel variables or data structure instances (termed abstract resources) are more prevalent but under-protected. To show the importance of confining abstract resources, we conduct abstract resource attacks that target different aspects of the OS kernel. The results show that attacking abstract resources is highly practical and critical. We further conduct a systematic analysis to identify vulnerable abstract resources in the Linux kernel, which successfully detects 1,010 abstract resources and 501 of them can be repeatedly consumed dynamically. We also conduct the attacking experiments in the self-deployed shared-kernel container environments on the top 4 cloud vendors. The results show that all environments are vulnerable to abstract resource attacks. We conclude that containing abstract resources is hard and give out multiple strategies for mitigating the risks.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484744](https://doi.org/10.1145/3460120.3484744)
## SmashEx: Smashing SGX Enclaves Using Exceptions.
### Authors
* Jinhua Cui, National University of Defense Technology, Changsha, China
* Jason Zhijingcheng Yu, National University of Singapore, Singapore, Singapore
* Shweta Shinde, ETH Zürich, Zürich, Switzerland
* Prateek Saxena, National University of Singapore, Singapore, Singapore
* Zhiping Cai, National University of Defense Technology, Changsha, China
### Abstract
> Exceptions are a commodity hardware functionality which is central to multi-tasking OSes as well as event-driven user applications. Normally, the OS assists the user application by lifting the semantics of exceptions received from hardware to program-friendly user signals and exception handling interfaces. However, can exception handlers work securely in user enclaves, such as those enabled by Intel SGX, where the OS is not trusted by the enclave code? In this paper, we introduce a new attack called SmashEx which exploits the OS-enclave interface for asynchronous exceptions in SGX. It demonstrates the importance of a fundamental property of safe atomic execution that is required on this interface. In the absence of atomicity, we show that asynchronous exception handling in SGX enclaves is complicated and prone to re-entrancy vulnerabilities. Our attacks do not assume any memory errors in the enclave code, side channels, or application-specific logic flaws. We concretely demonstrate exploits that cause arbitrary disclosure of enclave private memory and code-reuse (ROP) attacks in the enclave. We show reliable exploits on two widely-used SGX runtimes, Intel SGX SDK and Microsoft Open Enclave, running OpenSSL and cURL libraries respectively. We tested a total of 14 frameworks, including Intel SGX SDK and Microsoft Open Enclave, 10 of which are vulnerable. We discuss how the vulnerability manifests on both SGX1-based and SGX2-based platforms. We present potential mitigation and long-term defenses for SmashEx.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484821](https://doi.org/10.1145/3460120.3484821)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484821](https://dl.acm.org/doi/pdf/10.1145/3460120.3484821)
## CPscan: Detecting Bugs Caused by Code Pruning in IoT Kernels.
### Authors
* Lirong Fu, Zhejiang University, Hangzhou, China
* Shouling Ji, Zhejiang University & Binjiang Institute of Zhejiang University, Hangzhou, China
* Kangjie Lu, University of Minnesota, Minneapolis, MN, USA
* Peiyu Liu, Zhejiang University, Hangzhou, China
* Xuhong Zhang, Zhejiang University & Binjiang Institute of Zhejiang University, Hangzhou, China
* Yuxuan Duan, Zhejiang University, Hangzhou, China
* Zihui Zhang, Zhejiang University, Hangzhou, China
* Wenzhi Chen, Zhejiang University, Hangzhou, China
* Yanjun Wu, Institute of Software, Chinese Academy of Sciences, Beijing, China
### Abstract
> To reduce the development costs, IoT vendors tend to construct IoT kernels by customizing the Linux kernel. Code pruning is common in this customization process. However, due to the intrinsic complexity of the Linux kernel and the lack of long-term effective maintenance, IoT vendors may mistakenly delete necessary security operations in the pruning process, which leads to various bugs such as memory leakage and NULL pointer dereference. Yet detecting bugs caused by code pruning in IoT kernels is difficult. Specifically, (1) a significant structural change makes precisely locating the deleted security operations (DSO ) difficult, and (2) inferring the security impact of a DSO is not trivial since it requires complex semantic understanding, including the developing logic and the context of the corresponding IoT kernel. In this paper, we present CPscan, a system for automatically detecting bugs caused by code pruning in IoT kernels. First, using a new graph-based approach that iteratively conducts a structure-aware basic block matching, CPscan can precisely and efficiently identify theDSOs in IoT kernels. Then, CPscan infers the security impact of a DSO by comparing the bounded use chains (where and how a variable is used within potentially influenced code segments) of the security-critical variable associated with it. Specifically, CPscan reports the deletion of a security operation as vulnerable if the bounded use chain of the associated security-critical variable remains the same before and after the deletion. This is because the unchanged uses of a security-critical variable likely need the security operation, and removing it may have security impacts. The experimental results on 28 IoT kernels from 10 popular IoT vendors show that CPscan is able to identify 3,193DSO s and detect 114 new bugs with a reasonably low false-positive rate. Many such bugs tend to have a long latent period (up to 9 years and 5 months). We believe CPscan paves a way for eliminating the bugs introduced by code pruning in IoT kernels. We will open-source CPscan to facilitate further research.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484738](https://doi.org/10.1145/3460120.3484738)
## Statically Discovering High-Order Taint Style Vulnerabilities in OS Kernels.
### Authors
* Hang Zhang, University of California, Riverside, Riverside, CA, USA
* Weiteng Chen, University of California, Riverside, Riverside, CA, USA
* Yu Hao, University of California, Riverside, Riverside, CA, USA
* Guoren Li, University of California, Riverside, Riverside, CA, USA
* Yizhuo Zhai, University of California, Riverside, Riverside, CA, USA
* Xiaochen Zou, University of California, Riverside, Riverside, CA, USA
* Zhiyun Qian, University of California, Riverside, Riverside, CA, USA
### Abstract
> Static analysis is known to yield numerous false alarms when used in bug finding, especially for complex vulnerabilities in large code bases like the Linux kernel. One important class of such complex vulnerabilities is what we call "high-order taint style vulnerability", where the taint flow from the user input to the vulnerable site crosses the boundary of a single entry function invocation (i.e., syscall). Due to the large scope and high precision requirement, few have attempted to solve the problem. In this paper, we present SUTURE, a highly precise and scalable static analysis tool capable of discovering high-order vulnerabilities in OS kernels. SUTURE employs a novel summary-based high-order taint flow construction approach to efficiently enumerate the cross-entry taint flows, while incorporating multiple innovative enhancements on analysis precision that are unseen in existing tools, resulting in a highly precise inter-procedural flow-, context-, field-, index-, and opportunistically path-sensitive static taint analysis. We apply SUTURE to discover high-order taint vulnerabilities in multiple Android kernels from mainstream vendors (e.g., Google, Samsung, Huawei), the results show that SUTURE can both confirm known high-order vulnerabilities and uncover new ones. So far, SUTURE generates 79 true positive warning groups, of which 19 have been confirmed by the vendors, including a high severity vulnerability rated by Google. SUTURE also achieves a reasonable false positive rate (51.23%) perceived by users of our tool.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484798](https://doi.org/10.1145/3460120.3484798)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484798](https://dl.acm.org/doi/pdf/10.1145/3460120.3484798)
## Honest-but-Curious Nets: Sensitive Attributes of Private Inputs Can Be Secretly Coded into the Classifiers' Outputs.
### Authors
* Mohammad Malekzadeh, Imperial College London, London, United Kingdom
* Anastasia Borovykh, Imperial College London, London, United Kingdom
* Deniz Gündüz, Imperial College London, London, United Kingdom
### Abstract
> It is known that deep neural networks, trained for the classification of non-sensitive target attributes, can reveal sensitive attributes of their input data through internal representations extracted by the classifier. We take a step forward and show that deep classifiers can be trained to secretly encode a sensitive attribute of their input data into the classifier's outputs for the target attribute, at inference time. Our proposed attack works even if users have a full white-box view of the classifier, can keep all internal representations hidden, and only release the classifier's estimations for the target attribute. We introduce an information-theoretical formulation for such attacks and present efficient empirical implementations for training honest-but-curious (HBC) classifiers: classifiers that can be accurate in predicting their target attribute, but can also exploit their outputs to secretly encode a sensitive attribute. Our work highlights a vulnerability that can be exploited by malicious machine learning service providers to attack their user's privacy in several seemingly safe scenarios; such as encrypted inferences, computations at the edge, or private knowledge distillation. Experimental results on several attributes in two face-image datasets show that a semi-trusted server can train classifiers that are not only perfectly honest but also accurately curious. We conclude by showing the difficulties in distinguishing between standard and HBC classifiers, discussing challenges in defending against this vulnerability of deep classifiers, and enumerating related open directions for future studies.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484533](https://doi.org/10.1145/3460120.3484533)
## Quantifying and Mitigating Privacy Risks of Contrastive Learning.
### Authors
* Xinlei He, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Yang Zhang, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### Abstract
> Data is the key factor to drive the development of machine learning (ML) during the past decade. However, high-quality data, in particular labeled data, is often hard and expensive to collect. To leverage large-scale unlabeled data, self-supervised learning, represented by contrastive learning, is introduced. The objective of contrastive learning is to map different views derived from a training sample (e.g., through data augmentation) closer in their representation space, while different views derived from different samples more distant. In this way, a contrastive model learns to generate informative representations for data samples, which are then used to perform downstream ML tasks. Recent research has shown that machine learning models are vulnerable to various privacy attacks. However, most of the current efforts concentrate on models trained with supervised learning. Meanwhile, data samples' informative representations learned with contrastive learning may cause severe privacy risks as well. In this paper, we perform the first privacy analysis of contrastive learning through the lens of membership inference and attribute inference. Our experimental results show that contrastive models trained on image datasets are less vulnerable to membership inference attacks but more vulnerable to attribute inference attacks compared to supervised models. The former is due to the fact that contrastive models are less prone to overfitting, while the latter is caused by contrastive models' capability of representing data samples expressively. To remedy this situation, we propose the first privacy-preserving contrastive learning mechanism, Talos, relying on adversarial training. Empirical results show that Talos can successfully mitigate attribute inference risks for contrastive models while maintaining their membership privacy and model utility.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484571](https://doi.org/10.1145/3460120.3484571)
## Membership Inference Attacks Against Recommender Systems.
### Authors
* Minxing Zhang, Shandong University & CISPA Helmholtz Center for Information Security, Qingdao, China
* Zhaochun Ren, Shandong University, Qingdao, China
* Zihan Wang, Shandong University, Qingdao, China
* Pengjie Ren, Shandong University, Qingdao, China
* Zhunmin Chen, Shandong University, Qingdao, China
* Pengfei Hu, Shandong University, Qingdao, China
* Yang Zhang, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### Abstract
> Recently, recommender systems have achieved promising performances and become one of the most widely used web applications. However, recommender systems are often trained on highly sensitive user data, thus potential data leakage from recommender systems may lead to severe privacy problems. In this paper, we make the first attempt on quantifying the privacy leakage of recommender systems through the lens of membership inference. In contrast with traditional membership inference against machine learning classifiers, our attack faces two main differences. First, our attack is on the user-level but not on the data sample-level. Second, the adversary can only observe the ordered recommended items from a recommender system instead of prediction results in the form of posterior probabilities. To address the above challenges, we propose a novel method by representing users from relevant items. Moreover, a shadow recommender is established to derive the labeled training data for training the attack model. Extensive experimental results show that our attack framework achieves a strong performance. In addition, we design a defense mechanism to effectively mitigate the membership inference threat of recommender systems.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484770](https://doi.org/10.1145/3460120.3484770)
## Membership Leakage in Label-Only Exposures.
### Authors
* Zheng Li, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Yang Zhang, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### Abstract
> Machine learning (ML) has been widely adopted in various privacy-critical applications, e.g., face recognition and medical image analysis. However, recent research has shown that ML models are vulnerable to attacks against their training data. Membership inference is one major attack in this domain: Given a data sample and model, an adversary aims to determine whether the sample is part of the model's training set. Existing membership inference attacks leverage the confidence scores returned by the model as their inputs (score-based attacks). However, these attacks can be easily mitigated if the model only exposes the predicted label, i.e., the final model decision. In this paper, we propose decision-based membership inference attacks and demonstrate that label-only exposures are also vulnerable to membership leakage. In particular, we develop two types of decision-based attacks, namely transfer attack and boundary attack. Empirical evaluation shows that our decision-based attacks can achieve remarkable performance, and even outperform the previous score-based attacks in some cases. We further present new insights on the success of membership inference based on quantitative and qualitative analysis, i.e., member samples of a model are more distant to the model's decision boundary than non-member samples. Finally, we evaluate multiple defense mechanisms against our decision-based attacks and show that our two types of attacks can bypass most of these defenses.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484575](https://doi.org/10.1145/3460120.3484575)
## When Machine Unlearning Jeopardizes Privacy.
### Authors
* Min Chen, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Zhikun Zhang, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Tianhao Wang, Carnegie Mellon University & University of Virginia, Pittsburgh, PA, USA
* Michael Backes, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Mathias Humbert, University of Lausanne, Lausanne, Switzerland
* Yang Zhang, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### Abstract
> The right to be forgotten states that a data owner has the right to erase their data from an entity storing it. In the context of machine learning (ML), the right to be forgotten requires an ML model owner to remove the data owner's data from the training set used to build the ML model, a process known asmachine unlearning. While originally designed to protect the privacy of the data owner, we argue that machine unlearning may leave some imprint of the data in the ML model and thus create unintended privacy risks. In this paper, we perform the first study on investigating the unintended information leakage caused by machine unlearning. We propose a novel membership inference attack that leverages the different outputs of an ML model's two versions to infer whether a target sample is part of the training set of the original model but out of the training set of the corresponding unlearned model. Our experiments demonstrate that the proposed membership inference attack achieves strong performance. More importantly, we show that our attack in multiple cases outperforms the classical membership inference attack on the original ML model, which indicates that machine unlearning can have counterproductive effects on privacy. We notice that the privacy degradation is especially significant for well-generalized ML models where classical membership inference does not perform well. We further investigate four mechanisms to mitigate the newly discovered privacy risks and show that releasing the predicted label only, temperature scaling, and differential privacy are effective. We believe that our results can help improve privacy protection in practical implementations of machine unlearning. \footnoteOur code is available at \urlhttps://github.com/MinChen00/UnlearningLeaks.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484756](https://doi.org/10.1145/3460120.3484756)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484756](https://dl.acm.org/doi/pdf/10.1145/3460120.3484756)
## Deterrence of Intelligent DDoS via Multi-Hop Traffic Divergence.
### Authors
* Yuanjie Li, Tsinghua University, Beijing, China
* Hewu Li, Tsinghua University, Beijing, China
* Zhizheng Lv, Tsinghua University, Beijing, China
* Xingkun Yao, Tsinghua University, Beijing, China
* Qianru Li, University of California, Los Angeles, Los Angeles, CA, USA
* Jianping Wu, Tsinghua University, Beijing, China
### Abstract
> We devise a simple, provably effective, and readily usable deterrence against intelligent, unknown DDoS threats: Demotivate adversaries to launch attacks via multi-hop traffic divergence. This new strategy is motivated by the fact that existing defenses almost always lag behind numerous emerging DDoS threats and evolving intelligent attack strategies. The root cause is if adversaries are smart and adaptive, no single-hop defenses (including optimal ones) can perfectly differentiate unknown DDoS and legitimate traffic. Instead, we formulate intelligent DDoS as a game between attackers and defenders, and prove how multi-hop traffic divergence helps bypass this dilemma by reversing the asymmetry between attackers and defenders. This insight results in EID, an Economical Intelligent DDoS Demotivation protocol. EID combines local weak (yet divergent) filters to provably null attack gains without knowing exploited vulnerabilities or attack strategies. It incentivizes multi-hop defenders to cooperate with boosted local service availability. EID is resilient to traffic dynamics and manipulations. It is readily deployable with random-drop filters in real networks today. Our experiments over a 49.8 TB dataset from a department at the Tsinghua campus network validate EID's viability against rational and irrational DDoS with negligible costs.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484737](https://doi.org/10.1145/3460120.3484737)
## Scan, Test, Execute: Adversarial Tactics in Amplification DDoS Attacks.
### Authors
* Harm Griffioen, Hasso Plattner Institute, Potsdam, Germany
* Kris Oosthoek, Technische Universiteit Delft, Delft, Netherlands
* Paul van der Knaap, Technische Universiteit Delft, Delft, Netherlands
* Christian Doerr, Hasso Plattner Institute, Potsdam, Germany
### Abstract
> Amplification attacks generate an enormous flood of unwanted traffic towards a victim and are generated with the help of open, unsecured services, to which an adversary sends spoofed service requests that trigger large answer volumes to a victim. However, the actual execution of the packet flood is only one of the activities necessary for a successful attack. Adversaries need, for example, to develop attack tools, select open services to abuse, test them, and adapt the attacks if necessary, each of which can be implemented in myriad ways. Thus, to understand the entire ecosystem and how adversaries work, we need to look at the entire chain of activities. This paper analyzes adversarial techniques, tactics, and procedures (TTPs) based on 549 honeypots deployed in 5 clouds that were rallied to participate in 13,479 attacks. Using a traffic shaping approach to prevent meaningful participation in DDoS activities while allowing short bursts of adversarial testing, we find that adversaries actively test for plausibility, packet loss, and amplification benefits of these servers, and show evidence of a 'memory' of previously exploited servers among attackers. In practice, we demonstrate that even for commonplace amplification attacks, adversaries exhibit differences in how they work.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484747](https://doi.org/10.1145/3460120.3484747)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484747](https://dl.acm.org/doi/pdf/10.1145/3460120.3484747)
## Warmonger: Inflicting Denial-of-Service via Serverless Functions in the Cloud.
### Authors
* Junjie Xiong, University of South Florida, Tampa, FL, USA
* Mingkui Wei, George Mason University, Fairfax, VA, USA
* Zhuo Lu, University of South Florida, Tampa, FL, USA
* Yao Liu, University of South Florida, Tampa, FL, USA
### Abstract
> We debut the Warmonger attack, a novel attack vector that can cause denial-of-service between a serverless computing platform and an external content server. The Warmonger attack exploits the fact that a serverless computing platform shares the same set of egress IPs among all serverless functions, which belong to different users, to access an external content server. As a result, a malicious user on this platform can purposefully misbehave and cause these egress IPs to be blocked by the content server, resulting in a platform-wide denial of service. To validate the Warmonger attack, we ran months-long experiments, collected and analyzed the egress IP usage pattern of four major serverless service providers (SSPs). We also conducted an in-depth evaluation of an attacker's possible moves to inflict an external server and cause IP-blockage. We demonstrate that some SSPs use surprisingly small numbers of egress IPs (as little as only four) and share them among their users, and that the serverless platform provides sufficient leverage for a malicious user to conduct well-known misbehaviors and cause IP-blockage. Our study unveiled a potential security threat on the emerging serverless computing platform, and shed light on potential mitigation approaches.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3485372](https://doi.org/10.1145/3460120.3485372)
## United We Stand: Collaborative Detection and Mitigation of Amplification DDoS Attacks at Scale.
### Authors
* Daniel Wagner, DE-CIX & Max Planck Institute for Informatics, Cologne, Germany
* Daniel Kopp, DE-CIX, Cologne, Germany
* Matthias Wichtlhuber, DE-CIX, Cologne, Germany
* Christoph Dietzel, DE-CIX & Max Planck Institute for Informatics, Cologne, Germany
* Oliver Hohlfeld, Brandenburg University of Technology, Cottbus, Germany
* Georgios Smaragdakis, TU Delft, Delft, Netherlands
* Anja Feldmann, Max Planck Institute for Informatics, Saarbrücken, Germany
### Abstract
> Amplification Distributed Denial of Service (DDoS) attacks' traffic and harm are at an all-time high. To defend against such attacks, distributed attack mitigation platforms, such as traffic scrubbing centers that operate in peering locations, e.g., Internet Exchange Points (IXP), have been deployed in the Internet over the years. These attack mitigation platforms apply sophisticated techniques to detect attacks and drop attack traffic locally, thus, act as sensors of attacks. However, it has not yet been systematically evaluated and reported to what extent coordination of these views by different platforms can lead to more effective mitigation of amplification DDoS attacks. In this paper, we ask the question: "Is it possible to mitigate more amplification attacks and drop more attack traffic when distributed attack mitigation platforms collaborate?" To answer this question, we collaborate with eleven IXPs that operate in three different regions. These IXPs have more than 2,120 network members that exchange traffic at the rate of more than 11 Terabits per second. We collect network data over six months and analyze more than 120k amplification DDoS attacks. To our surprise, more than 80% of the amplification DDoS are not detected locally, although the majority of the attacks are visible by at least three IXPs. A closer investigation points to the shortcomings, such as the multi-protocol profile of modern amplification attacks, the duration of the attacks, and the difficulty of setting appropriate local attack traffic thresholds that will trigger mitigation. To overcome these limitations, we design and evaluate a collaborative architecture that allows participant mitigation platforms to exchange information about ongoing amplification attacks. Our evaluation shows that it is possible to collaboratively detect and mitigate the majority of attacks with limited exchange of information and drop as much as 90% more attack traffic locally.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3485385](https://doi.org/10.1145/3460120.3485385)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3485385](https://dl.acm.org/doi/pdf/10.1145/3460120.3485385)
## Revisiting Nakamoto Consensus in Asynchronous Networks: A Comprehensive Analysis of Bitcoin Safety and ChainQuality.
### Authors
* Muhammad Saad, University of Central Florida, Orlando, FL, USA
* Afsah Anwar, University of Central Florida, Orlando, FL, USA
* Srivatsan Ravi, University of Southern California, Los Angeles , CA, USA
* David Mohaisen, University of Central Florida, Orlando, FL, USA
### Abstract
> The Bitcoin blockchain safety relies on strong network synchrony. Therefore, violating the blockchain safety requires strong adversaries that control a mining pool with 51% hash rate. In this paper, we show that the network synchrony does not hold in the real world Bitcoin network which can be exploited to lower the cost of various attacks that violate the blockchain safety and chain quality. Towards that, first we construct the Bitcoin ideal functionality to formally specify its ideal execution model in a synchronous network. We then develop a large-scale data collection system through which we connect with more than 36K IP addresses of the Bitcoin nodes and identify 359 mining nodes. We contrast the ideal functionality against the real world measurements to expose the network anomalies that can be exploited to optimize the existing attacks. Particularly, we observe a non-uniform block propagation pattern among the mining nodes showing that the Bitcoin network is asynchronous in practice. To realize the threat of an asynchronous network, we present the HashSplit attack that allows an adversary to orchestrate concurrent mining on multiple branches of the blockchain to violate common prefix and chain quality properties. We also propose the attack countermeasures by tweaking Bitcoin Core to model the Bitcoin ideal functionality. Our measurements, theoretical modeling, proposed attack, and countermeasures open new directions in the security evaluation of Bitcoin and similar blockchain systems.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484561](https://doi.org/10.1145/3460120.3484561)
## How Does Blockchain Security Dictate Blockchain Implementation?
### Authors
* Andrew Lewis-Pye, London School of Economics, London, United Kingdom
* Tim Roughgarden, Columbia University, New York City, NY, USA
### Abstract
> Blockchain protocols come with a variety of security guarantees. For example, BFT-inspired protocols such as Algorand tend to be secure in the partially synchronous setting, while longest chain protocols like Bitcoin will normally require stronger synchronicity to be secure. Another fundamental distinction, directly relevant to scalability solutions such as sharding, is whether or not a single untrusted user is able to point to certificates, which provide incontrovertible proof of block confirmation. Algorand produces such certificates, while Bitcoin does not. Are these properties accidental? Or are they inherent consequences of the paradigm of protocol design? Our aim in this paper is to understand what, fundamentally, governs the nature of security for permissionless blockchain protocols. Using the framework developed in [12], we prove general results showing that these questions relate directly to properties of the user selection process, i.e. the method (such as proof-of-work or proof-of-stake) which is used to select users with the task of updating state. Our results suffice to establish, for example, that the production of certificates is impossible for proof-of-work protocols, but is automatic for standard forms of proof-of-stake protocols. As a byproduct of our work, we also define a number of security notions and identify the equivalences and inequivalences among them.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484752](https://doi.org/10.1145/3460120.3484752)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484752](https://dl.acm.org/doi/pdf/10.1145/3460120.3484752)
## The Exact Security of BIP32 Wallets.
### Authors
* Poulami Das, Technische Universität Darmstadt, Darmstadt, Germany
* Andreas Erwig, Technische Universität Darmstadt, Darmstadt, Germany
* Sebastian Faust, Technische Universität Darmstadt, Darmstadt, Germany
* Julian Loss, University of Maryland, Washington D.C., DC, USA
* Siavash Riahi, Technische Universität Darmstadt, Darmstadt, Germany
### Abstract
> In many cryptocurrencies, the problem of key management has become one of the most fundamental security challenges. Typically, keys are kept in designated schemes called wallets, whose main purpose is to store these keys securely. One such system is the BIP32 wallet (Bitcoin Improvement Proposal 32), which since its introduction in 2012 has been adopted by countless Bitcoin users and is one of the most frequently used wallet system today. Surprisingly, very little is known about the concrete security properties offered by this system. In this work, we propose the first formal analysis of the BIP32 system in its entirety and without any modification. Building on the recent work of Das et al. (CCS '19), we put forth a formal model for hierarchical deterministic wallet systems (such as BIP32) and give a security reduction in this model from the existential unforgeability of the ECDSA signature algorithm that is used in BIP32. We conclude by giving concrete security parameter estimates achieved by the BIP32 standard, and show that by moving to an alternative key derivation method we can achieve a tighter reduction offering an additional 20 bits of security (111 vs. 91 bits of security) at no additional costs.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484807](https://doi.org/10.1145/3460120.3484807)
## A Security Framework for Distributed Ledgers.
### Authors
* Mike Graf, University of Stuttgart, Stuttgart, Germany
* Daniel Rausch, University of Stuttgart, Stuttgart, Germany
* Viktoria Ronge, Friedrich-Alexander University Erlangen-Nürnberg, Erlangen, Germany
* Christoph Egger, Friedrich-Alexander University Erlangen-Nürnberg, Erlangen, Germany
* Ralf Küsters, University of Stuttgart, Stuttgart, Germany
* Dominique Schröder, Friedrich-Alexander University Erlangen-Nürnberg, Erlangen, Germany
### Abstract
> In the past few years blockchains have been a major focus for security research, resulting in significant progress in the design, formalization, and analysis of blockchain protocols. However, the more general class of distributed ledgers, which includes not just blockchains but also prominent non-blockchain protocols, such as Corda and OmniLedger, cannot be covered by the state-of-the-art in the security literature yet. These distributed ledgers often break with traditional blockchain paradigms, such as block structures to store data, system-wide consensus, or global consistency. In this paper, we close this gap by proposing the first framework for defining and analyzing the security of general distributed ledgers, with an ideal distributed ledger functionality, called Fledger, at the core of our contribution. This functionality covers not only classical blockchains but also non-blockchain distributed ledgers in a unified way. To illustrate Fledger, we first show that the prominent ideal block-chain functionalities Gledger and GPL realize (suitable instantiations of) Fledger, which captures their security properties. This implies that their respective implementations, including Bitcoin, Ouroboros Genesis, and Ouroboros Crypsinous, realize Fledger as well. Secondly, we demonstrate that Fledger is capable of precisely modeling also non-blockchain distributed ledgers by performing the first formal security analysis of such a distributed ledger, namely the prominent Corda protocol. Due to the wide spread use of Corda in industry, in particular the financial sector, this analysis is of independent interest. These results also illustrate that Fledger not just generalizes the modular treatment of blockchains to distributed ledgers, but moreover helps to unify existing results.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3485362](https://doi.org/10.1145/3460120.3485362)
## This Sneaky Piggy Went to the Android Ad Market: Misusing Mobile Sensors for Stealthy Data Exfiltration.
### Authors
* Michalis Diamantaris, FORTH, Heraklion, Crete, Greece
* Serafeim Moustakas, FORTH, Heraklion, Crete, Greece
* Lichao Sun, Lehigh University, Bethlehem, PA, USA
* Sotiris Ioannidis, Technical University of Crete, Chania, Crete, Greece
* Jason Polakis, University of Illinois at Chicago, Chicago, IL, USA
### Abstract
> Mobile sensors have transformed how users interact with modern smartphones and enhance their overall experience. However, the absence of sufficient access control for protecting these sensors enables a plethora of threats. As prior work has shown, malicious apps and sites can deploy a wide range of attacks that use data captured from sensors. Unfortunately, as we demonstrate, in the modern app ecosystem where most apps fetch and render third-party web content, attackers can use ads for delivering attacks. In this paper, we introduce a novel attack vector that misuses the advertising ecosystem for delivering sophisticated and stealthy attacks that leverage mobile sensors. These attacks do not depend on any special app permissions or specific user actions, and affect all Android apps that contain in-app advertisements due to the improper access control of sensor data in WebView. We outline how motion sensor data can be used to infer users' sensitive touch input (e.g., credit card information) in two distinct attack scenarios, namely intra-app and inter-app data exfiltration. While the former targets the app displaying the ad, the latter affects every other Android app running on the device. To make matters worse, we have uncovered serious flaws in Android's app isolation, life cycle management, and access control mechanisms that enable persistent data exfiltration even after the app showing the ad is moved to the background or terminated by the user. Furthermore, as in-app ads can "piggyback" on the permissions intended for the app's core functionality, they can also obtain information from protected sensors such as the camera, microphone and GPS. To provide a comprehensive assessment of this emerging threat, we conduct a large-scale, end-to-end, dynamic analysis of ads shown in apps available in the official Android Play Store. Our study reveals that ads in the wild are already accessing and leaking data obtained from motion sensors, thus highlighting the need for stricter access control policies and isolation mechanisms.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3485366](https://doi.org/10.1145/3460120.3485366)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3485366](https://dl.acm.org/doi/pdf/10.1145/3460120.3485366)
## Noncompliance as Deviant Behavior: An Automated Black-box Noncompliance Checker for 4G LTE Cellular Devices.
### Authors
* Syed Rafiul Hussain, Pennsylvania State University, University Park, PA, USA
* Imtiaz Karim, Purdue University, West Lafayette, IN, USA
* Abdullah Al Ishtiaq, Pennsylvania State University, University Park, PA, USA
* Omar Chowdhury, University of Iowa, Iowa City, IA, USA
* Elisa Bertino, Purdue University, West Lafayette, IN, USA
### Abstract
> The paper focuses on developing an automated black-box testing approach called DIKEUE that checks 4G Long Term Evolution (LTE) control-plane protocol implementations in commercial-off-the-shelf (COTS) cellular devices (also, User Equipments or UEs) for noncompliance with the standard. Unlike prior noncompliance checking approaches which rely on property-guided testing, DIKEUE adopts a property-agnostic, differential testing approach, which leverages the existence of many different control-plane protocol implementations in COTS UEs. DIKEUE uses deviant behavior observed during differential analysis of pairwise COTS UEs as a proxy for identifying noncompliance instances. For deviant behavior identification, DIKEUE first uses black-box automata learning, specialized for 4G LTE control-plane protocols, to extract input-output finite state machine (FSM) for a given UE. It then reduces the identification of deviant behavior in two extracted FSMs as a model checking problem. We applied DIKEUE in checking noncompliance in 14 COTS UEs from 5 vendors and identified 15 new deviant behavior as well as 2 previous implementation issues. Among them, 11 are exploitable whereas 3 can cause potential interoperability issues.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3485388](https://doi.org/10.1145/3460120.3485388)
## All your Credentials are Belong to Us: On Insecure WPA2-Enterprise Configurations.
### Authors
* Man Hong Hue, The Chinese University of Hong Kong, Hong Kong, Hong Kong
* Joyanta Debnath, The University of Iowa, Iowa City, IA, USA
* Kin Man Leung, The University of British Columbia, Vancouver, BC, Canada
* Li Li, Syracuse University, Syracuse, NY, USA
* Mohsen Minaei, Visa Research, Palo Alto, CA, USA
* M. Hammad Mazhar, The University of Iowa, Iowa City, IA, USA
* Kailiang Xian, The Chinese University of Hong Kong, Hong Kong, Hong Kong
* Endadul Hoque, Syracuse University, Syracuse, NY, USA
* Omar Chowdhury, The University of Iowa, Iowa City, IA, USA
* Sze Yiu Chau, The Chinese University of Hong Kong, Hong Kong, Hong Kong
### Abstract
> In this paper, we perform the first multifaceted measurement study to investigate the widespread insecure practices employed by tertiary education institutes (TEIs) around the globe when offering WPA2-Enterprise Wi-Fi services. The security of such services critically hinges on two aspects: (1) the connection configuration on the client-side; and (2) the TLS setup on the authentication servers. Weaknesses in either can leave users susceptible to credential theft. Typically, TEIs prescribe to their users either manual instructions or pre-configured profiles (e.g., eduroam CAT). For studying the security of configurations, we present a framework in which each configuration is mapped to an abstract security label drawn from a strict partially ordered set. We first used this framework to evaluate the configurations supported by the user interfaces (UIs) of mainstream operating systems (OSs), and discovered many design weaknesses. We then considered 7045 TEIs in 54 countries/regions, and collected 7275 configuration instructions from 2061 TEIs. Our analysis showed that majority of these instructions lead to insecure configurations, and nearly 86% of those TEIs can suffer from credential thefts on at least one OS. We also analyzed a large corpus of pre-configured eduroam CAT profiles and discovered several misconfiguration issues that can negatively impact security. Finally, we evaluated the TLS parameters used by authentication servers of thousands of TEIs and discovered perilous practices, such as the use of expired certificates, deprecated versions of TLS, weak signature algorithms, and suspected cases of private key reuse among TEIs. Our long list of findings have been responsibly disclosed to the relevant stakeholders, many of which have already been positively acknowledged.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484569](https://doi.org/10.1145/3460120.3484569)
## On-device IoT Certificate Revocation Checking with Small Memory and Low Latency.
### Authors
* Xiaofeng Shi, University of California, Santa Cruz, Santa Cruz, CA, USA
* Shouqian Shi, University of California, Santa Cruz, Santa Cruz, CA, USA
* Minmei Wang, University of California, Santa Cruz, Santa Cruz, CA, USA
* Jonne Kaunisto, University of California, Santa Cruz, Santa Cruz, CA, USA
* Chen Qian, University of California, Santa Cruz, Santa Cruz, CA, USA
### Abstract
> Allowing a device to verify the digital certificate of another device is an essential requirement and key building block of many security protocols for emerging and future IoT systems that involve device-to-device communication. However, on-device certificate verification is challenging for current devices, mainly because the certificate revocation (CR) checking step costs too much resource on IoT devices and the synchronization of CR status to devices yields a long latency. This paper presents an on-device CR checking system called TinyCR, which achieves 100% accuracy, memory and computation efficiency, low synchronization latency, and low network bandwidth, while being compatible with the current certificate standard. We design a new compact and dynamic data structure called DASS to store and query global CR status on a device in TinyCR. Our implementation shows that TinyCR only costs each device 1.7 MB of memory to track 100 million IoT certificates with 1% revocation rate. Checking the CR status of one certificate spends less than 1 microsecond on a Raspberry Pi 3. TinyCR can also be updated instantly when there are new certificates added or revoked.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484580](https://doi.org/10.1145/3460120.3484580)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484580](https://dl.acm.org/doi/pdf/10.1145/3460120.3484580)
## Labeled PSI from Homomorphic Encryption with Reduced Computation and Communication.
### Authors
* Kelong Cong, imec-COSIC, KU Leuven, Leuven, Belgium
* Radames Cruz Moreno, Microsoft Research, Redmond, WA, USA
* Mariana Botelho da Gama, imec-COSIC, KU Leuven, Leuven, Belgium
* Wei Dai, Microsoft Research, Redmond, WA, USA
* Ilia Iliashenko, imec-COSIC, KU Leuven, Leuven, Belgium
* Kim Laine, Microsoft Research, Redmond, WA, USA
* Michael Rosenberg, University of Maryland, College Park, MD, USA
### Abstract
> It is known that fully homomorphic encryption (FHE) can be used to build efficient (labeled) Private Set Intersection protocols in the unbalanced setting, where one of the sets is much larger than the other~(Chen et al. (CCS'17, CCS'18)). In this paper we demonstrate multiple algorithmic improvements upon these works. In particular, our protocol has an asymptotically better computation cost, requiring only O(√|X| ) homomorphic multiplications, and communication complexity sublinear in the larger set size|X|. We demonstrate that our protocol is significantly better than that of Chen et al. (CCS'18) for many practical parameters, especially in terms of online communication cost. For example, when intersecting $228 and 2048 item sets, our protocol reduces the online computation time by more than 71% and communication by more than 63%. When intersecting 224 and 4096 item sets, our protocol reduces the online computation time by 27% and communication by 63%. Our comparison to other state-of-the-art unbalanced PSI protocols shows that our protocol has the best total communication complexity when |X| ≥ 224. For labeled PSI our protocol also outperforms Chen et al. (CCS'18). When intersecting 220 and 256 item sets, with the larger set having associated 288-byte labels, our protocol reduces the online computation time by more than 67% and communication by 34%. Finally, we demonstrate a modification that results in nearly constant communication cost in the larger set size |X|, but impractically high computation complexity on today's CPUs. For example, to intersect a 210-item set with sets of size 222, 224, or 226, our proof-of-concept implementation requires only 0.76 MB of online communication, which is more than a 24-fold improvement over Chen et al. (CCS'18).
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484760](https://doi.org/10.1145/3460120.3484760)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484760](https://dl.acm.org/doi/pdf/10.1145/3460120.3484760)
## Simple, Fast Malicious Multiparty Private Set Intersection.
### Authors
* Ofri Nevo, Open University of Israel, Ra'anana, Israel
* Ni Trieu, Arizona State University, Tempe, AZ, USA
* Avishay Yanai, VMware Research, Herzliya, Israel
### Abstract
> We address the problem of multiparty private set intersection against a malicious adversary. First, we show that when one can assume no collusion amongst corrupted parties then there exists an extremely efficient protocol given only symmetric-key primitives. Second, we present a protocol secure against an adversary corrupting any strict subset of the parties. Our protocol is based on the recently introduced primitives: oblivious programmable PRF (OPPRF) and oblivious key-value store (OKVS). Our protocols follow the client-server model where each party is either a client or a server. However, in contrast to previous works where the client has to engage in an expensive interactive cryptographic protocol, our clients need only send a single key to each server and a single message to a pivot party (where message size is in the order of the set size). Our experiments show that the client's load improves by up to 10x (compared to both semi-honest and malicious settings) and that factor increases with the number of parties. We implemented our protocol and conducted an extensive experiment over both LAN and WAN and up to 32 parties with up to $2^20 $ items each. We provide a comparison of the performance of our protocol and the state-of-the-art for both the semi-honest setting (by Chandran et al.) and the malicious setting (by Ben Efraim et al. and Garimella et al.).
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484772](https://doi.org/10.1145/3460120.3484772)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484772](https://dl.acm.org/doi/pdf/10.1145/3460120.3484772)
## Compact and Malicious Private Set Intersection for Small Sets.
### Authors
* Mike Rosulek, Oregon State University, Corvallis, OR, USA
* Ni Trieu, Arizona State University, Tempe, AZ, USA
### Abstract
> We describe a protocol for two-party private set intersection (PSI) based on Diffie-Hellman key agreement. The protocol is proven secure against malicious parties, in the ideal permutation + random oracle model. For small sets (500 items or fewer), our protocol requires the least time and communication of any known PSI protocol, even ones that are only semi-honest secure and ones that are not based on Diffie-Hellman. It is one of the few significant improvements to the 20-year old classical Diffie-Hellman PSI protocol of Huberman, Franklin, and Hogg (ACM Elec. Commerce 1999). Our protocol is actually a generic transformation that constructs PSI from a class of key agreement protocols. This transformation is inspired by a technique of Cho, Dachman-Soled, and Jarecki (CT-RSA 2016), which we streamline and optimize in several important ways to achieve our superior efficiency.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484778](https://doi.org/10.1145/3460120.3484778)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484778](https://dl.acm.org/doi/pdf/10.1145/3460120.3484778)
## Efficient Linear Multiparty PSI and Extensions to Circuit/Quorum PSI.
### Authors
* Nishanth Chandran, Microsoft Research, Bangalore, India
* Nishka Dasgupta, Aarhus University, Aarhus, Denmark
* Divya Gupta, Microsoft Research, Bangalore, India
* Sai Lakshmi Bhavana Obbattu, Microsoft Research, Bangalore, India
* Sruthi Sekar, Indian Institute of Science, Bangalore, India
* Akash Shah, University of California, Los Angeles, Los Angeles, CA, USA
### Abstract
> Multiparty Private Set Intersection (mPSI), enables n parties, each holding private sets (each of size m) to securely compute the intersection of these private sets. While several protocols are known for this task, the only concretely efficient protocol is due to the work of Kolesnikov et al. (KMPRT, CCS 2017), who gave a semi-honest secure protocol with communication complexity O(nmtƛ), where t < n is the number of corrupt parties and ƛ is the security parameter. In this work, we make the following contributions: –First, for the natural adversarial setting of semi-honest honest majority (i.e. t<n/2), we asymptotically improve upon the above result and provide a concretely efficient protocol with total communication of O(nmƛ). –Second, concretely, our protocol has 6(t+2)/5 times lesser communication than KMPRT and is up to 5× and 6.2× faster than KMPRT in the LAN and WAN setting even for 15 parties. –Finally, we introduce and consider two important variants of mPSI - circuit PSI (that allows the parties to compute a function over the intersection set without revealing the intersection itself) and quorum PSI (that allows P1 to learn all the elements in his/her set that are present in at least k other sets) and provide concretely efficient protocols for these variants.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484591](https://doi.org/10.1145/3460120.3484591)
## Differential Privacy for Directional Data.
### Authors
* Benjamin Weggenmann, SAP Security Research, Karlsruhe, Germany
* Florian Kerschbaum, University of Waterloo, Waterloo, ON, Canada
### Abstract
> Directional data is an important class of data where the magnitudes of the data points are negligible. It naturally occurs in many real-world scenarios: For instance, geographic locations (approximately) lie on a sphere, and periodic data such as time of day, or day of week can be interpreted as points on a circle. Massive amounts of directional data are collected by location-based service platforms such as Google Maps or Foursquare, who depend on mobility data from users' smartphones or wearable devices to enable their analytics and marketing businesses. However, such data is often highly privacy-sensitive and hence demands measures to protect the privacy of the individuals whose data is collected and processed. Starting with the von Mises-Fisher distribution, we therefore propose and analyze two novel privacy mechanisms for directional data by combining directional statistics with differential privacy, which presents the current state-of-the-art for quantifying and limiting information disclosure about individuals. As we will see, our specialized privacy mechanisms achieve a better privacy-utility trade-off than ex post adaptions of established mechanisms to directional data.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484734](https://doi.org/10.1145/3460120.3484734)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484734](https://dl.acm.org/doi/pdf/10.1145/3460120.3484734)
## Differentially Private Sparse Vectors with Low Error, Optimal Space, and Fast Access.
### Authors
* Martin Aumüller, IT University of Copenhagen, Copenhagen, Denmark
* Christian Janos Lebeda, Basic Algorithms Research Copenhagen & IT University of Copenhagen, Copenhagen, Denmark
* Rasmus Pagh, Basic Algorithms Research Copenhagen & University of Copenhagen, Copenhagen, Denmark
### Abstract
> Representing a sparse histogram, or more generally a sparse vector, is a fundamental task in differential privacy. An ideal solution would use space close to information-theoretical lower bounds, have an error distribution that depends optimally on the desired privacy level, and allow fast random access to entries in the vector. However, existing approaches have only achieved two of these three goals. In this paper we introduce the Approximate Laplace Projection (ALP) mechanism for approximating k-sparse vectors. This mechanism is shown to simultaneously have information-theoretically optimal space (up to constant factors), fast access to vector entries, and error of the same magnitude as the Laplace-mechanism applied to dense vectors. A key new technique is a unary representation of small integers, which we show to be robust against "randomized response'' noise. This representation is combined with hashing, in the spirit of Bloom filters, to obtain a space-efficient, differentially private representation. Our theoretical performance bounds are complemented by simulations which show that the constant factors on the main performance parameters are quite small, suggesting practicality of the technique.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484735](https://doi.org/10.1145/3460120.3484735)
## Continuous Release of Data Streams under both Centralized and Local Differential Privacy.
### Authors
* Tianhao Wang, Carnegie Mellon University & University of Virginia, Pittsburgh, PA, USA
* Joann Qiongna Chen, University of California, Irvine, Irvine, CA, USA
* Zhikun Zhang, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Dong Su, Alibaba Inc., San Mateo, CA, USA
* Yueqiang Cheng, NIO Security Research, San Jose, CA, USA
* Zhou Li, University of California, Irvine, Irvine, CA, USA
* Ninghui Li, Purdue University, West Lafayette, IN, USA
* Somesh Jha, University of Wisconsin, Madison, Madison, WI, USA
### Abstract
> We study the problem of publishing a stream of real-valued data satisfying differential privacy (DP). One major challenge is that the maximal possible value in the stream can be quite large, leading to enormous DP noise and bad utility. To reduce the maximal value and noise, one way is to estimate a threshold so that values above it can be truncated. The intuition is that, in many scenarios, only a few values are large; thus truncation does not change the original data much. We develop such a method that finds a suitable threshold with DP. Given the threshold, we then propose an online hierarchical method and several post-processing techniques. Building on these ideas, we formalize the steps in a framework for the private publishing of streaming data. Our framework consists of three components: a threshold optimizer that privately estimates the threshold, a perturber that adds calibrated noise to the stream, and a smoother that improves the result using post-processing. Within our framework, we also design an algorithm satisfying the more stringent DP setting called local DP. Using four real-world datasets, we demonstrate that our mechanism outperforms the state-of-the-art by a factor of $6-10$ orders of magnitude in terms of utility (measured by the mean squared error of the typical scenario of answering a random range query).
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484750](https://doi.org/10.1145/3460120.3484750)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484750](https://dl.acm.org/doi/pdf/10.1145/3460120.3484750)
## Side-Channel Attacks on Query-Based Data Anonymization.
### Authors
* Franziska Boenisch, Fraunhofer AISEC, Garching, Germany
* Reinhard Munz, Max Planck Institute for Software Systems, Saarbrücken, Germany
* Marcel Tiepelt, Karlsruhe Institute of Technology, Karlsruhe, Germany
* Simon Hanisch, TU Dresden, Dresden, Germany
* Christiane Kuhn, Karlsruhe Institute of Technology, Karlsruhe, Germany
* Paul Francis, Max Planck Institute for Software Systems, Saarbrücken, Germany
### Abstract
> A longstanding problem in computer privacy is that of data anonymization. One common approach is to present a query interface to analysts, and anonymize on a query-by-query basis. In practice, this approach often uses a standard database back end, and presents the query semantics of the database to the analyst. This paper presents a class of novel side-channel attacks that work against any query-based anonymization system that uses a standard database back end. The attacks exploit the implicit conditional logic of database runtime optimizations. They manipulate this logic to trigger timing and exception-throwing side-channels based on the contents of the data. We demonstrate the attacks on the implementation of the CHORUS Differential Privacy system released by Uber as an open source project. We obtain perfect reconstruction of millions of data values even with a Differential Privacy budget smaller than epsilon = 1.0 and no prior knowledge. The paper also presents the design of a general defense to the runtime-optimization attacks, and a concrete implementation of the defense in the latest version of Diffix. The defense works without modifications to the back end database, and operates by modifying SQL to eliminate the runtime optimization or disable the side-channels. In addition, two other attacks that exploit specific flaws in Diffix and CHORUS are reported. These have been fixed in the respective implementations.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484751](https://doi.org/10.1145/3460120.3484751)
## AHEAD: Adaptive Hierarchical Decomposition for Range Query under Local Differential Privacy.
### Authors
* Linkang Du, Zhejiang University, Hangzhou, China
* Zhikun Zhang, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Shaojie Bai, Zhejiang University, Hangzhou, China
* Changchang Liu, IBM Research, Yorktown Heights, NY, USA
* Shouling Ji, Zhejiang University & Binjiang Institute of Zhejiang University, Hangzhou, China
* Peng Cheng, Zhejiang University, Hangzhou, China
* Jiming Chen, Zhejiang University & Zhejiang University of Technology, Hangzhou, China
### Abstract
> For protecting users' private data, local differential privacy (LDP) has been leveraged to provide the privacy-preserving range query, thus supporting further statistical analysis. However, existing LDP-based range query approaches are limited by their properties, ie, collecting user data according to a pre-defined structure. These static frameworks would incur excessive noise added to the aggregated data especially in the low privacy budget setting. In this work, we propose an Adaptive Hierarchical Decomposition (AHEAD) protocol, which adaptively and dynamically controls the built tree structure, so that the injected noise is well controlled for maintaining high utility. Furthermore, we derive a guideline for properly choosing parameters for AHEAD so that the overall utility can be consistently competitive while rigorously satisfying LDP. Leveraging multiple real and synthetic datasets, we extensively show the effectiveness of AHEAD in both low and high dimensional range query scenarios, as well as its advantages over the state-of-the-art methods. In addition, we provide a series of useful observations for deploying \myahead in practice.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3485668](https://doi.org/10.1145/3460120.3485668)
## Who's In Control? On Security Risks of Disjointed IoT Device Management Channels.
### Authors
* Yan Jia, Nankai University & Xidian University & Indiana University Bloomington, Tianjin, China
* Bin Yuan, Huazhong University of Science and Technology & Indiana University Bloomington, Wuhan, China
* Luyi Xing, Indiana University Bloomington, Bloomington, IN, USA
* Dongfang Zhao, Indiana University Bloomington, Bloomington, IN, USA
* Yifan Zhang, Indiana University Bloomington, Bloomington, IN, USA
* XiaoFeng Wang, Indiana University Bloomington, Bloomington, IN, USA
* Yijing Liu, Nankai University, Tianjin, China
* Kaimin Zheng, Huazhong University of Science and Technology, Wuhan, China
* Peyton Crnjak, Indiana University Bloomington, Bloomington, IN, USA
* Yuqing Zhang, University of Chinese Academy of Sciences & Xidian University & Hainan University, Beijing, China
* Deqing Zou, Huazhong University of Science and Technology, Wuhan, China
* Hai Jin, Huazhong University of Science and Technology, Wuhan, China
### Abstract
> An IoT device today can be managed through different channels, e.g., by its device manufacturer's app, or third-party channels such as Apple's Home app, or a smart speaker. Supporting each channel is a management framework integrated in the device and provided by different parties. For example, a device that integrates Apple HomeKit framework can be managed by Apple Home app. We call the management framework of this kind, including all its device- and cloud-side components, a device management channel (DMC). 4 third-party DMCs are widely integrated in today's IoT devices along with the device manufacturer's own DMC: HomeKit, Zigbee/Z-Wave compatible DMC, and smart-speaker Seamless DMC. Each of these DMCs is a standalone system that has full mandate on the device; however, if their security policies and control are not aligned, consequences can be serious, allowing a malicious user to utilize one DMC to bypass the security control imposed by the device owner on another DMC. We call such a problem Chaotic Device Management (Codema). This paper presents the first systematic study on Codema, based on a new model-guided approach. We purchased and analyzed 14 top-rated IoT devices and their integration and management of multiple DMCs. We found that Codema is both general and fundamental: these DMCs are generally not designed to coordinate with each other for security policies and control. The Codema problems enable the adversary to practically gain unauthorized access to sensitive devices (e.g., locks, garage doors, etc.). We reported our findings to affected parties (e.g., Apple, August, Philips Hue, ismartgate, Abode), which all acknowledged their importance. To mitigate this new threat, we designed and implemented CGuard, a new access control framework that device manufacturers can easily integrate into their IoT devices to protect end users. Our evaluation shows that CGuard is highly usable and acceptable to users, easy to adopt by manufacturers, and efficient and effective in security control.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484592](https://doi.org/10.1145/3460120.3484592)
## DroneKey: A Drone-Aided Group-Key Generation Scheme for Large-Scale IoT Networks.
### Authors
* Dianqi Han, Arizona State University, Tempe, AZ, USA
* Ang Li, Arizona State University, Tempe, AZ, USA
* Jiawei Li, Arizona State University, Tempe, AZ, USA
* Yan Zhang, Arizona State University, Tempe, AZ, USA
* Tao Li, Indiana University-Purdue University Indianapolis, Indianapolis, IN, USA
* Yanchao Zhang, Arizona State University, Tempe, AZ, USA
### Abstract
> The Internet of Things (IoT) networks are finding massive applications in mission-critical contexts. A group key is needed to encrypt and authenticate broadcast/multicast messages commonly seen in large-scale wireless networks. In this paper, we propose DroneKey, a novel drone-aided PHY-based Group-Key Generation (GKG) scheme for large-scale IoT networks. In DroneKey, a drone is dispatched to fly along random 3D trajectories and keep broadcasting standard wireless signals to refresh the group keys in the whole network. Every IoT device receives the broadcast signals from which to extract the Channel State Information (CSI) stream which captures the dynamic variations of the individual wireless channel between the IoT device and the drone. DroneKey explores a deep-learning approach to extract the hidden correlation among the CSI streams to establish a common group key. We thoroughly evaluate DroneKey with a prototype in both indoor and outdoor environments. We show that DroneKey can achieve a high key-generation rate of 89.5 bit/sec for 10 devices in contrast to 40 bit/sec in the state-of-art prior work. In addition, DroneKey is much more scalable and can support 100 devices in contrast to 10 nodes in the state-of-art prior work with comparable key-generate rates.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484789](https://doi.org/10.1145/3460120.3484789)
## You Make Me Tremble: A First Look at Attacks Against Structural Control Systems.
### Authors
* Abel Zambrano, Universidad de Los Andes, Bogotá, Colombia
* Alejandro Palacio Betancur, The Pennsylvania State University, University Park, PA, USA
* Luis Burbano, University of California, Santa Cruz, Santa Cruz, CA, USA
* Andres Felipe Niño, Universidad de Los Andes, Bogotá, Colombia
* Luis Felipe Giraldo, Universidad de Los Andes, Bogotá, Colombia
* Mariantonieta Gutierrez Soto, The Pennsylvania State University, University Park, PA, USA
* Jairo Giraldo, University of Utah, Salt Lake City, UT, USA
* Alvaro A. Cardenas, University of California, Santa Cruz, Santa Cruz, CA, USA
### Abstract
> This paper takes a first look at the potential consequences of cyberattacks against structural control systems. We design algorithms and implement them in a testbed and on well-known benchmark models for buildings and bridges. Our results show that attacks to structures equipped with semi-active and active vibration control systems can let the attacker oscillate the building or bridge at the resonance frequency, effectively generating threats to the structure and the people using it. We also implement and test the effectiveness of attack-detection systems.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3485386](https://doi.org/10.1145/3460120.3485386)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3485386](https://dl.acm.org/doi/pdf/10.1145/3460120.3485386)
## MaMIoT: Manipulation of Energy Market Leveraging High Wattage IoT Botnets.
### Authors
* Tohid Shekari, Georgia Institute of Technology, Atlanta, GA, USA
* Celine Irvene, Georgia Institute of Technology, Atlanta, GA, USA
* Alvaro A. Cardenas, University of California, Santa Cruz, Santa Cruz, CA, USA
* Raheem Beyah, Georgia Institute of Technology, Atlanta, GA, USA
### Abstract
> If a trader could predict price changes in the stock market better than other traders, she would make a fortune. Similarly in the electricity market, a trader that could predict changes in the electricity load, and thus electricity prices, would be able to make large profits. Predicting price changes in the electricity market better than other market participants is hard, but in this paper, we show that attackers can manipulate the electricity prices in small but predictable ways, giving them a competitive advantage in the market. Our attack is possible when the adversary controls a botnet of high wattage devices such as air conditioning units, which are able to abruptly change the total demand of the power grid. Such attacks are called Manipulation of Demand via IoT (MaDIoT) attacks. In this paper, we present a new variant of MaDIoT and name it Manipulation of Market via IoT (MaMIoT). MaMIoT is the first energy market manipulation cyberattack that leverages high wattage IoT botnets to slightly change the total demand of the power grid with the aim of affecting the electricity prices in the favor of specific market players. Using real-world data obtained from two major energy markets, we show that MaMIoT can significantly increase the profit of particular market players or financially damage a group of players depending on the motivation of the attacker.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484581](https://doi.org/10.1145/3460120.3484581)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484581](https://dl.acm.org/doi/pdf/10.1145/3460120.3484581)
## Aion: Enabling Open Systems through Strong Availability Guarantees for Enclaves.
### Authors
* Fritz Alder, KU Leuven, Leuven, Belgium
* Jo Van Bulck, KU Leuven, Leuven, Belgium
* Frank Piessens, KU Leuven, Leuven, Belgium
* Jan Tobias Mühlberg, KU Leuven, Leuven, Belgium
### Abstract
> Embedded Trusted Execution Environments (TEEs) can provide strong security for software in the IoT or in critical control systems. Approaches to combine this security with real-time and availability guarantees are currently missing. In this paper we present Aion, a configurable security architecture that provides a notion of guaranteed real-time execution for dynamically loaded enclaves. We implement preemptive multitasking and restricted atomicity on top of strong enclave software isolation and attestation. Our approach allows the hardware to enforce confidentiality and integrity protections, while a decoupled small enclaved scheduler software component can enforce availability and guarantee strict deadlines of a bounded number of protected applications, without necessarily introducing a notion of priorities amongst these applications. We implement a prototype on a light-weight TEE processor and provide a case study. Our implementation can guarantee that protected applications can handle interrupts and make progress with deterministic activation latencies, even in the presence of a strong adversary with arbitrary code execution capabilities.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484782](https://doi.org/10.1145/3460120.3484782)
## Rusted Anchors: A National Client-Side View of Hidden Root CAs in the Web PKI Ecosystem.
### Authors
* Yiming Zhang, Tsinghua University & Beijing National Research Center for Information Science and Technology, Beijing, China
* Baojun Liu, Tsinghua University, Beijing, China
* Chaoyi Lu, Tsinghua University & 360Netlab, Beijing, China
* Zhou Li, University of California, Irvine, Irvine, CA, USA
* Haixin Duan, Tsinghua University & QI-ANXIN Technology Research Institute, Beijing, China
* Jiachen Li, Tsinghua University, Beijing, China
* Zaifeng Zhang, 360Netlab, Beijing, China
### Abstract
> HTTPS secures communications in the web and heavily relies on the Web PKI for authentication. In the Web PKI, Certificate Authorities (CAs) are organizations that provide trust and issue digital certificates. Web clients rely on public root stores maintained by operating systems or browsers, with hundreds of audited CAs as trust anchors. However, as reported by security incidents, hidden root CAs beyond the public root programs have been imported into local root stores, which allows adversaries to gain trust from web clients. In this paper, we provide the first client-side, nation-wide view of hidden root CAs in the Web PKI ecosystem. Through cooperation with a leading browser vendor, we analyze certificate chains in web visits, together with their verification statuses, from volunteer users in 5 months. In total, over 1.17 million hidden root certificates are captured and they cause a profound impact from the angle of web clients and traffic. Further, we identify around 5 thousand organizations that hold hidden root certificates, including fake root CAs that impersonate large trusted ones. Finally, we highlight that the implementation of hidden root CAs and certificates is highly flawed, and issues such as weak keys and signature algorithms are prevalent. Our findings uncover that the ecosystem of hidden root CAs is massive and dynamic, and shed light on the landscape of Web PKI security. Finally, we call for immediate efforts from the community to review the integrity of local root stores.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484768](https://doi.org/10.1145/3460120.3484768)
## On Re-engineering the X.509 PKI with Executable Specification for Better Implementation Guarantees.
### Authors
* Joyanta Debnath, The University of Iowa, Iowa City, IA, USA
* Sze Yiu Chau, The Chinese University of Hong Kong, Hong Kong, Hong Kong
* Omar Chowdhury, The University of Iowa, Iowa City, IA, USA
### Abstract
> The X.509 Public-Key Infrastructure (PKI) standard is widely used as a scalable and flexible authentication mechanism. Flaws in X.509 implementations can make relying applications susceptible to impersonation attacks or interoperability issues. In practice, many libraries implementing X.509 have been shown to suffer from flaws that are due to noncompliance with the standard. Developing a compliant implementation is especially hindered by the design complexity, ambiguities, or under-specifications in the standard written in natural languages. In this paper, we set out to alleviate this unsatisfactory state of affairs by re-engineering and formalizing a widely used fragment of the X.509 standard specification, and then using it to develop a high-assurance implementation. Our X.509 specification re-engineering effort is guided by the principle of decoupling the syntactic requirements from the semantic requirements. For formalizing the syntactic requirements of X.509 standard, we observe that a restricted fragment of attribute grammar is sufficient. In contrast, for precisely capturing the semantic requirements imposed on the most-widely used X.509 features, we use quantifier-free first-order logic (QFFOL). Interestingly, using QFFOL results in an executable specification that can be efficiently enforced by an SMT solver. We use these and other insights to develop a high-assurance X.509 implementation named CERES. A comparison of CERES with 3 mainstream libraries (i.e., mbedTLS, OpenSSL, and GnuTLS) based on 2 million real certificate chains and 2 million synthetic certificate chains shows that CERES rightfully rejects malformed and invalid certificates.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484793](https://doi.org/10.1145/3460120.3484793)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484793](https://dl.acm.org/doi/pdf/10.1145/3460120.3484793)
## APECS: A Distributed Access Control Framework for Pervasive Edge Computing Services.
### Authors
* Sean Dougherty, Saint Louis University, Saint Louis, MO, USA
* Reza Tourani, Saint Louis University, Saint Louis, MO, USA
* Gaurav Panwar, New Mexico State University, Las Cruces, NM, USA
* Roopa Vishwanathan, New Mexico State University, Las Cruces, NM, USA
* Satyajayant Misra, New Mexico State University, Las Cruces, NM, USA
* Srikathyayani Srikanteswara, Intel Corp., Hillsboro, OR, USA
### Abstract
> Edge Computing is a new computing paradigm where applications operate at the network edge, providing low-latency services with augmented user and data privacy. A desirable goal for edge computing is pervasiveness, that is, enabling any capable and authorized entity at the edge to provide desired edge services--pervasive edge computing (PEC). However, efficient access control of users receiving services and edge servers handling user data, without sacrificing performance is a challenge. Current solutions, based on "always-on" authentication servers in the cloud, negate the latency benefits of services at the edge and also do not preserve user and data privacy. In this paper, we present APECS, an advanced access control framework for PEC, which allows legitimate users to utilize any available edge services without need for communication beyond the network edge. The APECS framework leverages multi-authority attribute-based encryption to create a federated authority, which delegates the authentication and authorization tasks to semi-trusted edge servers, thus eliminating the need for an "always-on" authentication server in the cloud. Additionally, APECS prevents access to encrypted content by unauthorized edge servers. We analyze and prove the security of APECS in the Universal Composability framework and provide experimental results on the GENI testbed to demonstrate the scalability and effectiveness of APECS.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484804](https://doi.org/10.1145/3460120.3484804)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484804](https://dl.acm.org/doi/pdf/10.1145/3460120.3484804)
## Let's Downgrade Let's Encrypt.
### Authors
* Tianxiang Dai, ATHENE Center & Fraunhofer SIT, Darmstadt, Germany
* Haya Shulman, ATHENE Center & Fraunhofer SIT, Darmstadt, Germany
* Michael Waidner, ATHENE Center; TU Darmstadt; & Fraunhofer SIT, Darmstadt, Germany
### Abstract
> Following the recent off-path attacks against PKI, Let's Encrypt deployed in 2020 domain validation from multiple vantage points to ensure security even against the stronger on-path MitM adversaries. The idea behind such distributed domain validation is that even if the adversary can hijack traffic of some vantage points, it will not be able to intercept traffic of all the vantage points to all the nameservers in a domain. In this work we show that two central design issues of the distributed domain validation of Let's Encrypt make it vulnerable to downgrade attacks: (1) the vantage points are selected from a small fixed set of vantage points, and (2) the way the vantage points select the nameservers in target domains can be manipulated by a remote adversary. We develop off-path methodologies, based on these observations, to launch downgrade attacks against Let's Encrypt. The downgrade attacks reduce the validation with 'multiple vantage points to multiple nameservers', to validation with 'multiple vantage points to a single attacker-selected nameserver'. Through experimental evaluations with Let's Encrypt and the 1M-Let's Encrypt-certified domains, we find that our off-path attacker can successfully launch downgrade attacks against more than 24.53% of the domains, rendering Let's Encrypt to use a single nameserver for validation with them. We then develop an automated off-path attack against the 'single-server'-domain validation for these 24.53% domains, to obtain fraudulent certificates for more than 107K domains, which constitute 10% of the 1M domains in our dataset. We also evaluate our attacks against other major CAs and compare the security and efforts needed to launch the attacks, to those needed to launch the attacks against Let's Encrypt. We provide recommendations for mitigations against our attacks.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484815](https://doi.org/10.1145/3460120.3484815)
## A Concrete Treatment of Efficient Continuous Group Key Agreement via Multi-Recipient PKEs.
### Authors
* Keitaro Hashimoto, Tokyo Institute of Technology & AIST, Tokyo, Japan
* Shuichi Katsumata, AIST, Tokyo, Japan
* Eamonn Postlethwaite, CWI, Amsterdam, Netherlands
* Thomas Prest, PQShield SAS, Paris, France
* Bas Westerbaan, Cloudflare, Amsterdam, Netherlands
### Abstract
> Continuous group key agreements (CGKAs) are a class of protocols that can provide strong security guarantees to secure group messaging protocols such as Signal and MLS. Protection against device compromise is provided by commit messages: at a regular rate, each group member may refresh their key material by uploading a commit message, which is then downloaded and processed by all the other members. In practice, propagating commit messages dominates the bandwidth consumption of existing CGKAs. We propose Chained CmPKE, a CGKA with an asymmetric bandwidth cost: in a group of N members, a commit message costs O(N) to upload and O(1) to download, for a total bandwidth cost of O(N). In contrast, TreeKEM costs (log N) in both directions, for a total cost (N log N). Our protocol relies on generic primitives, and is therefore readily post-quantum. We go one step further and propose post-quantum primitives that are tailored to \Chained CmPKE, which allows us to cut the growth rate of uploaded commit messages by two or three orders of magnitude compared to naive instantiations. Finally, we realize a software implementation of Chained CmPKE. Our experiments show that even for groups with a size as large as N = 2^10, commit messages can be computed and processed in less than 100 ms.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484817](https://doi.org/10.1145/3460120.3484817)
## Modular Design of Secure Group Messaging Protocols and the Security of MLS.
### Authors
* Joël Alwen, AWS Wickr, New York , NY, USA
* Sandro Coretti, IOHK, Zurich, Switzerland
* Yevgeniy Dodis, New York University, New York City, NY, USA
* Yiannis Tselekounis, University of Edinburgh, Edinburgh, United Kingdom
### Abstract
> The Messaging Layer Security (MLS) project is an IETF effort aiming to establish an industry-wide standard for secure group messaging (SGM). Its development is supported by several major secure-messaging providers (with a combined user base in the billions) and a growing body of academic research. MLS has evolved over many iterations to become a complex, non-trivial, yet relatively ad-hoc cryptographic protocol. In an effort to tame its complexity and build confidence in its security, past analyses of MLS have restricted themselves to sub-protocols of MLS---most prominently a type of sub-protocol embodying so-called continuous group key agreement (CGKA). However, to date the task of proving or even defining the security of the full MLS protocol has been left open. In this work, we fill in this missing piece. First, we formally capture the security of SGM protocols by defining a corresponding security game, which is parametrized by a safety predicate that characterizes the exact level of security achieved by a construction. Then, we cast MLS as an SGM protocol, showing how to modularly build it from the following three main components (and some additional standard cryptographic primitives) in a black-box fashion: (a) CGKA, (b) forward-secure group AEAD (FS-GAEAD), which is a new primitive and roughly corresponds to an "epoch'' of group messaging, and (c) a so-called PRF-PRNG, which is a two-input hash function that is a pseudorandom function (resp.\ generator with input) in its first (resp.\ second) input. Crucially, the security predicate for the SGM security of MLS can be expressed purely as a function of the security predicates of the underlying primitives, which allows to swap out any of the components and immediately obtain a security statement for the resulting SGM construction. Furthermore, we provide instantiations of all component primitives, in particular of CGKA with MLS's TreeKEM sub-protocol (which we prove adaptively secure) and of FS-GAEAD with a novel construction (which has already been adopted by MLS). Along the way we introduce a collection of new techniques, primitives, and results with applications to other SGM protocols and beyond. For example, we extend the Generalized Selective Decryption proof technique (which is central in CGKA literature) and prove adaptive security for another (practical) more secure CGKA protocol called RTreeKEM (Alwen et al.,\ CRYPTO '20). The modularity of our approach immediately yields a corollary characterizing the security of an SGM construction using RTreeKEM.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484820](https://doi.org/10.1145/3460120.3484820)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484820](https://dl.acm.org/doi/pdf/10.1145/3460120.3484820)
## Secure Complaint-Enabled Source-Tracking for Encrypted Messaging.
### Authors
* Charlotte Peale, Stanford University, Stanford, CA, USA
* Saba Eskandarian, UNC Chapel Hill, Chapel Hill, NC, USA
* Dan Boneh, Stanford University, Stanford, CA, USA
### Abstract
> While the end-to-end encryption properties of popular messaging schemes such as Whatsapp, Messenger, and Signal guarantee privacy for users, these properties also make it very difficult for messaging platforms to enforce any sort of content moderation. This can lead to the unchecked spread of malicious content such as misinformation on such platforms. In 2019, Tyagi et al. developed message traceback, which addresses this issue by allowing a messaging platform to recover the path of a forwarded message after a user reports it for malicious content. This paper presents an alternative to message traceback that offers more privacy to users and requires less platform-side storage. We term this approach source-tracking for encrypted messaging schemes. Source-tracking enables messaging platforms to provide the privacy guarantees expected from standard end-to-end encryption, but also helps hold the sources of malicious messages accountable: if malicious content is reported by a user, the source can be identified. We formalize security goals for source-tracking schemes and design and implement two source-tracking schemes with different security and performance tradeoffs.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484539](https://doi.org/10.1145/3460120.3484539)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484539](https://dl.acm.org/doi/pdf/10.1145/3460120.3484539)
## Fuzzy Message Detection.
### Authors
* Gabrielle Beck, Johns Hopkins University, Baltimore, MD, USA
* Julia Len, Cornell University, New York City, NY, USA
* Ian Miers, University of Maryland, College Park, MD, USA
* Matthew Green, Johns Hopkins University, Baltimore, MD, USA
### Abstract
> Many privacy-preserving protocols employ a primitive that allows a sender to "flag" a message to a recipient's public key, such that only the recipient (who possesses the corresponding secret key) can detect that the message is intended for their use. Examples of such protocols include anonymous messaging, privacy-preserving payments, and anonymous tracing. A limitation of the existing techniques is that recipients cannot easily outsource the detection of messages to a remote server, without revealing to the server the exact set of matching messages. In this work we propose a new class of cryptographic primitives called \em fuzzy message detection schemes. These schemes allow a recipient to derive a specialized message detection key that can identify correct messages, while also incorrectly identifying non-matching messages with a specific and chosen false positive rate p. This allows recipients to outsource detection work to an untrustworthy server, without revealing precisely which messages belong to the receiver. We show how to construct these schemes under a variety of assumptions; describe several applications of the new technique; and show that our schemes are efficient enough to use in real applications.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484545](https://doi.org/10.1145/3460120.3484545)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484545](https://dl.acm.org/doi/pdf/10.1145/3460120.3484545)
## Meteor: Cryptographically Secure Steganography for Realistic Distributions.
### Authors
* Gabriel Kaptchuk, Boston University, Boston, MA, USA
* Tushar M. Jois, Johns Hopkins University, Baltimore, MD, USA
* Matthew Green, Johns Hopkins University, Baltimore, MD, USA
* Aviel D. Rubin, Johns Hopkins University, Baltimore, MD, USA
### Abstract
> Despite a long history of research and wide-spread applications to censorship resistant systems, practical steganographic systems capable of embedding messages into realistic communication distributions, like text, do not exist. We identify two primary impediments to deploying universal steganography: (1) prior work leaves the difficult problem of finding samplers for non-trivial distributions unaddressed, and (2) prior constructions have impractical minimum entropy requirements. We investigate using generative models as steganographic samplers, as they represent the best known technique for approximating human communication. Additionally, we study methods to overcome the entropy requirement, including evaluating existing techniques and designing a new steganographic protocol, called Meteor. The resulting protocols are provably indistinguishable from honest model output and represent an important step towards practical steganographic communication for mundane communication channels. We implement Meteor and evaluate it on multiple computation environments with multiple generative models.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484550](https://doi.org/10.1145/3460120.3484550)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484550](https://dl.acm.org/doi/pdf/10.1145/3460120.3484550)
## Hiding the Lengths of Encrypted Messages via Gaussian Padding.
### Authors
* Jean Paul Degabriele, Technische Universität Darmstadt, Darmstadt, Germany
### Abstract
> Secure network protocols like TLS, QUIC, SSH and IPsec allow for additional padding to be used during encryption in order to hide message lengths. While it is impossible to conceal message lengths completely, without drastically degrading efficiency, such mechanisms aim at causing as much frustration as possible to the prospective attacker. However, none of the protocol specifications provide any guidance on how to select the length of this padding. Several works have highlighted how the leakage of message lengths can be exploited in attacks, but the converse problem of how to best defend against such attacks remains relatively understudied. We make this the focus of our work and present a formal treatment of length hiding security in a general setting. Prior work by Tezcan and Vaudenay suggested that sampling the padding length uniformly at random already achieves the best possible security. However we show that this is only true in the limited setting where only a single ciphertext is available to the adversary. If multiple ciphertexts are available to the adversary, then sampling the padding length according to a Gaussian distribution yields quantifiably better security for the same overhead. In fact, in this setting, uniformly random padding turns out to be among the worst possible choices. We confirm experimentally the superior performance of Gaussian padding over uniform padding in the context of the CRIME/BREACH attack.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484590](https://doi.org/10.1145/3460120.3484590)
## Android on PC: On the Security of End-user Android Emulators.
### Authors
* Fenghao Xu, The Chinese University of Hong Kong, Hong Kong, Hong Kong
* Siyu Shen, The Chinese University of Hong Kong, Hong Kong, Hong Kong
* Wenrui Diao, Shandong University, Qingdao, China
* Zhou Li, University of California, Irvine, Irvine, CA, USA
* Yi Chen, The Chinese University of Hong Kong, Hong Kong, Hong Kong
* Rui Li, Shandong University, Qingdao, China
* Kehuan Zhang, The Chinese University of Hong Kong, Hong Kong, Hong Kong
### Abstract
> Android emulators today are not only acting as a debugging tool for developers but also serving the massive end-users. These end-user Android emulators have attracted millions of users due to their advantages of running mobile apps on desktops and are especially appealing for mobile game players who demand larger screens and better performance. Besides, they commonly provide some customized assistant functionalities to improve the user experience, such as keyboard mapping and app installation from the host. To implement these services, emulators inevitably introduce communication channels between host OS and Android OS (in the Virtual Machine), thus forming a unique architecture which mobile phone does not have. However, it is unknown whether this architecture brings any new security risks to emulators. This paper performed a systematic study on end-user Android emulators and discovered a series of security flaws on communication channel authentication, permission control, and open interfaces. Attackers could exploit these flaws to bypass Android security mechanisms and escalate their privileges inside emulators, ultimately invading users' privacy, such as stealing valuable game accounts and credentials. To understand the impact of our findings, we studied six popular emulators and measured their flaws. The results showed that the issues are pervasive and could cause severe security consequences. We believe our work just shows the tip of the iceberg, and further research can be done to improve the security of this ecosystem.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484774](https://doi.org/10.1145/3460120.3484774)
## Ghost in the Binder: Binder Transaction Redirection Attacks in Android System Services.
### Authors
* Xiaobo Xiang, Institute of Information Engineering, Chinese Academy of Sciences; University of Chinese Academy of Sciences; Alpha Lab; and 360 Government & Enterprise Security Group, Beijing, China
* Ren Zhang, Nervos & Shandong Institute of Blockchain, Beijing, China
* Hanxiang Wen, Ant Group, Hanzhou, China
* Xiaorui Gong, Institute of Information Engineering, Chinese Academy of Sciences & University of Chinese Academy of Sciences, Beijing, China
* Baoxu Liu, Institute of Information Engineering, Chinese Academy of Sciences & University of Chinese Academy of Sciences, Beijing, China
### Abstract
> Binder, the main mechanism for Android applications to access system services, adopts a client-server role model in its design, assuming the system service as the server and the application as the client. However, a growing number of scenarios require the system service to act as a Binder client and to send queries to a Binder server possibly instantiated by the application. Departing from this role-reversal possibility, this paper proposes the Binder Transaction Redirection (BiTRe) attacks, where the attacker induces the system service to transact with a customized Binder server and then attacks from the Binder server---an often unprotected direction. We demonstrate the scale of the attack surface by enumerating the utilizable Binder interfaces in BiTRe, and discover that the attack surface grows with the Android release version. In Android 11, more than 70% of the Binder interfaces are affected by or can be utilized in BiTRe. We prove the attacks' feasibility by (1) constructing a prototype system that can automatically generate executable programs to reach a substantial part of the attack surface, and (2) identifying a series of vulnerabilities, which are acknowledged by Google and assigned ten CVEs.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484801](https://doi.org/10.1145/3460120.3484801)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484801](https://dl.acm.org/doi/pdf/10.1145/3460120.3484801)
## Dissecting Residual APIs in Custom Android ROMs.
### Authors
* Zeinab El-Rewini, University of Waterloo, Waterloo, Canada
* Yousra Aafer, University of Waterloo, Waterloo, Canada
### Abstract
> Many classic software vulnerabilities (e.g., Heartbleed) are rooted in unused code. In this work, we aim to understand whether unused Android functionality may similarly open unnecessary attack opportunities. Our study focuses on OEM-introduced APIs, which are added and removed erratically through different device models and releases. This instability contributes to the production of bloated custom APIs, some of which may not even be used on a particular device. We call such unused APIs Residuals. In this work, we conduct the first large-scale investigation of custom Android Residuals to understand whether they may lead to access control vulnerabilities. Our investigation is driven by the intuition that it is challenging for vendor developers to ensure proper protection of Residuals. Since they are deemed unnecessary, Residuals are naturally overlooked during integration and maintenance. This is particularly exacerbated by the complexities of Android's ever-evolving access control mechanism. To facilitate the study at large, we propose a set of analysis techniques that detect and evaluate Residuals' access control enforcement. Our techniques feature a synergy between application and framework program analysis to recognize potential Residuals in specially curated ROM samples. The Residual implementations are then statically analyzed to detect potential evolution-induced access control vulnerabilities. Our study reveals that Residuals are prevalent among OEMs. More importantly, we find that their presence may even lead to security-critical vulnerabilities.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3485374](https://doi.org/10.1145/3460120.3485374)
## VIP: Safeguard Value Invariant Property for Thwarting Critical Memory Corruption Attacks.
### Authors
* Mohannad Ismail, Virginia Polytechnic Institute and State University, Blacksburg, VA, USA
* Jinwoo Yom, Virginia Polytechnic Institute and State University, Blacksburg, VA, USA
* Christopher Jelesnianski, Virginia Polytechnic Institute and State University, Blacksburg, VA, USA
* Yeongjin Jang, Oregon State University, Corvallis, OR, USA
* Changwoo Min, Virginia Polytechnic Institute and State University, Blacksburg, VA, USA
### Abstract
> Most modern software attacks are rooted in memory corruption vulnerabilities, which are capable of altering security-sensitive data (e.g., function pointers) to unintended values. This paper introduces a new security property, the Value Invariant Property (VIP), and HyperSpace, our prototype that enforces VIP on security-sensitive data. HyperSpace safeguards the integrity of "data values" instead of enforcing control/data flow, allowing for low runtime overhead, yet defeating critical attacks effectively. We implement four representative security policies including Control Flow Integrity (VIP-CFI), Code Pointer Integrity (VIP-CPI), Virtual function Table protection (VIP-VTPtr), and heap metadata protection based on HyperSpace. We evaluate HyperSpace with SPEC CPU2006 benchmarks and real-world applications (NGINX and PostgreSQL) and test how HyperSpace defeats memory corruption-based attacks, including three real-world exploits and six attacks that bypass existing defenses (COOP, heap exploits, etc.). Our experimental evaluation shows that HyperSpace successfully stops all these attacks with low runtime overhead: 0.88% and 6.18% average performance overhead for VIP-CFI and VIP-CPI, respectively, and overall approximately 13.18% memory overhead with VIP-CPI in SPEC CPU2006.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3485376](https://doi.org/10.1145/3460120.3485376)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3485376](https://dl.acm.org/doi/pdf/10.1145/3460120.3485376)
## Detecting Missed Security Operations Through Differential Checking of Object-based Similar Paths.
### Authors
* Dinghao Liu, Zhejiang University, Hangzhou, China
* Qiushi Wu, University of Minnesota, Twin Cities, MN, USA
* Shouling Ji, Zhejiang University & Binjiang Institution of Zhejiang University, Hangzhou, China
* Kangjie Lu, University of Minnesota, Twin Cities, MN, USA
* Zhenguang Liu, Zhejiang University, Hangzhou, China
* Jianhai Chen, Zhejiang University, Hangzhou, China
* Qinming He, Zhejiang University, Hangzhou, China
### Abstract
> Missing a security operation such as a bound check has been a major cause of security-critical bugs. Automatically checking whether the code misses a security operation in large programs is challenging since it has to understand whether the security operation is indeed necessary in the context. Recent methods typically employ cross-checking to identify deviations as security bugs, which collects functionally similar program slices and infers missed security operations through majority-voting. An inherent limitation of such approaches is that they heavily rely on a substantial number of similar code pieces to enable cross-checking. In practice, many code pieces are unique, and thus we may be unable to find adequate similar code snippets to utilize cross-checking. In this paper, we present IPPO (Inconsistent Path Pairs as a bug Oracle), a static analysis framework for detecting security bugs based on differential checking. IPPO defines several novel rules to identify code paths that share similar semantics with respect to an object, and collects them as similar-path pairs. It then investigates the path pairs for identifying inconsistent security operations with respect to the object. If one path in a path pair enforces a security operation while the other does not, IPPO reports it as a potential security bug. By utilizing on object-based path-similarity analysis, IPPO achieves a higher precision, compared to conventional code-similarity analysis methods. Through differential checking of a similar-path pair, IPPO eliminates the requirement of constructing a large number of similar code pieces, addressing the limitation of traditional cross-checking approaches. We implemented IPPO and extensively evaluated it on four widely used open-source programs: Linux kernel, OpenSSL library, FreeBSD kernel, and PHP. IPPO found 154, 5, 1, and 1 new security bugs in the above systems, respectively. We have submitted patches for all these bugs, and 136 of them have been accepted by corresponding maintainers. The results confirm the effectiveness and usefulness of IPPO in practice.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3485373](https://doi.org/10.1145/3460120.3485373)
## DETER: Denial of Ethereum Txpool sERvices.
### Authors
* Kai Li, Syracuse University, Syracuse, NY, USA
* Yibo Wang, Syracuse University, Syracuse, NY, USA
* Yuzhe Tang, Syracuse University, Syracuse, NY, USA
### Abstract
> On an Ethereum node, txpool (a.k.a. mempool) is a buffer storing unconfirmed transactions and controls what downstream services can see, such as mining and transaction propagation. This work presents the first security study on Ethereum txpool designs. We discover flawed transaction handling in all known Ethereum clients (e.g., Geth), and by exploiting it, design a series of low-cost denial-of-service attacks named DETER. A DETER attacker can disable a remote Ethereum node's txpool and deny the critical downstream services in mining, transaction propagation, Gas station, etc. By design, DETER attacks incur zero or low Ether cost. The attack can be amplified to cause global disruption to an Ethereum network by targeting centralized network services there (e.g., mining pools and transaction relay services). By evaluating local nodes, we verify the effectiveness and low cost of DETER attacks on all known Ethereum clients and in major testnets. We design non-trivial measurement methods against blackbox mainnet nodes and conduct light probes to confirm that popular mainnet services are exploitable under DETER attacks. We propose mitigation schemes that reduce a DETER attack's success rate down to zero while preserving the miners' revenue.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3485369](https://doi.org/10.1145/3460120.3485369)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3485369](https://dl.acm.org/doi/pdf/10.1145/3460120.3485369)
## SyncAttack: Double-spending in Bitcoin Without Mining Power.
### Authors
* Muhammad Saad, University of Central Florida, Orlando, FL, USA
* Songqing Chen, George Mason University, Virginia, VA, USA
* David Mohaisen, University of Central Florida, Orlando, FL, USA
### Abstract
> The existing Bitcoin security research has mainly followed the security models in [22, 35], which stipulate that an adversary controls some mining power in order to violate the blockchain consistency property (i.e., through a double-spend attack). These models, however, largely overlooked the impact of the realistic network synchronization, which can be manipulated given the permissionless nature of the network. In this paper, we revisit the security of Bitcoin blockchain by incorporating the network synchronization into the security model and evaluating that in practice. Towards this goal, we propose the ideal functionality for the Bitcoin network synchronization and specify bounds on the network outdegree and the block propagation delay in order to preserve the consistency property. By contrasting the ideal functionality against measurements, we find deteriorating network synchronization reported by Bitnodes and a notable churn rate with 10% of the nodes arriving and departing from the network daily. Motivated by these findings, we propose SyncAttack, an attack that allows an adversary to violate the Bitcoin blockchain consistency property and double-spend without using any mining power. Moreover, during our measurements, we discover weaknesses in Bitcoin that can be exploited to reduce the cost of SyncAttack, deanonymize Bitcoin transactions, and reduce the effective network hash rate. We also observe events that suggest malicious nodes are exploiting those weaknesses in the network. Finally, we patch those weaknesses to mitigate SyncAttack and associated risks.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484568](https://doi.org/10.1145/3460120.3484568)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484568](https://dl.acm.org/doi/pdf/10.1145/3460120.3484568)
## Multi-Threshold Byzantine Fault Tolerance.
### Authors
* Atsuki Momose, Intelligent Systems Laboratory, SECOM CO., LTD. & Nagoya University, Mitaka, Tokyo, Japan
* Ling Ren, University of Illinois at Urbana-Champaign, Urbana, IL, USA
### Abstract
> Classic Byzantine fault tolerant (BFT) protocols are designed for a specific timing model, most often one of the following: synchronous, asynchronous or partially synchronous. It is well known that the timing model and fault tolerance threshold present inherent trade-offs. Synchronous protocols tolerate up to n/2 Byzantine faults, while asynchronous or partially synchronous protocols tolerate only up to n/3 Byzantine faults. In this work, we generalize the fault thresholds of BFT and introduce a new problem called multi-threshold BFT. Multi-threshold BFT has four separate fault thresholds for safety and liveness under synchrony and asynchrony (or partial-synchrony), respectively. Decomposing the fault thresholds in this way allows us to design protocols that provide meaningful fault tolerance under both synchrony and asynchrony (or partial synchrony). We establish tight fault thresholds bounds for multi-threshold BFT and present protocols achieving them. As an example, we show a BFT state machine replication (SMR) protocol that tolerates up to 2n/3 faults for safety under synchrony while tolerating up to n/3 faults for other scenarios (liveness under synchrony as well as safety and liveness under partial synchrony). This is strictly stronger than classic partially synchronous SMR protocols. We also present a general framework to transform known partially synchronous or asynchronous BFT SMR protocols to additionally enjoy the optimal 2n/3 fault tolerance for safety under synchrony.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484554](https://doi.org/10.1145/3460120.3484554)
## Securing Parallel-chain Protocols under Variable Mining Power.
### Authors
* Xuechao Wang, University of Illinois at Urbana-Champaign, Champaign, IL, USA
* Viswa Virinchi Muppirala, University of Washington at Seattle, Seattle, WA, USA
* Lei Yang, Massachusetts Institute of Technology, Cambridge, MA, USA
* Sreeram Kannan, University of Washington at Seattle, Seattle, WA, USA
* Pramod Viswanath, University of Illinois at Urbana-Champaign, Champaign, IL, USA
### Abstract
> Several emerging proof-of-work (PoW) blockchain protocols rely on a ''parallel-chain'' architecture for scaling, where instead of a single chain, multiple chains are run in parallel and aggregated. A key requirement of practical PoW blockchains is to adapt to mining power variations over time (Bitcoin's total mining power has increased by a 1014 factor over the decade). In this paper, we consider the design of provably secure parallel-chain protocols which can adapt to such mining power variations. The Bitcoin difficulty adjustment rule adjusts the difficulty target of block mining periodically to get a constant mean inter-block time. While superficially simple, the rule has proved itself to be sophisticated and successfully secure, both in practice and in theory. We show that natural adaptations of the Bitcoin adjustment rule to the parallel-chain case open the door to subtle, but catastrophic safety and liveness breaches. We uncover a meta-design principle that allow us to design variable mining difficulty protocols for three popular PoW blockchain proposals (Prism, OHIE, Fruitchains) inside a common rubric. The principle has three components: (M1) a pivot chain, based on which blocks in all chains choose difficulty, (M2) a monotonicity condition for referencing pivot chain blocks and (M3) translating additional protocol aspects from using levels (depth) to using "difficulty levels". We show that protocols employing a subset of these principles may have catastrophic failures. The security of the designs is also proved using a common rubric -- the key technical challenge involves analyzing the interaction between the pivot chain and the other chains, as well as bounding the sudden changes in difficulty target experienced in non-pivot chains. We empirically investigate the responsivity of the new mining difficulty rule via simulations based on historical Bitcoin data, and find that the protocol very effectively controls the forking rate across all the chains.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3485254](https://doi.org/10.1145/3460120.3485254)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3485254](https://dl.acm.org/doi/pdf/10.1145/3460120.3485254)
## BFT Protocol Forensics.
### Authors
* Peiyao Sheng, University of Illinois at Urbana-Champaign, Champaign, IL, USA
* Gerui Wang, University of Illinois at Urbana-Champaign, Champaign, IL, USA
* Kartik Nayak, Duke University, Durham, NC, USA
* Sreeram Kannan, University of Washington, Seattle, WA, USA
* Pramod Viswanath, University of Illinois at Urbana-Champaign, Champaign, IL, USA
### Abstract
> Byzantine fault-tolerant (BFT) protocols allow a group of replicas to come to consensus even when some of the replicas are Byzantine faulty. There exist multiple BFT protocols to securely tolerate an optimal number of faults t under different network settings. However, if the number of faults f exceeds t then security could be violated. In this paper we mathematically formalize the study of forensic support of BFT protocols: we aim to identify (with cryptographic integrity) as many of the malicious replicas as possible and in as distributed manner as possible. Our main result is that forensic support of BFT protocols depends heavily on minor implementation details that do not affect the protocol's security or complexity. Focusing on popular BFT protocols (PBFT, HotStuff, Algorand) we exactly characterize their forensic support, showing that there exist minor variants of each protocol for which the forensic supports vary widely. We show strong forensic support capability of LibraBFT, the consensus protocol of Diem cryptocurrency; our lightweight forensic module implemented on a Diem client is open-sourced and is under active consideration for deployment in Diem. Finally, we show that all secure BFT protocols designed for 2t+1 replicas communicating over a synchronous network forensic support is inherently nonexistent; this impossibility result holds for all BFT protocols and even if one has access to the states of all replicas (including Byzantine ones).
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484566](https://doi.org/10.1145/3460120.3484566)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484566](https://dl.acm.org/doi/pdf/10.1145/3460120.3484566)
## Supply-Chain Vulnerability Elimination via Active Learning and Regeneration.
### Authors
* Nikos Vasilakis, Massachusetts Institute of Technology, Cambridge, MA, USA
* Achilles Benetopoulos, University of California, Santa Cruz, Santa Cruz, CA, USA
* Shivam Handa, Massachusetts Institute of Technology, Cambridge, MA, USA
* Alizee Schoen, Massachusetts Institute of Technology, Cambridge, MA, USA
* Jiasi Shen, Massachusetts Institute of Technology, Cambridge, MA, USA
* Martin C. Rinard, Massachusetts Institute of Technology, Cambridge, MA, USA
### Abstract
> Software supply-chain attacks target components that are integrated into client applications. Such attacks often target widely-used components, with the attack taking place via operations (for example, file system or network accesses) that do not affect those aspects of component behavior that the client observes. We propose new active library learning and regeneration (ALR) techniques for inferring and regenerating the client-observable behavior of software components. Using increasingly sophisticated rounds of exploration, ALR generates inputs, provides these inputs to the component, and observes the resulting outputs to infer a model of the component's behavior as a program in a domain-specific language. We present Harp, an ALR system for string processing components. We apply Harp to successfully infer and regenerate string-processing components written in JavaScript and C/C++. Our results indicate that, in the majority of cases, Harp completes the regeneration in less than a minute, remains fully compatible with the original library, and delivers performance indistinguishable from the original library. We also demonstrate that Harp can eliminate vulnerabilities associated with libraries targeted in several highly visible security incidents, specifically event-stream, left-pad, and string-compare.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484736](https://doi.org/10.1145/3460120.3484736)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484736](https://dl.acm.org/doi/pdf/10.1145/3460120.3484736)
## XSinator.com: From a Formal Model to the Automatic Evaluation of Cross-Site Leaks in Web Browsers.
### Authors
* Lukas Knittel, Ruhr University Bochum, Bochum, Germany
* Christian Mainka, Ruhr University Bochum, Bochum, Germany
* Marcus Niemietz, Niederrhein University of Applied Sciences, Krefeld, Germany
* Dominik Trevor Noß, Ruhr University Bochum, Bochum, Germany
* Jörg Schwenk, Ruhr University Bochum, Bochum, Germany
### Abstract
> Cross-Site Leaks (XS-Leaks) describe a client-side bug that allows an attacker to collect side-channel information from a cross-origin HTTP resource. They are a significant threat to Internet privacy since simply visiting a web page may reveal if the victim is a drug addict or leak a sexual orientation. Numerous different attack vectors, as well as mitigation strategies, have been proposed, but a clear and systematic understanding of XS-Leak' root causes is still missing. Recently, Sudhodanan et al. gave a first overview of XS-Leak at NDSS 2020. We build on their work by presenting the first formal model for XS-Leaks. Our comprehensive analysis of known XS-Leaks reveals that all of them fit into this new model. With the help of this formal approach, we (1) systematically searched for new XS-Leak attack classes, (2) implemented XSinator.com, a tool to automatically evaluate if a given web browser is vulnerable to XS-Leaks, and (3) systematically evaluated mitigations for XS-Leaks. We found 14 new attack classes, evaluated the resilience of 56 different browser/OS combinations against a total of 34 XS-Leaks, and propose a completely novel methodology to mitigate XS-Leaks.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484739](https://doi.org/10.1145/3460120.3484739)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484739](https://dl.acm.org/doi/pdf/10.1145/3460120.3484739)
## DoubleX: Statically Detecting Vulnerable Data Flows in Browser Extensions at Scale.
### Authors
* Aurore Fass, CISPA Helmholtz Center for Information Security, Saarbruecken, Germany
* Dolière Francis Somé, CISPA Helmholtz Center for Information Security, Saarbruecken, Germany
* Michael Backes, CISPA Helmholtz Center for Information Security, Saarbruecken, Germany
* Ben Stock, CISPA Helmholtz Center for Information Security, Saarbruecken, Germany
### Abstract
> Browser extensions are popular to enhance users' browsing experience. By design, they have access to security- and privacy-critical APIs to perform tasks that web applications cannot traditionally do. Even though web pages and extensions are isolated, they can communicate through messages. Specifically, a vulnerable extension can receive messages from another extension or web page, under the control of an attacker. Thus, these communication channels are a way for a malicious actor to elevate their privileges to the capabilities of an extension, which can lead to, e.g., universal cross-site scripting or sensitive user data exfiltration. To automatically detect such security and privacy threats in benign-but-buggy extensions, we propose our static analyzer DoubleX. DoubleX defines an Extension Dependence Graph (EDG), which abstracts extension code with control and data flows, pointer analysis, and models the message interactions within and outside of an extension. This way, we can leverage this graph to track and detect suspicious data flows between external actors and sensitive APIs in browser extensions. We evaluated DoubleX on 154,484 Chrome extensions, where it flags 278 extensions as having a suspicious data flow. Overall, we could verify that 89% of these flows can be influenced by external actors (i.e., an attacker). Based on our threat model, we subsequently demonstrate exploitability for 184 extensions. Finally, we evaluated DoubleX on a labeled vulnerable extension set, where it accurately detects almost 93% of known flaws.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484745](https://doi.org/10.1145/3460120.3484745)
## T-Reqs: HTTP Request Smuggling with Differential Fuzzing.
### Authors
* Bahruz Jabiyev, Northeastern University, Boston, MA, USA
* Steven Sprecher, Northeastern University, Boston, MA, USA
* Kaan Onarlioglu, Akamai Technologies, Cambridge, MA, USA
* Engin Kirda, Northeastern University, Boston, MA, USA
### Abstract
> HTTP Request Smuggling (HRS) is an attack that exploits the HTTP processing discrepancies between two servers deployed in a proxy-origin configuration, allowing attackers to smuggle hidden requests through the proxy. While this idea is not new, HRS is soaring in popularity due to recently revealed novel exploitation techniques and real-life abuse scenarios. In this work, we step back from the highly-specific exploits hogging the spotlight, and present the first work that systematically explores HRS within a scientific framework. We design an experiment infrastructure powered by a novel grammar-based differential fuzzer, test 10 popular server/proxy/CDN technologies in combinations, identify pairs that result in processing discrepancies, and discover exploits that lead to HRS. Our experiment reveals previously unknown ways to manipulate HTTP requests for exploitation, and for the first time documents the server pairs prone to HRS.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3485384](https://doi.org/10.1145/3460120.3485384)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3485384](https://dl.acm.org/doi/pdf/10.1145/3460120.3485384)
## Preventing Dynamic Library Compromise on Node.js via RWX-Based Privilege Reduction.
### Authors
* Nikos Vasilakis, Massachusetts Institute of Technology, Cambridge, MA, USA
* Cristian-Alexandru Staicu, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Grigoris Ntousakis, TU Crete, Chania, Greece
* Konstantinos Kallas, University of Pennsylvania, Philadelphia, PA, USA
* Ben Karel, Aarno Labs, Cambridge, MA, USA
* André DeHon, University of Pennsylvania, Philadelphia, PA, USA
* Michael Pradel, University of Stuttgart, Stuttgart, Germany
### Abstract
> Third-party libraries ease the development of large-scale software systems. However, libraries often execute with significantly more privilege than needed to complete their task. Such additional privilege is sometimes exploited at runtime via inputs passed to a library, even when the library itself is not actively malicious. We present Mir, a system addressing dynamic compromise by introducing a fine-grained read-write-execute (RWX) permission model at the boundaries of libraries: every field of every free variable name in the context of an imported library is governed by a permission set. To help specify the permissions given to existing code, Mir's automated inference generates default permissions by analyzing how libraries are used by their clients. Applied to over 1,000 JavaScript libraries for Node.js, Mir shows practical security (61/63 attacks mitigated), performance (2.1s for static analysis and +1.93% for dynamic enforcement), and compatibility (99.09%) characteristics---and enables a novel quantification of privilege reduction.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484535](https://doi.org/10.1145/3460120.3484535)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484535](https://dl.acm.org/doi/pdf/10.1145/3460120.3484535)
## Spinner: Automated Dynamic Command Subsystem Perturbation.
### Authors
* Meng Wang, University of Virginia, Charlottesville, VA, USA
* Chijung Jung, University of Virginia, Charlottesville, VA, USA
* Ali Ahad, University of Virginia, Charlottesville, VA, USA
* Yonghwi Kwon, University of Virginia, Charlottesville, VA, USA
### Abstract
> Injection attacks have been a major threat to web applications. Despite the significant effort in thwarting injection attacks, protection against injection attacks remains challenging due to the sophisticated attacks that exploit the existing protection techniques' design and implementation flaws. In this paper, we develop Spinner, a system that provides general protection against input injection attacks, including OS/shell command, SQL, and XXE injection. Instead of focusing on detecting malicious inputs, Spinner constantly randomizes underlying subsystems so that injected inputs (e.g., commands or SQL queries) that are not properly randomized will not be executed, hence prevented. We revisit the design and implementation choices of previous randomization-based techniques and develop a more robust and practical protection against various sophisticated input injection attacks. To handle complex real-world applications, we develop a bidirectional analysis that combines forward and backward static analysis techniques to identify in-tended commands or SQL queries to ensure the correct execution of the randomized target program. We implement Spinner for the shell command processor and two different database engines(MySQL and SQLite) and in diverse programming languages including C/C++, PHP, JavaScript and Lua. Our evaluation results on 42real-world applications including 27 vulnerable ones show that it effectively prevents a variety of input injection attacks with low runtime overhead (around 5%).
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484577](https://doi.org/10.1145/3460120.3484577)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484577](https://dl.acm.org/doi/pdf/10.1145/3460120.3484577)
## FakeWake: Understanding and Mitigating Fake Wake-up Words of Voice Assistants.
### Authors
* Yanjiao Chen, Zhejiang University, Hangzhou, China
* Yijie Bai, Zhejiang University, Hangzhou, China
* Richard Mitev, Technical University of Darmstadt, Darmstadt, Germany
* Kaibo Wang, Zhejiang University, Hangzhou, China
* Ahmad-Reza Sadeghi, Technical University of Darmstadt, Darmstadt, Germany
* Wenyuan Xu, Zhejiang University, Hangzhou, China
### Abstract
> In the area of Internet of Things (IoT), voice assistants have become an important interface to operate smart speakers, smartphones, and even automobiles. To save power and protect user privacy, voice assistants send commands to the cloud only if a small set of preregistered wake-up words are detected. However, voice assistants are shown to be vulnerable to the FakeWake phenomena, whereby they are inadvertently triggered by innocent-sounding fuzzy words. In this paper, we present a systematic investigation of the FakeWake phenomena from three aspects. To start with, we design the first fuzzy word generator to automatically and efficiently produce fuzzy words instead of searching through a swarm of audio materials.We manage to generate 965 fuzzy words covering 8 most popular English and Chinese smart speakers. To explain the causes underlying the FakeWake phenomena, we construct an interpretable tree-based decision model, which reveals phonetic features that contribute to false acceptance of fuzzy words by wake-up word detectors. Finally, we propose remedies to mitigate the effect of FakeWake. The results show that the strengthened models are not only resilient to fuzzy words but also achieve better overall performance on original training datasets.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3485365](https://doi.org/10.1145/3460120.3485365)
## Robust Detection of Machine-induced Audio Attacks in Intelligent Audio Systems with Microphone Array.
### Authors
* Zhuohang Li, University of Tennessee, Knoxville, TN, USA
* Cong Shi, Rutgers University, New Brunswick, NJ, USA
* Tianfang Zhang, Rutgers University, New Brunswick, NJ, USA
* Yi Xie, Rutgers University, New Brunswick, NJ, USA
* Jian Liu, University of Tennessee, Knoxville, TN, USA
* Bo Yuan, Rutgers University, New Brunswick, NJ, USA
* Yingying Chen, Rutgers University, New Brunswick, NJ, USA
### Abstract
> With the popularity of intelligent audio systems in recent years, their vulnerabilities have become an increasing public concern. Existing studies have designed a set of machine-induced audio attacks, such as replay attacks, synthesis attacks, hidden voice commands, inaudible attacks, and audio adversarial examples, which could expose users to serious security and privacy threats. To defend against these attacks, existing efforts have been treating them individually. While they have yielded reasonably good performance in certain cases, they can hardly be combined into an all-in-one solution to be deployed on the audio systems in practice. Additionally, modern intelligent audio devices, such as Amazon Echo and Apple HomePod, usually come equipped with microphone arrays for far-field voice recognition and noise reduction. Existing defense strategies have been focusing on single- and dual-channel audio, while only few studies have explored using multi-channel microphone array for defending specific types of audio attack. Motivated by the lack of systematic research on defending miscellaneous audio attacks and the potential benefits of multi-channel audio, this paper builds a holistic solution for detecting machine-induced audio attacks leveraging multi-channel microphone arrays on modern intelligent audio systems. Specifically, we utilize magnitude and phase spectrograms of multi-channel audio to extract spatial information and leverage a deep learning model to detect the fundamental difference between human speech and adversarial audio generated by the playback machines. Moreover, we adopt an unsupervised domain adaptation training framework to further improve the model's generalizability in new acoustic environments. Evaluation is conducted under various settings on a public multi-channel replay attack dataset and a self-collected multi-channel audio attack dataset involving 5 types of advanced audio attacks. The results show that our method can achieve an equal error rate (EER) as low as 6.6% in detecting a variety of machine-induced attacks. Even in new acoustic environments, our method can still achieve an EER as low as 8.8%.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484755](https://doi.org/10.1145/3460120.3484755)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484755](https://dl.acm.org/doi/pdf/10.1145/3460120.3484755)
## Glowworm Attack: Optical TEMPEST Sound Recovery via a Device's Power Indicator LED.
### Authors
* Ben Nassi, Ben-Gurion University of the Negev, Be'er Sheva, Israel
* Yaron Pirutin, Ben-Gurion University of the Negev, Be'er Sheva, Israel
* Tomer Galor, Ben-Gurion University of the Negev, Be'er Sheva, Israel
* Yuval Elovici, Ben-Gurion University of the Negev, Be'er Sheva, Israel
* Boris Zadov, Ben-Gurion University of the Negev, Be'er Sheva, Israel
### Abstract
> Two main classes of optical TEMPEST attacks against the confidentiality of information processed/delivered by devices have been demonstrated in the past two decades; the first class includes methods for recovering content from monitors, and the second class includes methods for recovering keystrokes from physical and virtual keyboards. In this paper, we identify a new class of optical TEMPEST attacks: recovering sound by analyzing optical emanations from a device's power indicator LED. We analyze the response of the power indicator LED of various devices to sound and show that there is an optical correlation between the sound that is played by connected speakers and the intensity of their power indicator LED due to the facts that: (1) the power indicator LED of various devices is connected directly to the power line, (2) the intensity of a device's power indicator LED is correlative to the power consumption, and (3) many devices lack a dedicated means of countering this phenomenon. Based on our findings, we present the Glowworm attack, an optical TEMPEST attack that can be used by eavesdroppers to recover sound by analyzing optical measurements obtained via an electro-optical sensor directed at the power indicator LED of various devices (e.g., speakers, USB hub splitters, and microcontrollers). We propose an optical-audio transformation (OAT) to recover sound in which we isolate the speech from optical measurements obtained by directing an electro-optical sensor at a device's power indicator LED. Finally, we test the performance of the Glowworm attack in various experimental setups and show that an eavesdropper can apply the attack to recover speech from speakers' power LED indicator with good intelligibility from a distance of 15 meters and with fair intelligibility from 35 meters.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484775](https://doi.org/10.1145/3460120.3484775)
## CapSpeaker: Injecting Voices to Microphones via Capacitors.
### Authors
* Xiaoyu Ji, Zhejiang University, Hangzhou, China
* Juchuan Zhang, Zhejiang University, Hangzhou, China
* Shui Jiang, Zhejiang University, Hangzhou, China
* Jishen Li, Zhejiang University, Hangzhou, China
* Wenyuan Xu, Zhejiang University, Hangzhou, China
### Abstract
> Voice assistants can be manipulated by various malicious voice commands, yet existing attacks require a nearby speaker to play the attack commands. In this paper, we show that even when no speakers are available, we can play malicious commands by utilizing the capacitors inside electronic devices, i.e., we convert capacitors into speakers and call it CapSpeaker. Essentially, capacitors can emit acoustic noises due to the inverse piezoelectric effect, i.e., varying the voltage across a capacitor can make it vibrate and thus emit acoustic noises. Forcing capacitors to play malicious voice commands is challenging because (1) the frequency responses of capacitors as speakers have poor performance in the range of audible voices, and (2) we have no direct control over the voltage across capacitors to manipulate their emitting sounds. To overcome the challenges, we use a PWM-based modulation scheme to embed the malicious audio onto a high-frequency carrier, e.g., above 20 kHz, and we create malware that can induce the right voltage across the capacitors such that CapSpeaker plays the chosen malicious commands. We conducted extensive experiments with 2 LED lamps (a modified one and a commercial one) and 5 victim devices (iPhone 4s, iPad mini 5, Huawei Nova 5i, etc.). Evaluation results demonstrate that CapSpeaker is feasible at a distance up to 10.5 cm, triggering a smartphone to receive voice commands, e.g., "open the door''.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3485389](https://doi.org/10.1145/3460120.3485389)
## I Can See the Light: Attacks on Autonomous Vehicles Using Invisible Lights.
### Authors
* Wei Wang, University of Maryland, Baltimore County, Baltimore, MD, USA
* Yao Yao, University of Maryland, Baltimore County, Baltimore, MD, USA
* Xin Liu, University of Maryland, Baltimore County, Baltimore, MD, USA
* Xiang Li, Cambricon SingGo, Nanjing, China
* Pei Hao, University of Maryland, Baltimore County, Baltimore, MD, USA
* Ting Zhu, University of Maryland, Baltimore County, Baltimore, MD, USA
### Abstract
> The camera is one of the most important sensors for an autonomous vehicle (AV) to perform Environment Perception and Simultaneous Localization and Mapping (SLAM). To secure the camera, current autonomous vehicles not only utilize the data gathered from multiple sensors (e.g., Camera, Ultrasonic Sensor, Radar, or LiDAR) for environment perception and SLAM but also require the human driver to always realize the driving situation, which can effectively defend against previous attack approaches (i.e., creating visible fake objects or introducing perturbations to the camera by using advanced deep learning techniques). Different from their work, in this paper, we in-depth investigate the features of Infrared light and introduce a new security challenge called I-Can-See-the-Light- Attack (ICSL Attack) that can alter environment perception results and introduce SLAM errors to the AV. Specifically, we found that the invisible infrared lights (IR light) can successfully trigger the image sensor while human eyes cannot perceive IR lights. Moreover, the IR light appears magenta color in the camera, which triggers different pixels from the ambient visible light and can be selected as key points during the AV's SLAM process. By leveraging these features, we explore to i) generate invisible traffic lights, ii) create fake invisible objects, iii) ruin the in-car user experience, and iv) introduce SLAM errors to the AV. We implement the ICSL Attack by using off-the-shelf IR light sources and conduct an extensive evaluation on Tesla Model 3 and an enterprise-level autonomous driving platform under various environments and settings. We demonstrate the effectiveness of the ICSL Attack and prove that current autonomous vehicle companies have not yet considered the ICSL Attack, which introduces severe security issues. To secure the AV, by exploring unique features of the IR light, we propose a software-based detection module to defend against the ICSL Attack.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484766](https://doi.org/10.1145/3460120.3484766)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484766](https://dl.acm.org/doi/pdf/10.1145/3460120.3484766)
## Can We Use Arbitrary Objects to Attack LiDAR Perception in Autonomous Driving?
### Authors
* Yi Zhu, State University of New York at Buffalo, Buffalo, NY, USA
* Chenglin Miao, University of Georgia, Athens, GA, USA
* Tianhang Zheng, University of Toronto, Toronto, ON, Canada
* Foad Hajiaghajani, State University of New York at Buffalo, Buffalo, NY, USA
* Lu Su, Purdue University, West Lafayette, IN, USA
* Chunming Qiao, State University of New York at Buffalo, Buffalo, NY, USA
### Abstract
> As an effective way to acquire accurate information about the driving environment, LiDAR perception has been widely adopted in autonomous driving. The state-of-the-art LiDAR perception systems mainly rely on deep neural networks (DNNs) to achieve good performance. However, DNNs have been demonstrated vulnerable to adversarial attacks. Although there are a few works that study adversarial attacks against LiDAR perception systems, these attacks have some limitations in feasibility, flexibility, and stealthiness when being performed in real-world scenarios. In this paper, we investigate an easier way to perform effective adversarial attacks with high flexibility and good stealthiness against LiDAR perception in autonomous driving. Specifically, we propose a novel attack framework based on which the attacker can identify a few adversarial locations in the physical space. By placing arbitrary objects with reflective surface around these locations, the attacker can easily fool the LiDAR perception systems. Extensive experiments are conducted to evaluate the performance of the proposed attack, and the results show that our proposed attack can achieve more than 90% success rate. In addition, our real-world study demonstrates that the proposed attack can be easily performed using only two commercial drones. To the best of our knowledge, this paper presents the first study on the effect of adversarial locations on LiDAR perception models' behaviors, the first investigation on how to attack LiDAR perception systems using arbitrary objects with reflective surface, and the first attack against LiDAR perception systems using commercial drones in physical world. Potential defense strategies are also discussed to mitigate the proposed attacks.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3485377](https://doi.org/10.1145/3460120.3485377)
## ZKCPlus: Optimized Fair-exchange Protocol Supporting Practical and Flexible Data Exchange.
### Authors
* Yun Li, Institute for Network Sciences and Cyberspace of Tsinghua University, Beijing, China
* Cun Ye, K-Orange/SECBIT Labs, Suzhou, China
* Yuguang Hu, SECBIT Labs, Beijing, China
* Ivring Morpheus, SECBIT Labs, Beijing, China
* Yu Guo, SECBIT Labs, Suzhou, China
* Chao Zhang, Institute for Network Science and Cyberspace of Tsinghua University, Beijing, China
* Yupeng Zhang, Texas A&M University, Texas, TX, USA
* Zhipeng Sun, SECBIT Labs, Suzhou, China
* Yiwen Lu, SECBIT Labs, Suzhou, China
* Haodi Wang, Beijing Normal University, Beijing, China
### Abstract
> Devising a fair-exchange protocol for digital goods has been an appealing line of research in the past decades. The Zero-Knowledge Contingent Payment (ZKCP) protocol first achieves fair exchange in a trustless manner with the aid of the Bitcoin network and zero-knowledge proofs. However, it incurs setup issues and substantial proving overhead, and has difficulties handling complicated validation of large-scale data. In this paper, we propose an improved solution ZKCPlus for practical and flexible fair exchange. ZKCPlus incorporates a new commit-and-prove non-interactive zero-knowledge (CP-NIZK) argument of knowledge under standard discrete logarithmic assumption, which is prover-efficient for data-parallel computations. With this argument we avoid the setup issues of ZKCP and reduce seller's proving overhead, more importantly enable the protocol to handle complicated data validations. We have implemented a prototype of ZKCPlus and built several applications atop it. We rework a ZKCP's classic application of trading sudoku solutions, and ZKCPlus achieves 21-67 times improvement in seller efficiency than ZKCP, with only milliseconds of setup time and 1 MB public parameters. In particular, our CP-NIZK argument shows an order of magnitude higher proving efficiency than the zkSNARK adopted by ZKCP. We also built a realistic application of trading trained CNN models. For a 3-layer CNN containing 8,620 parameters, it takes less than 1 second to prove and verify an inference computation, and also about 1 second to deliver the parameters, which is very promising for practical use.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484558](https://doi.org/10.1145/3460120.3484558)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484558](https://dl.acm.org/doi/pdf/10.1145/3460120.3484558)
## Limbo: Efficient Zero-knowledge MPCitH-based Arguments.
### Authors
* Cyprien Delpech de Saint Guilhem, KU Leuven, Leuven, Belgium
* Emmanuela Orsini, KU Leuven, Leuven, Belgium
* Titouan Tanguy, KU Leuven, Leuven, Belgium
### Abstract
> This work introduces a new interactive oracle proof system based on the MPC-in-the-Head paradigm. To improve concrete efficiency and offer flexibility between computation time and communication size, a generic proof construction based on multi-round MPC protocols is proposed, instantiated with a specific protocol and implemented and compared to similar proof systems. Performance gains over previous work derive from a multi-party multiplication check optimized for the multi-round and MPC-in-the-Head settings. Of most interest among implementation optimizations is the use of identical randomness across repeated MPC protocol executions in order to accelerate computation without excessive cost to the soundness error. The new system creates proofs of SHA-256 pre-images of 43KB in 53ms with 16 MPC parties, or 23KB in 188ms for 128 parties. As a signature scheme, the non-interactive variant produces signatures, based on the AES-128 circuit, of 18KB in about 4ms; this is 20% faster and 32% larger than the Picnic3 scheme (13kB in 5.3ms for 16 parties) which is based on the 90% smaller LowMC circuit.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484595](https://doi.org/10.1145/3460120.3484595)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484595](https://dl.acm.org/doi/pdf/10.1145/3460120.3484595)
## "I need a better description": An Investigation Into User Expectations For Differential Privacy.
### Authors
* Rachel Cummings, Columbia University, New York, NY, USA
* Gabriel Kaptchuk, Boston University, Boston, MA, USA
* Elissa M. Redmiles, Max Planck Institute for Software Systems, Saarbrücken, Germany
### Abstract
> Despite recent widespread deployment of differential privacy, relatively little is known about what users think of differential privacy. In this work, we seek to explore users' privacy expectations related to differential privacy. Specifically, we investigate (1) whether users care about the protections afforded by differential privacy, and (2) whether they are therefore more willing to share their data with differentially private systems. Further, we attempt to understand (3) users' privacy expectations of the differentially private systems they may encounter in practice and (4) their willingness to share data in such systems. To answer these questions, we use a series of rigorously conducted surveys (n=2424). We find that users care about the kinds of information leaks against which differential privacy protects and are more willing to share their private information when the risks of these leaks are less likely to happen. Additionally, we find that the ways in which differential privacy is described in-the-wild haphazardly set users' privacy expectations, which can be misleading depending on the deployment. We synthesize our results into a framework for understanding a user's willingness to share information with differentially private systems, which takes into account the interaction between the user's prior privacy concerns and how differential privacy is described.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3485252](https://doi.org/10.1145/3460120.3485252)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3485252](https://dl.acm.org/doi/pdf/10.1145/3460120.3485252)
## An Inside Look into the Practice of Malware Analysis.
### Authors
* Miuyin Yong Wong, Georgia Institute of Technology, Atlanta, GA, USA
* Matthew Landen, Georgia Institute of Technology, Atlanta, GA, USA
* Manos Antonakakis, Georgia Institute of Technology, Atlanta, GA, USA
* Douglas M. Blough, Georgia Institute of Technology, Atlanta, GA, USA
* Elissa M. Redmiles, Max Planck Institute for Software Systems, Saarbrücken, Germany
* Mustaque Ahamad, Georgia Institute of Technology, Atlanta, GA, USA
### Abstract
> Malware analysis aims to understand how malicious software carries out actions necessary for a successful attack and identify the possible impacts of the attack. While there has been substantial research focused on malware analysis and it is an important tool for practitioners in industry, the overall malware analysis process used by practitioners has not been studied. As a result, an understanding of common malware analysis workflows and their goals is lacking. A better understanding of these workflows could help identify new research directions that are impactful in practice. In order to better understand malware analysis processes, we present the results of a user study with 21 professional malware analysts with diverse backgrounds who work at 18 different companies. The study focuses on answering three research questions: (1) What are the different objectives of malware analysts in practice?, (2) What comprises a typical professional malware analyst workflow, and (3) When analysts decide to conduct dynamic analysis, what factors do they consider when setting up a dynamic analysis system? Based on participant responses, we propose a taxonomy of malware analysts and identify five common analysis workflows. We also identify challenges that analysts face during the different stages of their workflow. From the results of the study, we propose two potential directions for future research, informed by challenges described by the participants. Finally, we recommend guidelines for developers of malware analysis tools to consider in order to improve the usability of such tools.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484759](https://doi.org/10.1145/3460120.3484759)
## The Effect of Google Search on Software Security: Unobtrusive Security Interventions via Content Re-ranking.
### Authors
* Felix Fischer, Technical University Munich, Munich, Germany
* Yannick Stachelscheid, Technical University Munich, Munich, Germany
* Jens Grossklags, Technical University Munich, Munich, Germany
### Abstract
> Google Search is where most developers start their Web journey looking for code examples to reuse. It is highly likely that code that is linked to the top results will be among those candidates that find their way into production software. However, as a large amount of secure and insecure code has been identified on the Web, the question arises how the providing webpages are ranked by Google and whether the ranking has an effect on software security. We investigate how secure and insecure cryptographic code examples from Stack Overflow are ranked by Google Search. Our results show that insecure code ends up in the top results and is clicked on more often. There is at least a 22.8% chance that one out of the top three Google Search results leads to insecure code. We introduce security-based re-ranking, where the rank of Google Search is updated based on the security and relevance of the provided source code in the results. We tested our re-ranking approach and compared it to Google's original ranking in an online developer study. Participants that used our modified search engine to look for help online submitted more secure and functional results, with statistical significance. In contrast to prior work on helping developers to write secure code, security-based re-ranking completely eradicates the requirement for any action performed by developers. Our intervention remains completely invisible, and therefore the probability of adoption is greatly increased. We believe security-based re-ranking allows Internet-wide improvement of code security and prevents the far-reaching spread of insecure code found on the Web.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484763](https://doi.org/10.1145/3460120.3484763)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484763](https://dl.acm.org/doi/pdf/10.1145/3460120.3484763)
## 12 Angry Developers - A Qualitative Study on Developers' Struggles with CSP.
### Authors
* Sebastian Roth, CISPA Helmholtz Center for Information Security & Saarland University, Saarbrücken, Germany
* Lea Gröber, CISPA Helmholtz Center for Information Security & Saarland University, Saarbrücken, Germany
* Michael Backes, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Katharina Krombholz, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Ben Stock, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### Abstract
> The Web has improved our ways of communicating, collaborating, teaching, and entertaining us and our fellow human beings. However, this cornerstone of our modern society is also one of the main targets of attacks, most prominently Cross-Site Scripting (XSS). A correctly crafted Content Security Policy (CSP) is capable of effectively mitigating the effect of those Cross-Site Scripting attacks. However, research has shown that the vast majority of all policies in the wild are trivially bypassable. To uncover the root causes behind the omnipresent misconfiguration of CSP, we conducted a qualitative study involving 12 real-world Web developers. By combining a semi-structured interview, a drawing task, and a programming task, we were able to identify the participant's misconceptions regarding the attacker model covered by CSP as well as roadblocks for secure deployment or strategies used to create a CSP.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484780](https://doi.org/10.1145/3460120.3484780)
## Subpopulation Data Poisoning Attacks.
### Authors
* Matthew Jagielski, Northeastern University, Boston, MA, USA
* Giorgio Severi, Northeastern University, Boston, MA, USA
* Niklas Pousette Harger, Northeastern University, Boston, MA, USA
* Alina Oprea, Northeastern University, Boston, MA, USA
### Abstract
> Machine learning systems are deployed in critical settings, but they might fail in unexpected ways, impacting the accuracy of their predictions. Poisoning attacks against machine learning induce adversarial modification of data used by a machine learning algorithm to selectively change its output when it is deployed. In this work, we introduce a novel data poisoning attack called a subpopulation attack, which is particularly relevant when datasets are large and diverse. We design a modular framework for subpopulation attacks, instantiate it with different building blocks, and show that the attacks are effective for a variety of datasets and machine learning models. We further optimize the attacks in continuous domains using influence functions and gradient optimization methods. Compared to existing backdoor poisoning attacks, subpopulation attacks have the advantage of inducing misclassification in naturally distributed data points at inference time, making the attacks extremely stealthy. We also show that our attack strategy can be used to improve upon existing targeted attacks. We prove that, under some assumptions, subpopulation attacks are impossible to defend against, and empirically demonstrate the limitations of existing defenses against our attacks, highlighting the difficulty of protecting machine learning against this threat.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3485368](https://doi.org/10.1145/3460120.3485368)
## Hidden Backdoors in Human-Centric Language Models.
### Authors
* Shaofeng Li, Shanghai Jiao Tong University, Shanghai, China
* Hui Liu, Shanghai Jiao Tong University, Shanghai, China
* Tian Dong, Shanghai Jiao Tong University, Shanghai, China
* Benjamin Zi Hao Zhao, The University of New South Wales & CSIRO-Data61, Sydney, NSW, Australia
* Minhui Xue, The University of Adelaide, Adelaide, SA, Australia
* Haojin Zhu, Shanghai Jiao Tong University, Shanghai, China
* Jialiang Lu, Shanghai Jiao Tong University, Shanghai, China
### Abstract
> Natural language processing (NLP) systems have been proven to be vulnerable to backdoor attacks, whereby hidden features (backdoors) are trained into a language model and may only be activated by specific inputs (called triggers), to trick the model into producing unexpected behaviors. In this paper, we create covert and natural triggers for textual backdoor attacks, hidden backdoors, where triggers can fool both modern language models and human inspection. We deploy our hidden backdoors through two state-of-the-art trigger embedding methods. The first approach via homograph replacement, embeds the trigger into deep neural networks through the visual spoofing of lookalike characters replacement. The second approach uses subtle differences between text generated by language models and real natural text to produce trigger sentences with correct grammar and high fluency. We demonstrate that the proposed hidden backdoors can be effective across three downstream security-critical NLP tasks, representative of modern human-centric NLP systems, including toxic comment detection, neural machine translation (NMT), and question answering (QA). Our two hidden backdoor attacks can achieve an Attack Success Rate (ASR) of at least 97% with an injection rate of only 3% in toxic comment detection, 95.1% ASR in NMT with less than 0.5% injected data, and finally 91.12% ASR against QA updated with only 27 poisoning data samples on a model previously trained with 92,024 samples (0.029%). We are able to demonstrate the adversary's high success rate of attacks, while maintaining functionality for regular users, with triggers inconspicuous by the human administrators.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484576](https://doi.org/10.1145/3460120.3484576)
## Backdoor Pre-trained Models Can Transfer to All.
### Authors
* Lujia Shen, Zhejiang University, Hangzhou, China
* Shouling Ji, Zhejiang University, Hangzhou, China
* Xuhong Zhang, Zhejiang University, Hangzhou, China
* Jinfeng Li, Zhejiang University, Hangzhou, China
* Jing Chen, Wuhan University, Wuhan, China
* Jie Shi, Huawei International, Singapore, Singapore, Singapore
* Chengfang Fang, Huawei International, Singapore, Singapore, Singapore
* Jianwei Yin, Zhejiang University, Hangzhou, China
* Ting Wang, Pennsylvania State University, State College, PA, USA
### Abstract
> Pre-trained general-purpose language models have been a dominating component in enabling real-world natural language processing (NLP) applications. However, a pre-trained model with backdoor can be a severe threat to the applications. Most existing backdoor attacks in NLP are conducted in the fine-tuning phase by introducing malicious triggers in the targeted class, thus relying greatly on the prior knowledge of the fine-tuning task. In this paper, we propose a new approach to map the inputs containing triggers directly to a predefined output representation of the pre-trained NLP models, e.g., a predefined output representation for the classification token in BERT, instead of a target label. It can thus introduce backdoor to a wide range of downstream tasks without any prior knowledge. Additionally, in light of the unique properties of triggers in NLP, we propose two new metrics to measure the performance of backdoor attacks in terms of both effectiveness and stealthiness. Our experiments with various types of triggers show that our method is widely applicable to different fine-tuning tasks (classification and named entity recognition) and to different models (such as BERT, XLNet, BART), which poses a severe threat. Furthermore, by collaborating with the popular online model repository Hugging Face, the threat brought by our method has been confirmed. Finally, we analyze the factors that may affect the attack performance and share insights on the causes of the success of our backdoor attack.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3485370](https://doi.org/10.1145/3460120.3485370)
## Feature-Indistinguishable Attack to Circumvent Trapdoor-Enabled Defense.
### Authors
* Chaoxiang He, Huazhong University of Science and Technology, Wuhan, Hubei, China
* Bin Benjamin Zhu, Microsoft Research Asia, Beijing, China
* Xiaojing Ma, Huazhong University of Science and Technology, Wuhan, Hubei, China
* Hai Jin, Huazhong University of Science and Technology, Wuhan, Hubei, China
* Shengshan Hu, Huazhong University of Science and Technology, Wuhan, Hubei, China
### Abstract
> Deep neural networks (DNNs) are vulnerable to adversarial attacks. A great effort has been directed to developing effective defenses against adversarial attacks and finding vulnerabilities of proposed defenses. A recently proposed defense called Trapdoor-enabled Detection (TeD) deliberately injects trapdoors into DNN models to trap and detect adversarial examples targeting categories protected by TeD. TeD can effectively detect existing state-of-the-art adversarial attacks. In this paper, we propose a novel black-box adversarial attack on TeD, called Feature-Indistinguishable Attack (FIA). It circumvents TeD by crafting adversarial examples indistinguishable in the feature (i.e., neuron-activation) space from benign examples in the target category. To achieve this goal, FIA jointly minimizes the distance to the expectation of feature representations of benign samples in the target category and maximizes the distances to positive adversarial examples generated to query TeD in the preparation phase. A constraint is used to ensure that the feature vector of a generated adversarial example is within the distribution of feature vectors of benign examples in the target category. Our extensive empirical evaluation with different configurations and variants of TeD indicates that our proposed FIA can effectively circumvent TeD. FIA opens a door for developing much more powerful adversarial attacks. The FIA code is available at: https://github.com/CGCL-codes/FeatureIndistinguishableAttack.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3485378](https://doi.org/10.1145/3460120.3485378)
## DetectorGuard: Provably Securing Object Detectors against Localized Patch Hiding Attacks.
### Authors
* Chong Xiang, Princeton University, Princeton, NJ, USA
* Prateek Mittal, Princeton University, Princeton, NJ, USA
### Abstract
> State-of-the-art object detectors are vulnerable to localized patch hiding attacks, where an adversary introduces a small adversarial patch to make detectors miss the detection of salient objects. The patch attacker can carry out a physical-world attack by printing and attaching an adversarial patch to the victim object; thus, it imposes a challenge for the safe deployment of object detectors. In this paper, we propose DetectorGuard as the first general framework for building provably robust object detectors against localized patch hiding attacks. DetectorGuard is inspired by recent advancements in robust image classification research; we ask: can we adapt robust image classifiers for robust object detection? Unfortunately, due to their task difference, an object detector naively adapted from a robust image classifier 1) may not necessarily be robust in the adversarial setting or 2) even maintain decent performance in the clean setting. To address these two issues and build a high-performance robust object detector, we propose an objectness explaining strategy: we adapt a robust image classifier to predict objectness (i.e., the probability of an object being present) for every image location and then explain each objectness using the bounding boxes predicted by a conventional object detector. If all objectness is well explained, we output the predictions made by the conventional object detector; otherwise, we issue an attack alert. Notably, our objectness explaining strategy enables provable robustness for "free": 1) in the adversarial setting, we formally prove the end-to-end robustness of DetectorGuard on certified objects, i.e., it either detects the object or triggers an alert, against any patch hiding attacker within our threat model; 2) in the clean setting, we have almost the same performance as state-of-the-art object detectors. Our evaluation on the PASCAL VOC, MS COCO, and KITTI datasets further demonstrates that DetectorGuard achieves the first provable robustness against localized patch hiding attacks at a negligible cost (< 1%) of clean performance.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484757](https://doi.org/10.1145/3460120.3484757)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484757](https://dl.acm.org/doi/pdf/10.1145/3460120.3484757)
## DeepAID: Interpreting and Improving Deep Learning-based Anomaly Detection in Security Applications.
### Authors
* Dongqi Han, Tsinghua University, Beijing, China
* Zhiliang Wang, Tsinghua University, Beijing, China
* Wenqi Chen, Tsinghua University, Beijing, China
* Ying Zhong, Tsinghua University, Beijing, China
* Su Wang, Tsinghua University, Beijing, China
* Han Zhang, Tsinghua University, Beijing, China
* Jiahai Yang, Tsinghua University, Beijing, China
* Xingang Shi, Tsinghua University, Beijing, China
* Xia Yin, Tsinghua University, Beijing, China
### Abstract
> Unsupervised Deep Learning (DL) techniques have been widely used in various security-related anomaly detection applications, owing to the great promise of being able to detect unforeseen threats and superior performance provided by Deep Neural Networks (DNN). However, the lack of interpretability creates key barriers to the adoption of DL models in practice. Unfortunately, existing interpretation approaches are proposed for supervised learning models and/or non-security domains, which are unadaptable for unsupervised DL models and fail to satisfy special requirements in security domains. In this paper, we propose DeepAID, a general framework aiming to (1) interpret DL-based anomaly detection systems in security domains, and (2) improve the practicality of these systems based on the interpretations. We first propose a novel interpretation method for unsupervised DNNs by formulating and solving well-designed optimization problems with special constraints for security domains. Then, we provide several applications based on our Interpreter as well as a model-based extension Distiller to improve security systems by solving domain-specific problems. We apply DeepAID over three types of security-related anomaly detection systems and extensively evaluate our Interpreter with representative prior works. Experimental results show that DeepAID can provide high-quality interpretations for unsupervised DL models while meeting the special requirements of security domains. We also provide several use cases to show that DeepAID can help security operators to understand model decisions, diagnose system mistakes, give feedback to models, and reduce false positives.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484589](https://doi.org/10.1145/3460120.3484589)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484589](https://dl.acm.org/doi/pdf/10.1145/3460120.3484589)
## Structural Attack against Graph Based Android Malware Detection.
### Authors
* Kaifa Zhao, The Hong Kong Polytechnic University, Hong Kong, China
* Hao Zhou, The Hong Kong Polytechnic University, Hong Kong, China
* Yulin Zhu, The Hong Kong Polytechnic University, Hong Kong, China
* Xian Zhan, The Hong Kong Polytechnic University, Hong Kong, China
* Kai Zhou, The Hong Kong Polytechnic University, Hong Kong, China
* Jianfeng Li, The Hong Kong Polytechnic University, Hong Kong, China
* Le Yu, The Hong Kong Polytechnic University, Hong Kong, China
* Wei Yuan, Huazhong University of Science and Technology, Wuhan, China
* Xiapu Luo, The Hong Kong Polytechnic University, Hong Kong, China
### Abstract
> Malware detection techniques achieve great success with deeper insight into the semantics of malware. Among existing detection techniques, function call graph (FCG) based methods achieve promising performance due to their prominent representations of malware's functionalities. Meanwhile, recent adversarial attacks not only perturb feature vectors to deceive classifiers (i.e., feature-space attacks) but also investigate how to generate real evasive malware (i.e., problem-space attacks). However, existing problem-space attacks are limited due to their inconsistent transformations between feature space and problem space. In this paper, we propose the first structural attack against graph-based Android malware detection techniques, which addresses the inverse-transformation problem [1] between feature-space attacks and problem-space attacks. We design a Heuristic optimization model integrated with Reinforcement learning framework to optimize our structural ATtack (HRAT). HRAT includes four types of graph modifications (i.e., inserting and deleting nodes, adding edges and rewiring) that correspond to four manipulations on apps (i.e., inserting and deleting methods, adding call relation, rewiring). Through extensive experiments on over 30k Android apps, HRAT demonstrates outstanding attack performance on both feature space (over 90% attack success rate) and problem space (up to 100% attack success rate in most cases). Besides, the experiment results show that combing multiple attack behaviors strategically makes the attack more effective and efficient.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3485387](https://doi.org/10.1145/3460120.3485387)
## PalmTree: Learning an Assembly Language Model for Instruction Embedding.
### Authors
* Xuezixiang Li, University of California, Riverside, Riverside, CA, USA
* Yu Qu, University of California, Riverside, Riverside, CA, USA
* Heng Yin, University of California, Riverside, Riverside, CA, USA
### Abstract
> Deep learning has demonstrated its strengths in numerous binary analysis tasks, including function boundary detection, binary code search, function prototype inference, value set analysis, etc. When applying deep learning to binary analysis tasks, we need to decide what input should be fed into the neural network model. More specifically, we need to answer how to represent an instruction in a fixed-length vector. The idea of automatically learning instruction representations is intriguing, but the existing schemes fail to capture the unique characteristics of disassembly. These schemes ignore the complex intra-instruction structures and mainly rely on control flow in which the contextual information is noisy and can be influenced by compiler optimizations. In this paper, we propose to pre-train an assembly language model called PalmTree for generating general-purpose instruction embeddings by conducting self-supervised training on large-scale unlabeled binary corpora. PalmTree utilizes three pre-training tasks to capture various characteristics of assembly language. These training tasks overcome the problems in existing schemes, thus can help to generate high-quality representations. We conduct both intrinsic and extrinsic evaluations, and compare PalmTree with other instruction embedding schemes. PalmTree has the best performance for intrinsic metrics, and outperforms the other instruction embedding schemes for all downstream tasks.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484587](https://doi.org/10.1145/3460120.3484587)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484587](https://dl.acm.org/doi/pdf/10.1145/3460120.3484587)
## A One-Pass Distributed and Private Sketch for Kernel Sums with Applications to Machine Learning at Scale.
### Authors
* Benjamin Coleman, Rice University, Houston, TX, USA
* Anshumali Shrivastava, Rice University, Houston, TX, USA
### Abstract
> Differential privacy is a compelling privacy definition that explains the privacy-utility tradeoff via formal, provable guarantees. In machine learning, we often wish to release a function over a dataset while preserving differential privacy. Although there are general algorithms to solve this problem for any function, such methods can require hours to days to run on moderately sized datasets. As a result, most private algorithms address task-dependent functions for specific applications. In this work, we propose a general purpose private sketch, or small summary of the dataset, that supports machine learning tasks such as regression, classification, density estimation, and more. Our sketch is ideal for large-scale distributed settings because it is simple to implement, mergeable, and can be created with a one-pass streaming algorithm. At the heart of our proposal is the reduction of many machine learning objectives to kernel sums. Our sketch estimates these sums using randomized contingency tables that are indexed with locality-sensitive hashing. Existing alternatives for kernel sum estimation scale poorly, often exponentially slower with an increase in dimensions. In contrast, our sketch can quickly run on large high-dimensional datasets, such as the 65 million node Friendster graph, in a single pass that takes less than 20 minutes, which is otherwise infeasible with any known alternative. Exhaustive experiments show that the privacy-utility tradeoff of our method is competitive with existing algorithms, but at an order-of-magnitude smaller computational cost. We expect that our sketch will be practically useful for differential privacy in distributed, large-scale machine learning settings.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3485255](https://doi.org/10.1145/3460120.3485255)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3485255](https://dl.acm.org/doi/pdf/10.1145/3460120.3485255)
## COINN: Crypto/ML Codesign for Oblivious Inference via Neural Networks.
### Authors
* Siam Umar Hussain, University of California, San Diego, La Jolla, CA, USA
* Mojan Javaheripi, University of California, San Diego, La Jolla, CA, USA
* Mohammad Samragh, University of California, San Diego, La Jolla, CA, USA
* Farinaz Koushanfar, University of California, San Diego, La Jolla, CA, USA
### Abstract
> We introduce COINN - an efficient, accurate, and scalable framework for oblivious deep neural network (DNN) inference in the two-party setting. In our system, DNN inference is performed without revealing the client's private inputs to the server or revealing server's proprietary DNN weights to the client. To speedup the secure inference while maintaining a high accuracy, we make three interlinked innovations in the plaintext and ciphertext domains: (i) we develop a new domain-specific low-bit quantization scheme tailored for high-efficiency ciphertext computation, (ii) we construct novel techniques for increasing data re-use in secure matrix multiplication allowing us to gain significant performance boosts through factored operations, and (iii) we propose customized cryptographic protocols that complement our optimized DNNs in the ciphertext domain. By co-optimization of the aforesaid components, COINN brings an unprecedented level of efficiency to the setting of oblivious DNN inference, achieving an end-to-end runtime speedup of 4.7×14.4× over the state-of-the-art. We demonstrate the scalability of our proposed methods by optimizing complex DNNs with over 100 layers and performing oblivious inference in the Billion-operation regime for the challenging ImageNet dataset. Our framework is available at https://github.com/ACESLabUCSD/COINN.git.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484797](https://doi.org/10.1145/3460120.3484797)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484797](https://dl.acm.org/doi/pdf/10.1145/3460120.3484797)
## Locating the Security Patches for Disclosed OSS Vulnerabilities with Vulnerability-Commit Correlation Ranking.
### Authors
* Xin Tan, Fudan University, Shanghai, China
* Yuan Zhang, Fudan University, Shanghai, China
* Chenyuan Mi, Fudan University, Shanghai, China
* Jiajun Cao, Fudan University, Shanghai, China
* Kun Sun, George Mason University, Fairfax, VA, USA
* Yifan Lin, Fudan University, Shanghai, China
* Min Yang, Fudan University, Shanghai, China
### Abstract
> Security patches play an important role in defending against the security threats brought by the increasing OSS vulnerabilities. However, the collection of security patches still remains a challenging problem. Existing works mainly adopt a matching-based design that uses auxiliary information in CVE/NVD to reduce the search scope of patch commits. However, our preliminary study shows that these approaches can only cover a small part of disclosed OSS vulnerabilities (about 12%-53%) even with manual assistance. To facilitate the collection of OSS security patches, this paper proposes a ranking-based approach, named PatchScout, which ranks the code commits in the OSS code repository based on their correlations to a given vulnerability. By exploiting the broad correlations between a vulnerability and code commits, patch commits are expected to be put to front positions in the ranked results. Compared with existing works, our approach could help to locate more security patches and meet a balance between the patch coverage and the manual efforts involved. We evaluate PatchScout with 685 OSS CVEs and the results show that it helps to locate 92.70% patches with acceptable manual workload. To further demonstrate the utility of PatchScout, we perform a study on 5 popular OSS projects and 225 CVEs to understand the patch deployment practice across branches, and we obtain many new findings.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484593](https://doi.org/10.1145/3460120.3484593)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484593](https://dl.acm.org/doi/pdf/10.1145/3460120.3484593)
## Facilitating Vulnerability Assessment through PoC Migration.
### Authors
* Jiarun Dai, Fudan University, Shanghai, UNK, China
* Yuan Zhang, Fudan University, Shanghai, UNK, China
* Hailong Xu, Fudan University, Shanghai, UNK, China
* Haiming Lyu, Fudan University, Shanghai, UNK, China
* Zicheng Wu, Fudan University, Shanghai, UNK, China
* Xinyu Xing, Pennsylvania State University, Philadelphia, PA, USA
* Min Yang, Fudan University, Shanghai, UNK, China
### Abstract
> Recent research shows that, even for vulnerability reports archived by MITRE/NIST, they usually contain incomplete information about the software's vulnerable versions, making users of under-reported vulnerable versions at risk. In this work, we address this problem by introducing a fuzzing-based method. Technically, this approach first collects the crashing trace on the reference version of the software. Then, it utilizes the trace to guide the mutation of the PoC input so that the target version could follow the trace similar to the one observed on the reference version. Under the mutated input, we argue that the target version's execution could have a higher chance of triggering the bug and demonstrating the vulnerability's existence. We implement this idea as an automated tool, named VulScope. Using 30 real-world CVEs on 470 versions of software, VulScope is demonstrated to introduce no false positives and only 7.9% false negatives while migrating PoC from one version to another. Besides, we also compare our method with two representative fuzzing tools AFL and AFLGO. We find VulScope outperforms both of these existing techniques while taking the task of PoC migration. Finally, by using VulScope, we identify 330 versions of software that MITRE/NIST fails to report as vulnerable.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484594](https://doi.org/10.1145/3460120.3484594)
## Igor: Crash Deduplication Through Root-Cause Clustering.
### Authors
* Zhiyuan Jiang, National University of Defense Technology, Guizhou, China
* Xiyue Jiang, National University of Defense Technology, Guizhou, China
* Ahmad Hazimeh, EPFL, Lausanne, Switzerland
* Chaojing Tang, National University of Defense Technology, Guizhou, China
* Chao Zhang, Tsinghua University, Beijing, China
* Mathias Payer, EPFL, Lausanne, Switzerland
### Abstract
> Fuzzing has emerged as the most effective bug-finding technique. The output of a fuzzer is a set of proof-of-concept (PoC) test cases for all observed "unique'' crashes. It costs developers substantial efforts to analyze each crashing test case. This, mostly manual, process has lead to the number of reported crashes out-pacing the number of bug fixes. Automatic crash deduplication techniques, which mostly rely on coverage profiles and stack hashes, are supposed to alleviate these pressures. However, these techniques both inflate actual bug counts and falsely conflate unrelated bugs. This hinders, rather than helps, developers, and calls for more accurate techniques. The highly-stochastic nature of fuzzing means that PoCs commonly exercise many program behaviors that are orthogonal to the crash's underlying root cause. This diversity in program behaviors manifests as a diversity in crashes, contributing to bug-count inflation and conflation. Based on this insight, we develop Igor, an automated dual-phase crash deduplication technique. By minimizing each PoC's execution trace, we obtain pruned test cases that exercise the critical behavior necessary for triggering a bug. Then, we use a graph similarity comparison to cluster crashes based on the control-flow graph of the minimized execution traces, with each cluster mapping back to a single, unique root cause. We evaluate Igor against 39 bugs resulting from 254,000 PoCs, distributed over 10 programs. Our results show that Igor accurately groups these crashes into 48 uniquely identifiable clusters, while other state-of-the-art methods yield bug counts at least one order of magnitude larger.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3485364](https://doi.org/10.1145/3460120.3485364)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3485364](https://dl.acm.org/doi/pdf/10.1145/3460120.3485364)
## Validating the Integrity of Audit Logs Against Execution Repartitioning Attacks.
### Authors
* Carter Yagemann, Georgia Institute of Technology, Atlanta, GA, USA
* Mohammad A. Noureddine, Rose-Hulman Institute of Technology, Terre Haute, IN, USA
* Wajih Ul Hassan, University of Illinois Urbana-Champaign, Urbana, IL, USA
* Simon Chung, Georgia Institute of Technology, Atlanta, GA, USA
* Adam Bates, University of Illinois Urbana-Champaign, Urbana, IL, USA
* Wenke Lee, Georgia Institute of Technology, Atlanta, GA, USA
### Abstract
> Provenance-based causal analysis of audit logs has proven to be an invaluable method of investigating system intrusions. However, it also suffers from dependency explosion, whereby long-running processes accumulate many dependencies that are hard to unravel. Execution unit partitioning addresses this by segmenting dependencies into units of work, such as isolating the events that processed a single HTTP request. Unfortunately, we discover that current designs have a semantic gap problem due to how system calls and application log messages are used to infer complex internal program states. We demonstrate how attackers can modify existing code exploits to control event partitioning, breaking links in the attack and framing innocent users. We also show how our techniques circumvent existing program and log integrity defenses. We then propose a new design for execution unit partitioning that leverages additional runtime data to yield verified partitions that resist manipulation. Our design overcomes the technical challenges of minimizing additional overhead while accurately connecting low level code instructions to high level audit events, in part with the use of commodity hardware processor tracing. We implement a prototype of our design for Linux, MARSARA, and extensively evaluate it on 14 real-world programs, targeted with expertly crafted exploits. MARSARA's verified partitions successfully capture all the attack provenances while only reintroducing 2.82% of false dependencies, in the worst case, with an average overhead of 8.7%. Using a new metric called Partitioning Attack Surface, we show that MARSARA eliminates 47,642 more repartitioning gadgets per program than integrity defenses like CFI, demonstrating our prototype's effectiveness and the novelty of the attacks it prevents.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484551](https://doi.org/10.1145/3460120.3484551)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484551](https://dl.acm.org/doi/pdf/10.1145/3460120.3484551)
## C3PO: Large-Scale Study Of Covert Monitoring of C&C Servers via Over-Permissioned Protocol Infiltration.
### Authors
* Jonathan Fuller, Georgia Institute of Technology, Atlanta, GA, USA
* Ranjita Pai Kasturi, Georgia Institute of Technology, Atlanta, GA, USA
* Amit Sikder, Georgia Institute of Technology, Atlanta, GA, USA
* Haichuan Xu, Georgia Institute of Technology, Atlanta, GA, USA
* Berat Arik, Georgia Institute of Technology, Atlanta, GA, USA
* Vivek Verma, Georgia Institute of Technology, Atlanta, GA, USA
* Ehsan Asdar, Georgia Institute of Technology, Atlanta, GA, USA
* Brendan Saltaformaggio, Georgia Institute of Technology, Atlanta, GA, USA
### Abstract
> Current techniques to monitor botnets towards disruption or takedown are likely to result in inaccurate data gathered about the botnet or be detected by C&C orchestrators. Seeking a covert and scalable solution, we look to an evolving pattern in modern malware that integrates standardized over-permissioned protocols, exposing privileged access to C&C servers. We implement techniques to detect and exploit these protocols from over-permissioned bots toward covert C&C server monitoring. Our empirical study of 200k malware captured since 2006 revealed 62,202 over-permissioned bots (nearly 1 in 3) and 443,905 C&C monitoring capabilities, with a steady increase of over-permissioned protocol use over the last 15 years. Due to their ubiquity, we conclude that even though over-permissioned protocols allow for C&C server infiltration, the efficiency and ease of use they provide continue to make them prevalent in the malware operational landscape. This paper presents C3PO, a pipeline that enables our study and empowers incident responders to automatically identify over-permissioned protocols, infiltration vectors to spoof bot-to-C&C communication, and C&C monitoring capabilities that guide covert monitoring post infiltration. Our findings suggest the over-permissioned protocol weakness provides a scalable approach to covertly monitor C&C servers, which is a fundamental enabler of botnet disruptions and takedowns.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484537](https://doi.org/10.1145/3460120.3484537)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484537](https://dl.acm.org/doi/pdf/10.1145/3460120.3484537)
## New Directions in Automated Traffic Analysis.
### Authors
* Jordan Holland, Princeton University, Princeton, NJ, USA
* Paul Schmitt, Princeton University, Princeton, NJ, USA
* Nick Feamster, University of Chicago, Chicago, IL, USA
* Prateek Mittal, Princeton University, Princeton, NJ, USA
### Abstract
> Machine learning is leveraged for many network traffic analysis tasks in security, from application identification to intrusion detection. Yet, the aspects of the machine learning pipeline that ultimately determine the performance of the model---feature selection and representation, model selection, and parameter tuning---remain manual and painstaking. This paper presents a method to automate many aspects of traffic analysis, making it easier to apply machine learning techniques to a wider variety of traffic analysis tasks. We introduce nPrint, a tool that generates a unified packet representation that is amenable for representation learning and model training. We integrate nPrint with automated machine learning (AutoML), resulting in nPrintML, a public system that largely eliminates feature extraction and model tuning for a wide variety of traffic analysis tasks. We have evaluated nPrintML on eight separate traffic analysis tasks and released nPrint, nPrintML and the corresponding datasets from our evaluation to enable future work to extend these methods.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484758](https://doi.org/10.1145/3460120.3484758)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484758](https://dl.acm.org/doi/pdf/10.1145/3460120.3484758)
## Themis: Ambiguity-Aware Network Intrusion Detection based on Symbolic Model Comparison.
### Authors
* Zhongjie Wang, University of California, Riverside, Riverside, CA, USA
* Shitong Zhu, University of California, Riverside, Riverside, CA, USA
* Keyu Man, University of California, Riverside, Riverside, CA, USA
* Pengxiong Zhu, University of California, Riverside, Riverside, CA, USA
* Yu Hao, University of California, Riverside, Riverside, CA, USA
* Zhiyun Qian, University of California, Riverside, Riverside, CA, USA
* Srikanth V. Krishnamurthy, University of California, Riverside, Riverside, CA, USA
* Tom La Porta, Pennsylvania State University, State College, PA, USA
* Michael J. De Lucia, U.S. Army Research Laboratory, Adelphi, MD, USA
### Abstract
> Network intrusion detection systems (NIDS) can be evaded by carefully crafted packets that exploit implementation-level discrepancies between how they are processed on the NIDS and at the endhosts. These discrepancies arise due to the plethora of endhost implementations and evolutions thereof. It is prohibitive to proactively employ a large set of implementations at the NIDS and check incoming packets against all of those. Hence, NIDS typically choose simplified implementations that attempt to approximate and generalize across the different endhost implementations. Unfortunately, this solution is fundamentally flawed since such approximations are bound to have discrepancies with some endhost implementations. In this paper, we develop a lightweight system Themis, which empowers the NIDS in identifying these discrepancies and reactively forking its connection states when any packets with "ambiguities" are encountered. Specifically, Themis incorporates an offline phase in which it extracts models from various popular implementations using symbolic execution. During runtime, it maintains a nondeterministic finite automaton to keep track of the states for each possible implementation. Our extensive evaluations show that Themis is extremely effective and can detect all evasion attacks known to date, while consuming extremely low overhead. En route, we also discovered multiple previously unknown discrepancies that can be exploited to bypass current NIDS.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484762](https://doi.org/10.1145/3460120.3484762)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484762](https://dl.acm.org/doi/pdf/10.1145/3460120.3484762)
## DNS Cache Poisoning Attack: Resurrections with Side Channels.
### Authors
* Keyu Man, University of California, Riverside, Riverside, CA, USA
* Xin'an Zhou, University of California, Riverside, Riverside, CA, USA
* Zhiyun Qian, University of California, Riverside, Riverside, CA, USA
### Abstract
> DNS is one of the fundamental and ancient protocols on the Internet that supports many network applications and services. Unfortunately, DNS was designed without security in mind and is subject to a variety of serious attacks, one of which is the well-known DNS cache poisoning attack. Over the decades of evolution, it has proven extraordinarily challenging to retrofit strong security features into it. To date, only weaker versions of defenses based on the principle of randomization have been widely deployed, e.g., the randomization of UDP ephemeral port number, making it hard for an off-path attacker to guess the secret. However, as it has been shown recently, such randomness is subject to clever network side channel attacks, which can effectively derandomize the ephemeral port number. In this paper, we conduct an analysis of the previously overlooked attack surface, and are able to uncover even stronger side channels that have existed for over a decade in Linux kernels. The side channels affect not only Linux but also a wide range of DNS software running on top of it, including BIND, Unbound and dnsmasq. We also find about 38% of open resolvers (by frontend IPs) and 14% (by backend IPs) are vulnerable including the popular DNS services such as OpenDNS and Quad9. We have extensively validated the attack experimentally under realistic configuration and network conditions and showed that it works reliably and fast.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3486219](https://doi.org/10.1145/3460120.3486219)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3486219](https://dl.acm.org/doi/pdf/10.1145/3460120.3486219)
## Packet Scheduling with Optional Client Privacy.
### Authors
* Andrew Beams, University of Pennsylvania, Philadelphia, PA, USA
* Sampath Kannan, University of Pennsylvania, Philadelphia, PA, USA
* Sebastian Angel, University of Pennsylvania & Microsoft Research, Philadelphia, PA, USA
### Abstract
> Existing network switches implement scheduling disciplines such as FIFO or deficit round robin that provide good utilization or fairness across flows, but do so at the expense of leaking a variety of information via timing side channels. To address this privacy breach, we propose a new scheduling mechanism for switches called indifferent-first scheduling (IFS). A salient aspect of IFS is that it provides privacy (a notion of strong isolation) to clients that opt-in, while preserving the (good) performance and utilization of FIFO or round robin for clients that are satisfied with the status quo. Such a hybrid scheduling mechanism addresses the main drawback of prior proposals such as time-division multiple access (TDMA) that provide strong isolation at the cost of low utilization and increased packet latency for all clients. We identify limitations of modern programmable switches which inhibit an implementation of IFS without compromising its privacy guarantees, and show that a version of IFS with full security can be implemented at line rate in the recently proposed push-in-first-out (PIFO) queuing architecture.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3485371](https://doi.org/10.1145/3460120.3485371)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3485371](https://dl.acm.org/doi/pdf/10.1145/3460120.3485371)
## Realtime Robust Malicious Traffic Detection via Frequency Domain Analysis.
### Authors
* Chuanpu Fu, Tsinghua University, Beijing, China
* Qi Li, Tsinghua University & Beijing National Research Center for Information Science and Technology (BNRist), Beijing, China
* Meng Shen, Beijing Institute of Technology, Beijing, China
* Ke Xu, Tsinghua University & Beijing National Research Center for Information Science and Technology (BNRist), & Peng Cheng Laboratory, Beijing, China
### Abstract
> Machine learning (ML) based malicious traffic detection is an emerging security paradigm, particularly for zero-day attack detection, which is complementary to existing rule based detection. However, the existing ML based detection achieves low detection accuracy and low throughput incurred by inefficient traffic features extraction. Thus, they cannot detect attacks in realtime, especially in high throughput networks. Particularly, these detection systems similar to the existing rule based detection can be easily evaded by sophisticated attacks. To this end, we propose Whisper, a realtime ML based malicious traffic detection system that achieves both high accuracy and high throughput by utilizing frequency domain features. It utilizes sequential information represented by the frequency domain features to achieve bounded information loss, which ensures high detection accuracy, and meanwhile constrains the scale of features to achieve high detection throughput. In particular, attackers cannot easily interfere with the frequency domain features and thus Whisper is robust against various evasion attacks. Our experiments with 42 types of attacks demonstrate that, compared with the state-of-the-art systems, Whisper can accurately detect various sophisticated and stealthy attacks, achieving at most 18.36% improvement of AUC, while achieving two orders of magnitude throughput. Even under various evasion attacks, Whisper is still able to maintain around 90% detection accuracy.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484585](https://doi.org/10.1145/3460120.3484585)
## OpenSquare: Decentralized Repeated Modular Squaring Service.
### Authors
* Sri Aravinda Krishnan Thyagarajan, Friedrich Alexander Universität Erlangen-Nuremberg, Nuremberg, Germany
* Tiantian Gong, Purdue University, West Lafayette, IN, USA
* Adithya Bhat, Purdue University, West Lafayette, IN, USA
* Aniket Kate, Purdue University, West Lafayette, IN, USA
* Dominique Schröder, Friedrich-Alexander Universität Erlangen-Nürnberg, Nuremberg, Germany
### Abstract
> Repeated Modular Squaring is a versatile computational operation that has led to practical constructions of timed-cryptographic primitives like time-lock puzzles (TLP) and verifiable delay functions (VDF) that have a fast growing list of applications. While there is a huge interest for timed-cryptographic primitives in the blockchains area, we find two real-world concerns that need immediate attention towards their large-scale practical adoption: Firstly, the requirement to constantly perform computations seems unrealistic for most of the users. Secondly, choosing the parameters for the bound (T) seems complicated due to the lack of heuristics and experience. We present OpenSquare, a decentralized repeated modular squaring service, that overcomes the above concerns. OpenSquare lets clients outsource their repeated modular squaring computation via smart contracts to any computationally powerful servers that offer computational services for rewards in an unlinkable manner. OpenSquare naturally gives us publicly computable heuristics about a pre-specified number (T) and the corresponding reward amounts of repeated squarings necessary for a time period. Moreover, OpenSquare rewards multiple servers for a single request, in a sybil resistant manner to incentivise maximum server participation and is therefore resistant to censorship and single-points-of failures. We give game-theoretic analysis to support the mechanism design of OpenSquare: (1) incentivises servers to stay available with their services, (2) minimizes the cost of outsourcing for the client, and (3) ensures the client receives the valid computational result with high probability. To demonstrate practicality, we also implement OpenSquare's smart contract in Solidity and report the gas costs for all of its functions. Our results show that the on-chain computational costs for both the clients and the servers are quite low, and therefore feasible for practical deployments and usage.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484809](https://doi.org/10.1145/3460120.3484809)
## Generalized Proof of Liabilities.
### Authors
* Yan Ji, Cornell Tech & IC3, New York, NY, USA
* Konstantinos Chalkias, Novi / Facebook, Menlo Park, CA, USA
### Abstract
> Proof of liabilities (PoL) allows a prover to prove his/her liabilities to a group of verifiers. This is a cryptographic primitive once used only for proving financial solvency but is also applicable to domains outside finance, including transparent and private donations, new algorithms for disapproval voting and publicly verifiable official reports such as COVID-19 daily cases. These applications share a common nature in incentives: it's not in the prover's interest to increase his/her total liabilities. We generalize PoL for these applications by attempting for the first time to standardize the goals it should achieve from security, privacy and efficiency perspectives. We also propose DAPOL+, a concrete PoL scheme extending the state-of-the-art DAPOL protocol but providing provable security and privacy, with benchmark results demonstrating its practicality. In addition, we explore techniques to provide additional features that might be desired in different applications of PoL and measure the asymptotic probability of failure.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484802](https://doi.org/10.1145/3460120.3484802)
## Mining in Logarithmic Space.
### Authors
* Aggelos Kiayias, University of Edinburgh & IOHK, Edinburgh, United Kingdom
* Nikos Leonardos, University of Athens, Athens, Greece
* Dionysis Zindros, University of Athens, Athens, Greece
### Abstract
> Blockchains maintain two types of data: Application data and consensus data. Towards long-term blockchain scalability, both of these must be pruned. While a large body of literature has explored the pruning of application data (UTXOs, account balances, and contract state), little has been said about the permanent pruning of consensus data (block headers). We present a protocol which allows pruning the blockchain by garbage collecting old blocks as they become unnecessary. These blocks can simply be discarded and are no longer stored by any miner. We show that all miners can be light miners with no harm to security. Our protocol is based on the notion of superblocks, blocks that have achieved an unusually high difficulty. We leverage them to represent underlying proof-of-work without ever illustrating it, storing it, or transmitting it. After our pruning is applied, the storage and communication requirements for consensus data are reduced exponentially. We develop new probabilistic mathematical methods to analyze our protocol in the random oracle model. We prove our protocol is both secure and succinct under an uninterrupted honest majority assumption for 1/3 adversaries. Our protocol is the first to achieve always secure, always succinct, and online Non-Interactive Proofs of Proof-of-Work, all necessary components for a logarithmic space mining scheme. Our work has applications beyond mining and also constitutes an improvement in state-of-the-art superlight clients and cross-chain bridges.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484784](https://doi.org/10.1145/3460120.3484784)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484784](https://dl.acm.org/doi/pdf/10.1145/3460120.3484784)
## RandPiper - Reconfiguration-Friendly Random Beacons with Quadratic Communication.
### Authors
* Adithya Bhat, Purdue University, West Lafayette, IN, USA
* Nibesh Shrestha, Rochester Institute of Technology, Rochester, NY, USA
* Zhongtang Luo, Purdue University, West Lafayette, IN, USA
* Aniket Kate, Purdue University, West Lafayette, IN, USA
* Kartik Nayak, Duke University, Durham, NC, USA
### Abstract
> A random beacon provides a continuous public source of randomness and its applications range from public lotteries to zero-knowledge proofs. Existing random beacon protocols sacrifice either the fault tolerance or the communication complexity for security, or ease of reconfigurability. This work overcomes the challenges with the existing works through a novel communication efficient combination of state machine replication and (Publicly) Verifiable Secret Sharing (PVSS/VSS). For a system with n nodes in the synchronous communication model and a security parameter κ, we first design an optimally resilient Byzantine fault-tolerant state machine replication protocol with O(κ n2) bits communication per consensus decision without using threshold signatures. Next, we design GRandPiper (Good Pipelined Random beacon), a random beacon protocol with bias-resistance and unpredictability, that uses PVSS and has a communication complexity of O(K n2) always, for a static adversary. However, GRandPiper allows an adaptive adversary to predict beacon values up to t+1 epochs into the future. Therefore, we design BRandPiper (Better RandPiper), that uses VSS and has a communication complexity of O(κ fn2), where f is the actual number of faults, while offering a strong unpredictability with an advantage of only a single round even for an adaptive adversary. We also provide reconfiguration mechanisms to restore the resilience of the beacon protocols while still maintaining quadratic communication complexity per epoch. We implement BRandPiper and compare it against the state-of-the-art practically deployed beacon protocol, Drand, and show that we are always better than or equal to it in performance.
### Links
- **URL:** [https://doi.org/10.1145/3460120.3484574](https://doi.org/10.1145/3460120.3484574)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3460120.3484574](https://dl.acm.org/doi/pdf/10.1145/3460120.3484574)
