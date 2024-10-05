# Eurocrypt[2024-4]
## The NISQ Complexity of Collision Finding.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-4].md#the-nisq-complexity-of-collision-finding)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-4].md#the-nisq-complexity-of-collision-finding)
### Authors
* Yassine Hamoudi, Université de Bordeaux, CNRS, LaBRI, Talence, France
* Qipeng Liu, University of California at San Diego, La Jolla, USA
* Makrand Sinha, University of Illinois, Urbana-Champaign, Champaign, USA
### Abstract
> Collision-resistant hashing, a fundamental primitive in modern cryptography, ensures that there is no efficient way to find distinct inputs that produce the same hash value. This property underpins the security of various cryptographic applications, making it crucial to understand its complexity. The complexity of this problem is well-understood in the classical setting and \(\varTheta (N^{1/2})\) queries are needed to find a collision. However, the advent of quantum computing has introduced new challenges since quantum adversaries—equipped with the power of quantum queries—can find collisions much more efficiently. Brassard, Høyer and Tapp [15] and Aaronson and Shi [3] established that full-scale quantum adversaries require \(\varTheta (N^{1/3})\) queries to find a collision, prompting a need for longer hash outputs, which impacts efficiency in terms of the key lengths needed for security.
> 
> This paper explores the implications of quantum attacks in the Noisy-Intermediate Scale Quantum (NISQ) era. In this work, we investigate three different models for NISQ algorithms and achieve tight bounds for all of them:
> 
> 1. A hybrid algorithm making adaptive quantum or classical queries but with a limited quantum query budget, or
> 
> 2. A quantum algorithm with access to a noisy oracle, subject to a dephasing or depolarizing channel, or
> 
> 3. A hybrid algorithm with an upper bound on its maximum quantum depth; i.e. a classical algorithm aided by low-depth quantum circuits.
> 
> In fact, our results handle all regimes between NISQ and full-scale quantum computers. Previously, only results for the preimage search problem were known for these models (by Sun and Zheng [50], Rosmanis [45, 46], Chen, Cotler, Huang and Li [17]) while nothing was known about the collision finding problem.
> 
> Along with our main results, we develop an information-theoretic framework for recording query transcripts of quantum-classical algorithms. The main feature of this framework is that it allows us to record queries in two incompatible bases—classical queries in the standard basis and quantum queries in the Fourier basis—consistently. We call the framework the hybrid compressed oracle as it naturally interpolates between the classical way of recording queries and the compressed oracle framework of Zhandry for recording quantum queries. We demonstrate its applicability by giving simpler proofs of the optimal lower bounds for NISQ preimage search and by showing optimal lower bounds for NISQ collision finding.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58737-5_1](https://doi.org/10.1007/978-3-031-58737-5_1)
## Non-malleable Codes with Optimal Rate for Poly-Size Circuits.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-4].md#non-malleable-codes-with-optimal-rate-for-poly-size-circuits)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-4].md#non-malleable-codes-with-optimal-rate-for-poly-size-circuits)
### Authors
* Marshall Ball, New York University, New York, USA
* Ronen Shaltiel, University of Haifa, Haifa, Israel
* Jad Silbak, Northeastern University, Boston, USA
### Abstract
> We give an explicit construction of non-malleable codes with rate \(1-o(1)\) for the tampering class of poly-size circuits. This rate is optimal, and improves upon the previous explicit construction of Ball, Dachman-Soled and Loss [9] which achieves a rate smaller than \(\frac{1}{n}\). Our codes are based on the same hardness assumption used by Ball, Dachman-Soled and Loss, namely, that there exists a problem in \(\text {E}=\text {DTIME}(2^{O(n)})\) that requires nondeterministic circuits of size \(2^{\varOmega (n)}\). This is a standard complexity theoretic assumption that was used in many papers in complexity theory and cryptography, and can be viewed as a scaled, nonuniform version of the widely believed assumption that \(\text {EXP} \not \subseteq \text {NP}\). Our result is incomparable to that of Ball, Dachman-Soled and Loss, as we only achieve computational (rather than statistical) security. Non-malleable codes with Computational security (with lower error than what we get) were obtained by [12, 26] under strong cryptographic assumptions. We show that our approach can potentially yield statistical security if certain explicit constructions of pseudorandom objects can be improved.
> 
> By composing our new non-malleable codes with standard (information theoretic) error-correcting codes (that recover from a p fraction of errors) we achieve the best of both worlds. Namely, we achieve explicit codes that recover from a p-fraction of errors and have the same rate as the best known explicit information theoretic codes, while also being non-malleable for poly-size circuits.
> 
> Moreover, if we restrict our attention to errors that are introduced by poly-size circuits, we can achieve best of both worlds codes with rate \(1-H(p)\). This is superior to the rate achieved by standard (information theoretic) error-correcting codes, and this result is obtained by composing our new non-malleable codes with the recent codes of Shaltiel and Silbak [55].
> 
> Our technique combines ideas from non-malleable codes and pseudorandomness. We show how to take a low rate “small set non-malleable code (this is a variant of non-malleable codes with a different notion of security that was introduced by Shaltiel and Silbak [54]) and compile it into a (standard) high-rate non-malleable code. Using small set non-malleable codes (as well as seed-extending PRGs) bypasses difficulties that arise when analysing standard non-malleable codes, and allows us to use a simple construction.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58737-5_2](https://doi.org/10.1007/978-3-031-58737-5_2)
## Approximate Lower Bound Arguments.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-4].md#approximate-lower-bound-arguments)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-4].md#approximate-lower-bound-arguments)
### Authors
* Pyrros Chaidos, National and Kapodistrian University of Athens, Athens, Greece
* Aggelos Kiayias, University of Edinburgh, Edinburgh, UK
* Leonid Reyzin, Boston University, Boston, USA
* Anatoliy Zinovyev, Boston University, Boston, USA
* Pyrros Chaidos, IOG, Athens, Greece
* Aggelos Kiayias, IOG, Edinburgh, UK
### Abstract
> Suppose a prover, in possession of a large body of valuable evidence, wants to quickly convince a verifier by presenting only a small portion of the evidence.
> 
> We define an Approximate Lower Bound Argument, or ALBA, which allows the prover to do just that: to succinctly prove knowledge of a large number of elements satisfying a predicate (or, more generally, elements of a sufficient total weight when a predicate is generalized to a weight function). The argument is approximate because there is a small gap between what the prover actually knows and what the verifier is convinced the prover knows. This gap enables very efficient schemes.
> 
> We present noninteractive constructions of ALBA in the random oracle and Uniform Random String models and show that our proof sizes are nearly optimal. We also show how our constructions can be made particularly communication-efficient when the evidence is distributed among multiple provers working together, which is of practical importance when ALBA is applied to a decentralized setting.
> 
> We demonstrate two very different applications of ALBAs: for large-scale decentralized signatures and for achieving universal composability in general-purpose succinct proof systems (SNARKs).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58737-5_3](https://doi.org/10.1007/978-3-031-58737-5_3)
## Software with Certified Deletion.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-4].md#software-with-certified-deletion)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-4].md#software-with-certified-deletion)
### Authors
* James Bartusek, UC Berkeley, Berkeley, CA, USA
* Bhaskar Roberts, UC Berkeley, Berkeley, CA, USA
* Vipul Goyal, CMU, Pittsburgh, PA, USA
* Justin Raizes, CMU, Pittsburgh, PA, USA
* Vipul Goyal, NTT Research, Sunnyvale, CA, USA
* Dakshita Khurana, UIUC, Champaign, IL, USA
* Giulio Malavolta, Bocconi University, Milan, Italy
* Giulio Malavolta, Max Planck Institute for Security and Privacy, Bochum, Germany
### Abstract
> Is it possible to prove the deletion of a computer program after having executed it? While this task is clearly impossible using classical information alone, the laws of quantum mechanics may admit a solution to this problem. In this work, we propose a new approach to answer this question, using quantum information. In the interactive settings, we present the first fully-secure solution for blind delegation with certified deletion, assuming post-quantum hardness of the learning with errors (LWE) problem. In the non-interactive settings, we propose a construction of obfuscation with certified deletion, assuming post-quantum iO and one-way functions.
> 
> Our main technical contribution is a new deletion theorem for subspace coset states [Vidick and Zhang, EUROCRYPT’21, Coladangelo et al., CRYPTO’21], which enables a generic compiler that adds the certified deletion guarantee to a variety of cryptographic primitives. In addition to our main result, this allows us to obtain a host of new primitives, such as functional encryption with certified deletion and secure software leasing for an interesting class of programs. In fact, we are able for the first time to achieve a stronger notion of secure software leasing, where even a dishonest evaluator cannot evaluate the program after returning it.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58737-5_4](https://doi.org/10.1007/978-3-031-58737-5_4)
## Public-Coin, Complexity-Preserving, Succinct Arguments of Knowledge for NP from Collision-Resistance.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-4].md#public-coin-complexity-preserving-succinct-arguments-of-knowledge-for-np-from-collision-resistance)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-4].md#public-coin-complexity-preserving-succinct-arguments-of-knowledge-for-np-from-collision-resistance)
### Authors
* Cody Freitag, Northeastern University, Boston, USA
* Omer Paneth, Tel Aviv University, Tel Aviv, Israel
* Rafael Pass, Tel Aviv University & Cornell Tech, Tel Aviv, Israel
### Abstract
> Succinct arguments allow a powerful (yet polynomial-time) prover to convince a weak verifier of the validity of some NP statement using very little communication. A major barrier to the deployment of such proofs is the unwieldy overhead of the prover relative to the complexity of the statement to be proved. In this work, we focus on complexity-preserving arguments where proving a non-deterministic time t and space s RAM computation takes time \(\tilde{O}(t)\) and space \(\tilde{O}(s)\).
> 
> Currently, all known complexity-preserving arguments either are private-coin, rely on non-standard assumptions, or provide only weak succinctness. In this work, we construct complexity-preserving succinct argument based solely on collision-resistant hash functions, thereby matching the classic succinct argument of Kilian (STOC ’92).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58737-5_5](https://doi.org/10.1007/978-3-031-58737-5_5)
## Unbiasable Verifiable Random Functions.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-4].md#unbiasable-verifiable-random-functions)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-4].md#unbiasable-verifiable-random-functions)
### Authors
* Emanuele Giunta, Web3 Foundation, Zug, Switzerland
* Alistair Stewart, Web3 Foundation, Zug, Switzerland
* Emanuele Giunta, IMDEA Software Institute, Madrid, Spain
* Emanuele Giunta, Universidad Politecnica de Madrid, Madrid, Spain
### Abstract
> Verifiable Random Functions (VRFs) play a pivotal role in Proof of Stake (PoS) blockchain due to their applications in secret leader election protocols. However, the original definition by Goldreich, Goldwasser and Micali is by itself insufficient for such applications. The primary concern is that adversaries may craft VRF key pairs with skewed output distribution, allowing them to unfairly increase their winning chances.
> 
> To address this issue David, Gaži, Kiayias and Russel (2017/573) proposed a stronger definition in the universal composability framework, while Esgin et al. (FC ’21) put forward a weaker game-based one. Their proposed notions come with some limitations though. The former appears to be too strong, being seemingly impossible to instantiate without a programmable random oracle. The latter instead is not sufficient to prove security for VRF-based secret leader election schemes.
> 
> In this work we close the above gap by proposing a new security property for VRF we call unbiasability. On the one hand, our notion suffices to imply fairness in VRF-based leader elections protocols. On the other hand, we provide an efficient compiler in the plain model (with no CRS) transforming any VRF into an unbiasable one under standard assumptions. Moreover, we show folklore VRF constructions in the ROM to achieve our notion without the need to program the random oracle. As a minor contribution, we also provide a generic and efficient construction of certified 1 to 1 VRFs from any VRF.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58737-5_6](https://doi.org/10.1007/978-3-031-58737-5_6)
## Monotone-Policy Aggregate Signatures.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-4].md#monotone-policy-aggregate-signatures)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-4].md#monotone-policy-aggregate-signatures)
### Authors
* Maya Farber Brodsky, Tel Aviv University, Tel Aviv, Israel
* Omer Paneth, Tel Aviv University, Tel Aviv, Israel
* Arka Rai Choudhuri, NTT Research, Sunnyvale, USA
* Abhishek Jain, NTT Research, Sunnyvale, USA
* Abhishek Jain, Johns Hopkins University, Baltimore, USA
### Abstract
> The notion of aggregate signatures allows for combining signatures from different parties into a short certificate that attests that all parties signed a message. In this work, we lift this notion to capture different, more expressive signing policies. For example, we can certify that a message was signed by a (weighted) threshold of signers.
> 
> We present the first constructions of aggregate signatures for monotone policies based on standard polynomial-time cryptographic assumptions. The aggregate signatures in our schemes are succinct, i.e., their size is independent of the number of signers. Moreover, verification is also succinct if all parties sign the same message (or if the messages have a succinct representation). All prior work requires either interaction between the parties or non-standard assumptions (that imply SNARKs for NP).
> 
> Our signature schemes are based on non-interactive batch arguments (BARGs) for monotone policies [Brakerski-Brodsky-Kalai-Lombardi-Paneth, Crypto’23]. In contrast to previous constructions, our BARGs satisfy a new notion of adaptive security which is instrumental to our application. Our new BARGs for monotone policies can be constructed from standard BARGs and other standard assumptions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58737-5_7](https://doi.org/10.1007/978-3-031-58737-5_7)
## Leakage-Tolerant Circuits.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-4].md#leakage-tolerant-circuits)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-4].md#leakage-tolerant-circuits)
### Authors
* Yuval Ishai, Technion, Haifa, Israel
* Yifan Song, Institute for Theoretical Computer Science, Institute for Interdisciplinary Information Sciences, Tsinghua University, Beijing, People’s Republic of China
* Yifan Song, Shanghai Qi Zhi Institute, Shanghai, People’s Republic of China
### Abstract
> A leakage-resilient circuit for \(f:\{0,1\}^n\rightarrow \{0,1\}^m\) is a randomized Boolean circuit C mapping a randomized encoding of an input x to an encoding of \(y=f(x)\), such that applying any leakage function \(L\in \mathcal L\) to the wires of C reveals essentially nothing about x. A leakage-tolerant circuit achieves the stronger guarantee that even when x and y are not protected by any encoding, the output of L can be simulated by applying some \(L'\in \mathcal L\) to x and y alone. Thus, C is as secure as an ideal hardware implementation of f with respect to leakage from \(\mathcal L\).
> 
> Leakage-resilient circuits were constructed for low-complexity classes \(\mathcal L\), including (length-t output) \(\mathcal{A}\mathcal{C}0\) functions, parities, and functions with bounded communication complexity. In contrast, leakage-tolerant circuits were only known for the simple case of probing leakage, where L outputs the values of t wires in C.
> 
> We initiate a systematic study of leakage-tolerant circuits for natural classes \(\mathcal L\) of global leakage functions, obtaining the following main results.
> 
> Leakage-tolerant circuits for depth-1 leakage. Every circuit \(C_f\) for f can be efficiently compiled into an \(\mathcal L\)-tolerant circuit C for f, where \(\mathcal L\) includes all leakage functions L that output either t parities or t disjunctions (alternatively, conjunctions) of any number of wires or their negations. In the case of parities, our simulator runs in \(2^{O(t)}\) time. We provide partial evidence that this may be inherent.
> 
> Application to stateful leakage-resilient circuits. Using a general transformation from leakage-tolerant circuits, we obtain the first construction of stateful t-leakage-resilient circuits that tolerate a continuous parity leakage, and the first such construction for disjunction/conjunction leakage in which the circuit size grows sub-quadratically with t. Interestingly, here we can obtain \(\text {poly}(t)\)-time simulation even in the case of parities.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58737-5_8](https://doi.org/10.1007/978-3-031-58737-5_8)
## Pseudorandom Isometries.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-4].md#pseudorandom-isometries)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-4].md#pseudorandom-isometries)
### Authors
* Prabhanjan Ananth, UCSB, Santa Barbara, USA
* Aditya Gulati, UCSB, Santa Barbara, USA
* Fatih Kaleoglu, UCSB, Santa Barbara, USA
* Yao-Ting Lin, UCSB, Santa Barbara, USA
### Abstract
> We introduce a new notion called \({\mathcal {Q}}\)-secure pseudorandom isometries (PRI). A pseudorandom isometry is an efficient quantum circuit that maps an n-qubit state to an \((n+m)\)-qubit state in an isometric manner. In terms of security, we require that the output of a q-fold PRI on \(\rho \), for \( \rho \in {\mathcal {Q}}\), for any polynomial q, should be computationally indistinguishable from the output of a q-fold Haar isometry on \(\rho \).
> 
> By fine-tuning \({\mathcal {Q}}\), we recover many existing notions of pseudorandomness. We present a construction of PRIs and assuming post-quantum one-way functions, we prove the security of \({\mathcal {Q}}\)-secure pseudorandom isometries (PRI) for different interesting settings of \({\mathcal {Q}}\).
> 
> We also demonstrate many cryptographic applications of PRIs, including, length extension theorems for quantum pseudorandomness notions, message authentication schemes for quantum states, multi-copy secure public and private encryption schemes, and succinct quantum commitments.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58737-5_9](https://doi.org/10.1007/978-3-031-58737-5_9)
## New Limits of Provable Security and Applications to ElGamal Encryption.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-4].md#new-limits-of-provable-security-and-applications-to-elgamal-encryption)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-4].md#new-limits-of-provable-security-and-applications-to-elgamal-encryption)
### Authors
* Sven Schäge, Eindhoven University of Technology, Eindhoven, Netherlands
### Abstract
> We provide new results showing that ElGamal encryption cannot be proven CCA1-secure – a long-standing open problem in cryptography. Our result follows from a very broad, meta-reduction-based impossibility result on random self-reducible relations with efficiently re-randomizable witnesses. The techniques that we develop allow, for the first time, to provide impossibility results for very weak security notions where the challenger outputs fresh challenge statements at the end of the security game. This can be used to finally tackle encryption-type definitions that have remained elusive in the past. We show that our results have broad applicability by casting several known cryptographic setups as instances of random self-reducible and re-randomizable relations. These setups include general semi-homomorphic PKE and the large class of certified homomorphic one-way bijections. As a result, we also obtain new impossibility results for the IND-CCA1 security of the PKEs of Paillier and Damgård–Jurik, and many one-more inversion assumptions like the one-more DLOG or the one-more RSA assumption.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58737-5_10](https://doi.org/10.1007/978-3-031-58737-5_10)
## Constructing Leakage-Resilient Shamir's Secret Sharing: Over Composite Order Fields.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-4].md#constructing-leakage-resilient-shamirs-secret-sharing-over-composite-order-fields)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-4].md#constructing-leakage-resilient-shamirs-secret-sharing-over-composite-order-fields)
### Authors
* Hemanta K. Maji, Department of Computer Science, Purdue University, West Lafayette, USA
* Xiuyu Ye, Department of Computer Science, Purdue University, West Lafayette, USA
* Hai H. Nguyen, Department of Computer Science, ETH Zurich, Zurich, Switzerland
* Anat Paskin-Cherniavsky, Department of Computer Science, Ariel University, Ariel, Israel
### Abstract
> Probing physical bits in hardware has compromised cryptographic systems. This work investigates how to instantiate Shamir’s secret sharing so that the physical probes into its shares reveal statistically insignificant information about the secret.
> 
> Over prime fields, Maji, Nguyen, Paskin-Cherniavsky, Suad, and Wang (EUROCRYPT 2021) proved that choosing random evaluation places achieves this objective with high probability. Our work extends their randomized construction to composite order fields – particularly for fields with characteristic 2. Next, this work presents an algorithm to classify evaluation places as secure or vulnerable against physical-bit probes for some specific cases.
> 
> Our security analysis of the randomized construction is Fourier-analytic, and the classification techniques are combinatorial. Our analysis relies on (1) contemporary Bézout-theorem-type algebraic complexity results that bound the number of simultaneous zeroes of a system of polynomial equations over composite order fields and (2) characterization of the zeroes of an appropriate generalized Vandermonde determinant.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58737-5_11](https://doi.org/10.1007/978-3-031-58737-5_11)
## Connecting Leakage-Resilient Secret Sharing to Practice: Scaling Trends and Physical Dependencies of Prime Field Masking.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-4].md#connecting-leakage-resilient-secret-sharing-to-practice-scaling-trends-and-physical-dependencies-of-prime-field-masking)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-4].md#connecting-leakage-resilient-secret-sharing-to-practice-scaling-trends-and-physical-dependencies-of-prime-field-masking)
### Authors
* Sebastian Faust, Department of Computer Science, Technical University of Darmstadt, Darmstadt, Germany
* Elena Micheli, Department of Computer Science, Technical University of Darmstadt, Darmstadt, Germany
* Maximilian Orlt, Department of Computer Science, Technical University of Darmstadt, Darmstadt, Germany
* Loïc Masure, LIRMM, Univ. Montpellier, CNRS, Montpellier, France
* François-Xavier Standaert, Crypto Group, ICTEAM Institute, UCLouvain, Louvain-la-Neuve, Belgium
### Abstract
> Symmetric ciphers operating in (small or mid-size) prime fields have been shown to be promising candidates to maintain security against low-noise (or even noise-free) side-channel leakage. In order to design prime ciphers that best trade physical security and implementation efficiency, it is essential to understand how side-channel security evolves with the field size (i.e., scaling trends). Unfortunately, it has also been shown that such scaling trends depend on the leakage functions and cannot be explained by the standard metrics used to analyze Boolean masking with noise. In this work, we therefore initiate a formal study of prime field masking for two canonical leakage functions: bit leakages and Hamming weight leakages. By leveraging theoretical results from the leakage-resilient secret sharing literature, we explain formally why (1) bit leakages correspond to a worst-case and do not encourage operating in larger fields, and (2) an opposite conclusion holds for Hamming weight leakages, where increasing the prime field modulus p can contribute to a security amplification that is exponential in the number of shares, with \(\log (p)\) seen as security parameter like the noise variance in Boolean masking. We combine these theoretical results with simulated experiments and show that the interest masking in larger prime fields can degrade gracefully when leakage functions slightly deviate from the Hamming weight abstraction, motivating further research towards characterizing (ideally wide) classes of leakage functions offering such guarantees.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58737-5_12](https://doi.org/10.1007/978-3-031-58737-5_12)
## From Random Probing to Noisy Leakages Without Field-Size Dependence.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-4].md#from-random-probing-to-noisy-leakages-without-field-size-dependence)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-4].md#from-random-probing-to-noisy-leakages-without-field-size-dependence)
### Authors
* Gianluca Brian, ETH Zurich, Zurich, Switzerland
* Stefan Dziembowski, University of Warsaw and IDEAS NCBR, Warsaw, Poland
* Sebastian Faust, Technical University of Darmstadt, Darmstadt, Germany
### Abstract
> Side channel attacks are devastating attacks targeting cryptographic implementations. To protect against these attacks, various countermeasures have been proposed – in particular, the so-called masking scheme. Masking schemes work by hiding sensitive information via secret sharing all intermediate values that occur during the evaluation of a cryptographic implementation. Over the last decade, there has been broad interest in designing and formally analyzing such schemes. The random probing model considers leakage where the value on each wire leaks with some probability \(\epsilon \). This model is important as it implies security in the noisy leakage model via a reduction by Duc et al. (Eurocrypt 2014). Noisy leakages are considered the “gold-standard” for analyzing masking schemes as they accurately model many real-world physical leakages. Unfortunately, the reduction of Duc et al. is non-tight, and in particular requires that the amount of noise increases by a factor of \(|\mathbb {F} |\) for circuits that operate over \(\mathbb {F} \) (where \(\mathbb {F} \) is a finite field). In this work, we give a generic transformation from \(\varepsilon \)-random probing to \(\delta \)-average probing, with \(\delta \approx \varepsilon ^2\), which avoids this loss of \(|\mathbb {F} |\). Since the average probing is identical to the noisy leakage model (Eurocrypt 2014), this yields for the first time a security analysis of masked circuits where the noise parameter in the noisy leakage model is independent of \(|\mathbb {F} |\). The latter is particularly important for cryptographic schemes operating over large fields, e.g., the AES or the recently standardized post-quantum schemes.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58737-5_13](https://doi.org/10.1007/978-3-031-58737-5_13)
## A Direct PRF Construction from Kolmogorov Complexity.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-4].md#a-direct-prf-construction-from-kolmogorov-complexity)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-4].md#a-direct-prf-construction-from-kolmogorov-complexity)
### Authors
* Yanyi Liu, Cornell Tech, New York, USA
* Rafael Pass, Cornell Tech, New York, USA
* Rafael Pass, Tel-Aviv University, Tel Aviv, Israel
### Abstract
> While classic results in the 1980s establish that one-way functions (OWF) imply the existence of pseudorandom generators (PRG) which in turn imply pseudorandom functions (PRF), the constructions (most notably the one from OWFs to PRGs) is complicated and inefficient.
> 
> Consequently, researchers have developed alternative direct constructions of PRFs from various different concrete hardness assumptions. In this work, we continue this thread of work and demonstrate the first direct construction of PRFs from average-case hardness of the time-bounded Kolmogorov complexity problem \(\textsf{MK}^t\textsf{P}[s]\), where given a threshold, \(s(\cdot )\), and a polynomial time-bound, \(t(\cdot )\), \(\textsf{MK}^t\textsf{P}[s]\) denotes the language consisting of strings x with t-bounded Kolmogorov complexity, \(K^t(x)\), bounded by s(|x|).
> 
> In more detail, we demonstrate a direct PRF construction with quasi-polynomial security from mild avg-case of hardness of \(\textsf{MK}^t\textsf{P}[2^{O(\sqrt{\log n})}]\) w.r.t the uniform distribution. We note that by earlier results, this assumption is known to be equivalent to the existence of quasi-polynomially secure OWFs; as such, our results yield the first direct (quasi-polynomially secure) PRF construction from a natural hardness assumptions that also is known to be implied by (quasi-polynomially secure) PRFs.
> 
> Perhaps surprisingly, we show how to make use of the Nisan-Wigderson PRG construction to get a cryptographic, as opposed to a complexity-theoretic, PRG.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58737-5_14](https://doi.org/10.1007/978-3-031-58737-5_14)
