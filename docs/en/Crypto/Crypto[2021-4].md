# Crypto[2021-4]
## Witness Authenticating NIZKs and Applications.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-4].md#witness-authenticating-nizks-and-applications)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-4].md#witness-authenticating-nizks-and-applications)
### Authors
* Hanwen Feng, Beihang University, Beijing, China
* Qiang Tang, The University of Sydney, Sydney, Australia
### Abstract
> We initiate the study of witness authenticating NIZK proof systems (waNIZKs), in which one can use a witness w of a statement x to identify whether a valid proof for x is indeed generated using w. Such a new identification functionality enables more diverse applications, and it also puts new requirements on soundness that: (1) no adversary can generate a valid proof that will not be identified by any witness; (2) or forge a proof using her valid witness to frame others. To work around the obvious obstacle towards conventional zero-knowledgeness, we define entropic zero-knowledgeness that requires the proof to leak no partial information, if the witness has sufficient computational entropy.
> 
> We give a formal treatment of this new primitive. The modeling turns out to be quite involved and multiple subtle points arise and particular cares are required. We present general constructions from standard assumptions. We also demonstrate three applications in non-malleable (perfectly one-way) hash, group signatures with verifier-local revocations and plaintext-checkable public-key encryption. Our waNIZK provides a new tool to advance the state of the art in all these applications.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_1](https://doi.org/10.1007/978-3-030-84259-8_1)
## Towards a Unified Approach to Black-Box Constructions of Zero-Knowledge Proofs.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-4].md#towards-a-unified-approach-to-black-box-constructions-of-zero-knowledge-proofs)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-4].md#towards-a-unified-approach-to-black-box-constructions-of-zero-knowledge-proofs)
### Authors
* Xiao Liang, Stony Brook University, Stony Brook, NY, 11790, USA
* Omkant Pandey, Stony Brook University, Stony Brook, NY, 11790, USA
### Abstract
> General-purpose zero-knowledge proofs for all \(\mathsf {NP} \) languages greatly simplify secure protocol design. However, they inherently require the code of the underlying relation. If the relation contains black-box calls to a cryptographic function, the code of that function must be known to use the ZK proof, even if both the relation and the proof require only black-box access to the function. Rosulek (Crypto’12) shows that non-trivial proofs for even simple statements, such as membership in the range of a one-way function, require non-black-box access.
> 
> We propose an alternative approach to bypass Rosulek’s impossibility result. Instead of asking for a ZK proof directly for the given one-way function f, we seek to construct a new one-way function F given only black-box access to f, and an associated ZK protocol for proving non-trivial statements, such as range membership, over its output. We say that F, along with its proof system, is a proof-based one-way function. We similarly define proof-based versions of other primitives, specifically pseudo-random generators and collision-resistant hash functions.
> 
> We show how to construct proof-based versions of each of the primitives mentioned above from their ordinary counterparts under mild but necessary restrictions over the input. More specifically,
> 
> We first show that if the prover entirely chooses the input, then proof-based pseudo-random generators cannot be constructed from ordinary ones in a black-box manner, thus establishing that some restrictions over the input are necessary.
> 
> We next present black-box constructions handling inputs of the form (x, r) where r is chosen uniformly by the verifier. This is similar to the restrictions in the widely used Goldreich-Levin theorem. The associated ZK proofs support range membership over the output as well as arbitrary predicates over prefixes of the input.
> 
> Our results open up the possibility that general-purpose ZK proofs for relations that require black-box access to the primitives above may be possible in the future without violating their black-box nature by instantiating them using proof-based primitives instead of ordinary ones.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_2](https://doi.org/10.1007/978-3-030-84259-8_2)
## Compressing Proofs of k-Out-Of-n Partial Knowledge.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-4].md#compressing-proofs-of-k-out-of-n-partial-knowledge)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-4].md#compressing-proofs-of-k-out-of-n-partial-knowledge)
### Authors
* Thomas Attema, CWI, Cryptology Group, Amsterdam, The Netherlands
* Ronald Cramer, CWI, Cryptology Group, Amsterdam, The Netherlands
* Serge Fehr, CWI, Cryptology Group, Amsterdam, The Netherlands
* Thomas Attema, Leiden University, Mathematical Institute, Leiden, The Netherlands
* Ronald Cramer, Leiden University, Mathematical Institute, Leiden, The Netherlands
* Serge Fehr, Leiden University, Mathematical Institute, Leiden, The Netherlands
* Thomas Attema, TNO, Cyber Security and Robustness, The Hague, The Netherlands
### Abstract
> In a proof of partial knowledge, introduced by Cramer, Damgård and Schoenmakers (CRYPTO 1994), a prover knowing witnesses for some k-subset of n given public statements can convince the verifier of this claim without revealing which k-subset. Their solution combines \(\varSigma \)-protocol theory and linear secret sharing, and achieves linear communication complexity for general k, n. Especially the “one-out-of-n” case \(k=1\) has seen myriad applications during the last decades, e.g., in electronic voting, ring signatures, and confidential transaction systems.
> 
> In this paper we focus on the discrete logarithm (DL) setting, where the prover claims knowledge of DLs of k-out-of-n given elements. Groth and Kohlweiss (EUROCRYPT 2015) have shown how to solve the special case \(k=1\) with logarithmic (in n) communication, instead of linear as prior work. However, their method takes explicit advantage of \(k=1\) and does not generalize to \(k>1\). Alternatively, an indirect approach for solving the considered problem is by translating the k-out-of-n relation into a circuit and then applying communication-efficient circuit ZK. For \(k = 1\) this approach has been highly optimized, e.g., in ZCash.
> 
> Our main contribution is a new, simple honest-verifier zero-knowledge proof protocol for proving knowledge of k out of n DLs with logarithmic communication and for general k and n, without requiring any generic circuit ZK machinery. Our solution puts forward a novel extension of the compressed \(\varSigma \)-protocol theory (CRYPTO 2020), which we then utilize to compress a new \(\varSigma \)-protocol for proving knowledge of k-out-of-n DL’s down to logarithmic size. The latter \(\varSigma \)-protocol is inspired by the CRYPTO 1994 approach, but a careful re-design of the original protocol is necessary for the compression technique to apply. Interestingly, even for \(k=1\) and general n our approach improves prior direct approaches as it reduces prover complexity without increasing the communication complexity. Besides the conceptual simplicity, we also identify regimes of practical relevance where our approach achieves asymptotic and concrete improvements, e.g., in proof size and prover complexity, over the generic approach based on circuit-ZK.
> 
> Finally, we show various extensions and generalizations of our core result. For instance, we extend our protocol to proofs of partial knowledge of Pedersen (vector) commitment openings, and/or to include a proof that the witness satisfies some additional constraint, and we show how to extend our results to non-threshold access structures.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_3](https://doi.org/10.1007/978-3-030-84259-8_3)
## Mac'n'Cheese: Zero-Knowledge Proofs for Boolean and Arithmetic Circuits with Nested Disjunctions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-4].md#macncheese-zero-knowledge-proofs-for-boolean-and-arithmetic-circuits-with-nested-disjunctions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-4].md#macncheese-zero-knowledge-proofs-for-boolean-and-arithmetic-circuits-with-nested-disjunctions)
### Authors
* Carsten Baum, Aarhus University, Aarhus, Denmark
* Peter Scholl, Aarhus University, Aarhus, Denmark
* Alex J. Malozemoff, Galois, Inc., Portland, USA
* Marc B. Rosen, Galois, Inc., Portland, USA
### Abstract
> Zero knowledge proofs are an important building block in many cryptographic applications. Unfortunately, when the proof statements become very large, existing zero-knowledge proof systems easily reach their limits: either the computational overhead, the memory footprint, or the required bandwidth exceed levels that would be tolerable in practice.
> 
> We present an interactive zero-knowledge proof system for boolean and arithmetic circuits, called \(\mathsf {Mac'n'Cheese}\), with a focus on supporting large circuits. Our work follows the commit-and-prove paradigm instantiated using information-theoretic MACs based on vector oblivious linear evaluation to achieve high efficiency. We additionally show how to optimize disjunctions, with a general OR transformation for proving the disjunction of m statements that has communication complexity proportional to the longest statement (plus an additive term logarithmic in m). These disjunctions can further be nested, allowing efficient proofs about complex statements with many levels of disjunctions. We also show how to make \(\mathsf {Mac'n'Cheese}\) non-interactive (after a preprocessing phase) using the Fiat-Shamir transform, and with only a small degradation in soundness.
> 
> We have implemented the online phase of \(\mathsf {Mac'n'Cheese}\) and achieve a runtime of 144 ns per AND gate and 1.5 \(\upmu \)s per multiplication gate in \(\mathbb {F} _{2^{61} - 1} \) when run over a network with a 95 ms latency and a bandwidth of 31.5 Mbps. In addition, we show that the disjunction optimization improves communication as expected: when proving a boolean circuit with eight branches and each branch containing roughly 1 billion multiplications, \(\mathsf {Mac'n'Cheese}\) requires only 75 more bytes to communicate than in the single branch case.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_4](https://doi.org/10.1007/978-3-030-84259-8_4)
## Time- and Space-Efficient Arguments from Groups of Unknown Order.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-4].md#time-and-space-efficient-arguments-from-groups-of-unknown-order)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-4].md#time-and-space-efficient-arguments-from-groups-of-unknown-order)
### Authors
* Alexander R. Block, Purdue University, West Lafayette, USA
* Justin Holmgren, NTT Research, Sunnyvale, CA, USA
* Alon Rosen, IDC Herzliya, Herzliya, Israel
* Ron D. Rothblum, Technion, Haifa, Israel
* Pratik Soni, Carnegie Mellon University, Pittsburgh, USA
### Abstract
> We construct public-coin time- and space-efficient zero-knowledge arguments for \(\mathbf {NP} \). For every time T and space S non-deterministic RAM computation, the prover runs in time \(T \cdot {{\,\mathrm{polylog}\,}}(T)\) and space \(S \cdot {{\,\mathrm{polylog}\,}}(T)\), and the verifier runs in time \(n \cdot {{\,\mathrm{polylog}\,}}(T)\), where n is the input length. Our protocol relies on hidden order groups, which can be instantiated with a trusted setup from the hardness of factoring (products of safe primes), or without a trusted setup using class groups. The argument-system can heuristically be made non-interactive using the Fiat-Shamir transform.
> 
> Our proof builds on DARK (Bünz et al., Eurocrypt 2020), a recent succinct and efficiently verifiable polynomial commitment scheme. We show how to implement a variant of DARK in a time- and space-efficient way. Along the way we:
> 
> 1. Identify a significant gap in the proof of security of DARK.
> 
> 2. Give a non-trivial modification of the DARK scheme that overcomes the aforementioned gap. The modified version also relies on significantly weaker cryptographic assumptions than those in the original DARK scheme. Our proof utilizes ideas from the theory of integer lattices in a novel way.
> 
> 3. Generalize Pietrzak’s (ITCS 2019) proof of exponentiation (\(\mathsf {PoE}\)) protocol to work with general groups of unknown order (without relying on any cryptographic assumption).
> 
> In proving these results, we develop general-purpose techniques for working with (hidden order) groups, which may be of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_5](https://doi.org/10.1007/978-3-030-84259-8_5)
## Broadcast Encryption with Size N1/3 and More from k-Lin.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-4].md#broadcast-encryption-with-size-n1-3-and-more-from-k-lin)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-4].md#broadcast-encryption-with-size-n1-3-and-more-from-k-lin)
### Authors
* Hoeteck Wee, NTT Research, California, USA
* Hoeteck Wee, ENS, Paris, France
### Abstract
> We present the first pairing-based ciphertext-policy attribute-based encryption (CP-ABE) scheme for the class of degree 3 polynomials with compact parameters: the public key, ciphertext and secret keys comprise O(n) group elements, where n is input length for the function. As an immediate corollary, we obtain a pairing-based broadcast encryption scheme for N users with \(O(N^{1/3})\)-sized parameters, breaking the long-standing \(\sqrt{N}\) barrier for pairing-based broadcast encryption. All of our constructions achieve adaptive security against unbounded collusions, and rely on the (bilateral) k-Lin assumption in prime-order bilinear groups.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_6](https://doi.org/10.1007/978-3-030-84259-8_6)
## Fine-Grained Secure Attribute-Based Encryption.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-4].md#fine-grained-secure-attribute-based-encryption)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-4].md#fine-grained-secure-attribute-based-encryption)
### Authors
* Yuyu Wang, University of Electronic Science and Technology of China, Chengdu, China
* Jiaxin Pan, Department of Mathematical Sciences, NTNU - Norwegian University of Science and Technology, Trondheim, Norway
* Yu Chen, School of Cyber Science and Technology, Shandong University, Qingdao, 266237, China
* Yu Chen, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Yu Chen, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Qingdao, 266237, China
### Abstract
> Fine-grained cryptography is constructing cryptosystems in a setting where an adversary’s resource is a-prior bounded and an honest party has less resource than an adversary. Currently, only simple form of encryption schemes, such as secret-key and public-key encryption, are constructed in this setting.
> 
> In this paper, we enrich the available tools in fine-grained cryptography by proposing the first fine-grained secure attribute-based encryption (ABE) scheme. Our construction is adaptively secure under the widely accepted worst-case assumption, \(\mathsf {NC^1}\subsetneq \mathsf{\oplus L/poly}\), and it is presented in a generic manner using the notion of predicate encodings (Wee, TCC’14). By properly instantiating the underlying encoding, we can obtain different types of ABE schemes, including identity-based encryption. Previously, all of these schemes were unknown in fine-grained cryptography. Our main technical contribution is constructing ABE schemes without using pairing or the Diffie-Hellman assumption. Hence, our results show that, even if one-way functions do not exist, we still have ABE schemes with meaningful security. For more application of our techniques, we construct an efficient (quasi-adaptive) non-interactive zero-knowledge (QA-NIZK) proof system.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_7](https://doi.org/10.1007/978-3-030-84259-8_7)
## Multi-input Quadratic Functional Encryption from Pairings.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-4].md#multi-input-quadratic-functional-encryption-from-pairings)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-4].md#multi-input-quadratic-functional-encryption-from-pairings)
### Authors
* Shweta Agrawal, IIT Madras, Chennai, India
* Rishab Goyal, MIT, Cambridge, USA
* Junichi Tomida, NTT Corporation, Tokyo, Japan
### Abstract
> We construct the first multi-input functional encryption (MIFE) scheme for quadratic functions from pairings. Our construction supports polynomial number of users, where user i, for \(i \in [n]\), encrypts input \(\mathbf{x}_i \in \mathbb {Z}^m\) to obtain ciphertext \(\mathsf {CT}_i\), the key generator provides a key \(\mathsf {SK}_\mathbf{c}\) for vector \(\mathbf{c} \in \mathbb {Z}^{({mn})^2}\) and decryption, given \(\mathsf {CT}_1,\ldots ,\mathsf {CT}_n\) and \(\mathsf {SK}_\mathbf{c}\), recovers \(\langle \mathbf{c}, \mathbf{x} \otimes \mathbf{x} \rangle \) and nothing else. We achieve indistinguishability-based (selective) security against unbounded collusions under the standard bilateral matrix Diffie-Hellman assumption. All previous MIFE schemes either support only inner products (linear functions) or rely on strong cryptographic assumptions such as indistinguishability obfuscation or multi-linear maps.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_8](https://doi.org/10.1007/978-3-030-84259-8_8)
## Functional Encryption for Turing Machines with Dynamic Bounded Collusion from LWE.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-4].md#functional-encryption-for-turing-machines-with-dynamic-bounded-collusion-from-lwe)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-4].md#functional-encryption-for-turing-machines-with-dynamic-bounded-collusion-from-lwe)
### Authors
* Shweta Agrawal, IIT Madras, Chennai, India
* Narasimha Sai Vempati, IIT Madras, Chennai, India
* Monosij Maitra, TU Darmstadt, Darmstadt, Germany
* Shota Yamada, AIST Japan, Tsukuba, Japan
### Abstract
> The classic work of Gorbunov, Vaikuntanathan and Wee (CRYPTO 2012) and follow-ups provided constructions of bounded collusion Functional Encryption (FE) for circuits from mild assumptions. In this work, we improve the state of affairs for bounded collusion FE in several ways:
> 
> 1. New Security Notion. We introduce the notion of dynamic bounded collusion FE, where the declaration of collusion bound is delayed to the time of encryption. This enables the encryptor to dynamically choose the collusion bound for different ciphertexts depending on their individual level of sensitivity. Hence, the ciphertext size grows linearly with its own collusion bound and the public key size is independent of collusion bound. In contrast, all prior constructions have public key and ciphertext size that grow at least linearly with a fixed bound Q.
> 
> 2. CPFE for circuits with Dynamic Bounded Collusion. We provide the first CPFE schemes for circuits enjoying dynamic bounded collusion security. By assuming identity based encryption (IBE), we construct CPFE for circuits of unbounded size satisfying non-adaptive simulation based security. By strengthening the underlying assumption to IBE with receiver selective opening security, we obtain CPFE for circuits of bounded size enjoying adaptive simulation based security. Moreover, we show that IBE is a necessary assumption for these primitives. Furthermore, by relying on the Learning With Errors (LWE) assumption, we obtain the first succinct CPFE for circuits, i.e. supporting circuits with unbounded size, but fixed output length and depth. This scheme achieves adaptive simulation based security.
> 
> 3. KPFE for circuits with dynamic bounded collusion. We provide the first KPFE for circuits of unbounded size, but bounded depth and output length satisfying dynamic bounded collusion security from LWE. Our construction achieves adaptive simulation security improving security of [20].
> 
> 4. KP and CP FE for TM/NL with dynamic bounded collusion. We provide the first KPFE and CPFE constructions of bounded collusion functional encryption for Turing machines in the public key setting from LWE. Our constructions achieve non-adaptive simulation based security. Both the input and the machine in our construction can be of unbounded polynomial length.
> 
> We provide a variant of the above scheme that satisfies adaptive security, but at the cost of supporting a smaller class of computation, namely Nondeterministic Logarithmic-space (NL). Since NL contains Nondeterministic Finite Automata (NFA), this result subsumes all prior work of bounded collusion FE for uniform models from standard assumptions [7, 9].

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_9](https://doi.org/10.1007/978-3-030-84259-8_9)
## Receiver-Anonymity in Rerandomizable RCCA-Secure Cryptosystems Resolved.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-4].md#receiver-anonymity-in-rerandomizable-rcca-secure-cryptosystems-resolved)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-4].md#receiver-anonymity-in-rerandomizable-rcca-secure-cryptosystems-resolved)
### Authors
* Yi Wang, School of Computer, National University of Defense Technology, Changsha, China
* Rongmao Chen, School of Computer, National University of Defense Technology, Changsha, China
* Baosheng Wang, School of Computer, National University of Defense Technology, Changsha, China
* Guomin Yang, Institute of Cybersecurity and Cryptology, School of Computing and Information Technology, University of Wollongong, Wollongong, NSW, 2522, Australia
* Xinyi Huang, Fujian Provincial Key Laboratory of Network Security and Cryptology, College of Mathematics and Informatics, Fujian Normal University, Fuzhou, China
* Moti Yung, Google LLC, New York, NY, USA
* Moti Yung, Columbia University, New York, USA
### Abstract
> In this work we resolve the open problem raised by Prabhakaran and Rosulek at CRYPTO 2007, and present the first anonymous, rerandomizable, Replayable-CCA (RCCA) secure public-key encryption scheme. This solution opens the door to numerous privacy-oriented applications with a highly desired RCCA security level. At the core of our construction is a non-trivial extension of smooth projective hash functions (Cramer and Shoup, EUROCRYPT 2002), and a modular generic framework developed for constructing rerandomizable RCCA-secure encryption schemes with receiver-anonymity. The framework gives an enhanced abstraction of the original Prabhakaran and Rosulek’s scheme (which was the first construction of rerandomizable RCCA-secure encryption in the standard model), where the most crucial enhancement is the first realization of the desirable property of receiver-anonymity, essential to privacy settings. It also serves as a conceptually more intuitive and generic understanding of RCCA security, which leads, for example, to new implementations of the notion. Finally, note that (since CCA security is not applicable to the privacy applications motivating our work) the concrete results and the conceptual advancement presented here, seem to substantially expand the power and relevance of the notion of rerandomizable RCCA-secure encryption.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_10](https://doi.org/10.1007/978-3-030-84259-8_10)
## White Box Traitor Tracing.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-4].md#white-box-traitor-tracing)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-4].md#white-box-traitor-tracing)
### Authors
* Mark Zhandry, Princeton University, Princeton, USA
* Mark Zhandry, NTT Research, Sunnyvale, USA
### Abstract
> Traitor tracing aims to identify the source of leaked decryption keys. Since the “traitor” can try to hide their key within obfuscated code in order to evade tracing, the tracing algorithm should work for general, potentially obfuscated, decoder programs. In the setting of such general decoder programs, prior work uses black box tracing: the tracing algorithm ignores the implementation of the decoder, and instead traces just by making queries to the decoder and observing the outputs.
> 
> We observe that, in some settings, such black box tracing leads to consistency and user privacy issues. On the other hand, these issues do not appear inherent to white box tracing, where the tracing algorithm actually inspects the decoder implementation. We therefore develop new white box traitor tracing schemes providing consistency and/or privacy. Our schemes can be instantiated under various assumptions ranging from public key encryption and NIZKs to indistinguishability obfuscation, with different trade-offs. To the best of our knowledge, ours is the first work to consider white box tracing in the general decoder setting.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_11](https://doi.org/10.1007/978-3-030-84259-8_11)
## Does Fiat-Shamir Require a Cryptographic Hash Function?
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-4].md#does-fiat-shamir-require-a-cryptographic-hash-function)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-4].md#does-fiat-shamir-require-a-cryptographic-hash-function)
### Authors
* Yilei Chen, Tsinghua University, Beijing, China
* Alex Lombardi, MIT, Cambridge, USA
* Fermi Ma, Princeton University, Princeton, USA
* Fermi Ma, NTT Research, Sunnyvale, USA
* Willy Quach, Northeastern University, Boston, USA
### Abstract
> The Fiat-Shamir transform is a general method for reducing interaction in public-coin protocols by replacing the random verifier messages with deterministic hashes of the protocol transcript. The soundness of this transformation is usually heuristic and lacks a formal security proof. Instead, to argue security, one can rely on the random oracle methodology, which informally states that whenever a random oracle soundly instantiates Fiat-Shamir, a hash function that is “sufficiently unstructured” (such as fixed-length SHA-2) should suffice. Finally, for some special interactive protocols, it is known how to (1) isolate a concrete security property of a hash function that suffices to instantiate Fiat-Shamir and (2) build a hash function satisfying this property under a cryptographic assumption such as Learning with Errors.
> 
> In this work, we abandon this methodology and ask whether Fiat-Shamir truly requires a cryptographic hash function. Perhaps surprisingly, we show that in two of its most common applications—building signature schemes as well as (general-purpose) non-interactive zero-knowledge arguments—there are sound Fiat-Shamir instantiations using extremely simple and non-cryptographic hash functions such as sum-mod-p or bit decomposition. In some cases, we make idealized assumptions (i.e., we invoke the generic group model), while in others, we prove soundness in the plain model.
> 
> On the negative side, we also identify important cases in which a cryptographic hash function is provably necessary to instantiate Fiat-Shamir. We hope this work leads to an improved understanding of the precise role of the hash function in the Fiat-Shamir transformation.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_12](https://doi.org/10.1007/978-3-030-84259-8_12)
## Composition with Knowledge Assumptions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-4].md#composition-with-knowledge-assumptions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-4].md#composition-with-knowledge-assumptions)
### Authors
* Thomas Kerber, The University of Edinburgh and IOHK, Edinburgh, Scotland
* Aggelos Kiayias, The University of Edinburgh and IOHK, Edinburgh, Scotland
* Markulf Kohlweiss, The University of Edinburgh and IOHK, Edinburgh, Scotland
### Abstract
> Zero-knowledge succinct non-interactive arguments (zk-SNARKs) rely on knowledge assumptions for their security. Meanwhile, as the complexity and scale of cryptographic systems continues to grow, the composition of secure protocols is of vital importance. The current gold standards of composable security, the Universal Composability and Constructive Cryptography frameworks cannot capture knowledge assumptions, as their core proofs of composition prohibit white-box extraction. In this paper, we present a formal model allowing the composition of knowledge assumptions. Despite showing impossibility for the general case, we demonstrate the model’s usefulness when limiting knowledge assumptions to few instances of protocols at a time. We finish by providing the first instance of a simultaneously succinct and composable zk-SNARK, by using existing results within our framework.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_13](https://doi.org/10.1007/978-3-030-84259-8_13)
## Non-interactive Batch Arguments for NP from Standard Assumptions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-4].md#non-interactive-batch-arguments-for-np-from-standard-assumptions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-4].md#non-interactive-batch-arguments-for-np-from-standard-assumptions)
### Authors
* Arka Rai Choudhuri, Johns Hopkins University, Baltimore, USA
* Abhishek Jain, Johns Hopkins University, Baltimore, USA
* Zhengzhong Jin, Johns Hopkins University, Baltimore, USA
### Abstract
> We study the problem of designing non-interactive batch arguments for \(\mathsf {NP}\). Such an argument system allows an efficient prover to prove multiple \(\mathsf {NP}\) statements, with size smaller than the combined witness length.
> 
> We provide the first construction of such an argument system for \(\mathsf {NP}\) in the common reference string model based on standard cryptographic assumptions. Prior works either require non-standard assumptions (or the random oracle model) or can only support private verification.
> 
> At the heart of our result is a new dual mode interactive batch argument system for \(\mathsf {NP}\). We show how to apply the correlation-intractability framework for Fiat-Shamir – that has primarily been applied to proof systems – to such interactive arguments.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_14](https://doi.org/10.1007/978-3-030-84259-8_14)
## Targeted Lossy Functions and Applications.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-4].md#targeted-lossy-functions-and-applications)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-4].md#targeted-lossy-functions-and-applications)
### Authors
* Willy Quach, Northeastern University, Boston, USA
* Daniel Wichs, Northeastern University, Boston, USA
* Brent Waters, UT Austin, Austin, USA
* Brent Waters, NTT Research, Sunnyvale, USA
* Daniel Wichs, NTT Research, Sunnyvale, USA
### Abstract
> Lossy trapdoor functions, introduced by Peikert and Waters (STOC ’08), can be initialized in one of two indistinguishable modes: in injective mode, the function preserves all information about its input, and can be efficiently inverted given a trapdoor, while in lossy mode, the function loses some information about its input. Such functions have found countless applications in cryptography, and can be constructed from a variety of Cryptomania assumptions. In this work, we introduce targeted lossy functions (TLFs), which relax lossy trapdoor functions along two orthogonal dimensions. Firstly, they do not require an inversion trapdoor in injective mode. Secondly, the lossy mode of the function is initialized with some target input, and the function is only required to lose information about this particular target. The injective and lossy modes should be indistinguishable even given the target. We construct TLFs from Minicrypt assumptions, namely, injective pseudorandom generators, or even one-way functions under a natural relaxation of injectivity. We then generalize TLFs to incorporate branches, and construct all-injective-but-one and all-lossy-but-one variants. We show a wide variety of applications of targeted lossy functions. In several cases, we get the first Minicrypt constructions of primitives that were previously only known under Cryptomania assumptions. Our applications include:
> 
> Pseudo-entropy functions from one-way functions.
> 
> Deterministic leakage-resilient message-authentication codes and improved leakage-resilient symmetric-key encryption from one-way functions.
> 
> Extractors for extractor-dependent sources from one-way functions.
> 
> Selective-opening secure symmetric-key encryption from one-way functions.
> 
> A new construction of CCA PKE from (exponentially secure) trapdoor functions and injective pseudorandom generators.
> 
> We also discuss a fascinating connection to distributed point functions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_15](https://doi.org/10.1007/978-3-030-84259-8_15)
## The t-wise Independence of Substitution-Permutation Networks.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-4].md#the-t-wise-independence-of-substitution-permutation-networks)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-4].md#the-t-wise-independence-of-substitution-permutation-networks)
### Authors
* Tianren Liu, University of Washington, Seattle, WA, USA
* Stefano Tessaro, University of Washington, Seattle, WA, USA
* Vinod Vaikuntanathan, MIT, Cambridge, MA, USA
### Abstract
> Block ciphers such as the Advanced Encryption Standard (Rijndael) are used extensively in practice, yet our understanding of their security continues to be highly incomplete. This paper promotes and continues a research program aimed at proving the security of block ciphers against important and well-studied classes of attacks. In particular, we initiate the study of (almost) t-wise independence of concrete block-cipher construction paradigms such as substitution-permutation networks and key-alternating ciphers. Sufficiently strong (almost) pairwise independence already suffices to resist (truncated) differential attacks and linear cryptanalysis, and hence this is a relevant and meaningful target. Our results are two-fold.
> 
> Our first result concerns substitution-permutation networks (SPNs) that model ciphers such as AES. We prove the almost pairwise-independence of an SPN instantiated with concrete S-boxes together with an appropriate linear mixing layer, given sufficiently many rounds and independent sub-keys. Our proof relies on a characterization of S-box computation on input differences in terms of sampling output differences from certain subspaces, and a new randomness extraction lemma (which we prove with Fourier-analytic techniques) that establishes when such sampling yields uniformity. We use our techniques in particular to prove almost pairwise-independence for sufficiently many rounds of both the AES block cipher (which uses a variant of the patched inverse function \(x \mapsto x^{-1}\) as the S-box) and the MiMC block cipher (which uses the cubing function \(x \mapsto x^3\) as the S-box), assuming independent sub-keys.
> 
> Secondly, we show that instantiating a key-alternating cipher (which can be thought of as a degenerate case of SPNs) with most permutations gives us (almost) t-wise independence in \(t + o(t)\) rounds. In order to do this, we use the probabilistic method to develop two new lemmas, an independence-amplification lemma and a distance amplification lemma, that allow us to reason about the evolution of key-alternating ciphers.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_16](https://doi.org/10.1007/978-3-030-84259-8_16)
## Low-Complexity Weak Pseudorandom Functions in $\mathtt {AC}0[\mathtt {MOD}2]$.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-4].md#low-complexity-weak-pseudorandom-functions-in-mathtt-ac-0-mathtt-mod-2)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-4].md#low-complexity-weak-pseudorandom-functions-in-mathtt-ac-0-mathtt-mod-2)
### Authors
* Elette Boyle, IDC Herzliya, Herzliya, Israel
* Geoffroy Couteau, IRIF, Paris, France
* Niv Gilboa, Ben-Gurion University, Beersheba, Israel
* Yuval Ishai, Technion, Haifa, Israel
* Lisa Kohl, Cryptology Group, CWI Amsterdam, Amsterdam, The Netherlands
* Peter Scholl, Aarhus University, Aarhus, Denmark
### Abstract
> A weak pseudorandom function (WPRF) is a keyed function \(f_k:\{0,1\}^n\rightarrow \{0,1\}\) such that, for a random key k, a collection of samples \((x, f_k(x))\), for uniformly random inputs x, cannot be efficiently distinguished from totally random input-output pairs (x, y). We study WPRFs in \(\mathtt {AC}0[\mathtt {MOD}2] \), the class of functions computable by \(\mathtt {AC}0 \) circuits with parity gates, making the following contributions.
> 
> WPRF by sparse polynomials. We propose the first WPRF candidate that can be computed by sparse multivariate polynomials over \(\mathbb {F}_2\). We prove that it has subexponential security against linear and algebraic attacks.
> 
> WPRF in \(\mathtt {AC}0\circ \mathtt {MOD}2 \). We study the existence of WPRFs computed by \(\mathtt {AC}0\) circuits over parity gates. We propose a modified version of a previous WPRF candidate of Akavia et al. (ITCS 2014), and prove that it resists the algebraic attacks that were used by Bogdanov and Rosen (ECCC 2017) to break the original candidate in quasipolynomial time. We give evidence against the possibility of using public parity gates and relate this question to other conjectures.
> 
> Between Lapland and Cryptomania. We show that WPRFs in \(\mathtt {AC}0[\mathtt {MOD}2] \) imply a variant of the Learning Parity with Noise (LPN) assumption. We further show that WPRFs in a subclass of \(\mathtt {AC}0[\mathtt {MOD}2] \) that includes a recent candidate by Boyle et al. (FOCS 2020) imply, under a seemingly weak additional conjecture, public-key encryption.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_17](https://doi.org/10.1007/978-3-030-84259-8_17)
## MPC-Friendly Symmetric Cryptography from Alternating Moduli: Candidates, Protocols, and Applications.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-4].md#mpc-friendly-symmetric-cryptography-from-alternating-moduli-candidates-protocols-and-applications)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-4].md#mpc-friendly-symmetric-cryptography-from-alternating-moduli-candidates-protocols-and-applications)
### Authors
* Itai Dinur, Ben-Gurion University, Beersheba, Israel
* Steven Goldfeder, Cornell Tech, New York, USA
* Mahimna Kelkar, Cornell Tech, New York, USA
* Tzipora Halevi, Brooklyn College, CUNY, New York, USA
* Yuval Ishai, Technion, Haifa, Israel
* Mahimna Kelkar, Cornell University, Ithaca, USA
* Vivek Sharma, Graduate Center, CUNY, New York, USA
* Greg Zaverucha, Microsoft Research, Redmond, USA
### Abstract
> We study new candidates for symmetric cryptographic primitives that leverage alternation between linear functions over \(\mathbb {Z}_2\) and \(\mathbb {Z}_3\) to support fast protocols for secure multiparty computation (MPC). This continues the study of weak pseudorandom functions of this kind initiated by Boneh et al. (TCC 2018) and Cheon et al. (PKC 2021).
> 
> We make the following contributions.
> 
> Candidates. We propose new designs of symmetric primitives based on alternating moduli. These include candidate one-way functions, pseudorandom generators, and weak pseudorandom functions. We propose concrete parameters based on cryptanalysis.
> 
> Protocols. We provide a unified approach for securely evaluating modulus-alternating primitives in different MPC models. For the original candidate of Boneh et al., our protocols obtain at least 2x improvement in all performance measures. We report efficiency benchmarks of an optimized implementation.
> 
> Applications. We showcase the usefulness of our candidates for a variety of applications. This includes short “Picnic-style” signature schemes, as well as protocols for oblivious pseudorandom functions, hierarchical key derivation, and distributed key generation for function secret sharing.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_18](https://doi.org/10.1007/978-3-030-84259-8_18)
## No Time to Hash: On Super-Efficient Entropy Accumulation.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-4].md#no-time-to-hash-on-super-efficient-entropy-accumulation)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-4].md#no-time-to-hash-on-super-efficient-entropy-accumulation)
### Authors
* Yevgeniy Dodis, New York University, New York, NY, USA
* Siyao Guo, New York University Shanghai, Shanghai, China
* Zhiye Xie, New York University Shanghai, Shanghai, China
* Noah Stephens-Davidowitz, Cornell University, Ithaca, NY, USA
### Abstract
> Real-world random number generators (RNGs) cannot afford to use (slow) cryptographic hashing every time they refresh their state R with a new entropic input X. Instead, they use “superefficient” simple entropy-accumulation procedures, such as
> 
> where \(\mathsf {rot}_{\alpha ,n}\) rotates an n-bit state R by some fixed number \(\alpha \). For example, Microsoft’s RNG uses \(\alpha =5\) for \(n=32\) and \(\alpha =19\) for \(n=64\). Where do these numbers come from? Are they good choices? Should rotation be replaced by a better permutation \(\pi \) of the input bits?
> 
> In this work we initiate a rigorous study of these pragmatic questions, by modeling the sequence of successive entropic inputs \(X_1,X_2,\ldots \) as independent (but otherwise adversarial) samples from some natural distribution family \(\mathcal{D}\). Our contribution is as follows.
> 
> We define 2-monotone distributions as a rich family \(\mathcal{D}\) that includes relevant real-world distributions (Gaussian, exponential, etc.), but avoids trivial impossibility results.
> 
> For any \(\alpha \) with \(\gcd (\alpha ,n)=1\), we show that rotation accumulates \(\varOmega (n)\) bits of entropy from n independent samples \(X_1,\ldots ,X_n\) from any (unknown) 2-monotone distribution with entropy \(k > 1\).
> 
> However, we also show some choices of \(\alpha \) perform much better than others for a given n. E.g., we show \(\alpha =19\) is one of the best choices for \(n=64\); in contrast, \(\alpha =5\) is good, but generally worse than \(\alpha =7\), for \(n=32\).
> 
> More generally, given a permutation \(\pi \) and \(k\ge 1\), we define a simple parameter, the covering number \(C_{\pi ,k}\), and show that it characterizes the number of steps before the rule
> 
> accumulates nearly n bits of entropy from independent, 2-monotone samples of min-entropy k each.
> 
> We build a simple permutation \(\pi ^*\), which achieves nearly optimal \(C_{\pi ^*,k}\approx n/k\) for all values of k simultaneously, and experimentally validate that it compares favorably with all rotations \(\mathsf {rot}_{\alpha ,n}\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_19](https://doi.org/10.1007/978-3-030-84259-8_19)
## A Logarithmic Lower Bound for Oblivious RAM (for All Parameters).
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-4].md#a-logarithmic-lower-bound-for-oblivious-ram-for-all-parameters)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-4].md#a-logarithmic-lower-bound-for-oblivious-ram-for-all-parameters)
### Authors
* Ilan Komargodski, Hebrew University, Jerusalem, Israel
* Ilan Komargodski, NTT Research, Sunnyvale, CA, USA
* Wei-Kai Lin, Cornell University, Ithaca, USA
### Abstract
> An Oblivious RAM (ORAM), introduced by Goldreich and Ostrovsky (J. ACM 1996), is a (probabilistic) RAM that hides its access pattern, i.e., for every input the observed locations accessed are similarly distributed. In recent years there has been great progress both in terms of upper bounds as well as in terms of lower bounds, essentially pinning down the smallest overhead possible in various settings of parameters.
> 
> We observe that there is a very natural setting of parameters in which no non-trivial lower bound is known, even not ones in restricted models of computation (like the so called balls and bins model). Let N and \({\boldsymbol{w}}\) be the number of cells and bit-size of cells, respectively, in the RAM that we wish to simulate obliviously. Denote by \({\boldsymbol{b}}\) the cell bit-size of the ORAM. All previous ORAM lower bounds have a multiplicative \({\boldsymbol{w}}/{\boldsymbol{b}}\) factor which makes them trivial in many settings of parameters of interest.
> 
> In this work, we prove a new ORAM lower bound that captures this setting (and in all other settings it is at least as good as previous ones, quantitatively). We show that any ORAM must make (amortized)
> 
> memory probes for every logical operation. Here, m denotes the bit-size of the local storage of the ORAM. Our lower bound implies that logarithmic overhead in accesses is necessary, even if \( {\boldsymbol{b}}\gg {\boldsymbol{w}}\). Our lower bound is tight for all settings of parameters, up to the \(\log ({\boldsymbol{b}}/{\boldsymbol{w}})\) factor. Our bound also extends to the non-colluding multi-server setting.
> 
> As an application, we derive the first (unconditional) separation between the overhead needed for ORAMs in the online vs. offline models. Specifically, we show that when \({\boldsymbol{w}}=\log N\) and , there exists an offline ORAM that makes (on average) o(1) memory probes per logical operation while every online one must make \(\varOmega (\log N/\log \log N)\) memory probes per logical operation. No such previous separation was known for any setting of parameters, not even in the balls and bins model.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_20](https://doi.org/10.1007/978-3-030-84259-8_20)
## Oblivious RAM with Worst-Case Logarithmic Overhead.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-4].md#oblivious-ram-with-worst-case-logarithmic-overhead)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-4].md#oblivious-ram-with-worst-case-logarithmic-overhead)
### Authors
* Gilad Asharov, Bar-Ilan University, Ramat Gan, Israel
* Ilan Komargodski, Hebrew University of Jerusalem, Jerusalem, Israel
* Ilan Komargodski, NTT Research, Sunnyvale, CA, USA
* Wei-Kai Lin, Cornell University, New York, USA
* Elaine Shi, CMU, Pittsburgh, USA
### Abstract
> We present the first Oblivious RAM (ORAM) construction that for N memory blocks supports accesses with worst-case \(O(\log N)\) overhead for any block size \(\varOmega (\log N)\) while requiring a client memory of only a constant number of memory blocks. We rely on the existence of one-way functions and guarantee computational security. Our result closes a long line of research on fundamental feasibility results for ORAM constructions as logarithmic overhead is necessary.
> 
> The previous best logarithmic overhead construction only guarantees it in an amortized sense, i.e., logarithmic overhead is achieved only for long enough access sequences, where some of the individual accesses incur \(\varTheta (N)\) overhead. The previously best ORAM in terms of worst-case overhead achieves \(O(\log ^2 N/\log \log N)\) overhead.
> 
> Technically, we design a novel de-amortization framework for modern ORAM constructions that use the “shuffled inputs” assumption. Our framework significantly departs from all previous de-amortization frameworks, originating from Ostrovsky and Shoup (STOC ’97), that seem to be fundamentally too weak to be applied on modern ORAM constructions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_21](https://doi.org/10.1007/978-3-030-84259-8_21)
## Puncturable Pseudorandom Sets and Private Information Retrieval with Near-Optimal Online Bandwidth and Time.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-4].md#puncturable-pseudorandom-sets-and-private-information-retrieval-with-near-optimal-online-bandwidth-and-time)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-4].md#puncturable-pseudorandom-sets-and-private-information-retrieval-with-near-optimal-online-bandwidth-and-time)
### Authors
* Elaine Shi, CMU, Pittsburgh, USA
* Waqar Aqeel, Duke, Durham, USA
* Bruce Maggs, Duke, Durham, USA
* Balakrishnan Chandrasekaran, Vrije Universiteit Amsterdam, Amsterdam, The Netherlands
### Abstract
> Imagine one or more non-colluding servers each holding a large public database, e.g., the repository of DNS entries. Clients would like to access entries in this database without disclosing their queries to the servers. Classical private information retrieval (PIR) schemes achieve polylogarithmic bandwidth per query, but require the server to perform linear computation per query, which is a significant barrier towards deployment.
> 
> Several recent works showed, however, that by introducing a one-time, per-client, off-line preprocessing phase, an unbounded number of client queries can be subsequently served with sublinear online computation time per query (and the cost of the preprocessing can be amortized over the unboundedly many queries). Existing preprocessing PIR schemes (supporting unbounded queries), unfortunately, make undesirable tradeoffs to achieve sublinear online computation: they are either significantly non-optimal in online time or bandwidth, or require the servers to store a linear amount of state per client or even per query, or require polylogarithmically many non-colluding servers.
> 
> We propose a novel 2-server preprocessing PIR scheme that achieves \(\widetilde{O}(\sqrt{n})\) online computation per query and \(\widetilde{O}(\sqrt{n})\) client storage, while preserving the polylogarithmic online bandwidth of classical PIR schemes. Both the online bandwidth and computation are optimal up to a poly-logarithmic factor. In our construction, each server stores only the original database and nothing extra, and each online query is served within a single round trip. Our construction relies on the standard LWE assumption. As an important stepping stone, we propose new, more generalized definitions for a cryptographic object called a Privately Puncturable Pseudorandom Set, and give novel constructions that depart significantly from prior approaches.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_22](https://doi.org/10.1007/978-3-030-84259-8_22)
## Authenticated Key Exchange and Signatures with Tight Security in the Standard Model.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-4].md#authenticated-key-exchange-and-signatures-with-tight-security-in-the-standard-model)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-4].md#authenticated-key-exchange-and-signatures-with-tight-security-in-the-standard-model)
### Authors
* Shuai Han, School of Electronic Information and Electrical Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Shengli Liu, School of Electronic Information and Electrical Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Shuai Han, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Shengli Liu, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Tibor Jager, Bergische Universität Wuppertal, Wuppertal, Germany
* Eike Kiltz, Ruhr-Universität Bochum, Bochum, Germany
* Doreen Riepel, Ruhr-Universität Bochum, Bochum, Germany
* Sven Schäge, Ruhr-Universität Bochum, Bochum, Germany
* Shengli Liu, Westone Cryptologic Research Center, Beijing, 100070, China
* Jiaxin Pan, Department of Mathematical Sciences, NTNU – Norwegian University of Science and Technology, Trondheim, Norway
### Abstract
> We construct the first authenticated key exchange protocols that achieve tight security in the standard model. Previous works either relied on techniques that seem to inherently require a random oracle, or achieved only “Multi-Bit-Guess” security, which is not known to compose tightly, for instance, to build a secure channel.
> 
> Our constructions are generic, based on digital signatures and key encapsulation mechanisms (KEMs). The main technical challenges we resolve is to determine suitable KEM security notions which on the one hand are strong enough to yield tight security, but at the same time weak enough to be efficiently instantiable in the standard model, based on standard techniques such as universal hash proof systems.
> 
> Digital signature schemes with tight multi-user security in presence of adaptive corruptions are a central building block, which is used in all known constructions of tightly-secure AKE with full forward security. We identify a subtle gap in the security proof of the only previously known efficient standard model scheme by Bader et al. (TCC 2015). We develop a new variant, which yields the currently most efficient signature scheme that achieves this strong security notion without random oracles and based on standard hardness assumptions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_23](https://doi.org/10.1007/978-3-030-84259-8_23)
## KHAPE: Asymmetric PAKE from Key-Hiding Key Exchange.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-4].md#khape-asymmetric-pake-from-key-hiding-key-exchange)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-4].md#khape-asymmetric-pake-from-key-hiding-key-exchange)
### Authors
* Yanqi Gu, University of California, Irvine, Irvine, USA
* Stanislaw Jarecki, University of California, Irvine, Irvine, USA
* Hugo Krawczyk, Algorand Foundation, New York, USA
### Abstract
> OPAQUE [Jarecki et al., Eurocrypt 2018] is an asymmetric password authenticated key exchange (aPAKE) protocol that is being developed as an Internet standard and for use within TLS 1.3. OPAQUE combines an Oblivious PRF (OPRF) with an authenticated key exchange to provide strong security properties, including security against pre-computation attacks (called saPAKE security). However, the security of OPAQUE relies crucially on the security of the OPRF. If the latter breaks (by cryptanalysis, quantum attacks or security compromise), the user’s password is exposed to an offline dictionary attack. To address this weakness, we present KHAPE, a variant of OPAQUE that does not require the use of an OPRF to achieve aPAKE security, resulting in improved resilience and near-optimal computational performance. An OPRF can be optionally added to KHAPE, for enhanced saPAKE security, but without opening the password to an offline dictionary attack upon OPRF compromise.
> 
> In addition to resilience to OPRF compromise, a DH-based implementation of KHAPE (using HMQV) offers the best performance among aPAKE protocols in terms of exponentiations with less than the cost of an exponentiation on top of an UNauthenticated Diffie-Hellman exchange. KHAPE uses three messages if the server initiates the exchange or four when the client does (one more than OPAQUE in the latter case).
> 
> All results in the paper are proven within the UC framework in the ideal cipher model. Of independent interest is our treatment of key-hiding AKE which KHAPE uses as a main component as well as our UC proofs of AKE security for protocols 3DH (a basis of Signal), HMQV and SKEME, that we use as efficient instantiations of KHAPE.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_24](https://doi.org/10.1007/978-3-030-84259-8_24)
