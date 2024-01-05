# Crypto 19-2
## The Communication Complexity of Threshold Private Set Intersection.
🌍 [English](../../../docs/en/Crypto/Crypto%2019-2.md#the-communication-complexity-of-threshold-private-set-intersection) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2019-2.md#the-communication-complexity-of-threshold-private-set-intersection)**
### 作者
* Satrajit Ghosh, Aarhus University, Aarhus, Denmark
* Mark Simkin, Aarhus University, Aarhus, Denmark
### 摘要
> Threshold private set intersection enables Alice and Bob who hold sets \(S_{\mathsf {A}}\) and \(S_{\mathsf {B}}\) of size n to compute the intersection \(S_{\mathsf {A}} \cap S_{\mathsf {B}} \) if the sets do not differ by more than some threshold parameter \(t\). In this work, we investigate the communication complexity of this problem and we establish the first upper and lower bounds. We show that any protocol has to have a communication complexity of \(\varOmega (t)\). We show that an almost matching upper bound of \(\tilde{\mathcal {O}}(t)\) can be obtained via fully homomorphic encryption. We present a computationally more efficient protocol based on weaker assumptions, namely additively homomorphic encryption, with a communication complexity of \(\tilde{\mathcal {O}}(t ^2)\). For applications like biometric authentication, where a given fingerprint has to have a large intersection with a fingerprint from a database, our protocols may result in significant communication savings.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_1](https://doi.org/10.1007/978-3-030-26951-7_1)
## Adaptively Secure MPC with Sublinear Communication Complexity.
🌍 [English](../../../docs/en/Crypto/Crypto%2019-2.md#adaptively-secure-mpc-with-sublinear-communication-complexity) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2019-2.md#adaptively-secure-mpc-with-sublinear-communication-complexity)**
### 作者
* Ran Cohen, Boston University, Boston, USA
* Ran Cohen, Northeastern University, Boston, USA
* Abhi Shelat, Northeastern University, Boston, USA
* Daniel Wichs, Northeastern University, Boston, USA
### 摘要
> A central challenge in the study of MPC is to balance between security guarantees, hardness assumptions, and resources required for the protocol. In this work, we study the cost of tolerating adaptive corruptions in MPC protocols under various corruption thresholds. In the strongest setting, we consider adaptive corruptions of an arbitrary number of parties (potentially all) and achieve the following results:

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_2](https://doi.org/10.1007/978-3-030-26951-7_2)
## Communication Lower Bounds for Statistically Secure MPC, With or Without Preprocessing.
🌍 [English](../../../docs/en/Crypto/Crypto%2019-2.md#communication-lower-bounds-for-statistically-secure-mpc-with-or-without-preprocessing) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2019-2.md#communication-lower-bounds-for-statistically-secure-mpc-with-or-without-preprocessing)**
### 作者
* Ivan Damgård, Computer Science, Aarhus University, Aarhus, Denmark
* Kasper Green Larsen, Computer Science, Aarhus University, Aarhus, Denmark
* Jesper Buus Nielsen, Computer Science, Aarhus University, Aarhus, Denmark
### 摘要
> We prove a lower bound on the communication complexity of unconditionally secure multiparty computation, both in the standard model with \(n=2t+1\) parties of which t are corrupted, and in the preprocessing model with \(n=t+1\). In both cases, we show that for any \(g \in \mathbb {N}\) there exists a Boolean circuit C with g gates, where any secure protocol implementing C must communicate \(\varOmega (n g)\) bits, even if only passive and statistical security is required. The results easily extends to constructing similar circuits over any fixed finite field. This shows that for all sizes of circuits, the O(n) overhead of all known protocols when t is maximal is inherent. It also shows that security comes at a price: the circuit we consider could namely be computed among n parties with communication only O(g) bits if no security was required. Our results extend to the case where the threshold t is suboptimal. For the honest majority case, this shows that the known optimizations via packed secret-sharing can only be obtained if one accepts that the threshold is \(t= (1/2 - c)n\) for a constant c. For the honest majority case, we also show an upper bound that matches the lower bound up to a constant factor (existing upper bounds are a factor \(\lg n\) off for Boolean circuits).

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_3](https://doi.org/10.1007/978-3-030-26951-7_3)
## Communication-Efficient Unconditional MPC with Guaranteed Output Delivery.
🌍 [English](../../../docs/en/Crypto/Crypto%2019-2.md#communication-efficient-unconditional-mpc-with-guaranteed-output-delivery) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2019-2.md#communication-efficient-unconditional-mpc-with-guaranteed-output-delivery)**
### 作者
* Vipul Goyal, Carnegie Mellon University, Pittsburgh, USA
* Yifan Song, Carnegie Mellon University, Pittsburgh, USA
* Yanyi Liu, Tsinghua University, Beijing, China
### 摘要
> We study the communication complexity of unconditionally secure MPC with guaranteed output delivery over point-to-point channels for corruption threshold \(t < n/3\). We ask the question: “is it possible to construct MPC in this setting s.t. the communication complexity per multiplication gate is linear in the number of parties?” While a number of works have focused on reducing the communication complexity in this setting, the answer to the above question has remained elusive for over a decade.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_4](https://doi.org/10.1007/978-3-030-26951-7_4)
## Efficient Collision Attack Frameworks for RIPEMD-160.
🌍 [English](../../../docs/en/Crypto/Crypto%2019-2.md#efficient-collision-attack-frameworks-for-ripemd-160) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2019-2.md#efficient-collision-attack-frameworks-for-ripemd-160)**
### 作者
* Fukang Liu, Shanghai Key Laboratory of Trustworthy Computing, East China Normal University, Shanghai, China
* Gaoli Wang, Shanghai Key Laboratory of Trustworthy Computing, East China Normal University, Shanghai, China
* Zhenfu Cao, Shanghai Key Laboratory of Trustworthy Computing, East China Normal University, Shanghai, China
* Christoph Dobraunig, Graz University of Technology, Graz, Austria
* Christoph Dobraunig, Radboud University, Nijmegen, The Netherlands
* Florian Mendel, Infineon Technologies AG, Ludwigsburg, Germany
* Takanori Isobe, National Institute of Information and Communications Technology, Tokyo, Japan
* Fukang Liu, University of Hyogo, Kobe, Japan
* Takanori Isobe, University of Hyogo, Kobe, Japan
### 摘要
> RIPEMD-160 is an ISO/IEC standard and has been applied to generate the Bitcoin address with SHA-256. Due to the complex dual-stream structure, the first collision attack on reduced RIPEMD-160 presented by Liu, Mendel and Wang at Asiacrypt 2017 only reaches 30 steps, having a time complexity of \(2^{70}\). Apart from that, several semi-free-start collision attacks have been published for reduced RIPEMD-160 with the start-from-the-middle method. Inspired from such start-from-the middle structures, we propose two novel efficient collision attack frameworks for reduced RIPEMD-160 by making full use of the weakness of its message expansion. Those two frameworks are called dense-left-and-sparse-right (DLSR) framework and sparse-left-and-dense-right (SLDR) framework. As it turns out, the DLSR framework is more efficient than SLDR framework since one more step can be fully controlled, though with extra \(2^{32}\) memory complexity. To construct the best differential characteristics for the DLSR framework, we carefully build the linearized part of the characteristics and then solve the corresponding nonlinear part using a guess-and-determine approach. Based on the newly discovered differential characteristics, we provide colliding messages pairs for the first practical collision attacks on 30 and 31 (out of 80) steps of RIPEMD-160 with time complexity \(2^{35.9}\) and \(2^{41.5}\) respectively. In addition, benefiting from the partial calculation, we can attack 33 and 34 (out of 80) steps of RIPEMD-160 with time complexity \(2^{67.1}\) and \(2^{74.3}\) respectively. When applying the SLDR framework to the differential characteristic used in the Asiacrypt 2017 paper, we significantly improve the time complexity by a factor of \(2^{13}\). However, it still cannot compete with the results obtained from the DLSR framework. To the best of our knowledge, these are the best collision attacks on reduced RIPEMD-160 with respect to the number of steps, including the first colliding message pairs for 30 and 31 steps of RIPEMD-160.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_5](https://doi.org/10.1007/978-3-030-26951-7_5)
## Improving Attacks on Round-Reduced Speck32/64 Using Deep Learning.
🌍 [English](../../../docs/en/Crypto/Crypto%2019-2.md#improving-attacks-on-round-reduced-speck32-64-using-deep-learning) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2019-2.md#improving-attacks-on-round-reduced-speck32-64-using-deep-learning)**
### 作者
* Aron Gohr, Bundesamt für Sicherheit in der Informationstechnik (BSI), Bonn, Germany
### 摘要
> This paper has four main contributions. First, we calculate the predicted difference distribution of Speck32/64 with one specific input difference under the Markov assumption completely for up to eight rounds and verify that this yields a globally fairly good model of the difference distribution of Speck32/64. Secondly, we show that contrary to conventional wisdom, machine learning can produce very powerful cryptographic distinguishers: for instance, in a simple low-data, chosen plaintext attack on nine rounds of Speck, we present distinguishers based on deep residual neural networks that achieve a mean key rank roughly five times lower than an analogous classical distinguisher using the full difference distribution table. Thirdly, we develop a highly selective key search policy based on a variant of Bayesian optimization which, together with our neural distinguishers, can be used to reduce the remaining security of 11-round Speck32/64 to roughly 38 bits. This is a significant improvement over previous literature. Lastly, we show that our neural distinguishers successfully use features of the ciphertext pair distribution that are invisible to all purely differential distinguishers even given unlimited data.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_6](https://doi.org/10.1007/978-3-030-26951-7_6)
## Correlation of Quadratic Boolean Functions: Cryptanalysis of All Versions of Full \mathsf MORUS.
🌍 [English](../../../docs/en/Crypto/Crypto%2019-2.md#correlation-of-quadratic-boolean-functions-cryptanalysis-of-all-versions-of-full-mathsf-morus) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2019-2.md#correlation-of-quadratic-boolean-functions-cryptanalysis-of-all-versions-of-full-mathsf-morus)**
### 作者
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
### 摘要
> We show that the correlation of any quadratic Boolean function can be read out from its so-called disjoint quadratic form. We further propose a polynomial-time algorithm that can transform an arbitrary quadratic Boolean function into its disjoint quadratic form. With this algorithm, the exact correlation of quadratic Boolean functions can be computed efficiently.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_7](https://doi.org/10.1007/978-3-030-26951-7_7)
## Low-Memory Attacks Against Two-Round Even-Mansour Using the 3-XOR Problem.
🌍 [English](../../../docs/en/Crypto/Crypto%2019-2.md#low-memory-attacks-against-two-round-even-mansour-using-the-3-xor-problem) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2019-2.md#low-memory-attacks-against-two-round-even-mansour-using-the-3-xor-problem)**
### 作者
* Gaëtan Leurent, Inria, Paris, France
* Ferdinand Sibleyras, Inria, Paris, France
### 摘要
> The iterated Even-Mansour construction is an elegant construction that idealizes block cipher designs such as the AES. In this work we focus on the simplest variant, the 2-round Even-Mansour construction with a single key. This is the most minimal construction that offers security beyond the birthday bound: there is a security proof up to \(2^{2n/3}\) evaluations of the underlying permutations and encryption, and the best known attacks have a complexity of roughly \(2^n/n\) operations.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_8](https://doi.org/10.1007/978-3-030-26951-7_8)
## How to Record Quantum Queries, and Applications to Quantum Indifferentiability.
🌍 [English](../../../docs/en/Crypto/Crypto%2019-2.md#how-to-record-quantum-queries-and-applications-to-quantum-indifferentiability) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2019-2.md#how-to-record-quantum-queries-and-applications-to-quantum-indifferentiability)**
### 作者
* Mark Zhandry, Princeton University & NTT Research, Princeton, USA
### 摘要
> The quantum random oracle model (QROM) has become the standard model in which to prove the post-quantum security of random-oracle-based constructions. Unfortunately, none of the known proof techniques allow the reduction to record information about the adversary’s queries, a crucial feature of many classical ROM proofs, including all proofs of indifferentiability for hash function domain extension.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_9](https://doi.org/10.1007/978-3-030-26951-7_9)
## Quantum Security Proofs Using Semi-classical Oracles.
🌍 [English](../../../docs/en/Crypto/Crypto%2019-2.md#quantum-security-proofs-using-semi-classical-oracles) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2019-2.md#quantum-security-proofs-using-semi-classical-oracles)**
### 作者
* Andris Ambainis, University of Latvia, Riga, Latvia
* Mike Hamburg, Rambus Security Division, San Francisco, USA
* Dominique Unruh, University of Tartu, Tartu, Estonia
### 摘要
> We present an improved version of the one-way to hiding (O2H) Theorem by Unruh, J ACM 2015. Our new O2H Theorem gives higher flexibility (arbitrary joint distributions of oracles and inputs, multiple reprogrammed points) as well as tighter bounds (removing square-root factors, taking parallelism into account). The improved O2H Theorem makes use of a new variant of quantum oracles, semi-classical oracles, where queries are partially measured. The new O2H Theorem allows us to get better security bounds in several public-key encryption schemes.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_10](https://doi.org/10.1007/978-3-030-26951-7_10)
## Quantum Indistinguishability of Random Sponges.
🌍 [English](../../../docs/en/Crypto/Crypto%2019-2.md#quantum-indistinguishability-of-random-sponges) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2019-2.md#quantum-indistinguishability-of-random-sponges)**
### 作者
* Jan Czajkowski, QuSoft, University of Amsterdam, Amsterdam, The Netherlands
* Christian Schaffner, QuSoft, University of Amsterdam, Amsterdam, The Netherlands
* Andreas Hülsing, TU Eindhoven, Eindhoven, The Netherlands
### 摘要
> In this work we show that the sponge construction can be used to construct quantum-secure pseudorandom functions. As our main result we prove that random sponges are quantum indistinguishable from random functions. In this setting the adversary is given superposition access to the input-output behavior of the construction but not to the internal function. Our proofs hold under the assumption that the internal function is a random function or permutation. We then use this result to obtain a quantum-security version of a result by Andreeva, Daemen, Mennink, and Van Assche (FSE’15) which shows that a sponge that uses a secure PRP or PRF as internal function is a secure PRF. This result also proves that the recent attacks against CBC-MAC in the quantum-access model by Kaplan, Leurent, Leverrier, and Naya-Plasencia (Crypto’16) and Santoli, and Schaffner (QIC’16) can be prevented by introducing a state with a non-trivial inner part.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_11](https://doi.org/10.1007/978-3-030-26951-7_11)
## Revisiting Post-quantum Fiat-Shamir.
🌍 [English](../../../docs/en/Crypto/Crypto%2019-2.md#revisiting-post-quantum-fiat-shamir) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2019-2.md#revisiting-post-quantum-fiat-shamir)**
### 作者
* Qipeng Liu, Princeton University, Princeton, USA
* Mark Zhandry, Princeton University & NTT Research, Princeton, USA
### 摘要
> The Fiat-Shamir transformation is a useful approach to building non-interactive arguments (of knowledge) in the random oracle model. Unfortunately, existing proof techniques are incapable of proving the security of Fiat-Shamir in the quantum setting. The problem stems from (1) the difficulty of quantum rewinding, and (2) the inability of current techniques to adaptively program random oracles in the quantum setting. In this work, we show how to overcome the limitations above in many settings. In particular, we give mild conditions under which Fiat-Shamir is secure in the quantum setting. As an application, we show that existing lattice signatures based on Fiat-Shamir are secure without any modifications.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_12](https://doi.org/10.1007/978-3-030-26951-7_12)
## Security of the Fiat-Shamir Transformation in the Quantum Random-Oracle Model.
🌍 [English](../../../docs/en/Crypto/Crypto%2019-2.md#security-of-the-fiat-shamir-transformation-in-the-quantum-random-oracle-model) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2019-2.md#security-of-the-fiat-shamir-transformation-in-the-quantum-random-oracle-model)**
### 作者
* Jelle Don, Centrum Wiskunde & Informatica (CWI), Amsterdam, Netherlands
* Serge Fehr, Centrum Wiskunde & Informatica (CWI), Amsterdam, Netherlands
* Jelle Don, Institute for Logic, Language and Computation, University of Amsterdam, Amsterdam, Netherlands
* Christian Majenz, Institute for Logic, Language and Computation, University of Amsterdam, Amsterdam, Netherlands
* Christian Schaffner, Institute for Logic, Language and Computation, University of Amsterdam, Amsterdam, Netherlands
* Serge Fehr, Mathematical Institute, Leiden University, Leiden, Netherlands
* Serge Fehr, QuSoft, Amsterdam, Netherlands
* Christian Majenz, QuSoft, Amsterdam, Netherlands
* Christian Schaffner, QuSoft, Amsterdam, Netherlands
### 摘要
> The famous Fiat-Shamir transformation turns any public-coin three-round interactive proof, i.e., any so-called \(\Sigma {\text {-protocol}}\), into a non-interactive proof in the random-oracle model. We study this transformation in the setting of a quantum adversary that in particular may query the random oracle in quantum superposition.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_13](https://doi.org/10.1007/978-3-030-26951-7_13)
## Unconditionally Secure Computation Against Low-Complexity Leakage.
🌍 [English](../../../docs/en/Crypto/Crypto%2019-2.md#unconditionally-secure-computation-against-low-complexity-leakage) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2019-2.md#unconditionally-secure-computation-against-low-complexity-leakage)**
### 作者
* Andrej Bogdanov, Chinese University of Hong Kong, Shatin, Hong Kong
* Yuval Ishai, Technion, Haifa, Israel
* Akshayaram Srinivasan, University of California, Berkeley, USA
### 摘要
> We consider the problem of constructing leakage-resilient circuit compilers that are secure against global leakage functions with bounded output length. By global, we mean that the leakage can depend on all circuit wires and output a low-complexity function (represented as a multi-output Boolean circuit) applied on these wires. In this work, we design compilers both in the stateless (a.k.a. single-shot leakage) setting and the stateful (a.k.a. continuous leakage) setting that are unconditionally secure against \(\mathsf {AC}^0\) leakage and similar low-complexity classes.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_14](https://doi.org/10.1007/978-3-030-26951-7_14)
## Tight Leakage-Resilient CCA-Security from Quasi-Adaptive Hash Proof System.
🌍 [English](../../../docs/en/Crypto/Crypto%2019-2.md#tight-leakage-resilient-cca-security-from-quasi-adaptive-hash-proof-system) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2019-2.md#tight-leakage-resilient-cca-security-from-quasi-adaptive-hash-proof-system)**
### 作者
* Shuai Han, School of Electronic Information and Electrical Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Shengli Liu, School of Electronic Information and Electrical Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Lin Lyu, School of Electronic Information and Electrical Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Dawu Gu, School of Electronic Information and Electrical Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Shengli Liu, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Shengli Liu, Westone Cryptologic Research Center, Beijing, 100070, China
* Shuai Han, Ant Financial, Hangzhou, 310012, China
### 摘要
> We propose the concept of quasi-adaptive hash proof system (QAHPS), where the projection key is allowed to depend on the specific language for which hash values are computed. We formalize leakage-resilient(LR)-ardency for QAHPS by defining two statistical properties, including LR-\(\langle \mathscr {L}_0, \mathscr {L}_1 \rangle \)-universal and LR-\(\langle \mathscr {L}_0, \mathscr {L}_1 \rangle \)-key-switching.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_15](https://doi.org/10.1007/978-3-030-26951-7_15)
## Non-malleable Secret Sharing in the Computational Setting: Adaptive Tampering, Noisy-Leakage Resilience, and Improved Rate.
🌍 [English](../../../docs/en/Crypto/Crypto%2019-2.md#non-malleable-secret-sharing-in-the-computational-setting-adaptive-tampering-noisy-leakage-resilience-and-improved-rate) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2019-2.md#non-malleable-secret-sharing-in-the-computational-setting-adaptive-tampering-noisy-leakage-resilience-and-improved-rate)**
### 作者
* Antonio Faonio, IMDEA Software Institute, Madrid, Spain
* Daniele Venturi, Department of Computer Science, Sapienza University of Rome, Rome, Italy
### 摘要
> We revisit the concept of non-malleable secret sharing (Goyal and Kumar, STOC 2018) in the computational setting. In particular, under the assumption of one-to-one one-way functions, we exhibit a computationally private, threshold secret sharing scheme satisfying all of the following properties.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_16](https://doi.org/10.1007/978-3-030-26951-7_16)
## Leakage Resilient Secret Sharing and Applications.
🌍 [English](../../../docs/en/Crypto/Crypto%2019-2.md#leakage-resilient-secret-sharing-and-applications) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2019-2.md#leakage-resilient-secret-sharing-and-applications)**
### 作者
* Akshayaram Srinivasan, University of California, Berkeley, USA
* Prashant Nalini Vasudevan, University of California, Berkeley, USA
### 摘要
> A secret sharing scheme allows a dealer to share a secret among a set of n parties such that any authorized subset of the parties can recover the secret, while any unauthorized subset learns no information about the secret. A leakage-resilient secret sharing scheme (introduced in independent works by Goyal and Kumar, STOC ’18 and Benhamouda, Degwekar, Ishai and Rabin, CRYPTO ’18) additionally requires the secrecy to hold against every unauthorized set of parties even if they obtain some bounded leakage from every other share. The leakage is said to be local if it is computed independently for each share. So far, the only known constructions of local leakage resilient secret sharing schemes are for threshold access structures for very low (O(1)) or very high (\(n -o(\log n)\)) thresholds.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_17](https://doi.org/10.1007/978-3-030-26951-7_17)
## Stronger Leakage-Resilient and Non-Malleable Secret Sharing Schemes for General Access Structures.
🌍 [English](../../../docs/en/Crypto/Crypto%2019-2.md#stronger-leakage-resilient-and-non-malleable-secret-sharing-schemes-for-general-access-structures) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2019-2.md#stronger-leakage-resilient-and-non-malleable-secret-sharing-schemes-for-general-access-structures)**
### 作者
* Ivan Damgård, Aarhus University, Aarhus, Denmark
* Jesper Buus Nielsen, Aarhus University, Aarhus, Denmark
* Mark Simkin, Aarhus University, Aarhus, Denmark
* João Ribeiro, Imperial College London, London, UK
* Divesh Aggarwal, National University of Singapore, Singapore, Singapore
* Maciej Obremski, National University of Singapore, Singapore, Singapore
* Erick Purwanto, National University of Singapore, Singapore, Singapore
### 摘要
> In this work we present a collection of compilers that take secret sharing schemes for an arbitrary access structure as input and produce either leakage-resilient or non-malleable secret sharing schemes for the same access structure. A leakage-resilient secret sharing scheme hides the secret from an adversary, who has access to an unqualified set of shares, even if the adversary additionally obtains some size-bounded leakage from all other secret shares. A non-malleable secret sharing scheme guarantees that a secret that is reconstructed from a set of tampered shares is either equal to the original secret or completely unrelated. To the best of our knowledge we present the first generic compiler for leakage-resilient secret sharing for general access structures. In the case of non-malleable secret sharing, we strengthen previous definitions, provide separations between them, and construct a non-malleable secret sharing scheme for general access structures that fulfills the strongest definition with respect to independent share tampering functions. More precisely, our scheme is secure against concurrent tampering: The adversary is allowed to (non-adaptively) tamper the shares multiple times, and in each tampering attempt can freely choose the qualified set of shares to be used by the reconstruction algorithm to reconstruct the tampered secret. This is a strong analogue of the multiple-tampering setting for split-state non-malleable codes and extractors.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_18](https://doi.org/10.1007/978-3-030-26951-7_18)
## Memory-Hard Functions from Cryptographic Primitives.
🌍 [English](../../../docs/en/Crypto/Crypto%2019-2.md#memory-hard-functions-from-cryptographic-primitives) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2019-2.md#memory-hard-functions-from-cryptographic-primitives)**
### 作者
* Binyi Chen, UC Santa Barbara, Santa Barbara, USA
* Stefano Tessaro, University of Washington, Seattle, USA
### 摘要
> Memory-hard functions (MHFs) are moderately-hard functions which enforce evaluation costs both in terms of time and memory (often, in form of a trade-off). They are used e.g. for password protection, password-based key-derivation, and within cryptocurrencies, and have received a considerable amount of theoretical scrutiny over the last few years. However, analyses see MHFs as modes of operation of some underlying hash function \(\mathcal {H}\), modeled as a monolithic random oracle. This is however a very strong assumption, as such hash functions are built from much simpler primitives, following somewhat ad-hoc design paradigms.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_19](https://doi.org/10.1007/978-3-030-26951-7_19)
## Data-Independent Memory Hard Functions: New Attacks and Stronger Constructions.
🌍 [English](../../../docs/en/Crypto/Crypto%2019-2.md#data-independent-memory-hard-functions-new-attacks-and-stronger-constructions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2019-2.md#data-independent-memory-hard-functions-new-attacks-and-stronger-constructions)**
### 作者
* Jeremiah Blocki, Purdue University, West Lafayette, USA
* Ben Harsha, Purdue University, West Lafayette, USA
* Seunghoon Lee, Purdue University, West Lafayette, USA
* Lu Xing, Purdue University, West Lafayette, USA
* Siteng Kang, Penn State University, State College, USA
* Samson Zhou, Indiana University, Bloomington, USA
### 摘要
> Memory-hard functions (MHFs) are a key cryptographic primitive underlying the design of moderately expensive password hashing algorithms and egalitarian proofs of work. Over the past few years several increasingly stringent goals for an MHF have been proposed including the requirement that the MHF have high sequential space-time (ST) complexity, parallel space-time complexity, amortized area-time (aAT) complexity and sustained space complexity. Data-Independent Memory Hard Functions (iMHFs) are of special interest in the context of password hashing as they naturally resist side-channel attacks. iMHFs can be specified using a directed acyclic graph (DAG) G with \(N=2^n\) nodes and low indegree and the complexity of the iMHF can be analyzed using a pebbling game. Recently, Alwen et al. [ABH17] constructed a DAG called DRSample that has aAT complexity at least \(\varOmega \!\left( N^2/{\text {log}} N\right) \). Asymptotically DRSample outperformed all prior iMHF constructions including Argon2i, winner of the password hashing competition (aAT cost \({\mathcal {O}} \!\left( N^{1.767}\right) \)), though the constants in these bounds are poorly understood. We show that the greedy pebbling strategy of Boneh et al. [BCS16] is particularly effective against DRSample e.g., the aAT cost is \({\mathcal {O}} (N^2/{\text {log}} N)\). In fact, our empirical analysis reverses the prior conclusion of Alwen et al. that DRSample provides stronger resistance to known pebbling attacks for practical values of \(N \le 2^{24}\). We construct a new iMHF candidate (DRSample+BRG) by using the bit-reversal graph to extend DRSample. We then prove that the construction is asymptotically optimal under every MHF criteria, and we empirically demonstrate that our iMHF provides the best resistance to known pebbling attacks. For example, we show that any parallel pebbling attack either has aAT cost \(\omega (N^2)\) or requires at least \(\varOmega (N)\) steps with \(\varOmega (N/{\text {log}} N)\) pebbles on the DAG. This makes our construction the first practical iMHF with a strong sustained space-complexity guarantee and immediately implies that any parallel pebbling has aAT complexity \(\varOmega (N^2/{\text {log}} N)\). We also prove that any sequential pebbling (including the greedy pebbling attack) has aAT cost \(\varOmega \!\left( N^2\right) \) and, if a plausible conjecture holds, any parallel pebbling has aAT cost \(\varOmega (N^2 \log \log N/{\text {log}} N)\)—the best possible bound for an iMHF. We implement our new iMHF and demonstrate that it is just as fast as Argon2. Along the way we propose a simple modification to the Argon2 round function that increases an attacker’s aAT cost by nearly an order of magnitude without increasing running time on a CPU. Finally, we give a pebbling reduction that proves that in the parallel random oracle model (PROM) the cost of evaluating an iMHF like Argon2i or DRSample+BRG is given by the pebbling cost of the underlying DAG. Prior pebbling reductions assumed that the iMHF round function concatenates input labels before hashing and did not apply to practical iMHFs such as Argon2i, DRSample or DRSample+BRG where input labels are instead XORed together.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_20](https://doi.org/10.1007/978-3-030-26951-7_20)
## Simultaneous Amplification: The Case of Non-interactive Zero-Knowledge.
🌍 [English](../../../docs/en/Crypto/Crypto%2019-2.md#simultaneous-amplification-the-case-of-non-interactive-zero-knowledge) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2019-2.md#simultaneous-amplification-the-case-of-non-interactive-zero-knowledge)**
### 作者
* Vipul Goyal, CMU, Pittsburgh, USA
* Aayush Jain, UCLA, Los Angeles, USA
* Amit Sahai, UCLA, Los Angeles, USA
### 摘要
> In this work, we explore the question of simultaneous privacy and soundness amplification for non-interactive zero-knowledge argument systems (NIZK). We show that any \(\delta _s-\)sound and \(\delta _z-\)zero-knowledge NIZK candidate satisfying \(\delta _s+\delta _z=1-\epsilon \), for any constant \(\epsilon >0\), can be turned into a computationally sound and zero-knowledge candidate with the only extra assumption of a subexponentially secure public-key encryption.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_21](https://doi.org/10.1007/978-3-030-26951-7_21)
## The Privacy Blanket of the Shuffle Model.
🌍 [English](../../../docs/en/Crypto/Crypto%2019-2.md#the-privacy-blanket-of-the-shuffle-model) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2019-2.md#the-privacy-blanket-of-the-shuffle-model)**
### 作者
* Borja Balle, The Alan Turing Institute, London, UK
* James Bell, The Alan Turing Institute, London, UK
* Adrià Gascón, The Alan Turing Institute, London, UK
* Borja Balle, University of Warwick, Coventry, UK
* Adrià Gascón, University of Warwick, Coventry, UK
* Borja Balle, Georgetown University, Washington, D.C., USA
* Kobbi Nissim, Georgetown University, Washington, D.C., USA
### 摘要
> This work studies differential privacy in the context of the recently proposed shuffle model. Unlike in the local model, where the server collecting privatized data from users can track back an input to a specific user, in the shuffle model users submit their privatized inputs to a server anonymously. This setup yields a trust model which sits in between the classical curator and local models for differential privacy. The shuffle model is the core idea in the Encode, Shuffle, Analyze (ESA) model introduced by Bittau et al. (SOPS 2017). Recent work by Cheu et al. (EUROCRYPT 2019) analyzes the differential privacy properties of the shuffle model and shows that in some cases shuffled protocols provide strictly better accuracy than local protocols. Additionally, Erlingsson et al. (SODA 2019) provide a privacy amplification bound quantifying the level of curator differential privacy achieved by the shuffle model in terms of the local differential privacy of the randomizer used by each user.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_22](https://doi.org/10.1007/978-3-030-26951-7_22)
## Realizing Chosen Ciphertext Security Generically in Attribute-Based Encryption and Predicate Encryption.
🌍 [English](../../../docs/en/Crypto/Crypto%2019-2.md#realizing-chosen-ciphertext-security-generically-in-attribute-based-encryption-and-predicate-encryption) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2019-2.md#realizing-chosen-ciphertext-security-generically-in-attribute-based-encryption-and-predicate-encryption)**
### 作者
* Venkata Koppula, Weizmann Institute of Science, Rehovot, Israel
* Brent Waters, University of Texas at Austin and NTT Research, Austin, USA
### 摘要
> We provide generic and black box transformations from any chosen plaintext secure Attribute-Based Encryption (ABE) or One-sided Predicate Encryption system into a chosen ciphertext secure system. Our transformation requires only the IND-CPA security of the original ABE scheme coupled with a pseudorandom generator (PRG) with a special security property.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_23](https://doi.org/10.1007/978-3-030-26951-7_23)
## Match Me if You Can: Matchmaking Encryption and Its Applications.
🌍 [English](../../../docs/en/Crypto/Crypto%2019-2.md#match-me-if-you-can-matchmaking-encryption-and-its-applications) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2019-2.md#match-me-if-you-can-matchmaking-encryption-and-its-applications)**
### 作者
* Giuseppe Ateniese, Stevens Institute of Technology, Hoboken, NJ, USA
* Danilo Francati, Stevens Institute of Technology, Hoboken, NJ, USA
* David Nuñez, NuCypher, San Francisco, CA, USA
* Daniele Venturi, Department of Computer Science, Sapienza University of Rome, Rome, Italy
### 摘要
> We introduce a new form of encryption that we name matchmaking encryption (ME). Using ME, sender S and receiver R (each with its own attributes) can both specify policies the other party must satisfy in order for the message to be revealed. The main security guarantee is that of privacy-preserving policy matching: During decryption nothing is leaked beyond the fact that a match occurred/did not occur.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_24](https://doi.org/10.1007/978-3-030-26951-7_24)
## ABE for DFA from k-Lin.
🌍 [English](../../../docs/en/Crypto/Crypto%2019-2.md#abe-for-dfa-from-k-lin) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2019-2.md#abe-for-dfa-from-k-lin)**
### 作者
* Junqing Gong, CNRS, ENS and PSL, Paris, France
* Hoeteck Wee, CNRS, ENS and PSL, Paris, France
* Brent Waters, University of Texas at Austin, Austin, USA
* Hoeteck Wee, Algorand, Boston, USA
* Brent Waters, NTT Research, Palo Alto, USA
### 摘要
> We present the first attribute-based encryption (ABE) scheme for deterministic finite automaton (DFA) based on static assumptions in bilinear groups; this resolves an open problem posed by Waters (CRYPTO 2012). Our main construction achieves selective security against unbounded collusions under the standard k-linear assumption in prime-order bilinear groups, whereas previous constructions all rely on q-type assumptions.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_25](https://doi.org/10.1007/978-3-030-26951-7_25)
## Attribute Based Encryption (and more) for Nondeterministic Finite Automata from LWE.
🌍 [English](../../../docs/en/Crypto/Crypto%2019-2.md#attribute-based-encryption-and-more-for-nondeterministic-finite-automata-from-lwe) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2019-2.md#attribute-based-encryption-and-more-for-nondeterministic-finite-automata-from-lwe)**
### 作者
* Shweta Agrawal, IIT Madras, Chennai, India
* Monosij Maitra, IIT Madras, Chennai, India
* Shota Yamada, National Institute of Advanced Industrial Science and Technology (AIST), Tokyo, Japan
### 摘要
> Constructing Attribute Based Encryption (ABE) [56] for uniform models of computation from standard assumptions, is an important problem, about which very little is known. The only known ABE schemes in this setting that (i) avoid reliance on multilinear maps or indistinguishability obfuscation, (ii) support unbounded length inputs and (iii) permit unbounded key requests to the adversary in the security game, are by Waters from Crypto, 2012 [57] and its variants. Waters provided the first ABE for Deterministic Finite Automata (DFA) satisfying the above properties, from a parametrized or “q-type” assumption over bilinear maps. Generalizing this construction to Nondeterministic Finite Automata (NFA) was left as an explicit open problem in the same work, and has seen no progress to date. Constructions from other assumptions such as more standard pairing based assumptions, or lattice based assumptions has also proved elusive.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_26](https://doi.org/10.1007/978-3-030-26951-7_26)
## The Distinction Between Fixed and Random Generators in Group-Based Assumptions.
🌍 [English](../../../docs/en/Crypto/Crypto%2019-2.md#the-distinction-between-fixed-and-random-generators-in-group-based-assumptions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2019-2.md#the-distinction-between-fixed-and-random-generators-in-group-based-assumptions)**
### 作者
* James Bartusek, Princeton University, Princeton, USA
* Fermi Ma, Princeton University, Princeton, USA
* Mark Zhandry, Princeton University & NTT Research, Princeton, USA
### 摘要
> There is surprisingly little consensus on the precise role of the generator g in group-based assumptions such as DDH. Some works consider g to be a fixed part of the group description, while others take it to be random. We study this subtle distinction from a number of angles.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_27](https://doi.org/10.1007/978-3-030-26951-7_27)
## Unifying Computational Entropies via Kullback-Leibler Divergence.
🌍 [English](../../../docs/en/Crypto/Crypto%2019-2.md#unifying-computational-entropies-via-kullback-leibler-divergence) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2019-2.md#unifying-computational-entropies-via-kullback-leibler-divergence)**
### 作者
* Rohit Agrawal, John A. Paulson School of Engineering and Applied Sciences, Harvard University, Cambridge, MA, 02138, USA
* Yi-Hsiu Chen, John A. Paulson School of Engineering and Applied Sciences, Harvard University, Cambridge, MA, 02138, USA
* Thibaut Horel, John A. Paulson School of Engineering and Applied Sciences, Harvard University, Cambridge, MA, 02138, USA
* Salil Vadhan, John A. Paulson School of Engineering and Applied Sciences, Harvard University, Cambridge, MA, 02138, USA
### 摘要
> We introduce hardness in relative entropy, a new notion of hardness for search problems which on the one hand is satisfied by all one-way functions and on the other hand implies both next-block pseudoentropy and inaccessible entropy, two forms of computational entropy used in recent constructions of pseudorandom generators and statistically hiding commitment schemes, respectively. Thus, hardness in relative entropy unifies the latter two notions of computational entropy and sheds light on the apparent “duality” between them. Additionally, it yields a more modular and illuminating proof that one-way functions imply next-block inaccessible entropy, similar in structure to the proof that one-way functions imply next-block pseudoentropy (Vadhan and Zheng, STOC ‘12).

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_28](https://doi.org/10.1007/978-3-030-26951-7_28)
