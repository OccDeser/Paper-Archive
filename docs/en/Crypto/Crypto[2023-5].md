# Crypto[2023-5]
## Tracing Quantum State Distinguishers via Backtracking.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-5].md#tracing-quantum-state-distinguishers-via-backtracking)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-5].md#tracing-quantum-state-distinguishers-via-backtracking)
### Authors
* Mark Zhandry, NTT Research, Sunnyvale, USA
### Abstract
> We show the following results:
> 
> The post-quantum equivalence of indistinguishability obfuscation and differing inputs obfuscation in the restricted setting where the outputs differ on at most a polynomial number of points. Our result handles the case where the auxiliary input may contain a quantum state; previous results could only handle classical auxiliary input.
> 
> Bounded collusion traitor tracing from general public key encryption, where the decoder is allowed to contain a quantum state. The parameters of the scheme grow polynomially in the collusion bound.
> 
> Collusion-resistant traitor tracing with constant-size ciphertexts from general public key encryption, again for quantum state decoders. The public key and secret keys grow polynomially in the number of users.
> 
> Traitor tracing with embedded identities in the keys, again for quantum state decoders, under a variety of different assumptions with different parameter size trade-offs.
> 
> Traitor tracing and differing inputs obfuscation with quantum decoders/auxiliary input arises naturally when considering the post-quantum security of these primitives. We obtain our results by abstracting out a core algorithmic model, which we call the Back One Step (BOS) model. We prove a general theorem, reducing many quantum results including ours to designing classical algorithms in the BOS model. We then provide simple algorithms for the particular instances studied in this work.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38554-4_1](https://doi.org/10.1007/978-3-031-38554-4_1)
## Black-Hole Radiation Decoding Is Quantum Cryptography.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-5].md#black-hole-radiation-decoding-is-quantum-cryptography)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-5].md#black-hole-radiation-decoding-is-quantum-cryptography)
### Authors
* Zvika Brakerski, Weizmann Institute of Science, Rehovot, Israel
### Abstract
> We propose to study equivalence relations between phenomena in high-energy physics and the existence of standard cryptographic primitives, and show the first example where such an equivalence holds. A small number of prior works showed that high-energy phenomena can be explained by cryptographic hardness. Examples include using the existence of one-way functions to explain the hardness of decoding black-hole Hawking radiation (Harlow and Hayden 2013, Aaronson 2016), and using pseudorandom quantum states to explain the hardness of computing AdS/CFT dictionary (Bouland, Fefferman and Vazirani, 2020).
> 
> In this work we show, for the former example of black-hole radiation decoding, that it also implies the existence of secure quantum cryptography. In fact, we show an existential equivalence between the hardness of black-hole radiation decoding and a variety of cryptographic primitives, including bit-commitment schemes and oblivious transfer protocols (using quantum communication). This can be viewed (with proper disclaimers, as we discuss) as providing a physical justification for the existence of secure cryptography. We conjecture that such connections may be found in other high-energy physics phenomena.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38554-4_2](https://doi.org/10.1007/978-3-031-38554-4_2)
## Cloning Games: A General Framework for Unclonable Primitives.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-5].md#cloning-games-a-general-framework-for-unclonable-primitives)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-5].md#cloning-games-a-general-framework-for-unclonable-primitives)
### Authors
* Prabhanjan Ananth, University of California, Santa Barbara, CA, USA
* Fatih Kaleoglu, University of California, Santa Barbara, CA, USA
* Qipeng Liu, Simons Institute for the Theory of Computing, Berkeley, CA, USA
### Abstract
> The powerful no-cloning principle of quantum mechanics can be leveraged to achieve interesting primitives, referred to as unclonable primitives, that are impossible to achieve classically. In the past few years, we have witnessed a surge of new unclonable primitives. While prior works have mainly focused on establishing feasibility results, another equally important direction, that of understanding the relationship between different unclonable primitives is still in its nascent stages. Moving forward, we need a more systematic study of unclonable primitives.
> 
> To this end, we introduce a new framework called cloning games. This framework captures many fundamental unclonable primitives such as quantum money, copy-protection, unclonable encryption, single-decryptor encryption, and many more. By reasoning about different types of cloning games, we obtain many interesting implications to unclonable cryptography, including the following:
> 
> 1. We obtain the first construction of information-theoretically secure single-decryptor encryption in the one-time setting.
> 
> 2. We construct unclonable encryption in the quantum random oracle model based on BB84 states, improving upon the previous work, which used coset states. Our work also provides a simpler security proof for the previous work.
> 
> 3. We construct copy-protection for single-bit point functions in the quantum random oracle model based on BB84 states, improving upon the previous work, which used coset states, and additionally, providing a simpler proof.
> 
> 4. We establish a relationship between different challenge distributions of copy-protection schemes and single-decryptor encryption schemes.
> 
> 5. Finally, we present a new construction of one-time encryption with certified deletion.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38554-4_3](https://doi.org/10.1007/978-3-031-38554-4_3)
## Publicly-Verifiable Deletion via Target-Collapsing Functions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-5].md#publicly-verifiable-deletion-via-target-collapsing-functions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-5].md#publicly-verifiable-deletion-via-target-collapsing-functions)
### Authors
* James Bartusek, University of California, Berkeley, USA
* Dakshita Khurana, University of Illinois Urbana-Champaign, Champaign, USA
* Alexander Poremba, California Institute of Technology, Pasadena, USA
### Abstract
> We build quantum cryptosystems that support publicly-verifiable deletion from standard cryptographic assumptions. We introduce target-collapsing as a weakening of collapsing for hash functions, analogous to how second preimage resistance weakens collision resistance; that is, target-collapsing requires indistinguishability between superpositions and mixtures of preimages of an honestly sampled image.
> 
> We show that target-collapsing hashes enable publicly-verifiable deletion (\(\textsf{PVD}\)), proving conjectures from [Poremba, ITCS’23] and demonstrating that the Dual-Regev encryption (and corresponding fully homomorphic encryption) schemes support \(\textsf{PVD}\) under the LWE assumption. We further build on this framework to obtain a variety of primitives supporting publicly-verifiable deletion from weak cryptographic assumptions, including:
> 
> Commitments with \(\textsf{PVD}\) assuming the existence of injective one-way functions, or more generally, almost-regular one-way functions. Along the way, we demonstrate that (variants of) target-collapsing hashes can be built from almost-regular one-way functions.
> 
> Public-key encryption with \(\textsf{PVD}\) assuming trapdoored variants of injective (or almost-regular) one-way functions. We also demonstrate that the encryption scheme of [Hhan, Morimae, and Yamakawa, Eurocrypt’23] based on pseudorandom group actions has \(\textsf{PVD}\).
> 
> X with \(\textsf{PVD}\) for \(X \in \{\)attribute-based encryption, quantum fully-homomorphic encryption, witness encryption, time-revocable encryption\(\}\), assuming X and trapdoored variants of injective (or almost-regular) one-way functions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38554-4_4](https://doi.org/10.1007/978-3-031-38554-4_4)
## On Concurrent Multi-party Quantum Computation.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-5].md#on-concurrent-multi-party-quantum-computation)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-5].md#on-concurrent-multi-party-quantum-computation)
### Authors
* Vipul Goyal, NTT Research, Sunnyvale, USA
* Xiao Liang, NTT Research, Sunnyvale, USA
* Vipul Goyal, CMU, Pittsburgh, USA
* Giulio Malavolta, Max Planck Institute for Security and Privacy, Bochum, Germany
### Abstract
> Recently, significant progress has been made toward quantumly secure multi-party computation (MPC) in the stand-alone setting. In sharp contrast, the picture of concurrently secure MPC (or even 2PC), for both classical and quantum functionalities, still remains unclear. Quantum information behaves in a fundamentally different way, making the job of adversaries harder and easier at the same time. Thus, it is unclear if the positive or negative results from the classical setting still apply. This work initiates a systematic study of concurrent secure computation in the quantum setting. We obtain a mix of positive and negative results.
> 
> We first show that assuming the existence of post-quantum one-way functions (PQ-OWFs), concurrently secure 2PC (and thus MPC) for quantum functionalities is impossible. Next, we focus on the bounded-concurrent setting, where we obtain simulation-sound zero-knowledge arguments for both \(\textbf{NP} \) and \(\textbf{QMA}\), assuming PQ-OWFs. This is obtained by a new design of simulation-sound gadget, relying on the recent post-quantum non-malleable commitments by Liang, Pandey, and Yamakawa [arXiv:2207.05861], and the quantum rewinding strategy recently developed by Ananth, Chung, and La Placa [CRYPTO’21] for bounded-concurrent post-quantum ZK.
> 
> Moreover, we show that our technique is general enough—It also leads to quantum-secure bounded-concurrent coin-flipping protocols, and eventually general-purpose 2PC and MPC, for both classical and quantum functionalities. All these constructions can be based on the quantum hardness of Learning with Errors.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38554-4_5](https://doi.org/10.1007/978-3-031-38554-4_5)
## Simple Tests of Quantumness Also Certify Qubits.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-5].md#simple-tests-of-quantumness-also-certify-qubits)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-5].md#simple-tests-of-quantumness-also-certify-qubits)
### Authors
* Zvika Brakerski, Weizmann Institute of Science, Rehovot, Israel
* Eitan Porat, Weizmann Institute of Science, Rehovot, Israel
* Thomas Vidick, Weizmann Institute of Science, Rehovot, Israel
* Alexandru Gheorghiu, Chalmers University of Technology, Gothenburg, Sweden
* Gregory D. Kahanamoku-Meyer, Lawrence Berkeley National Laboratory, Berkeley, CA, USA
* Gregory D. Kahanamoku-Meyer, University of California, Berkeley, CA, USA
* Thomas Vidick, California Institute of Technology, Pasadena, CA, USA
### Abstract
> A test of quantumness is a protocol that allows a classical verifier to certify (only) that a prover is not classical. We show that tests of quantumness that follow a certain template, which captures recent proposals such as [KCVY21, KLVY22], can in fact do much more. Namely, the same protocols can be used for certifying a qubit, a building-block that stands at the heart of applications such as certifiable randomness and classical delegation of quantum computation.
> 
> Certifying qubits was previously only known to be possible based on families of post-quantum trapdoor claw-free functions (TCF) with an advanced “adaptive hardcore bit” property, which have only been constructed based on the hardness of the Learning with Errors problem [BCM+21] and recently isogeny-based group actions [AMR23]. Our framework allows certification of qubits based only on the existence of post-quantum TCF, without the adaptive hardcore bit property, or on quantum fully homomorphic encryption. These can be instantiated, for example, from Ring Learning with Errors. This has the potential to improve the efficiency of qubit certification and derived functionalities.
> 
> On the technical side, we show that the quantum soundness of any such protocol can be reduced to proving a bound on a simple algorithmic task: informally, answering “two challenges simultaneously” in the protocol. Our reduction formalizes the intuition that these protocols demonstrate quantumness by leveraging the impossibility of rewinding a general quantum prover. This allows us to prove tight bounds on the quantum soundness of [KCVY21] and [KLVY22], showing that no quantum polynomial-time prover can succeed with probability larger than \(\cos ^2 \frac{\pi }{8}\approx 0.853\). Previously, only an upper bound on the success probability of classical provers, and a lower bound on the success probability of quantum provers, were known. We then extend this proof of quantum soundness to show that provers that approach the quantum soundness bound must perform almost anti-commuting measurements. This certifies that the prover holds a qubit.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38554-4_6](https://doi.org/10.1007/978-3-031-38554-4_6)
## Cryptography with Certified Deletion.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-5].md#cryptography-with-certified-deletion)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-5].md#cryptography-with-certified-deletion)
### Authors
* James Bartusek, UC Berkeley, Berkeley, USA
* Dakshita Khurana, UIUC, Champaign, USA
### Abstract
> We propose a unifying framework that yields an array of cryptographic primitives with certified deletion. These primitives enable a party in possession of a quantum ciphertext to generate a classical certificate that the encrypted plaintext has been information-theoretically deleted, and cannot be recovered even given unbounded computational resources.
> 
> For \(X \in \{\textsf{public}\text {-}\textsf{key},\mathsf {attribute\text {-}based},\mathsf {fully\text {-}homomorphic},\textsf{witness},\textsf{timed}\text {-}\textsf{release}\}\), our compiler converts any (post-quantum) X encryption to X encryption with certified deletion. In addition, we compile statistically-binding commitments to statistically-binding commitments with certified everlasting hiding. As a corollary, we also obtain statistically-sound zero-knowledge proofs for QMA with certified everlasting zero-knowledge assuming statistically-binding commitments.
> 
> We also obtain a strong form of everlasting security for two-party and multi-party computation in the dishonest majority setting. While simultaneously achieving everlasting security against all parties in this setting is known to be impossible, we introduce everlasting security transfer (EST). This enables any one party (or a subset of parties) to dynamically and certifiably information-theoretically delete other participants’ data after protocol execution. We construct general-purpose secure computation with EST assuming statistically-binding commitments, which can be based on one-way functions or pseudorandom quantum states.
> 
> We obtain our results by developing a novel proof technique to argue that a bit b has been information-theoretically deleted from an adversary’s view once they output a valid deletion certificate, despite having been previously information-theoretically determined by the ciphertext they held in their view. This technique may be of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38554-4_7](https://doi.org/10.1007/978-3-031-38554-4_7)
## Secure Computation with Shared EPR Pairs (Or: How to Teleport in Zero-Knowledge).
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-5].md#secure-computation-with-shared-epr-pairs-or-how-to-teleport-in-zero-knowledge)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-5].md#secure-computation-with-shared-epr-pairs-or-how-to-teleport-in-zero-knowledge)
### Authors
* James Bartusek, UC Berkeley, Berkeley, USA
* Dakshita Khurana, UIUC, Champaign, USA
* Akshayaram Srinivasan, Tata Institute of Fundamental Research, Mumbai, India
### Abstract
> Can a sender non-interactively transmit one of two strings to a receiver without knowing which string was received? Does there exist minimally-interactive secure multiparty computation that only makes (black-box) use of symmetric-key primitives? We provide affirmative answers to these questions in a model where parties have access to shared EPR pairs, thus demonstrating the cryptographic power of this resource.
> 
> First, we construct a one-shot (i.e., single message) string oblivious transfer (OT) protocol with random receiver bit in the shared EPR pairs model, assuming the (sub-exponential) hardness of LWE.
> 
> Building on this, we show that secure teleportation through quantum channels is possible. Specifically, given the description of any quantum operation Q, a sender with (quantum) input \(\rho \) can send a single classical message that securely transmits \(Q(\rho )\) to a receiver. That is, we realize an ideal quantum channel that takes input \(\rho \) from the sender and provably delivers \(Q(\rho )\) to the receiver without revealing any other information.
> 
> This immediately gives a number of applications in the shared EPR pairs model: (1) non-interactive secure computation of unidirectional classical randomized functionalities, (2) NIZK for QMA from standard (sub-exponential) hardness assumptions, and (3) a non-interactive zero-knowledge state synthesis protocol.
> 
> Next, we construct a two-round (round-optimal) secure multiparty computation protocol for classical functionalities in the shared EPR pairs model that is unconditionally-secure in the (quantum-accessible) random oracle model.
> 
> Classically, both of these results cannot be obtained without some form of correlated randomness shared between the parties, and the only known approach is to have a trusted dealer set up random (string) OT correlations. In the quantum world, we show that shared EPR pairs (which are simple and can be deterministically generated) are sufficient. At the heart of our work are novel techniques for making use of entangling operations to generate string OT correlations, and for instantiating the Fiat-Shamir transform using correlation-intractability in the quantum setting.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38554-4_8](https://doi.org/10.1007/978-3-031-38554-4_8)
## Quantum Linear Key-Recovery Attacks Using the QFT.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-5].md#quantum-linear-key-recovery-attacks-using-the-qft)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-5].md#quantum-linear-key-recovery-attacks-using-the-qft)
### Authors
* André Schrottenloher, Univ Rennes, Inria, CNRS, IRISA, Rennes, France
### Abstract
> The Quantum Fourier Transform is a fundamental tool in quantum cryptanalysis. In symmetric cryptanalysis, hidden shift algorithms such as Simon’s, which rely on the QFT, have been used to obtain structural attacks on some very specific block ciphers. The Fourier Transform is also used in classical cryptanalysis, for example in FFT-based linear key-recovery attacks introduced by Collard et al. (ICISC 2007). Whether such techniques can be adapted to the quantum setting has remained so far an open question.
> 
> In this paper, we introduce a new framework for quantum linear key-recovery attacks using the QFT. These attacks loosely follow the classical method of Collard et al., in that they rely on the fast computation of a correlation state in which experimental correlations, rather than being directly accessible, are encoded in the amplitudes of a quantum state. The experimental correlation is a statistic that is expected to be higher for the good key, and on some conditions, the increased amplitude creates a speedup with respect to an exhaustive search of the key. The same method also yields a new family of structural attacks, and new examples of quantum speedups beyond quadratic using classical known-plaintext queries.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38554-4_9](https://doi.org/10.1007/978-3-031-38554-4_9)
## Tighter QCCA-Secure Key Encapsulation Mechanism with Explicit Rejection in the Quantum Random Oracle Model.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-5].md#tighter-qcca-secure-key-encapsulation-mechanism-with-explicit-rejection-in-the-quantum-random-oracle-model)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-5].md#tighter-qcca-secure-key-encapsulation-mechanism-with-explicit-rejection-in-the-quantum-random-oracle-model)
### Authors
* Jiangxia Ge, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, 100093, China
* Tianshu Shan, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, 100093, China
* Rui Xue, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, 100093, China
* Jiangxia Ge, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, 100049, China
* Tianshu Shan, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, 100049, China
* Rui Xue, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, 100049, China
### Abstract
> Hofheinz et al. (TCC 2017) proposed several key encapsulation mechanism (KEM) variants of Fujisaki-Okamoto (FO) transformation, including and \(\textsf {QFO}_m^\bot \), and they are widely used in the post-quantum cryptography standardization launched by NIST. These transformations are divided into two types, the implicit and explicit rejection type, including and \(\{\textsf {FO}^{\bot }\), \(\textsf {FO}_m^\bot \), \(\textsf {QFO}_m^\bot \}\), respectively. The decapsulation algorithm of the implicit (resp. explicit) rejection type returns a pseudorandom value (resp. an abort symbol \(\bot \)) for an invalid ciphertext.
> 
> For the implicit rejection type, the IND-CCA security reduction of in the quantum random oracle model (QROM) can avoid the quadratic security loss, as shown by Kuchta et al. (EUROCRYPT 2020). However, for the explicit rejection type, the best known IND-CCA security reduction in the QROM presented by Hövelmanns et al. (ASIACRYPT 2022) for \(\textsf {FO}_m^\bot \) still suffers from a quadratic security loss. Moreover, it is not clear until now whether the implicit rejection type is more secure than the explicit rejection type.
> 
> In this paper, a QROM security reduction of \(\textsf {FO}_m^\bot \) without incurring a quadratic security loss is provided. Furthermore, our reduction achieves IND-qCCA security, which is stronger than the IND-CCA security. To achieve our result, two steps are taken: The first step is to prove that the IND-qCCA security of \(\textsf {FO}_m^\bot \) can be tightly reduced to the IND-CPA security of \(\textsf {FO}_m^\bot \) by using the online extraction technique proposed by Don et al. (EUROCRYPT 2022). The second step is to prove that the IND-CPA security of \(\textsf {FO}_m^\bot \) can be reduced to the IND-CPA security of the underlying public key encryption (PKE) scheme without incurring quadratic security loss by using the Measure-Rewind-Measure One-Way to Hiding Lemma (EUROCRYPT 2020).
> 
> In addition, we prove that (at least from a theoretic point of view), security is independent of whether the rejection type is explicit (\(\textsf {FO}_m^\bot \)) or implicit () if the underlying PKE scheme is weakly \(\gamma \)-spread.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38554-4_10](https://doi.org/10.1007/978-3-031-38554-4_10)
## A Detailed Analysis of Fiat-Shamir with Aborts.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-5].md#a-detailed-analysis-of-fiat-shamir-with-aborts)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-5].md#a-detailed-analysis-of-fiat-shamir-with-aborts)
### Authors
* Julien Devevey, ENS de Lyon, Lyon, France
* Pouria Fallahpour, ENS de Lyon, Lyon, France
* Alain Passelègue, ENS de Lyon, Lyon, France
* Damien Stehlé, ENS de Lyon, Lyon, France
* Alain Passelègue, Inria Lyon, Lyon, France
* Damien Stehlé, CryptoLab Inc., Lyon, France
### Abstract
> Lyubashevky’s signatures are based on the Fiat-Shamir with Aborts paradigm. It transforms an interactive identification protocol that has a non-negligible probability of aborting into a signature by repeating executions until a loop iteration does not trigger an abort. Interaction is removed by replacing the challenge of the verifier by the evaluation of a hash function, modeled as a random oracle in the analysis. The access to the random oracle is classical (ROM), resp. quantum (QROM), if one is interested in security against classical, resp. quantum, adversaries. Most analyses in the literature consider a setting with a bounded number of aborts (i.e., signing fails if no signature is output within a prescribed number of loop iterations), while practical instantiations (e.g., Dilithium) run until a signature is output (i.e., loop iterations are unbounded).
> 
> In this work, we emphasize that combining random oracles with loop iterations induces numerous technicalities for analyzing correctness, run-time, and security of the resulting schemes, both in the bounded and unbounded case. As a first contribution, we put light on errors in all existing analyses. We then provide two detailed analyses in the QROM for the bounded case, adapted from Kiltz et al [EUROCRYPT’18] and Grilo et al [ASIACRYPT’21]. In the process, we prove the underlying \(\varSigma \)-protocol to achieve a stronger zero-knowledge property than usually considered for \(\varSigma \)-protocols with aborts, which enables a corrected analysis. A further contribution is a detailed analysis in the case of unbounded aborts, the latter inducing several additional subtleties.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38554-4_11](https://doi.org/10.1007/978-3-031-38554-4_11)
## Fixing and Mechanizing the Security Proof of Fiat-Shamir with Aborts and Dilithium.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-5].md#fixing-and-mechanizing-the-security-proof-of-fiat-shamir-with-aborts-and-dilithium)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-5].md#fixing-and-mechanizing-the-security-proof-of-fiat-shamir-with-aborts-and-dilithium)
### Authors
* Manuel Barbosa, University of Porto (FCUP) and INESC TEC, Porto, Portugal
* Gilles Barthe, Max Planck Institute for Security and Privacy, Bochum, Germany
* Christian Doczkal, Max Planck Institute for Security and Privacy, Bochum, Germany
* Yi Lee, Max Planck Institute for Security and Privacy, Bochum, Germany
* Jelle Don, Centrum Wiskunde & Informatica, Amsterdam, The Netherlands
* Serge Fehr, Centrum Wiskunde & Informatica, Amsterdam, The Netherlands
* Yu-Hsuan Huang, Centrum Wiskunde & Informatica, Amsterdam, The Netherlands
* Serge Fehr, Leiden University, Leiden, The Netherlands
* Benjamin Grégoire, Inria Centre at Université Côte d’Azur, Valbonne, France
* Andreas Hülsing, Eindhoven University of Technology, Eindhoven, The Netherlands
* Yi Lee, University of Maryland, College Park, USA
* Xiaodi Wu, University of Maryland, College Park, USA
### Abstract
> We extend and consolidate the security justification for the Dilithium signature scheme. In particular, we identify a subtle but crucial gap that appears in several ROM and QROM security proofs for signature schemes that are based on the Fiat-Shamir with aborts paradigm, including Dilithium. The gap lies in the CMA-to-NMA reduction and was uncovered when trying to formalize a variant of the QROM security proof by Kiltz, Lyubashevsky, and Schaffner (Eurocrypt 2018). The gap was confirmed by the authors, and there seems to be no simple patch for it. We provide new, fixed proofs for the affected CMA-to-NMA reduction, both for the ROM and the QROM, and we perform a concrete security analysis for the case of Dilithium to show that the claimed security level is still valid after addressing the gap. Furthermore, we offer a fully mechanized ROM proof for the CMA-security of Dilithium in the EasyCrypt proof assistant. Our formalization includes several new tools and techniques of independent interest for future formal verification results.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38554-4_12](https://doi.org/10.1007/978-3-031-38554-4_12)
## Compact Lattice Gadget and Its Applications to Hash-and-Sign Signatures.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-5].md#compact-lattice-gadget-and-its-applications-to-hash-and-sign-signatures)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-5].md#compact-lattice-gadget-and-its-applications-to-hash-and-sign-signatures)
### Authors
* Yang Yu, BNRist, Tsinghua University, Beijing, China
* Yang Yu, Zhongguancun Laboratory, Beijing, China
* Yang Yu, National Financial Cryptography Research Center, Beijing, China
* Huiwen Jia, School of Mathematics and Information Science, Key Laboratory of Information Security, Guangzhou University, Guangzhou, China
* Huiwen Jia, Guangzhou Center for Applied Mathematics, Guangzhou University, Guangzhou, China
* Xiaoyun Wang, Institute for Advanced Study, Tsinghua University, Beijing, China
* Xiaoyun Wang, Key Laboratory of Cryptologic Technology and Information Security (Ministry of Education), Qingdao, China
* Xiaoyun Wang, Shandong Institute of Blockchain, Jinan, China
### Abstract
> Lattice gadgets and the associated algorithms are the essential building blocks of lattice-based cryptography. In the past decade, they have been applied to build versatile and powerful cryptosystems. However, the practical optimizations and designs of gadget-based schemes generally lag their theoretical constructions. For example, the gadget-based signatures have elegant design and capability of extending to more advanced primitives, but they are far less efficient than other lattice-based signatures.
> 
> This work aims to improve the practicality of gadget-based cryptosystems, with a focus on hash-and-sign signatures. To this end, we develop a compact gadget framework in which the used gadget is a square matrix instead of the short and fat one used in previous constructions. To work with this compact gadget, we devise a specialized gadget sampler, called semi-random sampler, to compute the approximate preimage. It first deterministically computes the error and then randomly samples the preimage. We show that for uniformly random targets, the preimage and error distributions are simulatable without knowing the trapdoor. This ensures the security of the signature applications. Compared to the Gaussian-distributed errors in previous algorithms, the deterministic errors have a smaller size, which lead to a substantial gain in security and enables a practically working instantiation.
> 
> As the applications, we present two practically efficient gadget-based signature schemes based on NTRU and Ring-LWE respectively. The NTRU-based scheme offers comparable efficiency to Falcon and Mitaka and a simple implementation without the need of generating the NTRU trapdoor. The LWE-based scheme also achieves a desirable overall performance. It not only greatly outperforms the state-of-the-art LWE-based hash-and-sign signatures, but also has an even smaller size than the LWE-based Fiat-Shamir signature scheme Dilithium. These results fill the long-term gap in practical gadget-based signatures.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38554-4_13](https://doi.org/10.1007/978-3-031-38554-4_13)
## Machine-Checked Security for rmXMSS as in RFC 8391 and $\mathrm {SPHINCS^{+}} $.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-5].md#machine-checked-security-for-rmxmss-as-in-rfc-8391-and-mathrm-sphincs)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-5].md#machine-checked-security-for-rmxmss-as-in-rfc-8391-and-mathrm-sphincs)
### Authors
* Manuel Barbosa, University of Porto (FCUP) and INESC TEC, Porto, Portugal
* François Dupressoir, University of Bristol, Bristol, UK
* Benjamin Grégoire, Université Côte d’Azur, Inria, Sophia Antipolis, France
* Andreas Hülsing, Eindhoven University of Technology, Eindhoven, The Netherlands
* Matthias Meijers, Eindhoven University of Technology, Eindhoven, The Netherlands
* Pierre-Yves Strub, Meta, Paris, France
### Abstract
> This work presents a novel machine-checked tight security proof for \(\textrm{XMSS} \)—a stateful hash-based signature scheme that is (1) standardized in RFC 8391 and NIST SP 800-208, and (2) employed as a primary building block of \(\mathrm {SPHINCS^{+}} \), one of the signature schemes recently selected for standardization as a result of NIST’s post-quantum competition.
> 
> In 2020, Kudinov, Kiktenko, and Fedoro pointed out a flaw affecting the tight security proofs of \(\mathrm {SPHINCS^{+}} \) and \(\textrm{XMSS} \). For the case of \(\mathrm {SPHINCS^{+}} \), this flaw was fixed in a subsequent tight security proof by Hülsing and Kudinov. Unfortunately, employing the fix from this proof to construct an analogous tight security proof for \(\textrm{XMSS} \) would merely demonstrate security with respect to an insufficient notion.
> 
> At the cost of modeling the message-hashing function as a random oracle, we complete the tight security proof for \(\textrm{XMSS} \) and formally verify it using the EasyCrypt proof assistant. (Note that this merely extends the use of the random oracle model, as this model is already required in other parts of the security analysis to justify the currently standardized parameter values). As part of this endeavor, we formally verify the crucial step common to the security proofs of \(\mathrm {SPHINCS^{+}} \) and \(\textrm{XMSS} \) that was found to be flawed before, thereby confirming that the core of the aforementioned security proof by Hülsing and Kudinov is correct.
> 
> As this is the first work to formally verify proofs for hash-based signature schemes in EasyCrypt, we develop several novel libraries for the fundamental cryptographic concepts underlying such schemes—e.g., hash functions and digital signature schemes—establishing a common starting point for future formal verification efforts. These libraries will be particularly helpful in formally verifying proofs of other hash-based signature schemes such as \(\textrm{LMS} \) or \(\mathrm {SPHINCS^{+}} \).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38554-4_14](https://doi.org/10.1007/978-3-031-38554-4_14)
## Revisiting the Constant-Sum Winternitz One-Time Signature with Applications to SPHINCS+ and XMSS.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-5].md#revisiting-the-constant-sum-winternitz-one-time-signature-with-applications-to-sphincs-and-xmss)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-5].md#revisiting-the-constant-sum-winternitz-one-time-signature-with-applications-to-sphincs-and-xmss)
### Authors
* Kaiyi Zhang, Department of Computer Science, Shanghai Jiao Tong University, 200240, Shanghai, China
* Hongrui Cui, Department of Computer Science, Shanghai Jiao Tong University, 200240, Shanghai, China
* Yu Yu, Department of Computer Science, Shanghai Jiao Tong University, 200240, Shanghai, China
* Yu Yu, Shanghai Qi Zhi Institute, 200232, Shanghai, China
### Abstract
> Hash-based signatures offer a conservative alternative to post-quantum signatures with arguably better-understood security than other post-quantum candidates. As a core building block of hash-based signatures, the efficiency of one-time signature (OTS) largely dominates that of hash-based signatures. The WOTS\(^{+}\) signature scheme (Africacrypt 2013) is the current state-of-the-art OTS adopted by the signature schemes standardized by NIST—XMSS, LMS, and SPHINCS\(^+\).
> 
> A natural question is whether there is (and how much) room left for improving one-time signatures (and thus standard hash-based signatures). In this paper, we show that WOTS\(^{+}\) one-time signature, when adopting the constant-sum encoding scheme (Bos and Chaum, Crypto 1992), is size-optimal not only under Winternitz’s OTS framework, but also among all tree-based OTS designs. Moreover, we point out a flaw in the DAG-based OTS design previously shown to be size-optimal at Asiacrypt 1996, which makes the constant-sum WOTS\(^{+}\) the most size-efficient OTS to the best of our knowledge. Finally, we evaluate the performance of constant-sum WOTS\(^{+}\) integrated into the SPHINCS\(^+\) (CCS 2019) and XMSS (PQC 2011) signature schemes which exhibit certain degrees of improvement in both signing time and signature size.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38554-4_15](https://doi.org/10.1007/978-3-031-38554-4_15)
## Efficient Hybrid Exact/Relaxed Lattice Proofs and Applications to Rounding and VRFs.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-5].md#efficient-hybrid-exact-relaxed-lattice-proofs-and-applications-to-rounding-and-vrfs)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-5].md#efficient-hybrid-exact-relaxed-lattice-proofs-and-applications-to-rounding-and-vrfs)
### Authors
* Muhammed F. Esgin, Monash University, Melbourne, Australia
* Ron Steinfeld, Monash University, Melbourne, Australia
* Muhammed F. Esgin, CSIRO’s Data61, Marsfield, Australia
* Dongxi Liu, CSIRO’s Data61, Marsfield, Australia
* Sushmita Ruj, University of New South Wales, Sydney, Australia
### Abstract
> In this work, we study hybrid exact/relaxed zero-knowledge proofs from lattices, where the proved relation is exact in one part and relaxed in the other. Such proofs arise in important real-life applications such as those requiring verifiable PRF evaluation and have so far not received significant attention as a standalone problem.
> 
> We first introduce a general framework, \(\mathsf {LANES^+}\), for realizing such hybrid proofs efficiently by combining standard relaxed proofs of knowledge \(\textsf{RPoK}\) and the \(\textsf{LANES}\) framework (due to a series of works in Crypto’20, Asiacrypt’20, ACM CCS’20). The latter framework is a powerful lattice-based proof system that can prove exact linear and multiplicative relations. The advantage of \(\mathsf {LANES^+}\) is its ability to realize hybrid proofs more efficiently by exploiting \(\textsf{RPoK}\) for the high-dimensional part of the secret witness while leaving a low-dimensional secret witness part for the exact proof that is proven at a significantly lower cost via \(\textsf{LANES}\). Thanks to the flexibility of \(\mathsf {LANES^+}\), other exact proof systems can also be supported.
> 
> We apply our \(\mathsf {LANES^+}\) framework to construct substantially shorter proofs of rounding, which is a central tool for verifiable deterministic lattice-based cryptography. Based on our rounding proof, we then design an efficient long-term verifiable random function (VRF), named \(\textsf{LaV}\). \(\textsf{LaV}\) leads to the shortest VRF outputs among the proposals of standard (i.e., long-term and stateless) VRFs based on quantum-safe assumptions. Of independent interest, we also present generalized results for challenge difference invertibility, a fundamental soundness security requirement for many proof systems.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38554-4_16](https://doi.org/10.1007/978-3-031-38554-4_16)
## LaBRADOR: Compact Proofs for R1CS from Module-SIS.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-5].md#labrador-compact-proofs-for-r1cs-from-module-sis)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-5].md#labrador-compact-proofs-for-r1cs-from-module-sis)
### Authors
* Ward Beullens, IBM Research Europe, Zurich, Switzerland
* Gregor Seiler, IBM Research Europe, Zurich, Switzerland
### Abstract
> The most compact quantum-safe proof systems for large circuits are PCP-type systems such as Ligero, Aurora, and Shockwave, that only use weak cryptographic assumptions, namely hash functions modeled as random oracles. One would expect that by allowing for stronger assumptions, such as the hardness of Module-SIS, it should be possible to design more compact proof systems. But alas, despite considerable progress in lattice-based proofs, no such proof system was known so far. We rectify this situation by introducing a Lattice-Based Recursively Amortized Demonstration Of R1CS (LaBRADOR), with more compact proof sizes than known hash-based proof systems. At the 128 bits security level, LaBRADOR proves knowledge of a solution for an R1CS mod \(2^{64}+1\) with \(2^{20}\) constraints, with a proof size of only 58 KB, an order of magnitude more compact than previous quantum-safe proofs.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38554-4_17](https://doi.org/10.1007/978-3-031-38554-4_17)
## Toward Practical Lattice-Based Proof of Knowledge from Hint-MLWE.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-5].md#toward-practical-lattice-based-proof-of-knowledge-from-hint-mlwe)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-5].md#toward-practical-lattice-based-proof-of-knowledge-from-hint-mlwe)
### Authors
* Duhyeong Kim, Intel Labs, Hillsboro, OR, USA
* Dongwon Lee, Seoul National University, Seoul, South Korea
* Jinyeong Seo, Seoul National University, Seoul, South Korea
* Yongsoo Song, Seoul National University, Seoul, South Korea
### Abstract
> In the last decade, zero-knowledge proof of knowledge protocols have been extensively studied to achieve active security of various cryptographic protocols. However, the existing solutions simply seek zero-knowledge for both message and randomness, which is an overkill in many applications since protocols may remain secure even if some information about randomness is leaked to the adversary.
> 
> We develop this idea to improve the state-of-the-art proof of knowledge protocols for RLWE-based public-key encryption and BDLOP commitment schemes. In a nutshell, we present new proof of knowledge protocols without using noise flooding or rejection sampling which are provably secure under a computational hardness assumption, called Hint-MLWE. We also show an efficient reduction from Hint-MLWE to the standard MLWE assumption.
> 
> Our approach enjoys the best of two worlds because it has no computational overhead from repetition (abort) and achieves a polynomial overhead between the honest and proven languages. We prove this claim by demonstrating concrete parameters and compare with previous results. Finally, we explain how our idea can be further applied to other proof of knowledge providing advanced functionality.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38554-4_18](https://doi.org/10.1007/978-3-031-38554-4_18)
## Publicly Verifiable Zero-Knowledge and Post-Quantum Signatures from VOLE-in-the-Head.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-5].md#publicly-verifiable-zero-knowledge-and-post-quantum-signatures-from-vole-in-the-head)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-5].md#publicly-verifiable-zero-knowledge-and-post-quantum-signatures-from-vole-in-the-head)
### Authors
* Carsten Baum, Aarhus University, Aarhus, Denmark
* Lennart Braun, Aarhus University, Aarhus, Denmark
* Lawrence Roy, Aarhus University, Aarhus, Denmark
* Peter Scholl, Aarhus University, Aarhus, Denmark
* Carsten Baum, Technical University of Denmark, Kongens Lyngby, Denmark
* Cyprien Delpech de Saint Guilhem, imec-COSIC, KU Leuven, Leuven, Belgium
* Michael Klooß, Aalto University, Espoo, Finland
* Emmanuela Orsini, Bocconi University, Milan, Italy
### Abstract
> We present a new method for transforming zero-knowledge protocols in the designated verifier setting into public-coin protocols, which can be made non-interactive and publicly verifiable. Our transformation applies to a large class of ZK protocols based on oblivious transfer. In particular, we show that it can be applied to recent, fast protocols based on vector oblivious linear evaluation (VOLE), with a technique we call VOLE-in-the-head, upgrading these protocols to support public verifiability. Our resulting ZK protocols have linear proof size, and are simpler, smaller and faster than related approaches based on MPC-in-the-head.
> 
> To build VOLE-in-the-head while supporting both binary circuits and large finite fields, we develop several new technical tools. One of these is a new proof of security for the SoftSpokenOT protocol (Crypto 2022), which generalizes it to produce certain types of VOLE correlations over large fields. Secondly, we present a new ZK protocol that is tailored to take advantage of this form of VOLE, which leads to a publicly verifiable VOLE-in-the-head protocol with only 2x more communication than the best, designated-verifier VOLE-based protocols.
> 
> We analyze the soundness of our approach when made non-interactive using the Fiat-Shamir transform, using round-by-round soundness. As an application of the resulting NIZK, we present \(\textsf{FAEST}\), a post-quantum signature scheme based on AES. FAEST is the first AES-based signature scheme to be smaller than SPHINCS+, with signature sizes between 5.6 and 6.6kB at the 128-bit security level. Compared with the smallest version of SPHINCS+ (7.9kB), FAEST verification is slower, but the signing times are between 8x and 40x faster.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38554-4_19](https://doi.org/10.1007/978-3-031-38554-4_19)
## Lattice-Based Authenticated Key Exchange with Tight Security.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-5].md#lattice-based-authenticated-key-exchange-with-tight-security)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-5].md#lattice-based-authenticated-key-exchange-with-tight-security)
### Authors
* Jiaxin Pan, Department of Mathematical Sciences, NTNU – Norwegian University of Science and Technology, Trondheim, Norway
* Runzhi Zeng, Department of Mathematical Sciences, NTNU – Norwegian University of Science and Technology, Trondheim, Norway
* Benedikt Wagner, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Benedikt Wagner, Saarland University, Saarbrücken, Germany
### Abstract
> We construct the first tightly secure authenticated key exchange (AKE) protocol from lattices. Known tight constructions are all based on Diffie-Hellman-like assumptions. Thus, our protocol is the first construction with tight security from a post-quantum assumption.
> 
> Our AKE protocol is constructed tightly from a new security notion for key encapsulation mechanisms (KEMs), called one-way security against checkable chosen-ciphertext attacks (OW-ChCCA). We show how an OW-ChCCA secure KEM can be tightly constructed based on the Learning With Errors assumption, leading to the desired AKE protocol. To show the usefulness of OW-ChCCA security beyond AKE, we use it to construct the first tightly bilateral selective-opening (BiSO) secure PKE. BiSO security is a stronger selective-opening notion proposed by Lai et al. (ASIACRYPT 2021).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38554-4_20](https://doi.org/10.1007/978-3-031-38554-4_20)
## Error Correction and Ciphertext Quantization in Lattice Cryptography.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-5].md#error-correction-and-ciphertext-quantization-in-lattice-cryptography)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-5].md#error-correction-and-ciphertext-quantization-in-lattice-cryptography)
### Authors
* Daniele Micciancio, UC San Diego, La Jolla, USA
* Mark Schultz, UC San Diego, La Jolla, USA
### Abstract
> Recent work in the design of rate \(1 - o(1)\) lattice-based cryptosystems have used two distinct design paradigms, namely replacing the noise-tolerant encoding \(m \mapsto (q/2)m\) present in many lattice-based cryptosystems with a more efficient encoding, and post-processing traditional lattice-based ciphertexts with a lossy compression algorithm, using a technique very similar to the technique of “vector quantization” within coding theory.
> 
> We introduce a framework for the design of lattice-based encryption that captures both of these paradigms, and prove information-theoretic rate bounds within this framework. These bounds separate the settings of trivial and non-trivial quantization, and show the impossibility of rate \(1 - o(1)\) encryption using both trivial quantization and polynomial modulus. They furthermore put strong limits on the rate of constructions that utilize lattices built by tensoring a lattice of small dimension with \(\mathbb {Z}^k\), which is ubiquitous in the literature. We additionally introduce a new cryptosystem, that matches the rate of the highest-rate currently known scheme, while encoding messages with a “gadget”, which may be useful for constructions of Fully Homomorphic Encryption.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38554-4_21](https://doi.org/10.1007/978-3-031-38554-4_21)
## Almost Tight Multi-user Security Under Adaptive Corruptions from LWE in the Standard Model.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-5].md#almost-tight-multi-user-security-under-adaptive-corruptions-from-lwe-in-the-standard-model)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-5].md#almost-tight-multi-user-security-under-adaptive-corruptions-from-lwe-in-the-standard-model)
### Authors
* Shuai Han, School of Electronic Information and Electrical Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Shengli Liu, School of Electronic Information and Electrical Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Zhedong Wang, School of Electronic Information and Electrical Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Dawu Gu, School of Electronic Information and Electrical Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Shuai Han, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Shengli Liu, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Zhedong Wang, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
### Abstract
> In this work, we construct the first digital signature (SIG) and public-key encryption (PKE) schemes with almost tight multi-user security under adaptive corruptions based on the learning-with-errors (LWE) assumption in the standard model. Our PKE scheme achieves almost tight IND-CCA security and our SIG scheme achieves almost tight strong EUF-CMA security, both in the multi-user setting with adaptive corruptions. The security loss is quadratic in the security parameter \(\lambda \), and independent of the number of users, signatures or ciphertexts. Previously, such schemes were only known to exist under number-theoretic assumptions or in classical random oracle model, thus vulnerable to quantum adversaries.
> 
> To obtain our schemes from LWE, we propose new frameworks for constructing SIG and PKE with a core technical tool named probabilistic quasi-adaptive hash proof system (pr-QA-HPS). As a new variant of HPS, our pr-QA-HPS provides probabilistic public and private evaluation modes that may toss coins. This is in stark contrast to the traditional HPS [Cramer and Shoup, Eurocrypt 2002] and existing variants like approximate HPS [Katz and Vaikuntanathan, Asiacrypt 2009], whose public and private evaluations are deterministic in their inputs. Moreover, we formalize a new property called evaluation indistinguishability by requiring statistical indistinguishability of the two probabilistic evaluation modes, even in the presence of the secret key. The evaluation indistinguishability, as well as other nice properties resulting from the probabilistic features of pr-QA-HPS, are crucial for the multi-user security proof of our frameworks under adaptive corruptions.
> 
> As for instantiations, we construct pr-QA-HPS from the LWE assumption and prove its properties with almost tight reductions, which admit almost tightly secure LWE-based SIG and PKE schemes under our frameworks. Along the way, we also provide new almost-tight reductions from LWE to multi-secret LWE, which may be of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38554-4_22](https://doi.org/10.1007/978-3-031-38554-4_22)
## sfDualMS: Efficient Lattice-Based Two-Round Multi-signature with Trapdoor-Free Simulation.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-5].md#sfdualms-efficient-lattice-based-two-round-multi-signature-with-trapdoor-free-simulation)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-5].md#sfdualms-efficient-lattice-based-two-round-multi-signature-with-trapdoor-free-simulation)
### Authors
* Yanbo Chen, University of Ottawa, Ottawa, Canada
### Abstract
> A multi-signature scheme allows multiple signers to jointly sign a common message. In recent years, two lattice-based two-round multi-signature schemes based on Dilithium-G were proposed: DOTT by Damgård, Orlandi, Takahashi, and Tibouchi (PKC’21) and MuSig-L by Boschini, Takahashi, and Tibouchi (Crypto’22).
> 
> In this work, we propose a new lattice-based two-round multi-signature scheme called \( \textsf{DualMS}\). Compared to DOTT, \( \textsf{DualMS}\) is likely to significantly reduce signature size, since it replaces an opening to a homomorphic trapdoor commitment with a Dilithium-G response in the signature. Compared to MuSig-L, concrete parameters show that \( \textsf{DualMS}\) has smaller public keys, signatures, and lower communication, while the first round cannot be preprocessed offline as in MuSig-L.
> 
> The main reason behind such improvements is a trapdoor-free “dual signing simulation” of our scheme. Signature simulation of \( \textsf{DualMS}\) is virtually identical the normal signing procedure and does not use lattice trapdoors like DOTT and MuSig-L.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38554-4_23](https://doi.org/10.1007/978-3-031-38554-4_23)
## Revisiting Security Estimation for LWE with Hints from a Geometric Perspective.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-5].md#revisiting-security-estimation-for-lwe-with-hints-from-a-geometric-perspective)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-5].md#revisiting-security-estimation-for-lwe-with-hints-from-a-geometric-perspective)
### Authors
* Dana Dachman-Soled, University of Maryland, College Park, USA
* Tom Hanson, University of Maryland, College Park, USA
* Hunter Kippen, University of Maryland, College Park, USA
* Huijing Gong, Intel Labs, Hillsboro, USA
### Abstract
> The Distorted Bounded Distance Decoding Problem (\(\textsf{DBDD}\)) was introduced by Dachman-Soled et al. [Crypto ’20] as an intermediate problem between \(\textsf{LWE}\) and unique-SVP (\({\textsf{uSVP}}\)). They presented an approach that reduces an \(\textsf{LWE}\) instance to a \(\textsf{DBDD}\) instance, integrates side information (or “hints”) into the \(\textsf{DBDD}\) instance, and finally reduces it to a \({\textsf{uSVP}}\) instance, which can be solved via lattice reduction. They showed that this principled approach can lead to algorithms for side-channel attacks that perform better than ad-hoc algorithms that do not rely on lattice reduction.
> 
> The current work focuses on new methods for integrating hints into a \(\textsf{DBDD}\) instance. We view hints from a geometric perspective, as opposed to the distributional perspective from the prior work. Our approach provides the rigorous promise that, as hints are integrated into the \(\textsf{DBDD}\) instance, the correct solution remains a lattice point contained in the specified ellipsoid.
> 
> We instantiate our approach with two new types of hints: (1) Inequality hints, corresponding to the region of intersection of an ellipsoid and a halfspace; (2) Combined hints, corresponding to the region of intersection of two ellipsoids. Since the regions in (1) and (2) are not necessarily ellipsoids, we replace them with ellipsoidal approximations that circumscribe the region of intersection. Perfect hints are reconsidered as the region of intersection of an ellipsoid and a hyperplane, which is itself an ellipsoid. The compatibility of “approximate,” “modular,” and “short vector” hints from the prior work is examined.
> 
> We apply our techniques to the decryption failure and side-channel attack settings. We show that “inequality hints” can be used to model decryption failures, and that our new approach yields a geometric analogue of the “failure boosting” technique of D’anvers et al. [ePrint,’18]. We also show that “combined hints” can be used to fuse information from a decryption failure and a side-channel attack, and provide rigorous guarantees despite the data being non-Gaussian. We provide experimental data for both applications. The code that we have developed to implement the integration of hints and hardness estimates extends the Toolkit from prior work and has been released publicly.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38554-4_24](https://doi.org/10.1007/978-3-031-38554-4_24)
## Lattice-Based Timed Cryptography.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-5].md#lattice-based-timed-cryptography)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-5].md#lattice-based-timed-cryptography)
### Authors
* Russell W. F. Lai, Aalto University, Espoo, Finland
* Giulio Malavolta, Max Planck Institute for Security and Privacy, Bochum, Germany
### Abstract
> Timed cryptography studies primitives that retain their security only for a predetermined amount of time, such as proofs of sequential work and time-lock puzzles. This feature has proven to be useful in a large number of practical applications, e.g. randomness generation, sealed-bid auctions, and fair multi-party computation. However, the current state of affairs in timed cryptography is unsatisfactory: Virtually all efficient constructions rely on a single sequentiality assumption, namely that repeated squaring in unknown order groups cannot be parallelised. This is a single point of failure in the classical setting and is even false against quantum adversaries.
> 
> In this work we put forward a new sequentiality assumption, which essentially says that a repeated application of the standard lattice-based hash function cannot be parallelised. We provide concrete evidence of the validity of this assumption and, to substantiate its usefulness, we show how it enables a new proof of sequential work, with a stronger sequentiality guarantee than prior hash-based schemes.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38554-4_25](https://doi.org/10.1007/978-3-031-38554-4_25)
## A Lower Bound for Proving Hardness of Learning with Rounding with Polynomial Modulus.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-5].md#a-lower-bound-for-proving-hardness-of-learning-with-rounding-with-polynomial-modulus)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-5].md#a-lower-bound-for-proving-hardness-of-learning-with-rounding-with-polynomial-modulus)
### Authors
* Parker Newton, University of California, Riverside, Riverside, CA, 92521, USA
* Silas Richelson, University of California, Riverside, Riverside, CA, 92521, USA
### Abstract
> Regev’s Learning with Errors (LWE) problem (STOC 2005) is a fundamental hardness assumption for modern cryptography. The Learning with Rounding (LWR) Problem was put forth by Banerjee, Peikert and Rosen (Eurocrypt 2012) as an alternative to LWE, for use in cryptographic situations which require determinism. The only method we currently have for proving hardness of LWR is the so-called “rounding reduction” which is a specific reduction from an analogous LWE problem. This reduction works whenever the LWE error is small relative to the noise introduced by rounding, but it fails otherwise. For this reason, all prior work on establishing hardness of LWR forces the LWE error to be small, either by setting other parameters extremely large (which hurts performance), or by limiting the number of LWR samples seen by the adversary (which rules out certain applications). Hardness of LWR is poorly understood when the LWE modulus (q) is polynomial and when the number of LWE samples (m) seen by the adversary is an unbounded polynomial. This range of parameters is the most relevant for practical implementations, so the lack of a hardness proof in this situation is not ideal.
> 
> In this work, we identify an obstacle for proving the hardness of LWR from LWE in the above framework when q is polynomial and m is an unbounded polynomial. Specifically, we show that any “pointwise” reduction from LWE to LWR (i.e., any reduction which maps LWE samples independently to LWR samples) admits an efficient algorithm which directly solves LWE (without the use of an LWR solver). Consequently, LWE cannot be reduced to LWR in our pointwise reduction model with our setting of q and m, unless LWE is easy. Our model of a pointwise reduction from LWE to LWR captures all prior reductions from LWE to LWR except the rejection sampling reduction of Bogdanov et al. (TCC 2016); while their reduction still operates in a pointwise manner, it can reject an LWE sample instead of mapping it to an LWR sample. However we conjecture that our result still holds in this setting.
> 
> Our argument proceeds roughly as follows. First, we show that any pointwise reduction from LWE to LWR must have good agreement with some affine map. Then, we use the affine agreement of a pointwise reduction together with a type of Goldreich-Levin “prediction-implies-inversion” argument to extract the LWE secret from LWE input samples. Both components may be of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38554-4_26](https://doi.org/10.1007/978-3-031-38554-4_26)
## Reductions from Module Lattices to Free Module Lattices, and Application to Dequantizing Module-LLL.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-5].md#reductions-from-module-lattices-to-free-module-lattices-and-application-to-dequantizing-module-lll)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-5].md#reductions-from-module-lattices-to-free-module-lattices-and-application-to-dequantizing-module-lll)
### Authors
* Gabrielle De Micheli, University of California, San Diego, USA
* Daniele Micciancio, University of California, San Diego, USA
* Alice Pellet-Mary, Univ. Bordeaux, CNRS, INRIA, Bordeaux INP, IMB, Talence, France
* Nam Tran, Institute of Cybersecurity and Cryptology, School of Computing and Information Technology, University of Wollongong, Wollongong, Australia
* Nam Tran, CSIRO Data61, Eveleigh, Australia
### Abstract
> In this article, we give evidence that free modules (i.e., modules which admit a basis) are no weaker than arbitrary modules, when it comes to solving cryptographic algorithmic problems (and when the rank of the module is at least 2). More precisely, we show that for three algorithmic problems used in cryptography, namely the shortest vector problem, the Hermite shortest vector problem and a variant of the closest vector problem, there is a reduction from solving the problem in any module of rank \(n \ge 2\) to solving the problem in any free module of the same rank n. As an application, we show that this can be used to dequantize the LLL algorithm for module lattices presented by Lee et al. (Asiacrypt 2019).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38554-4_27](https://doi.org/10.1007/978-3-031-38554-4_27)
