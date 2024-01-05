# Crypto 22-2
## Universally Composable End-to-End Secure Messaging.
🌍 **[English](../../../docs/en/Crypto/Crypto%2022-2.md#universally-composable-end-to-end-secure-messaging)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-2.md#universally-composable-end-to-end-secure-messaging)
### Authors
* Ran Canetti, Boston University, Boston, USA
* Palak Jain, Boston University, Boston, USA
* Marika Swanberg, Boston University, Boston, USA
* Mayank Varia, Boston University, Boston, USA
### Abstract
> We model and analyze the Signal end-to-end messaging protocol within the UC framework. In particular:

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_1](https://doi.org/10.1007/978-3-031-15979-4_1)
## On the Insider Security of MLS.
🌍 **[English](../../../docs/en/Crypto/Crypto%2022-2.md#on-the-insider-security-of-mls)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-2.md#on-the-insider-security-of-mls)
### Authors
* Joël Alwen, AWS Wickr, New York, USA
* Marta Mularczyk, AWS Wickr, New York, USA
* Daniel Jost, New York University, New York, USA
### Abstract
> The Messaging Layer Security (MLS) protocol is an open standard for end-to-end (E2E) secure group messaging being developed by the IETF, poised for deployment to consumers, industry, and government. It is designed to provide E2E privacy and authenticity for messages in long-lived sessions whenever possible, despite the participation (at times) of malicious insiders that can adaptively interact with the PKI at will, actively deviate from the protocol, leak honest parties’ states, and fully control the network. The core of the MLS protocol (from which it inherits essentially all of its efficiency and security properties) is a Continuous Group Key Agreement (CGKA) protocol. It provides asynchronous E2E group management by allowing group members to agree on a fresh independent symmetric key after every change to the group’s state (e.g. when someone joins/leaves the group).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_2](https://doi.org/10.1007/978-3-031-15979-4_2)
## Lattice-Based Zero-Knowledge Proofs and Applications: Shorter, Simpler, and More General.
🌍 **[English](../../../docs/en/Crypto/Crypto%2022-2.md#lattice-based-zero-knowledge-proofs-and-applications-shorter-simpler-and-more-general)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-2.md#lattice-based-zero-knowledge-proofs-and-applications-shorter-simpler-and-more-general)
### Authors
* Vadim Lyubashevsky, IBM Research Europe, Ruschlikon, Switzerland
* Ngoc Khanh Nguyen, IBM Research Europe, Ruschlikon, Switzerland
* Maxime Plançon, IBM Research Europe, Ruschlikon, Switzerland
* Ngoc Khanh Nguyen, ETH Zurich, Zurich, Switzerland
* Maxime Plançon, ETH Zurich, Zurich, Switzerland
### Abstract
> We present a much-improved practical protocol, based on the hardness of Module-SIS and Module-LWE problems, for proving knowledge of a short vector \(\vec s\) satisfying \(A\vec s=\vec t\bmod q\). The currently most-efficient technique for constructing such a proof works by showing that the \(\ell _\infty \) norm of \(\vec s\) is small. It creates a commitment to a polynomial vector \(\textbf{m}\) whose CRT coefficients are the coefficients of \(\vec s\) and then shows that (1) \(A\cdot \textsf{CRT}(\textbf{m})=\vec t\bmod \,q\) and (2) in the case that we want to prove that the \(\ell _\infty \) norm is at most 1, the polynomial product \((\textbf{m}- \boldsymbol{1})\cdot \textbf{m}\cdot (\textbf{m}+\boldsymbol{1})\) equals to 0. While these schemes are already quite practical, the requirement of using the CRT embedding and only being naturally adapted to proving the \(\ell _\infty \)-norm, somewhat hinders the efficiency of this approach.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_3](https://doi.org/10.1007/978-3-031-15979-4_3)
## Lattice-Based SNARKs: Publicly Verifiable, Preprocessing, and Recursively Composable - (Extended Abstract).
🌍 **[English](../../../docs/en/Crypto/Crypto%2022-2.md#lattice-based-snarks-publicly-verifiable-preprocessing-and-recursively-composable-extended-abstract)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-2.md#lattice-based-snarks-publicly-verifiable-preprocessing-and-recursively-composable-extended-abstract)
### Authors
* Martin R. Albrecht, Royal Holloway, University of London, Egham, UK
* Valerio Cini, AIT Austrian Institute of Technology, Seibersdorf, Austria
* Russell W. F. Lai, Aalto University, Espoo, Finland
* Giulio Malavolta, Max Planck Institute for Security and Privacy, Bochum, Germany
* Sri AravindaKrishnan Thyagarajan, Carnegie Mellon University, Pittsburgh, USA
### Abstract
> A succinct non-interactive argument of knowledge (SNARK) allows a prover to produce a short proof that certifies the veracity of a certain NP-statement. In the last decade, a large body of work has studied candidate constructions that are secure against quantum attackers. Unfortunately, no known candidate matches the efficiency and desirable features of (pre-quantum) constructions based on bilinear pairings.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_4](https://doi.org/10.1007/978-3-031-15979-4_4)
## Practical Sublinear Proofs for R1CS from Lattices.
🌍 **[English](../../../docs/en/Crypto/Crypto%2022-2.md#practical-sublinear-proofs-for-r1cs-from-lattices)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-2.md#practical-sublinear-proofs-for-r1cs-from-lattices)
### Authors
* Ngoc Khanh Nguyen, IBM Research Europe, Rüschlikon, Switzerland
* Gregor Seiler, IBM Research Europe, Rüschlikon, Switzerland
* Ngoc Khanh Nguyen, ETH Zurich, Zürich, Switzerland
### Abstract
> We propose a practical sublinear-size zero-knowledge proof system for Rank-1 Constraint Satisfaction (R1CS) based on lattices. The proof size scales asymptotically with the square root of the witness size. Concretely, the size becomes 2–3 times smaller than Ligero (ACM CCS 2017), which also exhibits square root scaling, for large instances of R1CS. At the core lies an interactive variant of the Schwartz-Zippel Lemma that might be of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_5](https://doi.org/10.1007/978-3-031-15979-4_5)
## On the Impossibility of Key Agreements from Quantum Random Oracles.
🌍 **[English](../../../docs/en/Crypto/Crypto%2022-2.md#on-the-impossibility-of-key-agreements-from-quantum-random-oracles)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-2.md#on-the-impossibility-of-key-agreements-from-quantum-random-oracles)
### Authors
* Per Austrin, KTH Royal Institute of Technology, Stockholm, Sweden
* Hao Chung, Carnegie Mellon University, Pittsburgh, USA
* Kai-Min Chung, Academia Sinica, Taipei, Taiwan
* Shiuan Fu, Academia Sinica, Taipei, Taiwan
* Yao-Ting Lin, Academia Sinica, Taipei, Taiwan
* Mohammad Mahmoody, University of Virginia, Charlottesville, USA
### Abstract
> We study the following question, first publicly posed by Hosoyamada and Yamakawa in 2018. Can parties \(\textsf{A},\textsf{B}\) with quantum computing power and classical communication rely only on a random oracle (that can be queried in quantum superposition) to agree on a key that is private from eavesdroppers?

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_6](https://doi.org/10.1007/978-3-031-15979-4_6)
## Succinct Classical Verification of Quantum Computation.
🌍 **[English](../../../docs/en/Crypto/Crypto%2022-2.md#succinct-classical-verification-of-quantum-computation)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-2.md#succinct-classical-verification-of-quantum-computation)
### Authors
* James Bartusek, UC Berkeley, Berkeley, USA
* Fermi Ma, UC Berkeley, Berkeley, USA
* Yael Tauman Kalai, Microsoft Research and MIT, Cambridge, USA
* Alex Lombardi, MIT, Cambridge, USA
* Vinod Vaikuntanathan, MIT, Cambridge, USA
* Lisa Yang, MIT, Cambridge, USA
* Fermi Ma, Simons Institute, Berkeley, USA
* Giulio Malavolta, MPI-SP, Bochum, Germany
* Thomas Vidick, Caltech, Pasadena, USA
### Abstract
> We construct a classically verifiable succinct interactive argument for quantum computation (BQP) with communication complexity and verifier runtime that are poly-logarithmic in the runtime of the BQP computation (and polynomial in the security parameter). Our protocol is secure assuming the post-quantum security of indistinguishability obfuscation (iO) and Learning with Errors (LWE). This is the first succinct argument for quantum computation in the plain model; prior work (Chia-Chung-Yamakawa, TCC ’20) requires both a long common reference string and non-black-box use of a hash function modeled as a random oracle.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_7](https://doi.org/10.1007/978-3-031-15979-4_7)
## On the Feasibility of Unclonable Encryption, and More.
🌍 **[English](../../../docs/en/Crypto/Crypto%2022-2.md#on-the-feasibility-of-unclonable-encryption-and-more)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-2.md#on-the-feasibility-of-unclonable-encryption-and-more)
### Authors
* Prabhanjan Ananth, University of California, Santa Barbara, CA, USA
* Fatih Kaleoglu, University of California, Santa Barbara, CA, USA
* Xingjian Li, Tsinghua University, Beijing, China
* Qipeng Liu, Simons Institute for the Theory of Computing, Berkeley, CA, USA
* Mark Zhandry, NTT Research, Palo Alto, CA, USA
* Mark Zhandry, Princeton University, Princeton, NJ, USA
### Abstract
> Unclonable encryption, first introduced by Broadbent and Lord (TQC’20), is a one-time encryption scheme with the following security guarantee: any non-local adversary \((\mathcal {A},\mathcal {B},\mathcal {C})\) cannot simultaneously distinguish encryptions of two equal length messages. This notion is termed as unclonable indistinguishability. Prior works focused on achieving a weaker notion of unclonable encryption, where we required that any non-local adversary \((\mathcal {A},\mathcal {B},\mathcal {C})\) cannot simultaneously recover the entire message m. Seemingly innocuous, understanding the feasibility of encryption schemes satisfying unclonable indistinguishability (even for 1-bit messages) has remained elusive.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_8](https://doi.org/10.1007/978-3-031-15979-4_8)
## Shorter Hash-and-Sign Lattice-Based Signatures.
🌍 **[English](../../../docs/en/Crypto/Crypto%2022-2.md#shorter-hash-and-sign-lattice-based-signatures)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-2.md#shorter-hash-and-sign-lattice-based-signatures)
### Authors
* Thomas Espitau, NTT Corporation, Tokyo, Japan
* Mehdi Tibouchi, NTT Corporation, Tokyo, Japan
* Alexandre Wallet, IRISA, Univ Rennes 1, Inria, Bretagne-Atlantique Center, Rennes, France
* Yang Yu, BNRist, Tsinghua University, Beijing, China
* Yang Yu, National Financial Cryptography Research Center, Beijing, China
### Abstract
> Lattice-based digital signature schemes following the hash-and-sign design paradigm of Gentry, Peikert and Vaikuntanathan (GPV) tend to offer an attractive level of efficiency, particularly when instantiated with structured compact trapdoors. In particular, NIST postquantum finalist Falcon is both quite fast for signing and verification and quite compact: NIST notes that it has the smallest bandwidth (as measured in combined size of public key and signature) of all round 2 digital signature candidates. Nevertheless, while Falcon–512, for instance, compares favorably to ECDSA–384 in terms of speed, its signatures are well over 10 times larger. For applications that store large number of signatures, or that require signatures to fit in prescribed packet sizes, this can be a critical limitation.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_9](https://doi.org/10.1007/978-3-031-15979-4_9)
## MuSig-L: Lattice-Based Multi-signature with Single-Round Online Phase.
🌍 **[English](../../../docs/en/Crypto/Crypto%2022-2.md#musig-l-lattice-based-multi-signature-with-single-round-online-phase)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-2.md#musig-l-lattice-based-multi-signature-with-single-round-online-phase)
### Authors
* Cecilia Boschini, Technion, Haifa, Israel
* Cecilia Boschini, Reichman University, Herzliya, Israel
* Akira Takahashi, Aarhus University, Aarhus, Denmark
* Mehdi Tibouchi, NTT Corporation, Tokyo, Japan
### Abstract
> Multi-signatures are protocols that allow a group of signers to jointly produce a single signature on the same message. In recent years, a number of practical multi-signature schemes have been proposed in the discrete-log setting, such as MuSig2 (CRYPTO’21) and DWMS (CRYPTO’21). The main technical challenge in constructing a multi-signature scheme is to achieve a set of several desirable properties, such as (1) security in the plain public-key (PPK) model, (2) concurrent security, (3) low online round complexity, and (4) key aggregation. However, previous lattice-based, post-quantum counterparts to Schnorr multi-signatures fail to satisfy these properties.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_10](https://doi.org/10.1007/978-3-031-15979-4_10)
## A New Framework for More Efficient Round-Optimal Lattice-Based (Partially) Blind Signature via Trapdoor Sampling.
🌍 **[English](../../../docs/en/Crypto/Crypto%2022-2.md#a-new-framework-for-more-efficient-round-optimal-lattice-based-partially-blind-signature-via-trapdoor-sampling)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-2.md#a-new-framework-for-more-efficient-round-optimal-lattice-based-partially-blind-signature-via-trapdoor-sampling)
### Authors
* Rafael del Pino, PQShield SAS, Paris, France
* Shuichi Katsumata, AIST, Tokyo, Japan
* Shuichi Katsumata, PQShield Ltd., Oxford, UK
### Abstract
> Blind signatures, proposed by Chaum (CRYPTO’82), are interactive protocols between a signer and a user, where a user can obtain a signature without revealing the message to be signed. Recently, Hauck et al. (EUROCRYPT’20) observed that all efficient lattice-based blind signatures following the blueprint of the original blind signature by Rükert (ASIACRYPT’10) have a flawed security proof. This puts us in a situation where all known lattice-based blind signatures have at least two of the following drawbacks: heuristic security; 1 MB or more signature size; only supporting bounded polynomially many signatures, or being based on non-standard assumptions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_11](https://doi.org/10.1007/978-3-031-15979-4_11)
## Ofelimos: Combinatorial Optimization via Proof-of-Useful-Work - A Provably Secure Blockchain Protocol.
🌍 **[English](../../../docs/en/Crypto/Crypto%2022-2.md#ofelimos-combinatorial-optimization-via-proof-of-useful-work-a-provably-secure-blockchain-protocol)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-2.md#ofelimos-combinatorial-optimization-via-proof-of-useful-work-a-provably-secure-blockchain-protocol)
### Authors
* Matthias Fitzi, IOHK, Singapore, Singapore
* Aggelos Kiayias, IOHK, Singapore, Singapore
* Giorgos Panagiotakos, IOHK, Singapore, Singapore
* Alexander Russell, IOHK, Singapore, Singapore
* Aggelos Kiayias, University of Edinburgh, Edinburgh, UK
* Alexander Russell, University of Connecticut, Storrs, USA
### Abstract
> Minimizing the energy cost and carbon footprint of the Bitcoin blockchain and related protocols is one of the most widely identified open questions in the cryptocurrency space. Substituting the proof-of-work (PoW) primitive in Nakamoto’s longest-chain protocol with a proof of useful work (PoUW) has been long theorized as an ideal solution in many respects but, to this day, the concept still lacks a convincingly secure realization.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_12](https://doi.org/10.1007/978-3-031-15979-4_12)
## Practical Statistically-Sound Proofs of Exponentiation in Any Group.
🌍 **[English](../../../docs/en/Crypto/Crypto%2022-2.md#practical-statistically-sound-proofs-of-exponentiation-in-any-group)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-2.md#practical-statistically-sound-proofs-of-exponentiation-in-any-group)
### Authors
* Charlotte Hoffmann, Institute of Science and Technology Austria, Klosterneuburg, Austria
* Krzysztof Pietrzak, Institute of Science and Technology Austria, Klosterneuburg, Austria
* Pavel Hubáček, Faculty of Mathematics and Physics, Charles University, Prague, Czech Republic
* Chethan Kamath, Tel Aviv University, Tel Aviv, Israel
* Karen Klein, ETH Zurich, Zurich, Switzerland
### Abstract
> A proof of exponentiation (PoE) in a group \({\mathbb {G}}\) of unknown order allows a prover to convince a verifier that a tuple \((x,q,T,y)\in {\mathbb {G}}\times {\mathbb {N}}\times {\mathbb {N}}\times {\mathbb {G}}\) satisfies \(x^{q^T}=y\). This primitive has recently found exciting applications in the constructions of verifiable delay functions and succinct arguments of knowledge. The most practical PoEs only achieve soundness either under computational assumptions, i.e., they are arguments (Wesolowski, Journal of Cryptology 2020), or in groups that come with the promise of not having any small subgroups (Pietrzak, ITCS 2019). The only statistically-sound PoE in general groups of unknown order is due to Block et al. (CRYPTO 2021), and can be seen as an elaborate parallel repetition of Pietrzak’s PoE: to achieve \(\lambda \) bits of security, say \(\lambda =80\), the number of repetitions required (and thus the blow-up in communication) is as large as \(\lambda \).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_13](https://doi.org/10.1007/978-3-031-15979-4_13)
## Formalizing Delayed Adaptive Corruptions and the Security of Flooding Networks.
🌍 **[English](../../../docs/en/Crypto/Crypto%2022-2.md#formalizing-delayed-adaptive-corruptions-and-the-security-of-flooding-networks)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-2.md#formalizing-delayed-adaptive-corruptions-and-the-security-of-flooding-networks)
### Authors
* Christian Matt, Concordium, Zurich, Switzerland
* Jesper Buus Nielsen, Concordium Blockchain Research Center, Aarhus University, Aarhus, Denmark
* Søren Eller Thomsen, Concordium Blockchain Research Center, Aarhus University, Aarhus, Denmark
### Abstract
> Many decentralized systems rely on flooding protocols for message dissemination. In such a protocol, the sender of a message sends it to a randomly selected set of peers. These peers again send the message to their randomly selected peers, until every network participant has received the message. This type of protocols clearly fail in face of an adaptive adversary who can simply corrupt all peers of the sender and thereby prevent the message from being delivered. Nevertheless, flooding protocols are commonly used within protocols that aim to be cryptographically secure, most notably in blockchain protocols. While it is possible to revert to static corruptions, this gives unsatisfactory security guarantees, especially in the setting of a blockchain that is supposed to run for an extended period of time.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_14](https://doi.org/10.1007/978-3-031-15979-4_14)
## Batch Arguments for sfNP and More from Standard Bilinear Group Assumptions.
🌍 **[English](../../../docs/en/Crypto/Crypto%2022-2.md#batch-arguments-for-sfnp-and-more-from-standard-bilinear-group-assumptions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-2.md#batch-arguments-for-sfnp-and-more-from-standard-bilinear-group-assumptions)
### Authors
* Brent Waters, University of Texas at Austin, Austin, TX, USA
* David J. Wu, University of Texas at Austin, Austin, TX, USA
* Brent Waters, NTT Research, Sunnyvale, CA, USA
### Abstract
> Non-interactive batch arguments for \(\textsf{NP}\) provide a way to amortize the cost of \(\textsf{NP}\) verification across multiple instances. They enable a prover to convince a verifier of multiple \(\textsf{NP}\) statements with communication much smaller than the total witness length and verification time much smaller than individually checking each instance.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_15](https://doi.org/10.1007/978-3-031-15979-4_15)
## Breaking Rainbow Takes a Weekend on a Laptop.
🌍 **[English](../../../docs/en/Crypto/Crypto%2022-2.md#breaking-rainbow-takes-a-weekend-on-a-laptop)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-2.md#breaking-rainbow-takes-a-weekend-on-a-laptop)
### Authors
* Ward Beullens, IBM Research, Zurich, Switzerland
### Abstract
> This work introduces new key recovery attacks against the Rainbow signature scheme, which is one of the three finalist signature schemes still in the NIST Post-Quantum Cryptography standardization project. The new attacks outperform previously known attacks for all the parameter sets submitted to NIST and make a key-recovery practical for the SL 1 parameters. Concretely, given a Rainbow public key for the SL 1 parameters of the second-round submission, our attack returns the corresponding secret key after on average 53 h (one weekend) of computation time on a standard laptop.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_16](https://doi.org/10.1007/978-3-031-15979-4_16)
## Some Easy Instances of Ideal-SVP and Implications on the Partial Vandermonde Knapsack Problem.
🌍 **[English](../../../docs/en/Crypto/Crypto%2022-2.md#some-easy-instances-of-ideal-svp-and-implications-on-the-partial-vandermonde-knapsack-problem)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-2.md#some-easy-instances-of-ideal-svp-and-implications-on-the-partial-vandermonde-knapsack-problem)
### Authors
* Katharina Boudgoust, Aarhus University, Aarhus, Denmark
* Erell Gachon, Univ. Bordeaux, CNRS, INRIA, Bordeaux INP, IMB, UMR 5251, 33400, Talence, France
* Alice Pellet-Mary, Univ. Bordeaux, CNRS, INRIA, Bordeaux INP, IMB, UMR 5251, 33400, Talence, France
### Abstract
> In this article, we generalize the works of Pan et al. (Eurocrypt’21) and Porter et al. (ArXiv’21) and provide a simple condition under which an ideal lattice defines an easy instance of the shortest vector problem. Namely, we show that the more automorphisms stabilize the ideal, the easier it is to find a short vector in it. This observation was already made for prime ideals in Galois fields, and we generalize it to any ideal (whose prime factors are not ramified) of any number field.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_17](https://doi.org/10.1007/978-3-031-15979-4_17)
## On Codes and Learning with Errors over Function Fields.
🌍 **[English](../../../docs/en/Crypto/Crypto%2022-2.md#on-codes-and-learning-with-errors-over-function-fields)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-2.md#on-codes-and-learning-with-errors-over-function-fields)
### Authors
* Maxime Bombar, LIX, CNRS UMR 7161, École Polytechnique, Institut Polytechnique de Paris, 1 rue Honoré d’Estienne d’Orves, 91120, Palaiseau Cedex, France
* Alain Couvreur, LIX, CNRS UMR 7161, École Polytechnique, Institut Polytechnique de Paris, 1 rue Honoré d’Estienne d’Orves, 91120, Palaiseau Cedex, France
* Thomas Debris-Alazard, LIX, CNRS UMR 7161, École Polytechnique, Institut Polytechnique de Paris, 1 rue Honoré d’Estienne d’Orves, 91120, Palaiseau Cedex, France
* Maxime Bombar, Inria Saclay, Palaiseau, France
* Alain Couvreur, Inria Saclay, Palaiseau, France
* Thomas Debris-Alazard, Inria Saclay, Palaiseau, France
### Abstract
> It is a long standing open problem to find search to decision reductions for structured versions of the decoding problem of linear codes. Such results in the lattice-based setting have been carried out using number fields: Polynomial–LWE, Ring–\(\textsf{LWE}\), Module–\(\textsf{LWE}\) and so on. We propose a function field version of the \(\textsf{LWE}\) problem. This new framework leads to another point of view on structured codes, e.g. quasi-cyclic codes, strengthening the connection between lattice-based and code-based cryptography. In particular, we obtain the first search to decision reduction for structured codes. Following the historical constructions in lattice–based cryptography, we instantiate our construction with function fields analogues of cyclotomic fields, namely Carlitz extensions, leading to search to decision reductions on various versions of Ring-\(\textsf{LPN}\), which have applications to secure multiparty computation and to an authentication protocol.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_18](https://doi.org/10.1007/978-3-031-15979-4_18)
## Syndrome Decoding in the Head: Shorter Signatures from Zero-Knowledge Proofs.
🌍 **[English](../../../docs/en/Crypto/Crypto%2022-2.md#syndrome-decoding-in-the-head-shorter-signatures-from-zero-knowledge-proofs)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-2.md#syndrome-decoding-in-the-head-shorter-signatures-from-zero-knowledge-proofs)
### Authors
* Thibauld Feneuil, CryptoExperts, Paris, France
* Matthieu Rivain, CryptoExperts, Paris, France
* Thibauld Feneuil, Sorbonne Université, CNRS, INRIA, Institut de Mathématiques de Jussieu-Paris Rive Gauche, Ouragan, Paris, France
* Antoine Joux, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### Abstract
> Zero-knowledge proofs of knowledge are useful tools to design signature schemes. The ongoing effort to build a quantum computer urges the cryptography community to develop new secure cryptographic protocols based on quantum-hard cryptographic problems. One of the few directions is code-based cryptography for which the strongest problem is the syndrome decoding (SD) for random linear codes. This problem is known to be NP-hard and the cryptanalysis state of the art has been stable for many years. A zero-knowledge protocol for this problem was pioneered by Stern in 1993. Since its publication, many articles proposed optimizations, implementation, or variants.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_19](https://doi.org/10.1007/978-3-031-15979-4_19)
## Beyond the Csiszár-Korner Bound: Best-Possible Wiretap Coding via Obfuscation.
🌍 **[English](../../../docs/en/Crypto/Crypto%2022-2.md#beyond-the-csisz-r-korner-bound-best-possible-wiretap-coding-via-obfuscation)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-2.md#beyond-the-csisz-r-korner-bound-best-possible-wiretap-coding-via-obfuscation)
### Authors
* Yuval Ishai, Technion, Haifa, Israel
* Alexis Korb, UCLA, Los Angeles, USA
* Paul Lou, UCLA, Los Angeles, USA
* Amit Sahai, UCLA, Los Angeles, USA
### Abstract
> A wiretap coding scheme (Wyner, Bell Syst. Tech. J. 1975) enables Alice to reliably communicate a message m to an honest Bob by sending an encoding c over a noisy channel \(\textsf{ChB}\), while at the same time hiding m from Eve who receives c over another noisy channel \(\textsf{ChE}\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_20](https://doi.org/10.1007/978-3-031-15979-4_20)
## Correlated Pseudorandomness from Expand-Accumulate Codes.
🌍 **[English](../../../docs/en/Crypto/Crypto%2022-2.md#correlated-pseudorandomness-from-expand-accumulate-codes)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-2.md#correlated-pseudorandomness-from-expand-accumulate-codes)
### Authors
* Elette Boyle, IDC Herzliya, Herzliya, Israel
* Elette Boyle, NTT Research, Sunnyvale, USA
* Geoffroy Couteau, IRIF, Paris, France
* Niv Gilboa, Ben-Gurion University, Beersheba, Israel
* Yuval Ishai, Technion, Haifa, Israel
* Lisa Kohl, Cryptology Group, CWI Amsterdam, Amsterdam, The Netherlands
* Nicolas Resch, Cryptology Group, CWI Amsterdam, Amsterdam, The Netherlands
* Peter Scholl, Aarhus University, Aarhus, Denmark
### Abstract
> A pseudorandom correlation generator (PCG) is a recent tool for securely generating useful sources of correlated randomness, such as random oblivious transfers (OT) and vector oblivious linear evaluations (VOLE), with low communication cost.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_21](https://doi.org/10.1007/978-3-031-15979-4_21)
## Public-Key Watermarking Schemes for Pseudorandom Functions.
🌍 **[English](../../../docs/en/Crypto/Crypto%2022-2.md#public-key-watermarking-schemes-for-pseudorandom-functions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-2.md#public-key-watermarking-schemes-for-pseudorandom-functions)
### Authors
* Rupeng Yang, Department of Computer Science, The University of Hong Kong, Hong Kong, China
* Zuoxia Yu, Department of Computer Science, The University of Hong Kong, Hong Kong, China
* Man Ho Au, Department of Computer Science, The University of Hong Kong, Hong Kong, China
* Rupeng Yang, Institute of Cybersecurity and Cryptology, School of Computing and Information Technology, University of Wollongong, Wollongong, NSW, Australia
* Zuoxia Yu, Institute of Cybersecurity and Cryptology, School of Computing and Information Technology, University of Wollongong, Wollongong, NSW, Australia
* Willy Susilo, Institute of Cybersecurity and Cryptology, School of Computing and Information Technology, University of Wollongong, Wollongong, NSW, Australia
### Abstract
> A software watermarking scheme can embed a message into a program while preserving its functionality. The embedded message can be extracted later by an extraction algorithm, and no one could remove it without significantly changing the functionality of the program. A watermarking scheme is public key if neither the marking procedure nor the extraction procedure needs a watermarking secret key. Prior constructions of watermarking schemes mainly focus on watermarking pseudorandom functions (PRFs), and the major open problem in this direction is to construct a public-key watermarkable PRF.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_22](https://doi.org/10.1007/978-3-031-15979-4_22)
## CHIP and CRISP: Protecting All Parties Against Compromise Through Identity-Binding PAKEs.
🌍 **[English](../../../docs/en/Crypto/Crypto%2022-2.md#chip-and-crisp-protecting-all-parties-against-compromise-through-identity-binding-pakes)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-2.md#chip-and-crisp-protecting-all-parties-against-compromise-through-identity-binding-pakes)
### Authors
* Cas Cremers, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Moni Naor, Faculty of Mathematics and Computer Science, Weizmann Institute of Science, Rehovot, Israel
* Shahar Paz, School of Computer Science, Tel Aviv University, Tel Aviv, Israel
* Eyal Ronen, School of Computer Science, Tel Aviv University, Tel Aviv, Israel
### Abstract
> Recent advances in password-based authenticated key exchange (PAKE) protocols can offer stronger security guarantees for globally deployed security protocols. Notably, the OPAQUE protocol [Eurocrypt2018] realizes Strong Asymmetric PAKE (saPAKE), strengthening the protection offered by aPAKE to compromised servers: after compromising an saPAKE server, the adversary still has to perform a full brute-force search to recover any passwords or impersonate users. However, (s)aPAKEs do not protect client storage, and can only be applied in the so-called asymmetric setting, in which some parties, such as servers, do not communicate with each other using the protocol.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_23](https://doi.org/10.1007/978-3-031-15979-4_23)
## Password-Authenticated Key Exchange from Group Actions.
🌍 **[English](../../../docs/en/Crypto/Crypto%2022-2.md#password-authenticated-key-exchange-from-group-actions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-2.md#password-authenticated-key-exchange-from-group-actions)
### Authors
* Michel Abdalla, DFINITY, Zürich, Switzerland
* Michel Abdalla, DIENS, École normale supérieure, CNRS, PSL University, Paris, France
* Thorsten Eisenhofer, Ruhr-Universität Bochum, Bochum, Germany
* Eike Kiltz, Ruhr-Universität Bochum, Bochum, Germany
* Sabrina Kunzweiler, Ruhr-Universität Bochum, Bochum, Germany
* Doreen Riepel, Ruhr-Universität Bochum, Bochum, Germany
### Abstract
> We present two provably secure password-authenticated key exchange (PAKE) protocols based on a commutative group action. To date the most important instantiation of isogeny-based group actions is given by CSIDH. To model the properties more accurately, we extend the framework of cryptographic group actions (Alamati et al., ASIACRYPT 2020) by the ability of computing the quadratic twist of an elliptic curve. This property is always present in the CSIDH setting and turns out to be crucial in the security analysis of our PAKE protocols.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_24](https://doi.org/10.1007/978-3-031-15979-4_24)
## Efficient NIZKs and Signatures from Commit-and-Open Protocols in the QROM.
🌍 **[English](../../../docs/en/Crypto/Crypto%2022-2.md#efficient-nizks-and-signatures-from-commit-and-open-protocols-in-the-qrom)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-2.md#efficient-nizks-and-signatures-from-commit-and-open-protocols-in-the-qrom)
### Authors
* Jelle Don, Centrum Wiskunde and Informatica (CWI), Amsterdam, Netherlands
* Serge Fehr, Centrum Wiskunde and Informatica (CWI), Amsterdam, Netherlands
* Christian Majenz, Centrum Wiskunde and Informatica (CWI), Amsterdam, Netherlands
* Serge Fehr, Mathematical Institute, Leiden University, Leiden, Netherlands
* Christian Schaffner, Informatics Institute, University of Amsterdam, Amsterdam, Netherlands
* Christian Majenz, QuSoft, Amsterdam, Netherlands
* Christian Schaffner, QuSoft, Amsterdam, Netherlands
### Abstract
> Commit-and-open \(\Sigma \)-protocols are a popular class of protocols for constructing non-interactive zero-knowledge arguments and digital-signature schemes via the Fiat-Shamir transformation . Instantiated with hash-based commitments, the resulting non-interactive schemes enjoy tight online-extractability in the random oracle model. Online extractability improves the tightness of security proofs for the resulting digital-signature schemes by avoiding lossy rewinding or forking-lemma based extraction.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_25](https://doi.org/10.1007/978-3-031-15979-4_25)
## Locally Verifiable Signature and Key Aggregation.
🌍 **[English](../../../docs/en/Crypto/Crypto%2022-2.md#locally-verifiable-signature-and-key-aggregation)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-2.md#locally-verifiable-signature-and-key-aggregation)
### Authors
* Rishab Goyal, MIT, Cambridge, MA, USA
* Vinod Vaikuntanathan, MIT, Cambridge, MA, USA
### Abstract
> Aggregate signatures (Boneh, Gentry, Lynn, Shacham, Eurocrypt 2003) enable compressing a set of N signatures on N different messages into a short aggregate signature. This reduces the space complexity of storing the signatures from linear in N to a fixed constant (that depends only on the security parameter). However, verifying the aggregate signature requires access to all N messages, resulting in the complexity of verification being at least \(\varOmega (N)\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_26](https://doi.org/10.1007/978-3-031-15979-4_26)
## Multimodal Private Signatures.
🌍 **[English](../../../docs/en/Crypto/Crypto%2022-2.md#multimodal-private-signatures)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-2.md#multimodal-private-signatures)
### Authors
* Khoa Nguyen, Institute of Cybersecurity and Cryptology, School of Computing and Information Technology, University of Wollongong, Northfields Avenue, Wollongong, NSW, 2522, Australia
* Fuchun Guo, Institute of Cybersecurity and Cryptology, School of Computing and Information Technology, University of Wollongong, Northfields Avenue, Wollongong, NSW, 2522, Australia
* Willy Susilo, Institute of Cybersecurity and Cryptology, School of Computing and Information Technology, University of Wollongong, Northfields Avenue, Wollongong, NSW, 2522, Australia
* Guomin Yang, Institute of Cybersecurity and Cryptology, School of Computing and Information Technology, University of Wollongong, Northfields Avenue, Wollongong, NSW, 2522, Australia
### Abstract
> We introduce Multimodal Private Signature (MPS) - an anonymous signature system that offers a novel accountability feature: it allows a designated opening authority to learn some partial information \(\textsf{op}\) about the signer’s identity \(\textsf{id}\), and nothing beyond. Such partial information can flexibly be defined as \(\textsf{op} = \textsf{id}\) (as in group signatures), or as \(\textsf{op} = \textbf{0}\) (like in ring signatures), or more generally, as \(\textsf{op} = G_j(\textsf{id})\), where \(G_j(\cdot )\) is a certain disclosing function. Importantly, the value of \(\textsf{op}\) is known in advance by the signer, and hence, the latter can decide whether she/he wants to disclose that piece of information. The concept of MPS significantly generalizes the notion of tracing in traditional anonymity-oriented signature primitives, and can enable various new and appealing privacy-preserving applications.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_27](https://doi.org/10.1007/978-3-031-15979-4_27)
