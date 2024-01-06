# IEEE Symposium on Security and Privacy[2022]
## PATA: Fuzzing with Path Aware Taint Analysis.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#pata-fuzzing-with-path-aware-taint-analysis)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#pata-fuzzing-with-path-aware-taint-analysis)
### Authors
* Jie Liang, School of Software, Tsinghua University, KLISS, BNRist, Beijing, China
* Mingzhe Wang, School of Software, Tsinghua University, KLISS, BNRist, Beijing, China
* Chijin Zhou, School of Software, Tsinghua University, KLISS, BNRist, Beijing, China
* Zhiyong Wu, School of Software, Tsinghua University, KLISS, BNRist, Beijing, China
* Yu Jiang, School of Software, Tsinghua University, KLISS, BNRist, Beijing, China
* Jianzhong Liu, School of Software, Tsinghua University, KLISS, BNRist, Beijing, China
* Zhe Liu, Computer Science and Technology, Nanjing University of Aeronautics and Astronautics, Nanjing, China
* Jiaguang Sun, School of Software, Tsinghua University, KLISS, BNRist, Beijing, China
### Abstract
> Taint analysis assists fuzzers in solving complex fuzzing constraints by inferring the influencing input bytes. Execution paths in real-world programs often reach loops, where constraints in these loops can be visited and recorded multiple times. Conventional taint analysis techniques experience difficulties when distinguishing between multiple occurrences of the same constraint. In this paper, we propose PATA, a fuzzer that implements path-aware taint analysis, i.e. one that distinguishes between multiple occurrences of the same variable based on the execution path information. PATA does so using the following steps. First, PATA identifies variables used in constraints and constructs the Representative Variable Sequence (RVS), consisting of occurrences of all representative constraint variables and their values. Next, PATA perturbs the input, matches its RVS with that of the original input, and looks for value changes to identify the influencing input bytes for each entry in the RVS. Finally, PATA mutates the corresponding input bytes to solve constraints in the given path. To demonstrate the effectiveness of PATA over conventional taint analysis methods, we evaluated its performance on the benchmarks Google’s fuzzer-test-suite and LAVA-M against AFL, MOPT, TortoriseFuzz, VUzzer, Angora, Redqueen, and Greyone. On Google’s fuzzer-test-suite, PATA outperformed these state-of-the-art fuzzers by 29%–1830% and 7%–87% in the number of unique paths found and basic blocks covered, respectively. More importantly, it found more bugs than the comparison fuzzers, including 17 unlisted ones. On LAVA-M, PATA performed the best out of all evaluated fuzzers and found 2602 bugs. On open-source projects, PATA found 40 previously unknown bugs, with 12 of them confirmed as CVEs.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833594/](https://ieeexplore.ieee.org/document/9833594/)
## JIGSAW: Efficient and Scalable Path Constraints Fuzzing.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#jigsaw-efficient-and-scalable-path-constraints-fuzzing)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#jigsaw-efficient-and-scalable-path-constraints-fuzzing)
### Authors
* Ju Chen, Computer Science and Engineering Department, University of California, Riverside
* Jinghan Wang, Computer Science and Engineering Department, University of California, Riverside
* Chengyu Song, Computer Science and Engineering Department, University of California, Riverside
* Heng Yin, Computer Science and Engineering Department, University of California, Riverside
### Abstract
> Coverage-guided testing has shown to be an effective way to find bugs. If we model coverage-guided testing as a search problem (i.e., finding inputs that can cover more branches), then its efficiency mainly depends on two factors: (1) the accuracy of the searching algorithm and (2) the number of inputs that can be evaluated per unit time. Therefore, improving the search throughput has shown to be an effective way to improve the performance of coverage-guided testing.In this work, we present a novel design to improve the search throughput: by evaluating newly generated inputs with JIT-compiled path constraints. This approach allows us to significantly improve the single thread throughput as well as scaling to multiple cores. We also developed several optimization techniques to eliminate major bottlenecks during this process. Evaluation of our prototype JIGSAW shows that our approach can achieve three orders of magnitude higher search throughput than existing fuzzers and can scale to multiple cores. We also find that with such high throughput, a simple gradient-guided search heuristic can solve path constraints collected from a large set of real-world programs faster than SMT solvers with much more sophisticated search heuristics. Evaluation of end-to-end coverage-guided testing also shows that our JIGSAW-powered hybrid fuzzer can outperform state-of-the-art testing tools.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833796/](https://ieeexplore.ieee.org/document/9833796/)
## BEACON: Directed Grey-Box Fuzzing with Provable Path Pruning.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#beacon-directed-grey-box-fuzzing-with-provable-path-pruning)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#beacon-directed-grey-box-fuzzing-with-provable-path-pruning)
### Authors
* Heqing Huang, The Hong Kong University of Science and Technology, China
* Yiyuan Guo, The Hong Kong University of Science and Technology, China
* Qingkai Shi, The Hong Kong University of Science and Technology, China
* Peisen Yao, The Hong Kong University of Science and Technology, China
* Rongxin Wu, Xiamen University, China
* Charles Zhang, The Hong Kong University of Science and Technology, China
### Abstract
> Unlike coverage-based fuzzing that gives equal attention to every part of a code, directed fuzzing aims to direct a fuzzer to a specific target in the code, e.g., the code with potential vulnerabilities. Despite much progress, we observe that existing directed fuzzers are still not efficient as they often symbolically or concretely execute a lot of program paths that cannot reach the target code. They thus waste a lot of computational resources. This paper presents BEACON, which can effectively direct a grey-box fuzzer in the sea of paths in a provable manner. That is, assisted by a lightweight static analysis that computes abstracted preconditions for reaching the target, we can prune 82.94% of the executing paths at runtime with negligible analysis overhead (<5h) but with the guarantee that the pruned paths must be spurious with respect to the target. We have implemented our approach, BEACON, and compared it to five state-of-the-art (directed) fuzzers in the application scenario of vulnerability reproduction. The evaluation results demonstrate that BEACON is 11.50x faster on average than existing directed grey-box fuzzers and it can also improve the speed of the conventional coverage-guided fuzzers, AFL, AFL++, and Mopt, to reproduce specific bugs with 6.31x, 11.86x, and 10.92x speedup, respectively. More interestingly, when used to test the vulnerability patches, BEACON found 14 incomplete fixes of existing CVE-identified vulnerabilities and 8 new bugs while 10 of them are exploitable with new CVE ids assigned.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833751/](https://ieeexplore.ieee.org/document/9833751/)
## Automated Attack Synthesis by Extracting Finite State Machines from Protocol Specification Documents.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#automated-attack-synthesis-by-extracting-finite-state-machines-from-protocol-specification-documents)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#automated-attack-synthesis-by-extracting-finite-state-machines-from-protocol-specification-documents)
### Authors
* Maria Leonor Pacheco, Purdue University, West Lafeyette, IN, USA
* Max von Hippel, Northeastern University, Boston, MA, USA
* Ben Weintraub, Northeastern University, Boston, MA, USA
* Dan Goldwasser, Purdue University, West Lafeyette, IN, USA
* Cristina Nita-Rotaru, Northeastern University, Boston, MA, USA
### Abstract
> Automated attack discovery techniques, such as attacker synthesis or model-based fuzzing, provide powerful ways to ensure network protocols operate correctly and securely. Such techniques, in general, require a formal representation of the protocol, often in the form of a finite state machine (FSM). Unfortunately, many protocols are only described in English prose, and implementing even a simple network protocol as an FSM is time-consuming and prone to subtle logical errors. Automatically extracting protocol FSMs from documentation can significantly contribute to increased use of these techniques and result in more robust and secure protocol implementations.In this work we focus on attacker synthesis as a representative technique for protocol security, and on RFCs as a representative format for protocol prose description. Unlike other works that rely on rule-based approaches or use off-the-shelf NLP tools directly, we suggest a data-driven approach for extracting FSMs from RFC documents. Specifically, we use a hybrid approach consisting of three key steps: (1) large-scale word-representation learning for technical language, (2) focused zero-shot learning for mapping protocol text to a protocol-independent information language, and (3) rule-based mapping from protocol-independent information to a specific protocol FSM. We show the generalizability of our FSM extraction by using the RFCs for six different protocols: BGPv4, DCCP, LTP, PPTP, SCTP and TCP. We demonstrate how automated extraction of an FSM from an RFC can be applied to the synthesis of attacks, with TCP and DCCP as case-studies. Our approach shows that it is possible to automate attacker synthesis against protocols by using textual specifications such as RFCs.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833673/](https://ieeexplore.ieee.org/document/9833673/)
## ProVerif with Lemmas, Induction, Fast Subsumption, and Much More.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#proverif-with-lemmas-induction-fast-subsumption-and-much-more)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#proverif-with-lemmas-induction-fast-subsumption-and-much-more)
### Authors
* Bruno Blanchet, Inria Paris, Paris, France
* Vincent Cheval, Inria Paris, Paris, France
* Véronique Cortier, Université de Lorraine, CNRS, Inria, LORIA, Nancy, France
### Abstract
> This paper presents a major overhaul of one the most widely used symbolic security protocol verifiers, ProVerif. We provide two main contributions. First, we extend ProVerif with lemmas, axioms, proofs by induction, natural numbers, and temporal queries. These features not only extend the scope of ProVerif, but can also be used to improve its precision (that is, avoid false attacks) and make it terminate more often. Second, we rework and optimize many of the algorithms used in ProVerif (generation of clauses, resolution, subsumption, …), resulting in impressive speed-ups on large examples.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833653/](https://ieeexplore.ieee.org/document/9833653/)
## Four Attacks and a Proof for Telegram.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#four-attacks-and-a-proof-for-telegram)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#four-attacks-and-a-proof-for-telegram)
### Authors
* Martin R. Albrecht, Information Security Group, Royal Holloway, University of London
* Lenka Mareková, Information Security Group, Royal Holloway, University of London
* Kenneth G. Paterson, Applied Cryptography Group, ETH Zurich
* Igors Stepanovs, Applied Cryptography Group, ETH Zurich
### Abstract
> We study the use of symmetric cryptography in the MTProto 2.0 protocol, Telegram’s equivalent of the TLS record protocol. We give positive and negative results. On the one hand, we formally and in detail model a slight variant of Telegram’s “record protocol” and prove that it achieves security in a suitable bidirectional secure channel model, albeit under unstudied assumptions; this model itself advances the state-of-the-art for secure channels. On the other hand, we first motivate our modelling deviation from MTProto as deployed by giving two attacks – one of practical, one of theoretical interest – against MTProto without our modifications. We then also give a third attack exploiting timing side channels, of varying strength, in three official Telegram clients. On its own this attack is thwarted by the secrecy of salt and id fields that are established by Telegram’s key exchange protocol. To recover these, we chain the third attack with a fourth one against the implementation of the key exchange protocol on Telegram’s servers. In totality, our results provide the first comprehensive study of MTProto’s use of symmetric cryptography.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833666/](https://ieeexplore.ieee.org/document/9833666/)
## Noise*: A Library of Verified High-Performance Secure Channel Protocol Implementations.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#noise-a-library-of-verified-high-performance-secure-channel-protocol-implementations)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#noise-a-library-of-verified-high-performance-secure-channel-protocol-implementations)
### Authors
* Son Ho, Inria Paris
* Jonathan Protzenko, Microsoft Research
* Abhishek Bichhawat, IIT Gandhinagar
* Karthikeyan Bhargavan, Inria Paris
### Abstract
> The Noise protocol framework defines a succinct notation and execution framework for a large class of 59+ secure channel protocols, some of which are used in popular applications such as WhatsApp and WireGuard. We present a verified implementation of a Noise protocol compiler that takes any Noise protocol, and produces an optimized C implementation with extensive correctness and security guarantees. To this end, we formalize the complete Noise stack in F <sup>*</sup> , from the low-level cryptographic library to a high-level API. We write our compiler also in F <sup>*</sup> , prove that it meets our formal specification once and for all, and then specialize it on-demand for any given Noise protocol, relying on a novel technique called hybrid embedding. We thus establish functional correctness, memory safety and a form of side-channel resistance for the generated C code for each Noise protocol. We propagate these guarantees to the high-level API, using defensive dynamic checks to prevent incorrect uses of the protocol. Finally, we formally state and prove the security of our Noise code, by building on a symbolic model of cryptography in F <sup>*</sup> , and formally link high-level API security goals stated in terms of security levels to low-level cryptographic guarantees. Ours are the first comprehensive verification results for a protocol compiler that targets C code and the first verified implementations of any Noise protocol. We evaluate our framework by generating implementations for all 59 Noise protocols and by comparing the size, performance, and security of our verified code against other (unverified) implementations and prior security analyses of Noise.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833621/](https://ieeexplore.ieee.org/document/9833621/)
## A Logic and an Interactive Prover for the Computational Post-Quantum Security of Protocols.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#a-logic-and-an-interactive-prover-for-the-computational-post-quantum-security-of-protocols)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#a-logic-and-an-interactive-prover-for-the-computational-post-quantum-security-of-protocols)
### Authors
* Cas Cremers, CISPA Helmholtz Center for Information Security, Germany
* Caroline Fontaine, Université Paris-Saclay, CNRS, ENS Paris-Saclay, Laboratoire Méthodes Formelles, Gif-sur-Yvette, France
* Charlie Jacomme, CISPA Helmholtz Center for Information Security, Germany
### Abstract
> We provide the first mechanized post-quantum sound security protocol proofs. We achieve this by developing PQ-BC, a computational first-order logic that is sound with respect to quantum attackers, and corresponding mechanization support in the form of the PQ-SQUIRREL prover. Our work builds on the classical BC logic [7] and its mechanization in the SQUIRREL [5] prover. Our development of PQ-BC requires making the BC logic sound for a single interactive quantum attacker. We implement the PQ-SQuiRREL prover by modifying SQUIRREL, relying on the soundness results of PQ-BC and enforcing a set of syntactic conditions; additionally, we provide new tactics for the logic that extend the tool’s scope. Using PQ-SQUIRREL, we perform several case studies, thereby giving the first mechanical proofs of their computational post-quantum security. These include two generic constructions of KEM based key exchange, two sub-protocols from IKEv1 and IKEv2, and a proposed post-quantum variant of Signal’s X3DH protocol. Additionally, we use PQ-SQuiRREL to prove that several classical SQUIRREL case studies are already post-quantum sound.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833800/](https://ieeexplore.ieee.org/document/9833800/)
## IronMask: Versatile Verification of Masking Security.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#ironmask-versatile-verification-of-masking-security)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#ironmask-versatile-verification-of-masking-security)
### Authors
* Sonia Belaïd, CryptoExperts, France
* Darius Mercadier, CryptoExperts, France
* Matthieu Rivain, CryptoExperts, France
* Abdul Rahman Taleb, CryptoExperts, France; Sorbonne Université, CNRS, LIP6, Paris, France
### Abstract
> This paper introduces lronMask, a new versatile verification tool for masking security. lronMask is the first to offer the verification of standard simulation-based security notions in the probing model as well as recent composition and expandability notions in the random probing model. It supports any masking gadgets with linear randomness (e.g. addition, copy and refresh gadgets) as well as quadratic gadgets (e.g. multiplication gadgets) that might include non-linear randomness (e.g. by refreshing their inputs), while providing complete verification results for both types of gadgets. We achieve this complete verifiability by introducing a new algebraic characterization for such quadratic gadgets and exhibiting a complete method to determine the sets of input shares which are necessary and sufficient to perform a perfect simulation of any set of probes. We report various benchmarks which show that lronMask is competitive with state-of-the-art verification tools in the probing model (maskVerif, scVerif, SILVEH, matverif). lronMask is also several orders of magnitude faster than VHAPS -the only previous tool verifying random probing composability and expandability- as well as SILVEH -the only previous tool providing complete verification for quadratic gadgets with nonlinear randomness. Thanks to this completeness and increased performance, we obtain better bounds for the tolerated leakage probability of state-of-the-art random probing secure compilers.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833600/](https://ieeexplore.ieee.org/document/9833600/)
## SAILFISH: Vetting Smart Contract State-Inconsistency Bugs in Seconds.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#sailfish-vetting-smart-contract-state-inconsistency-bugs-in-seconds)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#sailfish-vetting-smart-contract-state-inconsistency-bugs-in-seconds)
### Authors
* Priyanka Bose, University of California, Santa Barbara
* Dipanjan Das, University of California, Santa Barbara
* Yanju Chen, University of California, Santa Barbara
* Yu Feng, University of California, Santa Barbara
* Christopher Kruegel, University of California, Santa Barbara
* Giovanni Vigna, University of California, Santa Barbara
### Abstract
> This paper presents SAILFISH, a scalable system for automatically finding state-inconsistency bugs in smart contracts. To make the analysis tractable, we introduce a hybrid approach that includes (i) a light-weight exploration phase that dramatically reduces the number of instructions to analyze, and (ii) a precise refinement phase based on symbolic evaluation guided by our novel value-summary analysis, which generates extra constraints to over-approximate the side effects of whole-program execution, thereby ensuring the precision of the symbolic evaluation. We developed a prototype of SAILFISH and evaluated its ability to detect two state-inconsistency flaws, viz., reentrancy and transaction order dependence (TOD) in Ethereum smart contracts. Our experiments demonstrate the efficiency of our hybrid approach as well as the benefit of the value summary analysis. In particular, we show that SAILFISH outperforms five state-of the-art smart contract analyzers (SECURIFY, MYTHRIL, OYENTE, SEREUM and VANDAL) in terms of performance, and precision. In total, SAILFISH discovered 47 previously unknown vulnerable smart contracts out of 89,853 smart contracts from ETHERSCAN.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833721/](https://ieeexplore.ieee.org/document/9833721/)
## ZeeStar: Private Smart Contracts by Homomorphic Encryption and Zero-knowledge Proofs.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#zeestar-private-smart-contracts-by-homomorphic-encryption-and-zero-knowledge-proofs)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#zeestar-private-smart-contracts-by-homomorphic-encryption-and-zero-knowledge-proofs)
### Authors
* Samuel Steffen, ETH Zurich, Switzerland
* Benjamin Bichsel, ETH Zurich, Switzerland
* Roger Baumgartner, ETH Zurich, Switzerland
* Martin Vechev, ETH Zurich, Switzerland
### Abstract
> Data privacy is a key concern for smart contracts handling sensitive data. The existing work zkay addresses this concern by allowing developers without cryptographic expertise to enforce data privacy. However, while zkay avoids fundamental limitations of other private smart contract systems, it cannot express key applications that involve operations on foreign data.We present ZeeStar, a language and compiler allowing non-experts to instantiate private smart contracts and supporting operations on foreign data. The ZeeStar language allows developers to ergonomically specify privacy constraints using zkay’s privacy annotations. The ZeeStar compiler then provably realizes these constraints by combining non-interactive zero-knowledge proofs and additively homomorphic encryption.We implemented ZeeStar for the public blockchain Ethereum. We demonstrated its expressiveness by encoding 12 example contracts, including oblivious transfer and a private payment system like Zether. ZeeStar is practical: it prepares transactions for our contracts in at most 54.7s, at an average cost of 339k gas.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833732/](https://ieeexplore.ieee.org/document/9833732/)
## Quantifying Blockchain Extractable Value: How dark is the forest?
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#quantifying-blockchain-extractable-value-how-dark-is-the-forest)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#quantifying-blockchain-extractable-value-how-dark-is-the-forest)
### Authors
* Kaihua Qin, Imperial College, London
* Liyi Zhou, Imperial College, London
* Arthur Gervais, Imperial College, London
### Abstract
> Permissionless blockchains such as Bitcoin have excelled at financial services. Yet, opportunistic traders extract monetary value from the mesh of decentralized finance (DeFi) smart contracts through so-called blockchain extractable value (BEV). The recent emergence of centralized BEV relayer portrays BEV as a positive additional revenue source. Because BEV was quantitatively shown to deteriorate the blockchain’s consensus security, BEV relayers endanger the ledger security by incentivizing rational miners to fork the chain. For example, a rational miner with a 10% hashrate will fork Ethereum if a BEV opportunity exceeds 4x the block reward.However, related work is currently missing quantitative in-sights on past BEV extraction to assess the practical risks of BEV objectively. In this work, we allow to quantity the BEV danger by deriving the USD extracted from sandwich attacks, liquidations, and decentralized exchange arbitrage. We estimate that over 32 months, BEV yielded 540.54M USD in profit, divided among 11,289 addresses when capturing 49,691 cryptocurrencies and 60, 830 on-chain markets. The highest BEV instance we find amounts to 4.1MUSD, 616.6x the Ethereum block reward.Moreover, while the practitioner’s community has discussed the existence of generalized trading bots, we are, to our knowledge, the first to provide a concrete algorithm. Our algorithm can replace unconfirmed transactions without the need to understand the victim transactions’ underlying logic, which we estimate to have yielded a profit of 57,037.32 ETH (35.37MUSD) over 32 months of past blockchain data.Finally, we formalize and analyze emerging BEV relay systems, where miners accept BEV transactions from a centralized relay server instead of the peer-to-peer (P2P) network. We find that such relay systems aggravate the consensus layer attacks and therefore further endanger blockchain security.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833734/](https://ieeexplore.ieee.org/document/9833734/)
## A Formal Security Analysis of the W3C Web Payment APIs: Attacks and Verification.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#a-formal-security-analysis-of-the-w3c-web-payment-apis-attacks-and-verification)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#a-formal-security-analysis-of-the-w3c-web-payment-apis-attacks-and-verification)
### Authors
* Quoc Huy Do, University of Stuttgart, Stuttgart, Germany
* Pedram Hosseyni, University of Stuttgart, Stuttgart, Germany
* Ralf Küsters, University of Stuttgart, Stuttgart, Germany
* Guido Schmitz, University of Stuttgart, Stuttgart, Germany; Royal Holloway, University of London, Egham, Surrey, UK
* Nils Wenzler, University of Stuttgart, Stuttgart, Germany
* Tim Würtele, University of Stuttgart, Stuttgart, Germany
### Abstract
> Payment is an essential part of e-commerce. Merchants usually rely on third-parties, so-called payment processors, who take care of transferring the payment from the customer to the merchant. How a payment processor interacts with the customer and the merchant varies a lot. Each payment processor typically invents its own protocol that has to be integrated into the merchant’s application and provides the user with a new, potentially unknown and confusing user experience.Pushed by major companies, including Apple, Google, Master-card, and Visa, the W3C is currently developing a new set of standards to unify the online checkout process and “streamline the user’s payment experience”. The main idea is to integrate payment as a native functionality into web browsers, referred to as the Web Payment APIs. While this new checkout process will indeed be simple and convenient from an end-user perspective, the technical realization requires rather significant changes to browsers.Many major browsers, such as Chrome, Firefox, Edge, Safari, and Opera, already implement these new standards, and many payment processors, such as Google Pay, Apple Pay, or Stripe, support the use of Web Payment APIs for payments. The ecosystem is constantly growing, meaning that the Web Payment APIs will likely be used by millions of people worldwide.So far, there has been no in-depth security analysis of these new standards. In this paper, we present the first such analysis of the Web Payment APIs standards, a rigorous formal analysis. It is based on the Web Infrastructure Model (WIM), the most comprehensive model of the web infrastructure to date, which, among others, we extend to integrate the new payment functionality into the generic browser model.Our analysis reveals two new critical vulnerabilities that allow a malicious merchant to over-charge an unsuspecting customer. We have verified our attacks using the Chrome implementation and reported these problems to the W3C as well as the Chrome developers, who have acknowledged these problems. Moreover, we propose fixes to the standard, which by now have been adopted by the W3C and Chrome, and prove that the fixed Web Payment APIs indeed satisfy strong security properties.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833681/](https://ieeexplore.ieee.org/document/9833681/)
## Cats vs. Spectre: An Axiomatic Approach to Modeling Speculative Execution Attacks.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#cats-vs-spectre-an-axiomatic-approach-to-modeling-speculative-execution-attacks)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#cats-vs-spectre-an-axiomatic-approach-to-modeling-speculative-execution-attacks)
### Authors
* Hernán Ponce-de-Leon, Research Institute CODE Bundeswehr University Munich
* Johannes Kinder, Research Institute CODE Bundeswehr University Munich
### Abstract
> The SPECTRE family of speculative execution attacks has required a rethinking of formal methods for security. Approaches based on operational speculative semantics have made initial inroads towards finding vulnerable code and validating defenses. However, with each new attack grows the amount of microarchitectural detail that has to be integrated into the underlying semantics. We propose an alternative, lightweight and axiomatic approach to specifying speculative semantics that relies on insights from memory models for concurrency. We use the CAT modeling language for memory consistency to specify execution models that capture speculative control flow, store-to-load forwarding, predictive store forwarding, and memory ordering machine clears. We present a bounded model checking framework parameterized by our speculative CAT models and evaluate its implementation against the state of the art. Due to the axiomatic approach, our models can be rapidly extended to allow our framework to detect new types of attacks and validate defenses against them.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833774/](https://ieeexplore.ieee.org/document/9833774/)
## TASHAROK: Using Mechanism Design for Enhancing Security Resource Allocation in Interdependent Systems.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#tasharok-using-mechanism-design-for-enhancing-security-resource-allocation-in-interdependent-systems)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#tasharok-using-mechanism-design-for-enhancing-security-resource-allocation-in-interdependent-systems)
### Authors
* Mustafa Abdallah, Purdue University, West Lafayette, Indiana
* Daniel Woods, University of Innsbruck, Innsbruck, Austria
* Parinaz Naghizadeh, Ohio State University, Columbus, Ohio, USA
* Issa Khalil, Qatar Computing Research Institute, Doha, Qatar
* Timothy Cason, Purdue University, West Lafayette, Indiana
* Shreyas Sundaram, Purdue University, West Lafayette, Indiana
* Saurabh Bagchi, Purdue University, West Lafayette, Indiana
### Abstract
> We consider interdependent systems managed by multiple defenders that are under the threat of stepping-stone attacks. We model such systems via game-theoretic models and incorporate the effect of behavioral probability weighting that is used to model biases in human decision-making, as descended from the field of behavioral economics. We then incorporate into our framework called TASHAROK, two types of tax-based mechanisms for such interdependent security games where the central regulator incentivizes defenders to invest well in securing their assets so as to achieve the socially optimal outcome. We first show that due to the nature of our interdependent security game, no reliable tax-based mechanism can incentivize the socially optimal investment profile while maintaining a weakly balanced budget. We then show the effect of behavioral probability weighting bias on the amount of taxes paid by defenders, and prove that higher biases make defenders pay more taxes under the two mechanisms. We then explore voluntary participation in tax-based mechanisms. To evaluate our mechanisms, we use four representative real-world interdependent systems where we compare the game-theoretic optimal investments to the socially optimal investments under the two mechanisms. We show that the mechanisms yield higher decrease in the social cost for behavioral decision-makers compared to rational decision-makers.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833591/](https://ieeexplore.ieee.org/document/9833591/)
## SoK: Authentication in Augmented and Virtual Reality.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#sok-authentication-in-augmented-and-virtual-reality)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#sok-authentication-in-augmented-and-virtual-reality)
### Authors
* Sophie Stephenson, University of Wisconsin—Madison
* Bijeeta Pal, Cornell University
* Stephen Fan, University of Wisconsin—Madison
* Earlence Fernandes, University of Wisconsin—Madison
* Yuhang Zhao, University of Wisconsin—Madison
* Rahul Chatterjee, University of Wisconsin—Madison
### Abstract
> Augmented reality (AR) and virtual reality (VR) devices are emerging as prominent contenders to today’s personal computers. As personal devices, users will use AR and VR to store and access their sensitive data and thus will need secure and usable ways to authenticate. In this paper, we evaluate the state-of-the-art of authentication mechanisms for AR/VR devices by systematizing research efforts and practical deployments. By studying users’ experiences with authentication on AR and VR, we gain insight into the important properties needed for authentication on these devices. We then use these properties to perform a comprehensive evaluation of AR/VR authentication mechanisms both proposed in literature and used in practice. In all, we synthesize a coherent picture of the current state of authentication mechanisms for AR/VR devices. We draw on our findings to provide concrete research directions and advice on implementing and evaluating future authentication methods.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833742/](https://ieeexplore.ieee.org/document/9833742/)
## Delay Wreaks Havoc on Your Smart Home: Delay-based Automation Interference Attacks.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#delay-wreaks-havoc-on-your-smart-home-delay-based-automation-interference-attacks)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#delay-wreaks-havoc-on-your-smart-home-delay-based-automation-interference-attacks)
### Authors
* Haotian Chi, Department of Computer and Information Sciences, Temple University, Philadelphia, PA, USA
* Chenglong Fu, Department of Computer and Information Sciences, Temple University, Philadelphia, PA, USA
* Qiang Zeng, Department of Computer Science and Engineering, University of South Carolina, Columbia, SC, USA
* Xiaojiang Du, Department of Electrical and Computer Engineering, Stevens Institute of Technology, Hoboken, NJ, USA
### Abstract
> With the proliferation of Internet of Things (IoT) devices and platforms, it becomes a trend that IoT devices associated with different IoT platforms coexist in a smart home, demonstrating the following characteristics. First, a smart home may use more than one platform to support its devices and automation. Second, IoT devices of a home may transmit messages over different paths. By selectively delaying IoT messages, our study finds that two issues, inconsistency and disorder, can be exacerbated by attackers significantly. We then explore how these issues can be exploited and present seven types of exploitation, collectively referred to as Delay-based Automation Interference (DAI) attacks. DAI attacks cause home automation to yield incorrect interaction results, placing the IoT devices and smart home in insecure, unsafe, or unexpected states. It is worth highlighting that DAI attacks do not depend on any IoT implementation vulnerabilities or leaked keys/tokens, and they do not trigger alarms at any layers of the IoT protocol stack. To demonstrate and evaluate the new attacks, we set up two real-world testbeds, where commercial IoT devices and apps are deployed. The week-long experiments from both testbeds show that an attacker has adequate opportunities to launch DAI attacks that cause security or safety issues.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833620/](https://ieeexplore.ieee.org/document/9833620/)
## Peekaboo: A Hub-Based Approach to Enable Transparency in Data Processing within Smart Homes.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#peekaboo-a-hub-based-approach-to-enable-transparency-in-data-processing-within-smart-homes)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#peekaboo-a-hub-based-approach-to-enable-transparency-in-data-processing-within-smart-homes)
### Authors
* Haojian Jin, Carnegie Mellon University
* Gram Liu, Carnegie Mellon University
* David Hwang, Carnegie Mellon University
* Swarun Kumar, Carnegie Mellon University
* Yuvraj Agarwal, Carnegie Mellon University
* Jason I. Hong, Carnegie Mellon University
### Abstract
> We present Peekaboo, a new privacy-sensitive architecture for smart homes that leverages an in-home hub to pre-process and minimize outgoing data in a structured and enforceable manner before sending it to external cloud servers. Peekaboo's key innovations are (1) abstracting common data preprocessing functionality into a small and fixed set of chainable operators, and (2) requiring that developers explicitly declare desired data collection behaviors (e.g., data granularity, destinations, conditions) in an application manifest, which also specifies how the operators are chained together. Given a manifest, Peekaboo assembles and executes a pre-processing pipeline using operators pre-loaded on the hub. In doing so, developers can collect smart home data on a need-to-know basis; third-party auditors can verify data collection behaviors; and the hub itself can offer a number of centralized privacy features to users across apps and devices, without additional effort from app developers. We present the design and implementation of Peekaboo, along with an evaluation of its coverage of smart home scenarios, system performance, data minimization, and example built-in privacy features.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833629/](https://ieeexplore.ieee.org/document/9833629/)
## vSGX: Virtualizing SGX Enclaves on AMD SEV.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#vsgx-virtualizing-sgx-enclaves-on-amd-sev)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#vsgx-virtualizing-sgx-enclaves-on-amd-sev)
### Authors
* Shixuan Zhao, Department of Computer Science and Engineering, The Ohio State University
* Mengyuan Li, Department of Computer Science and Engineering, The Ohio State University
* Yinqian Zhangyz, Research Institute of Trust-worthy Autonomous Systems, Southern University of Science and Technology; Department of Computer Science and Engineering, Southern University of Science and Technology
* Zhiqiang Lin, Department of Computer Science and Engineering, The Ohio State University
### Abstract
> The growing need of trusted execution environment (TEE) has boomed the development of hardware enclaves. However, current TEEs and their applications are tightly bound to the hardware implementation, hindering their compatibility across different platforms. This paper presents vSGX, a novel system to virtualize the execution of an Intel SGX enclave atop AMD SEV. The key idea is to interpose the execution of enclave instructions transparently to support the SGX ISA extensions, consolidate encrypted virtual memory of separated SEV virtual machines to create a single virtualized SGX-like address space, and provide attestations for the authenticity of the TEE and the integrity of enclave software with a trust chain rooted in the SEV hardware. By design, vSGX achieves a comparable level of security guarantees on SEV as that on Intel SGX. We have implemented vSGX and demonstrated it imposes reasonable performance overhead for SGX enclave execution.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833694/](https://ieeexplore.ieee.org/document/9833694/)
## A Systematic Look at Ciphertext Side Channels on AMD SEV-SNP.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#a-systematic-look-at-ciphertext-side-channels-on-amd-sev-snp)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#a-systematic-look-at-ciphertext-side-channels-on-amd-sev-snp)
### Authors
* Mengyuan Li, The Ohio State University
* Luca Wilke, University of Lübeck
* Jan Wichelmann, University of Lübeck
* Thomas Eisenbarth, University of Lübeck
* Radu Teodorescu, The Ohio State University
* Yinqian Zhang, Southern University of Science and Technology
### Abstract
> Hardware-assisted memory encryption offers strong confidentiality guarantees for trusted execution environments like Intel SGX and AMD SEV. However, a recent study by Li et al. presented at USENIX Security 2021 has demonstrated the CipherLeaks attack, which monitors ciphertext changes in the special VMSA page. By leaking register values saved by the VM during context switches, they broke state-of-the-art constant-time cryptographic implementations, including RSA and ECDSA in the OpenSSL. In this paper, we perform a comprehensive study on the ciphertext side channels. Our work suggests that while the CipherLeaks attack targets only the VMSA page, a generic ciphertext side-channel attack may exploit the ciphertext leakage from any memory pages, including those for kernel data structures, stacks and heaps. As such, AMD’s existing countermeasures to the CipherLeaks attack, a firmware patch that introduces randomness into the ciphertext of the VMSA page, is clearly insufficient. The root cause of the leakage in AMD SEV’s memory encryption—the use of a stateless yet unauthenticated encryption mode and the unrestricted read accesses to the ciphertext of the encrypted memory—remains unfixed. Given the challenges faced by AMD to eradicate the vulnerability from the hardware design, we propose a set of software countermeasures to the ciphertext side channels, including patches to the OS kernel and cryptographic libraries. We are working closely with AMD to merge these changes into affected open-source projects.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833768/](https://ieeexplore.ieee.org/document/9833768/)
## RT-TEE: Real-time System Availability for Cyber-physical Systems using ARM TrustZone.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#rt-tee-real-time-system-availability-for-cyber-physical-systems-using-arm-trustzone)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#rt-tee-real-time-system-availability-for-cyber-physical-systems-using-arm-trustzone)
### Authors
* Jinwen Wang, Washington University in St. Louis, MO, USA
* Ao Li, Washington University in St. Louis, MO, USA
* Haoran Li, Washington University in St. Louis, MO, USA
* Chenyang Lu, Washington University in St. Louis, MO, USA
* Ning Zhang, Washington University in St. Louis, MO, USA
### Abstract
> Embedded devices are becoming increasingly pervasive in safety-critical systems of the emerging cyber-physical world. While trusted execution environments (TEEs), such as ARM TrustZone, have been widely deployed in mobile platforms, little attention has been given to deployment on real-time cyber-physical systems, which present a different set of challenges compared to mobile applications. For safety-critical cyber-physical systems, such as autonomous drones or automobiles, the current TEE deployment paradigm, which focuses only on confidentiality and integrity, is insufficient. Computation in these systems also needs to be completed in a timely manner (e.g., before the car hits a pedestrian), putting a much stronger emphasis on availability.To bridge this gap, we present RT-TEE, a real-time trusted execution environment. There are three key research challenges. First, RT-TEE bootstraps the ability to ensure availability using a minimal set of hardware primitives on commodity embedded platforms. Second, to balance real-time performance and scheduler complexity, we designed a policy-based event-driven hierarchical scheduler. Third, to mitigate the risks of having device drivers in the secure environment, we designed an I/O reference monitor that leverages software sandboxing and driver debloating to provide fine-grained access control on peripherals while minimizing the trusted computing base (TCB).We implemented prototypes on both ARMv8-A and ARMv8-M platforms. The system is tested on both synthetic tasks and real-life CPS applications. We evaluated rover and plane in simulation and quadcopter both in simulation and with a real drone.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833604/](https://ieeexplore.ieee.org/document/9833604/)
## A Secret-Free Hypervisor: Rethinking Isolation in the Age of Speculative Vulnerabilities.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#a-secret-free-hypervisor-rethinking-isolation-in-the-age-of-speculative-vulnerabilities)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#a-secret-free-hypervisor-rethinking-isolation-in-the-age-of-speculative-vulnerabilities)
### Authors
* Hongyan Xia, Microsoft
* David Zhang, Microsoft
* Wei Liu, Microsoft
* Istvan Haller, Microsoft
* Bruce Sherwin, Microsoft
* David Chisnall, Microsoft
### Abstract
> In recent years, the epidemic of speculative side channels significantly increases the difficulty in enforcing domain isolation boundaries in a virtualized cloud environment. Although mitigations exist, the approach taken by the industry is neither a long-term nor a scalable solution, as we target each vulnerability with specific mitigations that add up to substantial performance penalties. We propose a different approach to secret isolation: guaranteeing that the hypervisor is Secret-Free (SF). A Secret-Free design partitions memory into secrets and non-secrets and reconstructs hypervisor isolation. It enforces that all domains have a minimal and secret-free view of the address space. In contrast to state-of-the-art, a Secret-Free hypervisor does not identify secrets to be hidden, but instead identifies non-secrets that can be shared, and only grants access necessary for the current operation, an allow-list approach. SF designs function with existing hardware and do not exhibit noticeable performance penalties in production workloads versus the unmitigated baseline, and outperform state-of-the-art techniques by allowing speculative execution where secrets are invisible. We implement SF in Xen (a Type-I hypervisor) to demonstrate that the design applies well to a commercial hypervisor. Evaluation shows performance comparable to baseline and up to 37% improvement in certain hypervisor paths compared with Xen default mitigations. Further, we demonstrate Secret-Free is a generic kernel isolation infrastructure for a variety of systems, not limited to Type-I hypervisors. We apply the same model in Hyper-V (Type-I), bhyve (Type-II) and FreeBSD (UNIX kernel) to evaluate its applicability and effectiveness. The successful implementations on these systems prove the generality of SF, and reveal the specific adaptations and optimizations required for each type of kernel.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833726/](https://ieeexplore.ieee.org/document/9833726/)
## Smile: Secure Memory Introspection for Live Enclave.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#smile-secure-memory-introspection-for-live-enclave)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#smile-secure-memory-introspection-for-live-enclave)
### Authors
* Lei Zhou, Department of Computer Science and Engineering, Research Institute of Trustworthy Autonomous Systems Southern University of Science and Technology
* Xuhua Ding, School of Computing and Information Systems, Singapore Management University
* Fengwei Zhang, Department of Computer Science and Engineering, Research Institute of Trustworthy Autonomous Systems Southern University of Science and Technology
### Abstract
> SGX enclaves prevent external software from accessing their memory. This feature conflicts with legitimate needs for enclave memory introspection, e.g., runtime stack collection on an enclave under a return-oriented-programming attack. We propose SMILE for enclave owners to acquire live enclave contents with the assistance of a semi-trusted agent installed by the host platform’s vendor as a plug-in of the System Management Interrupt handler. SMILE authenticates the enclave under introspection without trusting the kernel nor depending on the SGX attestation facility. SMILE is enclave security preserving as breaking of SMILE does not undermine enclave security. It allows a cloud server to provide the enclave introspection service. We have implemented a SMILE prototype and run various experiments to read enclave code, heap, stack and SSA frames. The total cost for introspecting one page is less than 300 microseconds.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833714/](https://ieeexplore.ieee.org/document/9833714/)
## Statistical Quantification of Differential Privacy: A Local Approach.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#statistical-quantification-of-differential-privacy-a-local-approach)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#statistical-quantification-of-differential-privacy-a-local-approach)
### Authors
* Önder Askin, Ruhr-University Bochum
* Tim Kutta, Ruhr-University Bochum
* Holger Dette, Ruhr-University Bochum
### Abstract
> In this work, we introduce a new approach for statistical quantification of differential privacy in a black box setting. We present estimators and confidence intervals for the optimal privacy parameter of a randomized algorithm A, as well as other key variables (such as the “data-centric privacy level”). Our estimators are based on a local characterization of privacy and in contrast to the related literature avoid the process of “event selection” - a major obstacle to privacy validation. This makes our methods easy to implement and user-friendly. We show fast convergence rates of the estimators and asymptotic validity of the confidence intervals. An experimental study of various algorithms confirms the efficacy of our approach.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833689/](https://ieeexplore.ieee.org/document/9833689/)
## Locally Differentially Private Sparse Vector Aggregation.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#locally-differentially-private-sparse-vector-aggregation)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#locally-differentially-private-sparse-vector-aggregation)
### Authors
* Mingxun Zhou, Carnegie Mellon University
* Tianhao Wang, University of Virginia; CMU
* T-H. Hubert Chan, The University of Hong Kong
* Giulia Fanti, Carnegie Mellon University
* Elaine Shi, Carnegie Mellon University
### Abstract
> Vector mean estimation is a central primitive in federated analytics. In vector mean estimation, each user $i \in[n]$ holds a real-valued vector $v_{i} \in[-1,1]^{d}$, and a server wants to estimate the mean of all n vectors; we would additionally like to protect each user’s privacy. In this paper, we consider the k-sparse version of the vector mean estimation problem. That is, suppose each user’s vector has at most k non-zero coordinates in its d-dimensional vector, and moreover, $k \ll d$. In practice, since the universe size d can be very large (e.g., the space of all possible URLs), we would like the per-user communication to be succinct, i.e., independent of or (poly-)logarithmic in the universe size.In this paper, we show matching upper- and lower-bounds for the k-sparse vector mean estimation problem under local differential privacy (LDP). Specifically, we construct new mechanisms that achieve asymptotically optimal error as well as succinct communication, either under user-level-LDP or event-level-LDP. We implement our algorithms and evaluate them on synthetic and real-world datasets. Our experiments show that we can often achieve one or two orders of magnitude reduction in error compared with prior work under typical choices of parameters, while incurring insignificant communication cost.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833635/](https://ieeexplore.ieee.org/document/9833635/)
## Differentially Private Histograms in the Shuffle Model from Fake Users.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#differentially-private-histograms-in-the-shuffle-model-from-fake-users)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#differentially-private-histograms-in-the-shuffle-model-from-fake-users)
### Authors
* Albert Cheu, Department of Computer Science, Georgetown University
* Maxim Zhilyaev, Meta Privacy
### Abstract
> There has been much recent work in the shuffle model of differential privacy, particularly for approximate d-bin histograms. While these protocols achieve low error, the number of messages sent by each user—the message complexity—has so far scaled with d or the privacy parameters. The message complexity is an informative predictor of a shuffle protocol’s resource consumption. We present a protocol whose message complexity is two when there are sufficiently many users. The protocol essentially pairs each row in the dataset with a fake row and performs a simple randomization on all rows. We show that the error introduced by the protocol is small, using rigorous analysis as well as experiments on real-world data. We also prove that corrupt users have a relatively low impact on our protocol’s estimates.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833614/](https://ieeexplore.ieee.org/document/9833614/)
## Differential Privacy and Swapping: Examining De-Identification's Impact on Minority Representation and Privacy Preservation in the U.S. Census.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#differential-privacy-and-swapping-examining-de-identifications-impact-on-minority-representation-and-privacy-preservation-in-the-u-s-census)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#differential-privacy-and-swapping-examining-de-identifications-impact-on-minority-representation-and-privacy-preservation-in-the-u-s-census)
### Authors
* Miranda Christ, Department of Computer Science, Columbia University
* Sarah Radway, Department of Computer Science, Fletcher School of Law & Diplomacy, Tufts University
* Steven M. Bellovin, Department of Computer Science, Columbia University
### Abstract
> There has been considerable controversy regarding the accuracy and privacy of de-identification mechanisms used in the U.S. Decennial Census. We theoretically and experimentally analyze two such classes of mechanisms, swapping and differential privacy, especially examining their effects on ethnoracial minority groups.We first prove that the expected error of queries made on swapped demographic datasets is greater in sub-populations whose racial distributions differ more from the racial distribution of the global population. We also prove that the probability that m unique entries exist in a sub-population shrinks exponentially as the sub-population size grows. These properties suggest that swapping, which prioritizes unique entries, will produce poor accuracy for minority groups.We then empirically analyze the impact of swapping and differential privacy on the accuracy and privacy of a demographic dataset. We evaluate accuracy in several ways, including methods that stress the effect on minority groups. We evaluate privacy by counting the number of re-identified entries in a simulated linkage attack. Finally, we explore the disproportionate presence of minority groups in identified entries.Our empirical lindings corroborate our theoretical results: for minority representation, the utility of differential privacy is comparable to the utility of swapping, while providing a stronger privacy guarantee. Swapping places a disproportionate privacy burden on minority groups, whereas an ε-differentially private mechanism is ε-differentially private for all subgroups.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833668/](https://ieeexplore.ieee.org/document/9833668/)
## Are We There Yet? Timing and Floating-Point Attacks on Differential Privacy Systems.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#are-we-there-yet-timing-and-floating-point-attacks-on-differential-privacy-systems)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#are-we-there-yet-timing-and-floating-point-attacks-on-differential-privacy-systems)
### Authors
* Jiankai Jin, School of Computing and Information Systems, The University of Melbourne
* Eleanor McMurtry, Department of Computer Science, ETH Zurich
* Benjamin I. P. Rubinstein, School of Computing and Information Systems, The University of Melbourne
* Olga Ohrimenko, School of Computing and Information Systems, The University of Melbourne
### Abstract
> Differential privacy is a de facto privacy framework that has seen adoption in practice via a number of mature software platforms. Implementation of differentially private (DP) mechanisms has to be done carefully to ensure end-to-end security guarantees. In this paper we study two implementation flaws in the noise generation commonly used in DP systems. First we examine the Gaussian mechanism’s susceptibility to a floating-point representation attack. The premise of this first vulnerability is similar to the one carried out by Mironov in 2011 against the Laplace mechanism. Our experiments show the attack’s success against DP algorithms, including deep learning models trained using differentially-private stochastic gradient descent. In the second part of the paper we study discrete counterparts of the Laplace and Gaussian mechanisms that were previously proposed to alleviate the shortcomings of floating-point representation of real numbers. We show that such implementations unfortunately suffer from another side channel: a novel timing attack. An observer that can measure the time to draw (discrete) Laplace or Gaussian noise can predict the noise magnitude, which can then be used to recover sensitive attributes. This attack invalidates differential privacy guarantees of systems implementing such mechanisms. We demonstrate that several commonly used, state-of-the-art implementations of differential privacy are susceptible to these attacks. We report success rates up to 92.56% for floating point attacks on DP-SGD, and up to 99.65% for end-to-end timing attacks on private sum protected with discrete Laplace. Finally, we evaluate and suggest partial mitigations.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833672/](https://ieeexplore.ieee.org/document/9833672/)
## SHADEWATCHER: Recommendation-guided Cyber Threat Analysis using System Audit Records.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#shadewatcher-recommendation-guided-cyber-threat-analysis-using-system-audit-records)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#shadewatcher-recommendation-guided-cyber-threat-analysis-using-system-audit-records)
### Authors
* Jun Zengy, National University of Singapore
* Xiang Wang, University of Science and Technology of China
* Jiahao Liu, National University of Singapore
* Yinfang Chen, UIUC
* Zhenkai Liang, National University of Singapore
* Tat-Seng Chua, National University of Singapore
* Zheng Leong Chua, Independent Researcher
### Abstract
> System auditing provides a low-level view into cyber threats by monitoring system entity interactions. In response to advanced cyber-attacks, one prevalent solution is to apply data provenance analysis on audit records to search for anomalies (anomalous behaviors) or specifications of known attacks. However, existing approaches suffer from several limitations: 1) generating high volumes of false alarms, 2) relying on expert knowledge, or 3) producing coarse-grained detection signals. In this paper, we recognize the structural similarity between threat detection in cybersecurity and recommendation in information retrieval. By mapping security concepts of system entity interactions to recommendation concepts of user-item interactions, we identify cyber threats by predicting the preferences of a system entity on its interactive entities. Furthermore, inspired by the recent advances in modeling high-order connectivity via item side information in the recommendation, we transfer the insight to cyber threat analysis and customize an automated detection system, SHADEWATCHER. It fulfills the potential of high-order information in audit records via graph neural networks to improve detection effectiveness. Besides, we equip SHADEWATCHER with dynamic updates towards better generalization to false alarms. In our evaluation against both real-life and simulated cyber-attack scenarios, SHADEWATCHER shows its advantage in identifying threats with high precision and recall rates. Moreover, SHADEWATCHER is capable of pinpointing threats from nearly a million system entity interactions within seconds.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833669/](https://ieeexplore.ieee.org/document/9833669/)
## SIRAJ: A Unified Framework for Aggregation of Malicious Entity Detectors.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#siraj-a-unified-framework-for-aggregation-of-malicious-entity-detectors)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#siraj-a-unified-framework-for-aggregation-of-malicious-entity-detectors)
### Authors
* Saravanan Thirumuruganathan, Qatar Computing Research Institute
* Mohamed Nabeel, Qatar Computing Research Institute
* Euijin Choo, Qatar Computing Research Institute
* Issa Khalil, Qatar Computing Research Institute
* Ting Yu, Qatar Computing Research Institute
### Abstract
> High-quality intelligence of Internet threat (e.g., malware files, malicious domains, phishing URLs and malicious IPs) are important for both security practitioners and the research community. Given the agility of attackers, the scale of the Internet, and the fast-evolving landscape of threats, one could not rely solely on a single source (such as an anti-malware engine or an IP blacklist) for obtaining accurate, up-to-date, and comprehensive threat analysis. Instead, we need to aggregate the analysis from multiple sources. However, it is non-trivial to do such aggregation effectively. A common practice is to label an indicator (malware, domains, URLs, etc.) as malicious if it is marked by a number of sources above an ad-hoc certain threshold. Often, this results in sub-optimal performance as it assumes that all sources are of similar quality/expertise, independent, and temporally stable, which unfortunately are often not true in practice. A natural alternative is to train a supervised machine learning model. However, this approach needs a sufficiently large amount of manually labeled ground truth, which is time-consuming to collect and has to be updated frequently, resulting in substantial recurring costs. In this paper, we propose SIRAJ, a novel framework for aggregating the detection output of various intelligence sources such as anti-malware engines. SIRAJ is based on the pretrain and fine-tune paradigm. Specifically, we use self-supervised learning-based approaches to learn a pre-trained embedding model that converts multi-source inputs into a high-dimensional embedding. The embeddings are learned through three carefully designed pretext tasks that imbue them with knowledge about dependencies between scanners and their temporal dynamics. The learned embeddings could be used for diverse downstream machine learning tasks. SIRAJ is designed to be general and can be used for diverse domains such as URLs, malware, and IPs. Further, SIRAJ works well even when there is limited to no labeled data available. Through extensive experiments, we show that our learned representations can produce results comparable to supervised methods while only requiring as little as 100 labeled samples. Importantly, the results show that SIRAJ accurately detects threat indicators much earlier than the baseline algorithms, a feat that is critical against short-lived indicators like Phishing URLs.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833725/](https://ieeexplore.ieee.org/document/9833725/)
## DEEPCASE: Semi-Supervised Contextual Analysis of Security Events.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#deepcase-semi-supervised-contextual-analysis-of-security-events)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#deepcase-semi-supervised-contextual-analysis-of-security-events)
### Authors
* Thijs van Ede, University of Twente; Santa Barbara, University of California
* Hojjat Aghakhani, Santa Barbara, University of California
* Noah Spahn, Santa Barbara, University of California
* Riccardo Bortolameotti, ReaQta
* Marco Cova, VMware, Inc.
* Andrea Continella, University of Twente
* Maarten van Steen, University of Twente
* Andreas Peter, University of Twente
* Christopher Kruegel, Santa Barbara, University of California
* Giovanni Vigna, Santa Barbara, University of California
### Abstract
> Security monitoring systems detect potentially malicious activities in IT infrastructures, by either looking for known signatures or for anomalous behaviors. Security operators investigate these events to determine whether they pose a threat to their organization. In many cases, a single event may be insufficient to determine whether certain activity is indeed malicious. Therefore, a security operator frequently needs to correlate multiple events to identify if they pose a real threat. Unfortunately, the vast number of events that need to be correlated often overload security operators, forcing them to ignore some events and, thereby, potentially miss attacks. This work studies how to automatically correlate security events and, thus, automate parts of the security operator workload. We design and evaluate DEEPCASE, a system that leverages the context around events to determine which events require further inspection. This approach reduces the number of events that need to be inspected. In addition, the context provides valuable insights into why certain events are classified as malicious. We show that our approach automatically filters 86.72% of the events and reduces the manual workload of security operators by 90.53%, while underestimating the risk of potential threats in less than 0.001% of cases.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833671/](https://ieeexplore.ieee.org/document/9833671/)
## DEPCOMM: Graph Summarization on System Audit Logs for Attack Investigation.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#depcomm-graph-summarization-on-system-audit-logs-for-attack-investigation)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#depcomm-graph-summarization-on-system-audit-logs-for-attack-investigation)
### Authors
* Zhiqiang Xu, Chinese Academy of Sciences, Institute of Information Engineering, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Pengcheng Fang, Department of Computer and Data Sciences, Case Western Reserve University, USA
* Changlin Liu, Department of Computer and Data Sciences, Case Western Reserve University, USA
* Xusheng Xiao, Department of Computer and Data Sciences, Case Western Reserve University, USA
* Yu Wen, Chinese Academy of Sciences, Institute of Information Engineering, China
* Dan Meng, Chinese Academy of Sciences, Institute of Information Engineering, China; School of Cyber Security, University of Chinese Academy of Sciences, China
### Abstract
> Causality analysis generates a dependency graph from system audit logs, which has emerged as an important solution for attack investigation. In the dependency graph, nodes represent system entities (e.g., processes and files) and edges represent dependencies among entities (e.g., a process writing to a file). Despite the promising early results, causality analysis often produces a large graph (> 100,000 edges) and it is a daunting task for security analysts to inspect such a large graph for attack investigation. To address challenges in attack investigation, we propose DEPCOMM, a graph summarization approach that generates a summary graph from a dependency graph by partitioning a large graph into process-centric communities and presenting summaries for each community. Specifically, each community consists of a set of intimate processes that cooperate with each other to accomplish certain system activities (e.g., file compression), and the resources (e.g., files) accessed by these processes. Within a community, DEPCOMM further identifies redundant edges caused by less-important and repetitive system activities, and perform compression on these edges. Finally, DEPCOMM generates the summary for each community using the InfoPaths that represent the information flows across communities. These InfoPaths are more likely to capture a set of attack-related processes that work together to achieve certain malicious goals. Our evaluations on real attacks ($\sim 150$ million events) demonstrate that DEPCOMM generates 18.4 communities on average for a dependency graph, which is $\sim 70 \times$ smaller than the original graph. Our compression further reduces the edges in each community to 32.1 on average. Compared with the 9 state-of-the-art community detection algorithms, on average, DEPCOMM achieves a $2.29\times$ better F <inf>1</inf> -score than these algorithms in detecting communities. Through cooperating with the automatic techniques HOLMES, DEPCOMM can identify attack-related communities by a recall of 96.2%. Our case studies on the real attacks also demonstrate DEPCOMM’s effectiveness in facilitating attack investigation.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833632/](https://ieeexplore.ieee.org/document/9833632/)
## Measuring and Mitigating the Risk of IP Reuse on Public Clouds.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#measuring-and-mitigating-the-risk-of-ip-reuse-on-public-clouds)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#measuring-and-mitigating-the-risk-of-ip-reuse-on-public-clouds)
### Authors
* Eric Pauley, Computer Science & Engineering, The Pennsylvania State University
* Ryan Sheatsley, Computer Science & Engineering, The Pennsylvania State University
* Blaine Hoak, Computer Science & Engineering, The Pennsylvania State University
* Quinn Burke, Computer Science & Engineering, The Pennsylvania State University
* Yohan Beugin, Computer Science & Engineering, The Pennsylvania State University
* Patrick McDaniel, Computer Science & Engineering, The Pennsylvania State University
### Abstract
> Public clouds provide scalable and cost-efficient computing through resource sharing. However, moving from traditional on-premises service management to clouds introduces new challenges; failure to correctly provision, maintain, or decommission elastic services can lead to functional failure and vulnerability to attack. In this paper, we explore a broad class of attacks on clouds which we refer to as cloud squatting. In a cloud squatting attack, an adversary allocates resources in the cloud (e.g., IP addresses) and thereafter leverages latent configuration to exploit prior tenants. To measure and categorize cloud squatting we deployed a custom Internet telescope within the Amazon Web Services us-east-1 region. Using this apparatus, we deployed over 3 million servers receiving 1.5 million unique IP addresses ($\approx$ 56% of the available pool) over 101 days beginning in March of 2021. We identified 4 classes of cloud services, 7 classes of third-party services, and DNS as sources of exploitable latent configurations. We discovered that exploitable configurations were both common and in many cases extremely dangerous; we received over 5 million cloud messages, many containing sensitive data such as financial transactions, GPS location, and PII. Within the 7 classes of third-party services, we identified dozens of exploitable software systems spanning hundreds of servers (e.g., databases, caches, mobile applications, and web services). Lastly, we identified 5446 exploitable domains panning 231 eTLDs—including 105 in the top 10000 and 23 in the top 1000 popular domains. Through tenant disclosures we have identified several root causes, including (a) a lack of organizational controls, (b) poor service hygiene, and (c) failure to follow best practices. We conclude with a discussion of the space of possible mitigations and describe the mitigations to be deployed by Amazon in response to this study.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833784/](https://ieeexplore.ieee.org/document/9833784/)
## SecFloat: Accurate Floating-Point meets Secure 2-Party Computation.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#secfloat-accurate-floating-point-meets-secure-2-party-computation)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#secfloat-accurate-floating-point-meets-secure-2-party-computation)
### Authors
* Deevashwer Rathee, UC Berkeley
* Anwesh Bhattacharya, Microsoft Research
* Rahul Sharma, Microsoft Research
* Divya Gupta, Microsoft Research
* Nishanth Chandran, Microsoft Research
* Aseem Rastogi, Microsoft Research
### Abstract
> We build a library SecFloat for secure 2-party computation (2PC) of 32-bit single-precision floating-point operations and math functions. The existing functionalities used in cryptographic works are imprecise and the precise functionalities used in standard libraries are not crypto-friendly, i.e., they use operations that are cheap on CPUs but have exorbitant cost in 2PC. SecFloat bridges this gap with its novel crypto-friendly precise functionalities. Compared to the prior cryptographic libraries, SecFloat is up to six orders of magnitude more precise and up to two orders of magnitude more efficient. Furthermore, against a precise 2PC baseline, SecFloat is three orders of magnitude more efficient. The high precision of SecFloat leads to the first accurate implementation of secure inference. All prior works on secure inference of deep neural networks rely on ad hoc float-to-fixed converters. We evaluate a model where the fixed-point approximations used in privacy-preserving machine learning completely fail and floating-point is necessary. Thus, emphasizing the need for libraries like SecFloat.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833697/](https://ieeexplore.ieee.org/document/9833697/)
## Multi-Server Verifiable Computation of Low-Degree Polynomials.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#multi-server-verifiable-computation-of-low-degree-polynomials)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#multi-server-verifiable-computation-of-low-degree-polynomials)
### Authors
* Liang Feng Zhang, ShanghaiTech University
* Huaxiong Wang, Nanyang Technological University
### Abstract
> The conflicts between input privacy and efficiency in single-server non-interactive verifiable computation (NIVC) makes it interesting to consider the multi-server models of NIVC. Although the existing multi-server NIVC schemes provide meaningful improvements, they either require the servers to communicate or leave the client’s data unprotected. It has been an open problem to design multi-server NIVC with both input privacy and non-communicating servers. In this paper we define a multi-server verifiable computation (MSVC) model where the client secret-shares its input x among non-communicating servers, each server locally computes a function F to get a partial result, and finally the client reconstructs F(x) from all partial results. We construct five MSVC schemes for outsourcing low-degree polynomials and thus answer the open question for such polynomials. Our schemes are t-private such that any t servers learn no information about x. Our schemes are t-secure such that any t servers cannot persuade the client to output wrong results. The privacy and security can be either information-theoretic or computational. Comparing with the existing schemes, our servers can be at least two orders faster.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833792/](https://ieeexplore.ieee.org/document/9833792/)
## Why Crypto-detectors Fail: A Systematic Evaluation of Cryptographic Misuse Detection Techniques.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#why-crypto-detectors-fail-a-systematic-evaluation-of-cryptographic-misuse-detection-techniques)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#why-crypto-detectors-fail-a-systematic-evaluation-of-cryptographic-misuse-detection-techniques)
### Authors
* Amit Seal Ami, William & Mary, Williamsburg, VA, USA
* Nathan Cooper, William & Mary, Williamsburg, VA, USA
* Kaushal Kafle, William & Mary, Williamsburg, VA, USA
* Kevin Moran, George Mason University, Fairfax, VA, USA
* Denys Poshyvanyk, William & Mary, Williamsburg, VA, USA
* Adwait Nadkarni, William & Mary, Williamsburg, VA, USA
### Abstract
> The correct use of cryptography is central to ensuring data security in modern software systems. Hence, several academic and commercial static analysis tools have been developed for detecting and mitigating crypto-API misuse. While developers are optimistically adopting these crypto-API misuse detectors (or crypto-detectors) in their software development cycles, this momentum must be accompanied by a rigorous understanding of their effectiveness at finding crypto-API misuse in practice. This paper presents the MASC framework, which enables a systematic and data-driven evaluation of crypto-detectors using mutation testing. We ground MASC in a comprehensive view of the problem space by developing a data-driven taxonomy of existing crypto-API misuse, containing 105 misuse cases organized among nine semantic clusters. We develop 12 generalizable usage-based mutation operators and three mutation scopes that can expressively instantiate thousands of compilable variants of the misuse cases for thoroughly evaluating crypto-detectors. Using MASC, we evaluate nine major crypto-detectors and discover 19 unique, undocumented flaws that severely impact the ability of crypto-detectors to discover misuses in practice. We conclude with a discussion on the diverse perspectives that influence the design of crypto-detectors and future directions towards building security-focused crypto-detectors by design.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833582/](https://ieeexplore.ieee.org/document/9833582/)
## "They're not that hard to mitigate": What Cryptographic Library Developers Think About Timing Attacks.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#theyre-not-that-hard-to-mitigate-what-cryptographic-library-developers-think-about-timing-attacks)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#theyre-not-that-hard-to-mitigate-what-cryptographic-library-developers-think-about-timing-attacks)
### Authors
* Jan Jancar, Masaryk University, Brno, Czech Republic
* Marcel Fourné, MPI-SP, Bochum, Germany
* Daniel De Almeida Braga, Rennes University, CNRS, IRISA, Rennes, France
* Mohamed Sabt, Rennes University, CNRS, IRISA, Rennes, France
* Peter Schwabe, MPI-SP, Bochum, Germany; Radboud University, Nijmegen, The Netherlands
* Gilles Barthe, MPI-SP, Bochum, Germany; IMDEA Software Institute, Madrid, Spain
* Pierre-Alain Fouque, Rennes University, CNRS, IRISA, Rennes, France
* Yasemin Acar, The George Washington University, Washington, D.C., USA; MPI-SP, Bochum, Germany
### Abstract
> Timing attacks are among the most devastating side-channel attacks, allowing remote attackers to retrieve secret material, including cryptographic keys, with relative ease. In principle, “these attacks are not that hard to mitigate the basic intuition, captured by the constant-time criterion, is that control-flow and memory accesses should be independent from secrets. Furthermore, there is a broad range of tools for automatically checking adherence to this intuition. Yet, these attacks still plague popular cryptographic libraries twenty-five years after their discovery, reflecting a dangerous gap between academic research and cryptographic engineering. This gap can potentially undermine the emerging shift towards high-assurance, formally verified cryptographic libraries. However, the causes for this gap remain uninvestigated. To understand the causes of this gap, we conducted a survey with 44 developers of 27 prominent open-source cryptographic libraries. The goal of the survey was to analyze if and how the developers ensure that their code executes in constant time. Our main findings are that developers are aware of timing attacks and of their potentially dramatic consequences and yet often prioritize other issues over the perceived huge investment of time and resources currently needed to make their code resistant to timing attacks. Based on the survey, we identify several shortcomings in existing analysis tools for constant-time, and issue recommendations that can make writing constant-time libraries less difficult. Our recommendations can inform future development of analysis tools, security-aware compilers, and cryptographic libraries, not only for constant-timeness, but in the broader context of side-channel attacks, in particular for micro-architectural side-channel attacks, which are a younger topic and too recent as focus for this survey.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833713/](https://ieeexplore.ieee.org/document/9833713/)
## Annotating, Tracking, and Protecting Cryptographic Secrets with CryptoMPK.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#annotating-tracking-and-protecting-cryptographic-secrets-with-cryptompk)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#annotating-tracking-and-protecting-cryptographic-secrets-with-cryptompk)
### Authors
* Xuancheng Jin, Shanghai Jiao Tong University
* Xuangan Xiao, Shanghai Jiao Tong University
* Songlin Jia, Shanghai Jiao Tong University
* Wang Gao, Shanghai Jiao Tong University
* Dawu Gu, Shanghai Jiao Tong University
* Hang Zhang, UC Riverside
* Siqi Ma, The University of Queensland
* Zhiyun Qian, UC Riverside
* Juanru Li, Shanghai Jiao Tong University
### Abstract
> Protecting confidential data against memory disclosure attacks is crucial to many critical applications, especially those involve cryptographic operations. However, it is neither easy to identify involved cryptographic confidential data in a program nor to implement a fine-grained and yet efficient protection. Existing defensive techniques face many shortcomings such as coarse-grained protection or exorbitant overhead. As a result, real world crypto applications seldom applied this kind of protection in practice.To make the protection of cryptographic confidential data practical, we design and implement CRYPTOMPK, a source code analysis and transformation system to implement a domain-based memory isolation. CRYPTOMPK first automatically tracks and labels all sensitive memory buffers and operations in source code with a context-sensitive, crypto-aware information flow analysis. Then it partitions the source code into crypto and non-crypto domains with a context-dependent privilege switch instrumentation. By further utilizing Intel Memory Protection Keys (MPK), CRYPTOMPK generates executables with efficient domain switching, protecting them against typical memory disclosure vulnerabilities such as arbitrary memory read. In particular, by using CRYPTOMPK, a large number of intermediate memory buffers that have been previously ignored before are well protected, and thus the security risks are reduced significantly. We leveraged CRYPTOMPK to protect prevalent applications such as Apache and Nginx with widely used crypto libraries (e.g., OpenSSL, LibSodium). CRYPTOMPK only needs several minutes to analyze each of these complex cryptographic programs and incurs at most 9.53% performance overhead for the protected programs.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833650/](https://ieeexplore.ieee.org/document/9833650/)
## SoK: Practical Foundations for Software Spectre Defenses.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#sok-practical-foundations-for-software-spectre-defenses)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#sok-practical-foundations-for-software-spectre-defenses)
### Authors
* Sunjay Cauligi, UC San Diego MPI Security & Privacy
* Craig Disselkoen, UC San Diego
* Daniel Moghimi, UC San Diego
* Gilles Barthe, MPI Security & Privacy IMDEA Software Institute
* Deian Stefan, UC San Diego
### Abstract
> Spectre vulnerabilities violate our fundamental assumptions about architectural abstractions, allowing attackers to steal sensitive data despite previously state-of-the-art countermeasures. To defend against Spectre, developers of verification tools and compiler-based mitigations are forced to reason about microarchitectural details such as speculative execution. In order to aid developers with these attacks in a principled way, the research community has sought formal foundations for speculative execution upon which to rebuild provable security guarantees.This paper systematizes the community’s current knowledge about software verification and mitigation for Spectre. We study state-of-the-art software defenses, both with and without associated formal models, and use a cohesive framework to compare the security properties each defense provides. We explore a wide variety of tradeoffs in the expressiveness of formal frameworks, the complexity of defense tools, and the resulting security guarantees. As a result of our analysis, we suggest practical choices for developers of analysis and mitigation tools, and we identify several open problems in this area to guide future work on grounded software defenses.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833707/](https://ieeexplore.ieee.org/document/9833707/)
## SpecHammer: Combining Spectre and Rowhammer for New Speculative Attacks.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#spechammer-combining-spectre-and-rowhammer-for-new-speculative-attacks)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#spechammer-combining-spectre-and-rowhammer-for-new-speculative-attacks)
### Authors
* Youssef Tobah, University of Michigan
* Andrew Kwong, University of Michigan
* Ingab Kang, University of Michigan
* Daniel Genkin, Georgia Tech
* Kang G. Shin, University of Michigan
### Abstract
> The recent Spectre attacks have revealed how the performance gains from branch prediction come at the cost of weakened security. Spectre Variant 1 (v1) shows how an attacker-controlled variable passed to speculatively executed lines of code can leak secret information to an attacker. Numerous defenses have since been proposed to prevent Spectre attacks, each attempting to block all or some of the Spectre variants. In particular, defenses using taint-tracking are claimed to be the only way to protect against all forms of Spectre v1. However, we show that the defenses proposed thus far can be bypassed by combining Spectre with the well-known Rowhammer vulnerability. By using Rowhammer to modify victim values, we relax the requirement that the attacker needs to share a variable with the victim. Thus, defenses that rely on this requirement, such as taint-tracking, are no longer effective. Furthermore, without this crucial requirement, the number of gadgets that can potentially be used to launch a Spectre attack increases dramatically; those present in Linux kernel version 5.6 increases from about 100 to about 20,000 via Rowhammer bit-flips. Attackers can use these gadgets to steal sensitive information such as stack cookies or canaries, or use new triple gadgets to read any address in memory. We demonstrate two versions of the combined attack on example victims in both user and kernel spaces, showing the attack’s ability to leak sensitive data.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833802/](https://ieeexplore.ieee.org/document/9833802/)
## Spook.js: Attacking Chrome Strict Site Isolation via Speculative Execution.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#spook-js-attacking-chrome-strict-site-isolation-via-speculative-execution)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#spook-js-attacking-chrome-strict-site-isolation-via-speculative-execution)
### Authors
* Ayush Agarwal, University of Michigan
* Sioli O’Connell, University of Adelaide
* Jason Kim, Georgia Institute of Technology
* Shaked Yehezkel, Tel Aviv University
* Daniel Genkin, Georgia Institute of Technology
* Eyal Ronen, Tel Aviv University
* Yuval Yarom, University of Adelaide
### Abstract
> The discovery of the Spectre attack in 2018 has sent shockwaves through the computer industry, affecting processor vendors, OS providers, programming language developers, and more. Because web browsers execute untrusted code while potentially accessing sensitive information, they were considered prime targets for attacks and underwent significant changes to protect users from speculative execution attacks. In particular, the Google Chrome browser adopted the strict site isolation policy that prevents leakage by ensuring that content from different domains is not shared in the same address space. The perceived level of risk that Spectre poses to web browsers stands in stark contrast with the paucity of published demonstrations of the attack. Before mid-March 2021, there was no public proof-of-concept demonstrating leakage of information that is otherwise inaccessible to an attacker. Moreover, Google’s leaky.page, the only current proof-of-concept that can read such information, is severely restricted to only a subset of the address space and does not perform cross-website accesses. In this paper, we demonstrate that the absence of published attacks does not indicate that the risk is mitigated. We present Spook.js, a JavaScript-based Spectre attack that can read from the entire address space of the attacking webpage. We further investigate the implementation of strict site isolation in Chrome, and demonstrate limitations that allow Spook.js to read sensitive information from other webpages. We further show that Spectre adversely affects the security model of extensions in Chrome, demonstrating leaks of usernames and passwords from the LastPass password manager. Finally, we show that the problem also affects other Chromium-based browsers, such as Microsoft Edge and Brave.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833711/](https://ieeexplore.ieee.org/document/9833711/)
## BLACKSMITH: Scalable Rowhammering in the Frequency Domain.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#blacksmith-scalable-rowhammering-in-the-frequency-domain)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#blacksmith-scalable-rowhammering-in-the-frequency-domain)
### Authors
* Patrick Jattke, ETH Zurich
* Victor Van Der Veen, Qualcomm Technologies Inc.
* Pietro Frigo, VU Amsterdam
* Stijn Gunter, ETH Zurich
* Kaveh Razavi, ETH Zurich
### Abstract
> We present the new class of non-uniform Rowhammer access patterns that bypass undocumented, proprietary in-DRAM Target Row Refresh (TRR) while operating in a production setting. We show that these patterns trigger bit flips on all 40 DDR4 DRAM devices in our test pool. We make a key observation that all published Rowhammer access patterns always hammer “aggressor” rows uniformly. While uniform accesses maximize the number of aggressor activations, we find that in-DRAM TRR exploits this behavior to catch aggressor rows and refresh neighboring “victims” before they fail. There is no reason, however, to limit Rowhammer attacks to uniform access patterns: smaller technology nodes make underlying DRAM technologies more vulnerable, and significantly fewer accesses are nowadays required to trigger bit flips, making it interesting to investigate less predictable access patterns. The search space for non-uniform access patterns, however, is tremendous. We design experiments to explore this space with respect to the deployed mitigations, highlighting the importance of the order, regularity, and intensity of accessing aggressor rows in non-uniform access patterns. We show how randomizing parameters in the frequency domain captures these aspects and use this insight in the design of Blacksmith, a scalable Rowhammer fuzzer that generates access patterns that hammer aggressor rows with different phases, frequencies, and amplitudes. Blacksmith finds complex patterns that trigger Rowhammer bit flips on all 40 of our recently purchased DDR4 DIMMs, $2.6 \times$ more than state of the art, and generating on average $87 \times$ more bit flips. We also demonstrate the effectiveness of these patterns on Low Power DDR4X devices. Our extensive analysis using Blacksmith further provides new insights on the properties of currently deployed TRR mitigations. We conclude that after almost a decade of research and deployed in-DRAM mitigations, we are perhaps in a worse situation than when Rowhammer was first discovered.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833772/](https://ieeexplore.ieee.org/document/9833772/)
## ProTRR: Principled yet Optimal In-DRAM Target Row Refresh.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#protrr-principled-yet-optimal-in-dram-target-row-refresh)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#protrr-principled-yet-optimal-in-dram-target-row-refresh)
### Authors
* Michele Marazzi, Computer Security Group, ETH Zürich
* Patrick Jattke, Computer Security Group, ETH Zürich
* Flavien Solt, Computer Security Group, ETH Zürich
* Kaveh Razavi, Computer Security Group, ETH Zürich
### Abstract
> The DRAM substrate is becoming increasingly more vulnerable to Rowhammer as we move to smaller technology nodes. We introduce ProTRR, the first principled in-DRAM Target Row Refresh mitigation with formal security guarantees and low bounds on overhead. Unlike existing proposals that require changes to the memory controllers, the in-DRAM nature of ProTRR enables its seamless integration. However, this means that ProTRR must respect the synchronous nature of the DRAM protocol, which limits the number of DRAM rows that can be protected at any given time. To overcome this challenge, ProTRR proactively refreshes each row that is most likely to observe bit flips in the future. While this strategy catches the rows that are hammered the most, some others may still fly under the radar. We use this observation to construct Feinting, a new Rowhammer attack that we formally prove to be optimal in this setting. We then conFigure ProTRR to be secure against Feinting. To achieve this, ProTRR should keep track of accesses to each row, which is prohibitively expensive to implement in hardware. Instead, ProTRR uses a new frequent item counting scheme that leverages Feinting to provide a provably optimal yet flexible trade-off between the tolerated DRAM vulnerability, the number of counters, and the number of additional refreshes. Our extensive evaluation using an ASIC implementation of ProTRR and cycle-accurate simulation shows that ProTRR can provide principled protection for current and future DRAM technologies with a negligible performance, power, and area impact. ProTRR is fully compatible with DDR4 and the new Refresh Management (RFM) extension in DDR5.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833664/](https://ieeexplore.ieee.org/document/9833664/)
## Asleep at the Keyboard? Assessing the Security of GitHub Copilot's Code Contributions.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#asleep-at-the-keyboard-assessing-the-security-of-github-copilots-code-contributions)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#asleep-at-the-keyboard-assessing-the-security-of-github-copilots-code-contributions)
### Authors
* Hammond Pearce, Department of ECE, New York University, Brooklyn, NY, USA
* Baleegh Ahmad, Department of ECE, New York University, Brooklyn, NY, USA
* Benjamin Tan, Department of ESE, University of Calgary, Calgary, CA, Alberta
* Brendan Dolan-Gavitt, Department of CSE, New York University, Brooklyn, NY, USA
* Ramesh Karri, Department of ECE, New York University, Brooklyn, NY, USA
### Abstract
> There is burgeoning interest in designing AI-based systems to assist humans in designing computing systems, including tools that automatically generate computer code. The most notable of these comes in the form of the first self-described ‘AI pair programmer’, GitHub Copilot, which is a language model trained over open-source GitHub code. However, code often contains bugs—and so, given the vast quantity of unvetted code that Copilot has processed, it is certain that the language model will have learned from exploitable, buggy code. This raises concerns on the security of Copilot’s code contributions. In this work, we systematically investigate the prevalence and conditions that can cause GitHub Copilot to recommend insecure code. To perform this analysis we prompt Copilot to generate code in scenarios relevant to high-risk cybersecurity weaknesses, e.g. those from MITRE’s “Top 25” Common Weakness Enumeration (CWE) list. We explore Copilot’s performance on three distinct code generation axes—examining how it performs given diversity of weaknesses, diversity of prompts, and diversity of domains. In total, we produce 89 different scenarios for Copilot to complete, producing 1,689 programs. Of these, we found approximately 40% to be vulnerable.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833571/](https://ieeexplore.ieee.org/document/9833571/)
## Spinning Language Models: Risks of Propaganda-As-A-Service and Countermeasures.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#spinning-language-models-risks-of-propaganda-as-a-service-and-countermeasures)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#spinning-language-models-risks-of-propaganda-as-a-service-and-countermeasures)
### Authors
* Eugene Bagdasaryan, Cornell Tech
* Vitaly Shmatikov, Cornell Tech
### Abstract
> We investigate a new threat to neural sequence-to-sequence (seq2seq) models: training-time attacks that cause models to “spin” their outputs so as to support an adversary-chosen sentiment or point of view—but only when the input contains adversary-chosen trigger words. For example, a spinned  <sup>1</sup>  summarization model outputs positive summaries of any text that mentions the name of some individual or organization.Model spinning introduces a “meta-backdoor” into a model. Whereas conventional backdoors cause models to produce incorrect outputs on inputs with the trigger, outputs of spinned models preserve context and maintain standard accuracy metrics, yet also satisfy a meta-task chosen by the adversary.Model spinning enables propaganda-as-a-service, where propaganda is defined as biased speech. An adversary can create customized language models that produce desired spins for chosen triggers, then deploy these models to generate disinformation (a platform attack), or else inject them into ML training pipelines (a supply-chain attack), transferring malicious functionality to downstream models trained by victims.To demonstrate the feasibility of model spinning, we develop a new backdooring technique. It stacks an adversarial meta-task (e.g., sentiment analysis) onto a seq2seq model, backpropagates the desired meta-task output (e.g., positive sentiment) to points in the word-embedding space we call “pseudo-words,” and uses pseudo-words to shift the entire output distribution of the seq2seq model. We evaluate this attack on language generation, summarization, and translation models with different triggers and meta-tasks such as sentiment, toxicity, and entailment. Spinned models largely maintain their accuracy metrics (ROUGE and BLEU) while shifting their outputs to satisfy the adversary’s meta-task. We also show that, in the case of a supply-chain attack, the spin functionality transfers to downstream models.Finally, we propose a black-box, meta-task-independent defense that, given a list of candidate triggers, can detect models that selectively apply spin to inputs with any of these triggers. <sup>1</sup> We use “spinned” rather than “spun” to match how the word is used in public relations.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833572/](https://ieeexplore.ieee.org/document/9833572/)
## SoK: How Robust is Image Classification Deep Neural Network Watermarking?
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#sok-how-robust-is-image-classification-deep-neural-network-watermarking)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#sok-how-robust-is-image-classification-deep-neural-network-watermarking)
### Authors
* Nils Lukas, University of Waterloo, Waterloo, Canada
* Edward Jiang, University of Waterloo, Waterloo, Canada
* Xinda Li, University of Waterloo, Waterloo, Canada
* Florian Kerschbaum, University of Waterloo, Waterloo, Canada
### Abstract
> Deep Neural Network (DNN) watermarking is a method for provenance verification of DNN models. Watermarking should be robust against watermark removal attacks that derive a surrogate model that evades provenance verification. Many watermarking schemes that claim robustness have been proposed, but their robustness is only validated in isolation against a relatively small set of attacks. There is no systematic, empirical evaluation of these claims against a common, comprehensive set of removal attacks. This uncertainty about a watermarking scheme’s robustness causes difficulty to trust their deployment in practice. In this paper, we evaluate whether recently proposed watermarking schemes that claim robustness are robust against a large set of removal attacks. We survey methods from the literature that (i) are known removal attacks, (ii) derive surrogate models but have not been evaluated as removal attacks, and (iii) novel removal attacks. Weight shifting and smooth retraining are novel removal attacks adapted to the DNN watermarking schemes surveyed in this paper. We propose taxonomies for watermarking schemes and removal attacks. Our empirical evaluation includes an ablation study over sets of parameters for each attack and watermarking scheme on the image classification datasets CIFAR-10 and ImageNet. Surprisingly, our study shows that none of the surveyed watermarking schemes is robust in practice. We find that schemes fail to withstand adaptive attacks and known methods for deriving surrogate models that have not been evaluated as removal attacks. This points to intrinsic flaws in how robustness is currently evaluated. Our evaluation includes a discussion of the runtime of each attack to underpin their practical relevance. While none of the schemes is robust against all attacks, none of the attacks removes all watermarks. We show that attacks can be combined and find combined attacks that remove all watermarks. We show that watermarking schemes need to be evaluated against a more extensive set of removal attacks with a more realistic adversary model. Our source code and a complete dataset of evaluation results are publicly available, which allows to independently verify our conclusions.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833693/](https://ieeexplore.ieee.org/document/9833693/)
## Transcending TRANSCEND: Revisiting Malware Classification in the Presence of Concept Drift.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#transcending-transcend-revisiting-malware-classification-in-the-presence-of-concept-drift)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#transcending-transcend-revisiting-malware-classification-in-the-presence-of-concept-drift)
### Authors
* Federico Barbero, King’s College London; Royal Holloway, University of London; University of Cambridge
* Feargus Pendlebury, King’s College London; Royal Holloway, University of London; The Alan Turing Institute; University of Cambridge
* Fabio Pierazzi, King’s College London
* Lorenzo Cavallaro, University College London
### Abstract
> Machine learning for malware classification shows encouraging results, but real deployments suffer from performance degradation as malware authors adapt their techniques to evade detection. This phenomenon, known as concept drift, occurs as new malware examples evolve and become less and less like the original training examples. One promising method to cope with concept drift is classification with rejection in which examples that are likely to be misclassified are instead quarantined until they can be expertly analyzed.We propose TRANSCENDENT, a rejection framework built on Transcend, a recently proposed strategy based on conformal prediction theory. In particular, we provide a formal treatment of Transcend, enabling us to refine conformal evaluation theory—its underlying statistical engine—and gain a better understanding of the theoretical reasons for its effectiveness. In the process, we develop two additional conformal evaluators that match or surpass the performance of the original while significantly decreasing the computational overhead. We evaluate TRANSCENDENT on a malware dataset spanning 5 years that removes sources of experimental bias present in the original evaluation. TRANSCENDENT outperforms state-of-the-art approaches while generalizing across different malware domains and classifiers.To further assist practitioners, we showcase optimal operational settings for a TRANSCENDENT deployment and show how it can be applied to many popular learning algorithms. These insights support both old and new empirical findings, making Transcend a sound and practical solution for the first time. To this end, we release TRANSCENDENT as open source, to aid the adoption of rejection strategies by the security community.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833659/](https://ieeexplore.ieee.org/document/9833659/)
## Copy, Right? A Testing Framework for Copyright Protection of Deep Learning Models.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#copy-right-a-testing-framework-for-copyright-protection-of-deep-learning-models)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#copy-right-a-testing-framework-for-copyright-protection-of-deep-learning-models)
### Authors
* Jialuo Chen, Zhejiang University
* Jingyi Wang, Zhejiang University
* Tinglan Peng, Zhejiang University
* Youcheng Sun, University of Manchester
* Peng Cheng, Zhejiang University
* Shouling Ji, Zhejiang University
* Xingjun Ma, Fudan University
* Bo Li, UIUC
* Dawn Song, UC Berkeley
### Abstract
> Deep learning models, especially those large-scale and high-performance ones, can be very costly to train, demanding a considerable amount of data and computational resources. As a result, deep learning models have become one of the most valuable assets in modern artificial intelligence. Unauthorized duplication or reproduction of deep learning models can lead to copyright infringement and cause huge economic losses to model owners, calling for effective copyright protection techniques. Existing protection techniques are mostly based on watermarking, which embeds an owner-specified watermark into the model. While being able to provide exact ownership verification, these techniques are 1) invasive, i.e., they need to tamper with the training process, which may affect the model utility or introduce new security risks into the model; 2) prone to adaptive attacks that attempt to remove/replace the watermark or adversarially block the retrieval of the watermark; and 3) not robust to the emerging model extraction attacks. Latest fingerprinting work on deep learning models, though being non-invasive, also falls short when facing the diverse and ever-growing attack scenarios.In this paper, we propose a novel testing framework for deep learning copyright protection: DEEPJUDGE. DEEPJUDGE quantitatively tests the similarities between two deep learning models: a victim model and a suspect model. It leverages a diverse set of testing metrics and efficient test case generation algorithms to produce a chain of supporting evidence to help determine whether a suspect model is a copy of the victim model. Advantages of DEEPJUDGE include: 1) non-invasive, as it works directly on the model and does not tamper with the training process; 2) efficient, as it only needs a small set of seed test cases and a quick scan of the two models; 3) flexible, i.e., it can easily incorporate new testing metrics or test case generation methods to obtain more confident and robust judgement; and 4) fairly robust to model extraction attacks and adaptive attacks. We verify the effectiveness of DEEPJUDGE under three typical copyright infringement scenarios, including model finetuning, pruning and extraction, via extensive experiments on both image classification and speech recognition datasets with a variety of model architectures.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833747/](https://ieeexplore.ieee.org/document/9833747/)
## Phishing in Organizations: Findings from a Large-Scale and Long-Term Study.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#phishing-in-organizations-findings-from-a-large-scale-and-long-term-study)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#phishing-in-organizations-findings-from-a-large-scale-and-long-term-study)
### Authors
* Daniele Lain, Department of Computer Science, ETH Zurich, Switzerland
* Kari Kostiainen, Department of Computer Science, ETH Zurich, Switzerland
* Srdjan Čapkun, Department of Computer Science, ETH Zurich, Switzerland
### Abstract
> In this paper, we present findings from a largescale and long-term phishing experiment that we conducted in collaboration with a partner company. Our experiment ran for 15 months during which time more than 14,000 study participants (employees of the company) received different simulated phishing emails in their normal working context. We also deployed a reporting button to the company’s email client which allowed the participants to report suspicious emails they received. We measured click rates for phishing emails, dangerous actions such as submitting credentials, and reported suspicious emails. The results of our experiment provide three types of contributions. First, some of our findings support previous literature with improved ecological validity. One example of such results is good effectiveness of warnings on emails. Second, some of our results contradict prior literature and common industry practices. Surprisingly, we find that embedded training during simulated phishing exercises, as commonly deployed in the industry today, does not make employees more resilient to phishing, but instead it can have unexpected side effects that can make employees even more susceptible to phishing. And third, we report new findings. In particular, we are the first to demonstrate that using the employees as a collective phishing detection mechanism is practical in large organizations. Our results show that such crowd-sourcing allows fast detection of new phishing campaigns, the operational load for the organization is acceptable, and the employees remain active over long periods of time.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833766/](https://ieeexplore.ieee.org/document/9833766/)
## 27 Years and 81 Million Opportunities Later: Investigating the Use of Email Encryption for an Entire University.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#27-years-and-81-million-opportunities-later-investigating-the-use-of-email-encryption-for-an-entire-university)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#27-years-and-81-million-opportunities-later-investigating-the-use-of-email-encryption-for-an-entire-university)
### Authors
* Christian Stransky, Leibniz University, Hannover
* Oliver Wiese, Freie Universität, Berlin
* Volker Roth, Freie Universität, Berlin
* Yasemin Acar, Max Planck Institute for Security and Privacy
* Sascha Fahl, Leibniz University, Hannover; CISPA Helmholtz-Center for Information Security
### Abstract
> Email is one of the main communication tools and has seen significant adoption in the past decades. However, emails are sent in plain text by default and allow attackers easy access. Users can protect their emails by end-to-end encrypting them using tools such as S/MIME or PGP.Although PGP had already been introduced in 1991, it is a commonly held belief that email encryption is a niche tool that has not seen widespread adoption to date. Previous user studies identified ample usability issues with email encryption such as key management and user interface challenges, which likely contribute to the limited success of email encryption.However, so far ground truth based on longitudinal field data is missing in the literature. Towards filling this gap, we measure the use of email encryption based on 27 years of data for 37,089 users at a large university. While attending to ethical and data privacy concerns, we were able to analyze the use of S/MIME and PGP in 81,612,595 emails.We found that only 5.46% of all users ever used S/MIME or PGP. This led to 0.06% encrypted and 2.8% signed emails. Users were more likely to use S/MIME than PGP by a factor of six. We saw that using multiple email clients had a negative impact on signing as well as encrypting emails and that only 3.36% of all emails between S/MIME users who had previously exchanged certificates were encrypted on average.Our results imply that the adoption of email encryption is indeed very low and that key management challenges negatively impact even users who have set up S/MIME or PGP previously.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833755/](https://ieeexplore.ieee.org/document/9833755/)
## Investigating Influencer VPN Ads on YouTube.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#investigating-influencer-vpn-ads-on-youtube)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#investigating-influencer-vpn-ads-on-youtube)
### Authors
* Omer Akgul, University of Maryland
* Richard Roberts, University of Maryland
* Moses Namara, Clemson University
* Dave Levin, University of Maryland
* Michelle L. Mazurek, University of Maryland
### Abstract
> One widespread, but frequently overlooked, source of security information is influencer marketing ads on YouTube for security and privacy products such as VPNs. This paper examines how widespread these ads are, where on YouTube they are found, and what kind of information they convey. Starting from a random sample of 1.4% of YouTube, we identify 243 videos containing VPN ads with a total of 63 million views. Using qualitative analysis, we find that these ads commonly discuss broad security guarantees as well as specific technical features, frequently focus on internet threats, and sometimes emphasize accessing otherwise unavailable content. Different VPN companies tend to advertise in different categories of channels and emphasize different messages. We find a number of potentially misleading claims, including overpromises and exaggerations that could negatively influence viewers’ mental models of internet safety.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833633/](https://ieeexplore.ieee.org/document/9833633/)
## How Does Usable Security (Not) End Up in Software Products? Results From a Qualitative Interview Study.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#how-does-usable-security-not-end-up-in-software-products-results-from-a-qualitative-interview-study)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#how-does-usable-security-not-end-up-in-software-products-results-from-a-qualitative-interview-study)
### Authors
* Marco Gutfleisch, Ruhr University Bochum, Germany
* Jan H. Klemmer, Leibniz University Hannover, Germany
* Niklas Busch, Leibniz University Hannover, Germany
* Yasemin Acar, Max Planck Institute for Security and Privacy, Germany
* M. Angela Sasse, Ruhr University Bochum, Germany
* Sascha Fahl, Leibniz University Hannover, Germany; CISPA Helmholtz Center for Information Security, Germany
### Abstract
> For software to be secure in practice, users need to be willing and able to appropriately use security features. These features are usually implemented by software professionals during the software development process (SDP), who may be unable to consider the usability of these mechanisms. While research has made progress in supporting developers in creating secure software products, very little attention has been paid to whether and how these security features are made usable. In a semi-structured interview study with 25 software professionals (software developers, designers, architects), we explored how they and other decision-makers encounter and deal with security and usability during the software development process in their companies. Based on 37 hours of interview recordings, we qualitatively analyzed and investigated 23 distinct development contexts in detail. In addition to individual awareness and factors that directly influence the implementation phase, we identify a high impact of contextual factors, such as stakeholder pressure, presence of expertise, and collaboration culture, and the specific implementation of the SDP on usable security in software products. We conclude our work by highlighting important gaps, such as studying and improving contextual factors that contribute to usable security and discussing potential improvements of the status quo.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833756/](https://ieeexplore.ieee.org/document/9833756/)
## Private Approximate Nearest Neighbor Search with Sublinear Communication.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#private-approximate-nearest-neighbor-search-with-sublinear-communication)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#private-approximate-nearest-neighbor-search-with-sublinear-communication)
### Authors
* Sacha Servan-Schreiber, MIT CSAIL
* Simon Langowski, MIT CSAIL
* Srinivas Devadas, MIT CSAIL
### Abstract
> Nearest neighbor search is a fundamental building-block for a wide range of applications. A privacy-preserving protocol for nearest neighbor search involves a set of clients who send queries to a remote database. Each client retrieves the nearest neighbor(s) to its query in the database without revealing any information about the query. To ensure database privacy, clients must learn as little as possible beyond the query answer, even if behaving maliciously by deviating from protocol. Existing protocols for private nearest neighbor search require heavy cryptographic tools, resulting in high computational and bandwidth overheads. In this paper, we present the first lightweight protocol for private nearest neighbor search. Our protocol is instantiated using two non-colluding servers, each holding a replica of the database. Our design supports an arbitrary number of clients simultaneously querying the database through the two servers. Each query consists of a single round of communication between the client and the two servers. No communication is required between the servers to answer queries. If at least one of the servers is non-colluding, we ensure that (1) no information is revealed on the client’s query, (2) the total communication between the client and the servers is sublinear in the database size, and (3) each query answer only leaks a small and bounded amount of information about the database to the client, even if the client is malicious. We implement our protocol and report its performance on real-world data. Our construction requires between 10 and 20 seconds of query latency over large databases of 10M feature vectors. Client overhead remained under 10ms of processing time per query and less than 10MB of communication.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833702/](https://ieeexplore.ieee.org/document/9833702/)
## SNARKBlock: Federated Anonymous Blocklisting from Hidden Common Input Aggregate Proofs.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#snarkblock-federated-anonymous-blocklisting-from-hidden-common-input-aggregate-proofs)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#snarkblock-federated-anonymous-blocklisting-from-hidden-common-input-aggregate-proofs)
### Authors
* Michael Rosenberg, Department of Computer Science, University of Maryland
* Mary Maller, Ethereum Foundation
* Ian Miers, Department of Computer Science, University of Maryland
### Abstract
> Zero-knowledge blocklists allow cross-platform blocking of users but, counter-intuitively, do not link users identities inter- or intra-platform, or to the fact they were blocked. Unfortunately, existing approaches (Tsang et al. ’10) require that servers do work linear in the size of the blocklist for each verification of a non-membership proof.We design and implement SNARKBLOCK, a new protocol for zero-knowledge blocklisting with server-side verification that is logarithmic in the size of the blocklist. SNARKBLOCK is also the first approach to support ad-hoc, federated blocklisting: websites can mix and match their own blocklists from other blocklists and dynamically choose which identity providers they trust.Our core technical advance, of separate interest, is the HICIAP zero-knowledge proof system, which addresses a common problem in privacy-preserving protocols: using zero-knowledge proofs for repeated but unlinakble interactions. Rerandomzing a Groth16 proof achieves unlinkability without the need to recompute the proof for every interaction. But this technique does not apply to applications where each interaction includes multiple Groth16 proofs over a common hidden input (e.g., the user’s identity). Here, the best known approach is to commit to the hidden input and feed it to each proof, but this creates a persistent identifier, forcing recomputation. HICIAP resolves this problem by aggregating n Groth16 proofs into one $O(\log n) -$sized, $O(\log n) -$verification time proof which also shows that the input proofs share a hidden input. Because HICIAP is zero-knowledge, repeated shows of the same aggregate or an updated aggregate are unlinkable even though the underlying Groth16 proofs are never recomputed.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833656/](https://ieeexplore.ieee.org/document/9833656/)
## How to Attack and Generate Honeywords.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#how-to-attack-and-generate-honeywords)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#how-to-attack-and-generate-honeywords)
### Authors
* Ding Wang, Nankai University
* Yunkai Zou, Nankai University
* Qiying Dong, Nankai University
* Yuanming Song, Peking University
* Xinyi Huang, Fujian Normal University
### Abstract
> Honeywords are decoy passwords associated with each user account to timely detect password leakage. The key issue lies in how to generate honeywords that are hard to be differentiated from real passwords. This security mechanism was first introduced by Juels and Rivest at CCS’13, and has been covered by hundreds of media and adopted in dozens of research domains. Existing research deals with honeywords primarily in an ad hoc manner, and it is challenging to develop a secure honeyword-generation method and well evaluate (attack) it. In this work, we tackle this problem in a principled approach. We first propose four theoretic models for characterizing the attacker $\mathcal{A}$’s best distinguishing strategies, with each model based on a different combination of information available to $\mathcal{A}$ (e.g., public datasets, the victim’s personal information and registration order). These theories guide us to design effective experiments with real-world password datasets to evaluate the goodness (flatness) of a given honeyword-generation method.Armed with the four best attacking theories, we develop the corresponding honeyword-generation method for each type of attackers, by using various representative probabilistic password guessing models. Through a series of exploratory investigations, we show the use of these password models is not straightforward, but requires creative and significant efforts. Both empirical experiments and user-study results demonstrate that our methods significantly outperform prior art. Besides, we manage to resolve several previously unexplored challenges that arise in the practical deployment of a honeyword method. We believe this work pushes the honeyword research towards statistical rigor.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833598/](https://ieeexplore.ieee.org/document/9833598/)
## WIGHT: Wired Ghost Touch Attack on Capacitive Touchscreens.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#wight-wired-ghost-touch-attack-on-capacitive-touchscreens)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#wight-wired-ghost-touch-attack-on-capacitive-touchscreens)
### Authors
* Yan Jiang, Ubiquitous System Security Lab (USSLAB), Zhejiang University
* Xiaoyu Ji, Ubiquitous System Security Lab (USSLAB), Zhejiang University
* Kai Wang, Ubiquitous System Security Lab (USSLAB), Zhejiang University
* Chen Yan, Ubiquitous System Security Lab (USSLAB), Zhejiang University
* Richard Mitev, System Security Lab, Technical University of Darmstadt
* Ahmad-Reza Sadeghi, System Security Lab, Technical University of Darmstadt
* Wenyuan Xu, Ubiquitous System Security Lab (USSLAB), Zhejiang University
### Abstract
> The security of capacitive touchscreens is crucial since they have become the primary human-machine interface on smart devices. To the best of our knowledge, this paper presents WIGHT, the first wired attack that creates ghost touches on capacitive touchscreens via charging cables, and can manipulate the victim devices with undesired consequences, e.g., allowing malicious Bluetooth connections, accepting files with viruses, etc. Our study calls for attention to a new threat vector against touchscreens that only requires connecting to a malicious charging port, which could be a public charging station, and is effective across various power adapters and even USB data blockers. Despite the fact that smartphones employ abundant noise reduction and voltage management techniques, we manage to inject carefully crafted signals that can induce ghost touches within a chosen range. The underlying principle is to inject common-mode noises over the power line to avoid being effectively filtered yet affect the touch measurement mechanism, and synchronize the malicious noise with the screen measurement scanning cycles to place the ghost touches at target locations. We achieve three types of attacks: injection attacks that create ghost touches without users touching the screen, alteration attacks that change the detected legitimate touch position, and Denial-of-Service attacks that prevent the device from identifying legitimate touches. Our evaluation on 6 smartphones, 1 tablet, 2 standalone touchscreen panels, 6 power adapters, and 13 charging cables demonstrates the feasibility of all three type attacks.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833740/](https://ieeexplore.ieee.org/document/9833740/)
## Time-Print: Authenticating USB Flash Drives with Novel Timing Fingerprints.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#time-print-authenticating-usb-flash-drives-with-novel-timing-fingerprints)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#time-print-authenticating-usb-flash-drives-with-novel-timing-fingerprints)
### Authors
* Patrick Cronin, University of Delaware
* Xing Gao, University of Delaware
* Haining Wang, Virginia Tech
* Chase Cotton, University of Delaware
### Abstract
> Universal Serial Bus (USB) ports are a ubiquitous feature in computer systems and offer a cheap and efficient way to provide power and data connectivity between a host and peripheral devices. Even with the rise of cloud and off-site computing, USB has played a major role in enabling data transfer between devices. Its usage is especially prevalent in high-security environments where systems are ‘air-gapped’ and not connected to the Internet. However, recent research has demonstrated that USB is not nearly as secure as once thought, with different attacks showing that modified firmware on USB mass storage devices can compromise a host system. While many defenses have been proposed, they require user interaction, advanced hardware support (incompatible with legacy devices), or utilize device identifiers that can be subverted by an attacker. In this paper, we present Time-Print, a novel timing-based fingerprinting method, for identifying USB mass storage devices. We create a fingerprint by timing a series of read operations from different locations on a drive, as the timing variations are unique enough to identify individual USB devices. Time-Print is low overhead, completely software-based, and does not require any extra or specialized hardware. To validate the efficacy of Time-Print, we examine more than 40 USB flash drives and conduct experiments in multiple authentication scenarios. The experimental results show that Time-Print can (1) identify known/unknown brand/model USB devices with greater than 99.5% accuracy, (2) identify seen/unseen devices of the same brand/model with 95% accuracy, and (3) classify USB devices from the same brand/model with an average accuracy of 98.7%.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833595/](https://ieeexplore.ieee.org/document/9833595/)
## Device Fingerprinting with Peripheral Timestamps.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#device-fingerprinting-with-peripheral-timestamps)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#device-fingerprinting-with-peripheral-timestamps)
### Authors
* John V. Monaco, Naval Postgraduate School, Monterey, CA
### Abstract
> Sensing and processing peripheral input is a ubiquitous capability of personal computers. Text entry on physical and virtual keyboards, mouse pointer motion, and touchscreen gestures are the primary ways in which users interact with websites viewed on desktop and mobile devices. Peripheral input events must pass through a pipeline of hardware and software processes before they reach the web browser. This pipeline is device-dependent and often contains low-frequency polling components, such as USB polling and process scheduling, that influence event timing within the web page.We show that a relatively unique device fingerprint is formed by the timing of peripheral input events. No special permissions are required to register callbacks to keyboard, mouse, and touch events from within a web browser, and the technique works on both desktop and mobile devices. We propose a dual clock model in which both a fast reference clock and slow subject clock are compared through a single time source. With this model, the instantaneous phase of the subject clock is measured and used to construct a phase image. The phase image is then embedded in a low dimensional feature space using FPNET, a convolutional neural network designed to extract a device fingerprint from the instantaneous phase. Performance is evaluated using a dataset containing 300M keyboard events collected from over 228k devices observed in the wild. After about two minutes of typing, a device fingerprint is formed that enables 87.35% verification accuracy among a population of 100k devices. Combined with features that measure user behavior in addition to device behavior, verification accuracy increases to 97.36%. The methods described have potential as a second authentication factor, but could also be used to track Internet users.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833612/](https://ieeexplore.ieee.org/document/9833612/)
## PCR-Auth: Solving Authentication Puzzle Challenge with Encoded Palm Contact Response.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#pcr-auth-solving-authentication-puzzle-challenge-with-encoded-palm-contact-response)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#pcr-auth-solving-authentication-puzzle-challenge-with-encoded-palm-contact-response)
### Authors
* Long Huang, Department of Computer Science, Louisiana State University, Baton Rouge, LA, USA
* Chen Wang, Department of Computer Science, Louisiana State University, Baton Rouge, LA, USA
### Abstract
> Biometrics have been widely applied as personally identifiable data for user authentication. However, existing biometric authentications are vulnerable to biometric spoofing. One reason is that they are easily observable and vulnerable to physical forgeries. Examples are the apparent surface patterns of human bodies, such as fingerprints and faces. A more significant issue is that existing authentication methods are entirely built upon biometric features, which almost never change and could be obtained or learned by an adversary such as human voices. To address this inherent security issue of biometric authentications, we propose a novel acoustically extracted hand-grip biometric, which is associated with every user’s hand geometry, body-fat ratio, and gripping strength; It is implicit and available whenever they grip a handheld device. Furthermore, we integrate a coding technique in the biometric acquisition process, which encodes static biometrics into dynamic biometric features to prevent data reuse. Additionally, this low-cost method can be deployed on any handheld device that has a speaker and a microphone. In particular, we develop a challenge-response biometric authentication system, which consists of a pair of biometric encoder and decoder. We encode the ultrasonic signal according to a challenge sequence and extract a distinct biometric code as the response for each session. We then decode the biometric code to verify the user by a convolutional neural network-based algorithm, which not only examines the coding correctness but also verifies the biometric features presented by each biometric digit. Furthermore, we investigate diverse acoustic attacks to our system, by respectively assuming an adversary could present the correct code, generate similar biometric features or successfully forge both. Extensive experiments on mobile devices show that our system achieves 97% accuracy to distinguish users and rejects 100% replay and synthesis attacks with 6-digit codes.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833564/](https://ieeexplore.ieee.org/document/9833564/)
## Mitigating Information Leakage Vulnerabilities with Type-based Data Isolation.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#mitigating-information-leakage-vulnerabilities-with-type-based-data-isolation)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#mitigating-information-leakage-vulnerabilities-with-type-based-data-isolation)
### Authors
* Alyssa Milburn, Intel; Vrije Universiteit Amsterdam, The Netherlands
* Erik Van Der Kouwe, Vrije Universiteit Amsterdam, The Netherlands
* Cristiano Giuffrida, Vrije Universiteit Amsterdam, The Netherlands
### Abstract
> Information leakage vulnerabilities (or simply info leaks) such as out-of-bounds/uninitialized reads in the architectural or speculative domain pose a significant security threat, allowing attackers to leak sensitive data such as crypto keys. At the same time, such vulnerabilities are hard to efficiently mitigate, as every (even speculative) memory load operation needs to be potentially instrumented against unauthorized reads. Existing confidentiality-preserving solutions based on data isolation label memory objects with different (e.g., sensitive vs. nonsensitive) colors, color load operations accordingly using static pointsto analysis, and instrument them to enforce color-matching invariants at run time. Unfortunately, the reliance on conservative points-to analysis introduces overapproximations that are detrimental to security (or further degrade performance). In this paper, we propose Type-based Data Isolation (TDI), a new practical design point in the data isolation space to mitigate info leaks. TDI isolates memory objects of different colors in separate memory arenas and uses efficient compiler instrumentation to constrain loads to the arena of the intended color by construction. TDI’s arena-based design moves the instrumentation from loads to pointer arithmetic operations, enabling new aggressive speculation-aware performance optimizations and eliminating the need for points-to analysis. Moreover, TDI’s color management is flexible. TDI can support a few-color scheme with sensitive data annotations similar to prior work (e.g., 2 colors) or a many-color scheme based on basic type analysis (i.e., one color per object type). The latter approach provides fine-grained data isolation, eliminates the need for annotations, and enforces strong color-matching invariants equivalent to ideal (context-sensitive) type-based points-to analysis. Our results show that TDI can efficiently support such strong security invariants, at average performance overheads of <10% on SPEC CPU2006 and nginx.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833675/](https://ieeexplore.ieee.org/document/9833675/)
## SYMBEXCEL: Automated Analysis and Understanding of Malicious Excel 4.0 Macros.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#symbexcel-automated-analysis-and-understanding-of-malicious-excel-4-0-macros)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#symbexcel-automated-analysis-and-understanding-of-malicious-excel-4-0-macros)
### Authors
* Nicola Ruaro, University of California, Santa Barbara
* Fabio Pagani, University of California, Santa Barbara
* Stefano Ortolani, VMware
* Christopher Kruegel, University of California, Santa Barbara
* Giovanni Vigna, University of California, Santa Barbara
### Abstract
> Malicious software (malware) poses a significant threat to the security of our networks and users. In the ever-evolving malware landscape, Excel 4.0 Office macros (XL4) have recently become an important attack vector. These macros are often hidden within apparently legitimate documents and under several layers of obfuscation. As such, they are difficult to analyze using static analysis techniques. Moreover, the analysis in a dynamic analysis environment (a sandbox) is challenging because the macros execute correctly only under specific environmental conditions that are not always easy to create. This paper presents SYMBEXCEL, a novel solution that leverages symbolic execution to deobfuscate and analyze Excel 4.0 macros automatically. Our approach proceeds in three stages: (1) The malicious document is parsed and loaded in memory; (2) Our symbolic execution engine executes the XL4 formulas; and (3) Our Engine concretizes any symbolic values encountered during the symbolic exploration, therefore evaluating the execution of each macro under a broad range of (meaningful) environment configurations. SYMBEXCEL significantly outperforms existing deobfuscation tools, allowing us to reliably extract Indicators of Compromise (IoCs) and other critical forensics information. Our experiments demonstrate the effectiveness of our approach, especially in deobfuscating novel malicious documents that make heavy use of environment variables and are often not identified by commercial anti-virus software.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833765/](https://ieeexplore.ieee.org/document/9833765/)
## HEAPSTER: Analyzing the Security of Dynamic Allocators for Monolithic Firmware Images.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#heapster-analyzing-the-security-of-dynamic-allocators-for-monolithic-firmware-images)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#heapster-analyzing-the-security-of-dynamic-allocators-for-monolithic-firmware-images)
### Authors
* Fabio Gritti, University of California, Santa Barbara
* Fabio Pagani, University of California, Santa Barbara
* Ilya Grishchenko, University of California, Santa Barbara
* Lukas Dresel, University of California, Santa Barbara
* Nilo Redini, Qualcomm Technologies Inc.
* Christopher Kruegel, University of California, Santa Barbara
* Giovanni Vigna, University of California, Santa Barbara
### Abstract
> Dynamic memory allocators are critical components of modern systems, and developers strive to find a balance between their performance and their security. Unfortunately, vulnerable allocators are routinely abused as building blocks in complex exploitation chains. Most of the research regarding memory allocators focuses on popular and standardized heap libraries, generally used by high-end devices such as desktop systems and servers. However, dynamic memory allocators are also extensively used in embedded systems but they have not received much scrutiny from the security community.In embedded systems, a raw firmware image is often the only available piece of information, and finding heap vulnerabilities is a manual and tedious process. First of all, recognizing a memory allocator library among thousands of stripped firmware functions can quickly become a daunting task. Moreover, emulating firmware functions to test for heap vulnerabilities comes with its own set of challenges, related, but not limited, to the re-hosting problem.To fill this gap, in this paper we present HEAPSTER, a system that automatically identifies the heap library used by a monolithic firmware image, and tests its security with symbolic execution and bounded model checking. We evaluate HEAPSTER on a dataset of 20 synthetic monolithic firmware images — used as ground truth for our analyses — and also on a dataset of 799 monolithic firmware images collected in the wild and used in real-world devices. Across these datasets, our tool identified 11 different heap management library (HML) families containing a total of 48 different variations. The security testing performed by HEAPSTER found that all the identified variants are vulnerable to at least one critical heap vulnerability. The results presented in this paper show a clear pattern of poor security standards, and raise some concerns over the security of dynamic memory allocators employed by IoT devices.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833610/](https://ieeexplore.ieee.org/document/9833610/)
## SoK: Demystifying Binary Lifters Through the Lens of Downstream Applications.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#sok-demystifying-binary-lifters-through-the-lens-of-downstream-applications)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#sok-demystifying-binary-lifters-through-the-lens-of-downstream-applications)
### Authors
* Zhibo Liu, The Hong Kong University of Science and Technology
* Yuanyuan Yuan, The Hong Kong University of Science and Technology
* Shuai Wang, The Hong Kong University of Science and Technology
* Yuyan Bao, University of Waterloo
### Abstract
> Binary lifters convert executables into an intermediate representation (IR) of a compiler framework. The recovered IR code is generally deemed “analysis friendly,” bridging low-level code analysis with well-established compiler infrastructures. With years of development, binary lifters are becoming increasingly popular for use in various security, systems, and software (re)-engineering applications. Recent studies have also reported highly promising results that suggest binary lifters can generate LLVM IR code with correct functionality, even for complex cases.This paper conducts an in-depth study of binary lifters from an orthogonal and highly demanding perspective. We demystify the “expressiveness” of binary lifters, and reveal how well the lifted LLVM IR code can support critical downstream applications in security analysis scenarios. To do so, we generate two pieces of LLVM IR code by compiling C/C++ programs or by lifting the corresponding executables. We then feed these two pieces of LLVM IR code to three keystone downstream applications (pointer analysis, discriminability analysis, and decompilation) and determine whether inconsistent analysis results are generated. We study four popular static and dynamic LLVM IR lifters that were developed by the industry or academia from a total of 252,063 executables generated by various compilers and optimizations and on different architectures. Our findings show that modern binary lifters afford IR code that is highly suitable for discriminability analysis and decompilation, and suggest that such binary lifters can be applied in common similarity- or code comprehension-based security analysis (e.g., binary diffing). However, the lifted IR code appears unsuited to rigorous static analysis (e.g., pointer analysis). To obtain a more comprehensive view of the utility of binary lifters, we also compare the performance of lifter-enabled approaches with that of binary-only tools in three security tasks, i.e., sanitization, binary diffing, and C decompilation. We summarize our findings and make suggestions for the correct use and further enhancement of binary lifters. We also explored practical ways to enhance the accuracy of pointer analysis using lifted IR code, by using and augmenting Debin, a tool for predicting debug information.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833799/](https://ieeexplore.ieee.org/document/9833799/)
## Property Inference from Poisoning.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#property-inference-from-poisoning)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#property-inference-from-poisoning)
### Authors
* Saeed Mahloujifar, Princeton University
* Esha Ghosh, Microsoft Research
* Melissa Chase, Microsoft Research
### Abstract
> Property inference attacks consider an adversary who has access to a trained ML model and tries to extract some global statistics of the training data. In this work, we study property inference in scenarios where the adversary can maliciously control a part of the training data (poisoning data) with the goal of increasing the leakage. Previous works on poisoning attacks focused on trying to decrease the accuracy of models. Here, for the first time, we study poisoning attacks where the goal of the adversary is to increase the information leakage of the model. We show that poisoning attacks can boost the information leakage significantly and should be considered as a stronger threat model in sensitive applications where some of the data sources may be malicious.We theoretically prove that our attack can always succeed as long as the learning algorithm used has good generalization properties. Then we experimentally evaluate our on different datasets (Census dataset, Enron email dataset, MNIST and CelebA), properties (that are present in the training data as features, that are not present as features, and properties that are uncorrelated with the rest of the training data or classification task) and model architectures (including Resnet-18 and Resnet-50). We were able to achieve high attack accuracy with relatively low poisoning rate, namely, 2–3% poisoning in most of our experiments. We also evaluated our attacks on models trained with DP and we show that even with very small values for $\epsilon$, the attack is still quite successful <sup>1</sup> . <sup>1</sup> Code is available at https://github.com/smahloujifar/PropertyInferenceFromPoisoning.git

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833623/](https://ieeexplore.ieee.org/document/9833623/)
## Reconstructing Training Data with Informed Adversaries.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#reconstructing-training-data-with-informed-adversaries)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#reconstructing-training-data-with-informed-adversaries)
### Authors
* Borja Balle, DeepMind
* Giovanni Cherubin, Microsoft Research
* Jamie Hayes, DeepMind
### Abstract
> Given access to a machine learning model, can an adversary reconstruct the model’s training data? This work studies this question from the lens of a powerful informed adversary who knows all the training data points except one. By instantiating concrete attacks, we show it is feasible to reconstruct the remaining data point in this stringent threat model. For convex models (e.g. logistic regression), reconstruction attacks are simple and can be derived in closed-form. For more general models (e.g. neural networks), we propose an attack strategy based on training a reconstructor network that receives as input the weights of the model under attack and produces as output the target data point. We demonstrate the effectiveness of our attack on image classifiers trained on MNIST and CIFAR-10, and systematically investigate which factors of standard machine learning pipelines affect reconstruction success. Finally, we theoretically investigate what amount of differential privacy suffices to mitigate reconstruction attacks by informed adversaries. Our work provides an effective reconstruction attack that model developers can use to assess memorization of individual points in general settings beyond those considered in previous works (e.g. generative language models or access to training gradients); it shows that standard models have the capacity to store enough information to enable high-fidelity reconstruction of training data points; and it demonstrates that differential privacy can successfully mitigate such attacks in a parameter regime where utility degradation is minimal.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833677/](https://ieeexplore.ieee.org/document/9833677/)
## DeepSteal: Advanced Model Extractions Leveraging Efficient Weight Stealing in Memories.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#deepsteal-advanced-model-extractions-leveraging-efficient-weight-stealing-in-memories)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#deepsteal-advanced-model-extractions-leveraging-efficient-weight-stealing-in-memories)
### Authors
* Adnan Siraj Rakin, School of Electrical, Computer, and Energy Engineering, Arizona State University, Tempe, AZ
* Md Hafizul Islam Chowdhuryy, Department of Electrical and Computer Engineering, University of Central Florida, Orlando, FL
* Fan Yao, Department of Electrical and Computer Engineering, University of Central Florida, Orlando, FL
* Deliang Fan, School of Electrical, Computer, and Energy Engineering, Arizona State University, Tempe, AZ
### Abstract
> Recent advancements in Deep Neural Networks (DNNs) have enabled widespread deployment in multiple security-sensitive domains. The need for resource-intensive training and the use of valuable domain-specific training data have made these models the top intellectual property (IP) for model owners. One of the major threats to DNN privacy is model extraction attacks where adversaries attempt to steal sensitive information in DNN models. In this work, we propose an advanced model extraction framework DeepSteal that steals DNN weights remotely for the first time with the aid of a memory side-channel attack. Our proposed DeepSteal comprises two key stages. Firstly, we develop a new weight bit information extraction method, called HammerLeak, through adopting the rowhammer-based fault technique as the information leakage vector. HammerLeak leverages several novel system-level techniques tailored for DNN applications to enable fast and efficient weight stealing. Secondly, we propose a novel substitute model training algorithm with Mean Clustering weight penalty, which leverages the partial leaked bit information effectively and generates a substitute prototype of the target victim model. We evaluate the proposed model extraction framework on three popular image datasets (e.g., CIFAR-10/100/GTSRB) and four DNN architectures (e.g., ResNet-18/34/Wide-ResNetNGG-11). The extracted substitute model has successfully achieved more than 90% test accuracy on deep residual networks for the CIFAR-10 dataset. Moreover, our extracted substitute model could also generate effective adversarial input samples to fool the victim model. Notably, it achieves similar performance (i.e., ~1-2% test accuracy under attack) as white-box adversarial input attack (e.g., PGD/Trades).

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833743/](https://ieeexplore.ieee.org/document/9833743/)
## Model Stealing Attacks Against Inductive Graph Neural Networks.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#model-stealing-attacks-against-inductive-graph-neural-networks)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#model-stealing-attacks-against-inductive-graph-neural-networks)
### Authors
* Yun Shen, Norton Research Group
* Xinlei He, CISPA Helmholtz Center for Information Security
* Yufei Han, INRIA
* Yang Zhang, CISPA Helmholtz Center for Information Security
### Abstract
> Many real-world data come in the form of graphs. Graph neural networks (GNNs), a new family of machine learning (ML) models, have been proposed to fully leverage graph data to build powerful applications. In particular, the inductive GNNs, which can generalize to unseen data, become mainstream in this direction. Machine learning models have shown great potential in various tasks and have been deployed in many real-world scenarios. To train a good model, a large amount of data as well as computational resources are needed, leading to valuable intellectual property. Previous research has shown that ML models are prone to model stealing attacks, which aim to steal the functionality of the target models. However, most of them focus on the models trained with images and texts. On the other hand, little attention has been paid to models trained with graph data, i.e., GNNs. In this paper, we fill the gap by proposing the first model stealing attacks against inductive GNNs. We systematically define the threat model and propose six attacks based on the adversary’s background knowledge and the responses of the target models. Our evaluation on six benchmark datasets shows that the proposed model stealing attacks against GNNs achieve promising performance. <sup>1</sup>

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833607/](https://ieeexplore.ieee.org/document/9833607/)
## Noise-SDR: Arbitrary Modulation of Electromagnetic Noise from Unprivileged Software and Its Impact on Emission Security.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#noise-sdr-arbitrary-modulation-of-electromagnetic-noise-from-unprivileged-software-and-its-impact-on-emission-security)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#noise-sdr-arbitrary-modulation-of-electromagnetic-noise-from-unprivileged-software-and-its-impact-on-emission-security)
### Authors
* Giovanni Camurati, Software and System Security Group, EURECOM, Sophia-Antipolis, France
* Aurélien Francillon, Software and System Security Group, EURECOM, Sophia-Antipolis, France
### Abstract
> Electronic devices generate electromagnetic noise, also known as EM leakage when the noise leaks information. Many recent research papers exploit the fact that software activity can exploit this leakage to generate radio signals. This process breaks the isolation between simple unprivileged code and the radio spectrum, letting an attacker generate physical radio signals without accessing any radio interface. Previous work has discovered many leakage sources and covert communication channels, which generally use simple modulation schemes. However, a fundamental research question has been left unexplored: to which point can attackers shape electromagnetic leakage into signals of their choice? The answer to this question has an important security impact that goes beyond specific attacks or platforms. Indeed, arbitrary signal modulation is a useful primitive. This would allow attackers to use advanced modulations and better exploit the channel (leakage) capacity, for example, to establish advanced communication channels, or to inject malicious signals into victim receivers. At a first analysis, arbitrary modulation seems impossible: software has limited control on the leakage and existing attacks are therefore constrained to on-off keying or frequency-shift keying. In this paper, we demonstrate that shaping arbitrary signals out of electromagnetic noise is possible from unprivileged software. For this we leverage fully-digital radio techniques and call our method Noise-SDR because, similarly to a software-defined radio, it can transmit a generic signal synthesized in software. We demonstrate our approach with a practical implementation with DRAM accesses on ARMv7-A, ARMv8-A, x86-64, and MIPS32. We evaluate it on different types of devices, including smartphones, a laptop, a desktop, and a Linux-based IoT device. Although power, frequency and bandwidth are constrained by the properties of the leakage, we present several case studies, including transmission with advanced protocols, device tracking, and signal injection.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833767/](https://ieeexplore.ieee.org/document/9833767/)
## mmSpy: Spying Phone Calls using mmWave Radars.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#mmspy-spying-phone-calls-using-mmwave-radars)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#mmspy-spying-phone-calls-using-mmwave-radars)
### Authors
* Suryoday Basak, The Pennsylvania State University, University Park, PA
* Mahanth Gowda, The Pennsylvania State University, University Park, PA
### Abstract
> This paper presents a system mmSpy that shows the feasibility of eavesdropping phone calls remotely. Towards this end, mmSpy performs sensing of earpiece vibrations using an off-the-shelf radar device that operates in the mmWave spectrum (77GHz, and 60GHz). Given that mmWave radars are becoming popular in a number of autonomous driving, remote sensing, and other IoT applications, we believe this is a critical privacy concern. In contrast to prior works that show the feasibility of detecting loudspeaker vibrations with larger amplitudes, mmSpy exploits smaller wavelengths of mmWave radar signals to detect subtle vibrations in the earpiece devices used in phonecalls. Towards designing this attack, mmSpy solves a number of challenges related to non-availability of large scale radar datasets, systematic correction of various sources of noises, as well as domain adaptation problems in harvesting training data. Extensive measurement-based validation achieves an endto-end accuracy of 83-44% in classifying digits and keywords over a range of 1-6ft, thereby compromising the privacy in applications such as exchange of credit card information. In addition, mmSpy shows the feasibility of reconstruction of the audio signals from the radar data, using which more sensitive information can be potentially leaked.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833568/](https://ieeexplore.ieee.org/document/9833568/)
## Attacks on Wireless Coexistence: Exploiting Cross-Technology Performance Features for Inter-Chip Privilege Escalation.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#attacks-on-wireless-coexistence-exploiting-cross-technology-performance-features-for-inter-chip-privilege-escalation)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#attacks-on-wireless-coexistence-exploiting-cross-technology-performance-features-for-inter-chip-privilege-escalation)
### Authors
* Jiska Classen, Technical University of Darmstadt, Secure Mobile Networking Lab
* Francesco Gringoli, University of Brescia, CNIT
* Michael Hermann, Technical University of Darmstadt, Secure Mobile Networking Lab
* Matthias Hollick, Technical University of Darmstadt, Secure Mobile Networking Lab
### Abstract
> Modern mobile devices feature multiple wireless technologies, such as Bluetooth, Wi-Fi, and LTE. Each of them is implemented within a separate wireless chip, sometimes packaged as combo chips. However, these chips share components and resources, such as the same antenna or wireless spectrum. Wireless coexistence interfaces enable them to schedule packets without collisions despite shared resources, essential to maximizing networking performance. Today’s hardwired coexistence interfaces hinder clear security boundaries and separation between chips and chip components. This paper shows practical coexistence attacks on Broadcom, Cypress, and Silicon Labs chips deployed in billions of devices. For example, we demonstrate that a Bluetooth chip can directly extract network passwords and manipulate traffic on a Wi-Fi chip. Coexistence attacks enable a novel type of lateral privilege escalation across chip boundaries. We responsibly disclosed the vulnerabilities to the vendors. Yet, only partial fixes were released for existing hardware since wireless chips would need to be redesigned from the ground up to prevent the presented attacks on coexistence.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833639/](https://ieeexplore.ieee.org/document/9833639/)
## Invisible Finger: Practical Electromagnetic Interference Attack on Touchscreen-based Electronic Devices.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#invisible-finger-practical-electromagnetic-interference-attack-on-touchscreen-based-electronic-devices)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#invisible-finger-practical-electromagnetic-interference-attack-on-touchscreen-based-electronic-devices)
### Authors
* Haoqi Shan, University of Florida
* Boyi Zhang, University of Florida
* Zihao Zhan, University of Florida
* Dean Sullivan, University of New Hampshire
* Shuo Wang, University of Florida
* Yier Jin, University of Florida
### Abstract
> Touchscreen-based electronic devices such as smart phones and smart tablets are widely used in our daily life. While the security of electronic devices have been heavily investigated recently, the resilience of touchscreens against various attacks has yet to be thoroughly investigated. In this paper, for the first time, we show that touchscreen-based electronic devices are vulnerable to intentional electromagnetic interference (IEMI) attacks in a systematic way and how to conduct this attack in a practical way. Our contribution lies in not just demonstrating the attack, but also analyzing and quantifying the underlying mechanism allowing the novel IEMI attack on touchscreens in detail. We show how to calculate both the minimum amount of electric field and signal frequency required to induce touchscreen ghost touches. We further analyze our IEMI attack on real touchscreens with different magnitudes, frequencies, duration, and multitouch patterns. The mechanism of controlling the touchscreen-enabled electronic devices with IEMI signals is also elaborated. We design and evaluate an out-of-sight touchscreen locator and touch injection feedback mechanism to assist a practical IEMI attack. Our attack works directly on the touchscreen circuit regardless of the touchscreen scanning mechanism or operating system. Our attack can inject short-tap, long-press, and omnidirectional gestures on touchscreens from a distance larger than the average thickness of common tabletops. Compared with the state-of-the-art touchscreen attack, ours can accurately inject different types of touch events without the need for sensing signal synchronization, which makes our attack more robust and practical. In addition, rather than showing a simple proof-of-concept attack, we present and demonstrate the first ready-to-use IEMI based touchscreen attack vector with end-to-end attack scenarios

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833718/](https://ieeexplore.ieee.org/document/9833718/)
## Using Throughput-Centric Byzantine Broadcast to Tolerate Malicious Majority in Blockchains.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#using-throughput-centric-byzantine-broadcast-to-tolerate-malicious-majority-in-blockchains)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#using-throughput-centric-byzantine-broadcast-to-tolerate-malicious-majority-in-blockchains)
### Authors
* Ruomu Hou, National University of Singapore
* Haifeng Yu, National University of Singapore
* Prateek Saxena, National University of Singapore
### Abstract
> Fault tolerance of a blockchain is often characterized by the fraction f of “adversarial power” that it can tolerate in the system. Despite the fast progress in blockchain designs in recent years, existing blockchain systems can still only tolerate f below 0.5. Can practically usable blockchains tolerate a malicious majority, i.e., f above 0.5? This work presents a positive answer to this question. We first note that the well-known impossibility of byzantine consensus for f above 0.5 does not carry over to blockchains. To tolerate f above 0.5, we use byzantine broadcast, instead of byzantine consensus, as the core of the blockchain. A major obstacle in doing so, however, is that the resulting blockchain may have extremely low throughput. To overcome this central technical challenge, we propose a novel byzantine broadcast protocol OverlayBB, that can tolerate f above 0.5 while achieving good throughput. Using OverlayBB as the core, we present the design, implementation, and evaluation of a novel Proof-of-Stake blockchain called BCube. BCube can tolerate a malicious majority, while achieving practically usable transaction throughput and confirmation latency in our experiments with 10000 nodes and under f=0.7. To our knowledge, BCube is the first blockchain that can achieve such properties.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833617/](https://ieeexplore.ieee.org/document/9833617/)
## MatRiCT+: More Efficient Post-Quantum Private Blockchain Payments.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#matrict-more-efficient-post-quantum-private-blockchain-payments)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#matrict-more-efficient-post-quantum-private-blockchain-payments)
### Authors
* Muhammed F. Esgin, Monash University and CSIRO’s Data61, Australia
* Ron Steinfeld, Monash University, Australia
* Raymond K. Zhao, Monash University, Australia
### Abstract
> We introduce MatRiCT <sup>+</sup> , a practical private blockchain payment protocol based on “post-quantum” lattice assumptions. MatRiCT <sup>+</sup>  builds on MatRiCT due to Esgin et al. (ACM CCS’19) and, in general, follows the Ring Confidential Transactions (RingCT) approach used in Monero, the largest privacy-preserving cryptocurrency. In terms of the practical aspects, MatRiCT <sup>+</sup>  has 2-18× shorter proofs (depending on the number of input accounts, M) and runs 3-11× faster (for a typical transaction) in comparison to MatRiCT. A significant advantage of MatRiCT <sup>+</sup>  is that the proof length’s dependence on M is very minimal (only O(logM)), while MatRiCT has a proof length linear in M. To support its efficiency, we devise several novel techniques in our design of MatRiCT <sup>+</sup>  to achieve compact lattice-based zeroknowledge proof systems, exploiting the algebraic properties of power-of-2 cyclotomic rings commonly used in practical latticebased cryptography. Along the way, we design a family of “optimal” challenge spaces, using a technique we call partition-and-sample, with minimal $\ell_{1}$-norm and invertible challenge differences (with overwhelming probability), while supporting highly-splitting power-of-2 cyclotomic rings. We believe all these results to be widely applicable and of independent interest.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833655/](https://ieeexplore.ieee.org/document/9833655/)
## Universal Atomic Swaps: Secure Exchange of Coins Across All Blockchains.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#universal-atomic-swaps-secure-exchange-of-coins-across-all-blockchains)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#universal-atomic-swaps-secure-exchange-of-coins-across-all-blockchains)
### Authors
* Sri AravindaKrishnan Thyagarajan, Carnegie Mellon University
* Giulio Malavolta, Max Planck Institute for Security and Privacy
* Pedro Moreno-Sanchez, IMDEA Software Institute
### Abstract
> Trading goods lies at the backbone of the modern economy and the recent advent of cryptocurrencies has opened the door for trading decentralized (digital) assets: A large fraction of the value of cryptocurrencies comes from the inter-currency exchange and trading, which has been arguably the most successful application of decentralized money. The security issues observed with centralized, custodial cryptocurrency exchanges have motivated the design of atomic swaps, a protocol for coin exchanges between any two users. Yet, somewhat surprisingly, no atomic swap protocol exists that simultaneously satisfies the following simple but desired properties: (i) non-custodial, departing from a third party trusted holding the coins from users during the exchange; (ii) universal that is, compatible with all (current and future) cryptocurrencies; (iii) multi-asset, supporting the exchange of multiple coins in a single atomic swap.From a theoretical standpoint, in this work we show a generic protocol to securely swap n coins from any (possible multiple) currencies for $\tilde{n}$ coins of any other currencies, for any n and $\tilde{n}$. We do not require any custom scripting language supported by the corresponding blockchains, besides the bare minimum ability to verify signatures on transactions. For the special case when the blockchains use ECDSA or Schnorr signatures, we design a practically efficient protocol based on adaptor signatures and time-lock puzzles. As a byproduct of our approach, atomic swaps transactions no longer include custom scripts and are identical to standard one-to-one transactions. We also show that our protocol naturally generalizes to any cycle of users, i.e., atomic swaps with more than two participants. To demonstrate the practicality of our approach, we have evaluated a prototypical implementation of our protocol for Schnorr/ECDSA signatures and observed that an atomic swap requires below one second on commodity machines. Even on blockchains with expressive smart contract support (e.g., Ethereum), our approach reduces the on-chain cost both in terms of transaction size and gas cost.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833731/](https://ieeexplore.ieee.org/document/9833731/)
## Foundations of Dynamic BFT.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#foundations-of-dynamic-bft)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#foundations-of-dynamic-bft)
### Authors
* Sisi Duan, Tsinghua University; Institute for Advanced Study and BNRist
* Haibin Zhang, Beijing Institute of Technology
### Abstract
> This paper studies dynamic BFT, where replicas can join and leave the system dynamically, a primitive that is nowadays increasingly needed. We provide a formal treatment for dynamic BFT protocols, endowing them with a flexible syntax and various security definitions.We demonstrate the challenges of extending static BFT to dynamic BFT. Then we design and implement Dyno, a highly efficient dynamic BFT protocol under the partial synchrony model. We show that Dyno can seamlessly handle membership changes without incurring performance degradation.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833787/](https://ieeexplore.ieee.org/document/9833787/)
## COBRA: Dynamic Proactive Secret Sharing for Confidential BFT Services.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#cobra-dynamic-proactive-secret-sharing-for-confidential-bft-services)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#cobra-dynamic-proactive-secret-sharing-for-confidential-bft-services)
### Authors
* Robin Vassantlal, LASIGE, Faculdade de Ciências, Universidade de Lisboa, Portugal
* Eduardo Alchieri, Universidade de Brasilia, Brazil
* Bernardo Ferreira, LASIGE, Faculdade de Ciências, Universidade de Lisboa, Portugal
* Alysson Bessani, LASIGE, Faculdade de Ciências, Universidade de Lisboa, Portugal
### Abstract
> Byzantine Fault-Tolerant (BFT) State Machine Replication (SMR) is a classical paradigm for implementing trustworthy services that has received renewed interest with the emergence of blockchains and decentralized infrastructures. A fundamental limitation of BFT SMR is that it provides integrity and availability despite a fraction of the replicas being controlled by an active adversary, but does not offer any confidentiality protection. Previous works addressed this issue by integrating secret sharing with the consensus-based framework of BFT SMR, but without providing all features required by practical systems, which include replica recovery, group reconfiguration, and acceptable performance when dealing with a large number of secrets. We present COBRA, a new protocol stack for Dynamic Proactive Secret Sharing that allows implementing confidentiality in practical BFT SMR systems. COBRA exhibits the best asymptotic communication complexity and optimal storage overhead, being able to renew 100k shares in a group of ten replicas $5 \times $ faster than the current state of the art.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833658/](https://ieeexplore.ieee.org/document/9833658/)
## Back to the Drawing Board: A Critical Evaluation of Poisoning Attacks on Production Federated Learning.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#back-to-the-drawing-board-a-critical-evaluation-of-poisoning-attacks-on-production-federated-learning)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#back-to-the-drawing-board-a-critical-evaluation-of-poisoning-attacks-on-production-federated-learning)
### Authors
* Virat Shejwalkar, University of Massachusetts, Amherst
* Amir Houmansadr, University of Massachusetts, Amherst
* Peter Kairouz, Google Research
* Daniel Ramage, Google Research
### Abstract
> While recent works have indicated that federated learning (FL) may be vulnerable to poisoning attacks by compromised clients, their real impact on production FL systems is not fully understood. In this work, we aim to develop a comprehensive systemization for poisoning attacks on FL by enumerating all possible threat models, variations of poisoning, and adversary capabilities. We specifically put our focus on un-targeted poisoning attacks, as we argue that they are significantly relevant to production FL deployments. We present a critical analysis of untargeted poisoning attacks under practical, production FL environments by carefully characterizing the set of realistic threat models and adversarial capabilities. Our findings are rather surprising: contrary to the established belief, we show that FL is highly robust in practice even when using simple, low-cost defenses. We go even further and propose novel, state-of-the-art data and model poisoning attacks, and show via an extensive set of experiments across three benchmark datasets how (in)effective poisoning attacks are in the presence of simple defense mechanisms. We aim to correct previous misconceptions and offer concrete guidelines to conduct more accurate (and more realistic) research on this topic.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833647/](https://ieeexplore.ieee.org/document/9833647/)
## Model Orthogonalization: Class Distance Hardening in Neural Networks for Better Security.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#model-orthogonalization-class-distance-hardening-in-neural-networks-for-better-security)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#model-orthogonalization-class-distance-hardening-in-neural-networks-for-better-security)
### Authors
* Guanhong Tao, Department of Computer Science, Purdue University
* Yingqi Liu, Department of Computer Science, Purdue University
* Guangyu Shen, Department of Computer Science, Purdue University
* Qiuling Xu, Department of Computer Science, Purdue University
* Shengwei An, Department of Computer Science, Purdue University
* Zhuo Zhang, Department of Computer Science, Purdue University
* Xiangyu Zhang, Department of Computer Science, Purdue University
### Abstract
> The distance between two classes for a deep learning classifier can be measured by the level of difficulty in flipping all (or majority of) samples in a class to the other. The class distances of many pre-trained models in the wild are very small and do not align well with humans’ intuition (e.g., classes turtle and bird have smaller distance than classes cat and dog), making the models vulnerable to backdoor attacks, which aim to cause misclassification by stamping a specific pattern to inputs. We propose a novel model hardening technique called model orthogonalization which is an add-on training step to pretrained models, including clean models, poisoned models, and adversarially trained models. It can substantially enlarge class distances with reasonable training cost and without much accuracy degradation. Our evaluation on 5 datasets with 22 model structures show that our technique can enlarge class distances by 177.63% on average with less than 1% accuracy loss, outperforming existing hardening techniques such as adversarial training, universal adversarial perturbation, and directly using generated backdoors. It reduces 80% false positives for a state-of-the-art backdoor scanner as the enlarged class distances allow the scanner to easily distinguish clean and poisoned models, and substantially outperforms three existing techniques in removing injected backdoors.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833688/](https://ieeexplore.ieee.org/document/9833688/)
## Universal 3-Dimensional Perturbations for Black-Box Attacks on Video Recognition Systems.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#universal-3-dimensional-perturbations-for-black-box-attacks-on-video-recognition-systems)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#universal-3-dimensional-perturbations-for-black-box-attacks-on-video-recognition-systems)
### Authors
* Shangyu Xie, Illinois Institute of Technology, Chicago, IL
* Han Wang, Illinois Institute of Technology, Chicago, IL
* Yu Kong, Rochester Institute of Technology, Rochester, NY
* Yuan Hong, Illinois Institute of Technology, Chicago, IL
### Abstract
> Widely deployed deep neural network (DNN) models have been proven to be vulnerable to adversarial perturbations in many applications (e.g., image, audio and text classifications). To date, there are only a few adversarial perturbations proposed to deviate the DNN models in video recognition systems by simply injecting 2D perturbations into video frames. However, such attacks may overly perturb the videos without learning the spatio-temporal features (across temporal frames), which are commonly extracted by DNN models for video recognition. To our best knowledge, we propose the first black-box attack framework that generates universal 3-dimensional (U3D) perturbations to subvert a variety of video recognition systems. U3D has many advantages, such as (1) as the transfer-based attack, U3D can universally attack multiple DNN models for video recognition without accessing to the target DNN model; (2) the high transferability of U3D makes such universal black-box attack easy-to-launch, which can be further enhanced by integrating queries over the target model when necessary; (3) U3D ensures human-imperceptibility; (4) U3D can bypass the existing state-of-the-art defense schemes; (5) U3D can be efficiently generated with a few pre-learned parameters, and then immediately injected to attack real-time DNN-based video recognition systems. We have conducted extensive experiments to evaluate U3D on multiple DNN models and three large-scale video datasets. The experimental results demonstrate its superiority and practicality.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833776/](https://ieeexplore.ieee.org/document/9833776/)
## "Adversarial Examples" for Proof-of-Learning.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#adversarial-examples-for-proof-of-learning)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#adversarial-examples-for-proof-of-learning)
### Authors
* Rui Zhang, Zhejiang University
* Jian Liu, Zhejiang University
* Yuan Ding, Zhejiang University
* Zhibo Wang, Zhejiang University
* Qingbiao Wu, Zhejiang University
* Kui Ren, Zhejiang University
### Abstract
> In S&P 21, Jia et al. proposed a new concept/mechanism named proof-of-learning (PoL), which allows a prover to demonstrate ownership of a machine learning model by proving integrity of the training procedure. It guarantees that an adversary cannot construct a valid proof with less cost (in both computation and storage) than that made by the prover in generating the proof. A PoL proof includes a set of intermediate models recorded during training, together with the corresponding data points used to obtain each recorded model. Jia et al. claimed that an adversary merely knowing the final model and training dataset cannot efficiently find a set of intermediate models with correct data points. In this paper, however, we show that PoL is vulnerable to “adversarial examples”! Specifically, in a similar way as optimizing an adversarial example, we could make an arbitrarily-chosen data point “generate” a given model, hence efficiently generating intermediate models with correct data points. We demonstrate, both theoretically and empirically, that we are able to generate a valid proof with significantly less cost than generating a proof by the prover.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833596/](https://ieeexplore.ieee.org/document/9833596/)
## Transfer Attacks Revisited: A Large-Scale Empirical Study in Real Computer Vision Settings.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#transfer-attacks-revisited-a-large-scale-empirical-study-in-real-computer-vision-settings)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#transfer-attacks-revisited-a-large-scale-empirical-study-in-real-computer-vision-settings)
### Authors
* Yuhao Mao, Zhejiang University; ETH Zürich
* Chong Fu, Zhejiang University
* Saizhuo Wang, Zhejiang University
* Shouling Ji, Zhejiang University
* Xuhong Zhang, Zhejiang University; Zhejiang University NGICS Platform
* Zhenguang Liu, Zhejiang Gongshang University
* Jun Zhou, Ant Group
* Alex X. Liu, Ant Group
* Raheem Beyah, Georgia Institute of Technology
* Ting Wang, Pennsylvania State University
### Abstract
> One intriguing property of adversarial attacks is their “transferability” – an adversarial example crafted with respect to one deep neural network (DNN) model is often found effective against other DNNs as well. Intensive research has been conducted on this phenomenon under simplistic controlled conditions. Yet, thus far there is still a lack of comprehensive understanding about transferability-based attacks (“transfer attacks”) in real-world environments.To bridge this critical gap, we conduct the first large-scale systematic empirical study of transfer attacks against major cloud-based MLaaS platforms, taking the components of a real transfer attack into account. The study leads to a number of interesting findings which are inconsistent to the existing ones, including: (i) Simple surrogates do not necessarily improve real transfer attacks. (ii) No dominant surrogate architecture is found in real transfer attacks. (iii) It is the gap between posterior (output of the softmax layer) rather than the gap between logit (so-called κ value) that increases transferability. Moreover, by comparing with prior works, we demonstrate that transfer attacks possess many previously unknown properties in real-world environments, such as (i) Model similarity is not a well-defined concept. (ii) L <inf>2</inf>  norm of perturbation can generate high transferability without usage of gradient and is a more powerful source than L <inf>∞</inf>  norm. We believe this work sheds light on the vulnerabilities of popular MLaaS platforms and points to a few promising research directions. <sup>1</sup>

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833783/](https://ieeexplore.ieee.org/document/9833783/)
## Graphics Peeping Unit: Exploiting EM Side-Channel Information of GPUs to Eavesdrop on Your Neighbors.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#graphics-peeping-unit-exploiting-em-side-channel-information-of-gpus-to-eavesdrop-on-your-neighbors)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#graphics-peeping-unit-exploiting-em-side-channel-information-of-gpus-to-eavesdrop-on-your-neighbors)
### Authors
* Zihao Zhan, University of Florida; Vanderbilt University
* Zhenkai Zhang, Clemson University
* Sisheng Liang, Clemson University
* Fan Yao, University of Central Florida
* Xenofon Koutsoukos, Vanderbilt University
### Abstract
> As the popularity of graphics processing units (GPUs) grows rapidly in recent years, it becomes very critical to study and understand the security implications imposed by them. In this paper, we show that modern GPUs can “broadcast” sensitive information over the air to make a number of attacks practical. Specifically, we present a new electromagnetic (EM) side-channel vulnerability that we have discovered in many GPUs of both NVIDIA and AMD. We show that this vulnerability can be exploited to mount realistic attacks through two case studies, which are website fingerprinting and keystroke timing inference attacks. Our investigation recognizes the commonly used dynamic voltage and frequency scaling (DVFS) feature in GPU as the root cause of this vulnerability. Nevertheless, we also show that simply disabling DVFS may not be an effective countermeasure since it will introduce another highly exploitable EM side-channel vulnerability. To the best of our knowledge, this is the first work that studies realistic physical side-channel attacks on non-shared GPUs at a distance.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833773/](https://ieeexplore.ieee.org/document/9833773/)
## Adversarial Prefetch: New Cross-Core Cache Side Channel Attacks.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#adversarial-prefetch-new-cross-core-cache-side-channel-attacks)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#adversarial-prefetch-new-cross-core-cache-side-channel-attacks)
### Authors
* Yanan Guo, Electrical and Computer Engineering Department, University of Pittsburgh
* Andrew Zigerelli, Electrical and Computer Engineering Department, University of Pittsburgh
* Youtao Zhang, Department of Computer Science, University of Pittsburgh
* Jun Yang, Electrical and Computer Engineering Department, University of Pittsburgh
### Abstract
> Modern x86 processors have many prefetch instructions that can be used by programmers to boost performance. However, these instructions may also cause security problems. In particular, we found that on Intel processors, there are two security flaws in the implementation of PREFETCHW, an instruction for accelerating future writes. First, this instruction can execute on data with read-only permission. Second, the execution time of this instruction leaks the current coherence state of the target data. Based on these two design issues, we build two cross-core private cache attacks that work with both inclusive and non-inclusive LLCs, named Prefetch+Reload and Prefetch+Prefetch. We demonstrate the significance of our attacks in different scenarios. First, in the covert channel case, Prefetch+Reload and Prefetch+Prefetch achieve 782 KB/s and 822 KB/s channel capacities, when using only one shared cache line between the sender and receiver, the largest-to-date single-line capacities for CPU cache covert channels. Further, in the side channel case, our attacks can monitor the access pattern of the victim on the same processor, with almost zero error rate. We show that they can be used to leak private information of real-world applications such as cryptographic keys. Finally, our attacks can be used in transient execution attacks in order to leak more secrets within the transient window than prior work. From the experimental results, our attacks allow leaking about 2 times as many secret bytes, compared to Flush+Reload, which is widely used in transient execution attacks.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833692/](https://ieeexplore.ieee.org/document/9833692/)
## Finding and Exploiting CPU Features using MSR Templating.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#finding-and-exploiting-cpu-features-using-msr-templating)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#finding-and-exploiting-cpu-features-using-msr-templating)
### Authors
* Andreas Kogler, Graz University of Technology
* Daniel Weber, CISPA Helmholtz Center for Information Security
* Martin Haubenwallner, Graz University of Technology
* Moritz Lipp, Amazon Web Services
* Daniel Gruss, Graz University of Technology
* Michael Schwarz, CISPA Helmholtz Center for Information Security
### Abstract
> To ensure backward compatibility while adding new features to CPUs, CPU vendors enable a limited CPU configuration via so-called model-specific registers (MSRs). These MSRs have been introduced for various features, such as debugging, performance monitoring, or security. While many MSRs are documented, there is still a plethora of undocumented or sparsely documented MSRs in modern CPUs. Furthermore, with multiple hundred MSRs, each providing up to 64 configuration bits, it is tedious to find specific configuration options. In this paper, we show that MSRs and their configuration bits can be detected automatically on Intel and AMD CPUs. We introduce MSRevelio, a framework to automatically detect bits that influence the behavior of instructions and semi-automatically find bits controlled by BIOS settings. We show that previously overlooked bits can harden systems against microarchitectural attacks such as Medusa, CrossTalk, and software-prefetch attacks. Additionally, we show that an undocumented lock bit allows disabling AES-NI at runtime, forcing mbedTLS to fall back to an AES implementation vulnerable to cache attacks. Exploiting this fallback inside an SGX enclave, we fully recover the AES key used by the enclave. With our detection approach, we show that security features retrofitted with microcode updates can be easily detected, even before the public documentation of the underlying vulnerability. In our analysis of the Xen hypervisor, we show that Xen’s handling of MSRs was flawed for a long time, allowing guests to access undocumented and unhandled MSRs and fingerprint specific Xen versions. Using automated correlation analysis between documented and undocumented MSRs, we discover a previously undocumented MSR correlating with the CPU’s timestamp counter. This MSR is also accessible from Xen guests, and we demonstrate a Foreshadow attack when all other timers are unavailable or artificially deteriorated. Our results highlight that transparency is crucial for features interacting closely with CPU internals.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833599/](https://ieeexplore.ieee.org/document/9833599/)
## Augury: Using Data Memory-Dependent Prefetchers to Leak Data at Rest.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#augury-using-data-memory-dependent-prefetchers-to-leak-data-at-rest)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#augury-using-data-memory-dependent-prefetchers-to-leak-data-at-rest)
### Authors
* Jose Rodrigo Sanchez Vicarte, University of Illinois Urbana-Champaign
* Michael Flanders, University of Illinois Urbana-Champaign; University of Washington
* Riccardo Paccagnella, University of Illinois Urbana-Champaign
* Grant Garrett-Grossman, University of Illinois Urbana-Champaign
* Adam Morrison, Tel Aviv University
* Christopher W. Fletcher, University of Illinois Urbana-Champaign
* David Kohlbrenner, University of Washington
### Abstract
> Microarchitectural side-channel attacks are enjoying a time of explosive growth, mostly fueled by novel transient execution vulnerabilities. These attacks are capable of leaking arbitrary data, as long as it is possible for the adversary to read that data into the processor core using transient instructions. In this paper, we present the first microarchitectural attack that leaks data at rest in the memory system, i.e., never directly read into the core speculatively or non-speculatively. This technique is enabled by a previously unreported class of prefetcher: a data memory-dependent prefetcher (DMP). These prefetchers are designed to allow prefetching of irregular address patterns such as pointer chases. As such, DMPs examine and use the contents of memory directly to determine which addresses to prefetch. Our experiments demonstrate the existence of a pointer-chasing DMP on recent Apple processors, including the A14 and M1. We then reverse engineer the details of this DMP to determine the opportunities for and restrictions it places on attackers using it. Finally, we demonstrate several basic attack primitives capable of leaking pointer values using the DMP.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833570/](https://ieeexplore.ieee.org/document/9833570/)
## MeshUp: Stateless Cache Side-channel Attack on CPU Mesh.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#meshup-stateless-cache-side-channel-attack-on-cpu-mesh)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#meshup-stateless-cache-side-channel-attack-on-cpu-mesh)
### Authors
* Junpeng Wan, Fudan University
* Yanxiang Bi, Fudan University
* Zhe Zhou, Fudan University
* Zhou Li, University of California, Irvine
### Abstract
> Cache side-channel attacks lead to severe security threats to the settings where a CPU is shared across users, e.g., in the cloud. The majority of attacks rely on sensing the micro-architectural state changes made by victims, but this assumption can be invalidated by combining spatial (e.g., Intel CAT) and temporal isolation. In this work, we advance the state of cache side-channel attacks by showing stateless cache side-channel attacks on server-grade CPUs, that can bypass both spatial and temporal isolation. Unlike stateful cache side-channel attacks that rely on the timing difference between a cache hit or miss, our attack exploits the timing difference caused by the interconnect congestion. Specifically, to complete cache transactions, for Intel server CPUs, which use non-inclusive and mesh interconnect, cache lines would travel across cores via the CPU mesh and UPI interconnects. Nonetheless, the interconnects are shared by all cores, and cache isolation does not segregate the traffic. An attacker can generate traffic to contend with a victim on a link, measure the extra delay, deduce the memory access pattern of the victim’s program, and infer its sensitive data. Based on this idea, we implement MESHUP, a stateless cache side-channel against mesh interconnect, and test it against the existing RSA implementations of JDK for the cross-core attack and application fingerprinting for the the cross-CPU attack. We found the RSA private key used by a victim process can be partially recovered and the co-running application can be inferred at high accuracy.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833794/](https://ieeexplore.ieee.org/document/9833794/)
## Timing-Based Browsing Privacy Vulnerabilities Via Site Isolation.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#timing-based-browsing-privacy-vulnerabilities-via-site-isolation)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#timing-based-browsing-privacy-vulnerabilities-via-site-isolation)
### Authors
* Zihao Jin, Microsoft Research Asia, Beijing, China; Tsinghua University, Beijing, China
* Ziqiao Kong, Microsoft Research Asia, Beijing, China
* Shuo Chen, Microsoft Research Asia, Beijing, China
* Haixin Duan, Tsinghua University, Beijing, China
### Abstract
> Chromium’s site isolation ensures that different sites are rendered by different processes, which is a vision that academic researchers set forth over a decade ago. The journey from academic prototypes to the commercial availability represents a holistic rethinking about the security architecture for modern browsers. In this paper, we emphasize that the timing issues under site isolation need a thorough study. Specifically, we show that site isolation enables a realistic timing attack, which allows the attacker to identify which websites in a given target-sites set are loaded into the browser, as well as the website the user is currently interacting with. Through these vulnerabilities, the user’s site-visit behavior is leaked to the attacker. Our evaluation using Alexa Top 3000 websites gives very high vulnerability percentages – 99%, 99% and 95% for our three key metrics of vulnerabilities. Moreover, the attack is very robust without any special assumption, so will be effective if deployed in the field. The main challenge revealed by our work is the tension between the scarcity of processes and the obligation to isolate cross-site frames in different processes. We are working with the Google Chrome team and Microsoft Edge team to propose and evaluate mitigation options.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833710/](https://ieeexplore.ieee.org/document/9833710/)
## WTAGRAPH: Web Tracking and Advertising Detection using Graph Neural Networks.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#wtagraph-web-tracking-and-advertising-detection-using-graph-neural-networks)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#wtagraph-web-tracking-and-advertising-detection-using-graph-neural-networks)
### Authors
* Zhiju Yang, Colorado School of Mines
* Weiping Pei, Colorado School of Mines
* Monchu Chen, Appen
* Chuan Yue, Colorado School of Mines
### Abstract
> Web tracking and advertising (WTA) nowadays are ubiquitously performed on the web, continuously compromising users’ privacy. Existing defense solutions, such as widely deployed blocking tools based on filter lists and alternative machine learning based solutions proposed in prior research, have limitations in terms of accuracy and effectiveness. In this work, we propose WTAGRAPH, a web tracking and advertising detection framework based on Graph Neural Networks (GNNs). We first construct an attributed homogenous multi-graph (AHMG) that represents HTTP network traffic, and formulate web tracking and advertising detection as a task of GNN-based edge representation learning and classification in AHMG. We then design four components in WTAGRAPH so that it can (1) collect HTTP network traffic, DOM, and JavaScript data, (2) construct AHMG and extract corresponding edge and node features, (3) build a GNN model for edge representation learning and WTA detection in the transductive learning setting, and (4) use a pre-trained GNN model for WTA detection in the inductive learning setting. We evaluate WTAGRAPH on a dataset collected from Alexa Top 10K websites, and show that WTAGRAPH can effectively detect WTA requests in both transductive and inductive learning settings. Manual verification results indicate that WTAGRAPH can detect new WTA requests that are missed by filter lists and recognize non-WTA requests that are mistakenly labeled by filter lists. Our ablation analysis, evasion evaluation, and real-time evaluation show that WTAGRAPH can have a competitive performance with flexible deployment options in practice.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833670/](https://ieeexplore.ieee.org/document/9833670/)
## Surakav: Generating Realistic Traces for a Strong Website Fingerprinting Defense.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#surakav-generating-realistic-traces-for-a-strong-website-fingerprinting-defense)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#surakav-generating-realistic-traces-for-a-strong-website-fingerprinting-defense)
### Authors
* Jiajun Gong, The Hong Kong University of Science and Technology
* Wuqi Zhang, The Hong Kong University of Science and Technology
* Charles Zhang, The Hong Kong University of Science and Technology
* Tao Wang, Simon Fraser University
### Abstract
> Website Fingerprinting (WF) attacks utilize size and timing information of encrypted network traffic to infer the user’s browsing activity, posing a great threat to privacy-enhancing technologies like Tor; nevertheless, Tor has not adopted any defense because existing defenses are not convincing enough to show their effectiveness. Some defenses have been overcome by newer attacks; other defenses are never implemented and tested in the real open-world scenario.In this paper, we propose Surakav, a tunable and practical defense that is effective against WF attacks with reasonable overhead. Surakav makes use of a Generative Adversarial Network (GAN) to generate realistic sending patterns and regulates buffered data according to the sampled patterns. We implement Surakav and evaluate it on the live Tor network. Experiments show that Surakav is able to reduce the attacker’s true positive rate by 57% with 55% data overhead and 16% time overhead, saving 42% data overhead compared to FRONT. In the heavyweight setting, Surakav outperforms the strongest known defense, Tamaraw, requiring 50% less overhead in data and time to lower the attacker’s true positive rate to only 8%. We also show that two existing defenses, Walkie-Talkie and TrafficSliver, can be fortified with our GAN-based trace generator.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833722/](https://ieeexplore.ieee.org/document/9833722/)
## Wobfuscator: Obfuscating JavaScript Malware via Opportunistic Translation to WebAssembly.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#wobfuscator-obfuscating-javascript-malware-via-opportunistic-translation-to-webassembly)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#wobfuscator-obfuscating-javascript-malware-via-opportunistic-translation-to-webassembly)
### Authors
* Alan Romano, University at Buffalo, SUNY Buffalo, United States
* Daniel Lehmann, University of Stuttgart, Stuttgart, Germany
* Michael Pradel, University of Stuttgart, Stuttgart, Germany
* Weihang Wang, University at Buffalo, SUNY Buffalo, United States
### Abstract
> To protect web users from malicious JavaScript code, various malware detectors have been proposed, which analyze and classify code as malicious or benign. State-of-the-art detectors focus on JavaScript as the only target language. However, WebAssembly provides attackers a new and so far unexplored opportunity for evading malware detectors. This paper presents Wobfuscator, the first technique for evading static JavaScript malware detection by moving parts of the computation into WebAssembly. The core of the technique is a set of code transformations that translate carefully selected parts of behavior implemented in JavaScript into WebAssembly. The approach is opportunistic in the sense that it uses WebAssembly where it helps to evade malware detection without compromising the correctness of the code. Evaluating our approach with a dataset of 43,499 malicious and 149,677 benign JavaScript files, as well as six popular JavaScript libraries reveals that our approach is effective at evading state-of-the-art, learning-based static malware detectors; the obfuscation is semantic-preserving; and our approach has small overhead, making it practical for use in real-world programs. By pinpointing limitations of current malware detectors, our work motivates future efforts on detecting multi-language malware in the web.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833626/](https://ieeexplore.ieee.org/document/9833626/)
## The State of the SameSite: Studying the Usage, Effectiveness, and Adequacy of SameSite Cookies.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#the-state-of-the-samesite-studying-the-usage-effectiveness-and-adequacy-of-samesite-cookies)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#the-state-of-the-samesite-studying-the-usage-effectiveness-and-adequacy-of-samesite-cookies)
### Authors
* Soheil Khodayari, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Giancarlo Pellegrino, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### Abstract
> Chromium-based browsers now restrict cookies’ scope to a same-site context by changing the default policy for cookies, thus requiring developers to adapt their websites. The extent of the adoption and effectiveness of the SameSite policy has not been studied yet, and, in this paper, we undertake one of the first evaluations of the state of the SameSite cookie policy. We conducted a set of large-scale, longitudinal, both automated and manual measurements of the Alexa top 1K, 10K, 100K, and 500K sites across the main rollout dates of the SameSite policies, covering both SameSite usage and cross-site functionality breakage caused by the new default policy. Also, we performed an extensive evaluation of threats against the new Lax-by-default policy’s effectiveness, looking at the adequacy of the coverage provided by the Lax policy and bypass caused by website developers’ mistakes.Our study shows that the growth of sites using a SameSite policy has slowed down considerably after the enforcement dates. Then, the new Lax-by-default policy has affected about 19% of the functionalities implemented via cross-site requests without an explicit SameSite policy, most of which are for online ads. Third, our study observes a significant mismatch between the request contexts covered by Lax and the ones actually used by websites in the wild, making it possible to perform XS attacks also against popular websites such as Tumblr, Twitch, SoundCloud, Mailchimp, and Pixiv. Even when using Lax or Strict policies, much of their effectiveness depends on developers’ awareness of SameSite policies’ implications, who could introduce vulnerabilities or inconsistent policies, leading to SameSite policy bypasses. For example, we identified bypass in IMDB, Paypal, and Meetup. Also, we discovered a widespread SSO IdP abuse that attackers could use to attack target websites even when using stricter SameSite policies. Finally, in this paper, we also look at SameSite implementations in popular browsers and the default configuration in web frameworks.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833637/](https://ieeexplore.ieee.org/document/9833637/)
## IRQDebloat: Reducing Driver Attack Surface in Embedded Devices.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#irqdebloat-reducing-driver-attack-surface-in-embedded-devices)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#irqdebloat-reducing-driver-attack-surface-in-embedded-devices)
### Authors
* Zhenghao Hu, New York University
* Brendan Dolan-Gavitt, New York University
### Abstract
> Embedded and IoT devices often come with a wide range of hardware functionality, but any particular end user may only use some small subset of these features. However, even unused hardware features are accompanied by potentially buggy driver code, which increases the attack surface of the device. In this paper, we introduce IRQDebloat, a system for disabling unwanted hardware features through automated firmware rewriting. Building on the insight that external inputs to the system are typically delivered through interrupt requests (IRQs), IRQDebloat systematically explores the interrupt handling code in the target firmware, identifies the handler function for each peripheral, and finally rewrites target firmware to disable the handlers that correspond to undesired hardware features. In our experiments we demonstrate IRQDebloat’s effectiveness and generality by identifying IRQ handlers across four different operating systems (Linux, FreeBSD, VxWorks, and RiscOS) and seven different embedded platforms, and disabling selected peripherals on real-world hardware (a Raspberry Pi and a Valve Steam Link). On the Steam Link, we survey the attack surface and find that disabling selected peripherals could block up to 44 CVEs found in the Linux kernel over the past five years.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833695/](https://ieeexplore.ieee.org/document/9833695/)
## Finding SMM Privilege-Escalation Vulnerabilities in UEFI Firmware with Protocol-Centric Static Analysis.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#finding-smm-privilege-escalation-vulnerabilities-in-uefi-firmware-with-protocol-centric-static-analysis)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#finding-smm-privilege-escalation-vulnerabilities-in-uefi-firmware-with-protocol-centric-static-analysis)
### Authors
* Jiawei Yin, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China and School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China; Key Laboratory of Network Assessment Technology, Chinese Academy of Sciences; Beijing Key Laboratory of Network Security and Protection Technology
* Menghao Li, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China and School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China; Key Laboratory of Network Assessment Technology, Chinese Academy of Sciences; Beijing Key Laboratory of Network Security and Protection Technology
* Wei Wu, Huawei Technologies
* Dandan Sun, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China and School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China; Key Laboratory of Network Assessment Technology, Chinese Academy of Sciences; Beijing Key Laboratory of Network Security and Protection Technology
* Jianhua Zhou, UNSW Sydney; Key Laboratory of Network Assessment Technology, Chinese Academy of Sciences; Beijing Key Laboratory of Network Security and Protection Technology
* Wei Huo, UNSW Sydney; Key Laboratory of Network Assessment Technology, Chinese Academy of Sciences; Beijing Key Laboratory of Network Security and Protection Technology
* Jingling Xue, UNSW Sydney
### Abstract
> The Unified Extensible Firmware Interface (UEFI) provides a specification of the software interface between an OS and its underlying platform firmware. The runtime services provided are seemingly secure as they reside in System Management Mode (SMM) at ring -2, assuming a higher privilege than the OS kernel at ring 0. However, their software vulnerabilities are known to be exploitable to launch ring 0 to ring -2 privilege escalation, i.e., SMM privilege escalation attacks.In this paper, we introduce an effective static analysis framework for detecting SMM privilege escalation vulnerabilities in UEFI firmware. We present a systematic study of such vulnerabilities and identify their root causes as being two types of references that can escape from the SMRAM, legacy references and unintentional references. Existing static analyses are ineffective in detecting such vulnerabilities in stripped COTS UEFI firmware images, which are developed based on a customized callback mechanism that organizes callable functions into protocols identified by GUIDs. By leveraging such a callback-based programming paradigm, we introduce SPENDER, the first static detection framework, which is founded on a novel protocol-centric analysis, for uncovering the potential SMM privilege escalation vulnerabilities in UEFI firmware efficiently and precisely. For a total of 1148 UEFI binaries collected from eight vendors, SPENDER has successfully found 36 SMM privilege escalation vulnerabilities (two 1-day and 34 0-day vulnerabilities), which can cause arbitrary code execution and arbitrary address write (and can thus enable, e.g., the attackers to install a bootkit into a flash drive). We have reported these 36 vulnerabilities to the vendors, with the two 1-day vulnerabilities confirmed as known previously but the 34 0-day vulnerabilities confirmed as new.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833723/](https://ieeexplore.ieee.org/document/9833723/)
## Mind the Gap: Studying the Insecurity of Provably Secure Embedded Trusted Execution Architectures.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#mind-the-gap-studying-the-insecurity-of-provably-secure-embedded-trusted-execution-architectures)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#mind-the-gap-studying-the-insecurity-of-provably-secure-embedded-trusted-execution-architectures)
### Authors
* Marton Bognar, imec-DistriNet, KU Leuven, Leuven, Belgium
* Jo Van Bulck, imec-DistriNet, KU Leuven, Leuven, Belgium
* Frank Piessens, imec-DistriNet, KU Leuven, Leuven, Belgium
### Abstract
> The security claims of a system can be supported or refuted by different kinds of evidence. On the one hand, attack research uses empirical, experimental, inductive methods to refute security claims. If motivated and competent attackers do not succeed in breaking a specific security property, this provides some support (but no definite proof) that the system is secure.On the other hand, formal methods use mathematical, deductive methods that can prove the security of a model of the system. The process of constructing a proof can uncover vulnerabilities that can then be fixed. The use of formal methods can be very powerful and is attractive because it seems to provide irrefutable evidence of security. However, that evidence applies only to the mathematical model, not to any actual system, and, hence, it is important to understand the gap between the model and the real-world system.In this paper, we present a case study that examines this gap for two embedded security architectures that use formal methods to prove their security properties. Despite strong formal evidence for security, we discover numerous attacks against the implementations, all of which falsify proven security properties. These attacks range from exploiting simple programming errors to a novel DMA-based side-channel attack. The simple attacks demonstrate that the construction of systems and proofs is error-prone, while some of the more sophisticated attacks serve as examples to show that formal methods alone can never guarantee the security of a real-world system.From our case study, we also distill actionable guidelines on how to provide stronger evidence for the security of a system.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833735/](https://ieeexplore.ieee.org/document/9833735/)
## How Not to Protect Your IP - An Industry-Wide Break of IEEE 1735 Implementations.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#how-not-to-protect-your-ip-an-industry-wide-break-of-ieee-1735-implementations)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#how-not-to-protect-your-ip-an-industry-wide-break-of-ieee-1735-implementations)
### Authors
* Julian Speith, Max Planck Institute for Security and Privacy, Bochum, Germany; Horst Görtz Institute for IT Security, Ruhr University Bochum, Bochum, Germany
* Florian Schweins, Horst Görtz Institute for IT Security, Ruhr University Bochum, Bochum, Germany
* Maik Ender, Max Planck Institute for Security and Privacy, Bochum, Germany; Horst Görtz Institute for IT Security, Ruhr University Bochum, Bochum, Germany
* Marc Fyrbiak, Max Planck Institute for Security and Privacy, Bochum, Germany
* Alexander May, Horst Görtz Institute for IT Security, Ruhr University Bochum, Bochum, Germany
* Christof Paar, Max Planck Institute for Security and Privacy, Bochum, Germany; Horst Görtz Institute for IT Security, Ruhr University Bochum, Bochum, Germany
### Abstract
> Modern hardware systems are composed of a variety of third-party Intellectual Property (IP) cores to implement their overall functionality. Since hardware design is a globalized process involving various (untrusted) stakeholders, a secure management of the valuable IP between authors and users is inevitable to protect them from unauthorized access and modification. To this end, the widely adopted IEEE standard 1735-2014 was created to ensure confidentiality and integrity. In this paper, we outline structural weaknesses in IEEE 1735 that cannot be fixed with cryptographic solutions (given the contemporary hardware design process) and thus render the standard inherently insecure. We practically demonstrate the weaknesses by recovering the private keys of IEEE 1735 implementations from major Electronic Design Automation (EDA) tool vendors, namely Intel, Xilinx, Cadence, Siemens, Microsemi, and Lattice, while results on a seventh case study are withheld. As a consequence, we can decrypt, modify, and re-encrypt all allegedly protected IP cores designed for the respective tools, thus leading to an industry-wide break. As part of this analysis, we are the first to publicly disclose three RSA-based white-box schemes that are used in real-world products and present cryptanalytical attacks for all of them, finally resulting in key recovery.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833605/](https://ieeexplore.ieee.org/document/9833605/)
## Hardening Circuit-Design IP Against Reverse-Engineering Attacks.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#hardening-circuit-design-ip-against-reverse-engineering-attacks)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#hardening-circuit-design-ip-against-reverse-engineering-attacks)
### Authors
* Animesh Chhotaray, University of Florida
* Thomas Shrimpton, University of Florida
### Abstract
> Design-hiding techniques are a central piece of academic and industrial efforts to protect electronic circuits from being reverse-engineered. However, these techniques have lacked a principled foundation to guide their design and security evaluation, leading to a long line of broken schemes. In this paper, we begin to lay this missing foundation. We establish formal syntax for design-hiding (DH) schemes, a cryptographic primitive that encompasses all known design-stage methods to hide the circuit that is handed to a (potentially adversarial) foundry for fabrication. We give two security notions for this primitive: function recovery (FR) and key recovery (KR). The former is the ostensible goal of design-hiding methods to prevent reverse-engineering the functionality of the circuit, but most prior work has focused on the latter. We then present the first provably (FR,KR)-secure DH scheme, ${OneChaff}_{hd}$. A side-benefit of our security proof is a framework for analyzing a broad class of new DH schemes. We finish by unpacking our main security result, to provide parameter-setting guidance.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833634/](https://ieeexplore.ieee.org/document/9833634/)
## Evaluating Physical-Layer BLE Location Tracking Attacks on Mobile Devices.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#evaluating-physical-layer-ble-location-tracking-attacks-on-mobile-devices)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#evaluating-physical-layer-ble-location-tracking-attacks-on-mobile-devices)
### Authors
* Hadi Givehchian, UC San Diego
* Nishant Bhaskar, UC San Diego
* Eliana Rodriguez Herrera, UC San Diego
* Héctor Rodrigo López Soto, UC San Diego
* Christian Dameff, UC San Diego
* Dinesh Bharadia, UC San Diego
* Aaron Schulman, UC San Diego
### Abstract
> Mobile devices increasingly function as wireless tracking beacons. Using the Bluetooth Low Energy (BLE) protocol, mobile devices such as smartphones and smartwatches continuously transmit beacons to inform passive listeners about device locations for applications such as digital contact tracing for COVID-19, and even finding lost devices. These applications use cryptographic anonymity that limit an adversary’s ability to use these beacons to stalk a user. However, attackers can bypass these defenses by fingerprinting the unique physical-layer imperfections in the transmissions of specific devices.We empirically demonstrate that there are several key challenges that can limit an attacker’s ability to find a stable physical layer identifier to uniquely identify mobile devices using BLE, including variations in the hardware design of BLE chipsets, transmission power levels, differences in thermal conditions, and limitations of inexpensive radios that can be widely deployed to capture raw physical-layer signals. We evaluated how much each of these factors limits accurate fingerprinting in a large-scale field study of hundreds of uncontrolled BLE devices, revealing that physical-layer identification is a viable, although sometimes unreliable, way for an attacker to track mobile devices.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833758/](https://ieeexplore.ieee.org/document/9833758/)
## IRShield: A Countermeasure Against Adversarial Physical-Layer Wireless Sensing.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#irshield-a-countermeasure-against-adversarial-physical-layer-wireless-sensing)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#irshield-a-countermeasure-against-adversarial-physical-layer-wireless-sensing)
### Authors
* Paul Staat, Max Planck Institute for Security and Privacy, Bochum, Germany
* Simon Mulzer, Ruhr University Bochum, Bochum, Germany
* Stefan Roth, Ruhr University Bochum, Bochum, Germany
* Veelasha Moonsamy, Ruhr University Bochum, Bochum, Germany
* Markus Heinrichs, TH Köln – University of Applied Sciences, Cologne, Germany
* Rainer Kronberger, TH Köln – University of Applied Sciences, Cologne, Germany
* Aydin Sezgin, Ruhr University Bochum, Bochum, Germany
* Christof Paar, Max Planck Institute for Security and Privacy, Bochum, Germany
### Abstract
> Wireless radio channels are known to contain information about the surrounding propagation environment, which can be extracted using established wireless sensing methods. Thus, today’s ubiquitous wireless devices are attractive targets for passive eavesdroppers to launch reconnaissance attacks. In particular, by overhearing standard communication signals, eavesdroppers obtain estimations of wireless channels which can give away sensitive information about indoor environments. For instance, by applying simple statistical methods, adversaries can infer human motion from wireless channel observations, allowing to remotely monitor premises of victims. In this work, building on the advent of intelligent reflecting surfaces (IRSs), we propose IRShield as a novel countermeasure against adversarial wireless sensing. IRShield is designed as a plug-and-play privacy-preserving extension to existing wireless networks. At the core of IRShield, we design an IRS configuration algorithm to obfuscate wireless channels. We validate the effectiveness with extensive experimental evaluations. In a state-of-the-art human motion detection attack using off-the-shelf Wi-Fi devices, IRShield lowered detection rates to 5% or less.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833676/](https://ieeexplore.ieee.org/document/9833676/)
## Anti-Tamper Radio: System-Level Tamper Detection for Computing Systems.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#anti-tamper-radio-system-level-tamper-detection-for-computing-systems)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#anti-tamper-radio-system-level-tamper-detection-for-computing-systems)
### Authors
* Paul Staat, Max Planck Institute for Security and Privacy, Bochum, Germany
* Johannes Tobisch, Max Planck Institute for Security and Privacy, Bochum, Germany
* Christian Zenger, PHYSEC GmbH, Bochum, Germany
* Christof Paar, Max Planck Institute for Security and Privacy, Bochum, Germany
### Abstract
> A whole range of attacks becomes possible when adversaries gain physical access to computing systems that process or contain sensitive data. Examples include side-channel analysis, bus probing, device cloning, or implanting hardware Trojans. Defending against these kinds of attacks is considered a challenging endeavor, requiring anti-tamper solutions to monitor the physical environment of the system. Current solutions range from simple switches, which detect if a case is opened, to meshes of conducting material that provide more fine-grained detection of integrity violations. However, these solutions suffer from an intricate trade-off between physical security on the one side and reliability, cost, and difficulty to manufacture on the other.In this work, we demonstrate that radio wave propagation in an enclosed system of complex geometry is sensitive against adversarial physical manipulation. We present an anti-tamper radio (ATR) solution as a method for tamper detection, which combines high detection sensitivity and reliability with ease-of-use. ATR constantly monitors the wireless signal propagation behavior within the boundaries of a metal case. Tamper attempts such as insertion of foreign objects, will alter the observed radio signal response, subsequently raising an alarm.The ATR principle is applicable in many computing systems that require physical security such as servers, ATMs, and smart meters. As a case study, we use 19” servers and thoroughly investigate capabilities and limits of the ATR. Using a custom-built automated probing station, we simulate probing attacks by inserting needles with high precision into protected environments. Our experimental results show that our ATR implementation can detect 16mm insertions of needles of diameter as low as 0.1mm under ideal conditions. In the more realistic environment of a running 19” server, we demonstrate reliable detection of 40mm insertions of needles of diameter 1mm for a period of 10 days.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833631/](https://ieeexplore.ieee.org/document/9833631/)
## Practical EMV Relay Protection.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#practical-emv-relay-protection)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#practical-emv-relay-protection)
### Authors
* Andreea-Ina Radu, University of Birmingham, UK
* Tom Chothia, University of Birmingham, UK
* Christopher J.P. Newton, University of Surrey, UK
* Ioana Boureanu, University of Surrey, UK
* Liqun Chen, University of Surrey, UK
### Abstract
> Relay attackers can forward messages between a contactless EMV bank card and a shop reader, making it possible to wirelessly pickpocket money. To protect against this, Apple Pay requires a user’s fingerprint or Face ID to authorise payments, while Mastercard and Visa have proposed protocols to stop such relay attacks. We investigate transport payment modes and find that we can build on relaying to bypass the Apple Pay lock screen, and illicitly pay from a locked iPhone to any EMV reader, for any amount, without user authorisation. We show that Visa’s proposed relay-countermeasure can be bypassed using rooted smart phones. We analyse Mastercard’s relay protection, and show that its timing bounds could be more reliably imposed at the ISO 14443 protocol level, rather than at the EMV protocol level. With these insights, we propose a new relay-resistance protocol (L1RP) for EMV. We use the Tamarin prover to model mobile-phone payments with and without user authentication, and in different payment modes. We formally verify solutions to our attack suggested by Apple and Visa, and used by Samsung, and we verify that our proposed protocol provides protection from relay attacks.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833642/](https://ieeexplore.ieee.org/document/9833642/)
## AccEar: Accelerometer Acoustic Eavesdropping with Unconstrained Vocabulary.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#accear-accelerometer-acoustic-eavesdropping-with-unconstrained-vocabulary)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#accear-accelerometer-acoustic-eavesdropping-with-unconstrained-vocabulary)
### Authors
* Pengfei Hu, Shandong University, China
* Hui Zhuang, Shandong University, China
* Panneer Selvam Santhalingam, George Mason University, USA
* Riccardo Spolaor, Shandong University, China
* Parth Pathak, George Mason University, USA
* Guoming Zhang, Shandong University, China
* Xiuzhen Cheng, Shandong University, China
### Abstract
> With the increasing popularity of voice-based applications, acoustic eavesdropping has become a serious threat to users’ privacy. While on smartphones the access to microphones needs an explicit user permission, acoustic eavesdropping attacks can rely on motion sensors (such as accelerometer and gyroscope), which access is unrestricted. However, previous instances of such attacks can only recognize a limited set of pre-trained words or phrases. In this paper, we present AccEar, an accelerometer-based acoustic eavesdropping attack that can reconstruct any audio played on the smartphone’s loudspeaker with unconstrained vocabulary. We show that an attacker can employ a conditional Generative Adversarial Network (cGAN) to reconstruct high-fidelity audio from low-frequency accelerometer signals. The presented cGAN model learns to recreate high-frequency components of the user’s voice from low-frequency accelerometer signals through spectrogram enhancement. We assess the feasibility and effectiveness of AccEar attack in a thorough set of experiments using audio from 16 public personalities. As shown by the results in both objective and subjective evaluations, AccEar successfully reconstructs user speeches from accelerometer signals in different scenarios including varying sampling rate, audio volume, device model, etc.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833716/](https://ieeexplore.ieee.org/document/9833716/)
## Towards Automated Auditing for Account and Session Management Flaws in Single Sign-On Deployments.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#towards-automated-auditing-for-account-and-session-management-flaws-in-single-sign-on-deployments)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#towards-automated-auditing-for-account-and-session-management-flaws-in-single-sign-on-deployments)
### Authors
* Mohammad Ghasemisharif, University of Illinois at Chicago
* Chris Kanich, University of Illinois at Chicago
* Jason Polakis, University of Illinois at Chicago
### Abstract
> Single Sign-On (SSO) is both a core and critical component of user authentication and authorization on the modern web, as it is often offered by web and mobile applications alongside credential-based authentication to facilitate the account creation and login process. However, the interplay between local account management and SSO functionality in the backend leads to flaws that enable or magnify account hijacking attacks. These flaws are not baked into the actual SSO protocols, but manifest due to the complexity of supporting separate but intermingling authentication paths. As a result, these types of flaws cannot be detected by the SSO protocol or implementation verification tools proposed in prior work. In this paper we introduce SAAT, a fully automated modular framework that assesses whether relying parties (RPs) that use Facebook as the IdP comply with secure practices and guidelines, and uncovers flaws in account and session management that stem from or are affected by the interplay of SSO and local functionality. We conduct a large-scale exploration of authentication and session practices in Facebook’s RPs, revealing a volatile ecosystem where SSO support can be suddenly dropped and 17.6% of the tested RPs exhibit non-functional SSO implementations. This highlights the need for the continuous and systematic testing of the SSO ecosystem made possible by SAAT. More critically, we find that security measures are often missing and official guidelines are routinely overlooked or misconfigured, with only 0.8% of the RPs fully enabling re-authentication which can prevent compromise from hijacked identity provider (IdP) cookies. Our study also shows that less than 2% of RPs correctly react to SSO revocation and 67% continue to allow account access even 10 days after revocation. Overall, we envision our framework as a tool for enabling and guiding widespread remediation efforts by major SSO identity providers, which were previously infeasible due to the sheer scale and inherent mutability of this ecosystem.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833753/](https://ieeexplore.ieee.org/document/9833753/)
## HARDLOG: Practical Tamper-Proof System Auditing Using a Novel Audit Device.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#hardlog-practical-tamper-proof-system-auditing-using-a-novel-audit-device)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#hardlog-practical-tamper-proof-system-auditing-using-a-novel-audit-device)
### Authors
* Adil Ahmad, Purdue University
* Sangho Lee, Microsoft Research
* Marcus Peinado, Microsoft Research
### Abstract
> Audit systems maintain detailed logs of security-related events on enterprise machines to forensically analyze potential incidents. In principle, these logs should be safely stored in a secure location (e.g., network storage) as soon as they are produced, but this incurs prohibitive slowdown to a monitored machine. Hence, existing audit systems protect batched logs asynchronously (e.g., after tens of seconds), but this allows attackers to tamper with unprotected logs.This paper presents HARDLOG, a practical and effective system that employs a novel audit device to provide fine-grained log protection with minimal performance slowdown. HARDLOG implements criticality-aware log protection: it ensures that logs are synchronously protected in the audit device before an infrequent security-critical event is allowed to execute, but logs are asynchronously protected on frequent non-critical events to minimize performance overhead. Importantly, even on non-critical events, HARDLOG ensures bounded-asynchronous protection: it sends log entries to the audit device within a tiny, bounded delay from their creation using well-known real-time techniques. To demonstrate HARDLOG’S effectiveness, we prototyped an audit device using commodity components and implemented a reference audit system for Linux. Our prototype achieves a bounded protection delay of 15 milliseconds at non-critical events alongside undelayed protection at critical events. We also show that, for diverse real-world programs, HARDLOG incurs a geometric mean performance slowdown of only 6.3%, hence it is suitable for many real-world deployment scenarios.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833745/](https://ieeexplore.ieee.org/document/9833745/)
## SWARMFLAWFINDER: Discovering and Exploiting Logic Flaws of Swarm Algorithms.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#swarmflawfinder-discovering-and-exploiting-logic-flaws-of-swarm-algorithms)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#swarmflawfinder-discovering-and-exploiting-logic-flaws-of-swarm-algorithms)
### Authors
* Chijung Jung, Department of Computer Science, University of Virginia, Charlottesville, VA, USA
* Ali Ahad, Department of Computer Science, University of Virginia, Charlottesville, VA, USA
* Yuseok Jeon, Department of Computer Science and Engineering, UNIST, Ulsan, South Korea
* Yonghwi Kwon, Department of Computer Science, University of Virginia, Charlottesville, VA, USA
### Abstract
> Inspired by swarms in nature, swarm robotics have been developed to conduct various challenging tasks such as environmental monitoring, disaster recovery, logistics, and even military operations. Despite the significant potential impact of the swarm on society, relatively little attention is given to adversarial scenarios against swarm robotics. In this paper, we explore a systematic approach to find logical flaws of the swarm robotics algorithms that adversaries can exploit. Specifically, we develop an automated testing system, SWARMFLAWFINDER, for swarm algorithms. We identify and overcome various challenges in understanding and reasoning about the swarm algorithm execution. In particular, we propose a novel abstraction of robotics behavior, which we call the degree of causal contribution (DCC), based on the idea of counterfactual causality. Then, we build a feedback guided greybox fuzz testing system called SWARMFLAWFINDER, leveraging DCC as a feedback metric. We evaluate SWARMFLAWFINDER with four swarm algorithms conducting navigating, searching, and rescuing missions. SWARMFLAWFINDER discovers 42 logic flaws (and all of them have been acknowledged by the developers) in the swarm algorithms. Our analysis of the flaws reveals that the swarm algorithms have critical logic errors/bugs or suffer from incomplete implementations that can be exploited by adversaries.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833685/](https://ieeexplore.ieee.org/document/9833685/)
## PGPatch: Policy-Guided Logic Bug Patching for Robotic Vehicles.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#pgpatch-policy-guided-logic-bug-patching-for-robotic-vehicles)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#pgpatch-policy-guided-logic-bug-patching-for-robotic-vehicles)
### Authors
* Hyungsub Kim, Purdue University
* Muslum Ozgur Ozmen, Purdue University
* Z. Berkay Celik, Purdue University
* Antonio Bianchi, Purdue University
* Dongyan Xu, Purdue University
### Abstract
> Automated program repair (APR) methods aim to identify patches for a given bug and apply them with minimal human intervention. To date, existing APR approaches focus on repairing software bugs, such as memory safety bugs. However, our analysis of popular robotic vehicle (RV) control software shows that most of their bugs are not memory bugs but rather logic bugs. These bugs, while not causing software crashes, can cause an RV to reach an undesired physical state (e.g., hitting the ground). To fix these logic bugs, we introduce PGPatch, a policy-guided program repair framework for RV control programs, which identifies the correct patch for a given logic bug and applies it without human intervention. PGPatch takes, as input, existing or new logic formulas used to discover logic bugs. It then leverages the formulas using a dedicated dynamic analysis to classify the previously known logic bugs into a patch type. It next uses a customized algorithm, based on the identified patch type and violated formula, to produce a source code patch as output. Lastly, it creates repeatable tests to verify the patch’s completeness, ensuring that the patch is correct and does not degrade the RV’s performance. We evaluate PGPatch on selected bug cases from three popular RV control software and find that it correctly fixes 258 out of 297 logic bugs (86.9%). We additionally recruit 18 experienced RV developers and users and conduct a user study that demonstrates how using PGPatch makes fixing bugs in RV software significantly quicker and less error-prone.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833567/](https://ieeexplore.ieee.org/document/9833567/)
## "Flawed, but like democracy we don't have a better system": The Experts' Insights on the Peer Review Process of Evaluating Security Papers.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#flawed-but-like-democracy-we-dont-have-a-better-system-the-experts-insights-on-the-peer-review-process-of-evaluating-security-papers)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#flawed-but-like-democracy-we-dont-have-a-better-system-the-experts-insights-on-the-peer-review-process-of-evaluating-security-papers)
### Authors
* Ananta Soneji, Arizona State University, Corpus Christi
* Faris Bugra Kokulu, Arizona State University, Corpus Christi
* Carlos Rubio-Medrano, Texas A&M University, Corpus Christi
* Tiffany Bao, Arizona State University, Corpus Christi
* Ruoyu Wang, Arizona State University, Corpus Christi
* Yan Shoshitaishvili, Arizona State University, Corpus Christi
* Adam Doupé, Arizona State University, Corpus Christi
### Abstract
> The academic computer security community has traditionally adopted peer review as an integral part of scientific publishing and dissemination, in a process that grows organically and nourishes itself by internal communications and intuitions, rather than repeatable experiments and investigations. Recently, key community members have shared a series of concerns regarding this process in public. To support or disprove some of these concerns, this paper presents the first qualitative study to examine the peer review process in the computer security field. Through semi-structured interviews (n=21) with Program Committee members, we systematically collect the reviewers’ insights on how papers are evaluated in top-tier security conferences and investigate their concerns regarding the current security peer review system. Based on the collected data, we identify several issues in the security review system: whereas some have been previously observed by the community (e.g., the randomness in reviewers’ decisions), others (e.g., reviewers have much more diverse and concrete opinions on the metrics of rejecting papers) have been observed for the first time in our study. Finally, through a series of recommendations, we aim to encourage the collaborative establishment of community norms that will significantly improve the security peer review process.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833581/](https://ieeexplore.ieee.org/document/9833581/)
## SoK: Social Cybersecurity.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#sok-social-cybersecurity)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#sok-social-cybersecurity)
### Authors
* Yuxi Wu, Georgia Institute of Technology
* W. Keith Edwards, Georgia Institute of Technology
* Sauvik Das, Georgia Institute of Technology
### Abstract
> We analyze prior work in social cybersecurity and present a structuring of this literature based on its pertinence to four S&P-relevant social behaviors: (1) negotiating access to shared resources, (2) shared and social authentication, (3) managing self-presentation, and (4) influencing others’ S&P behaviors. We further break down these domains into four scales of social distance—intimate, personal, social, and public— showing that desired access control policies, authentication methods, and privacy and sharing preferences vary across these social scales. We evaluate the current landscape of work through the lens of Ackerman’s social-technical gap in social computing systems, finding that while social behaviors clearly impact S&P preferences and needs, existing S&P systems are designed with little understanding of these behaviors. This mismatch forces users to choose between implementing their ideal S&P policies or reducing social friction. To address this mismatch, we outline a research agenda for social cybersecurity work that better aligns S&P goals with social needs, preferences and behaviors.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833757/](https://ieeexplore.ieee.org/document/9833757/)
## Committed to Trust: A Qualitative Study on Security & Trust in Open Source Software Projects.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#committed-to-trust-a-qualitative-study-on-security-trust-in-open-source-software-projects)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#committed-to-trust-a-qualitative-study-on-security-trust-in-open-source-software-projects)
### Authors
* Dominik Wermke, CISPA Helmholtz Center for Information Security, Germany
* Noah Wöhler, CISPA Helmholtz Center for Information Security, Germany
* Jan H. Klemmer, Leibniz University Hannover, Germany
* Marcel Fourné, Max Planck Institute for Security and Privacy, Germany
* Yasemin Acar, George Washington University, United States
* Sascha Fahl, CISPA Helmholtz Center for Information Security, Germany
### Abstract
> Open Source Software plays an important role in many software ecosystems. Whether in operating systems, network stacks, or as low-level system drivers, software we encounter daily is permeated with code contributions from open source projects. Decentralized development and open collaboration in open source projects introduce unique challenges: code submissions from unknown entities, limited personpower for commit or dependency reviews, and bringing new contributors up-to-date in projects’ best practices & processes.In 27 in-depth, semi-structured interviews with owners, maintainers, and contributors from a diverse set of open source projects, we investigate their security and trust practices. For this, we explore projects’ behind-the-scene processes, provided guidance & policies, as well as incident handling & encountered challenges. We find that our participants’ projects are highly diverse both in deployed security measures and trust processes, as well as their underlying motivations. Based on our findings, we discuss implications for the open source software ecosystem and how the research community can better support open source projects in trust and security considerations. Overall, we argue for supporting open source projects in ways that consider their individual strengths and limitations, especially in the case of smaller projects with low contributor numbers and limited access to resources.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833686/](https://ieeexplore.ieee.org/document/9833686/)
## Membership Inference Attacks From First Principles.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#membership-inference-attacks-from-first-principles)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#membership-inference-attacks-from-first-principles)
### Authors
* Nicholas Carlini, Google Research
* Steve Chien, Google Research
* Milad Nasr, Google Research; University of Massachusetts, Amherst
* Shuang Song, Google Research
* Andreas Terzis, Google Research
* Florian Tramèr, Google Research
### Abstract
> A membership inference attack allows an adversary to query a trained machine learning model to predict whether or not a particular example was contained in the model’s training dataset. These attacks are currently evaluated using average-case “accuracy” metrics that fail to characterize whether the attack can confidently identify any members of the training set. We argue that attacks should instead be evaluated by computing their true-positive rate at low (e.g., ≤ 0.1%) false-positive rates, and find most prior attacks perform poorly when evaluated in this way. To address this we develop a Likelihood Ratio Attack (LiRA) that carefully combines multiple ideas from the literature. Our attack is $10\times$ more powerful at low false-positive rates, and also strictly dominates prior attacks on existing metrics.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833649/](https://ieeexplore.ieee.org/document/9833649/)
## DeepCoFFEA: Improved Flow Correlation Attacks on Tor via Metric Learning and Amplification.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#deepcoffea-improved-flow-correlation-attacks-on-tor-via-metric-learning-and-amplification)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#deepcoffea-improved-flow-correlation-attacks-on-tor-via-metric-learning-and-amplification)
### Authors
* Se Eun Oh, Ewha Womans University
* Taiji Yang, University of Minnesota
* Nate Mathews, Rochester Institute of Technology
* James K Holland, University of Minnesota
* Mohammad Saidur Rahman, Rochester Institute of Technology
* Nicholas Hopper, University of Minnesota
* Matthew Wright, Rochester Institute of Technology
### Abstract
> End-to-end flow correlation attacks are among the oldest known attacks on low-latency anonymity networks, and are treated as a core primitive for traffic analysis of Tor. However, despite recent work showing that individual flows can be correlated with high accuracy, the impact of even these state-of-the-art attacks is questionable due to a central drawback: their pairwise nature, requiring comparison between N <sup>2</sup>  pairs of flows to deanonymize N users. This results in a combinatorial explosion in computational requirements and an asymptotically declining base rate, leading to either high numbers of false positives or vanishingly small rates of successful correlation. In this paper, we introduce a novel flow correlation attack, DeepCoFFEA, that combines two ideas to overcome these drawbacks. First, DeepCoFFEA uses deep learning to train a pair of feature embedding networks that respectively map Tor and exit flows into a single low-dimensional space where correlated flows are similar; pairs of embedded flows can be compared at lower cost than pairs of full traces. Second, DeepCoFFEA uses amplification, dividing flows into short windows and using voting across these windows to significantly reduce false positives; the same embedding networks can be used with an increasing number of windows to independently lower the false positive rate. We conduct a comprehensive experimental analysis showing that DeepCoFFEA significantly outperforms state-of-the-art flow correlation attacks on Tor, e.g. 93% true positive rate versus at most 13% when tuned for high precision, with two orders of magnitude speedup over prior work. We also consider the effects of several potential countermeasures on DeepCoFFEA, finding that existing lightweight defenses are not sufficient to secure anonymity networks from this threat.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833801/](https://ieeexplore.ieee.org/document/9833801/)
## ShorTor: Improving Tor Network Latency via Multi-hop Overlay Routing.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#shortor-improving-tor-network-latency-via-multi-hop-overlay-routing)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#shortor-improving-tor-network-latency-via-multi-hop-overlay-routing)
### Authors
* Kyle Hogan, MIT CSAIL
* Sacha Servan-Schreiber, MIT CSAIL
* Zachary Newman, MIT CSAIL
* Ben Weintraub, Northeastern University
* Cristina Nita-Rotaru, Northeastern University
* Srinivas Devadas, MIT CSAIL
### Abstract
> We present ShorTor, a protocol for reducing latency on the Tor network. ShorTor uses multi-hop overlay routing, a technique typically employed by content delivery networks, to influence the route Tor traffic takes across the internet. In this way, ShorTor avoids slow paths and improves the experience for end users by reducing the latency of their connections while imposing minimal bandwidth overhead. ShorTor functions as an overlay on top of onion routing—Tor’s existing routing protocol—and is run by Tor relays, making it independent of the path selection performed by Tor clients. As such, ShorTor reduces latency while preserving Tor’s existing security properties. Specifically, the routes taken in ShorTor are in no way correlated to either the Tor user or their destination, including the geographic location of either party. We analyze the security of ShorTor using the AnoA framework, showing that ShorTor maintains all of Tor’s anonymity guarantees. We augment our theoretical claims with an empirical analysis. To evaluate ShorTor’s performance, we collect a real-world dataset of over 400,000 latency measurements between the 1,000 most popular Tor relays, which collectively see the vast majority of Tor traffic. With this data, we identify pairs of relays that could benefit from ShorTor: that is, two relays where introducing an additional intermediate network hop results in lower latency than the direct route between them. We use our measurement dataset to simulate the impact on end users by applying ShorTor to two million Tor circuits chosen according to Tor’s specification. ShorTor reduces the latency for the 99 <sup>th</sup>  percentile of relay pairs in Tor by 148ms. Similarly, ShorTor reduces the latency of Tor circuits by 122ms at the 99 <sup>th</sup>  percentile. In practice, this translates to ShorTor truncating tail latencies for Tor which has a direct impact on page load times and, consequently, user experience on the Tor browser.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833619/](https://ieeexplore.ieee.org/document/9833619/)
## Sabre: Sender-Anonymous Messaging with Fast Audits.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#sabre-sender-anonymous-messaging-with-fast-audits)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#sabre-sender-anonymous-messaging-with-fast-audits)
### Authors
* Adithya Vadapalli, University of Waterloo
* Kyle Storrier, University of Calgary
* Ryan Henry, University of Calgary
### Abstract
> We present Sabre, a family of sender-anonymous messaging protocols with instances supporting both Twitter-like anonymous bulletin boards and Secure Drop-like mailboxes. Both variants provide strong anonymity while potentially scaling to anonymity sets in the tens of millions and beyond. Sabre protocols inherit their basic structure from Riposte and Express while replacing those schemes’ linear-cost audit protocols with new logarithmic-cost ones. Sabre also incorporates a host of innovations that improve concrete performance by an order of magnitude or more under “ideal” circumstances, while providing asymptotic speedups in the face of resource exhaustion-style DoS attacks.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833601/](https://ieeexplore.ieee.org/document/9833601/)
## Security Foundations for Application-Based Covert Communication Channels.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#security-foundations-for-application-based-covert-communication-channels)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#security-foundations-for-application-based-covert-communication-channels)
### Authors
* James K. Howes Iv, University of Florida, Gainesville, FL, USA
* Marios Georgiou, Galois, Inc., Portland, OR, USA
* Alex J. Malozemoff, Galois, Inc., Portland, OR, USA
* Thomas Shrimpton, University of Florida, Gainesville, FL, USA
### Abstract
> We introduce the notion of an application-based covert channel—or ABCC—which provides a formal syntax for describing covert channels that tunnel messages through existing protocols. Our syntax captures many recent systems, including DeltaShaper (PETS 2017) and Protozoa (CCS 2020). We also define what it means for an ABCC to be secure against a passive eavesdropper, and prove that suitable abstractions of existing censorship circumvention systems satisfy our security notion. In doing so, we define a number of important non-cryptographic security assumptions that are often made implicitly in prior work. We believe our formalisms may be useful to censorship circumvention developers for reasoning about the security of their systems and the associated security assumptions required.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833752/](https://ieeexplore.ieee.org/document/9833752/)
## Bad Characters: Imperceptible NLP Attacks.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#bad-characters-imperceptible-nlp-attacks)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#bad-characters-imperceptible-nlp-attacks)
### Authors
* Nicholas Boucher, University of Cambridgem, Computer Science & Technology
* Ilia Shumailov, University of Cambridge and Vector Institute
* Ross Anderson, University of Cambridge and University of Edinburgh
* Nicolas Papernot, University of Cambridge and Vector Institute
### Abstract
> Several years of research have shown that machine-learning systems are vulnerable to adversarial examples, both in theory and in practice. Until now, such attacks have primarily targeted visual models, exploiting the gap between human and machine perception. Although text-based models have also been attacked with adversarial examples, such attacks struggled to preserve semantic meaning and indistinguishability. In this paper, we explore a large class of adversarial examples that can be used to attack text-based models in a black-box setting without making any human-perceptible visual modification to inputs. We use encoding-specific perturbations that are imperceptible to the human eye to manipulate the outputs of a wide range of Natural Language Processing (NLP) systems from neural machine-translation pipelines to web search engines. We find that with a single imperceptible encoding injection – representing one invisible character, homoglyph, reordering, or deletion – an attacker can significantly reduce the performance of vulnerable models, and with three injections most models can be functionally broken. Our attacks work against currently-deployed commercial systems, including those produced by Microsoft and Google, in addition to open source models published by Facebook, IBM, and HuggingFace. This novel series of attacks presents a significant threat to many language processing systems: an attacker can affect systems in a targeted manner without any assumptions about the underlying model. We conclude that text-based NLP systems require careful input sanitization, just like conventional applications, and that given such systems are now being deployed rapidly at scale, the urgent attention of architects and operators is required.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833641/](https://ieeexplore.ieee.org/document/9833641/)
## LINKTELLER: Recovering Private Edges from Graph Neural Networks via Influence Analysis.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#linkteller-recovering-private-edges-from-graph-neural-networks-via-influence-analysis)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#linkteller-recovering-private-edges-from-graph-neural-networks-via-influence-analysis)
### Authors
* Fan Wu, University of Illinois at Urbana-Champaign
* Yunhui Long, University of Illinois at Urbana-Champaign
* Ce Zhang, ETH Zürich
* Bo Li, University of Illinois at Urbana-Champaign
### Abstract
> Graph structured data have enabled several successful applications such as recommendation systems and traffic prediction, given the rich node features and edges information. However, these high-dimensional features and high-order adjacency information are usually heterogeneous and held by different data holders in practice. Given such vertical data partition e.g., one data holder will only own either the node features or edge information), different data holders have to develop efficient joint training protocols rather than directly transferring data to each other due to privacy concerns. In this paper, we focus on the edge privacy, and consider a training scenario where the data holder Bob with node features will first send training node features to Alice who owns the adjacency information. Alice will then train a graph neural network (GNN) with the joint information and provide an inference API to Bob. During inference time, Bob is able to provide test node features and query the API to obtain the predictions for test nodes. Under this setting, we first propose a privacy attack LINKTELLER via influence analysis to infer the private edge information held by Alice via designing adversarial queries for Bob. We then empirically show that LINKTELLER is able to recover a significant amount of private edges in different settings, both including inductive (8 datasets) and transductive (3 datasets), under different graph densities, significantly outperforming existing baselines. To further evaluate the privacy leakage for edges, we adapt an existing algorithm for differentially private graph convolutional network (DP GCN) training as well as propose a new DP GCN mechanism LAPGRAPH based on Laplacian mechanism to evaluate LINKTELLER. We show that these DP GCN mechanisms are not always resilient against LINKTELLER empirically under mild privacy guarantees $(\varepsilon\gt 5)$. Our studies will shed light on future research towards designing more resilient privacy-preserving GCN models; in the meantime, provide an in-depth understanding about the tradeoff between GCN model utility and robustness against potential privacy attacks.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833806/](https://ieeexplore.ieee.org/document/9833806/)
## Piccolo: Exposing Complex Backdoors in NLP Transformer Models.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#piccolo-exposing-complex-backdoors-in-nlp-transformer-models)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#piccolo-exposing-complex-backdoors-in-nlp-transformer-models)
### Authors
* Yingqi Liu, Purdue University
* Guangyu Shen, Purdue University
* Guanhong Tao, Purdue University
* Shengwei An, Purdue University
* Shiqing Ma, Rutgers University
* Xiangyu Zhang, Purdue University
### Abstract
> Backdoors can be injected to NLP models such that they misbehave when the trigger words or sentences appear in an input sample. Detecting such backdoors given only a subject model and a small number of benign samples is very challenging because of the unique nature of NLP applications, such as the discontinuity of pipeline and the large search space. Existing techniques work well for backdoors with simple triggers such as single character/word triggers but become less effective when triggers and models become complex (e.g., transformer models). We propose a new backdoor scanning technique. It transforms a subject model to an equivalent but differentiable form. It then uses optimization to invert a distribution of words denoting their likelihood in the trigger. It leverages a novel word discriminativity analysis to determine if the subject model is particularly discriminative for the presence of likely trigger words. Our evaluation on 3839 NLP models from the TrojAI competition and existing works with 7 state-of-art complex structures such as BERT and GPT, and 17 different attack types including two latest dynamic attacks, shows that our technique is highly effective, achieving over 0.9 detection accuracy in most scenarios and substantially outperforming two state-of-the-art scanners. Our submissions to TrojAI leaderboard achieve top performance in 2 out of the 3 rounds for NLP backdoor scanning.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833579/](https://ieeexplore.ieee.org/document/9833579/)
## BadEncoder: Backdoor Attacks to Pre-trained Encoders in Self-Supervised Learning.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#badencoder-backdoor-attacks-to-pre-trained-encoders-in-self-supervised-learning)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#badencoder-backdoor-attacks-to-pre-trained-encoders-in-self-supervised-learning)
### Authors
* Jinyuan Jia, Duke University
* Yupei Liu, Duke University
* Neil Zhenqiang Gong, Duke University
### Abstract
> Self-supervised learning in computer vision aims to pre-train an image encoder using a large amount of unlabeled images or (image, text) pairs. The pre-trained image encoder can then be used as a feature extractor to build downstream classifiers for many downstream tasks with a small amount of or no labeled training data. In this work, we propose BadEncoder, the first backdoor attack to self-supervised learning. In particular, our BadEncoder injects backdoors into a pre-trained image encoder such that the downstream classifiers built based on the backdoored image encoder for different downstream tasks simultaneously inherit the backdoor behavior. We formulate our BadEncoder as an optimization problem and we propose a gradient descent based method to solve it, which produces a backdoored image encoder from a clean one. Our extensive empirical evaluation results on multiple datasets show that our BadEncoder achieves high attack success rates while preserving the accuracy of the downstream classifiers. We also show the effectiveness of BadEncoder using two publicly available, real-world image encoders, i.e., Google’s image encoder pre-trained on ImageNet and OpenAI’s Contrastive Language-Image Pre-training (CLIP) image encoder pre-trained on 400 million (image, text) pairs collected from the Internet. Moreover, we consider defenses including Neural Cleanse and MNTD (empirical defenses) as well as PatchGuard (a provable defense). Our results show that these defenses are insufficient to defend against BadEncoder, highlighting the needs for new defenses against our BadEncoder. Our code is publicly available at: https://github.com/jjy1994/BadEncoder.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833644/](https://ieeexplore.ieee.org/document/9833644/)
## Repairing DoS Vulnerability of Real-World Regexes.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#repairing-dos-vulnerability-of-real-world-regexes)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#repairing-dos-vulnerability-of-real-world-regexes)
### Authors
* Nariyoshi Chida, NTT Corporation / Waseda University
* Tachio Terauchi, Waseda University
### Abstract
> There has been much work on synthesizing and repairing regular expressions (regexes for short) from examples. These programming-by-example (PBE) methods help the users write regexes by letting them reflect their intention by examples. However, the existing methods may generate regexes whose matching may take super-linear time and are vulnerable to regex denial of service (ReDoS) attacks. This paper presents the first PBE repair method that is guaranteed to generate only invulnerable regexes. Importantly, our method can handle real-world regexes containing lookarounds and backreferences. Due to the extensions, the existing formal definitions of ReDoS vulnerabilities that only consider pure regexes are insufficient. Therefore, we first give a novel formal semantics and complexity of backtracking matching algorithms for real-world regexes, and with them, give the first formal definition of ReDoS vulnerability for real-world regexes. Next, we present a novel condition called real-world strong 1-unambiguity that is sufficient for guaranteeing the invulnerability of real-world regexes, and formalize the corresponding PBE repair problem. Finally, we present an algorithm that solves the repair problem. The algorithm builds on and extends the previous PBE methods to handle the realworld extensions and with constraints to enforce the real-world strong 1-unambiguity condition.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833597/](https://ieeexplore.ieee.org/document/9833597/)
## GREBE: Unveiling Exploitation Potential for Linux Kernel Bugs.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#grebe-unveiling-exploitation-potential-for-linux-kernel-bugs)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#grebe-unveiling-exploitation-potential-for-linux-kernel-bugs)
### Authors
* Zhenpeng Lin, The Pennsylvania State University
* Yueqi Chen, The Pennsylvania State University
* Yuhang Wu, The Pennsylvania State University
* Dongliang Mu, School of Cyber Science and Engineering, HUST
* Chensheng Yu, George Washington University
* Xinyu Xing, Northwestern University
* Kang Li, Baidu, USA
### Abstract
> Nowadays, dynamic testing tools have significantly expedited the discovery of bugs in the Linux kernel. When unveiling kernel bugs, they automatically generate reports, specifying the errors the Linux encounters. The error in the report implies the possible exploitability of the corresponding kernel bug. As a result, many security analysts use the manifested error to infer a bug’s exploitability and thus prioritize their exploit development effort. However, using the error in the report, security researchers might underestimate a bug’s exploitability. The error exhibited in the report may depend upon how the bug is triggered. Through different paths or under different contexts, a bug may manifest various error behaviors implying very different exploitation potentials. This work proposes a new kernel fuzzing technique to explore all the possible error behaviors that a kernel bug might bring about. Unlike conventional kernel fuzzing techniques concentrating on kernel code coverage, our fuzzing technique is more directed towards the buggy code fragment. It introduces an object-driven kernel fuzzing technique to explore various contexts and paths to trigger the reported bug, making the bug manifest various error behaviors. With the newly demonstrated errors, security researchers could better infer a bug’s possible exploitability. To evaluate our proposed technique’s effectiveness, efficiency, and impact, we implement our fuzzing technique as a tool GREBE and apply it to 60 real-world Linux kernel bugs. On average, GREBE could manifest 2+ additional error behaviors for each of the kernel bugs. For 26 kernel bugs, GREBE discovers higher exploitation potential. We report to kernel vendors some of the bugs – the exploitability of which was wrongly assessed and the corresponding patch has not yet been carefully applied – resulting in their rapid patch adoption.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833683/](https://ieeexplore.ieee.org/document/9833683/)
## Goshawk: Hunting Memory Corruptions via Structure-Aware and Object-Centric Memory Operation Synopsis.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#goshawk-hunting-memory-corruptions-via-structure-aware-and-object-centric-memory-operation-synopsis)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#goshawk-hunting-memory-corruptions-via-structure-aware-and-object-centric-memory-operation-synopsis)
### Authors
* Yunlong Lyu, University of Science and Technology of China
* Yi Fang, Feiyu Security
* Yiwei Zhang, G.O.S.S.I.P, Shanghai Jiao Tong University
* Qibin Sun, University of Science and Technology of China
* Siqi Ma, The University of New South Wales
* Elisa Bertino, Purdue University
* Kangjie Lu, University of Minnesota
* Juanru Li, Feiyu Security; Shanghai Qi Zhi Institute; G.O.S.S.I.P, Shanghai Jiao Tong University
### Abstract
> Existing tools for the automated detection of memory corruption bugs are not very effective in practice. They typically recognize only standard memory management (MM) APIs (e.g., malloc and free) and assume a naive paired-use model—an allocator is followed by a specific deallocator. However, we observe that programmers very often design their own MM functions and that these functions often manifest two major characteristics: (1) Custom allocator functions perform multi-object or nested allocation which then requires structure-aware deallocation functions. (2) Custom allocators and deallocators follow an unpaired-use model. A more effective detection thus needs to adapt those characteristics and capture memory bugs related to non-standard MM behaviors. In this paper, we present a MM function aware memory bug detection technique by introducing the concept of structure-aware and object-centric Memory Operation Synopsis (MOS). A MOS abstractly describes the memory objects of a given MM function, how they are managed by the function, and their structural relations. By utilizing MOS, a bug detection could explore much less code but is still capable of handling multi-object or nested allocations and does not rely on the paired-use model. In addition, to extensively find MM functions and automatically generate MOS for them, we propose a new identification approach that combines natural language processing (NLP) and data flow analysis, which enables the efficient and comprehensive identification of MM functions, even in very large code bases. We implement a MOS-enhanced memory bug detection system, Goshawk, to discover memory bugs caused by complex and custom MM behaviors. We applied Goshawk to well-tested and widely-used open source projects including OS kernels, server applications, and IoT SDKs. Goshawk outperforms the state-of-the-art data flow analysis driven bug detection tools by an order of magnitude in analysis speed and the number of accurately identified MM functions, reports the discovered bugs with a developer-friendly, MOS based description, and successfully detects 92 new double-free and use-after-free bugs.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833613/](https://ieeexplore.ieee.org/document/9833613/)
## FSAFlow: Lightweight and Fast Dynamic Path Tracking and Control for Privacy Protection on Android Using Hybrid Analysis with State-Reduction Strategy.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#fsaflow-lightweight-and-fast-dynamic-path-tracking-and-control-for-privacy-protection-on-android-using-hybrid-analysis-with-state-reduction-strategy)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#fsaflow-lightweight-and-fast-dynamic-path-tracking-and-control-for-privacy-protection-on-android-using-hybrid-analysis-with-state-reduction-strategy)
### Authors
* Zhi Yang, PLA Information Engineering University, Zhengzhou, China
* Zhanhui Yuan, PLA Information Engineering University, Zhengzhou, China
* Shuyuan Jin, Sun Yat-sen University, Guangzhou, China
* Xingyuan Chen, PLA Information Engineering University, Zhengzhou, China
* Lei Sun, PLA Information Engineering University, Zhengzhou, China
* Xuehui Du, PLA Information Engineering University, Zhengzhou, China
* Wenfa Li, University of Science and Technology Beijing, Beijing, China
* Hongqi Zhang, PLA Information Engineering University, Zhengzhou, China
### Abstract
> Despite the demonstrated effectiveness of dynamic taint analysis (DTA) in a variety of security applications, the poor performance achieved by available DTA prototypes prevents their widespread adoption in production systems, especially the Android system with limited computation and storage resources. To overcome DTA’s overhead bottlenecks, recent research efforts aim to decouple taint tracking logic from program execution. Continuing this line of research, this work proposes FSAFlow, a novel hybrid taint tracking and control system, to reduce DTA overhead significantly while ensuring sound Android privacy protection. FSAFlow further separates the path tracking logic from the corresponding taint tracking logic and the control of the information flow path is optimized. Specifically, a classic static analysis algorithm is first modified to search target paths and their key branch information. Then, the potential paths that violate the user’s predefined privacy protection policy are chosen and encoded with a Finite State Automaton (FSA). A small amount of FSA-based state management code is inserted into the corresponding position in the program. Finally, it monitors the program’s state of path execution and prevents information leakage during runtime. The efficiency and correctness of FSAFlow are proved by theoretical analysis. The experimental results show that FSAFlow incurs lower overhead than several representative DTA optimization approaches, 2.06% for popular applications, and 5.41% on CaffeineMark 3.0. FSAFlow has fewer false negatives in implicit flow tracking than the Android DTA platform, TaintDroid, and achieves higher precision than the static analysis tool, FlowDroid, by verifying the paths that never occur and tracking in the complete execution stage of the loop body at runtime.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833764/](https://ieeexplore.ieee.org/document/9833764/)
## Domains Do Change Their Spots: Quantifying Potential Abuse of Residual Trust.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#domains-do-change-their-spots-quantifying-potential-abuse-of-residual-trust)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#domains-do-change-their-spots-quantifying-potential-abuse-of-residual-trust)
### Authors
* Johnny So, Stony Brook University
* Najmeh Miramirkhani, Stony Brook University
* Michael Ferdman, Stony Brook University
* Nick Nikiforakis, Stony Brook University
### Abstract
> When domains expire and are released to the public, adversaries can re-register them with the hope of exploiting residual trust from clients that are unaware of the change in ownership. Because domain name resolution is integral to the web, possible clients run the gamut from humans browsing the web to automated and periodic processes such as system updates. For an adversary, this trivially yields access to an attack vector that can affect a multitude of diverse systems and devices. We reason that some domains which experience residual trust and are valuable from a security perspective are not valuable from a dropcatching perspective and, as such, can be re-registered by an adversary without participating in fiercely competitive auctions for expired domains. In this paper, we present an investigation into this attack vector using a top-down, opportunistic approach, as opposed to bottom-up approaches used by prior work that target specific systems and infrastructure. Throughout a one-month re-registration period, we identify potentially valuable dropped domains using a threshold of passive DNS resolutions, re-register, and deploy them with basic honeypot services. We then analyze the traffic to these domains to find instances of residual trust that can be exploited. Our honeypot services recorded, over a four-month period, 650,737,621 requests from 5,540,379 unique IP addresses situated in 22,744 different autonomous systems to the 201 re-registered domains. Although a majority of these domains may not pose significant security risks, we are most concerned with and thus focus our discussion on unusual domains which receive orders of magnitude more traffic and types of traffic that are significantly different from the other domains. These include domains which previously functioned as a torrent tracker, an API for a computer lab usage statistics service used by many universities, an API that was a point of contact for a common Android haptics library, security company DNS sinkhole servers, an Internet radio and music station, command-and-control servers for malware and potentially unwanted programs, and an email tracker. Our findings demonstrate that expired domains pose a real threat to the security of the Internet ecosystem and that adversaries with modest budgets can compromise a wide range of systems and services by merely registering previously-popular domains that were left to expire.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833609/](https://ieeexplore.ieee.org/document/9833609/)
## Scraping Sticky Leftovers: App User Information Left on Servers After Account Deletion.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#scraping-sticky-leftovers-app-user-information-left-on-servers-after-account-deletion)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#scraping-sticky-leftovers-app-user-information-left-on-servers-after-account-deletion)
### Authors
* Preethi Santhanam, Wichita State University
* Hoang Dang, Wichita State University
* Zhiyong Shan, Wichita State University
* Iulian Neamtiu, New Jersey Institute of Technology
### Abstract
> Sixty-five percent of mobile apps require user accounts for offering full-fledged functionality. Account information includes private data, e.g., address, phone number, credit card. Our concern is “leftover” account data kept on the server after account deletion, which can be a significant privacy violation. Specifically, we analyzed 1,435 popular apps from Google Play (and 771 associated websites), of which 678 have their own sign-up process, to answer questions such as: Can accounts be deleted at all? Following account deletion, will user data remain on the app’s servers? If so, for how long? Do apps keep their promise to remove data? Answering these questions, and more generally, understanding and tackling the leftover account problem, is challenging. A fundamental obstacle is that leftover data is manipulated and retained in a private space, on the app’s backend servers; we devised a novel, reverse-engineering approach to infer leftover data from app–server communication. Another obstacle is the distributed nature of this data: program analysis as well as information retrieval are required on both the app and its website. We have developed an end-to-end solution (static analysis, dynamic analysis, natural language processing) to the leftover account problem. First, our toolchain checks whether an app, or its website, support account deletion; next, it checks whether the app/website have a data retention policy, and whether the account is left on servers after deletion, or after the specified retention period; finally, it automatically cleans up leftover accounts. We found that 64.45% of apps do not offer any means for users to delete accounts; 2.5% of apps still keep account data on app servers even after accounts are deleted by users. Only 5% of apps specify a retention period; some of these apps violate their own policy by still retaining data months after the period has ended. Experiments show that our approach is effective, with an F-measure $\gt 88$%, and efficient, with a typical analysis time of 279 seconds per app/website.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833720/](https://ieeexplore.ieee.org/document/9833720/)
## TrollMagnifier: Detecting State-Sponsored Troll Accounts on Reddit.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#trollmagnifier-detecting-state-sponsored-troll-accounts-on-reddit)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#trollmagnifier-detecting-state-sponsored-troll-accounts-on-reddit)
### Authors
* Mohammad Hammas Saeed, Boston University
* Shiza Ali, Boston University
* Jeremy Blackburn, Binghamton University
* Emiliano De Cristofaro, University College London
* Savvas Zannettou, TU Delft; Max Planck Institute for Informatics
* Gianluca Stringhini, Boston University
### Abstract
> Growing evidence points to recurring influence campaigns on social media, often sponsored by state actors aiming to manipulate public opinion on sensitive political topics. Typically, campaigns are performed through instrumented accounts, known as troll accounts; despite their prominence, however, little work has been done to detect these accounts in the wild. In this paper, we present TROLLMAGNIFIER, a detection system for troll accounts. Our key observation, based on analysis of known Russian-sponsored troll accounts identified by Reddit, is that they show loose coordination, often interacting with each other to further specific narratives. Therefore, troll accounts controlled by the same actor often show similarities that can be leveraged for detection. TROLLMAGNIFIER learns the typical behavior of known troll accounts and identifies more that behave similarly. We train TROLLMAGNIFIER on a set of 335 known troll accounts and run it on a large dataset of Reddit accounts. Our system identifies 1,248 potential troll accounts; we then provide a multi-faceted analysis to corroborate the correctness of our classification. In particular, 66% of the detected accounts show signs of being instrumented by malicious actors (e.g., they were created on the same exact day as a known troll, they have since been suspended by Reddit, etc.). They also discuss similar topics as the known troll accounts and exhibit temporal synchronization in their activity. Overall, we show that using TROLLMAGNIFIER, one can grow the initial knowledge of potential trolls provided by Reddit by over 300%.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833706/](https://ieeexplore.ieee.org/document/9833706/)
## Analyzing Ground-Truth Data of Mobile Gambling Scams.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#analyzing-ground-truth-data-of-mobile-gambling-scams)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#analyzing-ground-truth-data-of-mobile-gambling-scams)
### Authors
* Geng Hong, Fudan University
* Zhemin Yang, Fudan University
* Sen Yang, Fudan University
* Xiaojing Liaoy, Indiana University Bloomington
* Xiaolin Du, Fudan University
* Min Yang, Fudan University
* Haixin Duan, Tsinghua University
### Abstract
> With the growth of mobile computing techniques, mobile gambling scams have seen a rampant increase in the recent past. In mobile gambling scams, miscreants deliver scamming messages via mobile instant messaging, host scam gambling platforms on mobile apps, and adopt mobile payment channels. To date, there is little quantitative knowledge about how this trending cybercrime operates, despite causing daily fraud losses estimated at more than ${\$}$522,262 USD. This paper presents the first empirical study based on ground-truth data of mobile gambling scams, associated with 1,461 scam incident reports and 1,487 gambling scam apps, spanning from January 1, 2020 to December 31, 2020. The qualitative and quantitative analysis of this ground-truth data allows us to characterize the operational pipeline and full fraud kill chain of mobile gambling scams. In particular, we study the social engineering tricks used by scammers and reveal their effectiveness. Our work provides a systematic analysis of 1,068 confirmed Android and 419 iOS scam apps, including their development frameworks, declared permissions, compatibility, and backend network infrastructure. Perhaps surprisingly, our study unveils that public online app generators have been abused to develop gambling scam apps. Our analysis reveals several payment channels (ab)used by gambling scam app and uncovers a new type of money mule-based payment channel with the average daily gambling deposit of ${\$}$400,000 USD. Our findings enable a better understanding of the mobile gambling scam ecosystem, and suggest potential avenues to disrupt these scam activities.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833665/](https://ieeexplore.ieee.org/document/9833665/)
## Effective Seed Scheduling for Fuzzing with Graph Centrality Analysis.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#effective-seed-scheduling-for-fuzzing-with-graph-centrality-analysis)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#effective-seed-scheduling-for-fuzzing-with-graph-centrality-analysis)
### Authors
* Dongdong She, Columbia University
* Abhishek Shah, Columbia University
* Suman Jana, Columbia University
### Abstract
> Seed scheduling, the order in which seeds are selected, can greatly affect the performance of a fuzzer. Existing approaches schedule seeds based on their historical mutation data, but ignore the structure of the underlying Control Flow Graph (CFG). Examining the CFG can help seed scheduling by revealing the potential edge coverage gain from mutating a seed. An ideal strategy will schedule seeds based on a count of all reachable and feasible edges from a seed through mutations, but computing feasibility along all edges is prohibitively expensive. Therefore, a seed scheduling strategy must approximate this count. We observe that an approximate count should have 3 properties -(i) it should increase if there are more edges reachable from a seed; (ii) it should decrease if mutation history information suggests an edge is hard to reach or is located far away from currently visited edges; and (iii) it should be efficient to compute over large CFGs. We observe that centrality measures from graph analysis naturally provide these three properties and therefore can efficiently approximate the likelihood of reaching unvisited edges by mutating a seed. We therefore build a graph called the edge horizon graph that connects seeds to their closest unvisited nodes and compute the seed node’s centrality to measure the potential edge coverage gain from mutating a seed. We implement our approach in K-Scheduler and compare with many popular seed scheduling strategies. We find that K-Scheduler increases feature coverage by 25.89% compared to Entropic and edge coverage by 4.21% compared to the next-best AFL-based seed scheduler, in arithmetic mean on 12 Google FuzzBench programs. It also finds 3 more previously-unknown bugs than the next-best AFL-based seed scheduler.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833761/](https://ieeexplore.ieee.org/document/9833761/)
## FuzzUSB: Hybrid Stateful Fuzzing of USB Gadget Stacks.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#fuzzusb-hybrid-stateful-fuzzing-of-usb-gadget-stacks)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#fuzzusb-hybrid-stateful-fuzzing-of-usb-gadget-stacks)
### Authors
* Kyungtae Kim, Purdue University
* Taegyu Kim, The Pennsylvania State University
* Ertza Warraich, Purdue University
* Byoungyoung Lee, Seoul National University
* Kevin R. B. Butler, University of Florida
* Antonio Bianchi, Purdue University
* Dave Jing Tian, Purdue University
### Abstract
> Universal Serial Bus (USB) is the de facto protocol supported by peripherals and mobile devices, such as USB thumb drives and smart phones. For many devices, USB Type-C ports are the primary interface for charging, file transfer, audio, video, etc. Accordingly, attackers have exploited different vulnerabilities within USB stacks, compromising host machines via BadUSB attacks or jailbreaking iPhones from USB connections. While there exist fuzzing frameworks dedicated to USB vulnerability discovery, all of them focus on USB host stacks and ignore USB gadget stacks, which enable all the features within modern peripherals and smart devices. In this paper, we propose FuzzUSB, the first fuzzing framework for the USB gadget stack within commodity OS kernels, leveraging static analysis, symbolic execution, and stateful fuzzing. FuzzUSB combines static analysis and symbolic execution to extract internal state machines from USB gadget drivers, and uses them to achieve state-guided fuzzing through multi-channel inputs. We have implemented FuzzUSB upon the syzkaller kernel fuzzer and applied it to the most recent mainline Linux, Android, and FreeBSD kernels. As a result, we have found 34 previously unknown bugs within the Linux and Android kernels, and opened 8 CVEs. Furthermore, compared to the baseline, FuzzUSB has also demonstrated different improvements, including $ 3\times$ higher code coverage, $ 50\times$ improved bug-finding efficiency for Linux USB gadget stacks, $ 2\times$ higher code coverage for FreeBSD USB gadget stacks, and reproducing known bugs that could not be detected by the baseline fuzzers. We believe FuzzUSB provides developers a powerful tool to thwart USB-related vulnerabilities within modern devices and complete the current USB fuzzing scope.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833593/](https://ieeexplore.ieee.org/document/9833593/)
## Exploit the Last Straw That Breaks Android Systems.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#exploit-the-last-straw-that-breaks-android-systems)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#exploit-the-last-straw-that-breaks-android-systems)
### Authors
* Lei Zhang, Fudan University
* Keke Lian, Fudan University
* Haoyu Xiao, Fudan University
* Zhibo Zhang, Fudan University
* Peng Liu, The Pennsylvania State University
* Yuan Zhang, Fudan University
* Min Yang, Fudan University
* Haixin Duan, Tsinghua University
### Abstract
> The Android system services usually play a critical role in running multiple important tasks, and delivering seamless user experiences, e.g., conveniently storing user data. In this paper, we conduct the first systematic security study on the data storing process in Android system services, and consequently discover a novel class of design flaws (named Straw), which can lead to serious DoS (Denial-of-Service) attacks, e.g., permanently crashing the whole victim Android device.Then we propose a novel directed fuzzing based approach, called StrawFuzzer, to automatically vet all system services against the straw vulnerabilities. StrawFuzzer balances the tradeoff between path exploration and vulnerability exploitation. By applying StrawFuzzer on three Android systems with the latest security updates, we identified 35 unique straw vulnerabilities affecting 474 interfaces across 77 system services and successfully generated corresponding exploits, which can be used to conduct various permanent/temporary DoS attacks. We have reported our findings with suggestions for repairing the vulnerabilities to corresponding vendors. Up to now, Google has rated our vulnerability as high severity.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833563/](https://ieeexplore.ieee.org/document/9833563/)
## CirC: Compiler infrastructure for proof systems, software verification, and more.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#circ-compiler-infrastructure-for-proof-systems-software-verification-and-more)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#circ-compiler-infrastructure-for-proof-systems-software-verification-and-more)
### Authors
* Alex Ozdemir, Stanford University
* Fraser Brown, Stanford University; Carnegie Mellon University
* Riad S. Wahby, Stanford University; Carnegie Mellon University
### Abstract
> Cryptographic tools like proof systems, multi-party computation, and fully homomorphic encryption are usually applied to computations expressed as systems of arithmetic constraints. In practice, this means that these applications rely on compilers from high-level programming languages (like C) to such constraints. This compilation task is challenging, but not entirely new: the software verification community has a rich literature on compiling programs to logical constraints (like SAT or SMT). In this work, we show that building shared compiler infrastructure for compiling to constraint representations is possible, because these representations share a common abstraction: stateless, non-uniform, non-deterministic computations that we call existentially quantified circuits, or EQCs. Moreover, we show that this shared infrastructure is useful, because it allows compilers for proof systems to benefit from decades of work on constraint compilation techniques for software verification. To make our approach concrete we create CirC, an infrastructure for building compilers to EQCs. CirC makes it easy to compile to new EQCs: we build support for three, R1CS (used for proof systems), SMT (used for verification and bug-finding), and ILP (used for optimization), in $\approx 2000$ LOC. It’s also easy to extend CirC to support new source languages: we build a feature-complete compiler for a cryptographic language in one week and $\approx 900$ LOC, whereas the reference compiler for the same language took years to write, comprises $\approx 24000$ LOC, and produces worse-performing output than our compiler. Finally, CirC enables novel applications that combine multiple EQCs. For example, we build the first pipeline that (1) automatically identifies bugs in programs, then (2) automatically constructs cryptographic proofs of the bugs’ existence.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833782/](https://ieeexplore.ieee.org/document/9833782/)
## HAMRAZ: Resilient Partitioning and Replication.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#hamraz-resilient-partitioning-and-replication)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#hamraz-resilient-partitioning-and-replication)
### Authors
* Xiao Li, University of California, Riverside
* Farzin Houshmand, University of California, Riverside
* Mohsen Lesani, University of California, Riverside
### Abstract
> Inter-organizational systems where subsystems with partial trust need to cooperate are common in healthcare, finance and military. In the face of malicious Byzantine attacks, the ultimate goal is to assure end-to-end policies for the three aspects of trustworthiness: confidentiality, integrity and availability. In contrast to confidentiality and integrity, provision and validation of availability has been often sidestepped. This paper guarantees end-to-end policies simultaneously for all the three aspects of trustworthiness. It presents a security-typed object-based language, a partitioning transformation, an operational semantics, and an information flow type inference system for partitioned and replicated classes. The type system provably guarantees that well-typed methods enjoy noninterference for the three properties, and that their types quantity their resilience to Byzantine attacks. Given a class and the specification of its end-to-end policies, the HAMRAZ tool applies type inference to automatically place and replicate the fields and methods of the class on Byzantine quorum systems, and synthesize trustworthy-by-construction distributed systems. The experiments show the resiliency of the resulting systems; they can gracefully tolerate attacks that are as strong as the specified policies.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833661/](https://ieeexplore.ieee.org/document/9833661/)
## Formal Model-Driven Discovery of Bluetooth Protocol Design Vulnerabilities.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#formal-model-driven-discovery-of-bluetooth-protocol-design-vulnerabilities)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#formal-model-driven-discovery-of-bluetooth-protocol-design-vulnerabilities)
### Authors
* Jianliang Wu, Purdue University
* Ruoyu Wu, Purdue University
* Dongyan Xu, Purdue University
* Dave Jing Tian, Purdue University
* Antonio Bianchi, Purdue University
### Abstract
> The Bluetooth protocol suite, including Bluetooth Classic, Bluetooth Low Energy, and Bluetooth Mesh, has become the de facto standard for short-range wireless communications. While formal methods have been applied to Bluetooth security, existing efforts either focus on one configuration of a protocol or one protocol of the suite, without considering other configurations or interactions among protocols. As a result, manual analysis still dominates the state-of-the-art security research of Bluetooth specification. To enable automatic Bluetooth security analysis with formal guarantees, we propose a comprehensive formal model for Bluetooth protocol suite covering both the key sharing phase and the data transmission phase, in all the three Bluetooth protocols, and detecting their design flaws automatically. Our formal model, written in ProVerif, adopts a modular design by abstracting each step within a protocol into an interface and implementing different methods in each step as modules to instantiate the interface, through which all possible configurations of a protocol could be examined. We further abstract different Bluetooth protocols into modules enabling the modeling of their interactions and relax the threat model to allow reasoning about semi-compromised devices. We use this model to formally verify 418 security properties and find 82 violations with attack examples capturing 5 known vulnerabilities and discovering 2 new security issues. Bluetooth SIG confirmed our independent discovery of these 2 new issues, with one issue assigned a CVE and the other issue acknowledged in a security notice. Our model provides one step towards formally verified Bluetooth security.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833777/](https://ieeexplore.ieee.org/document/9833777/)
## "Desperate Times Call for Desperate Measures": User Concerns with Mobile Loan Apps in Kenya.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#desperate-times-call-for-desperate-measures-user-concerns-with-mobile-loan-apps-in-kenya)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#desperate-times-call-for-desperate-measures-user-concerns-with-mobile-loan-apps-in-kenya)
### Authors
* Collins W. Munyendo, The George Washington University
* Yasemin Acar, The George Washington University
* Adam J. Aviv, The George Washington University
### Abstract
> The usage of mobile loan applications has proliferated in developing countries. This is due to the ease and speed in which they disburse small loans to users, compared to traditional financial institutions, such as banks, that only offer similar loans based on existing customer relationship or collateral. As mobile loan apps are a relatively new industry, these apps are mostly unregulated and therefore tend to charge extremely high interest rates. Further, they collect and sometimes misuse sensitive user data through the course of verifying customers and ensuring loan repayment, such as users’ contacts and SMS communications through the mobile device permission system. Yet, the reasons for usage as well as privacy concerns with these mobile loan apps in the developing world, and specifically in Kenya, remain largely unexplored. To investigate mobile loan apps, we conducted semi-structured interviews (n = 20) with loan app users in Kenya, and we find that most users generally have privacy concerns, particularly regarding access to their phones’ contacts. However, they often overlook these concerns as this outweighs their need to procure loans. At the same time, we find that users struggle to understand the use of permissions by these mobile loan apps (and mobile apps generally), confirming prior research on comprehension of Android permissions. Our results highlight privacy risks, concerns and behavior with the emerging mobile loan app marketplace in the developing world, and we offer recommendations that can help protect their users’ security and privacy, including the need for transparent communication by these apps on how they collect, use and secure their users’ data.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833779/](https://ieeexplore.ieee.org/document/9833779/)
## SoK: The Dual Nature of Technology in Sexual Abuse.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#sok-the-dual-nature-of-technology-in-sexual-abuse)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#sok-the-dual-nature-of-technology-in-sexual-abuse)
### Authors
* Borke Obada-Obieh, University of British Columbia
* Yue Huang, University of British Columbia
* Lucrezia Spagnolo, Vesta Social Innovation Technologies
* Konstantin Beznosov, University of British Columbia
### Abstract
> This paper systematizes and contextualizes the existing body of knowledge on on technology’s dual nature regarding sexual abuse: facilitator of it and assistant to its prevention, reporting, and restriction. By reviewing 224 research papers, we identified 10 characteristics of technology that facilitate sexual abuse: covertness, publicness, anonymity, evolution, boundlessness, reproducibility, accessibility, indispensability, malleability, and opaqueness. We also analyzed how technology assists victims and other stakeholders in coping with and responding to sexual abuse. Our research questions examined the challenges in using technology to address sexual abuse too. For instance, its use by victims can lead to revictimization. To address technology’s challenges, we offer recommendations and suggest new research directions. These findings about the dual nature of technology can inform research and development toward better support for victims of sexual abuse.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833663/](https://ieeexplore.ieee.org/document/9833663/)
## SoK: A Framework for Unifying At-Risk User Research.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#sok-a-framework-for-unifying-at-risk-user-research)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#sok-a-framework-for-unifying-at-risk-user-research)
### Authors
* Noel Warford, University of Maryland
* Tara Matthews, Google
* Kaitlyn Yang, University of Maryland
* Omer Akgul, University of Maryland
* Sunny Consolvo, Google
* Patrick Gage Kelley, Google
* Nathan Malkin, University of Maryland
* Michelle L. Mazurek, University of Maryland
* Manya Sleeper, Google
* Kurt Thomas, Google
### Abstract
> At-risk users are people who experience risk factors that augment or amplify their chances of being digitally attacked and/or suffering disproportionate harms. In this systematization work, we present a framework for reasoning about at-risk users based on a wide-ranging meta-analysis of 95 papers. Across the varied populations that we examined (e.g., children, activists, people with disabilities), we identified 10 unifying contextual risk factors —such as marginalization and access to a sensitive resource —that augment or amplify digital-safety risks and their resulting harms. We also identified technical and non-technical practices that at-risk users adopt to attempt to protect themselves from digital-safety risks. We use this framework to discuss barriers that limit at-risk users’ ability or willingness to take protective actions. We believe that researchers and technology creators can use our framework to identify and shape research investments to benefit at-risk users, and to guide technology design to better support at-risk users.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833643/](https://ieeexplore.ieee.org/document/9833643/)
## Deployment of Source Address Validation by Network Operators: A Randomized Control Trial.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#deployment-of-source-address-validation-by-network-operators-a-randomized-control-trial)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#deployment-of-source-address-validation-by-network-operators-a-randomized-control-trial)
### Authors
* Qasim Lone, Delft University of Technology, The Netherlands
* Alisa Frik, ICSI, UC Berkeley, USA
* Matthew Luckie, University of Waikato, New Zealand
* Maciej Korczyński, Univ. Grenoble Alpes, CNRS, Grenoble INP, LIG, France
* Michel van Eeten, Delft University of Technology, The Netherlands
* Carlos Gañán, Delft University of Technology, The Netherlands
### Abstract
> IP spoofing, sending IP packets with a false source IP address, continues to be a primary attack vector for large-scale Denial of Service attacks. To combat spoofing, various interventions have been tried to increase the adoption of source address validation (SAV) among network operators. How can SAV deployment be increased? In this work, we conduct the first randomized control trial to measure the effectiveness of various notification mechanisms on SAV deployment. We include new treatments using nudges and channels, previously untested in notification experiments. Our design reveals a painful reality that contrasts with earlier observational studies: none of the notification treatments significantly improved SAV deployment compared to the control group. We explore the reasons for these findings and report on a survey among operators to identify ways forward. A portion of the operators indicate that they do plan to deploy SAV and ask for better notification mechanisms, training, and support materials for SAV implementation.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833701/](https://ieeexplore.ieee.org/document/9833701/)
## Exposed Infrastructures: Discovery, Attacks and Remediation of Insecure ICS Remote Management Devices.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#exposed-infrastructures-discovery-attacks-and-remediation-of-insecure-ics-remote-management-devices)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#exposed-infrastructures-discovery-attacks-and-remediation-of-insecure-ics-remote-management-devices)
### Authors
* Takayuki Sasaki, Yokohama National University
* Akira Fujita, Yokohama National University; National Institute of Information and Communications Technology
* Carlos H. Gañán, TU Delft; Yokohama National University
* Michel van Eeten, TU Delft; Yokohama National University
* Katsunari Yoshioka, Yokohama National University
* Tsutomu Matsumoto, Yokohama National University
### Abstract
> Geographically distributed infrastructures, such as buildings, dams, and solar power plants, are commonly maintained via Internet-connected remote management devices. Previous studies on detecting and securing industrial control systems (ICS) have overlooked these remote management devices, as they do not expose ICS-specific services like Modbus and BACnet and thus do not show up in Internet-wide scans for such services. In this paper, we implement and validate a discovery method for these devices via their Web User Interface (WebUI) and detect 890 devices in Japan alone. We also show that many of these devices are highly insecure. Many allow access to the status or even the control over industrial systems without proper authentication. Taking a closer look at three prevalent remote management devices, we discovered 13 0-day vulnerabilities, several of which were rated as medium or high severity. They have been responsibly disclosed to the manufacturers. By using honeypots that imitate these systems, we show that over time, only a small number of attackers enter these systems, but some do change critical parameters. Attackers appear to interact more with the system when more facility information is displayed on the WebUI. Finally, we notified operators of 317 vulnerable remote management devices by email and telephone. We reached 212 persons in charge of the devices and received confirmation that our method had correctly identified the device. 50% of the persons in charge of the devices stated that they mitigated or will mitigate the problem. We confirmed their actions via a followup scan for vulnerable devices and found that measures were taken for 58% of the devices when we could reach the persons in charge of the device.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833730/](https://ieeexplore.ieee.org/document/9833730/)
## Robbery on DevOps: Understanding and Mitigating Illicit Cryptomining on Continuous Integration Service Platforms.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#robbery-on-devops-understanding-and-mitigating-illicit-cryptomining-on-continuous-integration-service-platforms)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#robbery-on-devops-understanding-and-mitigating-illicit-cryptomining-on-continuous-integration-service-platforms)
### Authors
* Zhi Li, School of Cyber Science and Engineering, Huazhong Univ. of Sci. & Tech, China; School of Computer Science and Technology, Huazhong Univ. of Sci. & Tech, China; National Engineering Research Center for Big Data Tech. and Sys., Cluster and Grid Computing Lab, Services Computing Tech. and Sys. Lab, and Big Data Security Engineering Research Center, Huazhong Univ. of Sci. & Tech, China
* Weijie Liu, Indiana University Bloomington, USA
* Hongbo Chen, Indiana University Bloomington, USA
* XiaoFeng Wang, Indiana University Bloomington, USA
* Xiaojing Liao, Indiana University Bloomington, USA
* Luyi Xing, Indiana University Bloomington, USA
* Mingming Zha, Indiana University Bloomington, USA
* Hai Jin, School of Computer Science and Technology, Huazhong Univ. of Sci. & Tech, China; National Engineering Research Center for Big Data Tech. and Sys., Cluster and Grid Computing Lab, Services Computing Tech. and Sys. Lab, and Big Data Security Engineering Research Center, Huazhong Univ. of Sci. & Tech, China
* Deqing Zou, School of Cyber Science and Engineering, Huazhong Univ. of Sci. & Tech, China; National Engineering Research Center for Big Data Tech. and Sys., Cluster and Grid Computing Lab, Services Computing Tech. and Sys. Lab, and Big Data Security Engineering Research Center, Huazhong Univ. of Sci. & Tech, China
### Abstract
> The recent wave of in-browser cryptojacking has ebbed away, due to the new updates of mainstream cryptocurrrencies, which demand the level of mining resources browsers cannot afford. As replacements, resource-rich, loosely protected free Internet services, such as Continuous Integration (CI) platforms, have become attractive targets. In this paper, we report a systematic study on real-world illicit cryptomining on public CI platforms (called Cijacking). Unlike in-browser cryptojacking, Cijacks masquerade as CI jobs and are therefore more difficult to detect, since legitimate CI workflows such as container image building and testing also entail intensive computing. In our research, we leveraged the critical mining information the adversary has to specify, such as wallet addresses and mining pool domains, to recover the attack traces from GitHub repositories and the log files on CI platforms, leading to the discovery of 1,974 Cijacking instances, 30 campaigns across 12 different cryptocurrencies on 11 mainstream CI platforms. Further, our study unveils the evolution of attack strategies, in response to the protection put in place by the platforms, the duration of the mining jobs (as long as 33 months), and their lifecycle. Further discovered is the revenue of the attack, over ${\$}$20,000 per month. Since robust detection of cryptojacking is known to be hard, we developed a novel technique, called Cijitter, to strategically inject delays to the execution of a CI workflow to disproportionally penalize the mining jobs that need to work on a series of tasks under time constraints. Our analysis and evaluation, as conducted on both benchmarks and common CI jobs, show that our approach substantially suppresses the miner’s revenues, rendering them unprofitable, but only has small impacts on the performance of CI jobs and developer productivity (94.3% of CI jobs see a less than 10% delay).

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833803/](https://ieeexplore.ieee.org/document/9833803/)
## Privacy-from-Birth: Protecting Sensed Data from Malicious Sensors with VERSA.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#privacy-from-birth-protecting-sensed-data-from-malicious-sensors-with-versa)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#privacy-from-birth-protecting-sensed-data-from-malicious-sensors-with-versa)
### Authors
* Ivan De Oliveira Nunes, Rochester Institute of Technology
* Seoyeon Hwang, UC Irvine
* Sashidhar Jakkamsetti, UC Irvine
* Gene Tsudik, UC Irvine
### Abstract
> With the growing popularity of the Internet-of-Things (IoT), massive numbers of specialized devices are deployed worldwide, in many everyday settings, including homes, offices, vehicles, public spaces, and factories. Such devices usually perform sensing and/or actuation. Many of them handle sensitive and personal data. If left unprotected, ambient sensing (e.g., of temperature, motion, audio, or video) can leak very private information. At the same time, some IoT devices use low-end computing platforms with few (or no) security features.There are many well-known techniques to secure sensed data, e.g., by authenticating communication end-points, encrypting data before transmission, and obfuscating traffic patterns. Such techniques protect sensed data from external adversaries, while assuming that the sensing device itself is secure. Meanwhile, both the scale and frequency of IoT-focused attacks are growing. This prompts a natural question: how to protect sensed data even if all software on the device is compromised? Ideally, in order to achieve this, sensed data must be protected from its genesis, i.e., from the time when a physical analog quantity is converted into its digital counterpart and becomes accessible to software. We refer to this property as PfB: Privacy-from-Birth.In this work, we formalize PfB and design Verified Remote Sensing Authorization (VERSA) – a provably secure and formally verified architecture guaranteeing that only correct execution of expected and explicitly authorized software can access and manipulate sensing interfaces, specifically, General Purpose Input/Output (GPIO), which is the usual boundary between analog and digital worlds on IoT devices. This guarantee is obtained with minimal hardware support and holds even if all device software is compromised. VERSA ensures that malware can neither gain access to sensed data on the GPIO-mapped memory nor obtain any trace thereof. VERSA formally verified and its open-sourced implementation targets resource-constrained IoT edge devices, commonly used for sensing. Experimental results show that PfB is both achievable and affordable for such devices.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833737/](https://ieeexplore.ieee.org/document/9833737/)
## Publicly Accountable Robust Multi-Party Computation.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#publicly-accountable-robust-multi-party-computation)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#publicly-accountable-robust-multi-party-computation)
### Authors
* Marc Rivinius, Institute of Information Security University of Stuttgart, Stuttgart, Germany
* Pascal Reisert, Institute of Information Security University of Stuttgart, Stuttgart, Germany
* Daniel Rausch, Institute of Information Security University of Stuttgart, Stuttgart, Germany
* Ralf Küsters, Institute of Information Security University of Stuttgart, Stuttgart, Germany
### Abstract
> In recent years, lattice-based secure multi-party computation (MPC) has seen a rise in popularity and is used more and more in large scale applications like privacy-preserving cloud computing, electronic voting, or auctions. Many of these applications come with the following high security requirements: a computation result should be publicly verifiable, with everyone being able to identify a malicious party and hold it accountable, and a malicious party should not be able to corrupt the computation, force a protocol restart, or block honest parties or an honest third-party (client) that provided private inputs from receiving a correct result. The protocol should guarantee verifiability and accountability even if all protocol parties are malicious. While some protocols address one or two of these often essential security features, we present the first publicly verifiable and accountable, and (up to a threshold) robust SPDZ-like MPC protocol without restart. We propose protocols for accountable and robust online, offline, and setup computations. We adapt and partly extend the lattice-based commitment scheme by Baum et al. (SCN 2018) as well as other primitives like ZKPs. For the underlying commitment scheme and the underlying BGV encryption scheme we determine ideal parameters. We give a performance evaluation of our protocols and compare them to state-of-the-art protocols both with and without our target security features: public accountability, public verifiability and robustness.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833608/](https://ieeexplore.ieee.org/document/9833608/)
## Waldo: A Private Time-Series Database from Function Secret Sharing.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#waldo-a-private-time-series-database-from-function-secret-sharing)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#waldo-a-private-time-series-database-from-function-secret-sharing)
### Authors
* Emma Dauterman, University of California, Berkeley
* Mayank Rathee, University of California, Berkeley
* Raluca Ada Popa, University of California, Berkeley
* Ion Stoica, University of California, Berkeley
### Abstract
> Applications today rely on cloud databases for storing and querying time-series data. While outsourcing storage is convenient, this data is often sensitive, making data breaches a serious concern. We present Waldo, a time-series database with rich functionality and strong security guarantees: Waldo supports multi-predicate filtering, protects data contents as well as query filter values and search access patterns, and provides malicious security in the 3-party honest-majority setting. In contrast, prior systems such as Timecrypt and Zeph have limited functionality and security: (1) these systems can only filter on time, and (2) they reveal the queried time interval to the server. Oblivious RAM (ORAM) and generic multiparty computation (MPC) are natural choices for eliminating leakage from prior work, but both of these are prohibitively expensive in our setting due to the number of roundtrips and bandwidth overhead, respectively. To minimize both, Waldo builds on top of function secret sharing, enabling Waldo to evaluate predicates non-interactively. We develop new techniques for applying function secret sharing to the encrypted database setting where there are malicious servers, secret inputs, and chained predicates. With 32-core machines, Waldo runs a query with 8 range predicates over 2 <sup>18</sup>  records in 3.03s, compared to 12.88s or an MPC baseline and 16.56s for an ORAM baseline. Compared to Waldo, the MPC baseline uses $9-82 \times$ more bandwidth between servers (for different numbers of records), while the ORAM baseline uses $20-152 \times$ more bandwidth between the client and server(s) (for different numbers of predicates).

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833611/](https://ieeexplore.ieee.org/document/9833611/)
## Hark: A Deep Learning System for Navigating Privacy Feedback at Scale.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#hark-a-deep-learning-system-for-navigating-privacy-feedback-at-scale)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#hark-a-deep-learning-system-for-navigating-privacy-feedback-at-scale)
### Authors
* Hamza Harkous, Google
* Sai Teja Peddinti, Google
* Rishabh Khandelwal, University of Wisconsin-Madison
* Animesh Srivastava, Google
* Nina Taft, Google
### Abstract
> Integrating user feedback is one of the pillars for building successful products. However, this feedback is generally collected in an unstructured free-text form, which is challenging to understand at scale. This is particularly demanding in the privacy domain due to the nuances associated with the concept and the limited existing solutions. In this work, we present Hark <sup>1</sup> , a system for discovering and summarizing privacy-related feedback at scale. Hark automates the entire process of summarizing privacy feedback, starting from unstructured text and resulting in a hierarchy of high-level privacy themes and fine-grained issues within each theme, along with representative reviews for each issue. At the core of Hark is a set of new deep learning models trained on different tasks, such as privacy feedback classification, privacy issues generation, and high-level theme creation. We illustrate Hark’s efficacy on a corpus of 626 M Google Play reviews. Out of this corpus, our privacy feedback classifier extracts $6 M$ privacy-related reviews (with an AUC-ROC of 0.92). With three annotation studies, we show that Hark’s generated issues are of high accuracy and coverage and that the theme titles are of high quality. We illustrate Hark’s capabilities by presenting high-level insights from $1.3 M$ Android apps. <sup>1</sup> an English verb meaning to “pay close attention”

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833729/](https://ieeexplore.ieee.org/document/9833729/)
## Sphinx: Enabling Privacy-Preserving Online Learning over the Cloud.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#sphinx-enabling-privacy-preserving-online-learning-over-the-cloud)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#sphinx-enabling-privacy-preserving-online-learning-over-the-cloud)
### Authors
* Han Tian, Hong Kong University of Science and Technology
* Chaoliang Zeng, Hong Kong University of Science and Technology
* Zhenghang Ren, Hong Kong University of Science and Technology
* Di Chai, Hong Kong University of Science and Technology; Clustar
* Junxue Zhang, Hong Kong University of Science and Technology; Clustar
* Kai Chen, Hong Kong University of Science and Technology
* Qiang Yang, Hong Kong University of Science and Technology
### Abstract
> With the growing complexity of deep learning applications, users have started to delegate their data and models to the cloud. Among these applications, online learning services, which involve both training and inference procedures, are widely deployed. To ensure privacy guarantee on the public cloud, researchers have proposed a plethora of privacy-preserving deep learning algorithms with different techniques, ranging from obfuscation mechanisms to cryptographic tools. However, none of them is applicable to online learning services. They either focus only on inference or training procedure while ignoring the other, or require non-colluding or trusted third parties. In this paper, we present Sphinx, an efficient and privacy-preserving online deep learning system without any trusted third parties. Sphinx strikes a balance between model performance, computational efficiency, and privacy preservation with systematical optimizations on both private inference and training protocols. At its core, Sphinx synthesizes homomorphic encryption and differential privacy reciprocally to maintain the model by keeping most of its parameters as plaintexts, enabling fast training and inference protocol designs. Meanwhile, by refining the homomorphic operation behaviors, Sphinx avoids most of the heavyweight homomorphic operations and minimizes the communication cost. As a result, Sphinx is able to reduce the training time significantly while achieving real-time inference without exposing user privacy. In our experiments, we find that compared to the pure homomorphic encryption solution, Sphinx is $35 \times$ faster for training and 4 orders of magnitude faster for inference, providing real-time inference response (0.05 seconds for MNIST and 0.08 seconds for CIFAR-10). Our experiments also demonstrate that Sphinx achieves promising model accuracy under a tight privacy budget (96% accuracy under $\epsilon=2, \delta=10^{-5}$ for MNIST) without a trusted data aggregator, and is more robust against practical reconstruction attacks.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833648/](https://ieeexplore.ieee.org/document/9833648/)
## Spurt: Scalable Distributed Randomness Beacon with Transparent Setup.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#spurt-scalable-distributed-randomness-beacon-with-transparent-setup)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#spurt-scalable-distributed-randomness-beacon-with-transparent-setup)
### Authors
* Sourav Das, University of Illinois at Urbana-Champaign
* Vinith Krishnan, University of Illinois at Urbana-Champaign
* Irene Miriam Isaac, University of Illinois at Urbana-Champaign
* Ling Ren, University of Illinois at Urbana-Champaign
### Abstract
> Having shared access to high-quality random numbers is essential in many important applications. Yet, existing constructions of distributed random beacons still have limitations such as imperfect security guarantees, strong setup or network assumptions, or high costs. In this paper, we present Spurt, an efficient distributed randomness beacon protocol that does not require any trusted or expensive setup and is secure against a malicious adversary that controls up to one-third of the nodes in a partially synchronous network. We formally prove that each output of Spurt is unpredictable, bias-resistant, and publicly verifiable. Spurt has an amortized total communication cost of $O(\lambda n^{2})$ per beacon output where $\lambda$ is the security parameter. While designing Spurt, we also design a publicly verifiable secret sharing (PVSS) scheme whose security is based on the standard Decisional Bilinear Diffie-Hellman assumption and does not require a Random Oracle. We implement Spurt and evaluate it using a network of up to 128 nodes running in geographically distributed AWS instances. Our evaluation shows that Spurt can produce about 84 beacon outputs per minute in a network of 32 nodes and is comparable to systems with stronger assumptions or weaker security.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833580/](https://ieeexplore.ieee.org/document/9833580/)
## Practical Asynchronous Distributed Key Generation.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#practical-asynchronous-distributed-key-generation)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#practical-asynchronous-distributed-key-generation)
### Authors
* Sourav Das, University of Illinois at Urbana-Champaign
* Thomas Yurek, University of Illinois at Urbana-Champaign
* Zhuolun Xiang, University of Illinois at Urbana-Champaign
* Andrew Miller, University of Illinois at Urbana-Champaign
* Lefteris Kokoris-Kogias, IST Austria
* Ling Ren, University of Illinois at Urbana-Champaign
### Abstract
> Distributed Key Generation (DKG) is a technique to bootstrap threshold cryptosystems without a trusted third party and is a building block to decentralized protocols such as randomness beacons, threshold signatures, and general multiparty computation. Until recently, DKG protocols have assumed the synchronous model and thus are vulnerable when their underlying network assumptions do not hold. The recent advancements in asynchronous DKG protocols are insufficient as they either have poor efficiency or limited functionality, resulting in a lack of concrete implementations. In this paper, we present a simple and concretely efficient asynchronous DKG (ADKG) protocol. In a network of n nodes, our ADKG protocol can tolerate up to $t\lt n/3$ malicious nodes and have an expected $O(\kappa n^{3})$ communication cost, where $\kappa$ is the security parameter. Our ADKG protocol produces a field element as the secret and is thus compatible with off-the-shelf threshold cryptosystems. We implement our ADKG protocol and evaluate it using a network of up to 128 nodes in geographically distributed AWS instances. Our evaluation shows that our protocol takes as low as 3 and 9.5 seconds to terminate for 32 and 64 nodes, respectively. Also, each node sends only 0.7 Megabytes and 2.9 Megabytes of data during the two experiments, respectively.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833584/](https://ieeexplore.ieee.org/document/9833584/)
## Security Analysis of the MLS Key Derivation.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#security-analysis-of-the-mls-key-derivation)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#security-analysis-of-the-mls-key-derivation)
### Authors
* Chris Brzuska, Aalto University, Finland
* Eric Cornelissen, Aalto University, Finland
* Konrad Kohbrok, Aalto University, Finland
### Abstract
> Cryptographic communication protocols provide confidentiality, integrity and authentication properties for end-to-end communication under strong corruption attacks, including, notably, post-compromise security (PCS). Most protocols are designed for one-to-one communication. Protocols for group communication are less common, less efficient, and tend to provide weaker security guarantees. This is because group communication poses unique challenges, such as coordinated key updates, changes to group membership and complex post-compromise recovery procedures. We need to tackle this complex challenge as a community. Thus, the Internet Engineering Task Force (IETF) has created a working group with the goal of developing a sound standard for a continuous asynchronous key-exchange protocol for dynamic groups that is secure and remains efficient for large group sizes. The current version of the Messaging Layer Security (MLS) security protocol is in a feature freeze, i.e., no changes are made in order to provide a stable basis for cryptographic analysis. The key schedule and TreeKEM design are of particular concern since they are crucial to distribute and combine several keys to achieve PCS. In this work, we study the MLS continuous group key derivation (CGKD) which comprises the MLS key schedule, TreeKEM and their composition, as specified in Draft 11 of the MLS RFC, while abstracting away signatures, message flow and authentication guarantees. We establish the uniqueness and key indistinguishability properties of the MLS CGKD as computational security properties.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833678/](https://ieeexplore.ieee.org/document/9833678/)
## Low-Bandwidth Threshold ECDSA via Pseudorandom Correlation Generators.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#low-bandwidth-threshold-ecdsa-via-pseudorandom-correlation-generators)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#low-bandwidth-threshold-ecdsa-via-pseudorandom-correlation-generators)
### Authors
* Damiano Abram, Department of Computer Science, Aarhus University, Aarhus, Denmark
* Ariel Nof, Department of Computer Science, Technion, Haifa, Israel
* Claudio Orlandi, Department of Computer Science, Aarhus University, Aarhus, Denmark
* Peter Scholl, Department of Computer Science, Aarhus University, Aarhus, Denmark
* Omer Shlomovits, ZenGo X, Tel Aviv, Israel
### Abstract
> Digital signature schemes are a fundamental component of secure distributed systems, and the theft of a signing-key might have huge real-world repercussions e.g., in applications such as cryptocurrencies. Threshold signature schemes mitigate this problem by distributing shares of the secret key on several servers and requiring that enough of them interact to be able to compute a signature. In this paper, we provide a novel threshold protocol for ECDSA, arguably the most relevant signature scheme in practice. Our protocol is the first one where the communication complexity of the preprocessing phase is only logarithmic in the number of ECDSA signatures to be produced later, and it achieves therefore a so-called silent preprocessing. Our protocol achieves active security against any number of arbitrarily corrupted parties.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9833559/](https://ieeexplore.ieee.org/document/9833559/)
## Journey to the Center of the Cookie Ecosystem: Unraveling Actors' Roles and Relationships.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#journey-to-the-center-of-the-cookie-ecosystem-unraveling-actors-roles-and-relationships)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#journey-to-the-center-of-the-cookie-ecosystem-unraveling-actors-roles-and-relationships)
### Authors
* Iskander Sanchez-Rola, NortonLifeLock Research Group
* Matteo Dell'Amico, NortonLifeLock Research Group
* Davide Balzarotti, EURECOM
* Pierre-Antoine Vervier, NortonLifeLock Research Group
* Leyla Bilge, NortonLifeLock Research Group
### Abstract
> Web pages have been steadily increasing in complexity over time, including code snippets from several distinct origins and organizations. While this may be a known phenomenon, its implications on the panorama of cookie tracking received little attention until now. Our study focuses on filling this gap, through the analysis of crawl results that are both large-scale and fine-grained, encompassing the whole set of events that lead to the creation and sharing of around 138 million cookies from crawling more than 6 million webpages. Our analysis lets us paint a highly detailed picture of the cookie ecosystem, discovering an intricate network of connections between players that reciprocally exchange information and include each other's content in web pages whose owners may not even be aware. We discover that, in most webpages, tracking cookies are set and shared by organizations at the end of complex chains that involve several middlemen. We also study the impact of cookie ghostwriting, i.e., a common practice where an entity creates cookies in the name of another party, or the webpage. We attribute and define a set of roles in the cookie ecosystem, related to cookie creation and sharing. We see that organizations can and do follow different patterns, including behaviors that previous studies could not uncover: for example, many cookie ghostwriters send cookies they create to themselves, which makes them able to perform cross-site tracking even for users that deleted third-party cookies in their browsers. While some organizations concentrate the flow of information on themselves, others behave as dispatchers, allowing other organizations to perform tracking on the pages that include their content.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9796062/](https://ieeexplore.ieee.org/document/9796062/)
