# Crypto[2021-1]
## On the Possibility of Basing Cryptography on EXP≠ BPP.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-1].md#on-the-possibility-of-basing-cryptography-on-exp-bpp)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#on-the-possibility-of-basing-cryptography-on-exp-bpp)
### Authors
* Yanyi Liu, Cornell University, Ithaca, USA
* Rafael Pass, Cornell Tech, New York, USA
### Abstract
> Liu and Pass (FOCS’20) recently demonstrated an equivalence between the existence of one-way functions (OWFs) and mild average-case hardness of the time-bounded Kolmogorov complexity problem. In this work, we establish a similar equivalence but to a different form of time-bounded Kolmogorov Complexity—namely, Levin’s notion of Kolmogorov Complexity—whose hardness is closely related to the problem of whether \(\mathsf{EXP}\ne \mathsf{BPP}\). In more detail, let Kt(x) denote the Levin-Kolmogorov Complexity of the string x; that is, \(Kt(x) = \min _{{\varPi }\in \{0,1\}^*, t \in \mathbb {N}}\{|{\varPi }| + \lceil \log t \rceil : U({\varPi }, 1^t) = x\}\), where U is a universal Turing machine, and \(U({\varPi },1^t)\) denotes the output of the program \(\varPi \) after t steps, and let \(\mathsf{MKtP}\) denote the language of pairs (x, k) having the property that \(Kt(x) \le k\). We demonstrate that:
> 
> \(\mathsf{MKtP}\notin \mathsf{Heur}_{\mathsf{neg}}\mathsf{BPP}\) (i.e., \(\mathsf{MKtP}\) is infinitely-often two-sided error mildly average-case hard) iff infinitely-often OWFs exist.
> 
> \(\mathsf{MKtP}\notin \mathsf{Avg}_{\mathsf{neg}}\mathsf{BPP}\) (i.e., \(\mathsf{MKtP}\) is infinitely-often errorless mildly average-case hard) iff \(\mathsf{EXP}\ne \mathsf{BPP}\).
> 
> Thus, the only “gap” towards getting (infinitely-often) OWFs from the assumption that \(\mathsf{EXP}\ne \mathsf{BPP}\) is the seemingly “minor” technical gap between two-sided error and errorless average-case hardness of the \(\mathsf{MKtP}\) problem.
> 
> As a corollary of this result, we additionally demonstrate that any reduction from errorless to two-sided error average-case hardness for \(\mathsf{MKtP}\) implies (unconditionally) that \(\mathsf{NP}\ne \mathsf{P}\).
> 
> We finally consider other alternative notions of Kolmogorov complexity—including space-bounded Kolmogorov complexity and conditional Kolmogorov complexity—and show how average-case hardness of problems related to them characterize log-space computable OWFs, or OWFs in \(\mathsf{NC}^{0}\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_2](https://doi.org/10.1007/978-3-030-84242-0_2)
## Linear Cryptanalysis of FF3-1 and FEA.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-1].md#linear-cryptanalysis-of-ff3-1-and-fea)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#linear-cryptanalysis-of-ff3-1-and-fea)
### Authors
* Tim Beyne, imec-COSIC, KU Leuven, Leuven, Belgium
### Abstract
> Improved attacks on generic small-domain Feistel ciphers with alternating round tweaks are obtained using linear cryptanalysis. This results in practical distinguishing and message-recovery attacks on the United States format-preserving encryption standard FF3-1 and the South-Korean standards FEA-1 and FEA-2. The data complexity of the proposed attacks on FF3-1 and FEA-1 is \(\widetilde{\mathcal {O}}(N^{r/2 - 1.5})\), where \(N^2\) is the domain size and r is the number of rounds. For example, FF3-1 with \(N = 10^3\) can be distinguished from an ideal tweakable block cipher with advantage \(\ge 1/10\) using \(2^{23}\) encryption queries. Recovering the left half of a message with similar advantage requires \(2^{24}\) data. The analysis of FF3-1 serves as an interesting real-world application of (generalized) linear cryptanalysis over the group \(\mathbb {Z}/N\mathbb {Z}\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_3](https://doi.org/10.1007/978-3-030-84242-0_3)
## Efficient Key Recovery for All HFE Signature Variants.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-1].md#efficient-key-recovery-for-all-hfe-signature-variants)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#efficient-key-recovery-for-all-hfe-signature-variants)
### Authors
* Jintai Ding, Yau Mathematical Center, Tsinghua University, Beijing, China
* Chengdong Tao, Ding Lab, Beijing Institute of Mathematical Science and Applications, Beijing, China
* Jintai Ding, Ding Lab, Beijing Institute of Mathematical Science and Applications, Beijing, China
* Albrecht Petzoldt, FAU Erlangen-Nuremberg, Nuremberg, Germany
### Abstract
> The HFE cryptosystem is one of the most popular multi- variate schemes. Especially in the area of digital signatures, the HFEv- variant offers short signatures and high performance. Recently, an instance of the HFEv- signature scheme called GeMSS was selected as one of the alternative candidates for signature schemes in the third round of the NIST Post-Quantum Crypto (PQC) Standardization Project.
> 
> In this paper, we propose a new key recovery attack on the HFEv- signature scheme. Our attack shows that both the Minus and the Vinegar modification do not enhance the security of the basic HFE scheme significantly. This shows that it is very difficult to build a secure and efficient signature scheme on the basis of HFE. In particular, we use our attack to show that the proposed parameters of the GeMSS scheme are not as secure as claimed.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_4](https://doi.org/10.1007/978-3-030-84242-0_4)
## Three Halves Make a Whole? Beating the Half-Gates Lower Bound for Garbled Circuits.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-1].md#three-halves-make-a-whole-beating-the-half-gates-lower-bound-for-garbled-circuits)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#three-halves-make-a-whole-beating-the-half-gates-lower-bound-for-garbled-circuits)
### Authors
* Mike Rosulek, Oregon State University, Corvallis, USA
* Lawrence Roy, Oregon State University, Corvallis, USA
### Abstract
> We describe a garbling scheme for boolean circuits, in which XOR gates are free and AND gates require communication of \(1.5\kappa + 5\) bits. This improves over the state-of-the-art “half-gates” scheme of Zahur, Rosulek, and Evans (Eurocrypt 2015), in which XOR gates are free and AND gates cost \(2\kappa \) bits. The half-gates paper proved a lower bound of \(2\kappa \) bits per AND gate, in a model that captured all known garbling techniques at the time. We bypass this lower bound with a novel technique that we call slicing and dicing, which involves slicing wire labels in half and operating separately on those halves. Ours is the first to bypass the lower bound while being fully compatible with free-XOR, making it a drop-in replacement for half-gates. Our construction is proven secure from a similar assumption to prior free-XOR garbling (circular correlation-robust hash), and uses only slightly more computation than half-gates.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_5](https://doi.org/10.1007/978-3-030-84242-0_5)
## Threshold Schnorr with Stateless Deterministic Signing from Standard Assumptions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-1].md#threshold-schnorr-with-stateless-deterministic-signing-from-standard-assumptions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#threshold-schnorr-with-stateless-deterministic-signing-from-standard-assumptions)
### Authors
* François Garillot, Novi/Facebook, Palo Alto, USA
* Valeria Nikolaenko, Novi/Facebook, Palo Alto, USA
* Yashvanth Kondi, Northeastern University, Boston, USA
* Payman Mohassel, Facebook, Palo Alto, USA
### Abstract
> Schnorr’s signature scheme permits an elegant threshold signing protocol due to its linear signing equation. However each new signature consumes fresh randomness, which can be a major attack vector in practice. Sources of randomness in deployments are frequently either unreliable, or require state continuity, i.e. reliable fresh state resilient to rollbacks. State continuity is a notoriously difficult guarantee to achieve in practice, due to system crashes caused by software errors, malicious actors, or power supply interruptions (Parno et al., S&P ’11). This is a non-issue for Schnorr variants such as EdDSA, which is specified to derive nonces deterministically as a function of the message and the secret key. However, it is challenging to translate these benefits to the threshold setting, specifically to construct a threshold Schnorr scheme where signing neither requires parties to consume fresh randomness nor update long-term secret state.
> 
> In this work, we construct a dishonest majority threshold Schnorr protocol that enables such stateless deterministic nonce derivation using standardized block ciphers. Our core technical ingredients are new tools for the zero-knowledge from garbled circuits (ZKGC) paradigm to aid in verifying correct nonce derivation:
> 
> A mechanism based on UC Commitments that allows a prover to commit once to a witness, and prove an unbounded number of statements online with only cheap symmetric key operations.
> 
> A garbling gadget to translate intermediate garbled circuit wire labels to arithmetic encodings.
> 
> A proof per our scheme requires only a small constant number of exponentiations.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_6](https://doi.org/10.1007/978-3-030-84242-0_6)
## Two-Round Trip Schnorr Multi-signatures via Delinearized Witnesses.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-1].md#two-round-trip-schnorr-multi-signatures-via-delinearized-witnesses)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#two-round-trip-schnorr-multi-signatures-via-delinearized-witnesses)
### Authors
* Handan Kılınç Alper, Web3 Foundation, Zug, Switzerland
* Jeffrey Burdges, Web3 Foundation, Zug, Switzerland
### Abstract
> We construct a two-round Schnorr-based signature scheme (DWMS) by delinearizing two pre-commitments supplied by each signer. DWMS is a secure signature scheme in the algebraic group model (AGM) and the random oracle model (ROM) under the assumption of the hardness of the one-more discrete logarithm problem and the 2-entwined sum problem that we introduce in this paper. Our new m-entwined sum problem tweaks the k-sum problem in a scalar field using the associated group. We prove the hardness of our new problem in the AGM assuming the hardness of the discrete logarithm problem in the associated group. We believe that our new problem simplifies the security proofs of multi-signature schemes that use the delinearization of commitments.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_7](https://doi.org/10.1007/978-3-030-84242-0_7)
## MuSig2: Simple Two-Round Schnorr Multi-signatures.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-1].md#musig2-simple-two-round-schnorr-multi-signatures)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#musig2-simple-two-round-schnorr-multi-signatures)
### Authors
* Jonas Nick, Blockstream, Victoria, Canada
* Tim Ruffing, Blockstream, Victoria, Canada
* Yannick Seurin, ANSSI, Paris, France
### Abstract
> Multi-signatures enable a group of signers to produce a joint signature on a joint message. Recently, Drijvers et al. (S&P’19) showed that all thus far proposed two-round multi-signature schemes in the pure DL setting (without pairings) are insecure under concurrent signing sessions. While Drijvers et al. proposed a secure two-round scheme, this efficiency in terms of rounds comes with the price of having signatures that are more than twice as large as Schnorr signatures, which are becoming popular in cryptographic systems due to their practicality (e.g., they will likely be adopted in Bitcoin). If one needs a multi-signature scheme that can be used as a drop-in replacement for Schnorr signatures, then one is forced to resort either to a three-round scheme or to sequential signing sessions, both of which are undesirable options in practice.
> 
> In this work, we propose \(\mathsf {MuSig2} \), a simple and highly practical two-round multi-signature scheme. This is the first scheme that simultaneously i) is secure under concurrent signing sessions, ii) supports key aggregation, iii) outputs ordinary Schnorr signatures, iv) needs only two communication rounds, and v) has similar signer complexity as ordinary Schnorr signatures. Furthermore, it is the first multi-signature scheme in the pure DL setting that supports preprocessing of all but one rounds, effectively enabling a non-interactive signing process without forgoing security under concurrent sessions. We prove the security of \(\mathsf {MuSig2} \) in the random oracle model, and the security of a more efficient variant in the combination of the random oracle and the algebraic group model. Both our proofs rely on a weaker variant of the OMDL assumption.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_8](https://doi.org/10.1007/978-3-030-84242-0_8)
## Tighter Security for Schnorr Identification and Signatures: A High-Moment Forking Lemma for ${\varSigma }$-Protocols.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-1].md#tighter-security-for-schnorr-identification-and-signatures-a-high-moment-forking-lemma-for-varsigma-protocols)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#tighter-security-for-schnorr-identification-and-signatures-a-high-moment-forking-lemma-for-varsigma-protocols)
### Authors
* Lior Rotem, School of Computer Science and Engineering, Hebrew University of Jerusalem, 91904, Jerusalem, Israel
* Gil Segev, School of Computer Science and Engineering, Hebrew University of Jerusalem, 91904, Jerusalem, Israel
### Abstract
> The Schnorr identification and signature schemes have been amongst the most influential cryptographic protocols of the past three decades. Unfortunately, although the best-known attacks on these two schemes are via discrete-logarithm computation, the known approaches for basing their security on the hardness of the discrete logarithm problem encounter the “square-root barrier”. In particular, in any group of order p where Shoup’s generic hardness result for the discrete logarithm problem is believed to hold (and is thus used for setting concrete security parameters), the best-known t-time attacks on the Schnorr identification and signature schemes have success probability \(t^2/p\), whereas existing proofs of security only rule out attacks with success probabilities \((t^2/p)^{1/2}\) and \((q_{\mathsf {H}} \cdot t^2/p)^{1/2}\), respectively, where \(q_{\mathsf {H}}\) denotes the number of random-oracle queries issued by the attacker.
> 
> We establish tighter security guarantees for identification and signature schemes which result from \(\varSigma \)-protocols with special soundness based on the hardness of their underlying relation, and in particular for Schnorr’s schemes based on the hardness of the discrete logarithm problem. We circumvent the square-root barrier by introducing a high-moment generalization of the classic forking lemma, relying on the assumption that the underlying relation is “d-moment hard”: The success probability of any algorithm in the task of producing a witness for a random instance is dominated by the d-th moment of the algorithm’s running time.
> 
> In the concrete context of the discrete logarithm problem, already Shoup’s original proof shows that the discrete logarithm problem is 2-moment hard in the generic-group model, and thus our assumption can be viewed as a highly-plausible strengthening of the discrete logarithm assumption in any group where no better-than-generic algorithms are currently known. Applying our high-moment forking lemma in this context shows that, assuming the 2-moment hardness of the discrete logarithm problem, any t-time attacker breaks the security of the Schnorr identification and signature schemes with probabilities at most \((t^2/p)^{2/3}\) and \((q_\mathsf {H}\cdot t^2/p)^{2/3}\), respectively.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_9](https://doi.org/10.1007/978-3-030-84242-0_9)
## DualRing: Generic Construction of Ring Signatures with Efficient Instantiations.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-1].md#dualring-generic-construction-of-ring-signatures-with-efficient-instantiations)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#dualring-generic-construction-of-ring-signatures-with-efficient-instantiations)
### Authors
* Tsz Hon Yuen, The University of Hong Kong, Pok Fu Lam, Hong Kong
* Man Ho Au, The University of Hong Kong, Pok Fu Lam, Hong Kong
* Muhammed F. Esgin, Department of Software Systems and Cybersecurity, Faculty of Information Technology, Monash University, Melbourne, Australia
* Joseph K. Liu, Department of Software Systems and Cybersecurity, Faculty of Information Technology, Monash University, Melbourne, Australia
* Muhammed F. Esgin, CSIRO’s Data61, Melbourne, Australia
* Zhimin Ding, Rice University, Houston, USA
### Abstract
> We introduce a novel generic ring signature construction, called DualRing, which can be built from several canonical identification schemes (such as Schnorr identification). DualRing differs from the classical ring signatures by its formation of two rings: a ring of commitments and a ring of challenges. It has a structural difference from the common ring signature approaches based on accumulators or zero-knowledge proofs of the signer index. Comparatively, DualRing has a number of unique advantages.
> 
> Considering the DL-based setting by using Schnorr identification scheme, our DualRing structure allows the signature size to be compressed into logarithmic size via an argument of knowledge system such as Bulletproofs. We further improve on the Bulletproofs argument system to eliminate about half of the computation while maintaining the same proof size. We call this Sum Argument and it can be of independent interest. This DL-based construction, named DualRing-EC, using Schnorr identification with Sum Argument has the shortest ring signature size in the literature without using trusted setup.
> 
> Considering the lattice-based setting, we instantiate DualRing by a canonical identification based on M-LWE and M-SIS. In practice, we achieve the shortest lattice-based ring signature, named DualRing-LB, when the ring size is between 4 and 2000. DualRing-LB is also 5\(\times \) faster in signing and verification than the fastest lattice-based scheme by Esgin et al. (CRYPTO’19).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_10](https://doi.org/10.1007/978-3-030-84242-0_10)
## Compact Ring Signatures from Learning with Errors.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-1].md#compact-ring-signatures-from-learning-with-errors)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#compact-ring-signatures-from-learning-with-errors)
### Authors
* Rohit Chatterjee, Stony Brook University, Stony Brook, USA
* Xiao Liang, Stony Brook University, Stony Brook, USA
* Omkant Pandey, Stony Brook University, Stony Brook, USA
* Sina Shiehian, Stony Brook University, Stony Brook, USA
* Sanjam Garg, University of California, Berkeley, USA
* Sina Shiehian, University of California, Berkeley, USA
* Sanjam Garg, NTT Research, Tokyo, Japan
* Mohammad Hajiabadi, University of Waterloo, Waterloo, Canada
* Dakshita Khurana, University of Illinois Urbana-Champaign, Champaign, USA
* Giulio Malavolta, Max Planck Institute for Security and Privacy, Bochum, Germany
### Abstract
> Ring signatures allow a user to sign a message on behalf of a “ring” of signers, while hiding the true identity of the signer. As the degree of anonymity guaranteed by a ring signature is directly proportional to the size of the ring, an important goal in cryptography is to study constructions that minimize the size of the signature as a function of the number of ring members.
> 
> In this work, we present the first compact ring signature scheme (i.e., where the size of the signature grows logarithmically with the size of the ring) from the (plain) learning with errors (LWE) problem. The construction is in the standard model and it does not rely on a common random string or on the random oracle heuristic. In contrast with the prior work of Backes et al. [EUROCRYPT’2019], our scheme does not rely on bilinear pairings, which allows us to show that the scheme is post-quantum secure assuming the quantum hardness of LWE.
> 
> At the heart of our scheme is a new construction of compact and statistically witness indistinguishable ZAP arguments for NP \(\cap \) coNP, that we show to be sound based on the plain LWE assumption. Prior to our work, statistical ZAPs (for all of NP) were known to exist only assuming sub-exponential LWE. We believe that this scheme might find further applications in the future.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_11](https://doi.org/10.1007/978-3-030-84242-0_11)
## A Black-Box Approach to Post-Quantum Zero-Knowledge in Constant Rounds.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-1].md#a-black-box-approach-to-post-quantum-zero-knowledge-in-constant-rounds)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#a-black-box-approach-to-post-quantum-zero-knowledge-in-constant-rounds)
### Authors
* Nai-Hui Chia, QuICS, University of Maryland, College Park, USA
* Nai-Hui Chia, Luddy School of Informatics, Computing, and Engineering, Indiana University, Bloomington, USA
* Kai-Min Chung, Institute of Information Science, Academia Sinica, Taiwan, China
* Takashi Yamakawa, NTT Secure Platform Laboratories, Tokyo, Japan
### Abstract
> In a recent seminal work, Bitansky and Shmueli (STOC ’20) gave the first construction of a constant round zero-knowledge argument for \(\mathbf {NP}\) secure against quantum attacks. However, their construction has several drawbacks compared to the classical counterparts. Specifically, their construction only achieves computational soundness, requires strong assumptions of quantum hardness of learning with errors (QLWE assumption) and the existence of quantum fully homomorphic encryption (QFHE), and relies on non-black-box simulation.
> 
> In this paper, we resolve these issues at the cost of weakening the notion of zero-knowledge to what is called \(\epsilon \)-zero-knowledge. Concretely, we construct the following protocols:
> 
> – We construct a constant round interactive proof for \(\mathbf {NP}\) that satisfies statistical soundness and black-box \(\epsilon \)-zero-knowledge against quantum attacks assuming the existence of collapsing hash functions, which is a quantum counterpart of collision-resistant hash functions. Interestingly, this construction is just an adapted version of the classical protocol by Goldreich and Kahan (JoC ’96) though the proof of \(\epsilon \)-zero-knowledge property against quantum adversaries requires novel ideas.
> 
> – We construct a constant round interactive argument for \(\mathbf {NP}\) that satisfies computational soundness and black-box \(\epsilon \)-zero-knowledge against quantum attacks only assuming the existence of post-quantum one-way functions.
> 
> At the heart of our results is a new quantum rewinding technique that enables a simulator to extract a committed message of a malicious verifier while simulating verifier’s internal state in an appropriate sense.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_12](https://doi.org/10.1007/978-3-030-84242-0_12)
## On the Concurrent Composition of Quantum Zero-Knowledge.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-1].md#on-the-concurrent-composition-of-quantum-zero-knowledge)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#on-the-concurrent-composition-of-quantum-zero-knowledge)
### Authors
* Prabhanjan Ananth, UCSB, Santa Barbara, USA
* Kai-Min Chung, Academia Sinica, Taipei City, Taiwan
* Rolando L. La Placa, MIT, Cambridge, USA
### Abstract
> We study the notion of zero-knowledge secure against quantum polynomial-time verifiers (referred to as quantum zero-knowledge) in the concurrent composition setting. Despite being extensively studied in the classical setting, concurrent composition in the quantum setting has hardly been studied.
> 
> We initiate a formal study of concurrent quantum zero-knowledge. Our results are as follows:
> 
> Bounded Concurrent QZK for NP and QMA: Assuming post-quantum one-way functions, there exists a quantum zero-knowledge proof system for NP in the bounded concurrent setting. In this setting, we fix a priori the number of verifiers that can simultaneously interact with the prover. Under the same assumption, we also show that there exists a quantum zero-knowledge proof system for QMA in the bounded concurrency setting.
> 
> Quantum Proofs of Knowledge: Assuming quantum hardness of learning with errors (QLWE), there exists a bounded concurrent zero-knowledge proof system for NP satisfying quantum proof of knowledge property.
> 
> Our extraction mechanism simultaneously allows for extraction probability to be negligibly close to acceptance probability (extractability) and also ensures that the prover’s state after extraction is statistically close to the prover’s state after interacting with the verifier (simulatability).
> 
> Even in the standalone setting, the seminal work of [Unruh EUROCRYPT’12], and all its followups, satisfied a weaker version of extractability property and moreover, did not achieve simulatability. Our result yields a proof of quantum knowledge system for QMA with better parameters than prior works.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_13](https://doi.org/10.1007/978-3-030-84242-0_13)
## Multi-theorem Designated-Verifier NIZK for QMA.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-1].md#multi-theorem-designated-verifier-nizk-for-qma)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#multi-theorem-designated-verifier-nizk-for-qma)
### Authors
* Omri Shmueli, Tel Aviv University, Tel Aviv, Israel
### Abstract
> We present a designated-verifier non-interactive zero-knowledge argument system for QMA with multi-theorem security under the Learning with Errors Assumption. All previous such protocols for QMA are only single-theorem secure. We also relax the setup assumption required in previous works. We prove security in the malicious designated-verifier (MDV-NIZK) model (Quach, Rothblum, and Wichs, EUROCRYPT 2019), where the setup consists of a mutually trusted random string and an untrusted verifier public key.
> 
> Our main technical contribution is a general compiler that given a NIZK for NP and a quantum sigma protocol for QMA generates an MDV-NIZK protocol for QMA.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_14](https://doi.org/10.1007/978-3-030-84242-0_14)
## On the Round Complexity of Secure Quantum Computation.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-1].md#on-the-round-complexity-of-secure-quantum-computation)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#on-the-round-complexity-of-secure-quantum-computation)
### Authors
* James Bartusek, UC Berkeley, Berkeley, USA
* Andrea Coladangelo, UC Berkeley, Berkeley, USA
* Dakshita Khurana, UIUC, Champaign, USA
* Fermi Ma, Princeton University, Princeton, USA
* Fermi Ma, NTT Research, Palo Alto, USA
### Abstract
> We construct the first constant-round protocols for secure quantum computation in the two-party (2PQC) and multi-party (MPQC) settings with security against malicious adversaries. Our protocols are in the common random string (CRS) model.
> 
> Assuming two-message oblivious transfer (OT), we obtain (i) three-message 2PQC, and (ii) five-round MPQC with only three rounds of online (input-dependent) communication; such OT is known from quantum-hard Learning with Errors (QLWE).
> 
> Assuming sub-exponential hardness of QLWE, we obtain (i) three-round 2PQC with two online rounds and (ii) four-round MPQC with two online rounds.
> 
> When only one (out of two) parties receives output, we achieve minimal interaction (two messages) from two-message OT; classically, such protocols are known as non-interactive secure computation (NISC), and our result constitutes the first maliciously-secure quantum NISC. Additionally assuming reusable malicious designated-verifier NIZK arguments for \(\mathsf {NP}\) (MDV-NIZKs), we give the first MDV-NIZK for \(\mathsf {QMA}\) that only requires one copy of the quantum witness.
> 
> Finally, we perform a preliminary investigation into two-round secure quantum computation where each party must obtain output. On the negative side, we identify a broad class of simulation strategies that suffice for classical two-round secure computation that are unlikely to work in the quantum setting. Next, as a proof-of-concept, we show that two-round secure quantum computation exists with respect to a quantum oracle.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_15](https://doi.org/10.1007/978-3-030-84242-0_15)
## Round Efficient Secure Multiparty Quantum Computation with Identifiable Abort.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-1].md#round-efficient-secure-multiparty-quantum-computation-with-identifiable-abort)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#round-efficient-secure-multiparty-quantum-computation-with-identifiable-abort)
### Authors
* Bar Alon, Department of Computer Science, Ariel University, Ariel, Israel
* Hao Chung, Department of Electrical and Computer Engineering, Carnegie Mellon University, Pittsburgh, USA
* Kai-Min Chung, Institute of Information Science, Academia Sinica, Taipei City, Taiwan
* Mi-Ying Huang, Institute of Information Science, Academia Sinica, Taipei City, Taiwan
* Yi Lee, Institute of Information Science, Academia Sinica, Taipei City, Taiwan
* Yu-Ching Shen, Institute of Information Science, Academia Sinica, Taipei City, Taiwan
* Mi-Ying Huang, Department of Computer Science and Information Engineering, National Taiwan University, Taipei City, Taiwan
### Abstract
> A recent result by Dulek et al. (EUROCRYPT 2020) showed a secure protocol for computing any quantum circuit even without the presence of an honest majority. Their protocol, however, is susceptible to a “denial of service” attack and allows even a single corrupted party to force an abort. We propose the first quantum protocol that admits security-with-identifiable-abort, which allows the honest parties to agree on the identity of a corrupted party in case of an abort. Additionally, our protocol is the first to have the property that the number of rounds where quantum communication is required is independent of the circuit complexity. Furthermore, if there exists a post-quantum secure classical protocol whose round complexity is independent of the circuit complexity, then our protocol has this property as well. Our protocol is secure under the assumption that classical quantum-resistant fully homomorphic encryption schemes with decryption circuit of logarithmic depth exist. Interestingly, our construction also admits a reduction from quantum fair secure computation to classical fair secure computation.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_16](https://doi.org/10.1007/978-3-030-84242-0_16)
## One-Way Functions Imply Secure Computation in a Quantum World.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-1].md#one-way-functions-imply-secure-computation-in-a-quantum-world)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#one-way-functions-imply-secure-computation-in-a-quantum-world)
### Authors
* James Bartusek, UC Berkeley, Berkeley, USA
* Andrea Coladangelo, UC Berkeley, Berkeley, USA
* Dakshita Khurana, UIUC, Champaign, USA
* Fermi Ma, Princeton University and NTT Research, Princeton, USA
### Abstract
> We prove that quantum-hard one-way functions imply simulation-secure quantum oblivious transfer (QOT), which is known to suffice for secure computation of arbitrary quantum functionalities. Furthermore, our construction only makes black-box use of the quantum-hard one-way function.
> 
> Our primary technical contribution is a construction of extractable and equivocal quantum bit commitments based on the black-box use of quantum-hard one-way functions in the standard model. Instantiating the Crépeau-Kilian (FOCS 1988) framework with these commitments yields simulation-secure QOT.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_17](https://doi.org/10.1007/978-3-030-84242-0_17)
## Impossibility of Quantum Virtual Black-Box Obfuscation of Classical Circuits.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-1].md#impossibility-of-quantum-virtual-black-box-obfuscation-of-classical-circuits)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#impossibility-of-quantum-virtual-black-box-obfuscation-of-classical-circuits)
### Authors
* Gorjan Alagic, Joint Center for Quantum Information and Computer Science, University of Maryland, College Park, MD, USA
* Gorjan Alagic, National Institute of Standards and Technology, Gaithersburg, MD, USA
* Zvika Brakerski, Weizmann Institute of Science, Rehovot, Israel
* Yfke Dulek, Centrum Wiskunde & Informatica, Amsterdam, The Netherlands
* Christian Schaffner, University of Amsterdam, Amsterdam, The Netherlands
* Yfke Dulek, QuSoft, Amsterdam, The Netherlands
* Christian Schaffner, QuSoft, Amsterdam, The Netherlands
### Abstract
> Virtual black-box obfuscation is a strong cryptographic primitive: it encrypts a circuit while maintaining its full input/output functionality. A remarkable result by Barak et al. (Crypto 2001) shows that a general obfuscator that obfuscates classical circuits into classical circuits cannot exist. A promising direction that circumvents this impossibility result is to obfuscate classical circuits into quantum states, which would potentially be better capable of hiding information about the obfuscated circuit. We show that, under the assumption that Learning With Errors (LWE) is hard for quantum computers, this quantum variant of virtual black-box obfuscation of classical circuits is generally impossible. On the way, we show that under the presence of dependent classical auxiliary input, even the small class of classical point functions cannot be quantum virtual black-box obfuscated.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_18](https://doi.org/10.1007/978-3-030-84242-0_18)
## New Approaches for Quantum Copy-Protection.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-1].md#new-approaches-for-quantum-copy-protection)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#new-approaches-for-quantum-copy-protection)
### Authors
* Scott Aaronson, The University of Texas at Austin, Austin, USA
* Jiahui Liu, The University of Texas at Austin, Austin, USA
* Ruizhe Zhang, The University of Texas at Austin, Austin, USA
* Qipeng Liu, Princeton University, Princeton, USA
* Mark Zhandry, Princeton University and NTT Research, Princeton, USA
### Abstract
> Quantum copy-protection uses the unclonability of quantum states to construct quantum software that provably cannot be pirated. copy-protection would be immensely useful, but unfortunately, little is known about achieving it in general. In this work, we make progress on this goal, by giving the following results:
> 
> We show how to copy-protect any program that cannot be learned from its input-output behavior relative to a classical oracle. This construction improves on Aaronson (CCC 2009), which achieves the same relative to a quantum oracle. By instantiating the oracle with post-quantum candidate obfuscation schemes, we obtain a heuristic construction of copy-protection.
> 
> We show, roughly, that any program which can be watermarked can be copy detected, a weaker version of copy-protection that does not prevent copying, but guarantees that any copying can be detected. Our scheme relies on the security of the assumed watermarking, plus the assumed existence of public-key quantum money. Our construction is publicly detectable and applicable to many recent watermarking schemes.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_19](https://doi.org/10.1007/978-3-030-84242-0_19)
## Hidden Cosets and Applications to Unclonable Cryptography.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-1].md#hidden-cosets-and-applications-to-unclonable-cryptography)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#hidden-cosets-and-applications-to-unclonable-cryptography)
### Authors
* Andrea Coladangelo, University of California, Berkeley, USA
* Jiahui Liu, The University of Texas at Austin, Austin, USA
* Qipeng Liu, Princeton University, Princeton, USA
* Mark Zhandry, Princeton University and NTT Research, Princeton, USA
### Abstract
> In 2012, Aaronson and Christiano introduced the idea of hidden subspace states to build public-key quantum money [STOC ’12]. Since then, this idea has been applied to realize several other cryptographic primitives which enjoy some form of unclonability.
> 
> In this work, we propose a generalization of hidden subspace states to hidden coset states. We study different unclonable properties of coset states and several applications:
> 
> We show that, assuming indistinguishability obfuscation (\(\mathsf{iO}\)), hidden coset states possess a certain direct product hardness property, which immediately implies a tokenized signature scheme in the plain model. Previously, a tokenized signature scheme was known only relative to an oracle, from a work of Ben-David and Sattath [QCrypt ’17].
> 
> Combining a tokenized signature scheme with extractable witness encryption, we give a construction of an unclonable decryption scheme in the plain model. The latter primitive was recently proposed by Georgiou and Zhandry [ePrint ’20], who gave a construction relative to a classical oracle.
> 
> We conjecture that coset states satisfy a certain natural (information-theoretic) monogamy-of-entanglement property. Assuming this conjecture is true, we remove the requirement for extractable witness encryption in our unclonable decryption construction, by relying instead on compute-and-compare obfuscation for the class of unpredictable distributions. As potential evidence in support of the monogamy conjecture, we prove a weaker version of this monogamy property, which we believe will still be of independent interest.
> 
> Finally, we give the first construction of a copy-protection scheme for pseudorandom functions (PRFs) in the plain model. Our scheme is secure either assuming \(\mathsf{iO}\), \(\mathsf{OWF}\) and extractable witness encryption, or assuming \(\mathsf{iO}, \mathsf{OWF}\), compute-and-compare obfuscation for the class of unpredictable distributions, and the conjectured monogamy property mentioned above.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_20](https://doi.org/10.1007/978-3-030-84242-0_20)
## On Tight Quantum Security of HMAC and NMAC in the Quantum Random Oracle Model.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-1].md#on-tight-quantum-security-of-hmac-and-nmac-in-the-quantum-random-oracle-model)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#on-tight-quantum-security-of-hmac-and-nmac-in-the-quantum-random-oracle-model)
### Authors
* Akinori Hosoyamada, NTT Secure Platform Laboratories, Tokyo, Japan
* Akinori Hosoyamada, Nagoya University, Nagoya, Japan
* Tetsu Iwata, Nagoya University, Nagoya, Japan
### Abstract
> HMAC and NMAC are the most basic and important constructions to convert Merkle-Damgård hash functions into message authentication codes (MACs) or pseudorandom functions (PRFs). In the quantum setting, at CRYPTO 2017, Song and Yun showed that HMAC and NMAC are quantum pseudorandom functions (qPRFs) under the standard assumption that the underlying compression function is a qPRF. Their proof guarantees security up to \(O(2^{n/5})\) or \(O(2^{n/8})\) quantum queries when the output length of HMAC and NMAC is n bits. However, there is a gap between the provable security bound and a simple distinguishing attack that uses \(O(2^{n/3})\) quantum queries. This paper settles the problem of closing the gap. We show that the tight bound of the number of quantum queries to distinguish HMAC or NMAC from a random function is \(\Theta (2^{n/3})\) in the quantum random oracle model, where compression functions are modeled as quantum random oracles. To give the tight quantum bound, based on an alternative formalization of Zhandry’s compressed oracle technique, we introduce a new proof technique focusing on the symmetry of quantum query records.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_21](https://doi.org/10.1007/978-3-030-84242-0_21)
## Quantum Collision Attacks on Reduced SHA-256 and SHA-512.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-1].md#quantum-collision-attacks-on-reduced-sha-256-and-sha-512)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#quantum-collision-attacks-on-reduced-sha-256-and-sha-512)
### Authors
* Akinori Hosoyamada, NTT Secure Platform Laboratories, Tokyo, Japan
* Yu Sasaki, NTT Secure Platform Laboratories, Tokyo, Japan
* Akinori Hosoyamada, Nagoya University, Nagoya, Japan
### Abstract
> In this paper, we study dedicated quantum collision attacks on SHA-256 and SHA-512 for the first time. The attacks reach 38 and 39 steps, respectively, which significantly improve the classical attacks for 31 and 27 steps. Both attacks adopt the framework of the previous work that converts many semi-free-start collisions into a 2-block collision, and are faster than the generic attack in the cost metric of time-space tradeoff. We observe that the number of required semi-free-start collisions can be reduced in the quantum setting, which allows us to convert the previous classical 38 and 39 step semi-free-start collisions into a collision. The idea behind our attacks is simple and will also be applicable to other cryptographic hash functions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_22](https://doi.org/10.1007/978-3-030-84242-0_22)
## Halo Infinite: Proof-Carrying Data from Additive Polynomial Commitments.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-1].md#halo-infinite-proof-carrying-data-from-additive-polynomial-commitments)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#halo-infinite-proof-carrying-data-from-additive-polynomial-commitments)
### Authors
* Dan Boneh, Stanford, Stanford, USA
* Ben Fisch, Stanford, Stanford, USA
* Justin Drake, Ethereum Foundation, Zug, Switzerland
* Ariel Gabizon, AZTEC Protocol, Bury Saint Edmunds, UK
### Abstract
> Polynomial commitment schemes (PCS) have recently been in the spotlight for their key role in building SNARKs. A PCS provides the ability to commit to a polynomial over a finite field and prove its evaluation at points. A succinct PCS has commitment and evaluation proof size sublinear in the degree of the polynomial. An efficient PCS has sublinear proof verification. Any efficient and succinct PCS can be used to construct a SNARK with similar security and efficiency characteristics (in the random oracle model).
> 
> Proof-carrying data (PCD) enables a set of parties to carry out an indefinitely long distributed computation where every step along the way is accompanied by a proof of correctness. It generalizes incrementally verifiable computation and can even be used to construct SNARKs. Until recently, however, the only known method for constructing PCD required expensive SNARK recursion. A system called Halo first demonstrated a new methodology for building PCD without SNARKs, exploiting an aggregation property of the Bulletproofs inner-product argument. The construction was heuristic because it makes non-black-box use of a concrete instantiation of the Fiat-Shamir transform. We expand upon this methodology to show that PCD can be (heuristically) built from any homomorphic polynomial commitment scheme (PCS), even if the PCS evaluation proofs are neither succinct nor efficient. In fact, the Halo methodology extends to any PCS that has an even more general property, namely the ability to aggregate linear combinations of commitments into a new succinct commitment that can later be opened to this linear combination. Our results thus imply new constructions of SNARKs and PCD that were not previously described in the literature and serve as a blueprint for future constructions as well.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_23](https://doi.org/10.1007/978-3-030-84242-0_23)
## Proof-Carrying Data Without Succinct Arguments.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-1].md#proof-carrying-data-without-succinct-arguments)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#proof-carrying-data-without-succinct-arguments)
### Authors
* Benedikt Bünz, Stanford University, Stanford, USA
* Alessandro Chiesa, UC Berkeley, Berkeley, USA
* William Lin, UC Berkeley, Berkeley, USA
* Pratyush Mishra, UC Berkeley, Berkeley, USA
* Nicholas Spooner, Boston University, Boston, USA
### Abstract
> Proof-carrying data (PCD) is a powerful cryptographic primitive that enables mutually distrustful parties to perform distributed computations that run indefinitely. Known approaches to construct PCD are based on succinct non-interactive arguments of knowledge (SNARKs) that have a succinct verifier or a succinct accumulation scheme.
> 
> In this paper we show how to obtain PCD without relying on SNARKs. We construct a PCD scheme given any non-interactive argument of knowledge (e.g., with linear-size arguments) that has a split accumulation scheme, which is a weak form of accumulation that we introduce.
> 
> Moreover, we construct a transparent non-interactive argument of knowledge for R1CS whose split accumulation is verifiable via a (small) constant number of group and field operations. Our construction is proved secure in the random oracle model based on the hardness of discrete logarithms, and it leads, via the random oracle heuristic and our result above, to concrete efficiency improvements for PCD.
> 
> Along the way, we construct a split accumulation scheme for Hadamard products under Pedersen commitments and for a simple polynomial commitment scheme based on Pedersen commitments.
> 
> Our results are supported by a modular and efficient implementation.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_24](https://doi.org/10.1007/978-3-030-84242-0_24)
## Subquadratic SNARGs in the Random Oracle Model.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-1].md#subquadratic-snargs-in-the-random-oracle-model)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#subquadratic-snargs-in-the-random-oracle-model)
### Authors
* Alessandro Chiesa, UC Berkeley, Berkeley, USA
* Eylon Yogev, BU, Boston, USA
* Eylon Yogev, TAU, Tel Aviv, Israel
### Abstract
> In a seminal work, Micali (FOCS 1994) gave the first succinct non-interactive argument (SNARG) in the random oracle model (ROM). The construction combines a PCP and a cryptographic commitment, and has several attractive features: it is plausibly post-quantum; it can be heuristically instantiated via lightweight cryptography; and it has a transparent (public-coin) parameter setup. However, it also has a significant drawback: a large argument size.
> 
> In this work, we provide a new construction that achieves a smaller argument size. This is the first progress on the Micali construction since it was introduced over 25 years ago.
> 
> A SNARG in the ROM is \((t,\mathsf {\epsilon })\)-secure if every \(t\)-query malicious prover can convince the verifier of a false statement with probability at most \(\mathsf {\epsilon }\). For \((t,\mathsf {\epsilon })\)-security, the argument size of all known SNARGs in the ROM (including Micali’s) is \(\tilde{O}((\log (t/\mathsf {\epsilon }))^2)\) bits, even if one were to rely on conjectured probabilistic proofs well beyond current techniques. In practice, these costs lead to SNARGs that are much larger than constructions based on other (pre-quantum and costly) tools. This has led many to believe that SNARGs in the ROM are inherently quadratic.
> 
> We show that this is not the case. We present a SNARG in the ROM with a sub-quadratic argument size: \(\tilde{O}(\log (t/\mathsf {\epsilon }) \cdot \log t)\). Our construction relies on a strong soundness notion for PCPs and a weak binding notion for commitments. We hope that our work paves the way for understanding if a linear argument size, that is \(O(\log (t/\mathsf {\epsilon }))\), is achievable in the ROM.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_25](https://doi.org/10.1007/978-3-030-84242-0_25)
## Sumcheck Arguments and Their Applications.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-1].md#sumcheck-arguments-and-their-applications)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#sumcheck-arguments-and-their-applications)
### Authors
* Jonathan Bootle, IBM Research – Zurich, Zurich, Switzerland
* Alessandro Chiesa, UC Berkeley, Berkeley, USA
* Katerina Sotiraki, UC Berkeley, Berkeley, USA
### Abstract
> We introduce a class of interactive protocols, which we call sumcheck arguments, that establishes a novel connection between the sumcheck protocol (Lund et al. JACM 1992) and folding techniques for Pedersen commitments (Bootle et al. EUROCRYPT 2016).
> 
> We define a class of sumcheck-friendly commitment schemes over modules that captures many examples of interest, and show that the sumcheck protocol applied to a polynomial associated with the commitment scheme yields a succinct argument of knowledge for openings of the commitment. Building on this, we additionally obtain succinct arguments for the NP-complete language R1CS over certain rings.
> 
> Sumcheck arguments enable us to recover as a special case numerous prior works in disparate cryptographic settings (discrete logarithms, pairings, groups of unknown order, lattices), providing one framework to understand them all. Further, we answer open questions raised in prior works, such as obtaining a lattice-based succinct argument from the SIS assumption for satisfiability problems over rings.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_26](https://doi.org/10.1007/978-3-030-84242-0_26)
## An Algebraic Framework for Universal and Updatable SNARKs.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-1].md#an-algebraic-framework-for-universal-and-updatable-snarks)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#an-algebraic-framework-for-universal-and-updatable-snarks)
### Authors
* Carla Ràfols, Universitat Pompeu Fabra, Barcelona, Spain
* Arantxa Zapico, Universitat Pompeu Fabra, Barcelona, Spain
* Carla Ràfols, Cybercat, Barcelona, Spain
### Abstract
> We introduce Checkable Subspace Sampling Arguments, a new information theoretic interactive proof system in which the prover shows that a vector has been sampled in a subspace according to the verifier’s coins. We show that this primitive provides a unifying view that explains the technical core of most of the constructions of universal and updatable pairing-based (zk)SNARKs. This characterization is extended to a fully algebraic framework for designing such SNARKs in a modular way. We propose new constructions of CSS arguments that lead to SNARKs with different performance trade-offs.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_27](https://doi.org/10.1007/978-3-030-84242-0_27)
