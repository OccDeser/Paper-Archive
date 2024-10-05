# Eurocrypt[2024-3]
## Polynomial Time Cryptanalytic Extraction of Neural Network Models.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-3].md#polynomial-time-cryptanalytic-extraction-of-neural-network-models)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-3].md#polynomial-time-cryptanalytic-extraction-of-neural-network-models)
### Authors
* Adi Shamir, Weizmann Institute, Rehovot, Israel
* Isaac A. Canales-Martínez, Cryptography Research Center, Technology Innovation Institute, Abu Dhabi, UAE
* Jorge Chávez-Saab, Cryptography Research Center, Technology Innovation Institute, Abu Dhabi, UAE
* Anna Hambitzer, Cryptography Research Center, Technology Innovation Institute, Abu Dhabi, UAE
* Francisco Rodríguez-Henríquez, Cryptography Research Center, Technology Innovation Institute, Abu Dhabi, UAE
* Nitin Satpute, Cryptography Research Center, Technology Innovation Institute, Abu Dhabi, UAE
### Abstract
> Billions of dollars and countless GPU hours are currently spent on training Deep Neural Networks (DNNs) for a variety of tasks. Thus, it is essential to determine the difficulty of extracting all the parameters of such neural networks when given access to their black-box implementations. Many versions of this problem have been studied over the last 30 years, and the best current attack on ReLU-based deep neural networks was presented at Crypto’20 by Carlini, Jagielski, and Mironov. It resembles a differential chosen plaintext attack on a cryptosystem, which has a secret key embedded in its black-box implementation and requires a polynomial number of queries but an exponential amount of time (as a function of the number of neurons).
> 
> In this paper, we improve this attack by developing several new techniques that enable us to extract with arbitrarily high precision all the real-valued parameters of a ReLU-based DNN using a polynomial number of queries and a polynomial amount of time. We demonstrate its practical efficiency by applying it to a full-sized neural network for classifying the CIFAR10 dataset, which has 3072 inputs, 8 hidden layers with 256 neurons each, and about 1.2 million neuronal parameters. An attack following the approach by Carlini et al. requires an exhaustive search over \(2^{256}\) possibilities. Our attack replaces this with our new techniques, which require only 30 min on a 256-core computer.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58734-4_1](https://doi.org/10.1007/978-3-031-58734-4_1)
## Ordering Transactions with Bounded Unfairness: Definitions, Complexity and Constructions.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-3].md#ordering-transactions-with-bounded-unfairness-definitions-complexity-and-constructions)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-3].md#ordering-transactions-with-bounded-unfairness-definitions-complexity-and-constructions)
### Authors
* Aggelos Kiayias, University of Edinburgh and IOG, Edinburgh, UK
* Nikos Leonardos, National and Kapodistrian University of Athens, Athens, Greece
* Yu Shen, University of Edinburgh, Edinburgh, UK
### Abstract
> An important consideration in the context of distributed ledger protocols is fairness in terms of transaction ordering. Recent work [Crypto 2020] revealed a connection of (receiver) order fairness to social choice theory and related impossibility results arising from the Condorcet paradox. As a result of the impossibility, various relaxations of order fairness were proposed in prior works. Given that distributed ledger protocols, especially those processing smart contracts, must serialize the input transactions, a natural objective is to minimize the distance (in terms of number of transactions) between any pair of unfairly ordered transactions in the output ledger — a concept we call bounded unfairness. In state machine replication (SMR) parlance this asks for minimizing the number of unfair state updates occurring before the processing of any request. This unfairness minimization objective gives rise to a natural class of parametric order fairness definitions that has not been studied before. As we observe, previous realizable relaxations of order fairness do not yield good unfairness bounds.
> 
> Achieving optimal order fairness in the sense of bounded unfairness turns out to be connected to the graph theoretic properties of the underlying transaction dependency graph and specifically the bandwidth metric of strongly connected components in this graph. This gives rise to a specific instance of the definition that we call “directed bandwidth order-fairness” which we show that it captures the best possible that any ledger protocol can achieve in terms of bounding unfairness. We prove ordering transactions in this fashion is NP-hard and non-approximable for any constant ratio. Towards realizing the property, we put forth a new distributed ledger protocol called Taxis that achieves directed bandwidth order-fairness. We present two variations, one that matches the property perfectly but (necessarily) lacks in performance and liveness, and another that achieves liveness and better complexity while offering a slightly relaxed version of the property. Finally, we comment on applications of our work to social choice, a direction which we believe to be of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58734-4_2](https://doi.org/10.1007/978-3-031-58734-4_2)
## Asymptotically Optimal Message Dissemination with Applications to Blockchains.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-3].md#asymptotically-optimal-message-dissemination-with-applications-to-blockchains)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-3].md#asymptotically-optimal-message-dissemination-with-applications-to-blockchains)
### Authors
* Chen-Da Liu-Zhang, Lucerne University of Applied Sciences and Arts & Web3 Foundation, Zug, Switzerland
* Christian Matt, Primev, Steinhausen, Switzerland
* Søren Eller Thomsen, Partisia, Aarhus, Denmark
### Abstract
> Messages in large-scale networks such as blockchain systems are typically disseminated using flooding protocols, in which parties send the message to a random set of peers until it reaches all parties. Optimizing the communication complexity of such protocols and, in particular, the per-party communication complexity is of primary interest since nodes in a network are often subject to bandwidth constraints. Previous flooding protocols incur a per-party communication complexity of \(\varOmega (l\cdot \gamma ^{-1} \cdot (\log (n) + \kappa ))\) bits to disseminate an l-bit message among n parties with security parameter \(\kappa \) when it is guaranteed that a \(\gamma \) fraction of the parties remain honest. In this work, we present the first flooding protocols with a per-party communication complexity of \(O(l\cdot \gamma ^{-1})\) bits. We further show that this is asymptotically optimal and that our protocols can be instantiated provably securely in the usual setting for proof-of-stake blockchains.
> 
> To demonstrate that one of our new protocols is not only asymptotically optimal but also practical, we perform several probabilistic simulations to estimate the concrete complexity for given parameters. Our simulations show that our protocol significantly improves the per-party communication complexity over the state-of-the-art for practical parameters. Hence, for given bandwidth constraints, our results allow to, e.g., increase the block size, improving the overall throughput of a blockchain.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58734-4_3](https://doi.org/10.1007/978-3-031-58734-4_3)
## Proof-of-Work-Based Consensus in Expected-Constant Time.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-3].md#proof-of-work-based-consensus-in-expected-constant-time)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-3].md#proof-of-work-based-consensus-in-expected-constant-time)
### Authors
* Juan Garay, Texas A &M University, College Station, USA
* Aggelos Kiayias, University of Edinburgh and IOG, Edinburgh, UK
* Yu Shen, University of Edinburgh, Edinburgh, UK
### Abstract
> In the traditional consensus problem (aka Byzantine agreement), parties are required to agree on a common value despite the malicious behavior of some of them, subject to the condition that if all the honest parties start the execution with the same value, then that should be the outcome. This problem has been extensively studied by both the distributed computing and cryptographic protocols communities. With the advent of blockchains, whose main application—a distributed ledger—essentially requires that miners agree on their views, new techniques have been proposed to solve the problem, and in particular in so-called “permissionless” environments, where parties are not authenticated or have access to point-to-point channels and, further, may come and go as they please.
> 
> So far, the fastest way to achieve consensus in the proof-of-work (PoW)-based setting of Bitcoin, takes \(O(\textsf{polylog} \kappa )\) number of rounds, where \(\kappa \) is the security parameter. We present the first protocol in this setting that requires expected-constant number of rounds. Furthermore, we show how to apply securely sequential composition in order to yield a fast distributed ledger protocol that settles all transactions in expected-constant time. Our result is based on a novel instantiation of “m-for-1 PoWs” on parallel chains that facilitates our basic building block, Chain-King Consensus. The techniques we use, via parallel chains, to port classical protocol design elements (such as Phase-King Consensus, super-phase sequential composition and others) into the permissionless setting may be of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58734-4_4](https://doi.org/10.1007/978-3-031-58734-4_4)
## A Holistic Security Analysis of Monero Transactions.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-3].md#a-holistic-security-analysis-of-monero-transactions)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-3].md#a-holistic-security-analysis-of-monero-transactions)
### Authors
* Cas Cremers, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Julian Loss, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Benedikt Wagner, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Benedikt Wagner, Saarland University, Saarbrücken, Germany
### Abstract
> Monero is a popular cryptocurrency with strong privacy guarantees for users’ transactions. At the heart of Monero’s privacy claims lies a complex transaction system called RingCT, which combines several building blocks such as linkable ring signatures, homomorphic commitments, and range proofs, in a unique fashion. In this work, we provide the first rigorous security analysis for RingCT (as given in Zero to Monero, v2.0.0, 2020) in its entirety. This is in contrast to prior works that only provided security arguments for parts of RingCT.
> 
> To analyze Monero’s transaction system, we introduce the first holistic security model for RingCT. We then prove the security of RingCT in our model. Our framework is modular: it allows to view RingCT as a combination of various different sub-protocols. Our modular approach has the benefit that these components can be easily updated in future versions of RingCT, with only minor modifications to our analysis.
> 
> At a technical level, we split our analysis in two parts. First, we identify which security notions for building blocks are needed to imply security for the whole system. Interestingly, we observe that existing and well-established notions (e.g., for the linkable ring signature) are insufficient. Second, we analyze all building blocks as implemented in Monero and prove that they satisfy our new notions. Here, we leverage the algebraic group model to overcome subtle problems in the analysis of the linkable ring signature component. As another technical highlight, we show that our security goals can be mapped to a suitable graph problem, which allows us to take advantage of the theory of network flows in our analysis. This new approach is also useful for proving security of other cryptocurrencies.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58734-4_5](https://doi.org/10.1007/978-3-031-58734-4_5)
## Algorithms for Matrix Code and Alternating Trilinear Form Equivalences via New Isomorphism Invariants.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-3].md#algorithms-for-matrix-code-and-alternating-trilinear-form-equivalences-via-new-isomorphism-invariants)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-3].md#algorithms-for-matrix-code-and-alternating-trilinear-form-equivalences-via-new-isomorphism-invariants)
### Authors
* Anand Kumar Narayanan, SandboxAQ, Palo Alto, USA
* Youming Qiao, Centre for Quantum Software and Information, School of Computer Science, Faculty of Engineering and Information Technology, University of Technology Sydney, Ultimo, NSW, Australia
* Gang Tang, Centre for Quantum Software and Information, School of Computer Science, Faculty of Engineering and Information Technology, University of Technology Sydney, Ultimo, NSW, Australia
* Gang Tang, University of Birmingham, Birmingham, UK
### Abstract
> We devise algorithms for finding equivalences of trilinear forms over finite fields modulo linear group actions. Our focus is on two problems under this umbrella, Matrix Code Equivalence (MCE) and Alternating Trilinear Form Equivalence (ATFE), since their hardness is the foundation of the NIST round-1 signature candidates MEDS and ALTEQ respectively.
> 
> We present new algorithms for MCE and ATFE, which are further developments of the algorithms for polynomial isomorphism and alternating trilinear form equivalence, in particular by Bouillaguet, Fouque, and Véber (Eurocrypt 2013), and Beullens (Crypto 2023). Key ingredients in these algorithms are new easy-to-compute distinguishing invariants under the respective group actions.
> 
> For MCE, we associate new isomorphism invariants to corank-1 points of matrix codes, which lead to a birthday-type algorithm. We present empirical justifications that these isomorphism invariants are easy-to-compute and distinguishing, and provide an implementation of this algorithm. This algorithm has some implications to the security of MEDS.
> 
> The invariant function for ATFE is similar, except it is associated with lower rank points. Modulo certain assumptions on turning the invariant function into canonical forms, our algorithm for ATFE improves on the runtime of the previously best known algorithm of Beullens (Crypto 2023).
> 
> Finally, we present quantum variants of our classical algorithms with cubic runtime improvements.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58734-4_6](https://doi.org/10.1007/978-3-031-58734-4_6)
## Generalized Feistel Ciphers for Efficient Prime Field Masking.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-3].md#generalized-feistel-ciphers-for-efficient-prime-field-masking)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-3].md#generalized-feistel-ciphers-for-efficient-prime-field-masking)
### Authors
* Lorenzo Grassi, Ruhr University Bochum, Bochum, Germany
* Loïc Masure, LIRMM, Univ. Montpellier, CNRS, Montpellier, France
* Pierrick Méaux, Luxembourg University, Esch-sur-Alzette, Luxembourg
* Thorben Moos, Crypto Group, ICTEAM Institute, UCLouvain, Louvain-la-Neuve, Belgium
* François-Xavier Standaert, Crypto Group, ICTEAM Institute, UCLouvain, Louvain-la-Neuve, Belgium
### Abstract
> A recent work from Eurocrypt 2023 suggests that prime-field masking has excellent potential to improve the efficiency vs. security tradeoff of masked implementations against side-channel attacks, especially in contexts where physical leakages show low noise. We pick up on the main open challenge that this seed result leads to, namely the design of an optimized prime cipher able to take advantage of this potential. Given the interest of tweakable block ciphers with cheap inverses in many leakage-resistant designs, we start by describing the FPM (Feistel for Prime Masking) family of tweakable block ciphers based on a generalized Feistel structure. We then propose a first instantiation of FPM, which we denote as small-pSquare. It builds on the recent observation that the square operation (which is non-linear in \(\mathbb {F}_p\)) can lead to masked gadgets that are more efficient than those for multiplication, and is tailored for efficient masked implementations in hardware. We analyze the mathematical security of the FPM family of ciphers and the small-pSquare instance, trying to isolate the parts of our study that can be re-used for other instances. We additionally evaluate the implementation features of small-pSquare by comparing the efficiency vs. security tradeoff of masked FPGA circuits against those of a state-of-the art binary cipher, namely SKINNY, confirming significant gains in relevant contexts.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58734-4_7](https://doi.org/10.1007/978-3-031-58734-4_7)
## A Novel Framework for Explainable Leakage Assessment.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-3].md#a-novel-framework-for-explainable-leakage-assessment)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-3].md#a-novel-framework-for-explainable-leakage-assessment)
### Authors
* Si Gao, Digital Age Research Center (D!ARC), University of Klagenfurt, Klagenfurt, Austria
* Elisabeth Oswald, Digital Age Research Center (D!ARC), University of Klagenfurt, Klagenfurt, Austria
* Elisabeth Oswald, School of Computer Science, University of Birmingham, Birmingham, UK
### Abstract
> Schemes such as Common Criteria or FIPS 140-3 require the assessment of cryptographic implementations with respect to side channels at high security levels. Instead of a “penetration testing” style approach where specific tests are carried out, FIPS 140-3 relies on non-specific “leakage assessment” to identify potential side channel leaks in implementations of symmetric schemes. Leakage assessment, as it is understood today, is based on a simple leakage detection testing regime. Leakage assessment to date, provides no evidence whether or not the potential leakage is exploitable in a concrete attack: if a device fails the test, (and therefore certification under the FIPS 140-3 scheme) it remains unclear why it fails.
> 
> We propose a novel assessment regime that is based on a different statistical rational than the existing leakage detection tests. Our statistical approach enables non-specific detection (i.e. we do not require to specify intermediate values) whilst simultaneously generating evidence for designing an attack vector that exploits identified leakage. We do this via an iterative approach, based on building and comparing nested regression models. We also provide, for the first time, concrete definitions for concepts such as key leakage, exploitable leakage and explainable leakage. Finally, we illustrate our novel leakage assessment framework in the context of two open source masked software implementations on a processor that is known to exhibit micro-architectural leakage.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58734-4_8](https://doi.org/10.1007/978-3-031-58734-4_8)
## Integrating Causality in Messaging Channels.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-3].md#integrating-causality-in-messaging-channels)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-3].md#integrating-causality-in-messaging-channels)
### Authors
* Shan Chen, Southern University of Science and Technology, Shenzhen, China
* Marc Fischlin, Cryptoplexity, Technische Universität Darmstadt, Darmstadt, Germany
### Abstract
> Causal reasoning plays an important role in the comprehension of communication, but it has been elusive so far how causality should be properly preserved by instant messaging services. To the best of our knowledge, causality preservation is not even treated as a desired security property by most (if not all) existing secure messaging protocols like Signal. This is probably due to the intuition that causality seems already preserved when all received messages are intact and displayed according to their sending order. Our starting point is to notice that this intuition is wrong.
> 
> Until now, for messaging channels (where conversations take place), both the proper causality model and the provably secure constructions have been left open. Our work fills this gap, with the goal to facilitate the formal understanding of causality preservation in messaging.
> 
> First, we focus on the common two-user secure messaging channels and model the desired causality preservation property. We take the popular Signal protocol as an example and analyze the causality security of its cryptographic core (the double-ratchet mechanism). We show its inadequacy with a simple causality attack, then fix it such that the resulting Signal channel is causality-preserving, even in a strong sense that guarantees post-compromise security. Our fix is actually generic: it can be applied to any bidirectional channel to gain strong causality security.
> 
> Then, we model causality security for the so-called message franking channels. Such a channel additionally enables end users to report individual abusive messages to a server (e.g., the service provider), where this server relays the end-to-end-encrypted communication between users. Causality security in this setting further allows the server to retrieve the necessary causal dependencies of each reported message, essentially extending isolated reported messages to message flows. This has great security merit for dispute resolution, because a benign message may be deemed abusive when isolated from the context. As an example, we apply our model to analyze Facebook’s message franking scheme. We show that a malicious user can easily trick Facebook (i.e., the server) to accuse an innocent user. Then we fix this issue by amending the underlying message franking channel to preserve the desired causality.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58734-4_9](https://doi.org/10.1007/978-3-031-58734-4_9)
## Symmetric Signcryption and E2EE Group Messaging in Keybase.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-3].md#symmetric-signcryption-and-e2ee-group-messaging-in-keybase)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-3].md#symmetric-signcryption-and-e2ee-group-messaging-in-keybase)
### Authors
* Joseph Jaeger, School of Cybersecurity and Privacy, Georgia Institute of Technology, Atlanta, GA, USA
* Akshaya Kumar, School of Cybersecurity and Privacy, Georgia Institute of Technology, Atlanta, GA, USA
* Igors Stepanovs, Riga, Latvia
### Abstract
> We introduce a new cryptographic primitive called symmetric signcryption, which differs from traditional signcryption because the sender and recipient share a secret key. We prove that a natural composition of symmetric encryption and signatures achieves strong notions of security against attackers that can learn and control many keys. We then identify that the core encryption algorithm of the Keybase encrypted messaging protocol can be modeled as a symmetric signcryption scheme. We prove the security of this algorithm, though our proof requires assuming non-standard, brittle security properties of the underlying primitives.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58734-4_10](https://doi.org/10.1007/978-3-031-58734-4_10)
## Trapdoor Memory-Hard Functions.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-3].md#trapdoor-memory-hard-functions)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-3].md#trapdoor-memory-hard-functions)
### Authors
* Benedikt Auerbach, Institute of Science and Technology Austria, Klosterneuburg, Austria
* Christoph U. Günther, Institute of Science and Technology Austria, Klosterneuburg, Austria
* Krzysztof Pietrzak, Institute of Science and Technology Austria, Klosterneuburg, Austria
### Abstract
> Memory-hard functions (MHF) are functions whose evaluation provably requires a lot of memory. While MHFs are an unkeyed primitive, it is natural to consider the notion of trapdoor MHFs (TMHFs). A TMHF is like an MHF, but when sampling the public parameters one also samples a trapdoor which allows evaluating the function much cheaper.
> 
> Biryukov and Perrin (Asiacrypt’17) were the first to consider TMHFs and put forth a candidate TMHF construction called \(\textsc {Diodon}\) that is based on the \(\textsc {Scrypt}\) MHF (Percival, BSDCan’09). To allow for a trapdoor, \(\textsc {Scrypt}\)’s initial hash chain is replaced by a sequence of squares in a group of unknown order where the order of the group is the trapdoor. For a length n sequence of squares and a group of order N, \(\textsc {Diodon}\)’s cumulative memory complexity (CMC) is \(O(n^2\log N)\) without the trapdoor and \(O(n \log (n) \log (N)^2)\) with knowledge of it.
> 
> While \(\textsc {Scrypt}\) is proven to be optimally memory-hard in the random oracle model (Alwen et al., Eurocrypt’17), \(\textsc {Diodon}\)’s memory-hardness has not been proven so far. In this work, we fill this gap by rigorously analyzing a specific instantiation of \(\textsc {Diodon}\). We show that its CMC is lower bounded by \(\varOmega (\frac{n^2}{\log n} \log N)\) which almost matches the upper bound. Our proof is based Alwen et al.’s lower bound on \(\textsc {Scrypt}\)’s CMC but requires non-trivial modifications due to the algebraic structure of \(\textsc {Diodon}\). Most importantly, our analysis involves a more elaborate compression argument and a solvability criterion for certain systems of Diophantine equations.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58734-4_11](https://doi.org/10.1007/978-3-031-58734-4_11)
## Probabilistically Checkable Arguments for All NP.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-3].md#probabilistically-checkable-arguments-for-all-np)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-3].md#probabilistically-checkable-arguments-for-all-np)
### Authors
* Shany Ben-David, Department of Computer Science, Bar-Ilan University, Petah Tikva, Israel
### Abstract
> A probabilistically checkable argument (\(\textsf{PCA}\)) is a computational relaxation of \(\textsf{PCP}\)s, where soundness is guaranteed to hold only for false proofs generated by a computationally bounded adversary. The advantage of \(\textsf{PCA}\)s is that they are able to overcome the limitations of \(\textsf{PCP}\)s. A succinct \(\textsf{PCA}\) has a proof length that is polynomial in the witness length (and is independent of the non-deterministic verification time), which is impossible for \(\textsf{PCP}\)s, under standard complexity assumptions. Bronfman and Rothblum (ITCS 2022) constructed succinct \(\textsf{PCA}\)s for \(\textsf{NC}\) that are publicly-verifiable and have constant query complexity under the sub-exponential hardness of \(\textsf{LWE}\).
> 
> We construct a publicly-verifiable succinct \(\textsf{PCA}\) with constant query complexity for all \(\textsf{NP}\) in the adaptive security setting. Our \(\textsf{PCA}\) scheme offers several improvements compared to the Bronfman and Rothblum construction: (1) it applies to all problems in \(\textsf{NP}\), (2) it achieves adaptive security, and (3) it can be realized under any of the following assumptions: the polynomial hardness of \(\textsf{LWE}\); O(1)-\(\textsf{LIN}\); or sub-exponential \(\textsf{DDH}\).
> 
> Moreover, our \(\textsf{PCA}\) scheme has a succinct prover, which means that for any \(\textsf{NP}\) relation that can be verified in time T and space S, the proof can be generated in time \(O_{\lambda ,m}(T\cdot \textrm{polylog}(T))\) and space \(O_{\lambda ,m}(S\cdot \textrm{polylog}(T))\). Here, \({O}_{\lambda ,m}\) accounts for polynomial factors in the security parameter and in the size of the witness. En route, we construct a new complexity-preserving \(\mathsf {RAM~Delegation}\) scheme that is used in our \(\textsf{PCA}\) construction and may be of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58734-4_12](https://doi.org/10.1007/978-3-031-58734-4_12)
## The Complexity of Algebraic Algorithms for LWE.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-3].md#the-complexity-of-algebraic-algorithms-for-lwe)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-3].md#the-complexity-of-algebraic-algorithms-for-lwe)
### Authors
* Matthias Johann Steiner, Alpen-Adria-Universität Klagenfurt, Klagenfurt am Wörthersee, Austria
### Abstract
> Arora & Ge introduced a noise-free polynomial system to compute the secret of a Learning With Errors (LWE) instance via linearization. Albrecht et al. later utilized the Arora-Ge polynomial model to study the complexity of Gröbner basis computations on LWE polynomial systems under the assumption of semi-regularity. In this paper we revisit the Arora-Ge polynomial and prove that it satisfies a genericity condition recently introduced by Caminata & Gorla, called being in generic coordinates. For polynomial systems in generic coordinates one can always estimate the complexity of DRL Gröbner basis computations in terms of the Castelnuovo-Mumford regularity and henceforth also via the Macaulay bound.
> 
> Moreover, we generalize the Gröbner basis algorithm of Semaev & Tenti to arbitrary polynomial systems with a finite degree of regularity. In particular, existence of this algorithm yields another approach to estimate the complexity of DRL Gröbner basis computations in terms of the degree of regularity. In practice, the degree of regularity of LWE polynomial systems is not known, though one can always estimate the lowest achievable degree of regularity. Consequently, from a designer’s worst case perspective this approach yields sub-exponential complexity estimates for general, binary secret and binary error LWE.
> 
> In recent works by Dachman-Soled et al. the hardness of LWE in the presence of side information was analyzed. Utilizing their framework we discuss how hints can be incorporated into LWE polynomial systems and how they affect the complexity of Gröbner basis computations.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58734-4_13](https://doi.org/10.1007/978-3-031-58734-4_13)
## Pauli Manipulation Detection Codes and Applications to Quantum Communication over Adversarial Channels.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-3].md#pauli-manipulation-detection-codes-and-applications-to-quantum-communication-over-adversarial-channels)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-3].md#pauli-manipulation-detection-codes-and-applications-to-quantum-communication-over-adversarial-channels)
### Authors
* Thiago Bergamaschi, Department of EECS, UC Berkeley, Berkeley, USA
### Abstract
> We introduce and explicitly construct a quantum error-detection code we coin a “Pauli Manipulation Detection” code (or PMD), which detects every Pauli error with high probability. We apply them to construct the first near-optimal codes for two tasks in quantum communication over adversarial channels.
> 
> Our main application is an approximate quantum code over qubits which can efficiently correct from a number of (worst-case) erasure errors approaching the quantum Singleton bound. Our construction is based on the composition of a PMD code with a stabilizer code which is list-decodable from erasures, a variant of the stabilizer list-decodable codes studied by Leung and Smith [49], and Bergamaschi et al. [17].
> 
> Our second application is a quantum authentication code for “qubit-wise” channels, which does not require a secret key. Remarkably, this gives an example of a task in quantum communication which is provably impossible classically. Our construction is based on a combination of PMD codes, stabilizer codes, and classical non-malleable codes (Dziembowski et al. [33]), and achieves “minimal redundancy” (rate \(1-o(1)\)).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58734-4_14](https://doi.org/10.1007/978-3-031-58734-4_14)
## Certified Everlasting Secure Collusion-Resistant Functional Encryption, and More.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-3].md#certified-everlasting-secure-collusion-resistant-functional-encryption-and-more)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-3].md#certified-everlasting-secure-collusion-resistant-functional-encryption-and-more)
### Authors
* Taiga Hiroka, Yukawa Institute for Theoretical Physics, Kyoto University, Kyoto, Japan
* Tomoyuki Morimae, Yukawa Institute for Theoretical Physics, Kyoto University, Kyoto, Japan
* Takashi Yamakawa, Yukawa Institute for Theoretical Physics, Kyoto University, Kyoto, Japan
* Fuyuki Kitagawa, NTT Social Informatics Laboratories, Tokyo, Japan
* Ryo Nishimaki, NTT Social Informatics Laboratories, Tokyo, Japan
* Takashi Yamakawa, NTT Social Informatics Laboratories, Tokyo, Japan
* Fuyuki Kitagawa, NTT Research Center for Theoretical Quantum Information, Atsugi, Japan
* Ryo Nishimaki, NTT Research Center for Theoretical Quantum Information, Atsugi, Japan
* Takashi Yamakawa, NTT Research Center for Theoretical Quantum Information, Atsugi, Japan
* Tapas Pal, Karlsruhe Institute of Technology, KASTEL Security Research Labs, Karlsruhe, Germany
### Abstract
> We study certified everlasting secure functional encryption (FE) and many other cryptographic primitives in this work. Certified everlasting security roughly means the following. A receiver possessing a quantum cryptographic object (such as ciphertext) can issue a certificate showing that the receiver has deleted the cryptographic object and information included in the object (such as plaintext) was lost. If the certificate is valid, the security is guaranteed even if the receiver becomes computationally unbounded after the deletion. Many cryptographic primitives are known to be impossible (or unlikely) to have information-theoretical security even in the quantum world. Hence, certified everlasting security is a nice compromise (intrinsic to quantum).
> 
> In this work, we define certified everlasting secure versions of FE, compute-and-compare obfuscation, predicate encryption (PE), secret-key encryption (SKE), public-key encryption (PKE), receiver non-committing encryption (RNCE), and garbled circuits. We also present the following constructions:
> 
> Adaptively certified everlasting secure collusion-resistant public-key FE for all polynomial-size circuits from indistinguishability obfuscation and one-way functions.
> 
> Adaptively certified everlasting secure bounded collusion-resistant public-key FE for \(\textsf{NC}^1\) circuits from standard PKE.
> 
> Certified everlasting secure compute-and-compare obfuscation from standard fully homomorphic encryption and standard compute-and-compare obfuscation.
> 
> Adaptively (resp., selectively) certified everlasting secure PE from standard adaptively (resp., selectively) secure attribute-based encryption and certified everlasting secure compute-and-compare obfuscation.
> 
> Certified everlasting secure SKE and PKE from standard SKE and PKE, respectively.
> 
> Cetified everlasting secure RNCE from standard PKE.
> 
> Cetified everlasting secure garbled circuits from standard SKE.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58734-4_15](https://doi.org/10.1007/978-3-031-58734-4_15)
## Early Stopping for Any Number of Corruptions.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-3].md#early-stopping-for-any-number-of-corruptions)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-3].md#early-stopping-for-any-number-of-corruptions)
### Authors
* Julian Loss, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Jesper Buus Nielsen, Aarhus University, Aarhus, Denmark
### Abstract
> Minimizing the round complexity of byzantine broadcast is a fundamental question in distributed computing and cryptography. In this work, we present the first early stopping byzantine broadcast protocol that tolerates up to \(t=n-1\) malicious corruptions and terminates in \(\mathcal {O}(\min \{f^2,t+1\})\) rounds for any execution with \(f\le t\) actual corruptions. Our protocol is deterministic, adaptively secure, and works assuming a plain public key infrastructure. Prior early-stopping protocols all either require honest majority or tolerate only up to \(t=(1-\epsilon )n\) malicious corruptions while requiring either trusted setup or strong number theoretic hardness assumptions. As our key contribution, we show a novel tool called a polariser that allows us to transfer certificate-based strategies from the honest majority setting to settings with a dishonest majority.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58734-4_16](https://doi.org/10.1007/978-3-031-58734-4_16)
