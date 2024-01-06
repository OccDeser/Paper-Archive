# Crypto[2019-2]
## The Communication Complexity of Threshold Private Set Intersection.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-2].md#the-communication-complexity-of-threshold-private-set-intersection)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#the-communication-complexity-of-threshold-private-set-intersection)
### Authors
* Satrajit Ghosh, Aarhus University, Aarhus, Denmark
* Mark Simkin, Aarhus University, Aarhus, Denmark
### Abstract
> Threshold private set intersection enables Alice and Bob who hold sets \(S_{\mathsf {A}}\) and \(S_{\mathsf {B}}\) of size n to compute the intersection \(S_{\mathsf {A}} \cap S_{\mathsf {B}} \) if the sets do not differ by more than some threshold parameter \(t\). In this work, we investigate the communication complexity of this problem and we establish the first upper and lower bounds. We show that any protocol has to have a communication complexity of \(\varOmega (t)\). We show that an almost matching upper bound of \(\tilde{\mathcal {O}}(t)\) can be obtained via fully homomorphic encryption. We present a computationally more efficient protocol based on weaker assumptions, namely additively homomorphic encryption, with a communication complexity of \(\tilde{\mathcal {O}}(t ^2)\). For applications like biometric authentication, where a given fingerprint has to have a large intersection with a fingerprint from a database, our protocols may result in significant communication savings.
> 
> Prior to this work, all previous protocols had a communication complexity of \(\varOmega (n)\). Our protocols are the first ones with communication complexities that mainly depend on the threshold parameter \(t\) and only logarithmically on the set size n.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_1](https://doi.org/10.1007/978-3-030-26951-7_1)
## Adaptively Secure MPC with Sublinear Communication Complexity.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-2].md#adaptively-secure-mpc-with-sublinear-communication-complexity)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#adaptively-secure-mpc-with-sublinear-communication-complexity)
### Authors
* Ran Cohen, Boston University, Boston, USA
* Ran Cohen, Northeastern University, Boston, USA
* Abhi Shelat, Northeastern University, Boston, USA
* Daniel Wichs, Northeastern University, Boston, USA
### Abstract
> A central challenge in the study of MPC is to balance between security guarantees, hardness assumptions, and resources required for the protocol. In this work, we study the cost of tolerating adaptive corruptions in MPC protocols under various corruption thresholds. In the strongest setting, we consider adaptive corruptions of an arbitrary number of parties (potentially all) and achieve the following results:
> 
> A two-round secure function evaluation (SFE) protocol in the CRS model, assuming LWE and indistinguishability obfuscation (iO). The communication, the CRS size, and the online-computation are sublinear in the size of the function. The iO assumption can be replaced by secure erasures. Previous results required either the communication or the CRS size to be polynomial in the function size.
> 
> Under the same assumptions, we construct a “Bob-optimized” 2PC (where Alice talks first, Bob second, and Alice learns the output). That is, the communication complexity and total computation of Bob are sublinear in the function size and in Alice’s input size. We prove impossibility of “Alice-optimized” protocols.
> 
> Assuming LWE, we bootstrap adaptively secure NIZK arguments to achieve proof size sublinear in the circuit size of the NP-relation.
> 
> On a technical level, our results are based on laconic function evaluation (LFE) (Quach, Wee, and Wichs, FOCS’18) and shed light on an interesting duality between LFE and FHE.
> 
> Next, we analyze adaptive corruptions of all-but-one of the parties and show a two-round SFE protocol in the threshold PKI model (where keys of a threshold FHE scheme are pre-shared among the parties) with communication complexity sublinear in the circuit size, assuming LWE and NIZK. Finally, we consider the honest-majority setting, and show a two-round SFE protocol with guaranteed output delivery under the same constraints.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_2](https://doi.org/10.1007/978-3-030-26951-7_2)
## Communication Lower Bounds for Statistically Secure MPC, With or Without Preprocessing.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-2].md#communication-lower-bounds-for-statistically-secure-mpc-with-or-without-preprocessing)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#communication-lower-bounds-for-statistically-secure-mpc-with-or-without-preprocessing)
### Authors
* Ivan Damgård, Computer Science, Aarhus University, Aarhus, Denmark
* Kasper Green Larsen, Computer Science, Aarhus University, Aarhus, Denmark
* Jesper Buus Nielsen, Computer Science, Aarhus University, Aarhus, Denmark
### Abstract
> We prove a lower bound on the communication complexity of unconditionally secure multiparty computation, both in the standard model with \(n=2t+1\) parties of which t are corrupted, and in the preprocessing model with \(n=t+1\). In both cases, we show that for any \(g \in \mathbb {N}\) there exists a Boolean circuit C with g gates, where any secure protocol implementing C must communicate \(\varOmega (n g)\) bits, even if only passive and statistical security is required. The results easily extends to constructing similar circuits over any fixed finite field. This shows that for all sizes of circuits, the O(n) overhead of all known protocols when t is maximal is inherent. It also shows that security comes at a price: the circuit we consider could namely be computed among n parties with communication only O(g) bits if no security was required. Our results extend to the case where the threshold t is suboptimal. For the honest majority case, this shows that the known optimizations via packed secret-sharing can only be obtained if one accepts that the threshold is \(t= (1/2 - c)n\) for a constant c. For the honest majority case, we also show an upper bound that matches the lower bound up to a constant factor (existing upper bounds are a factor \(\lg n\) off for Boolean circuits).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_3](https://doi.org/10.1007/978-3-030-26951-7_3)
## Communication-Efficient Unconditional MPC with Guaranteed Output Delivery.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-2].md#communication-efficient-unconditional-mpc-with-guaranteed-output-delivery)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#communication-efficient-unconditional-mpc-with-guaranteed-output-delivery)
### Authors
* Vipul Goyal, Carnegie Mellon University, Pittsburgh, USA
* Yifan Song, Carnegie Mellon University, Pittsburgh, USA
* Yanyi Liu, Tsinghua University, Beijing, China
### Abstract
> We study the communication complexity of unconditionally secure MPC with guaranteed output delivery over point-to-point channels for corruption threshold \(t < n/3\). We ask the question: “is it possible to construct MPC in this setting s.t. the communication complexity per multiplication gate is linear in the number of parties?” While a number of works have focused on reducing the communication complexity in this setting, the answer to the above question has remained elusive for over a decade.
> 
> We resolve the above question in the affirmative by providing an MPC with communication complexity \(O(Cn\kappa + n^3\kappa )\) where \(\kappa \) is the size of an element in the field, C is the size of the (arithmetic) circuit, and, n is the number of parties. This represents a strict improvement over the previously best known communication complexity of \(O(Cn\kappa +D_Mn^2\kappa +n^3\kappa )\) where \(D_M\) is the multiplicative depth of the circuit. To obtain this result, we introduce a novel technique called 4-consistent tuples of sharings which we believe to be of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_4](https://doi.org/10.1007/978-3-030-26951-7_4)
## Efficient Collision Attack Frameworks for RIPEMD-160.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-2].md#efficient-collision-attack-frameworks-for-ripemd-160)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#efficient-collision-attack-frameworks-for-ripemd-160)
### Authors
* Fukang Liu, Shanghai Key Laboratory of Trustworthy Computing, East China Normal University, Shanghai, China
* Gaoli Wang, Shanghai Key Laboratory of Trustworthy Computing, East China Normal University, Shanghai, China
* Zhenfu Cao, Shanghai Key Laboratory of Trustworthy Computing, East China Normal University, Shanghai, China
* Christoph Dobraunig, Graz University of Technology, Graz, Austria
* Christoph Dobraunig, Radboud University, Nijmegen, The Netherlands
* Florian Mendel, Infineon Technologies AG, Ludwigsburg, Germany
* Takanori Isobe, National Institute of Information and Communications Technology, Tokyo, Japan
* Fukang Liu, University of Hyogo, Kobe, Japan
* Takanori Isobe, University of Hyogo, Kobe, Japan
### Abstract
> RIPEMD-160 is an ISO/IEC standard and has been applied to generate the Bitcoin address with SHA-256. Due to the complex dual-stream structure, the first collision attack on reduced RIPEMD-160 presented by Liu, Mendel and Wang at Asiacrypt 2017 only reaches 30 steps, having a time complexity of \(2^{70}\). Apart from that, several semi-free-start collision attacks have been published for reduced RIPEMD-160 with the start-from-the-middle method. Inspired from such start-from-the middle structures, we propose two novel efficient collision attack frameworks for reduced RIPEMD-160 by making full use of the weakness of its message expansion. Those two frameworks are called dense-left-and-sparse-right (DLSR) framework and sparse-left-and-dense-right (SLDR) framework. As it turns out, the DLSR framework is more efficient than SLDR framework since one more step can be fully controlled, though with extra \(2^{32}\) memory complexity. To construct the best differential characteristics for the DLSR framework, we carefully build the linearized part of the characteristics and then solve the corresponding nonlinear part using a guess-and-determine approach. Based on the newly discovered differential characteristics, we provide colliding messages pairs for the first practical collision attacks on 30 and 31 (out of 80) steps of RIPEMD-160 with time complexity \(2^{35.9}\) and \(2^{41.5}\) respectively. In addition, benefiting from the partial calculation, we can attack 33 and 34 (out of 80) steps of RIPEMD-160 with time complexity \(2^{67.1}\) and \(2^{74.3}\) respectively. When applying the SLDR framework to the differential characteristic used in the Asiacrypt 2017 paper, we significantly improve the time complexity by a factor of \(2^{13}\). However, it still cannot compete with the results obtained from the DLSR framework. To the best of our knowledge, these are the best collision attacks on reduced RIPEMD-160 with respect to the number of steps, including the first colliding message pairs for 30 and 31 steps of RIPEMD-160.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_5](https://doi.org/10.1007/978-3-030-26951-7_5)
## Improving Attacks on Round-Reduced Speck32/64 Using Deep Learning.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-2].md#improving-attacks-on-round-reduced-speck32-64-using-deep-learning)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#improving-attacks-on-round-reduced-speck32-64-using-deep-learning)
### Authors
* Aron Gohr, Bundesamt für Sicherheit in der Informationstechnik (BSI), Bonn, Germany
### Abstract
> This paper has four main contributions. First, we calculate the predicted difference distribution of Speck32/64 with one specific input difference under the Markov assumption completely for up to eight rounds and verify that this yields a globally fairly good model of the difference distribution of Speck32/64. Secondly, we show that contrary to conventional wisdom, machine learning can produce very powerful cryptographic distinguishers: for instance, in a simple low-data, chosen plaintext attack on nine rounds of Speck, we present distinguishers based on deep residual neural networks that achieve a mean key rank roughly five times lower than an analogous classical distinguisher using the full difference distribution table. Thirdly, we develop a highly selective key search policy based on a variant of Bayesian optimization which, together with our neural distinguishers, can be used to reduce the remaining security of 11-round Speck32/64 to roughly 38 bits. This is a significant improvement over previous literature. Lastly, we show that our neural distinguishers successfully use features of the ciphertext pair distribution that are invisible to all purely differential distinguishers even given unlimited data.
> 
> While our attack is based on a known input difference taken from the literature, we also show that neural networks can be used to rapidly (within a matter of minutes on our machine) find good input differences without using prior human cryptanalysis. Supplementary code and data for this paper is available at https://github.com/agohr/deep_speck.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_6](https://doi.org/10.1007/978-3-030-26951-7_6)
## Correlation of Quadratic Boolean Functions: Cryptanalysis of All Versions of Full \mathsf MORUS.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-2].md#correlation-of-quadratic-boolean-functions-cryptanalysis-of-all-versions-of-full-mathsf-morus)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#correlation-of-quadratic-boolean-functions-cryptanalysis-of-all-versions-of-full-mathsf-morus)
### Authors
* Danping Shi, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Siwei Sun, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Lei Hu, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Danping Shi, Data Assurance and Communication Security Research Center, Chinese Academy of Sciences, Beijing, China
* Siwei Sun, Data Assurance and Communication Security Research Center, Chinese Academy of Sciences, Beijing, China
* Lei Hu, Data Assurance and Communication Security Research Center, Chinese Academy of Sciences, Beijing, China
* Siwei Sun, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Lei Hu, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Yu Sasaki, NTT Secure Platform Laboratories, Tokyo, Japan
* Chaoyun Li, imec-COSIC, Department Electrical Engineering (ESAT), KU Leuven, Leuven, Belgium
### Abstract
> We show that the correlation of any quadratic Boolean function can be read out from its so-called disjoint quadratic form. We further propose a polynomial-time algorithm that can transform an arbitrary quadratic Boolean function into its disjoint quadratic form. With this algorithm, the exact correlation of quadratic Boolean functions can be computed efficiently.
> 
> We apply this method to analyze the linear trails of \(\mathsf {MORUS}\) (one of the seven finalists of the CAESAR competition), which are found with the help of a generic model for linear trails of \(\mathsf {MORUS}\)-like key-stream generators. In our model, any tool for finding linear trails of block ciphers can be used to search for trails of \(\mathsf {MORUS}\)-like key-stream generators. As a result, a set of trails with correlation \(2^{-38}\) is identified for all versions of full \(\mathsf {MORUS}\), while the correlations of previously published best trails for \(\mathsf {MORUS}\)-640 and \(\mathsf {MORUS}\)-1280 are \(2^{-73}\) and \(2^{-76}\) respectively (ASIACRYPT 2018). This significantly improves the complexity of the attack on \(\mathsf {MORUS}\)-1280-256 from \(2^{152}\) to \(2^{76}\). These new trails also lead to the first distinguishing and message-recovery attacks on \(\mathsf {MORUS}\)-640-128 and \(\mathsf {MORUS}\)-1280-128 with surprisingly low complexities around \(2^{76}\).
> 
> Moreover, we observe that the condition for exploiting these trails in an attack can be more relaxed than previously thought, which shows that the new trails are superior to previously published ones in terms of both correlation and the number of ciphertext blocks involved.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_7](https://doi.org/10.1007/978-3-030-26951-7_7)
## Low-Memory Attacks Against Two-Round Even-Mansour Using the 3-XOR Problem.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-2].md#low-memory-attacks-against-two-round-even-mansour-using-the-3-xor-problem)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#low-memory-attacks-against-two-round-even-mansour-using-the-3-xor-problem)
### Authors
* Gaëtan Leurent, Inria, Paris, France
* Ferdinand Sibleyras, Inria, Paris, France
### Abstract
> The iterated Even-Mansour construction is an elegant construction that idealizes block cipher designs such as the AES. In this work we focus on the simplest variant, the 2-round Even-Mansour construction with a single key. This is the most minimal construction that offers security beyond the birthday bound: there is a security proof up to \(2^{2n/3}\) evaluations of the underlying permutations and encryption, and the best known attacks have a complexity of roughly \(2^n/n\) operations.
> 
> We show that attacking this scheme with block size n is related to the 3-XOR problem with element size \(\ell = 2n\), an important algorithmic problem that has been studied since the nineties. In particular the 3-XOR problem is known to require at least \(2^{\ell /3}\) queries, and the best known algorithms require around \(2^{\ell /2}/\ell \) operations: this roughly matches the known bounds for the 2-round Even-Mansour scheme.
> 
> Using this link we describe new attacks against the 2-round Even-Mansour scheme. In particular, we obtain the first algorithms where both the data and the memory complexity are significantly lower than \(2^{n}\). From a practical standpoint, previous works with a data and/or memory complexity close to \(2^n\) are unlikely to be more efficient than a simple brute-force search over the key. Our best algorithm requires just \(\lambda n\) known plaintext/ciphertext pairs, for some constant \(0< \lambda < 1\), \(2^n/\lambda n\) time, and \(2^{\lambda n}\) memory. For instance, with \(n=64\) and \(\lambda = 1/2\), the memory requirement is practical, and we gain a factor 32 over brute-force search. We also describe an algorithm with asymptotic complexity \(\mathcal {O}(2^{n} \ln ^2 n/n^2)\), improving the previous asymptotic complexity of \(\mathcal {O}(2^n/n)\), using a variant of the 3-SUM algorithm of Baran, Demaine, and Pǎtraşcu.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_8](https://doi.org/10.1007/978-3-030-26951-7_8)
## How to Record Quantum Queries, and Applications to Quantum Indifferentiability.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-2].md#how-to-record-quantum-queries-and-applications-to-quantum-indifferentiability)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#how-to-record-quantum-queries-and-applications-to-quantum-indifferentiability)
### Authors
* Mark Zhandry, Princeton University & NTT Research, Princeton, USA
### Abstract
> The quantum random oracle model (QROM) has become the standard model in which to prove the post-quantum security of random-oracle-based constructions. Unfortunately, none of the known proof techniques allow the reduction to record information about the adversary’s queries, a crucial feature of many classical ROM proofs, including all proofs of indifferentiability for hash function domain extension.
> 
> In this work, we give a new QROM proof technique that overcomes this “recording barrier”. We do so by giving a new “compressed oracle” which allows for efficient on-the-fly simulation of random oracles, roughly analogous to the usual classical simulation. We then use this new technique to give the first proof of quantum indifferentiability for the Merkle-Damgård domain extender for hash functions. We also give a proof of security for the Fujisaki-Okamoto transformation; previous proofs required modifying the scheme to include an additional hash term. Given the threat posed by quantum computers and the push toward quantum-resistant cryptosystems, our work represents an important tool for efficient post-quantum cryptosystems.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_9](https://doi.org/10.1007/978-3-030-26951-7_9)
## Quantum Security Proofs Using Semi-classical Oracles.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-2].md#quantum-security-proofs-using-semi-classical-oracles)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#quantum-security-proofs-using-semi-classical-oracles)
### Authors
* Andris Ambainis, University of Latvia, Riga, Latvia
* Mike Hamburg, Rambus Security Division, San Francisco, USA
* Dominique Unruh, University of Tartu, Tartu, Estonia
### Abstract
> We present an improved version of the one-way to hiding (O2H) Theorem by Unruh, J ACM 2015. Our new O2H Theorem gives higher flexibility (arbitrary joint distributions of oracles and inputs, multiple reprogrammed points) as well as tighter bounds (removing square-root factors, taking parallelism into account). The improved O2H Theorem makes use of a new variant of quantum oracles, semi-classical oracles, where queries are partially measured. The new O2H Theorem allows us to get better security bounds in several public-key encryption schemes.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_10](https://doi.org/10.1007/978-3-030-26951-7_10)
## Quantum Indistinguishability of Random Sponges.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-2].md#quantum-indistinguishability-of-random-sponges)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#quantum-indistinguishability-of-random-sponges)
### Authors
* Jan Czajkowski, QuSoft, University of Amsterdam, Amsterdam, The Netherlands
* Christian Schaffner, QuSoft, University of Amsterdam, Amsterdam, The Netherlands
* Andreas Hülsing, TU Eindhoven, Eindhoven, The Netherlands
### Abstract
> In this work we show that the sponge construction can be used to construct quantum-secure pseudorandom functions. As our main result we prove that random sponges are quantum indistinguishable from random functions. In this setting the adversary is given superposition access to the input-output behavior of the construction but not to the internal function. Our proofs hold under the assumption that the internal function is a random function or permutation. We then use this result to obtain a quantum-security version of a result by Andreeva, Daemen, Mennink, and Van Assche (FSE’15) which shows that a sponge that uses a secure PRP or PRF as internal function is a secure PRF. This result also proves that the recent attacks against CBC-MAC in the quantum-access model by Kaplan, Leurent, Leverrier, and Naya-Plasencia (Crypto’16) and Santoli, and Schaffner (QIC’16) can be prevented by introducing a state with a non-trivial inner part.
> 
> The proof of our main result is derived by analyzing the joint distribution of any q input-output pairs. Our method analyzes the statistical behavior of the considered construction in great detail. The used techniques might prove useful in future analysis of different cryptographic primitives considering quantum adversaries. Using Zhandry’s PRF/PRP switching lemma we then obtain that quantum indistinguishability also holds if the internal block function is a random permutation.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_11](https://doi.org/10.1007/978-3-030-26951-7_11)
## Revisiting Post-quantum Fiat-Shamir.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-2].md#revisiting-post-quantum-fiat-shamir)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#revisiting-post-quantum-fiat-shamir)
### Authors
* Qipeng Liu, Princeton University, Princeton, USA
* Mark Zhandry, Princeton University & NTT Research, Princeton, USA
### Abstract
> The Fiat-Shamir transformation is a useful approach to building non-interactive arguments (of knowledge) in the random oracle model. Unfortunately, existing proof techniques are incapable of proving the security of Fiat-Shamir in the quantum setting. The problem stems from (1) the difficulty of quantum rewinding, and (2) the inability of current techniques to adaptively program random oracles in the quantum setting. In this work, we show how to overcome the limitations above in many settings. In particular, we give mild conditions under which Fiat-Shamir is secure in the quantum setting. As an application, we show that existing lattice signatures based on Fiat-Shamir are secure without any modifications.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_12](https://doi.org/10.1007/978-3-030-26951-7_12)
## Security of the Fiat-Shamir Transformation in the Quantum Random-Oracle Model.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-2].md#security-of-the-fiat-shamir-transformation-in-the-quantum-random-oracle-model)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#security-of-the-fiat-shamir-transformation-in-the-quantum-random-oracle-model)
### Authors
* Jelle Don, Centrum Wiskunde & Informatica (CWI), Amsterdam, Netherlands
* Serge Fehr, Centrum Wiskunde & Informatica (CWI), Amsterdam, Netherlands
* Jelle Don, Institute for Logic, Language and Computation, University of Amsterdam, Amsterdam, Netherlands
* Christian Majenz, Institute for Logic, Language and Computation, University of Amsterdam, Amsterdam, Netherlands
* Christian Schaffner, Institute for Logic, Language and Computation, University of Amsterdam, Amsterdam, Netherlands
* Serge Fehr, Mathematical Institute, Leiden University, Leiden, Netherlands
* Serge Fehr, QuSoft, Amsterdam, Netherlands
* Christian Majenz, QuSoft, Amsterdam, Netherlands
* Christian Schaffner, QuSoft, Amsterdam, Netherlands
### Abstract
> The famous Fiat-Shamir transformation turns any public-coin three-round interactive proof, i.e., any so-called \(\Sigma {\text {-protocol}}\), into a non-interactive proof in the random-oracle model. We study this transformation in the setting of a quantum adversary that in particular may query the random oracle in quantum superposition.
> 
> Our main result is a generic reduction that transforms any quantum dishonest prover attacking the Fiat-Shamir transformation in the quantum random-oracle model into a similarly successful quantum dishonest prover attacking the underlying \(\Sigma {\text {-protocol}}\) (in the standard model). Applied to the standard soundness and proof-of-knowledge definitions, our reduction implies that both these security properties, in both the computational and the statistical variant, are preserved under the Fiat-Shamir transformation even when allowing quantum attacks. Our result improves and completes the partial results that have been known so far, but it also proves wrong certain claims made in the literature.
> 
> In the context of post-quantum secure signature schemes, our results imply that for any \(\Sigma {\text {-protocol}}\) that is a proof-of-knowledge against quantum dishonest provers (and that satisfies some additional natural properties), the corresponding Fiat-Shamir signature scheme is secure in the quantum random-oracle model. For example, we can conclude that the non-optimized version of Fish, which is the bare Fiat-Shamir variant of the NIST candidate Picnic, is secure in the quantum random-oracle model.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_13](https://doi.org/10.1007/978-3-030-26951-7_13)
## Unconditionally Secure Computation Against Low-Complexity Leakage.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-2].md#unconditionally-secure-computation-against-low-complexity-leakage)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#unconditionally-secure-computation-against-low-complexity-leakage)
### Authors
* Andrej Bogdanov, Chinese University of Hong Kong, Shatin, Hong Kong
* Yuval Ishai, Technion, Haifa, Israel
* Akshayaram Srinivasan, University of California, Berkeley, USA
### Abstract
> We consider the problem of constructing leakage-resilient circuit compilers that are secure against global leakage functions with bounded output length. By global, we mean that the leakage can depend on all circuit wires and output a low-complexity function (represented as a multi-output Boolean circuit) applied on these wires. In this work, we design compilers both in the stateless (a.k.a. single-shot leakage) setting and the stateful (a.k.a. continuous leakage) setting that are unconditionally secure against \(\mathsf {AC}^0\) leakage and similar low-complexity classes.
> 
> In the stateless case, we show that the original private circuits construction of Ishai, Sahai, and Wagner (Crypto 2003) is actually secure against \(\mathsf {AC}^0\) leakage. In the stateful case, we modify the construction of Rothblum (Crypto 2012), obtaining a simple construction with unconditional security. Prior works that designed leakage-resilient circuit compilers against \(\mathsf {AC}^0\) leakage had to rely either on secure hardware components (Faust et al., Eurocrypt 2010, Miles-Viola, STOC 2013) or on (unproven) complexity-theoretic assumptions (Rothblum, Crypto 2012).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_14](https://doi.org/10.1007/978-3-030-26951-7_14)
## Tight Leakage-Resilient CCA-Security from Quasi-Adaptive Hash Proof System.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-2].md#tight-leakage-resilient-cca-security-from-quasi-adaptive-hash-proof-system)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#tight-leakage-resilient-cca-security-from-quasi-adaptive-hash-proof-system)
### Authors
* Shuai Han, School of Electronic Information and Electrical Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Shengli Liu, School of Electronic Information and Electrical Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Lin Lyu, School of Electronic Information and Electrical Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Dawu Gu, School of Electronic Information and Electrical Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Shengli Liu, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Shengli Liu, Westone Cryptologic Research Center, Beijing, 100070, China
* Shuai Han, Ant Financial, Hangzhou, 310012, China
### Abstract
> We propose the concept of quasi-adaptive hash proof system (QAHPS), where the projection key is allowed to depend on the specific language for which hash values are computed. We formalize leakage-resilient(LR)-ardency for QAHPS by defining two statistical properties, including LR-\(\langle \mathscr {L}_0, \mathscr {L}_1 \rangle \)-universal and LR-\(\langle \mathscr {L}_0, \mathscr {L}_1 \rangle \)-key-switching.
> 
> We provide a generic approach to tightly leakage-resilient CCA (LR-CCA) secure public-key encryption (PKE) from LR-ardent QAHPS. Our approach is reminiscent of the seminal work of Cramer and Shoup (Eurocrypt’02), and employ three QAHPS schemes, one for generating a uniform string to hide the plaintext, and the other two for proving the well-formedness of the ciphertext. The LR-ardency of QAHPS makes possible the tight LR-CCA security. We give instantiations based on the standard k-Linear (k-LIN) assumptions over asymmetric and symmetric pairing groups, respectively, and obtain fully compact PKE with tight LR-CCA security. The security loss is \({{O}}(\log {Q_{{e}}})\) where \({Q_{{e}}}\) denotes the number of encryption queries. Specifically, our tightly LR-CCA secure PKE instantiation from SXDH has only 4 group elements in the public key and 7 group elements in the ciphertext, thus is the most efficient one.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_15](https://doi.org/10.1007/978-3-030-26951-7_15)
## Non-malleable Secret Sharing in the Computational Setting: Adaptive Tampering, Noisy-Leakage Resilience, and Improved Rate.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-2].md#non-malleable-secret-sharing-in-the-computational-setting-adaptive-tampering-noisy-leakage-resilience-and-improved-rate)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#non-malleable-secret-sharing-in-the-computational-setting-adaptive-tampering-noisy-leakage-resilience-and-improved-rate)
### Authors
* Antonio Faonio, IMDEA Software Institute, Madrid, Spain
* Daniele Venturi, Department of Computer Science, Sapienza University of Rome, Rome, Italy
### Abstract
> We revisit the concept of non-malleable secret sharing (Goyal and Kumar, STOC 2018) in the computational setting. In particular, under the assumption of one-to-one one-way functions, we exhibit a computationally private, threshold secret sharing scheme satisfying all of the following properties.
> 
> Continuous non-malleability: No computationally-bounded adversary tampering independently with all the shares can produce mauled shares that reconstruct to a value related to the original secret. This holds even in case the adversary can tamper continuously, for an unbounded polynomial number of times, with the same target secret sharing, where the next sequence of tampering functions, as well as the subset of shares used for reconstruction, can be chosen adaptively based on the outcome of previous reconstructions.
> 
> Resilience to noisy leakage: Non-malleability holds even if the adversary can additionally leak information independently from all the shares. There is no bound on the length of leaked information, as long as the overall leakage does not decrease the min-entropy of each share by too much.
> 
> Improved rate: The information rate of our final scheme, defined as the ratio between the size of the message and the maximal size of a share, asymptotically approaches 1 when the message length goes to infinity.
> 
> Previous constructions achieved information-theoretic security, sometimes even for arbitrary access structures, at the price of at least one of the following limitations: (i) Non-malleability only holds against one-time tampering attacks; (ii) Non-malleability holds against a bounded number of tampering attacks, but both the choice of the tampering functions and of the sets used for reconstruction is non-adaptive; (iii) Information rate asymptotically approaching zero; (iv) No security guarantee in the presence of leakage.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_16](https://doi.org/10.1007/978-3-030-26951-7_16)
## Leakage Resilient Secret Sharing and Applications.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-2].md#leakage-resilient-secret-sharing-and-applications)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#leakage-resilient-secret-sharing-and-applications)
### Authors
* Akshayaram Srinivasan, University of California, Berkeley, USA
* Prashant Nalini Vasudevan, University of California, Berkeley, USA
### Abstract
> A secret sharing scheme allows a dealer to share a secret among a set of n parties such that any authorized subset of the parties can recover the secret, while any unauthorized subset learns no information about the secret. A leakage-resilient secret sharing scheme (introduced in independent works by Goyal and Kumar, STOC ’18 and Benhamouda, Degwekar, Ishai and Rabin, CRYPTO ’18) additionally requires the secrecy to hold against every unauthorized set of parties even if they obtain some bounded leakage from every other share. The leakage is said to be local if it is computed independently for each share. So far, the only known constructions of local leakage resilient secret sharing schemes are for threshold access structures for very low (O(1)) or very high (\(n -o(\log n)\)) thresholds.
> 
> In this work, we give a compiler that takes a secret sharing scheme for any monotone access structure and produces a local leakage resilient secret sharing scheme for the same access structure, with only a constant-factor asymptotic blow-up in the sizes of the shares. Furthermore, the resultant secret sharing scheme has optimal leakage-resilience rate, i.e., the ratio between the leakage tolerated and the size of each share can be made arbitrarily close to 1. Using this secret sharing scheme as the main building block, we obtain the following results:
> 
> Rate Preserving Non-Malleable Secret Sharing. We give a compiler that takes any secret sharing scheme for a 4-monotone access structure (A 4-monotone access structure has the property that any authorized set has size at least 4.) with rate R and converts it into a non-malleable secret sharing scheme for the same access structure with rate \(\varOmega (R)\). The previous such non-zero rate construction (Badrinarayanan and Srinivasan, EUROCRYPT ’19) achieved a rate of \(\varTheta (R/{t_{\max }\log ^2 n})\), where \(t_{\max }\) is the maximum size of any minimal set in the access structure. As a special case, for any threshold \(t \ge 4\) and an arbitrary \(n \ge t\), we get the first constant-rate construction of t-out-of-n non-malleable secret sharing.
> 
> Leakage-Tolerant Multiparty Computation for General Interaction Patterns. For any function f, we give a reduction from constructing a leakage-tolerant secure multi-party computation protocol for computing f that obeys any given interaction pattern to constructing a secure (but not necessarily leakage-tolerant) protocol for a related function that obeys the star interaction pattern. Together with the known results for the star interaction pattern, this gives leakage tolerant MPC for any interaction pattern with statistical/computational security. This improves upon the result of (Halevi et al., ITCS 2016), who presented such a reduction in a leak-free environment.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_17](https://doi.org/10.1007/978-3-030-26951-7_17)
## Stronger Leakage-Resilient and Non-Malleable Secret Sharing Schemes for General Access Structures.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-2].md#stronger-leakage-resilient-and-non-malleable-secret-sharing-schemes-for-general-access-structures)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#stronger-leakage-resilient-and-non-malleable-secret-sharing-schemes-for-general-access-structures)
### Authors
* Ivan Damgård, Aarhus University, Aarhus, Denmark
* Jesper Buus Nielsen, Aarhus University, Aarhus, Denmark
* Mark Simkin, Aarhus University, Aarhus, Denmark
* João Ribeiro, Imperial College London, London, UK
* Divesh Aggarwal, National University of Singapore, Singapore, Singapore
* Maciej Obremski, National University of Singapore, Singapore, Singapore
* Erick Purwanto, National University of Singapore, Singapore, Singapore
### Abstract
> In this work we present a collection of compilers that take secret sharing schemes for an arbitrary access structure as input and produce either leakage-resilient or non-malleable secret sharing schemes for the same access structure. A leakage-resilient secret sharing scheme hides the secret from an adversary, who has access to an unqualified set of shares, even if the adversary additionally obtains some size-bounded leakage from all other secret shares. A non-malleable secret sharing scheme guarantees that a secret that is reconstructed from a set of tampered shares is either equal to the original secret or completely unrelated. To the best of our knowledge we present the first generic compiler for leakage-resilient secret sharing for general access structures. In the case of non-malleable secret sharing, we strengthen previous definitions, provide separations between them, and construct a non-malleable secret sharing scheme for general access structures that fulfills the strongest definition with respect to independent share tampering functions. More precisely, our scheme is secure against concurrent tampering: The adversary is allowed to (non-adaptively) tamper the shares multiple times, and in each tampering attempt can freely choose the qualified set of shares to be used by the reconstruction algorithm to reconstruct the tampered secret. This is a strong analogue of the multiple-tampering setting for split-state non-malleable codes and extractors.
> 
> We show how to use leakage-resilient and non-malleable secret sharing schemes to construct leakage-resilient and non-malleable threshold signatures. Classical threshold signatures allow to distribute the secret key of a signature scheme among a set of parties, such that certain qualified subsets can sign messages. We construct threshold signature schemes that remain secure even if an adversary leaks from or tampers with all secret shares.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_18](https://doi.org/10.1007/978-3-030-26951-7_18)
## Memory-Hard Functions from Cryptographic Primitives.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-2].md#memory-hard-functions-from-cryptographic-primitives)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#memory-hard-functions-from-cryptographic-primitives)
### Authors
* Binyi Chen, UC Santa Barbara, Santa Barbara, USA
* Stefano Tessaro, University of Washington, Seattle, USA
### Abstract
> Memory-hard functions (MHFs) are moderately-hard functions which enforce evaluation costs both in terms of time and memory (often, in form of a trade-off). They are used e.g. for password protection, password-based key-derivation, and within cryptocurrencies, and have received a considerable amount of theoretical scrutiny over the last few years. However, analyses see MHFs as modes of operation of some underlying hash function \(\mathcal {H}\), modeled as a monolithic random oracle. This is however a very strong assumption, as such hash functions are built from much simpler primitives, following somewhat ad-hoc design paradigms.
> 
> This paper initiates the study of how to securely instantiate \(\mathcal {H}\) within MHF designs using common cryptographic primitives like block ciphers, compression functions, and permutations. Security here will be in a model in which the adversary has parallel access to an idealized version of the underlying primitive. We will provide provably memory-hard constructions from all the aforementioned primitives. Our results are generic, in that we will rely on hard-to-pebble graphs designed in prior works to obtain our constructions.
> 
> One particular challenge we encounter is that \(\mathcal {H}\) is usually required to have large outputs (to increase memory hardness without changing the description size of MHFs), whereas the underlying primitives generally have small output sizes.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_19](https://doi.org/10.1007/978-3-030-26951-7_19)
## Data-Independent Memory Hard Functions: New Attacks and Stronger Constructions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-2].md#data-independent-memory-hard-functions-new-attacks-and-stronger-constructions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#data-independent-memory-hard-functions-new-attacks-and-stronger-constructions)
### Authors
* Jeremiah Blocki, Purdue University, West Lafayette, USA
* Ben Harsha, Purdue University, West Lafayette, USA
* Seunghoon Lee, Purdue University, West Lafayette, USA
* Lu Xing, Purdue University, West Lafayette, USA
* Siteng Kang, Penn State University, State College, USA
* Samson Zhou, Indiana University, Bloomington, USA
### Abstract
> Memory-hard functions (MHFs) are a key cryptographic primitive underlying the design of moderately expensive password hashing algorithms and egalitarian proofs of work. Over the past few years several increasingly stringent goals for an MHF have been proposed including the requirement that the MHF have high sequential space-time (ST) complexity, parallel space-time complexity, amortized area-time (aAT) complexity and sustained space complexity. Data-Independent Memory Hard Functions (iMHFs) are of special interest in the context of password hashing as they naturally resist side-channel attacks. iMHFs can be specified using a directed acyclic graph (DAG) G with \(N=2^n\) nodes and low indegree and the complexity of the iMHF can be analyzed using a pebbling game. Recently, Alwen et al. [ABH17] constructed a DAG called DRSample that has aAT complexity at least \(\varOmega \!\left( N^2/{\text {log}} N\right) \). Asymptotically DRSample outperformed all prior iMHF constructions including Argon2i, winner of the password hashing competition (aAT cost \({\mathcal {O}} \!\left( N^{1.767}\right) \)), though the constants in these bounds are poorly understood. We show that the greedy pebbling strategy of Boneh et al. [BCS16] is particularly effective against DRSample e.g., the aAT cost is \({\mathcal {O}} (N^2/{\text {log}} N)\). In fact, our empirical analysis reverses the prior conclusion of Alwen et al. that DRSample provides stronger resistance to known pebbling attacks for practical values of \(N \le 2^{24}\). We construct a new iMHF candidate (DRSample+BRG) by using the bit-reversal graph to extend DRSample. We then prove that the construction is asymptotically optimal under every MHF criteria, and we empirically demonstrate that our iMHF provides the best resistance to known pebbling attacks. For example, we show that any parallel pebbling attack either has aAT cost \(\omega (N^2)\) or requires at least \(\varOmega (N)\) steps with \(\varOmega (N/{\text {log}} N)\) pebbles on the DAG. This makes our construction the first practical iMHF with a strong sustained space-complexity guarantee and immediately implies that any parallel pebbling has aAT complexity \(\varOmega (N^2/{\text {log}} N)\). We also prove that any sequential pebbling (including the greedy pebbling attack) has aAT cost \(\varOmega \!\left( N^2\right) \) and, if a plausible conjecture holds, any parallel pebbling has aAT cost \(\varOmega (N^2 \log \log N/{\text {log}} N)\)—the best possible bound for an iMHF. We implement our new iMHF and demonstrate that it is just as fast as Argon2. Along the way we propose a simple modification to the Argon2 round function that increases an attacker’s aAT cost by nearly an order of magnitude without increasing running time on a CPU. Finally, we give a pebbling reduction that proves that in the parallel random oracle model (PROM) the cost of evaluating an iMHF like Argon2i or DRSample+BRG is given by the pebbling cost of the underlying DAG. Prior pebbling reductions assumed that the iMHF round function concatenates input labels before hashing and did not apply to practical iMHFs such as Argon2i, DRSample or DRSample+BRG where input labels are instead XORed together.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_20](https://doi.org/10.1007/978-3-030-26951-7_20)
## Simultaneous Amplification: The Case of Non-interactive Zero-Knowledge.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-2].md#simultaneous-amplification-the-case-of-non-interactive-zero-knowledge)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#simultaneous-amplification-the-case-of-non-interactive-zero-knowledge)
### Authors
* Vipul Goyal, CMU, Pittsburgh, USA
* Aayush Jain, UCLA, Los Angeles, USA
* Amit Sahai, UCLA, Los Angeles, USA
### Abstract
> In this work, we explore the question of simultaneous privacy and soundness amplification for non-interactive zero-knowledge argument systems (NIZK). We show that any \(\delta _s-\)sound and \(\delta _z-\)zero-knowledge NIZK candidate satisfying \(\delta _s+\delta _z=1-\epsilon \), for any constant \(\epsilon >0\), can be turned into a computationally sound and zero-knowledge candidate with the only extra assumption of a subexponentially secure public-key encryption.
> 
> We develop novel techniques to leverage the use of leakage simulation lemma (Jetchev-Peitzrak TCC 2014) to argue amplification. A crucial component of our result is a new notion for secret sharing \(\mathsf {NP}\) instances. We believe that this may be of independent interest.
> 
> To achieve this result we analyze following two transformations:
> 
> Parallel Repetition: We show that using parallel repetition any \(\delta _s-\)sound and \(\delta _z-\)zero-knowledge \(\mathsf {NIZK}\) candidate can be turned into (roughly) \(\delta ^n_s-\)sound and \(1-(1-\delta _{z})^n-\)zero-knowledge candidate. Here n is the repetition parameter.
> 
> MPC based Repetition: We propose a new transformation that amplifies zero-knowledge in the same way that parallel repetition amplifies soundness. We show that using this any \(\delta _s-\)sound and \(\delta _z-\)zero-knowledge \(\mathsf {NIZK}\) candidate can be turned into (roughly) \(1-(1-\delta _s)^n-\)sound and \(2\cdot \delta ^n_{z}-\)zero-knowledge candidate.
> 
> Then we show that using these transformations in a zig-zag fashion we can obtain our result. Finally, we also present a simple transformation which directly turns any \(\mathsf {NIZK}\) candidate satisfying \(\delta _s,\delta _z<1/3 -1/\mathsf {poly}(\lambda )\) to a secure one.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_21](https://doi.org/10.1007/978-3-030-26951-7_21)
## The Privacy Blanket of the Shuffle Model.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-2].md#the-privacy-blanket-of-the-shuffle-model)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#the-privacy-blanket-of-the-shuffle-model)
### Authors
* Borja Balle, The Alan Turing Institute, London, UK
* James Bell, The Alan Turing Institute, London, UK
* Adrià Gascón, The Alan Turing Institute, London, UK
* Borja Balle, University of Warwick, Coventry, UK
* Adrià Gascón, University of Warwick, Coventry, UK
* Borja Balle, Georgetown University, Washington, D.C., USA
* Kobbi Nissim, Georgetown University, Washington, D.C., USA
### Abstract
> This work studies differential privacy in the context of the recently proposed shuffle model. Unlike in the local model, where the server collecting privatized data from users can track back an input to a specific user, in the shuffle model users submit their privatized inputs to a server anonymously. This setup yields a trust model which sits in between the classical curator and local models for differential privacy. The shuffle model is the core idea in the Encode, Shuffle, Analyze (ESA) model introduced by Bittau et al. (SOPS 2017). Recent work by Cheu et al. (EUROCRYPT 2019) analyzes the differential privacy properties of the shuffle model and shows that in some cases shuffled protocols provide strictly better accuracy than local protocols. Additionally, Erlingsson et al. (SODA 2019) provide a privacy amplification bound quantifying the level of curator differential privacy achieved by the shuffle model in terms of the local differential privacy of the randomizer used by each user.
> 
> In this context, we make three contributions. First, we provide an optimal single message protocol for summation of real numbers in the shuffle model. Our protocol is very simple and has better accuracy and communication than the protocols for this same problem proposed by Cheu et al. Optimality of this protocol follows from our second contribution, a new lower bound for the accuracy of private protocols for summation of real numbers in the shuffle model. The third contribution is a new amplification bound for analyzing the privacy of protocols in the shuffle model in terms of the privacy provided by the corresponding local randomizer. Our amplification bound generalizes the results by Erlingsson et al. to a wider range of parameters, and provides a whole family of methods to analyze privacy amplification in the shuffle model.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_22](https://doi.org/10.1007/978-3-030-26951-7_22)
## Realizing Chosen Ciphertext Security Generically in Attribute-Based Encryption and Predicate Encryption.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-2].md#realizing-chosen-ciphertext-security-generically-in-attribute-based-encryption-and-predicate-encryption)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#realizing-chosen-ciphertext-security-generically-in-attribute-based-encryption-and-predicate-encryption)
### Authors
* Venkata Koppula, Weizmann Institute of Science, Rehovot, Israel
* Brent Waters, University of Texas at Austin and NTT Research, Austin, USA
### Abstract
> We provide generic and black box transformations from any chosen plaintext secure Attribute-Based Encryption (ABE) or One-sided Predicate Encryption system into a chosen ciphertext secure system. Our transformation requires only the IND-CPA security of the original ABE scheme coupled with a pseudorandom generator (PRG) with a special security property.
> 
> In particular, we consider a PRG with an n bit input \(s \in \{0,1\}^n\) and \(n \cdot \ell \) bit output \(y_1, \ldots , y_n\) where each \(y_i\) is an \(\ell \) bit string. Then for a randomly chosen s the following two distributions should be computationally indistinguishable. In the first distribution \(r_{s_i, i} = y_i\) and \(r_{\bar{s}_i, i}\) is chosen randomly for \(i \in [n]\). In the second distribution all \(r_{b, i}\) are chosen randomly for \(i \in [n], b \in \{0,1\}\).
> 
> We show that such PRGs can be built from either the computational Diffie-Hellman assumption (in non-bilinear groups) or the Learning with Errors (LWE) assumption (and potentially other assumptions). Thus, one can transform any IND-CPA secure system into a chosen ciphertext secure one by adding either assumption. (Or by simply assuming an existing PRG is hinting secure.) In addition, our work provides a new approach and perspective for obtaining chosen ciphertext security in the basic case of public key encryption.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_23](https://doi.org/10.1007/978-3-030-26951-7_23)
## Match Me if You Can: Matchmaking Encryption and Its Applications.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-2].md#match-me-if-you-can-matchmaking-encryption-and-its-applications)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#match-me-if-you-can-matchmaking-encryption-and-its-applications)
### Authors
* Giuseppe Ateniese, Stevens Institute of Technology, Hoboken, NJ, USA
* Danilo Francati, Stevens Institute of Technology, Hoboken, NJ, USA
* David Nuñez, NuCypher, San Francisco, CA, USA
* Daniele Venturi, Department of Computer Science, Sapienza University of Rome, Rome, Italy
### Abstract
> We introduce a new form of encryption that we name matchmaking encryption (ME). Using ME, sender S and receiver R (each with its own attributes) can both specify policies the other party must satisfy in order for the message to be revealed. The main security guarantee is that of privacy-preserving policy matching: During decryption nothing is leaked beyond the fact that a match occurred/did not occur.
> 
> ME opens up new ways of secretly communicating, and enables several new applications where both participants can specify fine-grained access policies to encrypted data. For instance, in social matchmaking, S can encrypt a file containing his/her personal details and specify a policy so that the file can be decrypted only by his/her ideal partner. On the other end, a receiver R will be able to decrypt the file only if S corresponds to his/her ideal partner defined through a policy.
> 
> On the theoretical side, we define security for ME, as well as provide generic frameworks for constructing ME from functional encryption.
> 
> These constructions need to face the technical challenge of simultaneously checking the policies chosen by S and R, to avoid any leakage.
> 
> On the practical side, we construct an efficient identity-based scheme for equality policies, with provable security in the random oracle model under the standard BDH assumption. We implement and evaluate our scheme and provide experimental evidence that our construction is practical. We also apply identity-based ME to a concrete use case, in particular for creating an anonymous bulletin board over a Tor network.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_24](https://doi.org/10.1007/978-3-030-26951-7_24)
## ABE for DFA from k-Lin.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-2].md#abe-for-dfa-from-k-lin)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#abe-for-dfa-from-k-lin)
### Authors
* Junqing Gong, CNRS, ENS and PSL, Paris, France
* Hoeteck Wee, CNRS, ENS and PSL, Paris, France
* Brent Waters, University of Texas at Austin, Austin, USA
* Hoeteck Wee, Algorand, Boston, USA
* Brent Waters, NTT Research, Palo Alto, USA
### Abstract
> We present the first attribute-based encryption (ABE) scheme for deterministic finite automaton (DFA) based on static assumptions in bilinear groups; this resolves an open problem posed by Waters (CRYPTO 2012). Our main construction achieves selective security against unbounded collusions under the standard k-linear assumption in prime-order bilinear groups, whereas previous constructions all rely on q-type assumptions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_25](https://doi.org/10.1007/978-3-030-26951-7_25)
## Attribute Based Encryption (and more) for Nondeterministic Finite Automata from LWE.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-2].md#attribute-based-encryption-and-more-for-nondeterministic-finite-automata-from-lwe)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#attribute-based-encryption-and-more-for-nondeterministic-finite-automata-from-lwe)
### Authors
* Shweta Agrawal, IIT Madras, Chennai, India
* Monosij Maitra, IIT Madras, Chennai, India
* Shota Yamada, National Institute of Advanced Industrial Science and Technology (AIST), Tokyo, Japan
### Abstract
> Constructing Attribute Based Encryption (ABE) [56] for uniform models of computation from standard assumptions, is an important problem, about which very little is known. The only known ABE schemes in this setting that (i) avoid reliance on multilinear maps or indistinguishability obfuscation, (ii) support unbounded length inputs and (iii) permit unbounded key requests to the adversary in the security game, are by Waters from Crypto, 2012 [57] and its variants. Waters provided the first ABE for Deterministic Finite Automata (DFA) satisfying the above properties, from a parametrized or “q-type” assumption over bilinear maps. Generalizing this construction to Nondeterministic Finite Automata (NFA) was left as an explicit open problem in the same work, and has seen no progress to date. Constructions from other assumptions such as more standard pairing based assumptions, or lattice based assumptions has also proved elusive.
> 
> In this work, we construct the first symmetric key attribute based encryption scheme for nondeterministic finite automata (NFA) from the learning with errors (LWE) assumption. Our scheme supports unbounded length inputs as well as unbounded length machines. In more detail, secret keys in our construction are associated with an NFA M of unbounded length, ciphertexts are associated with a tuple \((\mathbf {x}, m)\) where \(\mathbf {x}\) is a public attribute of unbounded length and m is a secret message bit, and decryption recovers m if and only if \(M(\mathbf {x})=1\).
> 
> Further, we leverage our ABE to achieve (restricted notions of) attribute hiding analogous to the circuit setting, obtaining the first predicate encryption and bounded key functional encryption schemes for NFA from LWE. We achieve machine hiding in the single/bounded key setting to obtain the first reusable garbled NFA from standard assumptions. In terms of lower bounds, we show that secret key functional encryption even for DFAs, with security against unbounded key requests implies indistinguishability obfuscation (\(\mathsf {iO}\)) for circuits; this suggests a barrier in achieving full fledged functional encryption for NFA.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_26](https://doi.org/10.1007/978-3-030-26951-7_26)
## The Distinction Between Fixed and Random Generators in Group-Based Assumptions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-2].md#the-distinction-between-fixed-and-random-generators-in-group-based-assumptions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#the-distinction-between-fixed-and-random-generators-in-group-based-assumptions)
### Authors
* James Bartusek, Princeton University, Princeton, USA
* Fermi Ma, Princeton University, Princeton, USA
* Mark Zhandry, Princeton University & NTT Research, Princeton, USA
### Abstract
> There is surprisingly little consensus on the precise role of the generator g in group-based assumptions such as DDH. Some works consider g to be a fixed part of the group description, while others take it to be random. We study this subtle distinction from a number of angles.
> 
> In the generic group model, we demonstrate the plausibility of groups in which random-generator DDH (resp. CDH) is hard but fixed-generator DDH (resp. CDH) is easy. We observe that such groups have interesting cryptographic applications.
> 
> We find that seemingly tight generic lower bounds for the Discrete-Log and CDH problems with preprocessing (Corrigan-Gibbs and Kogan, Eurocrypt 2018) are not tight in the sub-constant success probability regime if the generator is random. We resolve this by proving tight lower bounds for the random generator variants; our results formalize the intuition that using a random generator will reduce the effectiveness of preprocessing attacks.
> 
> We observe that DDH-like assumptions in which exponents are drawn from low-entropy distributions are particularly sensitive to the fixed- vs. random-generator distinction. Most notably, we discover that the Strong Power DDH assumption of Komargodski and Yogev (Komargodski and Yogev, Eurocrypt 2018) used for non-malleable point obfuscation is in fact false precisely because it requires a fixed generator. In response, we formulate an alternative fixed-generator assumption that suffices for a new construction of non-malleable point obfuscation, and we prove the assumption holds in the generic group model. We also give a generic group proof for the security of fixed-generator, low-entropy DDH (Canetti, Crypto 1997).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_27](https://doi.org/10.1007/978-3-030-26951-7_27)
## Unifying Computational Entropies via Kullback-Leibler Divergence.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-2].md#unifying-computational-entropies-via-kullback-leibler-divergence)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#unifying-computational-entropies-via-kullback-leibler-divergence)
### Authors
* Rohit Agrawal, John A. Paulson School of Engineering and Applied Sciences, Harvard University, Cambridge, MA, 02138, USA
* Yi-Hsiu Chen, John A. Paulson School of Engineering and Applied Sciences, Harvard University, Cambridge, MA, 02138, USA
* Thibaut Horel, John A. Paulson School of Engineering and Applied Sciences, Harvard University, Cambridge, MA, 02138, USA
* Salil Vadhan, John A. Paulson School of Engineering and Applied Sciences, Harvard University, Cambridge, MA, 02138, USA
### Abstract
> We introduce hardness in relative entropy, a new notion of hardness for search problems which on the one hand is satisfied by all one-way functions and on the other hand implies both next-block pseudoentropy and inaccessible entropy, two forms of computational entropy used in recent constructions of pseudorandom generators and statistically hiding commitment schemes, respectively. Thus, hardness in relative entropy unifies the latter two notions of computational entropy and sheds light on the apparent “duality” between them. Additionally, it yields a more modular and illuminating proof that one-way functions imply next-block inaccessible entropy, similar in structure to the proof that one-way functions imply next-block pseudoentropy (Vadhan and Zheng, STOC ‘12).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_28](https://doi.org/10.1007/978-3-030-26951-7_28)
