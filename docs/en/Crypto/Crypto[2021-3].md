# Crypto[2021-3]
## A Rational Protocol Treatment of 51% Attacks.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-3].md#a-rational-protocol-treatment-of-51-attacks)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-3].md#a-rational-protocol-treatment-of-51-attacks)
### Authors
* Christian Badertscher, IOHK, Zurich, Switzerland
* Yun Lu, University of Edinburgh, Edinburgh, UK
* Vassilis Zikas, Purdue University, West Lafayette, USA
### Abstract
> Game-theoretic analyses of cryptocurrencies and—more generally—blockchain-based decentralized ledgers offer insight on their economic robustness and behavior when even their underpinning cryptographic assumptions fail. In this work we utilize the recently proposed blockchain adaptation of the rational protocol design (RPD) framework [EUROCRYPT ’18] to analyze 51% double-spending attacks against Nakamoto-style proof-of-work based cryptocurrencies. We first observe a property of the originally proposed utility class that yields an unnatural conclusion against such attacks, and show how to devise a utility that avoids this pitfall and makes predictions that match the observable behavior—i.e., that renders attacking a dominant strategy in settings where an attack was indeed observed in reality. We then propose a generic remedy to the underlying protocol parameters that provably deter adversaries controlling a majority of the system’s resources from attacks on blockchain consistency, including the 51% double-spending attack. This can be used as guidance to patch systems that have suffered such attacks, e.g., Ethereum Classic and Bitcoin Cash, and serves as a demonstration of the power of game-theoretic analyses.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84252-9_1](https://doi.org/10.1007/978-3-030-84252-9_1)
## MoSS: Modular Security Specifications Framework.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-3].md#moss-modular-security-specifications-framework)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-3].md#moss-modular-security-specifications-framework)
### Authors
* Amir Herzberg, Department of Computer Science and Engineering, University of Connecticut, Storrs, CT, USA
* Sara Wrótniak, Department of Computer Science and Engineering, University of Connecticut, Storrs, CT, USA
* Hemi Leibowitz, Department of Computer Science, Bar-Ilan University, Ramat Gan, Israel
* Ewa Syta, Department of Computer Science, Trinity College, Hartford, CT, USA
### Abstract
> Applied cryptographic protocols have to meet a rich set of security requirements under diverse environments and against diverse adversaries. However, currently used security specifications, based on either simulation [11, 27] (e.g., ‘ideal functionality’ in UC) or games [8, 29], are monolithic, combining together different aspects of protocol requirements, environment and assumptions. Such security specifications are complex, error-prone, and foil reusability, modular analysis and incremental design.
> 
> We present the Modular Security Specifications (MoSS) framework, which cleanly separates the security requirements (goals) which a protocol should achieve, from the models (assumptions) under which each requirement should be ensured. This modularity allows us to reuse individual models and requirements across different protocols and tasks, and to compare protocols for the same task, either under different assumptions or satisfying different sets of requirements. MoSS is flexible and extendable, e.g., it can support both asymptotic and concrete definitions for security.
> 
> So far, we confirmed the applicability of MoSS to two applications: secure broadcast protocols and PKI schemes.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84252-9_2](https://doi.org/10.1007/978-3-030-84252-9_2)
## Tight State-Restoration Soundness in the Algebraic Group Model.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-3].md#tight-state-restoration-soundness-in-the-algebraic-group-model)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-3].md#tight-state-restoration-soundness-in-the-algebraic-group-model)
### Authors
* Ashrujit Ghoshal, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Stefano Tessaro, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
### Abstract
> Most efficient zero-knowledge arguments lack a concrete security analysis, making parameter choices and efficiency comparisons challenging. This is even more true for non-interactive versions of these systems obtained via the Fiat-Shamir transform, for which the security guarantees generically derived from the interactive protocol are often too weak, even when assuming a random oracle.
> 
> This paper initiates the study of state-restoration soundness in the algebraic group model (AGM) of Fuchsbauer, Kiltz, and Loss (CRYPTO ’18). This is a stronger notion of soundness for an interactive proof or argument which allows the prover to rewind the verifier, and which is tightly connected with the concrete soundness of the non-interactive argument obtained via the Fiat-Shamir transform.
> 
> We propose a general methodology to prove tight bounds on state-restoration soundness, and apply it to variants of Bulletproofs (Bootle et al., S&P ’18) and Sonic (Maller et al., CCS ’19). To the best of our knowledge, our analysis of Bulletproofs gives the first non-trivial concrete security analysis for a non-constant round argument combined with the Fiat-Shamir transform.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84252-9_3](https://doi.org/10.1007/978-3-030-84252-9_3)
## Separating Adaptive Streaming from Oblivious Streaming Using the Bounded Storage Model.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-3].md#separating-adaptive-streaming-from-oblivious-streaming-using-the-bounded-storage-model)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-3].md#separating-adaptive-streaming-from-oblivious-streaming-using-the-bounded-storage-model)
### Authors
* Haim Kaplan, Tel Aviv University, Tel Aviv, Israel
* Yishay Mansour, Tel Aviv University, Tel Aviv, Israel
* Haim Kaplan, Google Research, Tel Aviv, Israel
* Yishay Mansour, Google Research, Tel Aviv, Israel
* Uri Stemmer, Google Research, Tel Aviv, Israel
* Kobbi Nissim, Georgetown University, Washington D.C., USA
* Uri Stemmer, Ben-Gurion University of the Negev, Be’er-Sheva, Israel
### Abstract
> Streaming algorithms are algorithms for processing large data streams, using only a limited amount of memory. Classical streaming algorithms typically work under the assumption that the input stream is chosen independently from the internal state of the algorithm. Algorithms that utilize this assumption are called oblivious algorithms. Recently, there is a growing interest in studying streaming algorithms that maintain utility also when the input stream is chosen by an adaptive adversary, possibly as a function of previous estimates given by the streaming algorithm. Such streaming algorithms are said to be adversarially-robust.
> 
> By combining techniques from learning theory with cryptographic tools from the bounded storage model, we separate the oblivious streaming model from the adversarially-robust streaming model. Specifically, we present a streaming problem for which every adversarially-robust streaming algorithm must use polynomial space, while there exists a classical (oblivious) streaming algorithm that uses only polylogarithmic space. This is the first general separation between the capabilities of these two models, resolving one of the central open questions in adversarial robust streaming.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84252-9_4](https://doi.org/10.1007/978-3-030-84252-9_4)
## Provable Security Analysis of FIDO2.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-3].md#provable-security-analysis-of-fido2)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-3].md#provable-security-analysis-of-fido2)
### Authors
* Manuel Barbosa, University of Porto (FCUP) and INESC TEC, Porto, Portugal
* Alexandra Boldyreva, Georgia Institute of Technology, Atlanta, USA
* Shan Chen, Technische Universität Darmstadt, Darmstadt, Germany
* Bogdan Warinschi, University of Bristol, Bristol, UK
* Bogdan Warinschi, Dfinity, Zug, Switzerland
### Abstract
> We carry out the first provable security analysis of the new FIDO2 protocols, the promising FIDO Alliance’s proposal for a standard for passwordless user authentication. Our analysis covers the core components of FIDO2: the W3C’s Web Authentication (WebAuthn) specification and the new Client-to-Authenticator Protocol (CTAP2).
> 
> Our analysis is modular. For WebAuthn and CTAP2, in turn, we propose appropriate security models that aim to capture their intended security goals and use the models to analyze their security. First, our proof confirms the authentication security of WebAuthn. Then, we show CTAP2 can only be proved secure in a weak sense; meanwhile, we identify a series of its design flaws and provide suggestions for improvement. To withstand stronger yet realistic adversaries, we propose a generic protocol called sPACA and prove its strong security; with proper instantiations, sPACA is also more efficient than CTAP2. Finally, we analyze the overall security guarantees provided by FIDO2 and WebAuthn+sPACA based on the security of their components.
> 
> We expect that our models and provable security results will help clarify the security guarantees of the FIDO2 protocols. In addition, we advocate the adoption of our sPACA protocol as a substitute for CTAP2 for both stronger security and better performance.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84252-9_5](https://doi.org/10.1007/978-3-030-84252-9_5)
## SSE and SSD: Page-Efficient Searchable Symmetric Encryption.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-3].md#sse-and-ssd-page-efficient-searchable-symmetric-encryption)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-3].md#sse-and-ssd-page-efficient-searchable-symmetric-encryption)
### Authors
* Angèle Bossuat, Quarkslab and Université de Rennes 1, Rennes, France
* Raphael Bost, Direction Générale de l’Armement, Paris, France
* Brice Minaud, Inria, Paris, France
* Michael Reichle, Inria, Paris, France
* Brice Minaud, École Normale Supérieure, CNRS, PSL University, Paris, France
* Michael Reichle, École Normale Supérieure, CNRS, PSL University, Paris, France
* Pierre-Alain Fouque, Université de Rennes 1, Rennes, France
### Abstract
> Searchable Symmetric Encryption (SSE) enables a client to outsource a database to an untrusted server, while retaining the ability to securely search the data. The performance bottleneck of classic SSE schemes typically does not come from their fast, symmetric cryptographic operations, but rather from the cost of memory accesses. To address this issue, many works in the literature have considered the notion of locality, a simple design criterion that helps capture the cost of memory accesses in traditional storage media, such as Hard Disk Drives. A common thread among many SSE schemes aiming to improve locality is that they are built on top of new memory allocation schemes, which form the technical core of the constructions.
> 
> The starting observation of this work is that for newer storage media such as Solid State Drives (SSDs), which have become increasingly common, locality is not a good predictor of practical performance. Instead, SSD performance mainly depends on page efficiency, that is, reading as few pages as possible. We define this notion, and identify a simple memory allocation problem, Data-Independent Packing (DIP), that captures the main technical challenge required to build page-efficient SSE. As our main result, we build a page-efficient and storage-efficient data-independent packing scheme, and deduce the \(\mathsf {Tethys}\) SSE scheme, the first SSE scheme to achieve at once \(\mathcal {O}(1)\) page efficiency and \(\mathcal {O}(1)\) storage efficiency. The technical core of the result is a new generalization of cuckoo hashing to items of variable size. Practical experiments show that this new approach achieves excellent performance.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84252-9_6](https://doi.org/10.1007/978-3-030-84252-9_6)
## Towards Tight Random Probing Security.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-3].md#towards-tight-random-probing-security)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-3].md#towards-tight-random-probing-security)
### Authors
* Gaëtan Cassiers, Crypto Group, ICTEAM Institute, UCLouvain, Louvain-la-Neuve, Belgium
* François-Xavier Standaert, Crypto Group, ICTEAM Institute, UCLouvain, Louvain-la-Neuve, Belgium
* Sebastian Faust, TU Darmstadt, Darmstadt, Germany
* Maximilian Orlt, TU Darmstadt, Darmstadt, Germany
### Abstract
> Proving the security of masked implementations in theoretical models that are relevant to practice and match the best known attacks of the side-channel literature is a notoriously hard problem. The random probing model is a promising candidate to contribute to this challenge, due to its ability to capture the continuous nature of physical leakage (contrary to the threshold probing model), while also being convenient to manipulate in proofs and to automate with verification tools. Yet, despite recent progress in the design of masked circuits with good asymptotic security guarantees in this model, existing results still fall short when it comes to analyze the security of concretely useful circuits under realistic noise levels and with low number of shares. In this paper, we contribute to this issue by introducing a new composability notion, the Probe Distribution Table (PDT), and a new tool (called STRAPS, for the Sampled Testing of the RAndom Probing Security). Their combination allows us to significantly improve the tightness of existing analyses in the most practical (low noise, low number of shares) region of the design space. We illustrate these improvements by quantifying the random probing security of an AES S-box circuit, masked with the popular multiplication gadget of Ishai, Sahai and Wagner from Crypto 2003, with up to six shares.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84252-9_7](https://doi.org/10.1007/978-3-030-84252-9_7)
## Secure Wire Shuffling in the Probing Model.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-3].md#secure-wire-shuffling-in-the-probing-model)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-3].md#secure-wire-shuffling-in-the-probing-model)
### Authors
* Jean-Sébastien Coron, University of Luxembourg, Esch-sur-Alzette, Luxembourg
* Lorenzo Spignoli, University of Luxembourg, Esch-sur-Alzette, Luxembourg
### Abstract
> In this paper we describe the first improvement of the wire shuffling countermeasure against side-channel attacks described by Ishai, Sahai and Wagner at Crypto 2003. More precisely, we show how to get worst case statistical security against t probes with running time \({\mathcal O}(t)\) instead of \({\mathcal O}(t \log t)\); our construction is also much simpler. Recall that the classical masking countermeasure achieves perfect security but with running time \({\mathcal O}(t^2)\). We also describe a practical implementation for AES that outperforms the masking countermeasure for \(t \ge 6\,000\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84252-9_8](https://doi.org/10.1007/978-3-030-84252-9_8)
## Differential-Linear Cryptanalysis from an Algebraic Perspective.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-3].md#differential-linear-cryptanalysis-from-an-algebraic-perspective)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-3].md#differential-linear-cryptanalysis-from-an-algebraic-perspective)
### Authors
* Meicheng Liu, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, People’s Republic of China
* Xiaojuan Lu, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, People’s Republic of China
* Dongdai Lin, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, People’s Republic of China
* Meicheng Liu, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, People’s Republic of China
* Xiaojuan Lu, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, People’s Republic of China
* Dongdai Lin, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, People’s Republic of China
### Abstract
> The differential-linear cryptanalysis is an important cryptanalytic tool in cryptography, and has been extensively researched since its discovery by Langford and Hellman in 1994. There are nevertheless very few methods to study the middle part where the differential and linear trail connect. In this paper, we study differential-linear cryptanalysis from an algebraic perspective. We first introduce a technique called Differential Algebraic Transitional Form (DATF) for differential-linear cryptanalysis, then develop a new theory of estimation of the differential-linear bias and techniques for key recovery in differential-linear cryptanalysis.
> 
> The techniques are applied to the CAESAR and LWC finalist Ascon, the AES finalist Serpent, and the eSTREAM finalist Grain v1. The bias of the differential-linear approximation is estimated for Ascon and Serpent. The theoretical estimates of the bias are more accurate than that obtained by the Differential-Linear Connectivity Table (Bar-On et al., EUROCRYPT 2019), and the techniques can be applied with more rounds. Our general techniques can also be used to estimate the bias of Grain v1 in differential cryptanalysis, and have a markedly better performance than the Differential Engine tool tailor-made for the cipher. The improved key recovery attacks on round-reduced variants of these ciphers are then proposed. To the best of our knowledge, they are thus far the best known cryptanalysis of Serpent, as well as the best differential-linear cryptanalysis of Ascon and the best initialization analysis of Grain v1. The results have been fully verified by experiments. Notably, security analysis of Serpent is one of the most important applications of differential-linear cryptanalysis in the last two decades. The results in this paper update the differential-linear cryptanalysis of Serpent-128 and Serpent-256 with one more round after the work of Biham, Dunkelman and Keller in 2003.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84252-9_9](https://doi.org/10.1007/978-3-030-84252-9_9)
## Meet-in-the-Middle Attacks Revisited: Key-Recovery, Collision, and Preimage Attacks.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-3].md#meet-in-the-middle-attacks-revisited-key-recovery-collision-and-preimage-attacks)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-3].md#meet-in-the-middle-attacks-revisited-key-recovery-collision-and-preimage-attacks)
### Authors
* Xiaoyang Dong, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Jialiang Hua, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Xiaoyun Wang, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Siwei Sun, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Lei Hu, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Siwei Sun, University of Chinese Academy of Sciences, Beijing, China
* Lei Hu, University of Chinese Academy of Sciences, Beijing, China
* Zheng Li, Faculty of Information Technology, Beijing University of Technology, Beijing, China
* Xiaoyun Wang, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, China
* Xiaoyun Wang, School of Cyber Science and Technology, Shandong University, Qingdao, China
* Zheng Li, Beijing Key Laboratory of Trusted Computing, Beijing University of Technology, Beijing, China
### Abstract
> At EUROCRYPT 2021, Bao et al. proposed an automatic method for systematically exploring the configuration space of meet-in-the-middle (MITM) preimage attacks. We further extend it into a constraint-based framework for finding exploitable MITM characteristics in the context of key-recovery and collision attacks by taking the subtle peculiarities of both scenarios into account. Moreover, to perform attacks based on MITM characteristics with nonlinear constrained neutral words, which have not been seen before, we present a procedure for deriving the solution spaces of neutral words without solving the corresponding nonlinear equations or increasing the overall time complexities of the attack. We apply our method to concrete symmetric-key primitives, including SKINNY, ForkSkinny, Romulus-H, Saturnin, Grøstl, WHIRLPOOL, and hashing modes with AES-256. As a result, we identify the first 23-round key-recovery attack on SKINNY-n-3n and the first 24-round key-recovery attack on ForkSkinny-n-3n in the single-key model. Moreover, improved (pseudo) preimage or collision attacks on round-reduced WHIRLPOOL, Grøstl, and hashing modes with AES-256 are obtained. In particular, employing the new representation of the AES key schedule due to Leurent and Pernot (EUROCRYPT 2021), we identify the first preimage attack on 10-round AES-256 hashing.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84252-9_10](https://doi.org/10.1007/978-3-030-84252-9_10)
## Revisiting the Security of DbHtS MACs: Beyond-Birthday-Bound in the Multi-user Setting.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-3].md#revisiting-the-security-of-dbhts-macs-beyond-birthday-bound-in-the-multi-user-setting)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-3].md#revisiting-the-security-of-dbhts-macs-beyond-birthday-bound-in-the-multi-user-setting)
### Authors
* Yaobin Shen, Shanghai Jiao Tong University, Shanghai, China
* Lei Wang, Shanghai Jiao Tong University, Shanghai, China
* Dawu Gu, Shanghai Jiao Tong University, Shanghai, China
* Jian Weng, Jinan University, Guangzhou, China
### Abstract
> Double-block Hash-then-Sum (DbHtS) MACs are a class of MACs that aim for achieving beyond-birthday-bound security, including SUM-ECBC, PMAC_Plus, 3kf9 and LightMAC_Plus. Recently Datta et al. (FSE’19), and then Kim et al. (Eurocrypt’20) prove that DbHtS constructions are secure beyond the birthday bound in the single-user setting. However, by a generic reduction, their results degrade to (or even worse than) the birthday bound in the multi-user setting.
> 
> In this work, we revisit the security of DbHtS MACs in the multi-user setting. We propose a generic framework to prove beyond-birthday-bound security for DbHtS constructions. We demonstrate the usability of this framework with applications to key-reduced variants of DbHtS MACs, including 2k-SUM-ECBC, 2k-PMAC_Plus and 2k-LightMAC_Plus. Our results show that the security of these constructions will not degrade as the number of users grows. On the other hand, our results also indicate that these constructions are secure beyond the birthday bound in both single-user and multi-user setting without additional domain separation, which is used in the prior work to simplify the analysis.
> 
> Moreover, we find a critical flaw in 2kf9, which is proved to be secure beyond the birthday bound by Datta et al. (FSE’19). We can successfully forge a tag with probability 1 without making any queries. We go further to show attacks with birthday-bound complexity on several variants of 2kf9.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84252-9_11](https://doi.org/10.1007/978-3-030-84252-9_11)
## Thinking Outside the Superbox.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-3].md#thinking-outside-the-superbox)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-3].md#thinking-outside-the-superbox)
### Authors
* Nicolas Bordes, Université Grenoble Alpes, Grenoble, France
* Joan Daemen, Radboud University, Nijmegen, The Netherlands
* Daniël Kuijsters, Radboud University, Nijmegen, The Netherlands
* Gilles Van Assche, STMicroelectronics, Diegem, Belgium
### Abstract
> Designing a block cipher or cryptographic permutation can be approached in many different ways. One such approach, popularized by AES, consists in grouping the bits along the S-box boundaries, e.g., in bytes, and in consistently processing them in these groups. This aligned approach leads to hierarchical structures like superboxes that make it possible to reason about the differential and linear propagation properties using combinatorial arguments. In contrast, an unaligned approach avoids any such grouping in the design of transformations. However, without hierarchical structure, sophisticated computer programs are required to investigate the differential and linear propagation properties of the primitive. In this paper, we formalize this notion of alignment and study four primitives that are exponents of different design strategies. We propose a way to analyze the interactions between the linear and the nonlinear layers w.r.t. the differential and linear propagation, and we use it to systematically compare the four primitives using non-trivial computer experiments. We show that alignment naturally leads to different forms of clustering, e.g., of active bits in boxes, of two-round trails in activity patterns, and of trails in differentials and linear approximations.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84252-9_12](https://doi.org/10.1007/978-3-030-84252-9_12)
## Cryptanalysis of Full LowMC and LowMC-M with Algebraic Techniques.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-3].md#cryptanalysis-of-full-lowmc-and-lowmc-m-with-algebraic-techniques)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-3].md#cryptanalysis-of-full-lowmc-and-lowmc-m-with-algebraic-techniques)
### Authors
* Fukang Liu, East China Normal University, Shanghai, China
* Fukang Liu, University of Hyogo, Hyogo, Japan
* Takanori Isobe, University of Hyogo, Hyogo, Japan
* Takanori Isobe, National Institute of Information and Communications Technology, Tokyo, Japan
* Takanori Isobe, PRESTO, Japan Science and Technology Agency, Tokyo, Japan
* Willi Meier, FHNW, Windisch, Switzerland
### Abstract
> In this paper, we revisit the difference enumeration technique for LowMC and develop new algebraic techniques to achieve efficient key-recovery attacks. In the original difference enumeration attack framework, an inevitable step is to precompute and store a set of intermediate state differences for efficient checking via the binary search. Our first observation is that Bar-On et al.’s general algebraic technique developed for SPNs with partial nonlinear layers can be utilized to fulfill the same task, which can make the memory complexity negligible as there is no need to store a huge set of state differences any more. Benefiting from this technique, we could significantly improve the attacks on LowMC when the block size is much larger than the key size and even break LowMC with such a kind of parameter. On the other hand, with our new key-recovery technique, we could significantly improve the time to retrieve the full key if given only a single pair of input and output messages together with the difference trail that they take, which was stated as an interesting question by Rechberger et al. at ToSC 2018. Combining both techniques, with only 2 chosen plaintexts, we could break 4 rounds of LowMC adopting a full S-Box layer with block size of 129, 192 and 255 bits, respectively, which are the 3 recommended parameters for Picnic3, an alternative third-round candidate in NIST’s Post-Quantum Cryptography competition. We have to emphasize that our attacks do not indicate that Picnic3 is broken as the Picnic use-case is very different and an attacker cannot even freely choose 2 plaintexts to encrypt for a concrete LowMC instance. However, such parameters are deemed as secure in the latest LowMC. Moreover, much more rounds of seven instances of the backdoor cipher LowMC-M as proposed by Peyrin and Wang in CRYPTO 2020 can be broken without finding the backdoor by making full use of the allowed \(2^{64}\) data. The above mentioned attacks are all achieved with negligible memory.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84252-9_13](https://doi.org/10.1007/978-3-030-84252-9_13)
## The Cost to Break SIKE: A Comparative Hardware-Based Analysis with AES and SHA-3.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-3].md#the-cost-to-break-sike-a-comparative-hardware-based-analysis-with-aes-and-sha-3)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-3].md#the-cost-to-break-sike-a-comparative-hardware-based-analysis-with-aes-and-sha-3)
### Authors
* Patrick Longa, Microsoft Research, Redmond, USA
* Wen Wang, Yale University, New Haven, USA
* Jakub Szefer, Yale University, New Haven, USA
### Abstract
> This work presents a detailed study of the classical security of the post-quantum supersingular isogeny key encapsulation (SIKE) protocol using a realistic budget-based cost model that considers the actual computing and memory costs that are needed for cryptanalysis. In this effort, we design especially-tailored hardware accelerators for the time-critical multiplication and isogeny computations that we use to model an ASIC-powered instance of the van Oorschot-Wiener (vOW) parallel collision search algorithm. We then extend the analysis to AES and SHA-3 in the context of the NIST post-quantum cryptography standardization process to carry out a parameter analysis based on our cost model. This analysis, together with the state-of-the-art quantum security analysis of SIKE, indicates that the current SIKE parameters offer higher practical security than currently believed, closing an open issue on the suitability of the parameters to match NIST’s security levels. In addition, we explore the possibility of using significantly smaller primes to enable more efficient and compact implementations with reduced bandwidth. Our improved cost model and analysis can be applied to other cryptographic settings and primitives, and can have implications for other post-quantum candidates in the NIST process.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84252-9_14](https://doi.org/10.1007/978-3-030-84252-9_14)
## Improved Torsion-Point Attacks on SIDH Variants.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-3].md#improved-torsion-point-attacks-on-sidh-variants)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-3].md#improved-torsion-point-attacks-on-sidh-variants)
### Authors
* Victoria de Quehen, ISARA Corporation, Waterloo, Canada
* Chris Leonardi, ISARA Corporation, Waterloo, Canada
* Péter Kutas, School of Computer Science, University of Birmingham, Birmingham, UK
* Christophe Petit, School of Computer Science, University of Birmingham, Birmingham, UK
* Chloe Martindale, Department of Computer Science, University of Bristol, Bristol, UK
* Lorenz Panny, Institute of Information Science, Academia Sinica, Taipei, Taiwan
* Christophe Petit, Laboratoire d’Informatique, Université Libre de Bruxelles, Brussels, Belgium
* Katherine E. Stange, Department of Mathematics, University of Colorado Boulder, Boulder, CO, USA
### Abstract
> SIDH is a post-quantum key exchange algorithm based on the presumed difficulty of finding isogenies between supersingular elliptic curves. However, SIDH and related cryptosystems also reveal additional information: the restriction of a secret isogeny to a subgroup of the curve (torsion-point information). Petit [31] was the first to demonstrate that torsion-point information could noticeably lower the difficulty of finding secret isogenies. In particular, Petit showed that “overstretched” parameterizations of SIDH could be broken in polynomial time. However, this did not impact the security of any cryptosystems proposed in the literature. The contribution of this paper is twofold: First, we strengthen the techniques of [31] by exploiting additional information coming from a dual and a Frobenius isogeny. This extends the impact of torsion-point attacks considerably. In particular, our techniques yield a classical attack that completely breaks the n-party group key exchange of [2], first introduced as GSIDH in [17], for 6 parties or more, and a quantum attack for 3 parties or more that improves on the best known asymptotic complexity. We also provide a Magma implementation of our attack for 6 parties. We give the full range of parameters for which our attacks apply. Second, we construct SIDH variants designed to be weak against our attacks; this includes backdoor choices of starting curve, as well as backdoor choices of base-field prime. We stress that our results do not degrade the security of, or reveal any weakness in, the NIST submission SIKE [20].

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84252-9_15](https://doi.org/10.1007/978-3-030-84252-9_15)
## Smoothing Out Binary Linear Codes and Worst-Case Sub-exponential Hardness for LPN.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-3].md#smoothing-out-binary-linear-codes-and-worst-case-sub-exponential-hardness-for-lpn)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-3].md#smoothing-out-binary-linear-codes-and-worst-case-sub-exponential-hardness-for-lpn)
### Authors
* Yu Yu, Department of Computer Science and Engineering, Shanghai Jiao Tong University, 800 Dongchuan Road, Shanghai, 200240, China
* Yu Yu, Shanghai Qi Zhi Institute, 701 Yunjin Road, Shanghai, 200232, China
* Yu Yu, Shanghai Key Laboratory of Privacy-Preserving Computation, 701 Yunjin Road, Shanghai, 200232, China
* Jiang Zhang, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
### Abstract
> Learning parity with noise (LPN) is a notorious (average-case) hard problem that has been well studied in learning theory, coding theory and cryptography since the early 90’s. It further inspires the Learning with Errors (LWE) problem [Regev, STOC 2005], which has become one of the central building blocks for post-quantum cryptography and advanced cryptographic primitives. Unlike LWE whose hardness can be reducible from worst-case lattice problems, no corresponding worst-case hardness results were known for LPN until very recently. At Eurocrypt 2019, Brakerski et al. [BLVW19] established the first feasibility result that the worst-case hardness of nearest codeword problem (NCP) (on balanced linear code) at the extremely low noise rate \(\frac{\log ^2 n}{n}\) implies the quasi-polynomial hardness of LPN at the high noise rate \(1/2-1/\mathsf {poly}(n)\). It remained open whether a worst-case to average-case reduction can be established for standard (constant-noise) LPN, ideally with sub-exponential hardness.
> 
> We start with a simple observation that the hardness of high-noise LPN over large fields is implied by that of the LWE of the same modulus, and is thus reducible from worst-case hardness of lattice problems. We then revisit [BLVW19], which is the main focus of this work. We first expand the underlying binary linear codes (of the NCP) to not only the balanced code considered in [BLVW19] but also to another code (with a minimum dual distance). At the core of our reduction is a new variant of smoothing lemma (for both binary codes) that circumvents the barriers (inherent in the underlying worst-case randomness extraction) and admits tradeoffs for a wider spectrum of parameter choices. In addition to similar worst-case hardness result obtained in [BLVW19], we show that for any constant \(0<c<1\) the constant-noise LPN problem is (\(T=2^{\varOmega (n^{1-c})},\epsilon =2^{-\varOmega (n^{\min (c,1-c)})},q=2^{\varOmega (n^{\min (c,1-c)})}\))-hard assuming that the NCP at the low-noise rate \(\tau =n^{-c}\) is (\(T'={2^{\varOmega (\tau n)}}\), \(\epsilon '={2^{-\varOmega (\tau n)}}\), \(m={2^{\varOmega (\tau n)}}\))-hard in the worst case, where T, \(\epsilon \), q and m are time complexity, success rate, sample complexity, and codeword length respectively. Moreover, refuting the worst-case hardness assumption would imply arbitrary polynomial speedups over the current state-of-the-art algorithms for solving the NCP (and LPN), which is a win-win result. Unfortunately, public-key encryptions and collision resistant hash functions need constant-noise LPN with (\(T={2^{\omega (\sqrt{n})}}\), \(\epsilon '={2^{-\omega (\sqrt{n})}}\), \(q={2^{\sqrt{n}}}\))-hardness (Yu et al. CRYPTO 2016 & ASIACRYPT 2019), which is almost (up to an arbitrary \(\omega (1)\) factor in the exponent) what is reducible from the worst-case NCP when \(c= 0.5\). We leave it as an open problem whether the gap can be closed or there is a separation in place.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84252-9_16](https://doi.org/10.1007/978-3-030-84252-9_16)
## Silver: Silent VOLE and Oblivious Transfer from Hardness of Decoding Structured LDPC Codes.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-3].md#silver-silent-vole-and-oblivious-transfer-from-hardness-of-decoding-structured-ldpc-codes)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-3].md#silver-silent-vole-and-oblivious-transfer-from-hardness-of-decoding-structured-ldpc-codes)
### Authors
* Geoffroy Couteau, CNRS, IRIF, Université de Paris, Paris, France
* Peter Rindal, Visa Research, Palo Alto, USA
* Srinivasan Raghuraman, Visa Research, Palo Alto, USA
### Abstract
> We put forth new protocols for oblivious transfer extension and vector OLE, called Silver, for SILent Vole and oblivious transfER. Silver offers extremely high performances: generating 10 million random OTs on one core of a standard laptop requires only 300 ms of computation and 122 KB of communication. This represents 37% less computation and \(\sim \)1300\(\times \) less communication than the standard IKNP protocol, as well as \(\sim \)4\(\times \) less computation and \(\sim \)14\(\times \) less communication than the recent protocol of Yang et al. (CCS 2020). Silver is silent: after a one-time cheap interaction, two parties can store small seeds, from which they can later locally generate a large number of OTs while remaining offline. Neither IKNP nor Yang et al. enjoys this feature; compared to the best known silent OT extension protocol of Boyle et al. (CCS 2019), upon which we build up, Silver has 19\(\times \) less computation, and the same communication. Due to its attractive efficiency features, Silver yields major efficiency improvements in numerous MPC protocols.
> 
> Our approach is a radical departure from the standard paradigm for building MPC protocols, in that we do not attempt to base our constructions on a well-studied assumption. Rather, we follow an approach closer in spirit to the standard paradigm in the design of symmetric primitives: we identify a set of fundamental structural properties that allow us to withstand all known attacks, and put forth a candidate design, guided by our analysis. We also rely on extensive experimentations to analyze our candidate and experimentally validate their properties. In essence, our approach boils down to constructing new families of linear codes with (plausibly) high minimum distance and extremely low encoding time. While further analysis is of course welcomed in order to gain total confidence in the security of Silver, we hope and believe that initiating this approach to the design of MPC primitives will pave the way to new secure primitives with extremely attractive efficiency features.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84252-9_17](https://doi.org/10.1007/978-3-030-84252-9_17)
## Non-malleable Codes for Bounded Parallel-Time Tampering.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-3].md#non-malleable-codes-for-bounded-parallel-time-tampering)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-3].md#non-malleable-codes-for-bounded-parallel-time-tampering)
### Authors
* Dana Dachman-Soled, University of Maryland, College Park, USA
* Ilan Komargodski, Hebrew University of Jerusalem and NTT Research, Jerusalem, Israel
* Rafael Pass, Cornell Tech, New York City, USA
### Abstract
> Non-malleable codes allow one to encode data in such a way that once a codeword is being tampered with, the modified codeword is either an encoding of the original message, or a completely unrelated one. Since the introduction of this notion by Dziembowski, Pietrzak, and Wichs (ICS ’10 and J. ACM ’18), there has been a large body of works realizing such coding schemes secure against various classes of tampering functions. It is well known that there is no efficient non-malleable code secure against all polynomial size tampering functions. Nevertheless, no code which is non-malleable for bounded polynomial size attackers is known and obtaining such a code has been a major open problem.
> 
> We present the first construction of a non-malleable code secure against all polynomial size tampering functions that have bounded parallel time. This is an even larger class than all bounded polynomial size functions. In particular, this class includes all functions in non-uniform \(\mathbf {NC}\) (and much more). Our construction is in the plain model (i.e., no trusted setup) and relies on several cryptographic assumptions such as keyless hash functions, time-lock puzzles, as well as other standard assumptions. Additionally, our construction has several appealing properties: the complexity of encoding is independent of the class of tampering functions and we can obtain (sub-)exponentially small error.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84252-9_18](https://doi.org/10.1007/978-3-030-84252-9_18)
## Improved Computational Extractors and Their Applications.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-3].md#improved-computational-extractors-and-their-applications)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-3].md#improved-computational-extractors-and-their-applications)
### Authors
* Dakshita Khurana, University of Illinois Urbana-Champaign, Champaign, USA
* Akshayaram Srinivasan, Tata Institute of Fundamental Research, Bengaluru, India
### Abstract
> Recent exciting breakthroughs have achieved the first two-source extractors that operate in the low min-entropy regime. Unfortunately, these constructions suffer from non-negligible error, and reducing the error to negligible remains an important open problem. In recent work, Garg, Kalai, and Khurana (GKK, Eurocrypt 2020) investigated a meaningful relaxation of this problem to the computational setting, in the presence of a common random string (CRS). In this relaxed model, their work built explicit two-source extractors for a restricted class of unbalanced sources with min-entropy \(n^{\gamma }\) (for some constant \(\gamma \)) and negligible error, under the sub-exponential DDH assumption.
> 
> In this work, we investigate whether computational extractors in the CRS model be applied to more challenging environments. Specifically, we study network extractor protocols (Kalai et al., FOCS 2008) and extractors for adversarial sources (Chattopadhyay et al., STOC 2020) in the CRS model. We observe that these settings require extractors that work well for balanced sources, making the GKK results inapplicable.
> 
> We remedy this situation by obtaining the following results, all of which are in the CRS model and assume the sub-exponential hardness of DDH.
> 
> We obtain “optimal” computational two-source and non-malleable extractors for balanced sources: requiring both sources to have only poly-logarithmic min-entropy, and achieving negligible error. To obtain this result, we perform a tighter and arguably simpler analysis of the GKK extractor.
> 
> We obtain a single-round network extractor protocol for poly-logarithmic min-entropy sources that tolerates an optimal number of adversarial corruptions. Prior work in the information-theoretic setting required sources with high min-entropy rates, and in the computational setting had round complexity that grew with the number of parties, required sources with linear min-entropy, and relied on exponential hardness (albeit without a CRS).
> 
> We obtain an “optimal” adversarial source extractor for poly-logarithmic min-entropy sources, where the number of honest sources is only 2 and each corrupted source can depend on either one of the honest sources. Prior work in the information-theoretic setting had to assume a large number of honest sources.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84252-9_19](https://doi.org/10.1007/978-3-030-84252-9_19)
## Adaptive Extractors and Their Application to Leakage Resilient Secret Sharing.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-3].md#adaptive-extractors-and-their-application-to-leakage-resilient-secret-sharing)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-3].md#adaptive-extractors-and-their-application-to-leakage-resilient-secret-sharing)
### Authors
* Nishanth Chandran, Microsoft Research, Bangalore, India
* Sai Lakshmi Bhavana Obbattu, Microsoft Research, Bangalore, India
* Bhavana Kanukurthi, Indian Institute of Science, Research Supported by Microsoft Research Grant, Bangalore, India
* Sruthi Sekar, Indian Institute of Science, Research Supported by TCS Research Grant, Bangalore, India
### Abstract
> We introduce Adaptive Extractors, which unlike traditional randomness extractors, guarantee security even when an adversary obtains leakage on the source after observing the extractor output. We make a compelling case for the study of such extractors by demonstrating their use in obtaining adaptive leakage in secret sharing schemes.
> 
> Specifically, at FOCS 2020, Chattopadhyay, Goodman, Goyal, Kumar, Li, Meka, Zuckerman, built an adaptively secure leakage resilient secret sharing scheme (LRSS) with both rate and leakage rate being \(\mathcal {O}(1/n)\), where \(n\) is the number of parties. In this work, we build an adaptively secure LRSS that offers an interesting trade-off between rate, leakage rate, and the total number of shares from which an adversary can obtain leakage. As a special case, when considering t-out-of-n secret sharing schemes for threshold \(t = \alpha n\) (constant \(0<\alpha <1\)), we build a scheme with a constant rate, constant leakage rate, and allow the adversary leakage from all but \(t-1\) of the shares, while giving her the remaining \(t-1\) shares completely in the clear. (Prior to this, constant rate LRSS scheme tolerating adaptive leakage was unknown for any threshold.)
> 
> Finally, we show applications of our techniques to both non-malleable secret sharing and secure message transmission.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84252-9_20](https://doi.org/10.1007/978-3-030-84252-9_20)
## Upslices, Downslices, and Secret-Sharing with Complexity of 1.5n.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-3].md#upslices-downslices-and-secret-sharing-with-complexity-of-1-5n)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-3].md#upslices-downslices-and-secret-sharing-with-complexity-of-1-5n)
### Authors
* Benny Applebaum, Tel Aviv University, Tel Aviv, Israel
* Oded Nir, Tel Aviv University, Tel Aviv, Israel
### Abstract
> A secret-sharing scheme allows to distribute a secret s among n parties such that only some predefined “authorized” sets of parties can reconstruct the secret, and all other “unauthorized” sets learn nothing about s. The collection of authorized/unauthorized sets can be captured by a monotone function \(f:\{0,1\}^n\rightarrow \{0,1\}\). In this paper, we focus on monotone functions that all their min-terms are sets of size a, and on their duals – monotone functions whose max-terms are of size b. We refer to these classes as (a, n)-upslices and (b, n)-downslices, and note that these natural families correspond to monotone a-regular DNFs and monotone \((n-b)\)-regular CNFs. We derive the following results.
> 
> 1. (General downslices) Every downslice can be realized with total share size of \(1.5^{n+o(n)}<2^{0.585 n}\). Since every monotone function can be cheaply decomposed into n downslices, we obtain a similar result for general access structures improving the previously known \(2^{0.637n+o(n)}\) complexity of Applebaum, Beimel, Nir and Peter (STOC 2020). We also achieve a minor improvement in the exponent of linear secrets sharing schemes.
> 
> 2. (Random mixture of upslices) Following Beimel and Farràs (TCC 2020) who studied the complexity of random DNFs with constant-size terms, we consider the following general distribution F over monotone DNFs: For each width value \(a\in [n]\), uniformly sample \(k_a\) monotone terms of size a, where \(\mathbf{k}=(k_1,\ldots ,k_n)\) is an arbitrary vector of non-negative integers. We show that, except with exponentially small probability, F can be realized with share size of \(2^{0.5 n+o(n)}\) and can be linearly realized with an exponent strictly smaller than 2/3. Our proof also provides a candidate distribution for “exponentially-hard” access structure.
> 
> We use our results to explore connections between several seemingly unrelated questions about the complexity of secret-sharing schemes such as worst-case vs. average-case, linear vs. non-linear and primal vs. dual access structures. We prove that, in at least one of these settings, there is a significant gap in secret-sharing complexity.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84252-9_21](https://doi.org/10.1007/978-3-030-84252-9_21)
## Asymptotically-Good Arithmetic Secret Sharing over $\mathbb {Z}/p^{\ell }\mathbb {Z}$ with Strong Multiplication and Its Applications to Efficient MPC.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-3].md#asymptotically-good-arithmetic-secret-sharing-over-mathbb-z-p-ell-mathbb-z-with-strong-multiplication-and-its-applications-to-efficient-mpc)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-3].md#asymptotically-good-arithmetic-secret-sharing-over-mathbb-z-p-ell-mathbb-z-with-strong-multiplication-and-its-applications-to-efficient-mpc)
### Authors
* Ronald Cramer, Cryptology Group, CWI Amsterdam, Amsterdam, The Netherlands
* Ronald Cramer, Leiden University, Leiden, The Netherlands
* Matthieu Rambaud, Telecom Paris, Institut Polytechnique de Paris, Paris, France
* Chaoping Xing, School of Electronic Information and Electric Engineering, Shanghai Jiao Tong University, Shanghai, China
* Chaoping Xing, State Key Laboratory of Cryptology, Beijing, China
### Abstract
> This paper studies information-theoretically secure multiparty computation (MPC) over rings \(\mathbb {Z}/p^{\ell }\mathbb {Z}\). In the work of [Abs+19a, TCC’19], a protocol based on the Shamir secret sharing over \(\mathbb {Z}/p^{\ell }\mathbb {Z}\) was presented. As in the field case, its limitation is that the share size grows as the number of players increases. Then several MPC protocols were developed in [Abs+20, Asiacrypt’20] to overcome this limitation. However, (i) their offline multiplication gate has super-linear communication complexity in the number of players; (ii) the share size is doubled for the most important case, namely over \(\mathbb {Z}/2^{\ell }\mathbb {Z}\) due to infeasible lifting of self-orthogonal codes from fields to rings; (iii) most importantly, the BGW model could not be applied via the secret sharing given in [Abs+20, Asiacrypt’20] due to lack of strong multiplication.
> 
> In this paper we overcome all the drawbacks mentioned above. Of independent interest, we establish an arithmetic secret sharing with strong multiplication, which is the most important primitive in the BGW model. Incidentally, our solution to (i) has some advantages over the concurrent one of [PS21, EC’21], since it is direct, is only one-page long, and furthermore carries over \(\mathbb {Z}/p^{\ell }\mathbb {Z}\). Finally, we lift Reverse Multiplication Friendly Embeddings (RMFE) from fields to rings, with same (linear) complexity. Note that RMFE has become a standard technique for communication complexity in MPC in the regime over many instances of the same circuit, as in [Cas+18, Crypto’18] and [DLN19, Crypto’19]. We thus recover the same amortized complexity of MPC over \(\mathbb {Z}/2^{\ell }\mathbb {Z}\) than over fields.
> 
> To obtain our theoretical results, we use the existence of lifts of curves over rings, then use the known results stating that Riemann-Roch spaces are free modules. To make our scheme practical, we start from good algebraic geometry codes over finite fields obtained from existing computational techniques. Then we present, and implement, an efficient algorithm to Hensel-lift the generating matrix of the code, such that the multiplicative conditions are preserved over rings. On the other hand, a random lifting of codes over rings does not preserve multiplicativity in general. Finally we provide efficient methods for sharing and reconstruction over rings.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84252-9_22](https://doi.org/10.1007/978-3-030-84252-9_22)
## Large Message Homomorphic Secret Sharing from DCR and Applications.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-3].md#large-message-homomorphic-secret-sharing-from-dcr-and-applications)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-3].md#large-message-homomorphic-secret-sharing-from-dcr-and-applications)
### Authors
* Lawrence Roy, Oregon State University, Corvallis, USA
* Jaspal Singh, Oregon State University, Corvallis, USA
### Abstract
> We present the first homomorphic secret sharing (HSS) construction that simultaneously (1) has negligible correctness error, (2) supports integers from an exponentially large range, and (3) relies on an assumption not known to imply FHE—specifically, the Decisional Composite Residuosity (DCR) assumption. This resolves an open question posed by Boyle, Gilboa, and Ishai (Crypto 2016). Homomorphic secret sharing is analogous to fully-homomorphic encryption, except the ciphertexts are shared across two non-colluding evaluators. Previous constructions of HSS either had non-negligible correctness error and polynomial-size plaintext space or were based on the stronger LWE assumption. We also present two applications of our technique: a two server ORAM with constant bandwidth overhead, and a rate-1 trapdoor hash function with negligible error rate.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84252-9_23](https://doi.org/10.1007/978-3-030-84252-9_23)
## Traceable Secret Sharing and Applications.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-3].md#traceable-secret-sharing-and-applications)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-3].md#traceable-secret-sharing-and-applications)
### Authors
* Vipul Goyal, Carnegie Mellon University, Pittsburgh, USA
* Yifan Song, Carnegie Mellon University, Pittsburgh, USA
* Vipul Goyal, NTT Research, Sunnyvale, USA
* Akshayaram Srinivasan, Tata Institute of Fundamental Research, Mumbai, India
### Abstract
> Consider a scenario where Alice stores some secret data s on n servers using a t-out-of-n secret sharing scheme. Trudy (the collector) is interested in the secret data of Alice and is willing to pay for it. Trudy publishes an advertisement on the internet which describes an elaborate cryptographic scheme to collect the shares from the n servers. Each server who decides to submit its share is paid a hefty monetary reward and is guaranteed “immunity” from being caught or prosecuted in a court for violating its service agreement with Alice. Bob is one of the servers and sees this advertisement. On examining the collection scheme closely, Bob concludes that there is no way for Alice to prove anything in a court that he submitted his share. Indeed, if Bob is rational, he might use the cryptographic scheme in the advertisement and submit his share since there are no penalties and no fear of being caught and prosecuted. Can we design a secret sharing scheme which Alice can use to avoid such a scenario?
> 
> We introduce a new primitive called as Traceable Secret Sharing to tackle this problem. In particular, a traceable secret sharing scheme guarantees that a cheating server always runs the risk of getting traced and prosecuted by providing a valid evidence (which can be examined in a court of law) implicating its dishonest behavior. We explore various definitional aspects and show how they are highly non-trivial to construct (even ignoring efficiency aspects). We then give an efficient construction of traceable secret sharing assuming the existence of a secure two-party computation protocol. We also show an application of this primitive in constructing traceable protocols for multi-server delegation of computation.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84252-9_24](https://doi.org/10.1007/978-3-030-84252-9_24)
## Quadratic Secret Sharing and Conditional Disclosure of Secrets.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-3].md#quadratic-secret-sharing-and-conditional-disclosure-of-secrets)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-3].md#quadratic-secret-sharing-and-conditional-disclosure-of-secrets)
### Authors
* Amos Beimel, Ben-Gurion University of the Negev, Be’er-Sheva, Israel
* Hussien Othman, Ben-Gurion University of the Negev, Be’er-Sheva, Israel
* Naty Peter, Tel-Aviv University, Tel-Aviv, Israel
### Abstract
> There is a huge gap between the upper and lower bounds on the share size of secret-sharing schemes for arbitrary n-party access structures, and consistent with our current knowledge the optimal share size can be anywhere between polynomial in n and exponential in n. For linear secret-sharing schemes, we know that the share size for almost all n-party access structures must be exponential in n. Furthermore, most constructions of efficient secret-sharing schemes are linear. We would like to study larger classes of secret-sharing schemes with two goals. On one hand, we want to prove lower bounds for larger classes of secret-sharing schemes, possibly shedding some light on the share size of general secret-sharing schemes. On the other hand, we want to construct efficient secret-sharing schemes for access structures that do not have efficient linear secret-sharing schemes. Given this motivation, Paskin-Cherniavsky and Radune (ITC’20) defined and studied a new class of secret-sharing schemes in which the shares are generated by applying degree-d polynomials to the secret and some random field elements. The special case \(d=1\) corresponds to linear and multi-linear secret-sharing schemes.
> 
> We define and study two additional classes of polynomial secret-sharing schemes: (1) schemes in which for every authorized set the reconstruction of the secret is done using polynomials and (2) schemes in which both sharing and reconstruction are done by polynomials. For linear secret-sharing schemes, schemes with linear sharing and schemes with linear reconstruction are equivalent. We give evidence that for polynomial secret-sharing schemes, schemes with polynomial sharing are probably stronger than schemes with polynomial reconstruction. We also prove lower bounds on the share size for schemes with polynomial reconstruction. On the positive side, we provide constructions of secret-sharing schemes and conditional disclosure of secrets (CDS) protocols with quadratic sharing and reconstruction. We extend a construction of Liu et al. (CRYPTO’17) and construct optimal quadratic k-server CDS protocols for functions with message size \(O(N^{(k-1)/3})\). We show how to transform our quadratic k-server CDS protocol to a robust CDS protocol, and use the robust CDS protocol to construct quadratic secret-sharing schemes for arbitrary access structures with share size \(O(2^{0.705n})\); this is better than the best known share size of \(O(2^{0.7576n})\) for linear secret-sharing schemes and worse than the best known share size of \(O(2^{0.585n})\) for general secret-sharing schemes.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84252-9_25](https://doi.org/10.1007/978-3-030-84252-9_25)
## Constructing Locally Leakage-Resilient Linear Secret-Sharing Schemes.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-3].md#constructing-locally-leakage-resilient-linear-secret-sharing-schemes)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-3].md#constructing-locally-leakage-resilient-linear-secret-sharing-schemes)
### Authors
* Hemanta K. Maji, Department of Computer Science, Purdue University, West Lafayette, USA
* Mingyuan Wang, Department of Computer Science, Purdue University, West Lafayette, USA
* Anat Paskin-Cherniavsky, Department of Computer Science, Ariel University, Ariel, Israel
* Tom Suad, Department of Computer Science, Ariel University, Ariel, Israel
### Abstract
> Innovative side-channel attacks have repeatedly falsified the assumption that cryptographic implementations are opaque black-boxes. Therefore, it is essential to ensure cryptographic constructions’ security even when information leaks via unforeseen avenues. One such fundamental cryptographic primitive is the secret-sharing schemes, which underlies nearly all threshold cryptography. Our understanding of the leakage-resilience of secret-sharing schemes is still in its preliminary stage.
> 
> This work studies locally leakage-resilient linear secret-sharing schemes. An adversary can leak m bits of arbitrary local leakage from each n secret shares. However, in a locally leakage-resilient secret-sharing scheme, the leakage’s joint distribution reveals no additional information about the secret.
> 
> For every constant m, we prove that the Massey secret-sharing scheme corresponding to a random linear code of dimension k (over sufficiently large prime fields) is locally leakage-resilient, where \(k/n > 1/2\) is a constant. The previous best construction by Benhamouda, Degwekar, Ishai, Rabin (CRYPTO–2018) needed \(k/n > 0.907\). A technical challenge arises because the number of all possible m-bit local leakage functions is exponentially larger than the number of random linear codes. Our technical innovation begins with identifying an appropriate pseudorandomness-inspired family of tests; passing them suffices to ensure leakage-resilience. We show that most linear codes pass all tests in this family. This Monte-Carlo construction of linear secret-sharing scheme that is locally leakage-resilient has applications to leakage-resilient secure computation.
> 
> Furthermore, we highlight a crucial bottleneck for all the analytical approaches in this line of work. Benhamouda et al. introduced an analytical proxy to study the leakage-resilience of secret-sharing schemes; if the proxy is small, then the scheme is leakage-resilient. However, we present a one-bit local leakage function demonstrating that the converse is false, motivating the need for new analytically well-behaved functions that capture leakage-resilience more accurately.
> 
> Technically, the analysis involves probabilistic and combinatorial techniques and (discrete) Fourier analysis. The family of new “tests” capturing local leakage functions, we believe, is of independent and broader interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84252-9_26](https://doi.org/10.1007/978-3-030-84252-9_26)
